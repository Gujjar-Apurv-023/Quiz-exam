# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 7

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)
*   A. Delete the encryption keys once your data is encrypted.
*   B. With AWS you do not need to worry about encryption.
*   C. Enable S3 Encryption.
*   D. Encrypt the data prior to uploading it.
*   E. Delete all IAM users that have access to S3.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Enable S3 Encryption.** & **D. Encrypt the data prior to uploading it.**
*   **Explanation:** Data stored on Amazon S3 can be secured using:
    *   **Server-Side Encryption** (C) where S3 encrypts objects when saving them to disks inside AWS datacenters.
    *   **Client-Side Encryption** (D) where you encrypt files locally before transmitting/uploading them to S3.
</details>

---

### **Question 2**
Which AWS service helps developers compile and test their code?
*   A. AWS CodeDeploy
*   B. AWS CodeCommit
*   C. CloudEndure
*   D. AWS CodeBuild

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS CodeBuild**
*   **Explanation:** **AWS CodeBuild** is a fully managed continuous integration (CI) service that compiles source code, runs unit tests, and packages software artifacts for deployment.
</details>

---

### **Question 3**
Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)
*   A. Using default encryption for any number of S3 buckets.
*   B. The number of EBS volumes attached to your instances.
*   C. The storage class used for the objects stored.
*   D. Creating and deleting S3 buckets.
*   E. The total size in gigabytes of all objects stored.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. The storage class used for the objects stored.** & **E. The total size in gigabytes of all objects stored.**
*   **Explanation:** Key S3 cost drivers are:
    *   The **Storage Class** used (e.g. S3 Standard costs more per GB than S3 Glacier) (C).
    *   The **Total volume (GB/TB)** stored (E).
    *   *Note:* Creating buckets or applying default encryption carries no extra charges.
</details>

---

### **Question 4**
What does the Amazon CloudFront service provide? (Choose TWO)
*   A. Tracks user activity and API usage.
*   B. Increases application availability by caching at the edge.
*   C. Enables faster disaster recovery.
*   D. Stores archived data at very low costs.
*   E. Delivers content to end users with low latency.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Increases application availability by caching at the edge.** & **E. Delivers content to end users with low latency.**
*   **Explanation:** **Amazon CloudFront** is a CDN that caches static/dynamic assets at global Edge Locations. This **delivers content with low latency** to users globally (E) and offloads requests from origin servers, **increasing application availability** (B).
</details>

---

### **Question 5**
You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?
*   A. Amazon Lightsail
*   B. Amazon Connect
*   C. AWS Direct Connect
*   D. AWS Elastic Beanstalk

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Connect**
*   **Explanation:** **Amazon Connect** is a fully managed cloud contact center service that makes it simple to establish customer service centers at any scale.
</details>

---

### **Question 6**
You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?
*   A. Using the AWS Cost & Usage Report.
*   B. Using the AWS Total Cost of Ownership (TCO) dashboard.
*   C. Using the AWS CloudWatch logs dashboard.
*   D. Using the Amazon VPC dashboard.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Using the AWS Cost & Usage Report.**
*   **Explanation:** The **AWS Cost & Usage Report (CUR)** provides the most granular database of billing information, allowing you to audit all costs applied to your accounts.
</details>

---

### **Question 7**
Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)
*   A. Convertible
*   B. Expedited
*   C. Bulk
*   D. Spot
*   E. Standard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Convertible** & **E. Standard**
*   **Explanation:** The two primary classes of EC2 Reserved Instances are:
    *   **Standard RIs** (E): Provides the highest discount but limited attribute modifications.
    *   **Convertible RIs** (A): Offers slightly lower discounts but allows changing instance families, operating systems, and tenancies over the term.
</details>

---

### **Question 8**
Which of the following services gives you access to all AWS auditor-issued reports and certifications?
*   A. AWS Artifact
*   B. AWS Config
*   C. Amazon CloudWatch
*   D. AWS CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Artifact**
*   **Explanation:** **AWS Artifact** is a self-service compliance portal providing on-demand access to AWS security and compliance documents (such as SOC or PCI reports and ISO certifications).
</details>

---

### **Question 9**
You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?
*   A. AWS Resource Groups
*   B. AWS Placement Groups
*   C. AWS Management Console
*   D. AWS Tag Editor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Resource Groups**
*   **Explanation:** **AWS Resource Groups** lets you organize and consolidate AWS resources (like EC2 instances, S3 buckets, RDS nodes) based on environment tags, providing a single consolidated custom view to monitor and manage each environment's resources.
</details>

---

