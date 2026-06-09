# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 3

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Where can you store files in AWS? (Choose TWO)
*   A. Amazon EFS
*   B. Amazon SNS
*   C. Amazon EBS
*   D. Amazon ECS
*   E. Amazon EMR

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EFS** & **C. Amazon EBS**
*   **Explanation:**
    *   **Amazon EFS** (Elastic File System) provides shared, elastic file storage accessible by multiple EC2 instances.
    *   **Amazon EBS** (Elastic Block Store) provides persistent block storage volumes designed for single EC2 instances.
    *   *SNS* is a pub/sub messaging service, *ECS* runs containers, and *EMR* is for big data processing.
</details>

---

### **Question 2**
Which AWS service can be used to store and reliably deliver messages across distributed systems?
*   A. Amazon Simple Queue Service
*   B. AWS Storage Gateway
*   C. Amazon Simple Email Service
*   D. Amazon Simple Storage Service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Simple Queue Service**
*   **Explanation:** **Amazon SQS** (Simple Queue Service) is a fully managed message queuing service that stores messages reliably until processed, decoupling microservices and distributed application components.
</details>

---

### **Question 3**
Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?
*   A. Pay less as AWS grows
*   B. Pay as you go
*   C. Pay less by using more
*   D. Save when you reserve

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Save when you reserve**
*   **Explanation:** The **Save when you reserve** model allows you to achieve significant cost savings (up to 72%) compared to On-Demand pricing by committing to a 1-year or 3-year term for AWS resources (like EC2 Reserved Instances or Savings Plans).
</details>

---

### **Question 4**
A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?
*   A. Right-size before and after migration
*   B. Use a Multi-Region Active-Passive architecture
*   C. Combine On-demand Capacity Reservations with Saving Plans
*   D. Use a Multi-Region Active-Active architecture

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Right-size before and after migration**
*   **Explanation:** **Right-sizing** is the process of matching instance types and sizes to your actual workload performance and capacity requirements. Analyzing utilization metrics and scaling down over-provisioned instances before and after migrating to RDS ensures you pay only for what you need.
</details>

---

### **Question 5**
What is the primary storage service used by Amazon RDS database instances?
*   A. Amazon Glacier
*   B. Amazon EBS
*   C. Amazon EFS
*   D. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EBS**
*   **Explanation:** Amazon RDS DB instances run on virtual machines and use **Amazon Elastic Block Store (EBS)** SSD-backed volumes (General Purpose or Provisioned IOPS) as their primary database storage.
</details>

---

### **Question 6**
A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?
*   A. AWS CodePipeline
*   B. AWS X-Ray
*   C. Amazon Inspector
*   D. AWS CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS X-Ray**
*   **Explanation:** **AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using microservices. It provides a visual trace map of requests as they travel across multiple services, highlighting where latency or errors are occurring.
</details>

---

### **Question 7**
Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)
*   A. Amazon Redshift
*   B. AWS Snowball
*   C. Amazon Simple Storage Service
*   D. Amazon EBS
*   E. Amazon DynamoDB

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon Simple Storage Service** & **E. Amazon DynamoDB**
*   **Explanation:**
    *   **Amazon S3** (C) natively replicates objects across a minimum of three geographically separate Availability Zones (AZs) in a region.
    *   **Amazon DynamoDB** (E) automatically spreads data and traffic across multiple AZs to achieve built-in high availability.
    *   *EBS* and *Redshift* are provisioned within a single AZ by default.
</details>

---

### **Question 8**
What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)
*   A. AWS Regions
*   B. Multi-AZ Deployment
*   C. Automatic patching
*   D. Read Replicas
*   E. Edge Locations

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Multi-AZ Deployment** & **D. Read Replicas**
*   **Explanation:**
    *   **Multi-AZ Deployment** (B) replicates database updates synchronously to a standby instance in a different AZ, providing automatic failover if the primary instance crashes.
    *   **Read Replicas** (D) can be promoted to a standalone primary database if disaster strikes, increasing overall database availability.
</details>

---

