# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 10

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)
*   A. AWS Concierge.
*   B. AWS CloudFormation.
*   C. Amazon Simple Storage Service (Amazon S3).
*   D. Amazon EC2 Auto Scaling.
*   E. AWS Management Console.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CloudFormation.** & **E. AWS Management Console.**
*   **Explanation:** An RDS cluster can be provisioned graphically via the **AWS Management Console** (E) or programmatically configured using Infrastructure as Code (IaC) via **AWS CloudFormation** templates (B).
</details>

---

### **Question 2**
Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?
*   A. One-year, No Upfront, Standard RI pricing.
*   B. One-year, All Upfront, Convertible RI pricing.
*   C. Three-year, All Upfront, Standard RI pricing.
*   D. Three-year, No Upfront, Convertible RI pricing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Three-year, All Upfront, Standard RI pricing.**
*   **Explanation:** Standard RIs yield larger discounts than Convertible RIs. Longer commitments (3-year vs. 1-year) and payment choices (All Upfront vs. No/Partial Upfront) produce the largest discounts. Therefore, 3-year, All Upfront, Standard RIs offer the highest average savings (up to 72%).
</details>

---

### **Question 3**
Which of the following are features of Amazon CloudWatch Logs? (Select TWO)
*   A. Summaries by Amazon Simple Notification Service (Amazon SNS).
*   B. Free Amazon Elasticsearch Service analytics.
*   C. Provided at no charge.
*   D. Real-time monitoring.
*   E. Adjustable retention.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Real-time monitoring.** & **E. Adjustable retention.**
*   **Explanation:** CloudWatch Logs allows you to track and store system and application logs, supporting:
    *   **Real-time monitoring** (D) of log entries to identify issues.
    *   **Adjustable retention** (E) where you set log group retention limits from 1 day to indefinite.
</details>

---

### **Question 4**
Which of the following is an AWS-managed compute service?
*   A. Amazon SWF.
*   B. Amazon EC2.
*   C. AWS Lambda.
*   D. Amazon Aurora.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Lambda.**
*   **Explanation:** **AWS Lambda** is a fully managed serverless compute service. EC2 is customer-managed compute (IaaS), SWF is a workflow coordinator, and Aurora is a database service.
</details>

---

### **Question 5**
A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?
*   A. Amazon Elastic Compute Cloud (Amazon EC2).
*   B. AWS Lambda.
*   C. Amazon DynamoDB.
*   D. AWS CodeCommit.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Lambda.**
*   **Explanation:** **AWS Lambda** executes developer code on-demand without provisioning or managing virtual machines, eliminating physical and software compute capacity maintenance burdens.
</details>

---

### **Question 6**
Which of the following is the customer’s responsibility under the AWS shared responsibility model?
*   A. Patching underlying infrastructure
*   B. Physical security
*   C. Patching Amazon EC2 instances
*   D. Patching network infrastructure

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Patching Amazon EC2 instances**
*   **Explanation:** Under the Shared Responsibility Model, patching the guest operating system and applications installed on EC2 instances is the customer's responsibility (C).
</details>

---

### **Question 7**
According to the AWS shared responsibility model who is responsible for configuration management?
*   A. It is solely the responsibility of the customer.
*   B. It is solely the responsibility of AWS.
*   C. It is shared between AWS and the customer.
*   D. It is not part of the AWS shared responsibility model.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It is shared between AWS and the customer.**
*   **Explanation:** Configuration management is a **shared control**. AWS configures physical network infrastructure and hardware systems, while the customer configures their deployed resources (OS, subnets, firewalls, and application code).
</details>

---

### **Question 8**
Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
*   A. Amazon GuardDuty.
*   B. Amazon Macie.
*   C. Amazon Inspector.
*   D. AWS Shield.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Macie.**
*   **Explanation:** **Amazon Macie** is a fully managed data security and privacy service that leverages machine learning and pattern matching to discover, classify, and secure sensitive information (like PII) stored in Amazon S3.
</details>

---

### **Question 9**
Which of the following BEST describe the AWS pricing model? (Select TWO)
*   A. Fixed-term.
*   B. Pay-as-you-go.
*   C. Colocation.
*   D. Planned.
*   E. Variable cost.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Pay-as-you-go.** & **E. Variable cost.**
*   **Explanation:** AWS services feature utility pricing: you pay for resources as you use them (**pay-as-you-go**) (B), yielding a **variable cost** (E) structure that adjusts alongside active usage demand.
</details>

---

