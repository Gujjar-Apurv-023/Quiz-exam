# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 2

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?
*   A. AWS Organizations
*   B. AWS Trusted Advisor
*   C. IAM User Groups
*   D. AWS Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Organizations**
*   **Explanation:** **AWS Organizations** is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It provides consolidated billing for all member accounts and allows you to enforce security policies (via Service Control Policies - SCPs) across the entire hierarchy.
</details>

---

### **Question 2**
Which service provides object-level storage in AWS?
*   A. Amazon EBS
*   B. Amazon Instance Store
*   C. Amazon EFS
*   D. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon S3**
*   **Explanation:** **Amazon S3** (Simple Storage Service) is an object-level storage service, storing data as objects (files + metadata) within buckets.
    *   *Amazon EBS* and *Instance Store* provide block-level storage (structured like a raw virtual disk).
    *   *Amazon EFS* provides file-level storage (a shared network filesystem).
</details>

---

### **Question 3**
A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?
*   A. AWS Elastic Load Balancer
*   B. AWS Budgets
*   C. AWS Auto Scaling
*   D. AWS Cost Explorer

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Auto Scaling**
*   **Explanation:** **AWS Auto Scaling** monitors your applications and automatically adjusts capacity (adding or removing EC2 instances) to maintain steady, predictable performance at the lowest possible cost, matching resource supply to dynamic demand.
</details>

---

### **Question 4**
Which S3 storage class is best for data with unpredictable access patterns?
*   A. Amazon S3 Intelligent-Tiering
*   B. Amazon S3 Glacier Flexible Retrieval
*   C. Amazon S3 Standard
*   D. Amazon S3 Standard-Infrequent Access

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon S3 Intelligent-Tiering**
*   **Explanation:** **Amazon S3 Intelligent-Tiering** automatically optimizes storage costs by moving data between two access tiers (Frequent and Infrequent Access) based on access frequency, without operational overhead, retrieval fees, or performance impact.
</details>

---

### **Question 5**
What is the AWS database service that allows you to upload data structured in key-value format?
*   A. Amazon DynamoDB
*   B. Amazon Aurora
*   C. Amazon Redshift
*   D. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon DynamoDB**
*   **Explanation:** **Amazon DynamoDB** is a fully managed, multi-region, multi-active durable NoSQL database service that supports key-value and document data structures, providing sub-millisecond latency.
</details>

---

### **Question 6**
Which of the following is NOT correct regarding Amazon EC2 On-demand instances?
*   A. You have to pay a start-up fee when launching a new instance for the first time.
*   B. The on-demand instances follow the AWS pay-as-you-go pricing model.
*   C. With on-demand instances, no longer-term commitments or upfront payments are needed.
*   D. When using on-demand Linux instances, you are charged per second based on an hourly rate.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. You have to pay a start-up fee when launching a new instance for the first time.**
*   **Explanation:** There are **no start-up or upfront fees** when launching On-Demand instances. You pay strictly for the compute capacity you consume by the second (Linux) or by the hour (Windows) with no long-term commitment.
</details>

---

### **Question 7**
A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)
*   A. AWS Trusted Advisor
*   B. Amazon Inspector
*   C. Amazon SNS
*   D. Amazon CloudWatch
*   E. Concierge Support Team

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Trusted Advisor** & **B. Amazon Inspector**
*   **Explanation:**
    *   **AWS Trusted Advisor** (A) compares your infrastructure against AWS security best practices (e.g., checking for open ports, public S3 buckets, and lack of MFA).
    *   **Amazon Inspector** (B) is an automated vulnerability management service that scans your EC2 instances and container images for software vulnerabilities and network exposure issues.
</details>

---

### **Question 8**
What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?
*   A. Encrypted keys
*   B. Email verification
*   C. AWS KMS
*   D. AWS MFA

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS MFA**
*   **Explanation:** **AWS Multi-Factor Authentication (MFA)** is a security best practice that adds an extra layer of protection on top of usernames and passwords. It requires users to enter a time-sensitive code from a hardware or software MFA device to authenticate access.
</details>

