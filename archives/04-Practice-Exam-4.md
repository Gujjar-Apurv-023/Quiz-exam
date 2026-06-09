# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 4

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
A developer needs to set up an SSL security certificate for a client’s eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)
*   A. Amazon Route 53
*   B. AWS ACM
*   C. AWS Directory Service
*   D. AWS Identity & Access Management
*   E. AWS Data Pipeline

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS ACM** & **D. AWS Identity & Access Management**
*   **Explanation:**
    *   **AWS ACM** (Certificate Manager) is the primary AWS service used to provision, manage, and deploy SSL/TLS certificates for use with AWS services like Elastic Load Balancing, Amazon CloudFront, and Amazon API Gateway (B).
    *   **AWS IAM** serves as a certificate manager/storage repository for regions where ACM is not supported or for custom configurations (D).
</details>

---

### **Question 2**
Which of the following AWS services scale automatically without your intervention? (Choose TWO)
*   A. Amazon EC2
*   B. Amazon S3
*   C. AWS Lambda
*   D. Amazon EMR
*   E. Amazon EBS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3** & **C. AWS Lambda**
*   **Explanation:** Amazon S3 and AWS Lambda are serverless/managed platform offerings that scale capacity and throughput automatically in response to active traffic/data demands without requiring user intervention. EC2, EMR, and EBS require user-configured capacity scaling.
</details>

---

### **Question 3**
A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)
*   A. Application management
*   B. Capacity management
*   C. Access control
*   D. Operating system maintenance
*   E. Data management

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Capacity management** & **D. Operating system maintenance**
*   **Explanation:** With a serverless service like AWS Lambda, the customer delegates infrastructure control to AWS. AWS handles the provisioning of servers, execution capacity scaling (B), and guest operating system maintenance/patching (D). The customer is responsible for writing and configuring function code.
</details>

---

### **Question 4**
How do ELBs improve the reliability of your application?
*   A. By distributing traffic across multiple S3 buckets.
*   B. By replicating data to multiple availability zones.
*   C. By creating database Read Replicas.
*   D. By ensuring that only healthy targets receive traffic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. By ensuring that only healthy targets receive traffic.**
*   **Explanation:** Elastic Load Balancers (ELBs) continually execute protocol-based **health checks** on all registered target instances. If an instance fails a health check, ELB immediately stops routing client requests to it, ensuring only active, healthy targets handle traffic.
</details>

---

### **Question 5**
A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?
*   A. On-demand instances.
*   B. Spot instances.
*   C. Dedicated instances.
*   D. Reserved instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Dedicated instances.**
*   **Explanation:** **Dedicated Instances** are Amazon EC2 instances that run in a VPC on physical hardware that is dedicated to a single customer, ensuring absolute physical isolation from the hardware instances running other customers' workloads.
</details>

---

### **Question 6**
A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?
*   A. Snowball
*   B. S3 Transfer Acceleration
*   C. Snowmobile
*   D. Amazon VPC

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Snowmobile**
*   **Explanation:** **AWS Snowmobile** is an Exabyte-scale physical data transfer service. It is a shipping container pulled by a semi-trailer truck that can transport up to 100 Petabytes of data securely, making it ideal for massive data migrations like 60 PB. Standard Snowballs hold up to 80TB, which would require hundreds of devices.
</details>

---

### **Question 7**
A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?
*   A. Amazon S3 Glacier
*   B. Amazon EFS
*   C. Amazon S3 Standard
*   D. Amazon EBS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon S3 Glacier**
*   **Explanation:** **Amazon S3 Glacier Flexible Retrieval** is the most cost-effective storage class matching these needs. It offers low storage cost and supports data retrieval within a standard window of 3 to 5 hours.
</details>

---

### **Question 8**
Which AWS Service is used to manage user permissions?
*   A. Security Groups
*   B. Amazon ECS
*   C. AWS IAM
*   D. AWS Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS IAM**
*   **Explanation:** **AWS Identity and Access Management (IAM)** is the central service that controls who is authenticated (signed in) and authorized (has permissions) to run API actions on AWS resources.
</details>