### **Question 10**
Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)
*   A. Ensuring that application data is encrypted at rest.
*   B. Ensuring that AWS NTP servers are set to the correct time.
*   C. Ensuring that users have received security training in the use of AWS services.
*   D. Ensuring that access to data centers is restricted.
*   E. Ensuring that hardware is disposed of properly.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Ensuring that application data is encrypted at rest.** & **C. Ensuring that users have received security training in the use of AWS services.**
*   **Explanation:** The customer manages security "in" the cloud, which includes configuring data-at-rest encryption (A) and managing security training awareness for their own staff users (C). Datacenter security and hardware disposal are AWS responsibilities.
</details>

---

### **Question 11**
A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?
*   A. Create one global AWS account and move all AWS resources to that account.
*   B. Sign up for three years of Reserved Instance pricing up front.
*   C. Use the consolidated billing feature from AWS Organizations.
*   D. Sign up for the AWS Enterprise support plan to get volume discounts.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Use the consolidated billing feature from AWS Organizations.**
*   **Explanation:** **Consolidated billing** aggregates usage across linked accounts under a single master organization account, helping qualify for volume discount tiers without requiring changes to active resources.
</details>

---

### **Question 12**
Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?
*   A. A Partial Upfront Reserved Instances for a 1-year term.
*   B. All Upfront Reserved instances for a 1 year form.
*   C. All Upfront Reserved Instances for a 3 year term.
*   D. No Upfront Reserved Instances for a 3 year term.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. All Upfront Reserved Instances for a 3 year term.**
*   **Explanation:** Standard RIs with a **3-year term** combined with **All Upfront** payment offer the highest discount percentage compared to standard On-Demand rates.
</details>

---

### **Question 13**
Which AWS services should be used for read/write of constantly changing data? (Select TWO)
*   A. Amazon Glacier.
*   B. Amazon RDS.
*   C. AWS Snowball.
*   D. Amazon Redshift.
*   E. Amazon EFS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon RDS.** & **E. Amazon EFS.**
*   **Explanation:** Frequently updated database records and transactional files require active read/write capacities.
    *   **Amazon RDS** (B) is a managed relational database service.
    *   **Amazon EFS** (E) is a scalable shared network file system.
</details>

---

### **Question 14**
Which AWS service allows users to identify the changes made to a resource over time?
*   A. Amazon Inspector.
*   B. AWS Config.
*   C. AWS Service Catalog.
*   D. AWS IAM.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Config.**
*   **Explanation:** **AWS Config** monitors and logs configuration settings for AWS resources. It records configurations continuously, keeping a historical timeline of modifications.
</details>

---

### **Question 15**
According to best practices, how should an application be designed to run in the AWS Cloud?
*   A. Use tightly coupled components.
*   B. Use loosely coupled components.
*   C. Use infrequently coupled components.
*   D. Use frequently coupled components.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Use loosely coupled components.**
*   **Explanation:** Building **loosely coupled components** ensures that failure in one application service does not trigger cascading failures across other parts of the application architecture.
</details>

---

### **Question 16**
Which benefits are included with the AWS Business Support plan? (Select TWO)
*   A. 24/7 assistance by way of live chat or a telephone call.
*   B. Support from a dedicated AWS Technical Account Manager.
*   C. An unlimited number of cases and contacts.
*   D. 15-minute response time for production system interruption cases.
*   E. Annual operational reviews with AWS Solutions Architects.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. 24/7 assistance by way of live chat or a telephone call.** & **C. An unlimited number of cases and contacts.**
*   **Explanation:**
    *   The **Business Support** plan features 24x7 phone, email, and chat access to Cloud Support Engineers (A).
    *   It permits an **unlimited number of support cases and contacts** (C).
    *   *Note:* Dedicated TAMs and annual operational reviews require the Enterprise support tier.
</details>

---

### **Question 17**
Which of the following is an AWS managed Domain Name System (DNS) web service?
*   A. Amazon Route 53.
*   B. Amazon Neptune.
*   C. Amazon SageMaker.
*   D. Amazon Lightsail.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Route 53.**
*   **Explanation:** **Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service.
</details>

---

### **Question 18**
A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?
*   A. Dedicated Hosts.
*   B. Dedicated Instances.
*   C. Spot Instances.
*   D. Reserved Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Dedicated Hosts.**
*   **Explanation:** **Dedicated Hosts** provision physical host servers dedicated solely to a single customer's use, providing the socket/core visibility needed to satisfy licensing and compliance requirements.
</details>

---