### **Question 9**
Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?
*   A. Replicate the current resources across multiple Availability Zones within the same region.
*   B. Migrate the application to a hosting provider in Asia.
*   C. Recreate the website content.
*   D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.**
*   **Explanation:** **Amazon CloudFront** caches static and dynamic website content at global **Edge Locations**. By using CloudFront, users in Asia will pull cached content from regional edge locations inside Asia, bypassing long-distance network round-trips to the US West region.
</details>

---

### **Question 10**
An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?
*   A. AWS Identity and Access Management
*   B. Amazon RDS
*   C. Network Access Control Lists
*   D. Amazon EMR

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Identity and Access Management**
*   **Explanation:** **AWS IAM** is the service used to manage access to AWS services and resources securely. It allows you to create users, groups, and roles, and associate fine-grained permissions policies to control developer interactions.
</details>

---

### **Question 11**
Using Amazon EC2 falls under which of the following cloud computing models?
*   A. Iaas & SaaS
*   B. IaaS
*   C. SaaS
*   D. PaaS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. IaaS**
*   **Explanation:** **Infrastructure as a Service (IaaS)** provides raw access to networking, computers (virtual or dedicated hardware), and storage. Running Amazon EC2 instances gives you full administrative control over the guest OS, making it a classic IaaS model.
</details>

---

### **Question 12**
Which of the below is a best-practice when building applications on AWS?
*   A. Strengthen physical security by applying the principle of least privilege.
*   B. Ensure that the application runs on hardware from trusted vendors.
*   C. Use IAM policies to maintain performance.
*   D. Decouple the components of the application so that they run independently.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Decouple the components of the application so that they run independently.**
*   **Explanation:** **Decoupling** application components (e.g. using message brokers like SQS or SNS) reduces inter-dependencies. If one component goes offline, other layers (like input submission) can buffer requests, preventing a cascading outage.
</details>

---

### **Question 13**
Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
*   A. Amazon EBS
*   B. Amazon SQS
*   C. Amazon Instance store
*   D. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon S3**
*   **Explanation:** **Amazon S3** is an object storage service designed to store and retrieve any amount of unstructured data (like photos and videos) from anywhere on the web, offering high durability and cost-efficiency.
</details>

---

### **Question 14**
Amazon Glacier is an Amazon S3 storage class that is suitable for storing […] & […]. (Choose TWO)
*   A. Active archives
*   B. Dynamic websites’ assets
*   C. Long-term analytic data
*   D. Active databases
*   E. Cached data

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Active archives** & **C. Long-term analytic data**
*   **Explanation:** **Amazon S3 Glacier** is designed for low-cost archiving of data that does not require immediate access. Suitable use cases include long-term data archives (A) and regulatory compliance backups or cold analytical data (C) that are accessed infrequently.
</details>

---

### **Question 15**
What does Amazon Elastic Beanstalk provide?
*   A. A PaaS solution to automate application deployment.
*   B. A compute engine for Amazon ECS.
*   C. A scalable file storage solution for use with AWS and on-premises servers.
*   D. A NoSQL database service.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. A PaaS solution to automate application deployment.**
*   **Explanation:** **Amazon Elastic Beanstalk** is a Platform as a Service (PaaS) offering that allows you to upload application code. It automatically manages server provisioning, load balancing, scaling, and system health checks, abstracting infrastructure management.
</details>

---

### **Question 16**
What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?
*   A. Amazon Kinesis
*   B. Security groups
*   C. Amazon Inspector
*   D. AWS Network Access Control Lists

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon Inspector**
*   **Explanation:** **Amazon Inspector** is an automated vulnerability management service that continually scans EC2 workloads, container images, and Lambda functions for software vulnerabilities and network path exposure.
</details>

---

### **Question 17**
Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)
*   A. Patch management controls
*   B. Database controls
*   C. Awareness & Training
*   D. Environmental controls
*   E. Physical controls

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Environmental controls** & **E. Physical controls**
*   **Explanation:** **Inherited controls** are security elements that the customer does not configure; they are fully managed by AWS. These include the **physical security** of AWS data centers (E) and **environmental controls** (UPS power, HVAC, fire suppression) (D).
</details>

---

