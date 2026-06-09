# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 1

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?
*   A. AWS CLI
*   B. AWS API
*   C. AWS SDK
*   D. AWS Management Console

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Management Console**
*   **Explanation:** The **AWS Management Console** is the web-based graphical user interface (GUI) used to access and manage Amazon Web Services.
    *   *AWS CLI* is a command-line interface tool.
    *   *AWS SDK* stands for Software Development Kit, used to interact with AWS services programmatically in code.
    *   *AWS API* represents the underlying programmatic application programming interfaces.
</details>

---

### **Question 2**
Which of the following is an example of horizontal scaling in the AWS Cloud?
*   A. Replacing an existing EC2 instance with a larger, more powerful one.
*   B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.
*   C. Adding more RAM capacity to an EC2 instance.
*   D. Adding more EC2 instances of the same size to handle an increase in traffic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Adding more EC2 instances of the same size to handle an increase in traffic.**
*   **Explanation:** 
    *   **Horizontal scaling** (scaling out/in) involves adding or removing resources of the same size (e.g., adding more EC2 instances behind a load balancer).
    *   **Vertical scaling** (scaling up/down) involves changing the specifications of a single resource (e.g., upgrading instance size, adding RAM or CPU capacity), which is represented by options A, B, and C.
</details>

---

### **Question 3**
You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?
*   A. Amazon Inspector
*   B. AWS CloudTrail
*   C. AWS Trusted Advisor
*   D. EC2 Instance Usage Report

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CloudTrail**
*   **Explanation:** **AWS CloudTrail** records API calls and user activity across your AWS account. It logs detail such as the identity of the API caller, the time of the call, the source IP address, and the parameters used (e.g., who initiated `TerminateInstances`).
    *   *Amazon Inspector* checks for software vulnerabilities and deviations from best practices on EC2 instances.
    *   *AWS Trusted Advisor* checks your environment and provides recommendations for optimization across cost, security, performance, and fault tolerance.
</details>

---

### **Question 4**
Which of the below options are related to the reliability of AWS? (Choose TWO)
*   A. Applying the principle of least privilege to all AWS resources.
*   B. Automatically provisioning new resources to meet demand.
*   C. All AWS services are considered Global Services, and this design helps customers serve their international users.
*   D. Providing compensation to customers if issues occur.
*   E. Ability to recover quickly from failures.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Automatically provisioning new resources to meet demand.** & **E. Ability to recover quickly from failures.**
*   **Explanation:** Under the AWS Well-Architected Framework, **Reliability** is defined as the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate elastically by automatically provisioning new resources to meet demand (B) and the capability of self-healing or recovering quickly from infrastructure/service failures (E).
</details>

---

### **Question 5**
Which statement is true regarding the AWS Shared Responsibility Model?
*   A. Responsibilities vary depending on the services used.
*   B. Security of the IaaS services is the responsibility of AWS.
*   C. Patching the guest OS is always the responsibility of AWS.
*   D. Security of the managed services is the responsibility of the customer.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Responsibilities vary depending on the services used.**
*   **Explanation:** The division of responsibility changes depending on the service tier:
    *   For **Infrastructure as a Service (IaaS)** (e.g., Amazon EC2), the customer has more responsibility, including guest OS patching, firewall settings (security groups), and software updates.
    *   For **Platform as a Service (PaaS) / Managed Services** (e.g., Amazon RDS), AWS handles database engine updates, guest OS patching, and hardware maintenance, shifting more burden to AWS.
</details>

---

### **Question 6**
You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?
*   A. The Reserved Instance discounts can only be shared with the master account.
*   B. All accounts can receive the hourly cost benefit of the Reserved Instances.
*   C. The purchased instances will have better performance than On-demand instances.
*   D. There are no cost benefits from using consolidated billing; It is for informational purposes only.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. All accounts can receive the hourly cost benefit of the Reserved Instances.**
*   **Explanation:** Under consolidated billing (part of AWS Organizations), the billing system aggregates usage from all member accounts. Consequently, any unused **Reserved Instance (RI) discounts** or savings plans purchased by one account are automatically applied to matching usage in any other member account in the organization, maximizing the cost benefits.
</details>