### **Question 10**
Which AWS service collects metrics from running EC2 instances?
*   A. Amazon Inspector
*   B. Amazon CloudWatch
*   C. AWS CloudFormation
*   D. AWS CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon CloudWatch**
*   **Explanation:** **Amazon CloudWatch** is the main monitoring service in AWS that collects resource utilization metrics (CPU, disk reads/writes, network in/out) from EC2 instances and other AWS services.
</details>

---

### **Question 11**
Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?
*   A. Amazon Detective
*   B. AWS X-Ray
*   C. AWS Security Hub
*   D. AWS Shield

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS X-Ray**
*   **Explanation:** **AWS X-Ray** helps developers trace requests and debug distributed applications to map exact service dependencies and identify latency and performance bottlenecks.
</details>

---

### **Question 12**
Which of the following compute resources are serverless? (Choose TWO)
*   A. Amazon EC2
*   B. AWS Fargate
*   C. AWS Lambda
*   D. Amazon ECS
*   E. Amazon EMR

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Fargate** & **C. AWS Lambda**
*   **Explanation:** AWS Lambda (function executions) and AWS Fargate (serverless container engine) are serverless compute models that automate resource capacity provisioning without guest OS or host management.
</details>

---

### **Question 13**
For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?
*   A. Use EC2 Dedicated Hosts
*   B. Use EC2 Reserved Instances
*   C. Use EC2 Spot Instances
*   D. Use EC2 On-demand Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Use EC2 Dedicated Hosts**
*   **Explanation:** **EC2 Dedicated Hosts** provision physical host servers dedicated solely to a single customer's use, enabling adherence to strict compliance policies that require complete hardware isolation.
</details>

---

### **Question 14**
Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?
*   A. Tagging Enforcement
*   B. Architecture Optimization
*   C. Budgeting Processes
*   D. Resource Controls

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Architecture Optimization**
*   **Explanation:** **Architecture Optimization** involves continuously refining deployed architectures, analyzing usage metrics, and applying Well-Architected principles to implement cost-efficient solutions and right-sizing.
</details>

---

### **Question 15**
An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?
*   A. RedShift
*   B. RDS
*   C. CloudHSM
*   D. DMS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. RDS**
*   **Explanation:** Financial systems require ACID compliance to guarantee database transaction reliability. Relational databases running on **Amazon RDS** natively support ACID transactions.
</details>

---

### **Question 16**
What can you use to assign permissions directly to an IAM user?
*   A. IAM Identity
*   B. IAM Group
*   C. IAM Role
*   D. IAM Policy

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. IAM Policy**
*   **Explanation:** Permissions are defined in JSON documents called **IAM Policies**. These policies must be attached directly to an IAM User (or group/role) to grant resource access permissions.
</details>

---

### **Question 17**
The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?
*   A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.
*   B. AWS allows customers to pay upfront to get bigger discounts.
*   C. AWS allows customers to launch and terminate EC2 instances based on demand.
*   D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS allows customers to launch and terminate EC2 instances based on demand.**
*   **Explanation:** The cloud's **elasticity**—the ability to launch and terminate instances dynamically (scaling horizontally) to match demand—ensures that you pay only for active resources, eliminating over-provisioning costs.
</details>

---

### **Question 18**
Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?
*   A. PostgreSQL
*   B. Oracle
*   C. Microsoft SQL Server
*   D. Teradata

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Teradata**
*   **Explanation:** Amazon RDS supports PostgreSQL, Oracle, SQL Server, MySQL, MariaDB, and Amazon Aurora. It does not offer Teradata support.
</details>

---

### **Question 19**
Which of the following AWS services would help you migrate on-premise databases to AWS?
*   A. AWS DMS
*   B. Amazon S3 Transfer Acceleration
*   C. AWS Directory Service
*   D. AWS Transit Gateway

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS DMS**
*   **Explanation:** **AWS Database Migration Service (DMS)** allows secure database migrations from on-premises sites to AWS while keeping the source database operational.
</details>

---

### **Question 20**
For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?
*   A. Run WordPress on an Amazon Lightsail instance.
*   B. Install WordPress on an Amazon EC2 instance.
*   C. Use the Amazon S3 Web hosting feature.
*   D. Host the website directly on AWS Cloud Development Kit (AWS CDK).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Run WordPress on an Amazon Lightsail instance.**
*   **Explanation:** **Amazon Lightsail** offers low-cost, pre-packaged virtual private servers with click-to-deploy application blueprint stacks (like WordPress), making deployment simple for beginners.
</details>

---