### **Question 18**
A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?
*   A. Reserved instances - No Upfront
*   B. Reserved instances - Partial Upfront
*   C. On-Demand instances
*   D. Spot Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Reserved instances - Partial Upfront**
*   **Explanation:** When you commit to a database node for three years, purchasing **Reserved Instances** yields substantial savings over On-Demand rates. A **Partial Upfront** (or All Upfront) option provides a larger discount tier than No Upfront. Spot instances are not supported for managed Amazon RDS instances.
</details>

---

### **Question 19**
Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?
*   A. Elasticity
*   B. Global reach
*   C. Data durability
*   D. High availability

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Global reach**
*   **Explanation:** AWS’s massive global infrastructure footprint—comprising multiple Regions and Edge Locations globally—gives developers **global reach**, letting them deploy app resources closer to international users to minimize latency.
</details>

---

### **Question 20**
Savings Plans are available for which of the following AWS compute services? (Choose TWO)
*   A. AWS Batch
*   B. AWS Outposts
*   C. Amazon Lightsail
*   D. Amazon EC2
*   E. AWS Lambda

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2** & **E. AWS Lambda**
*   **Explanation:** **Compute Savings Plans** offer up to 66% discount in exchange for a commitment to a consistent amount of compute usage ($/hour) across **Amazon EC2**, **AWS Fargate**, and **AWS Lambda**.
</details>

---

### **Question 21**
A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?
*   A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.
*   B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.
*   C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.
*   D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.**
*   **Explanation:** To guarantee resilience against catastrophic environmental outages (like hurricanes or earthquakes affecting an entire region), deploying resources across **multiple AWS Regions** using an **Active-Active** routing strategy ensures that if one Region fails, another instantly processes all user traffic.
</details>

---

### **Question 22**
Which statement is correct with regards to AWS service limits? (Choose TWO)
*   A. You can contact AWS support to increase the service limits.
*   B. Each IAM user has the same service limit.
*   C. There are no service limits on AWS.
*   D. You can use the AWS Trusted Advisor to monitor your service limits.
*   E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. You can contact AWS support to increase the service limits.** & **D. You can use the AWS Trusted Advisor to monitor your service limits.**
*   **Explanation:**
    *   Most AWS service limits (now called Service Quotas) are adjustable, and customers can request an increase by raising a case with **AWS Support** (A).
    *   **AWS Trusted Advisor** contains Service Limit checks to monitor resource usage and alerts you when your account usage approaches default limits (D).
</details>

---

### **Question 23**
What is the AWS tool that enables you to use scripts to manage all AWS services and resources?
*   A. AWS Console
*   B. AWS Service Catalog
*   C. AWS OpsWorks
*   D. AWS CLI

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS CLI**
*   **Explanation:** The **AWS Command Line Interface (CLI)** is an open-source command-line tool that lets you script and automate interactions with AWS services and resources directly through shell terminals.
</details>

---

### **Question 24**
What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)
*   A. AWS Artifact
*   B. AWS Cloud9
*   C. AWS Direct Connect
*   D. AWS CloudTrail
*   E. AWS VPN

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Direct Connect** & **E. AWS VPN**
*   **Explanation:**
    *   **AWS Direct Connect** (C) creates a dedicated physical network connection from an on-premises network to AWS.
    *   **AWS VPN** (E) establishes a secure, encrypted tunnel over the public internet to connect on-premises environments with AWS.
</details>

---

### **Question 25**
A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?
*   A. AWS EC2 Auto Recovery
*   B. AWS Auto Scaling
*   C. AWS Network Load Balancer
*   D. AWS Application Load Balancer

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Application Load Balancer**
*   **Explanation:** An **Application Load Balancer (ALB)** operates at the application layer (Layer 7) and is designed to distribute incoming HTTP/HTTPS traffic evenly and intelligently across targets (EC2 instances, microservices) based on request routing rules.
</details>

---

### **Question 26**
Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?
*   A. Amazon Neptune
*   B. Amazon Aurora
*   C. Amazon RDS for SQL Server
*   D. Amazon RDS for PostgreSQL

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Aurora**
*   **Explanation:** **Amazon Aurora** is a relational database built for the cloud. Aurora Serverless is an on-demand, auto-scaling configuration that automatically starts up, scales down, or shuts database capacity off based on active workload usage.
</details>

