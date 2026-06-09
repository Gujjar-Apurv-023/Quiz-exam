# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 15

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
How do customers benefit from Amazon’s massive economies of scale?
*   A. Periodic price reductions as the result of Amazon’s operational efficiencies
*   B. New Amazon EC2 instance types providing the latest hardware
*   C. The ability to scale up and down when needed
*   D. Increased reliability in the underlying hardware of Amazon EC2 instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Periodic price reductions as the result of Amazon’s operational efficiencies**
*   **Explanation:** One of the core business benefits of Cloud Computing is **massive economies of scale**. As AWS grows, it optimizes operations, resulting in lower hardware and resource acquisition costs, which AWS consistently passes back to customers in the form of periodic price reductions.
</details>

---

### **Question 2**
Which AWS services can be used to gather information about AWS account activity? (Select TWO.)
*   A. Amazon CloudFront
*   B. AWS Cloud9
*   C. AWS CloudTrail
*   D. AWS CloudHSM
*   E. Amazon CloudWatch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CloudTrail** & **E. Amazon CloudWatch**
*   **Explanation:**
    *   **AWS CloudTrail** (C) records account API activity (who requested what action, when, and from where).
    *   **Amazon CloudWatch** (E) tracks resource operational metrics and logs over time, providing visibility into account operational performance.
</details>

---

### **Question 3**
Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)
*   A. Patching databases software
*   B. Testing application releases
*   C. Backing up databases
*   D. Creating database schema
*   E. Running penetration tests

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Patching databases software** & **C. Backing up databases**
*   **Explanation:** Fully managed services like Amazon RDS automatically handle infrastructure tasks such as **patching database software** (A) and **performing database backups** (C), freeing up the customer's developers to focus on schema design and application testing.
</details>

---

### **Question 4**
In which scenario should Amazon EC2 Spot Instances be used?
*   A. A company wants to move its main website to AWS from an on-premises web server.
*   B. A company has a number of application services whose Service Level Agreements (SLAs) do not support interruptions.
*   C. A database cluster needs to run 24 hours a day, 7 days a week.
*   D. A company has a number of application services whose Service Level Agreements (SLAs) allow for system interruption.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. A company has a number of application services whose Service Level Agreements (SLAs) allow for system interruption.**
*   **Explanation:** Spot instances are spare EC2 capacity offered at up to a 90% discount, but they can be reclaimed by AWS with a 2-minute warning. Therefore, they are only appropriate for workloads that are flexible, fault-tolerant, and **allow for system interruption**.
</details>

---

### **Question 5**
Under the AWS shared responsibility model, which of the following is the customer’s responsibility?
*   A. Physical security of data centers
*   B. Replacing failed hard drives
*   C. Configuring network access control lists (NACLs)
*   D. Upgrading the virtualization hypervisor on physical hosts

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Configuring network access control lists (NACLs)**
*   **Explanation:** The customer is responsible for security **in** the cloud. Configuring networking access policies like VPC Security Groups and **Network Access Control Lists (NACLs)** is managed by the customer.
</details>

---

### **Question 6**
A system administrator needs to connect to an Amazon EC2 instance using SSH. Which of the following can be used to control network access?
*   A. IAM policies
*   B. AWS Shield
*   C. Amazon CloudFront
*   D. Security Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Security Groups**
*   **Explanation:** **Security Groups** act as virtual firewalls at the instance level, controlling inbound and outbound network traffic. To allow SSH access, you must configure an inbound rule allowing TCP port 22 traffic from your specific IP address.
</details>

---

### **Question 7**
Which of the following database engines is compatible with Amazon Aurora?
*   A. Microsoft SQL Server
*   B. PostgreSQL
*   C. Oracle
*   D. MariaDB

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. PostgreSQL**
*   **Explanation:** Amazon Aurora is a high-performance relational database engine designed by AWS that is fully compatible with **PostgreSQL** and **MySQL**.
</details>

---

### **Question 8**
A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?
*   A. Patching the guest operating system
*   B. Maintaining physical and environmental controls
*   C. Protecting communications and maintaining zone security
*   D. Patching custom applications

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Maintaining physical and environmental controls**
*   **Explanation:** Under the Shared Responsibility Model, AWS takes over **physical and environmental controls** of the datacenter (power, climate control, fire suppression, physical site security).
</details>

---