---

### **Question 9**
A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?
*   A. AWS Knowledge Center
*   B. AWS Health Dashboard
*   C. Infrastructure Event Management
*   D. AWS Support Concierge Service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Infrastructure Event Management**
*   **Explanation:** **AWS Infrastructure Event Management (IEM)** is a structured program included in the Enterprise Support plan (and available for a fee in Enterprise On-Ramp) that partners with your team to provide architecture review, capacity planning, and scaling guidance for major business events like product launches.
</details>

---

### **Question 10**
You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?
*   A. Amazon RDS
*   B. Amazon Redshift
*   C. Amazon DynamoDB
*   D. Amazon CloudWatch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon RDS**
*   **Explanation:** **Amazon RDS** (Relational Database Service) manages the relational database engine. It automates administrative tasks such as hardware provisioning, OS and engine patching, backups, point-in-time recovery, and storage scaling, allowing DBAs to focus on optimization.
</details>

---

### **Question 11**
Which of the below is a best-practice when designing solutions on AWS?
*   A. Invest heavily in architecting your environment, as it is not easy to change your design later.
*   B. Use AWS reservations to reduce costs when testing your production environment.
*   C. Automate wherever possible to make architectural experimentation easier.
*   D. Provision a large compute capacity to handle any spikes in load

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Automate wherever possible to make architectural experimentation easier.**
*   **Explanation:** In AWS, you should **automate your deployments** (using Infrastructure as Code tools like CloudFormation or Terraform). Automation makes it fast and easy to spin up, experiment with, tear down, and replicate different architectures without manually building resources.
</details>

---

### **Question 12**
According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?
*   A. Penetration testing is not allowed in AWS.
*   B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.
*   C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.
*   D. The AWS customers are only allowed to perform penetration testing on services managed by AWS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.**
*   **Explanation:** AWS permits security scanning and penetration testing against certain eligible services (like Amazon EC2, Amazon RDS, etc.) without any prior authorization or notification to AWS, provided customers adhere to the terms of the policy.
</details>

---

### **Question 13**
Which service is used to ensure that messages between software components are not lost if one or more components fail?
*   A. Amazon SQS
*   B. Amazon SES
*   C. AWS Direct Connect
*   D. Amazon Connect

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon SQS**
*   **Explanation:** **Amazon SQS** (Simple Queue Service) is a fully managed message queuing service. By placing messages in a queue, software components are decoupled; if a downstream processor crashes, the messages stay in the SQS queue until it recovers, preventing data loss.
</details>

---

### **Question 14**
The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)
*   A. Multi-factor authentication
*   B. Availability Zones
*   C. Elastic Load Balancing
*   D. Penetration testing
*   E. Vertical Scaling

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Availability Zones** & **C. Elastic Load Balancing**
*   **Explanation:** 
    *   Deploying applications across **multiple Availability Zones** (B) ensures that if one data center zone suffers an outage, the application continues to run in other zones.
    *   **Elastic Load Balancing (ELB)** (C) automatically detects unhealthy instances and routes traffic only to healthy ones, eliminating single points of failure.
</details>

---

### **Question 15**
What is the AWS service that provides a virtual network dedicated to your AWS account?
*   A. AWS VPN
*   B. AWS Subnets
*   C. AWS Dedicated Hosts
*   D. Amazon VPC

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon VPC**
*   **Explanation:** **Amazon VPC** (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
</details>

---

### **Question 16**
According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)
*   A. Managing environmental events of AWS data centers.
*   B. Protecting the confidentiality of data in transit in Amazon S3.
*   C. Controlling physical access to AWS Regions.
*   D. Ensuring that the underlying EC2 host is configured properly.
*   E. Patching applications installed on Amazon EC2.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Protecting the confidentiality of data in transit in Amazon S3.** & **E. Patching applications installed on Amazon EC2.**
*   **Explanation:** 
    *   Customers are responsible for securing data **in the cloud**, which includes forcing SSL/TLS for S3 buckets (B) and managing applications and configurations (E).
    *   AWS is responsible for physical security (C), datacenter environments (A), and hypervisor/host configuration (D).