---

### **Question 7**
A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?
*   A. Deploy the application across multiple Availability Zones and Edge locations.
*   B. Deploy the application across multiple Availability Zones and subnets.
*   C. Deploy the application across multiple Regions and Availability Zones.
*   D. Deploy the application across multiple VPC’s and subnets.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Deploy the application across multiple Regions and Availability Zones.**
*   **Explanation:** 
    *   Deploying across **multiple Availability Zones (AZs)** ensures fault tolerance against single data center outages.
    *   Deploying across **multiple AWS Regions** ensures the application survives complete regional outages (e.g., major natural disasters or grid failures), providing the absolute highest level of availability.
</details>

---

### **Question 8**
What does AWS Snowball provide? (Choose TWO)
*   A. Built-in computing capabilities that allow customers to process data locally.
*   B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.
*   C. A hybrid cloud storage between on-premises environments and the AWS Cloud.
*   D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.
*   E. Secure transfer of large amounts of data into and out of the AWS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Built-in computing capabilities that allow customers to process data locally.** & **E. Secure transfer of large amounts of data into and out of the AWS.**
*   **Explanation:** 
    *   **AWS Snowball Edge** devices feature on-board compute power (CPU/GPU) and storage, allowing users to run processing workloads locally in disconnected edge locations (A).
    *   It is designed for secure, physical transport of petabytes of data into and out of AWS (E).
    *   *AWS Snowmobile* is used for Exabyte-scale migrations (D).
</details>

---

### **Question 9**
A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?
*   A. AWS Health Dashboard.
*   B. AWS Support Concierge.
*   C. AWS Customer Service.
*   D. AWS Operations Support.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Support Concierge.**
*   **Explanation:** The **Support Concierge** is a specialized billing and account management team available solely to AWS Enterprise and Enterprise On-Ramp Support customers. They provide quick and efficient guidance for complex billing questions, consolidated billing setup, cost allocation tags, and resource limits.
</details>

---

### **Question 10**
A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?
*   A. Applying the Amazon Connect latency-based routing policy.
*   B. Registering a new US domain name to serve the users in the US.
*   C. Building a new data center in the US and implementing a hybrid model.
*   D. Deploying new Amazon EC2 instances in a Region located in the US.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Deploying new Amazon EC2 instances in a Region located in the US.**
*   **Explanation:** Network latency is caused by the physical distance data must travel. By deploying new EC2 instances in an AWS region located in the US (near the new branches), the company brings the application closer to the users, dramatically reducing latency at a low cloud cost.
</details>

---

### **Question 11**
An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?
*   A. IAM roles.
*   B. IAM users.
*   C. IAM user groups.
*   D. AWS Organizations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. IAM user groups.**
*   **Explanation:** An **IAM User Group** is a collection of IAM users. You can assign IAM policies directly to a user group, and all members of that group will inherit those permissions. This simplifies the management of access control for structured teams (e.g., Developers, Admins, Testers).
</details>

---

### **Question 12**
A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?
*   A. AWS OpsWorks.
*   B. AWS Database Migration Service.
*   C. AWS Server Migration Service.
*   D. AWS Application Discovery Service.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Database Migration Service.**
*   **Explanation:** **AWS Database Migration Service (DMS)** helps you migrate databases to AWS quickly and securely. Crucially, the source database remains fully operational during the migration, minimizing downtime for applications that rely on it.
</details>

---

### **Question 13**
Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?
*   A. Build security in every layer.
*   B. Parallelize tasks.
*   C. Implement elasticity.
*   D. Adopt monolithic architecture.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Implement elasticity.**
*   **Explanation:** **Elasticity** is the ability to match supply of cloud resources (like EC2 instances) to demand in real time. Dynamic scaling (via Amazon EC2 Auto Scaling) ensures you only pay for what you need by adding instances when demand spikes and terminating instances when demand drops.
</details>

---