---

### **Question 9**
Which support plan includes AWS Support Concierge Service?
*   A. Premium Support
*   B. Business Support
*   C. Enterprise Support
*   D. Standard Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Enterprise Support**
*   **Explanation:** The **Support Concierge** is a dedicated billing and account expert team included exclusively in the **Enterprise Support** and Enterprise On-Ramp plans.
</details>

---

### **Question 10**
A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?
*   A. AWS Config
*   B. Amazon CloudWatch
*   C. AWS CloudTrail
*   D. AWS CloudFormation

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CloudTrail**
*   **Explanation:** **AWS CloudTrail** monitors and records account activity and API call history across your AWS infrastructure, providing full audit visibility into who initiated configuration changes or service actions.
</details>

---

### **Question 11**
What are the benefits of using an AWS-managed service? (Choose TWO)
*   A. Provides complete control over the virtual infrastructure.
*   B. Allows customers to deliver new solutions faster.
*   C. Lowers operational complexity.
*   D. Eliminates the need to encrypt data.
*   E. Allows developers to control all patching related activities.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Allows customers to deliver new solutions faster.** & **C. Lowers operational complexity.**
*   **Explanation:** AWS-managed services abstract server deployment, patching, OS upgrades, and scaling configurations, which directly **lowers operational complexity** (C) and frees developers to focus on writing code, allowing them to **deliver new solutions faster** (B).
</details>

---

### **Question 12**
Which of the following are use cases for Amazon S3? (Choose TWO)
*   A. Hosting static websites.
*   B. Hosting websites that require sustained high CPU utilization.
*   C. Cost-effective database and log storage.
*   D. A media store for the CloudFront service.
*   E. Processing data streams at any scale.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Hosting static websites.** & **D. A media store for the CloudFront service.**
*   **Explanation:** Amazon S3 is an object storage service designed to store files. It can serve static web assets (HTML, CSS, JS) directly as a **static website** (A) and serves as a highly scalable **origin media store for Amazon CloudFront CDN** distributions (D).
</details>

---

### **Question 13**
What is the AWS’ recommendation regarding access keys?
*   A. Delete all access keys and use passwords instead.
*   B. Only share them with trusted people.
*   C. Rotate them regularly.
*   D. Save them within your application code.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Rotate them regularly.**
*   **Explanation:** AWS security best practices recommend **rotating access keys regularly** to limit the lifetime of credentials and reduce the impact if they are accidentally leaked. They should never be saved within application code (D).
</details>

---

### **Question 14**
What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?
*   A. Key Pair
*   B. Access Keys
*   C. SDK
*   D. MFA

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. MFA**
*   **Explanation:** **Multi-Factor Authentication (MFA)** is a security control that requires users to provide a secondary verification code from an approved MFA device in addition to their username and password.
</details>

---

### **Question 15**
What is the benefit of using an API to access AWS Services?
*   A. It improves the performance of AWS resources.
*   B. It reduces the time needed to provision AWS resources.
*   C. It reduces the number of developers necessary.
*   D. It allows for programmatic management of AWS resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. It allows for programmatic management of AWS resources.**
*   **Explanation:** Using APIs (directly or via AWS CLI/SDKs) allows developers to write code that automates resource provisioning, configuration, monitoring, and scaling.
</details>

---

### **Question 16**
A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?
*   A. AWS Storage Gateway
*   B. Amazon S3
*   C. Amazon EBS
*   D. Amazon Glacier

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon EBS**
*   **Explanation:** For high-throughput transactional database workloads (like MySQL or Oracle) with high read/write activity installed on EC2, **Amazon EBS SSD-backed volumes** (like GP3 or Provisioned IOPS) provide the low-latency block storage required.
</details>

---

### **Question 17**
How can AWS customers track and avoid over-spending on underutilized reserved instances?
*   A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.
*   B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.
*   C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.
*   D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.**
*   **Explanation:** **AWS Budgets** allows you to set custom RI Utilization or RI Coverage budgets and configure alerts (via email or SNS) to notify you if your Reserved Instance utilization drops below your desired threshold.
</details>