### **Question 9**
Which AWS service is best suited to migrating database schemas?
*   A. AWS Database Migration Service (AWS DMS)
*   B. AWS Snowball
*   C. AWS Schema Conversion Tool (AWS SCT)
*   D. AWS Application Discovery Service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Schema Conversion Tool (AWS SCT)**
*   **Explanation:** The **AWS Schema Conversion Tool (SCT)** is used to convert database schemas from a source engine (like Oracle or SQL Server) to a target engine (like MySQL or PostgreSQL on AWS Aurora). AWS DMS is then used to migrate the actual data.
</details>

---

### **Question 10**
Which AWS service or tool should be used to monitor a company’s spend on AWS?
*   A. Amazon Inspector
*   B. AWS Budgets
*   C. AWS Directory Service
*   D. AWS Systems Manager

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Budgets**
*   **Explanation:** **AWS Budgets** allows you to set custom cost and usage budgets and alert you (via email or SNS) when your actual spending exceeds (or is forecasted to exceed) your budget threshold.
</details>

---

### **Question 11**
Which service allows a Cloud Practitioner to download compliance and certification reports for the AWS infrastructure?
*   A. AWS Artifact
*   B. AWS Trusted Advisor
*   C. AWS CloudTrail
*   D. AWS Certificate Manager

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Artifact**
*   **Explanation:** **AWS Artifact** is your go-to central portal for security agreements and compliance documents (such as SOC, PCI, and ISO reports).
</details>

---

### **Question 12**
Which AWS Support plan provides a 15-minute response time for business-critical system down cases?
*   A. Enterprise Support
*   B. Business Support
*   C. Developer Support
*   D. Basic Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Enterprise Support**
*   **Explanation:** The **Enterprise Support Plan** offers a 15-minute SLA target response time for "business-critical system down" incidents, alongside access to a dedicated Technical Account Manager (TAM).
</details>

---

### **Question 13**
Which of the following are benefits of the AWS Cloud? (Select TWO.)
*   A. Increase speed and agility
*   B. Direct control over server hardware vendors
*   C. Stop guessing capacity
*   D. Fixed monthly operating costs
*   E. Custom physical network customization

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Increase speed and agility** & **C. Stop guessing capacity**
*   **Explanation:**
    *   **Increase speed and agility** (A) refers to resource provisioning in seconds rather than weeks.
    *   **Stop guessing capacity** (C) is achieved by utilizing elasticity to scale dynamically based on demand.
</details>

---

### **Question 14**
Which service is an AWS managed NoSQL database service?
*   A. Amazon RDS
*   B. Amazon DynamoDB
*   C. Amazon Redshift
*   D. Amazon Aurora

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon DynamoDB**
*   **Explanation:** **Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.
</details>

---

### **Question 15**
Which of the following is the customer’s responsibility under the AWS shared responsibility model?
*   A. Managing data encryption keys
*   B. Disposing of faulty storage devices
*   C. Training datacenter security guards
*   D. Patching the virtualization hypervisor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Managing data encryption keys**
*   **Explanation:** The customer manages all data security controls **in** the cloud. Creating, rotating, and managing access permissions for **data encryption keys** (using KMS) is a customer responsibility.
</details>

---

### **Question 16**
Which AWS IAM feature allows a customer to verify that users are complying with password complexity and rotation policies?
*   A. Credential report
*   B. Password policy dashboard
*   C. Access advisor
*   D. IAM policies

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Credential report**
*   **Explanation:** An **IAM Credential Report** provides a downloadable CSV list detailing all users in your account, including information such as password creation date, last rotated date, and MFA status, which is ideal for security audits.
</details>

---

### **Question 17**
A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?
*   A. Managing the application code inside the Docker container
*   B. Maintaining physical infrastructure
*   C. Patching the guest operating system of the EC2 instance
*   D. Deploying container scaling policies

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Maintaining physical infrastructure**
*   **Explanation:** Because the company chose to host Docker on standard EC2 instances (IaaS), they manage the container setup, application code, and guest OS. AWS is responsible for **maintaining physical hardware infrastructure** of the host servers.
</details>

---

### **Question 18**
Which AWS service can be used to track CPU usage of an Amazon EC2 instance?
*   A. AWS CloudTrail
*   B. Amazon CloudWatch
*   C. AWS Config
*   D. Amazon Inspector

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon CloudWatch**
*   **Explanation:** **Amazon CloudWatch** is a monitoring service that collects and visualizes operational metrics (such as CPU utilization, Disk I/O, and Network In/Out) for AWS resources.
</details>

---