### **Question 14**
What are the benefits of having infrastructure hosted in AWS? (Choose TWO)
*   A. Increasing speed and agility.
*   B. There is no need to worry about security.
*   C. Gaining complete control over the physical infrastructure.
*   D. Operating applications on behalf of customers.
*   E. All of the physical security and most of the data/network security are taken care of for you.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Increasing speed and agility.** & **E. All of the physical security and most of the data/network security are taken care of for you.**
*   **Explanation:** 
    *   AWS enables rapid provisioning of resources, vastly increasing **speed and agility** (A) for development teams.
    *   Under the Shared Responsibility Model, AWS manages the physical security of the data centers, hardware, virtualization layer, and baseline networking services (E). However, the customer must still manage configurations, encryption, and access policies (so B is incorrect).
</details>

---

### **Question 15**
What is the advantage of the AWS-recommended practice of “decoupling” applications?
*   A. Allows treating an application as a single, cohesive unit.
*   B. Reduces inter-dependencies so that failures do not impact other components of the application.
*   C. Allows updates of any monolithic application quickly and easily.
*   D. Allows tracking of any API call made to any AWS service.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Reduces inter-dependencies so that failures do not impact other components of the application.**
*   **Explanation:** **Decoupling** applications involves breaking them down into small, loosely coupled microservices (often utilizing message queues like Amazon SQS). If one component fails (e.g., the billing module), other components (e.g., inventory catalog searching) can continue to function uninterrupted.
</details>

---

### **Question 16**
Which of the following helps a customer view the Amazon EC2 billing activity for the past month?
*   A. AWS Budgets.
*   B. AWS Pricing Calculator.
*   C. AWS Systems Manager.
*   D. AWS Cost & Usage Reports.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Cost & Usage Reports.**
*   **Explanation:** **AWS Cost & Usage Reports (CUR)** contain the most detailed set of cost and usage data available. You can use it to review granular billing logs, down to hourly or daily usage of specific EC2 instances, for current or past months.
</details>

---

### **Question 17**
What do you gain from setting up consolidated billing for five different AWS accounts under another master account?
*   A. AWS services’ costs will be reduced to half the original price.
*   B. The consolidated billing feature is just for organizational purpose.
*   C. Each AWS account gets volume discounts.
*   D. Each AWS account gets five times the free-tier services capacity.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Each AWS account gets volume discounts.**
*   **Explanation:** Consolidated billing aggregates usage across all member accounts. Since AWS charges lower per-unit rates for higher usage volumes (such as S3 storage tiers and EC2 data transfers), combining usage allows all member accounts to reach pricing discount tiers much faster.
</details>

---

### **Question 18**
What should you do in order to keep the data on EBS volumes safe? (Choose TWO)
*   A. Regularly update firmware on EBS devices.
*   B. Create EBS snapshots.
*   C. Ensure that EBS data is encrypted at rest.
*   D. Store a backup daily in an external drive.
*   E. Prevent any unauthorized access to AWS data centers.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Create EBS snapshots.** & **C. Ensure that EBS data is encrypted at rest.**
*   **Explanation:** 
    *   **EBS snapshots** are point-in-time backups of EBS volumes that are stored incrementally in Amazon S3, allowing recovery if data is corrupted or deleted (B).
    *   **Encryption at rest** protects the data from unauthorized access to the underlying storage volume (C).
</details>

---

### **Question 19**
One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?
*   A. By automatically scaling your on-premises resources based on changes in demand.
*   B. By automatically scaling your AWS resources using an Elastic Load Balancer.
*   C. By reducing interdependencies between application components wherever possible.
*   D. By automatically provisioning the required AWS resources based on changes in demand.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. By automatically provisioning the required AWS resources based on changes in demand.**
*   **Explanation:** **Elasticity** is the ability to dynamically scale computing resources up or down in response to workload demands. This ensures that you don't over-provision resources (wasting money) or under-provision them (causing downtime).
</details>

---