### **Question 19**
Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
*   A. Dedicated RIs.
*   B. Scheduled RIs.
*   C. Convertible RIs.
*   D. Standard RIs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Convertible RIs.**
*   **Explanation:** **Convertible Reserved Instances** allow you to exchange the RI for another Convertible RI of equal or greater value to modify attributes like family, size, or OS type over the term.
</details>

---

### **Question 20**
Which service is best for storing common database query results, which helps to alleviate database access load?
*   A. Amazon Machine Learning.
*   B. Amazon SQS.
*   C. Amazon ElastiCache.
*   D. Amazon EC2 Instance Store.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon ElastiCache.**
*   **Explanation:** **Amazon ElastiCache** acts as an in-memory cache. Caching database query results in memory reduces database query loads and improves application speed.
</details>

---

### **Question 21**
When should a company consider using Amazon EC2 Spot Instances? (Select TWO)
*   A. For non-production applications.
*   B. For stateful workloads.
*   C. For applications that cannot have interruptions.
*   D. For fault-tolerant flexible applications.
*   E. For sensitive database applications.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. For non-production applications.** & **D. For fault-tolerant flexible applications.**
*   **Explanation:** Spot instances leverage spare capacity at steep discounts. However, they can be reclaimed by AWS on short notice, making them ideal only for **non-production environments** (A) and **fault-tolerant, flexible applications** (D) (like batch computations).
</details>

---

### **Question 22**
Which AWS tools assist with estimating costs? (Select three)
*   A. Detailed billing report.
*   B. Cost allocation tags.
*   C. AWS Simple Monthly Calculator.
*   D. AWS Total Cost of Ownership (TCO) Calculator.
*   E. Cost Estimator.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Cost allocation tags.**, **C. AWS Simple Monthly Calculator.** & **D. AWS Total Cost of Ownership (TCO) Calculator.**
*   **Explanation:**
    *   **Simple Monthly Calculator** (C) estimates monthly service billing based on resource inputs.
    *   **TCO Calculator** (D) compares on-premises database/hardware costs against AWS.
    *   **Cost allocation tags** (B) categorize resources to track and forecast budgets.
</details>

---

### **Question 23**
A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?
*   A. Elastic Load Balancer.
*   B. Amazon EC2 Auto Scaling.
*   C. Amazon Route 53.
*   D. Amazon CloudFront.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EC2 Auto Scaling.**
*   **Explanation:** **Amazon EC2 Auto Scaling** automatically adjusts compute fleet capacities, adding instances during traffic spikes and terminating them during idle periods.
</details>

---

### **Question 24**
Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
*   A. Enterprise.
*   B. Business.
*   C. Developer.
*   D. Basic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Enterprise.**
*   **Explanation:** **Infrastructure Event Management (IEM)** is included at no additional charge in the **Enterprise** support tier. (It is available in the Business plan for an additional fee).
</details>

---

### **Question 25**
Access keys in AWS Identity and Access Management (IAM) are used to:
*   A. Log in to the AWS Management Console.
*   B. Make programmatic calls to AWS from AWS APIs.
*   C. Log in to Amazon EC2 instances.
*   D. Authenticate to AWS CodeCommit repositories.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Make programmatic calls to AWS from AWS APIs.**
*   **Explanation:** Access Keys (Access Key ID and Secret Access Key) are cryptographic credentials used to sign programmatic API calls made via the CLI, SDKs, or application code.
</details>

---

### **Question 26**
Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
*   A. AWS Glue.
*   B. AWS Data Pipeline.
*   C. Amazon CloudSearch.
*   D. Amazon Athena.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Athena.**
*   **Explanation:** **Amazon Athena** is an interactive serverless query service designed to analyze S3 data directly using standard SQL queries, with no database load overhead.
</details>

---

### **Question 27**
How does AWS shorten the time to provision IT resources?
*   A. It supplies an online IT ticketing platform for resource requests.
*   B. It supports automatic code validation services.
*   C. It provides the ability to programmatically provision existing resources.
*   D. It automates the resource request process from a company’s IT vendor list.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It provides the ability to programmatically provision existing resources.**
*   **Explanation:** Because AWS resource management is API-driven, developers can instantly **programmatically provision resources** using CLI or SDK utilities, decreasing server setup cycles from weeks to minutes.
</details>

---

### **Question 28**
Which AWS services can be used to gather information about AWS account activity? (Select TWO)
*   A. Amazon CloudFront.
*   B. AWS Cloud9.
*   C. AWS CloudTrail.
*   D. AWS CloudHSM.
*   E. Amazon CloudWatch.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CloudTrail.** & **E. Amazon CloudWatch.**
*   **Explanation:**
    *   **AWS CloudTrail** (C) logs API calls and account user activity history.
    *   **Amazon CloudWatch** (E) monitors resource metrics and collects log data.