### **Question 19**
Which AWS service can be used to host a scalable relational database?
*   A. Amazon RDS
*   B. Amazon DynamoDB
*   C. Amazon S3
*   D. Amazon ElastiCache

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon RDS**
*   **Explanation:** **Amazon Relational Database Service (RDS)** is the primary managed database service designed to host relational engines. DynamoDB is NoSQL, S3 is object storage, and ElastiCache is an in-memory cache.
</details>

---

### **Question 20**
Which of the following is a benefit of deploying an application across multiple Availability Zones?
*   A. Reduced data transfer charges
*   B. Automated application code debugging
*   C. Lowest latency globally
*   D. Increased fault tolerance

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Increased fault tolerance**
*   **Explanation:** Deploying across multiple AZs ensures that even if one physical datacenter (or AZ) experiences power outages or network failures, the workload immediately runs from the remaining AZs, improving overall **fault tolerance**.
</details>

---

### **Question 21**
Which AWS service allows a user to run code without provisioning or managing servers?
*   A. Amazon EC2
*   B. AWS Lambda
*   C. Amazon ECS
*   D. AWS Beanstalk

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Lambda**
*   **Explanation:** **AWS Lambda** is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources for you.
</details>

---

### **Question 22**
Which service is best suited for sharing files between multiple Amazon EC2 instances?
*   A. Amazon EBS
*   B. Amazon EFS
*   C. Amazon S3 Glacier
*   D. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EFS**
*   **Explanation:** **Amazon Elastic File System (EFS)** provides a serverless network file system that supports concurrent read/write access for thousands of EC2 instances.
</details>

---

### **Question 23**
Which AWS billing feature allows a company to combine usage from multiple AWS accounts to receive volume discounts?
*   A. Cost allocation tags
*   B. AWS Budgets
*   C. Consolidated billing
*   D. Cost Explorer

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Consolidated billing**
*   **Explanation:** **Consolidated billing** (offered via AWS Organizations) aggregates the usage data across all linked accounts, allowing the master account to qualify for higher-volume discount tiers.
</details>

---

### **Question 24**
Which tool is used to estimate costs before launching resources on AWS?
*   A. AWS Budgets
*   B. AWS Cost Explorer
*   C. AWS Cost and Usage Report
*   D. AWS Pricing Calculator

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Pricing Calculator**
*   **Explanation:** The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.
</details>

---

### **Question 25**
Under the AWS shared responsibility model, who is responsible for managing the guest operating system on Amazon EC2?
*   A. AWS
*   B. The customer
*   C. Both AWS and the customer (Shared)
*   D. The hardware vendor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. The customer**
*   **Explanation:** In EC2, AWS manages the host physical machine and hypervisor. Managing, updating, and patching the **guest operating system** is a customer responsibility.
</details>

---

### **Question 26**
Which AWS service allows a customer to build a virtual network within the AWS Cloud?
*   A. Amazon Route 53
*   B. AWS Direct Connect
*   C. Amazon VPC
*   D. Amazon CloudFront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon VPC**
*   **Explanation:** **Amazon Virtual Private Cloud (VPC)** allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
</details>

---

### **Question 27**
Which of the following is a pillar of the AWS Well-Architected Framework?
*   A. High availability
*   B. High scalability
*   C. Elasticity
*   D. Performance efficiency

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Performance efficiency**
*   **Explanation:** The six pillars of the AWS Well-Architected Framework are:
    1. Operational Excellence
    2. Security
    3. Reliability
    4. **Performance Efficiency** (D)
    5. Cost Optimization
    6. Sustainability
</details>

---

### **Question 28**
Which AWS pricing model is best suited for workloads with stable and predictable compute requirements?
*   A. Spot Instances
*   B. On-Demand Instances
*   C. Reserved Instances
*   D. Dedicated Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Reserved Instances**
*   **Explanation:** **Reserved Instances (RIs)** provide significant discounts (up to 72%) compared to On-Demand instances, making them the best option for workloads with steady state, predictable usage over a 1- or 3-year term.
</details>

---

### **Question 29**
Which AWS service provides a simple way to deploy and run applications by automatically handling capacity provisioning, load balancing, auto-scaling, and health monitoring?
*   A. AWS Elastic Beanstalk
*   B. AWS CloudFormation
*   C. AWS OpsWorks
*   D. AWS Lambda

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Elastic Beanstalk**
*   **Explanation:** **AWS Elastic Beanstalk** is a Platform-as-a-Service (PaaS) offering. You upload your application code, and Beanstalk automatically manages provisioning, load balancing, auto-scaling, and health checks.
</details>

---