### **Question 20**
A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)
*   A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.
*   B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.
*   C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.
*   D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.
*   E. Configure the Amazon Connect Service to alert the company when the threshold is exceeded.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.** & **C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.**
*   **Explanation:**
    *   **Amazon CloudWatch Billing Alarms** track total billing metrics and can send notifications via Amazon Simple Notification Service (SNS) when costs exceed a set limit (A).
    *   **AWS Budgets** lets you set custom cost budgets and automatically alerts you via email or SNS when your forecasted or actual costs exceed your threshold (C).
</details>

---

### **Question 21**
What does Amazon CloudFront use to distribute content to global users with low latency?
*   A. AWS Global Accelerator.
*   B. AWS Regions.
*   C. AWS Edge Locations.
*   D. AWS Availability Zones.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Edge Locations.**
*   **Explanation:** **Amazon CloudFront** is a Content Delivery Network (CDN) service that caches static and dynamic website content at physical locations called **Edge Locations** around the globe, ensuring that users retrieve data from the nearest geographical node with minimal latency.
</details>

---

### **Question 22**
What does the “Principle of Least Privilege” refer to?
*   A. You should grant your users only the permissions they need when they need them and nothing more.
*   B. All IAM users should have at least the necessary permissions to access the core AWS services.
*   C. All trusted IAM users should have access to any AWS service in the respective AWS account.
*   D. IAM users should not be granted any permissions; to keep your account safe.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. You should grant your users only the permissions they need when they need them and nothing more.**
*   **Explanation:** The **Principle of Least Privilege (PoLP)** is a security best practice that dictates users, applications, or systems should only be granted the minimum set of permissions necessary to perform their specified jobs. This minimizes the risk of accidental modifications or security breaches.
</details>

---

### **Question 23**
Which of the following does NOT belong to the AWS Cloud Computing models?
*   A. Platform as a Service (PaaS).
*   B. Infrastructure as a Service (IaaS).
*   C. Software as a Service (SaaS).
*   D. Networking as a Service (NaaS).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Networking as a Service (NaaS).**
*   **Explanation:** The three standard cloud computing service models recognized by AWS and NIST are **IaaS** (virtual infrastructure), **PaaS** (managed application platforms), and **SaaS** (complete end-user applications). *NaaS* is not defined as one of the standard cloud computing deployment models.
</details>

---

### **Question 24**
The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?
*   A. S3 Intelligent-Tiering.
*   B. AWS Marketplace.
*   C. Amazon S3 Glacier Deep Archive.
*   D. Amazon EBS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon S3 Glacier Deep Archive.**
*   **Explanation:** **S3 Glacier Deep Archive** is AWS’s lowest-cost storage class. It is ideal for storing data that is rarely accessed (access retrieve times are within 12 hours) and needs to be retained long-term for regulatory compliance and audit purposes.
</details>

---

### **Question 25**
Which service provides DNS in the AWS cloud?
*   A. Route 53.
*   B. AWS Config.
*   C. Amazon CloudFront.
*   D. Amazon EMR.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Route 53.**
*   **Explanation:** **Amazon Route 53** is a highly available and scalable Domain Name System (DNS) web service. It translates human-readable domain names (like `example.com`) into numeric IP addresses (like `192.0.2.1`).
</details>

---

### **Question 26**
Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)
*   A. AWS Shield.
*   B. AWS Config.
*   C. Amazon Cognito.
*   D. AWS WAF.
*   E. AWS KMS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Shield.** & **D. AWS WAF.**
*   **Explanation:**
    *   **AWS Shield** provides managed Distributed Denial of Service (DDoS) protection for web applications running on AWS. Standard protection is free and activated automatically.
    *   **AWS WAF** (Web Application Firewall) allows you to filter web traffic based on custom rules (IP addresses, headers, SQL injection) to block malicious traffic before it reaches your web app.
</details>

---

### **Question 27**
A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?
*   A. AWS OpsWorks.
*   B. AWS Storage Gateway.
*   C. Amazon EBS volume.
*   D. Amazon ElastiCache.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon ElastiCache.**
*   **Explanation:** **Amazon ElastiCache** is a fully managed in-memory data store and cache (Redis or Memcached) service. By storing database query results or session states in-memory, the application can bypass disk reads from traditional databases, optimizing response times down to sub-milliseconds.
</details>