---

### **Question 27**
Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)
*   A. AWS CloudHSM
*   B. Security Groups
*   C. AWS Batch
*   D. AWS IAM
*   E. Network Access Control Lists (Network ACLs)

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Security Groups** & **E. Network Access Control Lists (Network ACLs)**
*   **Explanation:** At the VPC layer, **Security Groups** (instance-level firewall) and **Network ACLs** (subnet-level firewall) filter out traffic from malicious IP addresses, forming a primary line of defense against network flood and DDoS attacks.
</details>

---

### **Question 28**
What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?
*   A. Amazon Redshift
*   B. Amazon Kinesis
*   C. Amazon DynamoDB
*   D. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Redshift**
*   **Explanation:** **Amazon Redshift** is a fully managed petabyte-scale data warehouse service in the cloud. It uses Columnar Storage and Massively Parallel Processing (MPP) to run complex analytics queries at speed.
</details>

---

### **Question 29**
Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?
*   A. Application development
*   B. Market research
*   C. Business analysis
*   D. Physical hardware

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Physical hardware**
*   **Explanation:** A **Total Cost of Ownership (TCO)** analysis compares direct and indirect costs. When evaluating cloud migration vs on-premises hosting, you must account for the capital cost of purchasing and maintaining physical host hardware, network switches, racks, storage arrays, power, and cooling facilities on-premises.
</details>

---

### **Question 30**
How are AWS customers billed for Linux-based Amazon EC2 usage?
*   A. EC2 instances will be billed on one second increments, with a minimum of one minute.
*   B. EC2 instances will be billed on one hour increments, with a minimum of one day.
*   C. EC2 instances will be billed on one minute increments, with a minimum of one hour.
*   D. EC2 instances will be billed on one day increments, with a minimum of one month.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. EC2 instances will be billed on one second increments, with a minimum of one minute.**
*   **Explanation:** AWS charges for Linux-based EC2 instances on a **per-second** basis (minimum charge of 60 seconds), allowing users to launch and terminate instances without paying for unused fractional hours.
</details>

---

### **Question 31**
Which of the following will impact the price paid for an EC2 instance? (Choose TWO)
*   A. Instance type
*   B. The Availability Zone where the instance is provisioned
*   C. Load balancing
*   D. Number of buckets
*   E. Number of private IPs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Instance type** & **B. The Availability Zone where the instance is provisioned**
*   **Explanation:**
    *   **Instance type** (A) determines the CPU, RAM, and hardware configuration, which directly dictates hourly costs.
    *   **Location** (B) (specifically the AWS Region and sometimes the AZ) has slightly varying base pricing tables based on regional infrastructure costs.
</details>

---

### **Question 32**
A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?
*   A. By creating an AWS Config template from the old instance and launching a new instance from it.
*   B. By creating an EBS Snapshot of the old instance.
*   C. By installing Aurora on EC2 and launching a new instance from it.
*   D. By creating an AMI from the old instance and launching a new instance from it.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. By creating an AMI from the old instance and launching a new instance from it.**
*   **Explanation:** An **Amazon Machine Image (AMI)** is a packaged template configuration containing the guest OS, software tools, settings, and file structures. You can capture a snapshot of a configured instance as an AMI, and then spin up multiple identical clone instances instantly.
</details>

---

### **Question 33**
A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?
*   A. IAM Principals
*   B. AWS Service Control Policies (SCPs)
*   C. IAM policies
*   D. AWS Fargate

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Service Control Policies (SCPs)**
*   **Explanation:** **Service Control Policies (SCPs)** are organization policy documents used to manage maximum permission thresholds in an organization. You can attach SCPs to accounts or Organizational Units (OUs) to restrict access to specific AWS services or API actions (e.g. denying access to create resources in specific regions).
</details>

---

### **Question 34**
Which of the following statements describes the AWS Cloud’s agility?
*   A. AWS allows you to host your applications in multiple regions around the world.
*   B. AWS provides customizable hardware at the lowest possible cost.
*   C. AWS allows you to provision resources in minutes.
*   D. AWS allows you to pay upfront to reduce costs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS allows you to provision resources in minutes.**
*   **Explanation:** **Agility** refers to speed and flexibility. With cloud computing, you can launch databases, servers, or serverless functions in minutes, reducing the time required to procure physical equipment from weeks or months down to minutes.
</details>