</details>

---

### **Question 17**
Which of the following AWS services can be used as a compute resource? (Choose TWO)
*   A. Amazon VPC
*   B. Amazon CloudWatch
*   C. Amazon S3
*   D. Amazon EC2
*   E. AWS Lambda

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2** & **E. AWS Lambda**
*   **Explanation:** **Amazon EC2** (virtual machines) and **AWS Lambda** (serverless functions) provide compute resources in AWS.
    *   *VPC* is networking; *CloudWatch* is monitoring; *S3* is storage.
</details>

---

### **Question 18**
Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
*   A. Amazon EBS
*   B. Amazon SQS
*   C. Amazon S3
*   D. Amazon Instance store

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon S3**
*   **Explanation:** **Amazon S3** is an object storage service built to store and retrieve unlimited quantities of files (photos, videos, static media) with 99.999999999% durability. It is far more cost-effective and scalable for media storage than block storage like EBS or Instance Store.
</details>

---

### **Question 19**
Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?
*   A. Instance Password
*   B. Key pairs
*   C. Access Keys
*   D. MFA

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Access Keys**
*   **Explanation:** An **Access Key** (consisting of an Access Key ID and a Secret Access Key) acts as a programmatic username/password combination. It is used to authenticate commands sent via the AWS CLI, SDKs, or raw HTTP API calls.
</details>

---

### **Question 20**
What does Amazon ElastiCache provide?
*   A. In-memory caching for read-heavy applications.
*   B. An Ehcache compatible in-memory data store.
*   C. An online software store that allows Customers to launch pre-configured software with just few clicks.
*   D. A domain name system in the cloud.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. In-memory caching for read-heavy applications.**
*   **Explanation:** **Amazon ElastiCache** offers fully managed Redis or Memcached in-memory databases. It caches frequently queried data to reduce latency and load on relational databases for read-heavy workloads.
</details>

---

### **Question 21**
What is the AWS service that enables you to manage all of your AWS accounts from a single master account?
*   A. AWS WAF
*   B. AWS Trusted Advisor
*   C. AWS Organizations
*   D. Amazon Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Organizations**
*   **Explanation:** **AWS Organizations** allows you to consolidate multiple AWS accounts into a single organization that you can centrally manage, configure policies, and implement consolidated billing.
</details>

---

### **Question 22**
Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?
*   A. Dedicated Instances
*   B. Dedicated Hosts
*   C. On-demand Instances
*   D. Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Dedicated Hosts**
*   **Explanation:** An **Amazon EC2 Dedicated Host** is a physical server with EC2 instance capacity fully dedicated to your use. It allows you to use your existing software licenses (like Windows Server, SQL Server, Oracle) that are bound to sockets, cores, or VMs, fulfilling strict BYOL requirements.
</details>

---

### **Question 23**
Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?
*   A. Free support for all enterprise customers.
*   B. Automatic data protection.
*   C. Reduced Capital Expenditure (CapEx).
*   D. AWS holds responsibility for managing customer applications.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Reduced Capital Expenditure (CapEx).**
*   **Explanation:** AWS cloud computing uses a utility billing model. Instead of paying heavy upfront costs for physical hardware (Capital Expenditure / CapEx), you pay variable monthly charges based on your consumption (Operational Expenditure / OpEx), thereby drastically reducing CapEx.
</details>

---

### **Question 24**
Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)
*   A. Always use Global Services in your architecture rather than Regional Services.
*   B. Always choose to pay as you go.
*   C. Treat servers as fixed resources.
*   D. Automate wherever possible.
*   E. Remove single points of failure.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Automate wherever possible.** & **E. Remove single points of failure.**
*   **Explanation:** 
    *   **Automation** (D) (via tools like Auto Scaling or CloudFormation) increases agility and consistency.
    *   **Removing single points of failure** (E) via redundant, multi-AZ configurations ensures system resilience.
</details>

---