---

### **Question 28**
You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?
*   A. Reserved instances.
*   B. Spot instances.
*   C. Dedicated instances.
*   D. On-demand instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. On-demand instances.**
*   **Explanation:** **On-demand instances** are ideal for short-term, unpredictable workloads that cannot be interrupted. 
    *   *Spot instances* can be terminated by AWS with a 2-minute notice if AWS needs the capacity back, making them unsuitable for continuous user workloads.
    *   *Reserved instances* require a 1-year or 3-year commitment.
</details>

---

### **Question 29**
You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?
*   A. Reserved Instances.
*   B. On-demand Instances.
*   C. Dedicated Instances.
*   D. Spot Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Spot Instances.**
*   **Explanation:** **Spot Instances** let you purchase spare Amazon EC2 compute capacity at steep discounts (up to 90% off On-Demand rates). Because consistent uptime is not required and processing is fault-tolerant, this is the most cost-effective solution for batch image resizing.
</details>

---

### **Question 30**
Which of the following can be described as a global content delivery network (CDN) service?
*   A. AWS VPN.
*   B. AWS Direct Connect.
*   C. AWS Regions.
*   D. Amazon CloudFront.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon CloudFront.**
*   **Explanation:** **Amazon CloudFront** is a global Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds.
</details>

---

### **Question 31**
Which of the following services allows customers to manage their agreements with AWS?
*   A. AWS Artifact.
*   B. AWS Certificate Manager.
*   C. AWS Systems Manager.
*   D. AWS Organizations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Artifact.**
*   **Explanation:** **AWS Artifact** is a self-service portal that provides on-demand access to AWS compliance reports and allows customers to review, accept, and manage agreements with AWS (such as the Business Associate Addendum for HIPAA compliance).
</details>

---

### **Question 32**
Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)
*   A. Amazon VPC.
*   B. Amazon DynamoDB.
*   C. Amazon Elastic MapReduce (EMR).
*   D. AWS IAM.
*   E. Amazon Elastic Compute Cloud (EC2).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon DynamoDB.** & **C. Amazon Elastic MapReduce (EMR).**
*   **Explanation:**
    *   **Amazon DynamoDB** is a fully managed NoSQL database service; AWS takes care of server provisioning, patching, scaling, and clustering.
    *   **Amazon EMR** is a managed cluster platform that simplifies running big data frameworks; AWS automates cluster provisioning and scaling.
    *   *Amazon EC2* is unmanaged (IaaS), meaning the customer is responsible for patching and database installations.
</details>

---

### **Question 33**
Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?
*   A. Amazon Aurora.
*   B. Amazon DynamoDB.
*   C. Amazon Elastic Block Store.
*   D. Amazon Redshift.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon DynamoDB.**
*   **Explanation:** **Amazon DynamoDB** is a fully managed proprietary NoSQL database service that supports key-value and document data models, providing fast and predictable performance.
    *   *Amazon Aurora* is a relational (SQL) database service.
    *   *Amazon Redshift* is a data warehouse service.
</details>

---

### **Question 34**
As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?
*   A. AWS Identity and Access Management (IAM) user.
*   B. Infrastructure Event Management (IEM) engineer.
*   C. AWS Consulting Partners.
*   D. Technical Account Manager (TAM).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Technical Account Manager (TAM).**
*   **Explanation:** Under the AWS Enterprise Support plan, customers are assigned a dedicated **Technical Account Manager (TAM)**. The TAM is the primary point of contact who provides operational advice, architectural review, and coordinates access to deep AWS subject-matter expertise.
</details>

---

### **Question 35**
How can you view the distribution of AWS spending in one of your AWS accounts?
*   A. By using Amazon VPC console.
*   B. By contacting the AWS Support team.
*   C. By using AWS Cost Explorer.
*   D. By contacting the AWS Finance team.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. By using AWS Cost Explorer.**
*   **Explanation:** **AWS Cost Explorer** is a free tool that allows you to visualize and analyze your AWS spending and resource usage over time. You can filter data by service, account, region, or tags to identify trends and anomalies.
</details>

