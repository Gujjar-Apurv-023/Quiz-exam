# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 11

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
How can a company reduce its Total Cost of Ownership (TCO) using AWS?
*   A. By minimizing large capital expenditures.
*   B. By having no responsibility for third-party license costs.
*   C. By having no operational expenditures.
*   D. By having AWS manage applications.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. By minimizing large capital expenditures.**
*   **Explanation:** AWS replaces the need to pay large upfront capital expenditures (CapEx) to purchase and set up physical datacenters and servers with lower, variable pay-as-you-go operational expenditures (OpEx), which reduces overall TCO.
</details>

---

### **Question 2**
Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)
*   A. AWS Trusted Advisor.
*   B. AWS Online Tech Talks.
*   C. AWS Blog.
*   D. AWS Forums.
*   E. AWS Classroom Training.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Online Tech Talks.** & **E. AWS Classroom Training.**
*   **Explanation:**
    *   **AWS Classroom Training** (E) features live classes (in-person or virtual) led by accredited AWS instructors.
    *   **AWS Online Tech Talks** (B) are live, interactive webinars presented by AWS experts/instructors where users can ask questions in real-time.
</details>

---

### **Question 3**
Which of the following will enhance the security of access to the AWS Management Console? (Select TWO)
*   A. AWS Secrets Manager.
*   B. AWS Certificate Manager.
*   C. AWS Multi-Factor Authentication (AWS MFA).
*   D. Security groups.
*   E. Password policies.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Multi-Factor Authentication (AWS MFA).** & **E. Password policies.**
*   **Explanation:** Access to the console is secured by:
    *   **MFA** (C) which adds a second layer of authentication (e.g. dynamic token from virtual or hardware device).
    *   **Password policies** (E) which enforce complexity, rotation, and lockout guidelines.
</details>

---

### **Question 4**
Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)
*   A. Amazon CloudFront distributions.
*   B. Amazon Route 53.
*   C. Security Groups.
*   D. Subnets.
*   E. Elastic Load Balancing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Security Groups.** & **D. Subnets.**
*   **Explanation:** The **Amazon VPC Dashboard** is used to manage virtual networking resources, including **Subnets** (D) (IP address ranges within a VPC) and **Security Groups** (C) (instance-level firewalls).
</details>

---

### **Question 5**
For which auditing process does AWS have sole responsibility?
*   A. AWS IAM policies.
*   B. Physical security.
*   C. Amazon S3 bucket policies.
*   D. AWS CloudTrail Logs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Physical security.**
*   **Explanation:** In the Shared Responsibility Model, AWS is solely responsible for auditing the physical and environmental security of its data centers and underlying cloud hardware infrastructure. Customers audit their own IAM policies, S3 bucket policies, and CloudTrail log history.
</details>

---

### **Question 6**
Which of the following are advantages of AWS consolidated billing? (Select TWO)
*   A. The ability to receive one bill for multiple accounts.
*   B. Service limits increasing by default in all accounts.
*   C. A fixed discount on the monthly bill.
*   D. Potential volume discounts, as usage in all accounts is combined.
*   E. The automatic extension of the master account’s AWS support plan to all accounts.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. The ability to receive one bill for multiple accounts.** & **D. Potential volume discounts, as usage in all accounts is combined.**
*   **Explanation:** Consolidated billing under AWS Organizations provides:
    *   **One bill** (A) representing the combined charges of all member accounts.
    *   **Volume pricing discounts** (D) because usage across all accounts is aggregated, qualifying the organization for lower tier rates.
</details>

---

### **Question 7**
Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)
*   A. Patching databases software.
*   B. Testing application releases.
*   C. Backing up databases.
*   D. Creating database schema.
*   E. Running penetration tests.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Patching databases software.** & **C. Backing up databases.**
*   **Explanation:** By using managed services like Amazon RDS, AWS manages **patching database software** (A) and executing automated **database backups** (C), allowing IT staff to focus on other core tasks.
</details>

---

### **Question 8**
A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?
*   A. Contact an AWS Account Manager to sign a new contract.
*   B. Move an Availability Zone to the new Region.
*   C. Begin deploying resources in the second Region.
*   D. Download the AWS Management Console for the new Region.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Begin deploying resources in the second Region.**
*   **Explanation:** The AWS global infrastructure is on-demand. To start using a new Region, a customer simply selects that Region from the console/CLI/SDK dropdown and **begins deploying resources** there immediately.
</details>

---