### **Question 30**
Which AWS service provides protection against DDoS attacks at no additional cost?
*   A. AWS Shield Standard
*   B. AWS Shield Advanced
*   C. AWS WAF
*   D. AWS Firewall Manager

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Shield Standard**
*   **Explanation:** **AWS Shield Standard** protects all AWS customers at no additional cost from common infrastructure (Layer 3 and 4) DDoS attacks.
</details>

---

### **Question 31**
Which of the following is an example of horizontal scaling?
*   A. Upgrading an EC2 instance from `t3.medium` to `t3.xlarge`
*   B. Adding more Amazon EC2 instances to an Auto Scaling group
*   C. Attaching a larger EBS volume to an EC2 instance
*   D. Increasing the CPU capacity of an RDS database

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Adding more Amazon EC2 instances to an Auto Scaling group**
*   **Explanation:** **Horizontal scaling** (scaling out) involves adding more instances of resources to distribute workload. **Vertical scaling** (scaling up) involves adding resources (such as CPU or RAM) to a single existing instance.
</details>

---

### **Question 32**
Which service allows customers to easily configure and manage a central registry of domain names?
*   A. Amazon Route 53
*   B. AWS Directory Service
*   C. Amazon Lightsail
*   D. Amazon VPC

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Route 53**
*   **Explanation:** **Amazon Route 53** is a highly available domain registrar and DNS routing web service.
</details>

---

### **Question 33**
Under the AWS shared responsibility model, who is responsible for securing physical data centers?
*   A. The customer
*   B. AWS
*   C. Both AWS and the customer (Shared)
*   D. A third-party security firm

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS**
*   **Explanation:** Security "of" the cloud includes physical security, hardware protection, and facility infrastructure maintenance, which are managed entirely by **AWS**.
</details>

---

### **Question 34**
Which AWS service helps customers migrate databases to AWS quickly and securely?
*   A. AWS Database Migration Service (AWS DMS)
*   B. AWS Migration Hub
*   C. AWS Snowball
*   D. AWS DataSync

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Database Migration Service (AWS DMS)**
*   **Explanation:** **AWS DMS** facilitates migrations of active database workloads into AWS databases, keeping the source database operational during migration to minimize downtime.
</details>

---

### **Question 35**
Which tool helps customers analyze their AWS spending patterns over time?
*   A. AWS Cost Explorer
*   B. AWS Budgets
*   C. AWS Trusted Advisor
*   D. AWS Pricing Calculator

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Cost Explorer**
*   **Explanation:** **AWS Cost Explorer** provides an interactive graphical interface to visualize, analyze, and report on your past AWS cost and usage trends.
</details>

---

### **Question 36**
Which of the following is a benefit of AWS Regions?
*   A. Automated global database replication
*   B. Free international edge network routing
*   C. Meeting regulatory compliance by storing data in specific geographic locations
*   D. Eliminates the need to configure network routing rules

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Meeting regulatory compliance by storing data in specific geographic locations**
*   **Explanation:** Deploying resources in specific geographic AWS Regions helps organizations comply with data residency, compliance, and sovereignty regulations (like GDPR) that require data to be stored within local boundaries.
</details>

---

### **Question 37**
Which IAM entity should be used to delegate permissions to an AWS service, such as EC2, to access resources in S3?
*   A. IAM group
*   B. IAM role
*   C. IAM user
*   D. IAM policy boundary

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. IAM role**
*   **Explanation:** An **IAM Role** provides temporary credentials to trusted entities (such as AWS services like EC2 or lambda) to execute API requests without embedding hardcoded access keys.
</details>

---

### **Question 38**
Which of the following provides access to AWS compliance reports and security agreements?
*   A. AWS Artifact
*   B. AWS License Manager
*   C. AWS Certificate Manager
*   D. AWS Shield

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Artifact**
*   **Explanation:** **AWS Artifact** is the self-service portal containing security audit documents and compliance reports for the AWS infrastructure.
</details>

---

### **Question 39**
Which service allows customers to cache web content at edge locations to improve delivery speed to global users?
*   A. Amazon Route 53
*   B. Amazon CloudFront
*   C. AWS Direct Connect
*   D. Amazon S3 Transfer Acceleration

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon CloudFront**
*   **Explanation:** **Amazon CloudFront** is a Content Delivery Network (CDN) that caches content at edge locations globally, lowering latency and improving load times.
</details>

---