### **Question 21**
Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)
*   A. AWS KMS
*   B. AWS Certificate Manager
*   C. AWS CodeDeploy
*   D. AWS CodeCommit
*   E. CloudHSM

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS KMS** & **E. CloudHSM**
*   **Explanation:** Keys can be managed using **AWS KMS** (shared, managed key management service) (A) or **AWS CloudHSM** (dedicated hardware security modules) (E).
</details>

---

### **Question 22**
Which of the following services allows you to install and run custom relational database software?
*   A. Amazon EC2
*   B. Amazon Cognito
*   C. Amazon RDS
*   D. Amazon Inspector

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EC2**
*   **Explanation:** Running database software on **Amazon EC2** (IaaS) gives you root access to the host operating system, letting you install custom relational engines. Managed RDS restricts host OS access.
</details>

---

### **Question 23**
Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?
*   A. Auto Scaling
*   B. ELB
*   C. Amazon Route53
*   D. Amazon Elastic Container Service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Auto Scaling**
*   **Explanation:** **AWS Auto Scaling** dynamically adjusts compute capacities (adding/removing EC2 instances) to match workload requirements under changing loads.
</details>

---

### **Question 24**
A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?
*   A. AWS IAM
*   B. AWS Outposts
*   C. AWS Federation
*   D. Amazon Redshift

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS IAM**
*   **Explanation:** **AWS Identity and Access Management (IAM)** manages credentials, users, access permissions, and roles, acting as the cloud identity manager.
</details>

---

### **Question 25**
What are some key design principles for designing public cloud systems? (Choose TWO)
*   A. Reserved capacity instead of on demand.
*   B. Loose coupling over tight coupling.
*   C. Servers instead of managed services.
*   D. Disposable resources instead of fixed servers.
*   E. Multi-AZ deployments instead of multi-region deployments.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Loose coupling over tight coupling.** & **D. Disposable resources instead of fixed servers.**
*   **Explanation:** Key cloud system design guidelines are:
    *   **Loose coupling** (B) to ensure component failures do not crash the entire application stack.
    *   **Disposable resources** (D) to provision virtual systems on demand and discard them when finished rather than building static, permanent servers.
</details>

---

### **Question 26**
Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?
*   A. AWS CloudTrail Trails
*   B. IAM Credential Report
*   C. AWS Artifact reports
*   D. AWS Cost and Usage Report

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. IAM Credential Report**
*   **Explanation:** The **IAM Credential Report** generates a downloadable CSV audit report detailing all users in the account and their credentials status (password creation times, MFA status, access key rotation).
</details>

---

### **Question 27**
Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?
*   A. AWS Shield
*   B. AWS Certificate Manager
*   C. AWS CloudHSM
*   D. AWS WAF

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CloudHSM**
*   **Explanation:** **AWS CloudHSM** provides dedicated, physical cryptographic hardware modules inside the AWS Cloud, giving you exclusive control to generate and manage keys.
</details>

---

### **Question 28**
You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?
*   A. There is no need to architect for these capabilities in AWS, as AWS is redundant by default.
*   B. Deploy the application in a single Availability Zone.
*   C. Deploy the application in multiple Availability Zones in a single AWS region.
*   D. Deploy the application in multiple Availability Zones in multiple AWS regions.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Deploy the application in multiple Availability Zones in multiple AWS regions.**
*   **Explanation:** Spreading resources across **multiple Availability Zones in multiple AWS Regions** protects the application from both local datacenter shutdowns and major geographical disasters.
</details>

---

### **Question 29**
For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.
*   A. Instance Store
*   B. S3
*   C. DynamoDB
*   D. Amazon Route 53
*   E. AWS VPN

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. S3** & **C. DynamoDB**
*   **Explanation:** Amazon S3 and Amazon DynamoDB natively distribute data replicates across multiple, separated Availability Zones in a Region to guarantee high durability.
</details>

---

### **Question 30**
Which of the following factors affect Amazon CloudFront cost? (Choose TWO)
*   A. Number of Requests
*   B. Traffic Distribution
*   C. Number of Volumes
*   D. Instance type
*   E. Storage Class

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Number of Requests** & **B. Traffic Distribution**
*   **Explanation:** CloudFront billing is determined by:
    *   **Data Transfer Out** (GBs of traffic delivered to users) and the geographical **Traffic Distribution** (B) of those users (since data transit rates vary by global region).
    *   The total **Number of HTTP/HTTPS Requests** (A) received at edge locations.
</details>

---