---

### **Question 18**
What is the AWS service that provides five times the performance of a standard MySQL database?
*   A. Amazon Aurora
*   B. Amazon Redshift
*   C. Amazon DynamoDB
*   D. Amazon Neptune

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Aurora**
*   **Explanation:** **Amazon Aurora** is a fully managed relational database engine compatible with MySQL and PostgreSQL that offers up to 5x the throughput of standard MySQL databases and 3x standard PostgreSQL.
</details>

---

### **Question 19**
What does AWS Service Catalog provide?
*   A. It enables customers to quickly find descriptions and use cases for AWS services.
*   B. It enables customers to explore the different catalogs of AWS services.
*   C. It simplifies organizing and governing commonly deployed IT services.
*   D. It allows developers to deploy infrastructure on AWS using familiar programming languages.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It simplifies organizing and governing commonly deployed IT services.**
*   **Explanation:** **AWS Service Catalog** allows organizations to create, govern, and distribute catalogs of approved IT services (CloudFormation stacks) on AWS, simplifying self-service deployment while maintaining compliance.
</details>

---

### **Question 20**
For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)
*   A. Protecting credentials
*   B. Logging access activity
*   C. Patching the database software
*   D. Operating system maintenance
*   E. Creating access policies

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Patching the database software** & **D. Operating system maintenance**
*   **Explanation:** Under the Shared Responsibility Model for fully managed services like DynamoDB, AWS manages the database software updates/patching (C) and the underlying host operating system maintenance (D). The customer is responsible for data modeling and IAM access control.
</details>

---

### **Question 21**
Which of the following AWS Services helps with planning application migration to the AWS Cloud?
*   A. AWS Snowball Migration Service
*   B. AWS Application Discovery Service
*   C. AWS DMS
*   D. AWS Migration Hub

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Application Discovery Service**
*   **Explanation:** **AWS Application Discovery Service** assists in migration planning by collecting configuration, usage, and behavior data from your on-premises servers to map dependencies and calculate TCO.
</details>

---

### **Question 22**
A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?
*   A. Amazon Machine Image
*   B. AWS Cost Explorer
*   C. AWS Cost & Usage Report
*   D. Amazon CloudWatch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Cost & Usage Report**
*   **Explanation:** The **AWS Cost & Usage Report (CUR)** contains the most detailed and granular billing dataset available, breaking down costs down to hourly usage of specific resources and resource tags.
</details>

---

### **Question 23**
Which statement best describes the concept of an AWS region?
*   A. An AWS Region is a geographical location with a collection of Edge locations.
*   B. An AWS Region is a virtual network dedicated only to a single AWS customer.
*   C. An AWS Region is a geographical location with a collection of Availability Zones.
*   D. An AWS Region represents the country where the AWS infrastructure exist.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. An AWS Region is a geographical location with a collection of Availability Zones.**
*   **Explanation:** An **AWS Region** is a physical geographical location in the world where AWS hosts two or more physically isolated **Availability Zones (AZs)** connected via a dedicated low-latency fiber network.
</details>

---

### **Question 24**
A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?
*   A. SNS logs
*   B. SQS logs
*   C. CloudWatch Logs
*   D. CloudTrail logs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. CloudTrail logs**
*   **Explanation:** **AWS CloudTrail** captures API activity history. Reviewing the CloudTrail event logs for the `DeleteBucket` action will reveal the identity (IAM user or role) that executed the call.
</details>

---

### **Question 25**
Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)
*   A. Availability Zones
*   B. Data sovereignty
*   C. The number of reads and writes per second
*   D. The nature of the queries
*   E. Software bugs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. The number of reads and writes per second** & **D. The nature of the queries**
*   **Explanation:** Choosing the right database depends on transactional throughput requirements (reads/writes per second) (C) and the database access patterns/queries (relational SQL joins vs NoSQL key-value/document queries) (D).
</details>

---