### **Question 40**
Under the AWS shared responsibility model, who is responsible for physical and environmental controls?
*   A. AWS
*   B. The customer
*   C. Shared between AWS and the customer
*   D. Third-party contractors

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS**
*   **Explanation:** AWS manages **physical and environmental controls** (HVAC, power grids, physical security guards) for all its datacenters.
</details>

---

### **Question 41**
Which of the following is a key advantage of cloud computing?
*   A. Build fixed storage architectures
*   B. Focus entirely on hardware configurations
*   C. Increase capital expense to reduce operating cost
*   D. Trade capital expense for variable expense

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Trade capital expense for variable expense**
*   **Explanation:** Cloud computing allows businesses to avoid large physical datacenter purchases (capital expenses) and instead pay for resource consumption dynamically (variable operational expenses).
</details>

---

### **Question 42**
Which service should a company use to monitor and audit API calls within their AWS account?
*   A. Amazon CloudWatch
*   B. AWS CloudTrail
*   C. AWS Config
*   D. Amazon GuardDuty

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CloudTrail**
*   **Explanation:** **AWS CloudTrail** records API calls and activities within your AWS account for auditing and traceability.
</details>

---

### **Question 43**
Which of the following database services is serverless and scales automatically?
*   A. Amazon RDS for PostgreSQL
*   B. Amazon Redshift
*   C. Amazon Aurora Serverless
*   D. Amazon RDS for Oracle

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon Aurora Serverless**
*   **Explanation:** **Amazon Aurora Serverless** automatically starts up, shuts down, and scales compute capacity based on your application's transaction volume.
</details>

---

### **Question 44**
Which tool can be used to identify unused or underutilized AWS resources to help reduce costs?
*   A. AWS Cost Explorer
*   B. AWS Trusted Advisor
*   C. AWS Budgets
*   D. Amazon Inspector

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Trusted Advisor**
*   **Explanation:** The **Cost Optimization** category in **AWS Trusted Advisor** flags underutilized EC2 instances, idle load balancers, and unassociated Elastic IPs to help optimize spend.
</details>

---

### **Question 45**
Under the AWS shared responsibility model, who is responsible for application security and patching?
*   A. AWS
*   B. The customer
*   C. Shared
*   D. Operating system vendors

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. The customer**
*   **Explanation:** Customers are responsible for application-level security, including patch management of their applications and operating system configurations.
</details>

---

### **Question 46**
Which service provides temporary security credentials for users who need access to AWS resources?
*   A. AWS IAM
*   B. AWS Directory Service
*   C. AWS STS (Security Token Service)
*   D. AWS Organizations

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS STS (Security Token Service)**
*   **Explanation:** **AWS STS** provides temporary, limited-privilege security credentials for IAM users or federated accounts.
</details>

---

### **Question 47**
Which AWS pricing option offers the largest discount for Amazon EC2 instances?
*   A. No Upfront Reserved Instances
*   B. Spot Instances
*   C. On-Demand Instances
*   D. Three-year, All Upfront, Standard Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Three-year, All Upfront, Standard Reserved Instances**
*   **Explanation:** Standard Reserved Instances committed for 3 years with an All Upfront payment offer the highest stable, guaranteed discount (up to 72%). *Note:* While Spot Instances can reach up to 90% savings, they do not offer guaranteed availability and are not considered a standard pricing option for stable workloads.
</details>

---

### **Question 48**
Which tool allows customers to set alerts when their AWS costs exceed predefined thresholds?
*   A. AWS Cost Explorer
*   B. AWS Pricing Calculator
*   C. AWS Budgets
*   D. AWS Billing Dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Budgets**
*   **Explanation:** **AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.
</details>

---

### **Question 49**
Which of the following is a best practice for securing the AWS Root user account?
*   A. Share credentials with team leads
*   B. Use root access keys for routine API calls
*   C. Enable Multi-Factor Authentication (MFA) and delete the root access keys
*   D. Disable root user login

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Enable Multi-Factor Authentication (MFA) and delete the root access keys**
*   **Explanation:** Securing the **Root User** requires enabling MFA to prevent unauthorized console login and deleting administrative access keys to prevent programmatic API use.
</details>

---

### **Question 50**
Which disaster recovery scenario offers the lowest probability of downtime?
*   A. Backup and restore
*   B. Pilot light
*   C. Warm standby
*   D. Multi-site active-active

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Multi-site active-active**
*   **Explanation:** In a **Multi-Site Active-Active** setup, workloads run concurrently across multiple active environments. If one site goes down, traffic is routed to the remaining active sites, providing near-zero downtime.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