</details>

---

### **Question 29**
Which of the following are characteristics of Amazon S3? (Select TWO)
*   A. A global file system.
*   B. An object store.
*   C. A local file store.
*   D. A network file system.
*   E. A durable storage system.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. An object store.** & **E. A durable storage system.**
*   **Explanation:** Amazon S3 stores files as key-value objects in flat namespaces (**object store**) (B) and replicates data automatically to ensure high **durability** (99.999999999% durability) (E).
</details>

---

### **Question 30**
A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?
*   A. AWS Budgets.
*   B. Cost Explorer.
*   C. AWS Total Cost of Ownership (TCO) Calculator.
*   D. AWS Well-Architected Tool.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Total Cost of Ownership (TCO) Calculator.**
*   **Explanation:** The **AWS TCO Calculator** generates estimations comparing on-premises server and operational expenditures to AWS hosting models, helping justify migration decisions.
</details>

---

### **Question 31**
Which of the following services is in the category of AWS serverless platform?
*   A. Amazon EMR.
*   B. Elastic Load Balancing.
*   C. AWS Lambda.
*   D. AWS Mobile Hub.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Lambda.**
*   **Explanation:** **AWS Lambda** is the core serverless compute service on the AWS serverless platform.
</details>

---

### **Question 32**
The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?
*   A. Cost allocation tags.
*   B. Consolidated billing.
*   C. AWS Budgets.
*   D. AWS Marketplace.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Cost allocation tags.**
*   **Explanation:** **Cost allocation tags** allow labeling resources with metadata, letting teams filter and group expenses by environment, owner, or application.
</details>

---

### **Question 33**
Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?
*   A. AWS Cost Explorer.
*   B. AWS Trusted Advisor.
*   C. Consolidated billing.
*   D. Detailed billing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Trusted Advisor.**
*   **Explanation:** **AWS Trusted Advisor** offers optimization check reports covering Cost Optimization (saving money) and Performance (improving speed).
</details>

---

### **Question 34**
Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
*   A. Cloud-native.
*   B. Partner network.
*   C. Hybrid architecture.
*   D. Infrastructure as a service.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Hybrid architecture.**
*   **Explanation:** A **hybrid architecture** integrates public cloud infrastructure (EC2) with local on-premises workloads (legacy corporate datacenters).
</details>

---

### **Question 35**
What technology enables compute capacity to adjust as loads change?
*   A. Load balancing.
*   B. Automatic failover.
*   C. Round robin.
*   D. Auto Scaling.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Auto Scaling.**
*   **Explanation:** **Auto Scaling** dynamically launches or terminates compute resources in response to changing performance loads.
</details>

---

### **Question 36**
Which AWS service is a managed NoSQL database?
*   A. Amazon Redshift.
*   B. Amazon DynamoDB.
*   C. Amazon Aurora.
*   D. Amazon RDS for MariaDB.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon DynamoDB.**
*   **Explanation:** **Amazon DynamoDB** is AWS's fully managed NoSQL key-value database service. (RDS and Aurora are relational database services).
</details>

---

### **Question 37**
Which of the following is a correct relationship between regions, Availability Zones, and edge locations?
*   A. Data centers contain regions.
*   B. Regions contain Availability Zones.
*   C. Availability Zones contain edge locations.
*   D. Edge locations contain regions.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Regions contain Availability Zones.**
*   **Explanation:** An AWS **Region** represents a geographic area which contains multiple physically isolated, low-latency connected **Availability Zones (AZs)**.
</details>

---

### **Question 38**
What approach to transcoding a large number of individual video files adheres to AWS architecture principles?
*   A. Using many instances in parallel.
*   B. Using a single large instance during off-peak hours.
*   C. Using dedicated hardware.
*   D. Using a large GPU instance type.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Using many instances in parallel.**
*   **Explanation:** AWS architectural guidelines recommend horizontal scaling and parallel processing. Distributing transcoding jobs across **many instances in parallel** (A) improves throughput and cost-efficiency.
</details>

---

### **Question 39**
Which AWS services can host a Microsoft SQL Server database? (Select TWO)
*   A. Amazon EC2.
*   B. Amazon Relational Database Service (Amazon RDS).
*   C. Amazon Aurora.
*   D. Amazon Redshift.
*   E. Amazon S3.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EC2.** & **B. Amazon Relational Database Service (Amazon RDS).**
*   **Explanation:** SQL Server databases can be run as customer-managed hosts on **Amazon EC2** (A) or managed databases on **Amazon RDS for SQL Server** (B).
</details>