---

### **Question 36**
Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?
*   A. Access keys.
*   B. Secret token.
*   C. UserID.
*   D. User name and password.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Access keys.**
*   **Explanation:** Programmatic access to AWS (via the AWS CLI, SDKs, or APIs) requires credentials called **Access Keys** (which consist of an Access Key ID and a Secret Access Key) to verify and authenticate requests.
    *   *Username and password* are used exclusively to sign in to the web-based AWS Management Console.
</details>

---

### **Question 37**
You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?
*   A. Contact the AWS Customer Service team.
*   B. Contact the AWS Abuse team.
*   C. Contact the AWS Concierge team.
*   D. Contact the AWS Security team.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Contact the AWS Abuse team.**
*   **Explanation:** The **AWS Abuse team** investigates allegations of abusive behavior originating from AWS resources, such as spam, port scanning, hosting malware, or hacking attempts. Anyone (even with Basic support) can report abuse directly to this team.
</details>

---

### **Question 38**
Select TWO examples of the AWS shared controls.
*   A. Patch Management.
*   B. IAM Management.
*   C. VPC Management.
*   D. Configuration Management.
*   E. Data Center operations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Patch Management.** & **D. Configuration Management.**
*   **Explanation:** **Shared controls** are controls that apply to both the infrastructure layer (responsibility of AWS) and the customer's layer (responsibility of the customer):
    *   *Patch Management:* AWS is responsible for patching infrastructure hosts, while the customer is responsible for patching guest operating systems (e.g., EC2 instances).
    *   *Configuration Management:* AWS configures infrastructure devices, while the customer configures their databases, security groups, and guest OS settings.
</details>

---

### **Question 39**
In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)
*   A. ELB (Elastic Load Balancing).
*   B. Auto Scaling.
*   C. Amazon Athena.
*   D. ECR (Elastic Container Registry).
*   E. Amazon EC2.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. ELB (Elastic Load Balancing).** & **B. Auto Scaling.**
*   **Explanation:**
    *   **ELB** automatically detects unhealthy EC2 instances and routes client traffic away from them to healthy ones (A).
    *   **EC2 Auto Scaling** automatically detects when instances have failed or when load has shifted, provisioning replacement instances without manual intervention (B).
</details>

---

### **Question 40**
A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?
*   A. Amazon SNS.
*   B. Amazon Kinesis Video Streams.
*   C. AWS CloudFormation.
*   D. Amazon CloudFront.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon CloudFront.**
*   **Explanation:** **Amazon CloudFront** is a Content Delivery Network (CDN) service that caches video files and web assets globally. This allows international users to stream content with minimal buffering and high transfer speeds.
</details>

---

### **Question 41**
A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?
*   A. A MySQL database installed on an EC2 instance.
*   B. Amazon Aurora.
*   C. Amazon DynamoDB.
*   D. Amazon Neptune.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Aurora.**
*   **Explanation:** **Amazon Aurora** is a fully managed relational database system compatible with MySQL and PostgreSQL. It automatically and continuously backs up your database to Amazon S3 and retains backups up to 35 days with zero impact on performance.
    *   *MySQL on EC2* is unmanaged, meaning the customer must configure their own backups.
</details>

---

### **Question 42**
What is the AWS service that enables AWS architects to manage infrastructure as code?
*   A. AWS CloudFormation.
*   B. AWS Config.
*   C. Amazon SES.
*   D. Amazon EMR.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CloudFormation.**
*   **Explanation:** **AWS CloudFormation** allows you to model, provision, and update your AWS resources using declarative JSON or YAML templates, establishing Infrastructure as Code (IaC) best practices.
</details>

---