---

### **Question 35**
What are the benefits of using the Amazon Relational Database Service? (Choose TWO)
*   A. Lower administrative burden
*   B. Complete control over the underlying host
*   C. Resizable compute capacity
*   D. Scales automatically to larger or smaller instance types
*   E. Supports the document and key-value data structure.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Lower administrative burden** & **C. Resizable compute capacity**
*   **Explanation:**
    *   RDS eliminates the **administrative burden** (A) of OS installation, patching, hardware deployment, and manual database backups.
    *   It offers **resizable compute capacity** (C), allowing you to change instance sizing (scaling up/down vertically) to meet workload variations.
</details>

---

### **Question 36**
What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?
*   A. Internet Gateway
*   B. AWS IQ
*   C. AWS Direct Connect
*   D. AWS Site-to-Site VPN

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Site-to-Site VPN**
*   **Explanation:** **AWS Site-to-Site VPN** creates an IPsec-encrypted VPN connection between an on-premises Customer Gateway and a Virtual Private Gateway (or Transit Gateway) in AWS over the public internet.
</details>

---

### **Question 37**
What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?
*   A. Enterprise Support
*   B. Developer Support
*   C. Basic Support
*   D. Business Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Business Support**
*   **Explanation:** **Business Support** is the lowest support tier that provides 24x7 phone, email, and chat access to cloud support engineers for troubleshooting. Basic is free (non-technical queries only), and Developer Support only provides business hours email access.
</details>

---

### **Question 38**
Which of the following is used to control network traffic in AWS? (Choose TWO)
*   A. Network Access Control Lists (NACLs)
*   B. Key Pairs
*   C. Access Keys
*   D. IAM Policies
*   E. Security Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Network Access Control Lists (NACLs)** & **E. Security Groups**
*   **Explanation:** 
    *   **NACLs** (A) are stateless firewalls protecting subnets.
    *   **Security Groups** (E) are stateful firewalls protecting individual EC2 instances. Together they control network access paths.
</details>

---

### **Question 39**
A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?
*   A. Reserved instances
*   B. Spot Instances
*   C. On-Demand instances
*   D. Dedicated instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Spot Instances**
*   **Explanation:** **Spot Instances** provide up to 90% discount compared to On-Demand instances. Since the media transcoding application is stateless and resilient enough to recover quickly from sudden instance terminations, Spot instances are the most cost-effective option.
</details>

---

### **Question 40**
Which AWS Service provides the current status of all AWS Services in all AWS Regions?
*   A. AWS Service Health Dashboard
*   B. AWS Management Console
*   C. Amazon CloudWatch
*   D. AWS Personal Health Dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Service Health Dashboard**
*   **Explanation:** The public **AWS Service Health Dashboard** (also known as the AWS Health Dashboard - Service Status) lists the general operational status of all AWS services across all regions. The *Personal Health Dashboard* provides status updates specific to your running accounts and resources.
</details>

---

### **Question 41**
Which AWS service or feature can be used to call AWS Services from different programming languages?
*   A. AWS Software Development Kit
*   B. AWS Command Line Interface
*   C. AWS CodeDeploy
*   D. AWS Management Console

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Software Development Kit**
*   **Explanation:** **AWS SDKs** provide language-specific library components (e.g. for Java, Python, .NET, Node.js) that allow developers to code integrations and control AWS resources directly in their applications.
</details>

---

### **Question 42**
Which AWS Service can be used to register a new domain name?
*   A. Amazon Personalize
*   B. Amazon Route 53
*   C. AWS KMS
*   D. AWS Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Route 53**
*   **Explanation:** **Amazon Route 53** acts as a Domain Name Registrar, permitting users to purchase, register, and manage DNS records for domain names (such as `.com`, `.net`, `.org`).
</details>

---