### **Question 9**
Why is it beneficial to use Elastic Load Balancers with applications?
*   A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.
*   B. Balancers to Classic Load Balancers.
*   C. They are capable of handling constant changes in network traffic patterns.
*   D. They automatically adjust capacity. They are provided at no charge to users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. They are capable of handling constant changes in network traffic patterns.**
*   **Explanation:** Elastic Load Balancers automatically scale their routing and handling capacity in response to varying incoming traffic volumes, ensuring high availability and handling traffic fluctuations.
</details>

---

### **Question 10**
What is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
*   A. Enterprise.
*   B. Business.
*   C. Developer.
*   D. Basic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Business.**
*   **Explanation:** The **Business Support** plan guarantees a response time of less than 1 hour for production system down incidents, making it the minimum plan to meet this requirement.
</details>

---

### **Question 11**
What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
*   A. Amazon S3.
*   B. Amazon Glacier.
*   C. Amazon EBS.
*   D. Amazon EC2 Instance Store.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon S3.**
*   **Explanation:** Amazon S3 offers highly durable object storage at low cost with **immediate retrieval** support (via S3 Standard or S3 Standard-IA). Glacier requires minutes to hours for data retrieval, EC2 Instance Store is ephemeral (non-durable), and EBS is block storage meant for active EC2 instance mounting (which is more expensive than S3 per GB).
</details>

---

### **Question 12**
What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?
*   A. AWS Enterprise Support.
*   B. AWS Solutions Architects.
*   C. AWS Professional Services.
*   D. AWS Account Managers.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Professional Services.**
*   **Explanation:** **AWS Professional Services** is a global team of experts that assists customers through paid consulting engagements to design, build, and optimize their workloads on AWS.
</details>

---

### **Question 13**
A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?
*   A. Basic.
*   B. Developer.
*   C. Business.
*   D. Enterprise.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Business.**
*   **Explanation:** The **Business Support** plan is the lowest-cost plan that provides 24x7 phone, email, and chat support with <1 hour response times for production system disruptions.
</details>

---

### **Question 14**
If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
*   A. AWS Config.
*   B. AWS Trusted Advisor.
*   C. Amazon CloudWatch.
*   D. Amazon Inspector.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Config.**
*   **Explanation:** **AWS Config** is used to audit change management by tracking, recording, and evaluating configuration changes of AWS resources over time.
</details>

---

### **Question 15**
How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)
*   A. It identifies software vulnerabilities in applications running on AWS.
*   B. It provides a list of cost optimization recommendations based on current AWS usage.
*   C. It detects potential security vulnerabilities caused by permissions settings on account resources.
*   D. It automatically corrects potential security issues caused by permissions settings on account resources.
*   E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. It provides a list of cost optimization recommendations based on current AWS usage.** & **C. It detects potential security vulnerabilities caused by permissions settings on account resources.**
*   **Explanation:** Trusted Advisor checks resources against best practices and provides recommendations for:
    *   **Cost optimization** (B) (identifying idle resources).
    *   **Security vulnerabilities** (C) (flags open ports, weak IAM configuration).
</details>

---

### **Question 16**
Which AWS managed service is used to host databases?
*   A. AWS Batch.
*   B. AWS Artifact.
*   C. AWS Data Pipeline.
*   D. Amazon RDS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon RDS.**
*   **Explanation:** **Amazon RDS** (Relational Database Service) is the managed service used to set up, operate, and scale relational databases in the cloud.
</details>

---

### **Question 17**
Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
*   A. IAM group.
*   B. IAM user.
*   C. IAM role.
*   D. IAM policy.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. IAM user.**
*   **Explanation:** Access keys are associated directly with an **IAM User** to authenticate programmatic CLI/SDK commands under that user's identity.
</details>

---

### **Question 18**
Under the shared responsibility model, which of the following is the customer responsible for?
*   A. Ensuring that disk drives are wiped after use.
*   B. Ensuring that firmware is updated on hardware devices.
*   C. Ensuring that data is encrypted at rest.
*   D. Ensuring that network cables are category six or higher.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Ensuring that data is encrypted at rest.**
*   **Explanation:** Data security "in" the cloud, such as configuring encryption keys and applying encryption to data at rest, is the customer's responsibility.
</details>

---

### **Question 19**
Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
*   A. Amazon S3.
*   B. Amazon Glacier.
*   C. Amazon EBS.
*   D. Amazon EFS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EFS.**
*   **Explanation:** **Amazon Elastic File System (Amazon EFS)** is a managed network file system (NFS) that provides shared, scalable file storage for Linux instances and on-premises servers.
</details>

---