---

### **Question 40**
Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
*   A. API keys.
*   B. Access keys.
*   C. User names/Passwords.
*   D. SSH keys.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Access keys.**
*   **Explanation:** Programmatic access keys (comprising Access Key ID and Secret Access Key) must be configured in the AWS CLI to authorize terminal API queries.
</details>

---

### **Question 41**
The user is fully responsible for which action when running workloads on AWS?
*   A. Patching the infrastructure components.
*   B. Maintaining the underlying infrastructure components.
*   C. Maintaining physical and environmental controls.
*   D. Implementing controls to route application traffic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Implementing controls to route application traffic.**
*   **Explanation:** Setting up traffic routing policies (like Route 53 or load balancers) is the customer's responsibility (D). Hardware hosting, physical safety controls, and physical infrastructure patching are managed by AWS.
</details>

---

### **Question 42**
Which AWS support plan includes a dedicated Technical Account Manager?
*   A. Developer.
*   B. Enterprise.
*   C. Business.
*   D. Basic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Enterprise.**
*   **Explanation:** A dedicated Technical Account Manager (TAM) is only included in the **Enterprise** support tier.
</details>

---

### **Question 43**
What time-savings advantage is offered with the use of Amazon Rekognition?
*   A. Amazon Rekognition provides automatic watermarking of images.
*   B. Amazon Rekognition provides automatic detection of objects appearing in pictures.
*   C. Amazon Recognition provides the ability to resize millions of images automatically.
*   D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Rekognition provides automatic detection of objects appearing in pictures.**
*   **Explanation:** **Amazon Rekognition** automates computer vision workflows, instantly detecting objects, faces, text, and scenes in photos and videos.
</details>

---

### **Question 44**
Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
*   A. Amazon AutoScaling.
*   B. Amazon Redshift.
*   C. AWS CloudTrail.
*   D. AWS Lambda.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Lambda.**
*   **Explanation:** Since **AWS Lambda** is serverless, it runs and scales code automatically in response to triggers without requiring manual capacity planning or VM provisioning.
</details>

---

### **Question 45**
Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?
*   A. AWS manages the data stored in Amazon RDS tables.
*   B. AWS manages the maintenance of the operating system.
*   C. AWS automatically scales up instance types on demand.
*   D. AWS manages the database type.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS manages the maintenance of the operating system.**
*   **Explanation:** RDS automates guest operating system installation, patches, and system maintenance updates (B). The customer remains responsible for table schemas, records, and access permissions.
</details>

---

### **Question 46**
A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?
*   A. Implementing elasticity enabling the application to scale up or scale down as demand changes.
*   B. Enabling several EC2 instances to run in parallel to achieve better performance.
*   C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.
*   D. Doubling EC2 computing resources to increase system fault tolerance.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.**
*   **Explanation:** **Decoupling** isolates application services, ensuring failures in individual components (like database writing) do not crash the entire application stack.
</details>

---

### **Question 47**
A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?
*   A. AWS Partner Network Technology Partners.
*   B. AWS Marketplace.
*   C. AWS Partner Network Consulting Partners.
*   D. AWS Service Catalog.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Partner Network Consulting Partners.**
*   **Explanation:** **APN Consulting Partners** are professional service firms (consultancies, system integrators) that help customers design, architect, build, migrate, and manage their applications on AWS.
</details>

---

### **Question 48**
Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
*   A. Amazon Glacier.
*   B. AWS Storage Gateway.
*   C. Amazon S3.
*   D. Amazon EBS.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon S3.**
*   **Explanation:** **Amazon S3** is an object storage service providing immediate read/write access to files, built-in file versioning, and lifecycle management rules.
</details>

---

### **Question 49**
Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?
*   A. Implement automation.
*   B. Design for agility.
*   C. Design for failure.
*   D. Implement elasticity.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Design for failure.**
*   **Explanation:** Distributing workloads across multiple AZs adheres to **designing for failure**, ensuring continuous operation even during total power grid failure in a single zone.
</details>

---

### **Question 50**
Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
*   A. AWS IAM.
*   B. AWS Organizations.
*   C. AWS Schema Conversion Tool.
*   D. AWS Config.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Organizations.**
*   **Explanation:** **AWS Organizations** is designed to centrally govern, manage, consolidate billing, and apply service control policies (SCPs) across multiple AWS accounts.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