### **Question 31**
Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?
*   A. AWS Service Control Policies (SCPs)
*   B. AWS Artifact
*   C. AWS Budgets
*   D. AWS Acceptable Use Policy

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Acceptable Use Policy**
*   **Explanation:** The **AWS Acceptable Use Policy** describes actions that are prohibited on AWS infrastructure (such as hosting illegal content, spamming, or security scans without permission).
</details>

---

### **Question 32**
Which of the following security resources are available to any user for free? (Choose TWO)
*   A. AWS Bulletins
*   B. AWS TAM
*   C. AWS Support API
*   D. AWS Security Blog
*   E. AWS Classroom Training

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Bulletins** & **D. AWS Security Blog**
*   **Explanation:** The public **AWS Security Bulletins** web portal (A) and the **AWS Security Blog** (D) are free, public educational resources containing security warnings and threat analyses.
</details>

---

### **Question 33**
How can you protect data stored on Amazon S3 from accidental deletion?
*   A. By enabling S3 Versioning.
*   B. By configuring S3 Bucket Policies.
*   C. By configuring S3 Lifecycle Policies.
*   D. By disabling S3 Cross-Region Replication (CRR).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. By enabling S3 Versioning.**
*   **Explanation:** **S3 Versioning** retains previous versions of files in your bucket. When an object is deleted, S3 places a delete marker rather than purging the data, allowing you to restore the file version.
</details>

---

### **Question 34**
Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?
*   A. Securing regions and edge locations.
*   B. Performing auditing tasks.
*   C. Monitoring AWS resources usage.
*   D. Securing access to AWS resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Securing regions and edge locations.**
*   **Explanation:** According to the Shared Responsibility Model, AWS is responsible for security **of** the cloud (the physical hardware, networks, regions, and edge locations (A)).
</details>

---

### **Question 35**
Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?
*   A. Business & Enterprise Support
*   B. Basic & Developer Support
*   C. Developer & Enterprise Support
*   D. Developer & Business Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Basic & Developer Support**
*   **Explanation:** Free **Basic** and low-cost **Developer** support tiers include access to only the 7 core Trusted Advisor checks. Business and Enterprise support plans provide access to the full check database.
</details>

---

### **Question 36**
Which of the following is NOT a benefit of using AWS Lambda?
*   A. AWS Lambda runs code without provisioning or managing servers.
*   B. AWS Lambda provides resizable compute capacity in the cloud.
*   C. There is no charge when your AWS Lambda code is not running.
*   D. AWS Lambda can be called directly from any mobile app.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Lambda provides resizable compute capacity in the cloud.**
*   **Explanation:** "Resizable compute capacity" refers to standard virtual machines (like EC2) where you modify CPU/RAM sizing. Since Lambda is serverless, compute capacity scales automatically per execution, rather than by manually resizing resources.
</details>

---

### **Question 37**
How does AWS help customers achieve compliance in the cloud?
*   A. It’s not possible to meet regulatory compliance requirements in the Cloud.
*   B. AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.
*   C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.
*   D. Many AWS services are assessed regularly to comply with local laws and regulations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.**
*   **Explanation:** AWS achieves and maintains numerous compliance standards (like ISO 9001, SOC, and complies with HIPAA data handling policies), enabling customers to inherit these control baselines for their applications.
</details>

---

### **Question 38**
Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?
*   A. Your security team
*   B. Your development team
*   C. AWS
*   D. Your internal DevOps team

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS**
*   **Explanation:** Under the Shared Responsibility Model for fully managed DynamoDB, **AWS** manages physical scaling, partitioning, and resource provisioning to meet workload requests.
</details>

---

### **Question 39**
You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?
*   A. Amazon Elastic Transcoder
*   B. Amazon Pinpoint
*   C. AmazonS3
*   D. Amazon Rekognition

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Elastic Transcoder**
*   **Explanation:** **Amazon Elastic Transcoder** is a media transcoding service designed to convert media files from their source formats into versions that will play on mobile devices, tablets, and PCs.
</details>

---

### **Question 40**
What are the benefits of the AWS Organizations service? (Choose TWO)
*   A. Control access to AWS services.
*   B. Help organizations design and maintain an accelerated path to successful cloud adoption.
*   C. Manage your organization’s payment methods.
*   D. Help organization achieve their desired business outcomes with AWS.
*   E. Consolidate billing across multiple AWS accounts.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Control access to AWS services.** & **E. Consolidate billing across multiple AWS accounts.**
*   **Explanation:** AWS Organizations allows you to:
    *   Apply Service Control Policies (SCPs) to **control access to AWS services** across accounts (A).
    *   Link accounts under a single master payer account to **consolidate billing** (E).
</details>

---