### **Question 25**
Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?
*   A. AWS Direct Connect
*   B. Amazon CloudFront
*   C. AWS Snowball
*   D. Amazon Route 53

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Direct Connect**
*   **Explanation:** **AWS Direct Connect** bypasses the public internet by establishing a dedicated physical network connection from your on-premises network to AWS, providing lower latency and more consistent throughput.
</details>

---

### **Question 26**
You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?
*   A. Internet gateways
*   B. Virtual Private Cloud
*   C. Security Groups
*   D. Amazon CloudFront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Virtual Private Cloud**
*   **Explanation:** A **Virtual Private Cloud (VPC)** allows you to provision logically isolated networks inside your AWS account. By putting resources for different projects into separate VPCs, you isolate their network configurations entirely.
</details>

---

### **Question 27**
Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?
*   A. Amazon Cognito
*   B. AWS IAM
*   C. Amazon Aurora
*   D. AWS WAF

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS WAF**
*   **Explanation:** **AWS WAF** (Web Application Firewall) allows you to define custom security rules to monitor and block HTTP/HTTPS requests, protecting web applications from common exploits like SQL Injection and Cross-Site Scripting (XSS).
</details>

---

### **Question 28**
An organization needs to analyze and process a large number of data sets. Which AWS service should they use?
*   A. Amazon EMR
*   B. Amazon MQ
*   C. Amazon SNS
*   D. Amazon SQS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EMR**
*   **Explanation:** **Amazon EMR** (Elastic MapReduce) is a managed big data platform that simplifies running large-scale data processing frameworks like Apache Spark, Hadoop, and Hive on AWS to analyze large datasets.
</details>

---

### **Question 29**
Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)
*   A. Monitoring network performance
*   B. Installing software on EC2 instances
*   C. Creating hypervisors
*   D. Configuring Access Control Lists (ACLs)
*   E. Hardware maintenance

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Creating hypervisors** & **E. Hardware maintenance**
*   **Explanation:** AWS is solely responsible for **Security of the Cloud**, which includes maintaining the physical hardware (E) and managing the hypervisor virtualization software (C) that runs customer VMs.
</details>

---

### **Question 30**
What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?
*   A. Amazon Redshift
*   B. Amazon DynamoDB
*   C. Amazon EC2
*   D. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon EC2**
*   **Explanation:** **Amazon EC2** provides Virtual Machines (IaaS) where you have full root/administrator access to the operating system, allowing you to install custom software and configure the environment exactly as you need. Managed services like RDS, Redshift, and DynamoDB abstract away OS-level access.
</details>

---

### **Question 31**
What are the default security credentials that are required to access the AWS management console for an IAM user account?
*   A. MFA
*   B. Security tokens
*   C. A user name and password
*   D. Access keys

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. A user name and password**
*   **Explanation:** An IAM user requires a **username and password** to log in to the web-based AWS Management Console by default. Access keys are for command-line or programmatic API access.
</details>

---

### **Question 32**
In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?
*   A. IAM
*   B. An internet gateway
*   C. EBS Snapshot
*   D. AMI

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AMI**
*   **Explanation:** An **AMI (Amazon Machine Image)** is a template containing a pre-configured operating system and software stack. You use an AMI to launch one or many identical EC2 instances in the cloud.
</details>

---

### **Question 33**
What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)
*   A. Reserved Compute capacity
*   B. Eliminating Single Points of Failure (SPOFs)
*   C. Distributed infrastructure
*   D. Virtualized compute resources
*   E. Dedicated hosting

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Eliminating Single Points of Failure (SPOFs)** & **C. Distributed infrastructure**
*   **Explanation:** Cloud computing provides global **distributed infrastructure** (C) across multiple AZs and Regions, allowing you to easily build redundant architectures that **eliminate Single Points of Failure** (SPOFs) (B).
</details>

---