### **Question 26**
What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)
*   A. Quickly identify resources that belong to a specific project.
*   B. Quickly identify software solutions on AWS.
*   C. Track API calls in your AWS account.
*   D. Quickly identify deleted resources and their metadata.
*   E. Track AWS spending across multiple resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Quickly identify resources that belong to a specific project.** & **E. Track AWS spending across multiple resources.**
*   **Explanation:** Tags are custom key-value pairs associated with resources. They are used to group and search resources by project/owner (A) and allocate/track cost distributions in billing reports (E).
</details>

---

### **Question 27**
What are AWS shared controls?
*   A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.
*   B. Controls that a customer inherits from AWS.
*   C. Controls that apply to both the infrastructure layer and customer layers.
*   D. Controls that the customer and AWS collaborate together upon to secure the infrastructure.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Controls that apply to both the infrastructure layer and customer layers.**
*   **Explanation:** **Shared controls** are security settings that both AWS (for physical hosts/hypervisors) and the customer (for guest OS/databases) must implement independently in their respective spheres (e.g. Patch Management, Configuration Management).
</details>

---

### **Question 28**
Which design principles relate to performance efficiency in AWS? (Choose TWO)
*   A. Build multi-region architectures to better serve global customers.
*   B. Apply security at all layers.
*   C. Implement strong Identity and Access controls.
*   D. Use serverless architectures.
*   E. Enable audit logging.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Build multi-region architectures to better serve global customers.** & **D. Use serverless architectures.**
*   **Explanation:** The **Performance Efficiency** pillar advocates using **serverless architectures** (D) to remove operational overhead and deploying in **multiple regions** (A) to reduce network latency for international users.
</details>

---

### **Question 29**
Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)
*   A. Protecting sensitive data.
*   B. Patching of the underlying infrastructure.
*   C. Setup and operation of managed databases.
*   D. Maintaining consistent hardware components.
*   E. Installing and configuring third-party software.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Protecting sensitive data.** & **E. Installing and configuring third-party software.**
*   **Explanation:** With EC2 (IaaS), the customer manages everything inside the OS. This includes securing data (A) and installing/configuring databases and software (E). AWS manages physical hosting, hardware components, and hypervisors.
</details>

---

### **Question 30**
Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)
*   A. Free commercial software licenses
*   B. Free technical support
*   C. Elastic resources
*   D. On-site visits for auditing
*   E. Cost Savings

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Elastic resources** & **E. Cost Savings**
*   **Explanation:** The cloud offers resource elasticity (C) (instantly scale out/in) and cost savings (E) by trading expensive upfront hardware investments (CapEx) for low, variable pay-as-you-go costs (OpEx).
</details>

---

### **Question 31**
Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)
*   A. Amazon Inspector
*   B. AWS Virtual Private Gateway
*   C. AWS Batch
*   D. Amazon ECS
*   E. AWS Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Inspector** & **E. AWS Config**
*   **Explanation:**
    *   **Amazon Inspector** (A) performs automated vulnerability scanning on EC2/container instances.
    *   **AWS Config** (E) tracks resource settings changes over time, assessing configurations against compliance rules to verify auditing policies.
</details>

---

### **Question 32**
Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?
*   A. Amazon EC2 is considered a Serverless Web Service.
*   B. Amazon EC2 eliminates the need to invest in hardware upfront.
*   C. Amazon EC2 can launch as many or as few virtual servers as needed.
*   D. Amazon EC2 offers scalable computing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EC2 is considered a Serverless Web Service.**
*   **Explanation:** Amazon EC2 provides virtual servers (instances) and is classified as **Infrastructure as a Service (IaaS)**. It is **not** a serverless service because you must provision and manage the operating system and execution instances.
</details>

---

### **Question 33**
What is the AWS Compute service that executes code only when triggered by events?
*   A. AWS Lambda
*   B. Amazon CloudWatch
*   C. AWS Transit Gateway
*   D. Amazon EC2

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Lambda**
*   **Explanation:** **AWS Lambda** is an event-driven serverless compute service that executes code only when triggered by events (e.g. S3 file uploads, DynamoDB streams, or HTTP calls).
</details>