### **Question 20**
What credential components are required to gain programmatic access to an AWS account? (Select TWO)
*   A. An access key ID.
*   B. A primary key.
*   C. A secret access key.
*   D. A user ID.
*   E. A secondary key.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. An access key ID.** & **C. A secret access key.**
*   **Explanation:** Programmatic interactions with AWS APIs (using CLI, SDKs, or tools) require an **Access Key ID** (A) and a **Secret Access Key** (C).
</details>

---

### **Question 21**
Which of the following is a shared control between the customer and AWS?
*   A. Providing a key for Amazon S3 client-side encryption.
*   B. Configuration of an Amazon EC2 instance.
*   C. Environmental controls of physical AWS data centers.
*   D. Awareness.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Awareness.**
*   **Explanation:** **Awareness & Training** is a shared control: AWS trains its employees on security and infrastructure, and customers are responsible for training their own users on cloud security and IAM compliance.
</details>

---

### **Question 22**
Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?
*   A. Amazon EBS.
*   B. Amazon EC2 instance store.
*   C. Amazon EFS.
*   D. Amazon S3.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EC2 instance store.**
*   **Explanation:** **EC2 Instance Store** provides temporary, block-level storage located physically on the host computer. It is ephemeral; data is lost if the instance stops, terminates, or the host hardware fails.
</details>

---

### **Question 23**
Which of the following is an advantage of consolidated billing on AWS?
*   A. Volume pricing qualification.
*   B. Shared access permissions.
*   C. Multiple bills per account.
*   D. Eliminates the need for tagging.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Volume pricing qualification.**
*   **Explanation:** Consolidated billing combines usage across all linked accounts, which helps the company qualify for higher tier volume discounts on services like S3 and EC2.
</details>

---

### **Question 24**
Which services are parts of the AWS serverless platform?
*   A. Amazon EC2, Amazon S3, Amazon Athena.
*   B. Amazon Kinesis, Amazon SQS, Amazon EMR.
*   C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.
*   D. Amazon Athena, Amazon Cognito, Amazon EC2.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.**
*   **Explanation:** Serverless services require no server management from the customer. AWS Step Functions (orchestration), DynamoDB (NoSQL database), and SNS (notifications) are all fully serverless (C). EC2 and EMR require server provisioning and/or cluster sizing management.
</details>

---

### **Question 25**
Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?
*   A. Spot Instances.
*   B. Reserved Instances.
*   C. Dedicated Hosts.
*   D. On-Demand Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Dedicated Hosts.**
*   **Explanation:** **Dedicated Hosts** allocate a physical server dedicated entirely to the customer, supporting Bring Your Own License (BYOL) software models bound to sockets or cores.
</details>

---

### **Question 26**
Which of the following security measures protect access to an AWS account? (Select TWO)
*   A. Enable AWS CloudTrail.
*   B. Grant least privilege access to IAM users.
*   C. Create one IAM user and share with many developers and users.
*   D. Enable Amazon CloudFront.
*   E. Activate multi-factor authentication (MFA) for privileged users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Grant least privilege access to IAM users.** & **E. Activate multi-factor authentication (MFA) for privileged users.**
*   **Explanation:** Best practice security measures include:
    *   Granting **least privilege access** to IAM users (B) to limit exposure.
    *   Activating **MFA** for privileged users (E) to enforce multi-factor logins.
</details>

---

### **Question 27**
Which AWS service provides the ability to manage infrastructure as code?
*   A. AWS CodePipeline.
*   B. AWS CodeDeploy.
*   C. AWS Direct Connect.
*   D. AWS CloudFormation.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS CloudFormation.**
*   **Explanation:** **AWS CloudFormation** allows users to model and provision AWS infrastructure resources programmatically using JSON or YAML text files (Infrastructure as Code).
</details>

---

### **Question 28**
What is an advantage of deploying an application across multiple Availability Zones?
*   A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.
*   B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.
*   C. There will be better coverage as Availability Zones are geographically distant and can serve a wider area.
*   D. There will be decreased application latency that will improve the user experience.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.**
*   **Explanation:** Spreading instances across multiple AZs within a Region isolates them from power, water, or cooling failures in a single AZ, giving the system higher availability.
</details>

---

### **Question 29**
A customer needs to run a MySQL database that easily scales. Which AWS service should they use?
*   A. Amazon Aurora.
*   B. Amazon Redshift.
*   C. Amazon DynamoDB.
*   D. Amazon ElastiCache.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Aurora.**
*   **Explanation:** **Amazon Aurora** is a fully managed, MySQL and PostgreSQL-compatible relational database built for the cloud that easily and automatically scales compute and storage.
</details>