### **Question 43**
App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)
*   A. AWS CloudFormation
*   B. AWS Migration Hub
*   C. AWS IAM
*   D. AWS Elastic Beanstalk
*   E. Amazon Macie

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CloudFormation** & **D. AWS Elastic Beanstalk**
*   **Explanation:**
    *   **AWS CloudFormation** (A) automates the creation of infrastructure resources via declarative JSON/YAML templates.
    *   **AWS Elastic Beanstalk** (D) automates web application deployments, taking care of load balancers, auto-scaling, and code deployment automatically.
</details>

---

### **Question 44**
Which AWS service provides cost-optimization recommendations?
*   A. AWS Trusted Advisor
*   B. AWS Pricing Calculator
*   C. Amazon QuickSight
*   D. AWS X-Ray

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Trusted Advisor**
*   **Explanation:** **AWS Trusted Advisor** inspects your AWS environment and provides optimization checks. Its **Cost Optimization** category lists idle resources, underutilized instances, and unused resources that can be deleted to save money.
</details>

---

### **Question 45**
A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?
*   A. VPC Peering
*   B. AWS Transit Gateway
*   C. Amazon Connect
*   D. Security Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Transit Gateway**
*   **Explanation:** **AWS Transit Gateway** acts as a central cloud router. It connects VPCs and on-premises networks together, replacing complex mesh topologies (VPC Peering) with a hub-and-spoke configuration that is much easier to manage.
</details>

---

### **Question 46**
What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)
*   A. Instances can be shut down by AWS at any time with no notification.
*   B. Reserved instances require at least a one-year pricing commitment.
*   C. There is no additional charge for using dedicated instances.
*   D. Reserved instances provide a significant discount compared to on-demand instances.
*   E. Reserved instances are best suited for periodic workloads.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Reserved instances require at least a one-year pricing commitment.** & **D. Reserved instances provide a significant discount compared to on-demand instances.**
*   **Explanation:**
    *   Reserved Instances require a contract commitment of either **1 year or 3 years** (B).
    *   In exchange for this commitment, AWS grants a **significant discount** (up to 72%) compared to regular On-Demand hourly prices (D).
</details>

---

### **Question 47**
Why does every AWS Region contain multiple Availability Zones?
*   A. Multiple Availability Zones allows you to build resilient and highly available architectures.
*   B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.
*   C. Multiple Availability Zones allows for data replication and global reach.
*   D. Multiple Availability Zones within a region increases the storage capacity available in that region.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Multiple Availability Zones allows you to build resilient and highly available architectures.**
*   **Explanation:** Availability Zones are physically isolated data center structures. By deploying applications across multiple AZs within a Region, you create a failover topology; if one AZ fails (e.g. from power cut or local disaster), the other AZs continue processing traffic, ensuring high availability.
</details>

---

### **Question 48**
What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?
*   A. On-Demand Instances
*   B. Spot Instances
*   C. Reserved Instances - All Upfront
*   D. Reserved Instances - No Upfront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. On-Demand Instances**
*   **Explanation:** For a short-term workload lasting only 2 months that cannot afford interruptions (must always be available, ruling out Spot), **On-Demand Instances** are the most cost-effective option. Reserved instances have a minimum commitment period of 1 year.
</details>

---

### **Question 49**
Which of the following is a benefit of running an application in multiple Availability Zones?
*   A. Allows you to exceed AWS service limits.
*   B. Reduces application response time between servers and global users.
*   C. Increases available compute capacity.
*   D. Increases the availability of your application.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Increases the availability of your application.**
*   **Explanation:** Replicating resources across multiple AZs ensures that if a localized power, network, or hardware failure disables one Availability Zone, the application remains accessible in other zones, thereby increasing overall availability.
</details>

---

### **Question 55**
Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?
*   A. AWS sells the old devices to other hosting providers.
*   B. AWS destroys the old devices in accordance with industry-standard practices.
*   C. AWS sends the old devices for remanufacturing.
*   D. AWS stores the old devices in a secure place.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS destroys the old devices in accordance with industry-standard practices.**
*   **Explanation:** When AWS storage devices (EBS drives, S3 disks) reach the end of their lifecycle, AWS implements strict media sanitization processes (such as degaussing and physical shredding) to prevent raw data from ever being recovered.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