### **Question 41**
Which AWS service allows you to build a data warehouse in the cloud?
*   A. AWS Shield
*   B. Amazon Redshift
*   C. Amazon RDS
*   D. Amazon Comprehend

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Redshift**
*   **Explanation:** **Amazon Redshift** is a managed, petabyte-scale cloud data warehousing service designed for SQL-based analytical workloads.
</details>

---

### **Question 42**
What AWS service allows you to buy third-party software solutions and services that run on AWS resources?
*   A. AWS Application Discovery service
*   B. Amazon DevPay
*   C. AWS Marketplace
*   D. Resource Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Marketplace**
*   **Explanation:** **AWS Marketplace** is a digital store catalog letting customers buy, deploy, and manage third-party software applications and SaaS tools built to run on AWS.
</details>

---

### **Question 43**
Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?
*   A. AWS CodePipeline
*   B. AWS CodeCommit
*   C. AWS X-Ray
*   D. Amazon Inspector

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CodeCommit**
*   **Explanation:** **AWS CodeCommit** is a fully managed, secure Git-based source control repository service designed to store and version code.
</details>

---

### **Question 44**
Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?
*   A. Amazon Cognito
*   B. AWS Systems Manager
*   C. AWS Cloud9
*   D. Amazon Route 53

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Route 53**
*   **Explanation:** **Amazon Route 53** supports Latency-Based Routing (LBR), which directs user DNS requests to the AWS Region that provides the lowest network latency.
</details>

---

### **Question 45**
Which feature enables users to sign into their AWS accounts with their existing corporate credentials?
*   A. Federation
*   B. Access keys
*   C. IAM Permissions
*   D. WAF rules

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Federation**
*   **Explanation:** **Identity Federation** enables single sign-on (SSO), permitting users to authenticate and access AWS resources using their existing corporate credentials.
</details>

---

### **Question 46**
According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)
*   A. Awareness and Training
*   B. Communications controls
*   C. Data center security controls
*   D. Environmental controls
*   E. Resource Configuration Management

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Data center security controls** & **D. Environmental controls**
*   **Explanation:** Under the Shared Responsibility Model, the customer completely inherits physical security controls (C) and datacenter environmental controls (cooling, fire suppression, power) (D) from AWS.
</details>

---

### **Question 47**
What can you access by visiting the URL: http://status.aws.amazon.com?
*   A. AWS Billing Dashboard
*   B. AWS Cost Dashboard
*   C. AWS Service Health Dashboard
*   D. AWS Security Dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Service Health Dashboard**
*   **Explanation:** The URL `http://status.aws.amazon.com` (now redirecting to the AWS Health Dashboard) displays the real-time operational status of all AWS services across regions.
</details>

---

### **Question 48**
Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)
*   A. Store media assets in the region closest to your end users.
*   B. Store media assets on an additional EBS volume and increase the capacity of your server.
*   C. Replicate media assets to at least two availability zones.
*   D. Reduce the size of media assets using the Amazon Elastic Transcoder.
*   E. Store media assets in S3 and use CloudFront to distribute these assets.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Store media assets in the region closest to your end users.** & **E. Store media assets in S3 and use CloudFront to distribute these assets.**
*   **Explanation:** Latency is reduced by bringing content closer to users geographically. This is achieved by storing data in the nearest regional datacenter (A) and leveraging **Amazon CloudFront CDN** to cache content at Edge Locations (E).
</details>

---

### **Question 49**
Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)
*   A. Use manual monitoring techniques to protect your AWS resources.
*   B. Use IAM roles to grant temporary access instead of long-term credentials.
*   C. Scale horizontally to protect from failures.
*   D. Enable real-time traceability.
*   E. Never store sensitive data in the cloud.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Use IAM roles to grant temporary access instead of long-term credentials.** & **D. Enable real-time traceability.**
*   **Explanation:** Security design principles in the AWS Well-Architected Framework include:
    *   **Enable traceability** (D): Monitor, alert, and audit actions and resource configurations.
    *   **Protect keys and credentials**: Grant temporary access using roles (B) rather than permanent keys.
</details>

---

### **Question 50**
A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?
*   A. Use the AWS Pricing Calculator service to monitor the costs incurred by each department.
*   B. Use Amazon Aurora to forecast AWS spending based on usage.
*   C. Apply cost allocation tags to segment AWS costs by different projects and departments.
*   D. Configure AWS Price List API to receive billing updates for each department automatically.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Apply cost allocation tags to segment AWS costs by different projects and departments.**
*   **Explanation:** Applying **cost allocation tags** (like `Department: Marketing`) to resources allows organizations to segment and track AWS spending in billing reports and Cost Explorer.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