---

### **Question 30**
Which of the following is an AWS Cloud architecture design principle?
*   A. Implement single points of failure.
*   B. Implement loose coupling.
*   C. Implement monolithic design.
*   D. Implement vertical scaling.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Implement loose coupling.**
*   **Explanation:** Decoupled, loosely coupled architectures prevent localized failures from crashing adjacent services.
</details>

---

### **Question 31**
AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?
*   A. AWS Trusted Advisor.
*   B. AWS Support case.
*   C. Concierge team.
*   D. Amazon Connect.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Concierge team.**
*   **Explanation:** The **Concierge team** (assisting with billing, account settings, and best practices) is exclusively available to **Enterprise** Support plan members.
</details>

---

### **Question 32**
A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?
*   A. Moving from variable operational expense ( opex ) to upfront capital expense (capex).
*   B. Moving from upfront capital expense (capex) to variable capital expense (capex).
*   C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).
*   D. Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex ).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).**
*   **Explanation:** Cloud adoption moves companies from paying high upfront capital expenditures (CapEx) for datacenters/servers to variable pay-as-you-go operational expenditures (OpEx).
</details>

---

### **Question 33**
When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
*   A. Dedicated Hosts
*   B. Reserved Instances
*   C. On-Demand Instances
*   D. No Upfront Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Dedicated Hosts**
*   **Explanation:** **Dedicated Hosts** physically isolate customer workloads at the host level, ensuring no other customers share the physical hardware.
</details>

---

### **Question 34**
Which AWS service should be used for long-term, low-cost storage of data backups?
*   A. Amazon RDS.
*   B. Amazon Glacier.
*   C. AWS Snowball.
*   D. AWS EBS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Glacier.**
*   **Explanation:** **Amazon S3 Glacier** is optimized for cold data archives and backups, providing very low-cost long-term storage.
</details>

---

### **Question 35**
Which is the MINIMUM AWS Support plan that provides technical support through phone calls?
*   A. Enterprise.
*   B. Business.
*   C. Developer.
*   D. Basic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Business.**
*   **Explanation:** **Business** is the minimum support plan that allows phone and chat contact with AWS engineers 24/7. (Developer offers email support during business hours only; Basic offers no technical support).
</details>

---

### **Question 36**
Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
*   A. Reserved Instances.
*   B. On-Demand.
*   C. Dedicated Hosts.
*   D. Spot Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Spot Instances.**
*   **Explanation:** **Spot Instances** utilize spare EC2 capacity at steep discounts of up to 90% compared to standard On-Demand pricing.
</details>

---

### **Question 37**
Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)
*   A. appGateway.
*   B. Amazon S3.
*   C. Amazon Elastic File System (EFS).
*   D. Amazon Glacier.
*   E. Amazon CloudFront.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3.** & **E. Amazon CloudFront.**
*   **Explanation:**
    *   **Amazon S3** (B) hosts video objects durably.
    *   **Amazon CloudFront** (E) caches and delivers the video streams with ultra-low latency via edge locations around the world.
</details>

---

### **Question 38**
What can AWS edge locations be used for? (Select TWO)
*   A. Hosting applications.
*   B. Delivering content closer to users.
*   C. Running NoSQL database caching services.
*   D. Reducing traffic on the server by caching responses.
*   E. Sending notification messages to end users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Delivering content closer to users.** & **D. Reducing traffic on the server by caching responses.**
*   **Explanation:** Edge locations are points of presence used by Amazon CloudFront to:
    *   Cache content to deliver it closer to end-users (B).
    *   Reduce request traffic reaching origin servers by serving cached responses locally (D).
</details>

---

### **Question 39**
A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?
*   A. AWS Total Cost of Ownership (TCO) Calculator.
*   B. Cost Explorer.
*   C. AWS Budgets.
*   D. AWS Migration Hub.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Total Cost of Ownership (TCO) Calculator.**
*   **Explanation:** The **AWS TCO Calculator** is explicitly designed to model migration scenarios and output cost savings reports comparing AWS vs. on-premises configurations.
</details>

---

### **Question 40**
Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?
*   A. AWS Service Health Dashboard.
*   B. AWS X-Ray.
*   C. AWS Personal Health Dashboard.
*   D. Amazon CloudWatch.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Personal Health Dashboard.**
*   **Explanation:** The **AWS Personal Health Dashboard** (AWS Health Dashboard) provides alert details and remediation guides when issues occur with services powering your specific active resources. (The Service Health Dashboard shows the general status of all services across all regions).
</details>

---

