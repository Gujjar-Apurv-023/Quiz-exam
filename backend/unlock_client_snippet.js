// Client-side snippet: request a time-limited single-use token, open view, and notify server if user leaves
// Usage: include this in your client app and adapt UI hooks as needed.

async function requestUnlock(username, examId, durationMinutes = 5) {
  const resp = await fetch('/api/unlock-answer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, examId, durationMinutes })
  });
  return resp.json();
}

// Call this to open and display the answer sheet
async function openAnswerView(username, examId, durationMinutes = 5) {
  const unlock = await requestUnlock(username, examId, durationMinutes);
  if (!unlock.success) {
    alert('Could not unlock answer sheet: ' + (unlock.message || 'unknown'));
    return;
  }

  const token = unlock.token;
  let viewed = false;
  let leftNotified = false;

  // Fetch disclaimer and require acceptance
  // Fetch disclaimer and token status (remaining attempts)
  const [discResp, statusResp] = await Promise.all([
    fetch('/api/answer-disclaimer'),
    fetch(`/api/token-status?token=${encodeURIComponent(token)}`)
  ]);
  const discJson = await discResp.json();
  const statusJson = await statusResp.json();
  if (!discJson.success || !statusJson.success) {
    alert('Could not retrieve disclaimer or token status.');
    return;
  }
  const remainingAttempts = statusJson.status.remainingAttempts;
  const disclaimerText = discJson.disclaimer.title + '\n\n' + discJson.disclaimer.rules.join('\n') + '\n\nRemaining attempts: ' + remainingAttempts;
  const accepted = confirm(disclaimerText + '\n\nDo you accept these rules and wish to proceed?');
  if (!accepted) {
    // notify server that user left without viewing
    navigator.sendBeacon('/api/answer-left', JSON.stringify({ token }));
    return;
  }

  function notifyLeft() {
    if (leftNotified || viewed) return;
    leftNotified = true;
    navigator.sendBeacon('/api/answer-left', JSON.stringify({ token }));
  }

  // Try to notify server if browser/tab is closed or navigated away (final block)
  window.addEventListener('beforeunload', notifyLeft);

  // On visibility change, record a focus-loss attempt but do NOT immediately block.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !viewed) {
      // best-effort POST with keepalive so it can fire during unload
      try {
        fetch('/api/focus-lost', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
          keepalive: true
        });
      } catch (e) {
        // fall back to beacon for very old browsers
        navigator.sendBeacon('/api/focus-lost', JSON.stringify({ token }));
      }
    }
  });

  // Fetch the answer sheet using the token (single-use)
  const resp = await fetch(`/api/answer-sheet?token=${encodeURIComponent(token)}&accepted=true`, { method: 'GET' });
  if (!resp.ok) {
    const txt = await resp.text();
    alert('Unable to fetch answer sheet: ' + txt);
    // mark left since we couldn't view
    notifyLeft();
    window.removeEventListener('beforeunload', notifyLeft);
    return;
  }

  const data = await resp.json();
  // Show success and remaining attempts
  alert('Answer sheet opened. Remaining attempts after this view: ' + (data.remaining || 0));
  // Display the answers in your UI; here's a simple example using a new window
  const w = window.open('', '_blank', 'noopener');
  if (w) {
    viewed = true;
    w.document.title = 'Answer Sheet';
    w.document.body.innerText = JSON.stringify(data.answers, null, 2);
    window.removeEventListener('beforeunload', notifyLeft);
  } else {
    viewed = true;
    alert('Answers:\n' + JSON.stringify(data.answers, null, 2));
    window.removeEventListener('beforeunload', notifyLeft);
  }
}

// Example usage:
// openAnswerView('candidate1', 'exam-aws-001', 5);