---

### **Question 34**
Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?
*   A. Amazon EBS Snapshots
*   B. Amazon VPC
*   C. AWS Managed Servers
*   D. Amazon EC2 Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2 Instances**
*   **Explanation:** In AWS, virtual servers running in the cloud are called **Amazon EC2 Instances**.
</details>

---

### **Question 35**
What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?
*   A. AWS Secrets Manager
*   B. AWS WAF
*   C. AWS CAF
*   D. Amazon EFS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CAF**
*   **Explanation:** The **AWS Cloud Adoption Framework (CAF)** provides structured guidance to help organizations design a strategic roadmap to migrate workloads successfully to the cloud.
</details>

---

### **Question 36**
TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?
*   A. AWS Cost Explorer
*   B. AWS TCO Calculator
*   C. AWS Budgets
*   D. AWS Pricing Calculator

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS TCO Calculator**
*   **Explanation:** The **AWS TCO (Total Cost of Ownership) Calculator** (now integrated inside the AWS Pricing Calculator) compares the costs of running on-premises systems versus AWS to perform a financial cost-benefit analysis.
</details>

---

### **Question 37**
Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?
*   A. Using AWS Trusted Advisor to find underutilized resources.
*   B. Using AWS CloudTrail to record user activities.
*   C. Using AWS CloudFormation to manage infrastructure as code.
*   D. Deploying an application in multiple Availability Zones.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Using AWS CloudFormation to manage infrastructure as code.**
*   **Explanation:** A primary design principle of the **Operational Excellence** pillar is "Perform operations as code." Using **AWS CloudFormation** to manage Infrastructure as Code (IaC) automates deployments and keeps operations repeatable and documented.
</details>

---

### **Question 38**
Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)
*   A. AWS allows them to pay later when their business succeed.
*   B. AWS can build complete data centers faster than any other Cloud provider.
*   C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.
*   D. AWS removes the need to invest in operational expenditure.
*   E. Using AWS allows companies to replace large capital expenditure with low variable costs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.** & **E. Using AWS allows companies to replace large capital expenditure with low variable costs.**
*   **Explanation:** Startups choose AWS because it removes the need for expensive upfront server purchases (replacing CapEx with low variable OpEx) (E), and lets them focus on coding and marketing rather than datacenter construction, reducing time-to-market (C).
</details>

---

### **Question 39**
What are the benefits of using DynamoDB? (Choose TWO)
*   A. Automatically scales to meet required throughput capacity.
*   B. Provides resizable instances to match the current demand.
*   C. Supports both relational and non-relational data models.
*   D. Offers extremely low (single-digit millisecond) latency.
*   E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Automatically scales to meet required throughput capacity.** & **D. Offers extremely low (single-digit millisecond) latency.**
*   **Explanation:** Amazon DynamoDB is a fully managed NoSQL database service that scales database throughput automatically (A) and provides single-digit millisecond latencies at any scale (D).
</details>

---

### **Question 40**
Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)
*   A. Versioning
*   B. Deduplication
*   C. Permissions
*   D. Decryption
*   E. Conversion

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Versioning** & **C. Permissions**
*   **Explanation:**
    *   **Permissions** (C) (Bucket Policies/IAM) control and restrict unauthorized access to bucket contents.
    *   **Versioning** (A) preserves historical object files to prevent data loss from accidental deletes or overwrites.
</details>

---

### **Question 41**
As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)
*   A. AWS Partners
*   B. AWS Artifact
*   C. AWS Professional Services
*   D. Amazon Athena
*   E. Amazon PinPoint

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Partners** & **C. AWS Professional Services**
*   **Explanation:** The Migration Acceleration Program (MAP) uses APN Partners (A) and AWS Professional Services consultants (C) to assist enterprises with migrations, utilizing proven methodologies and cost incentives.
</details>

---