### **Question 41**
One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:
*   A. It allows the business to eliminate IT bills.
*   B. It allows the business to put a server in each customer’s data center.
*   C. It allows the business to focus on business activities.
*   D. It allows the business to leave servers unpatched.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It allows the business to focus on business activities.**
*   **Explanation:** Offloading infrastructure operations to AWS allows organizations to focus engineering time and focus on business goals and innovations.
</details>

---

### **Question 42**
How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?
*   A. AWS Senior Support Engineers.
*   B. AWS Technical Account Managers.
*   C. AWS Trusted Advisor.
*   D. AWS Discussion Forums.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Discussion Forums.**
*   **Explanation:** Basic Support includes access to billing support and customer service, but no technical support. Users seeking technical help must use the community-driven **AWS Discussion Forums** or official documentation.
</details>

---

### **Question 43**
How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?
*   A. Deploy applications across multiple Availability Zones within an AWS Region.
*   B. Use a hybrid cloud computing deployment model within the geographic area.
*   C. Deploy applications across multiple AWS Regions.
*   D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Deploy applications across multiple AWS Regions.**
*   **Explanation:** Because natural disasters can affect an entire geographic area (Region), deploying applications across **multiple AWS Regions** provides cross-region redundancy, protecting against regional outages.
</details>

---

### **Question 44**
Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
*   A. Ensuring network connectivity from AWS to the internet.
*   B. Patching and fixing flaws within the AWS Cloud infrastructure.
*   C. Ensuring the physical security of cloud data centers.
*   D. Ensuring Amazon EBS volumes are backed up.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Ensuring Amazon EBS volumes are backed up.**
*   **Explanation:** Backing up client data (including taking snapshots to back up EBS volumes) is the customer's responsibility (D). Network infrastructure, datacenter physical access, and hypervisor patching are managed by AWS.
</details>

---

### **Question 45**
In which scenario should Amazon EC2 Spot Instances be used?
*   A. A company wants to move its main website to AWS from an on-premises web server.
*   B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.
*   C. A company’s heavily used legacy database is currently running on-premises.
*   D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.**
*   **Explanation:** Spot Instances are suited for workload tasks that can survive interruptions, such as background batch rendering or data processing jobs, offering large savings compared to On-Demand instances.
</details>

---

### **Question 46**
A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)
*   A. Reduced latency to users.
*   B. The application’s presentation in the local language.
*   C. Data sovereignty compliance.
*   D. Cooling costs in hotter climates.
*   E. Proximity to the customer’s office for on-site visits.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Reduced latency to users.** & **C. Data sovereignty compliance.**
*   **Explanation:** Crucial region selection parameters include:
    *   **Reduced latency to users** (A) by choosing regions closest to customers.
    *   **Data sovereignty compliance** (C) to satisfy legal requirements regarding local data storage.
</details>

---

### **Question 47**
Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?
*   A. AWS Personal Health Dashboard.
*   B. AWS Service Health Dashboard.
*   C. AWS Trusted Advisor.
*   D. AWS Infrastructure Event Management.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Personal Health Dashboard.**
*   **Explanation:** The **AWS Personal Health Dashboard** alerts you and provides remediation guides when active AWS events might affect your specific resources.
</details>

---

### **Question 48**
Which disaster recovery scenario offers the lowest probability of down time?
*   A. Backup and restore.
*   B. Pilot light.
*   C. Warm standby.
*   D. Multi-site active-active.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Multi-site active-active.**
*   **Explanation:** An **active-active multi-site** disaster recovery strategy runs fully operational workloads in parallel across multiple locations, directing client traffic to both, and yielding near-zero downtime.
</details>

---

### **Question 49**
Which service’s PRIMARY purpose is software version control?
*   A. Amazon CodeStar.
*   B. AWS Command Line Interface (AWS CLI).
*   C. Amazon Cognito.
*   D. AWS CodeCommit.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS CodeCommit.**
*   **Explanation:** **AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.
</details>

---

### **Question 50**
How can a customer increase security to AWS account logons? (Select TWO)
*   A. Configure AWS Certificate Manager
*   B. Enable Multi-Factor Authentication (MFA)
*   C. Use Amazon Cognito to manage access
*   D. Configure a strong password policy
*   E. Enable AWS Organizations

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Enable Multi-Factor Authentication (MFA)** & **D. Configure a strong password policy**
*   **Explanation:** Account logons are secured by enforcing strong authentication:
    *   **Multi-Factor Authentication (MFA)** (B) (requires secondary token codes).
    *   **Strong password policies** (D) (enforcing complexity, character rules, and rotation).
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