### **Question 34**
Which of the following aspects of security are managed by AWS? (Choose TWO)
*   A. Encryption of EBS volumes
*   B. VPC security
*   C. Access permissions
*   D. Hardware patching
*   E. Securing global physical infrastructure

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Hardware patching** & **E. Securing global physical infrastructure**
*   **Explanation:** Under the Shared Responsibility Model, AWS is responsible for physical and environmental security (E) of data centers and the patching/maintenance of underlying physical infrastructure hosts (D). EBS encryption and access permissions are managed by the customer.
</details>

---

### **Question 35**
Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?
*   A. The ability of a system to recover gracefully from failure.
*   B. The efficient use of computing resources to meet requirements.
*   C. The ability to monitor systems and improve supporting processes and procedures.
*   D. The ability to manage datacenter operations more efficiently.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. The ability to monitor systems and improve supporting processes and procedures.**
*   **Explanation:** The **Operational Excellence** pillar focuses on running and monitoring systems to deliver business value, and continually improving supporting processes and procedures (e.g., through automation, testing, and continuous feedback).
</details>

---

### **Question 36**
AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?
*   A. Edge locations are used by CloudFront to cache the most recent responses.
*   B. Edge locations are used by CloudFront to improve your end users’ experience when uploading files.
*   C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.
*   D. Edge locations are used by CloudFront to distribute content to global users with low latency.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.**
*   **Explanation:** Distributing traffic across multiple instances is the role of an **Elastic Load Balancer (ELB)**, not CloudFront's Edge Locations. Edge Locations cache downloads (A & D) and optimize uploads via S3 Transfer Acceleration (B).
</details>

---

### **Question 37**
What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)
*   A. AWS CloudTrail
*   B. Amazon Comprehend
*   C. AWS Transit Gateway
*   D. AWS X-Ray
*   E. AWS Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CloudTrail** & **E. AWS Config**
*   **Explanation:**
    *   **AWS CloudTrail** (A) audits user actions and API calls (who changed the resource).
    *   **AWS Config** (E) records the history of resource configurations and alerts you when resource settings change over time.
</details>

---

### **Question 38**
Which of the following services allows you to run containerized applications on a cluster of EC2 instances?
*   A. Amazon ECS
*   B. AWS Data Pipeline
*   C. AWS Cloud9
*   D. AWS Personal Health Dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon ECS**
*   **Explanation:** **Amazon ECS** (Elastic Container Service) is a highly scalable container orchestration service that allows you to run, stop, and manage Docker containers on a cluster of EC2 instances or using AWS Fargate (serverless).
</details>

---

### **Question 39**
Which of the following services will help businesses ensure compliance in AWS?
*   A. CloudFront
*   B. CloudEndure Migration
*   C. CloudWatch
*   D. CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. CloudTrail**
*   **Explanation:** **AWS CloudTrail** logs all API calls in your AWS account. This detailed event history acts as an audit log that helps businesses ensure regulatory compliance and security standards by proving who performed actions.
</details>

---

### **Question 40**
Which of the following procedures will help reduce your Amazon S3 costs?
*   A. Use the Import/Export feature to move old files automatically to Amazon Glacier.
*   B. Use the right combination of storage classes based on different use cases.
*   C. Pick the right Availability Zone for your S3 bucket.
*   D. Move all the data stored in S3 standard to EBS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Use the right combination of storage classes based on different use cases.**
*   **Explanation:** Amazon S3 offers various storage classes (Standard, Infrequent Access, Glacier, Deep Archive) at different price points. By configuring S3 Lifecycle policies to automatically move files to colder storage classes based on access frequency, you minimize storage costs.
</details>

---

### **Question 41**
What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)
*   A. AWS Direct Connect
*   B. Amazon EC2 Auto Scaling
*   C. Elastic Load Balancer
*   D. CloudFormation
*   E. Network ACLs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EC2 Auto Scaling** & **C. Elastic Load Balancer**
*   **Explanation:** **ELB** routes traffic only to healthy instances across multiple Availability Zones, while **Auto Scaling** launches new instances to replace failed ones. Together, they form the cornerstone of highly available and fault-tolerant cloud architectures.
</details>

---