### **Question 42**
AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?
*   A. Deleting unused EBS volumes after terminating an EC2 instance.
*   B. Deleting unused AutoScaling launch configuration.
*   C. Deleting unused Elastic Load Balancers.
*   D. Releasing unused Elastic IPs after terminating an EC2 instance.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Deleting unused AutoScaling launch configuration.**
*   **Explanation:** Storing Auto Scaling **Launch Configurations** or Launch Templates is completely free. Deleting them does not save money. However, unused EBS volumes (A), ELBs (C), and unallocated Elastic IPs (D) all carry hourly usage charges and must be cleaned up.
</details>

---

### **Question 44**
What is the AWS tool that can help a company visualize their AWS spending in the last few months?
*   A. AWS Cost Explorer
*   B. AWS Pricing Calculator
*   C. AWS Budgets
*   D. AWS Consolidated Billing

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Cost Explorer**
*   **Explanation:** **AWS Cost Explorer** is a free visualization interface that lets you view charts and analyze your cost and usage history from past months.
</details>

---

### **Question 44**
When running a workload in AWS, the customer is NOT responsible for: (Select TWO)
*   A. Running penetration tests.
*   B. Reserving capacity.
*   C. Data center operations.
*   D. Auditing and regulatory compliance.
*   E. Infrastructure security.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Data center operations.** & **E. Infrastructure security.**
*   **Explanation:** Under the Shared Responsibility Model, AWS handles physical datacenter operations (C) and the baseline security of the physical/networking infrastructure (E). Running pen tests, managing compliance, and choosing billing configurations are customer responsibilities.
</details>

---

### **Question 45**
Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?
*   A. Amazon Simple Email Service (Amazon SES)
*   B. Amazon Simple Storage Service (Amazon S3)
*   C. Amazon Simple Notification Service (Amazon SNS)
*   D. Amazon Simple Queue Service (Amazon SQS)

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon Simple Notification Service (Amazon SNS)**
*   **Explanation:** **Amazon SNS** has direct support for sending SMS text notifications to mobile numbers in over 200 countries globally.
</details>

---

### **Question 46**
Which of the following allows you to create new RDS instances? (Choose TWO)
*   A. AWS CodeDeploy
*   B. AWS Quick Starts
*   C. AWS CloudFormation
*   D. AWS DMS
*   E. AWS Management Console

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CloudFormation** & **E. AWS Management Console**
*   **Explanation:** You can provision new RDS database instances manually via the web-based **AWS Management Console** (E) or programmatically via **AWS CloudFormation** templates (C).
</details>

---

### **Question 47**
One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?
*   A. Low monthly instance maintenance costs
*   B. Low-cost instance tagging
*   C. Per-second instance billing
*   D. Low instance start-up fees

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Per-second instance billing**
*   **Explanation:** AWS bills Amazon EC2 instances on a **per-second** basis (with a 1-minute minimum). This reduces compute costs by ensuring you do not pay for unused partial hours when spinning nodes up and down.
</details>

---

### **Question 48**
Which AWS Group assists customers in achieving their desired business outcomes?
*   A. AWS Security Team
*   B. AWS Professional Services
*   C. AWS Trusted Advisor
*   D. AWS Concierge Support Team

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Professional Services**
*   **Explanation:** **AWS Professional Services** is a global team of consultants that partners with customer organizations to implement cloud migration plans and help achieve targeted business outcomes.
</details>

---

### **Question 49**
Which AWS service or feature is used to manage the keys used to encrypt customer data?
*   A. AWS KMS
*   B. AWS Service Control Policies (SCPs)
*   C. Multi-Factor Authentication (MFA)
*   D. Amazon Macie

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS KMS**
*   **Explanation:** **AWS Key Management Service (KMS)** allows you to create, manage, rotate, and control access permissions to the cryptographic keys used to encrypt data across AWS services.
</details>

---

### **Question 50**
Which AWS Service allows customers to download AWS SOC & PCI reports?
*   A. AWS Well-Architected Tool
*   B. AWS Artifact
*   C. AWS Glue
*   D. Amazon Chime

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Artifact**
*   **Explanation:** **AWS Artifact** is a self-service compliance portal providing on-demand access to AWS's security and compliance documentation, such as SOC, ISO, and PCI compliance reports.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