### **Question 43**
Under the shared responsibility model, which of the following is the responsibility of AWS?
*   A. Client-side encryption.
*   B. Configuring infrastructure devices.
*   C. Server-side encryption.
*   D. Filtering traffic with Security Groups.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Configuring infrastructure devices.**
*   **Explanation:** AWS is responsible for configuring, maintaining, and upgrading physical routers, switches, servers, and hypervisors. Client-side/server-side encryption and Security Group configuration are the customer's responsibilities.
</details>

---

### **Question 44**
What does the AWS Health Dashboard provide? (Choose TWO)
*   A. Detailed troubleshooting guidance to address AWS events impacting your resources.
*   B. Health checks for Auto Scaling instances.
*   C. Recommendations for Cost Optimization.
*   D. A dashboard detailing vulnerabilities in your applications.
*   E. Personalized view of AWS service health.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Detailed troubleshooting guidance to address AWS events impacting your resources.** & **E. Personalized view of AWS service health.**
*   **Explanation:** The **AWS Health Dashboard** displays status notifications triggered by changes in the AWS environment that might impact your running resources (E), along with specific, actionable instructions to help troubleshoot and remediate service events (A).
</details>

---

### **Question 45**
You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?
*   A. AWS Lambda.
*   B. AWS Config.
*   C. Amazon CloudWatch.
*   D. AWS CloudTrail.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon CloudWatch.**
*   **Explanation:** **Amazon CloudWatch** is AWS's primary monitoring service. It automatically tracks system performance metrics (such as CPU utilization, Network In/Out, and disk status) from EC2 instances, allowing you to troubleshoot accessibility bottlenecks.
</details>

---

### **Question 46**
Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?
*   A. AWS Shield.
*   B. AWS Management Console.
*   C. AWS Secrets Manager.
*   D. AWS Trusted Advisor.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Trusted Advisor.**
*   **Explanation:** **AWS Trusted Advisor** offers automated recommendations following AWS best practices. The **Security** check category alerts you to potential vulnerabilities, such as open ports (0.0.0.0/0 in Security Groups), unrestricted S3 buckets, or disabled MFA on the root account.
</details>

---

### **Question 47**
Which of the following is not a benefit of Amazon S3? (Choose TWO)
*   A. Amazon S3 provides unlimited storage for any type of data.
*   B. Amazon S3 can run any type of application or backend system.
*   C. Amazon S3 stores any number of objects, but with object size limits.
*   D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.
*   E. Amazon S3 provides 99.999999999% (11 9’s) of data durability.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3 can run any type of application or backend system.** & **D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.**
*   **Explanation:**
    *   Amazon S3 is strictly an object storage service and **cannot run applications** or operating systems (B is not a benefit/feature).
    *   S3 **scales automatically**; users do not need to manually configure capacity scaling (D is incorrect, as manual scaling is not a benefit/requirement).
</details>

---

### **Question 48**
In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)
*   A. Disk disposal.
*   B. Controlling physical access to compute resources.
*   C. Patching the Network infrastructure.
*   D. Setting password complexity rules.
*   E. Configuring network access rules.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Setting password complexity rules.** & **E. Configuring network access rules.**
*   **Explanation:** Customers are responsible for managing IAM password configurations (D) and setting up logical network isolation boundaries/access paths via Security Groups and Network ACLs (E). Disk disposal, physical access, and patching physical infrastructure belong to AWS.
</details>

---

### **Question 49**
What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?
*   A. Amazon Aurora.
*   B. Amazon CloudWatch.
*   C. AWS Quick Start reference deployments.
*   D. AWS OpsWorks.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Quick Start reference deployments.**
*   **Explanation:** **AWS Quick Starts** are pre-configured CloudFormation templates created by AWS and partners to help you spin up complex software architectures (like IBM MQ, databases, etc.) on AWS using best-practices with minimal time and manual configuration.
</details>

---

### **Question 50**
An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?
*   A. Elastic RI.
*   B. Premium RI.
*   C. Standard RI.
*   D. Convertible RI.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Convertible RI.**
*   **Explanation:** **Convertible Reserved Instances** allow you to exchange the RI for another Convertible RI of equal or greater value, letting you change the instance family, operating system, tenancy, or payment option if your application requirements change during the term.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