### **Question 42**
Which of the following activities may help reduce your AWS monthly costs?
*   A. Enabling Amazon EC2 Auto Scaling for all of your workloads.
*   B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.
*   C. Removing all of your Cost Allocation Tags.
*   D. Deploying your AWS resources across multiple Availability Zones.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Enabling Amazon EC2 Auto Scaling for all of your workloads.**
*   **Explanation:** **Auto Scaling** dynamically adjusts EC2 capacity based on load metrics. This allows you to scale down during low-traffic periods (e.g., nights/weekends) so that you aren't paying for idle CPU cycles.
</details>

---

### **Question 43**
What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?
*   A. S3 Transfer Acceleration
*   B. AWS WAF
*   C. AWS Snowmobile
*   D. AWS Snowball

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. S3 Transfer Acceleration**
*   **Explanation:** **Amazon S3 Transfer Acceleration** utilizes CloudFront's globally distributed Edge Locations to accelerate uploads. Data is routed from the edge location to the S3 bucket over the optimized AWS private network backbone, bypassing public internet congestion.
</details>

---

### **Question 44**
Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?
*   A. AWS X-Ray
*   B. Network ACL
*   C. Security Groups
*   D. VPC Flow logs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Security Groups**
*   **Explanation:** A **Security Group** acts as a virtual firewall for your EC2 instance to control inbound and outbound traffic at the instance level.
    *   *Network ACL* is a firewall at the subnet level.
</details>

---

### **Question 45**
Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)
*   A. AWS KMS
*   B. AWS Global accelerator
*   C. AWS Direct Connect
*   D. AWS Glue
*   E. Amazon CloudFront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Global accelerator** & **E. Amazon CloudFront**
*   **Explanation:**
    *   **AWS Global Accelerator** (B) routes user traffic over the AWS global network backbone, improving TCP performance and reducing latency.
    *   **Amazon CloudFront** (E) caches application content closer to global users at Edge Locations, drastically improving latency.
</details>

---

### **Question 46**
Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)
*   A. Building the relational database schema.
*   B. Performing backups.
*   C. Managing the database settings.
*   D. Patching the database software.
*   E. Installing the database software.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Building the relational database schema.** & **C. Managing the database settings.**
*   **Explanation:** For Amazon RDS, AWS manages the database installation (E), OS/engine patching (D), and baseline database backups (B). The customer is responsible for configuring database settings and parameters (C), and designing the schemas/indexes (A).
</details>

---

### **Question 47**
A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?
*   A. Amazon DynamoDB
*   B. Amazon SNS
*   C. Amazon RDS
*   D. Amazon ElastiCache

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon RDS**
*   **Explanation:** **Amazon RDS** (Relational Database Service) is the ideal target for structured data structured in tables with defined relationships (schemas), as it supports engines like MySQL, PostgreSQL, Oracle, and SQL Server.
</details>

---

### **Question 48**
A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?
*   A. APN Consulting Partners
*   B. AWS TAM
*   C. APN Technology Partners
*   D. AWS Professional Services

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. APN Technology Partners**
*   **Explanation:** The **AWS Partner Network (APN)** has two main types of partners:
    *   **APN Technology Partners** (C) provide software, SaaS, or security tools integrated with AWS.
    *   **APN Consulting Partners** (A) are professional services firms that help customers design, build, and migrate workloads.
</details>

---

### **Question 49**
What is the AWS serverless service that allows you to run your applications without any administrative burden?
*   A. Amazon LightSail
*   B. AWS Lambda
*   C. Amazon RDS instances
*   D. Amazon EC2 instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Lambda**
*   **Explanation:** **AWS Lambda** is a serverless compute service that runs code in response to events and manages all execution environments and server capacity automatically, removing administration overhead.
</details>

---

### **Question 50**
Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?
*   A. She has properly built an elastic system.
*   B. She has properly built a fault tolerant system.
*   C. She has properly built an encrypted system.
*   D. She has properly built a scalable system.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. She has properly built a fault tolerant system.**
*   **Explanation:** **Fault tolerance** is the ability of an application architecture to survive resource failures (such as half of the web instances crashing) with zero downtime and zero impact on end-user requests.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
