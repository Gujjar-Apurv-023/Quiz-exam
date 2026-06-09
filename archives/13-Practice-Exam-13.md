# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 13

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?
*   A. Cost allocation tags
*   B. Consolidated billing
*   C. AWS Budgets
*   D. AWS Marketplace

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Cost allocation tags**
*   **Explanation:** **Cost allocation tags** allow you to assign metadata (like "Department: Finance" or "Project: Alpha") to AWS resources, which then appear in your cost management reports to track and categorize spending on a highly detailed level.
</details>

---

### **Question 2**
Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
*   A. Amazon Glacier
*   B. AWS Storage Gateway
*   C. Amazon S3
*   D. Amazon EBS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon S3**
*   **Explanation:** **Amazon Simple Storage Service (S3)** is a durable, object-based storage service that provides real-time access to objects, alongside features like object versioning (keeping multiple versions of the same object) and lifecycle policies (automatically transitioning files to colder tiers).
</details>

---

### **Question 3**
What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?
*   A. AWS Enterprise Support
*   B. AWS Solutions Architects
*   C. AWS Professional Services
*   D. AWS Account Managers

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Professional Services**
*   **Explanation:** **AWS Professional Services** is a global team of experts who work on paid customer engagements to help them realize their desired business outcomes when using the AWS Cloud, specializing in complex migrations, security architectures, and DevOps.
</details>

---

### **Question 4**
A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?
*   A. AWS Partner Network Technology Partners
*   B. AWS Marketplace
*   C. AWS Partner Network Consulting Partners
*   D. AWS Service Catalog

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Partner Network Consulting Partners**
*   **Explanation:** **AWS APN Consulting Partners** are professional services firms that help customers of all types and sizes design, architect, build, migrate, and manage their workloads and applications on AWS.
</details>

---

### **Question 5**
Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?
*   A. Implement automation.
*   B. Design for agility.
*   C. Design for failure.
*   D. Implement elasticity.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Design for failure.**
*   **Explanation:** By placing resources across multiple Availability Zones, you ensure that if one Availability Zone suffers a hardware, power, or connectivity failure, the other Availability Zone continues running the workload, aligning with the "Design for Failure" (or reliability) principle.
</details>

---

### **Question 6**
Which AWS services can host a Microsoft SQL Server database? (Select TWO)
*   A. Amazon EC2
*   B. Amazon Relational Database Service (Amazon RDS)
*   C. Amazon Aurora
*   D. Amazon Redshift
*   E. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EC2** & **B. Amazon Relational Database Service (Amazon RDS)**
*   **Explanation:**
    *   **Amazon EC2** allows you to deploy and self-manage a SQL Server instance.
    *   **Amazon RDS** supports SQL Server as an engine option with fully managed patching and backups.
    *   *Note:* Amazon Aurora is only compatible with MySQL and PostgreSQL.
</details>

---

### **Question 7**
Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?
*   A. AWS Cost Explorer
*   B. AWS Trusted Advisor
*   C. Consolidated billing
*   D. Detailed billing

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Trusted Advisor**
*   **Explanation:** **AWS Trusted Advisor** is an online tool that inspects your AWS environment and provides real-time recommendations to help you follow AWS best practices across five categories: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits.
</details>

---

### **Question 8**
Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?
*   A. Spot Instances
*   B. Reserved Instances
*   C. Dedicated Hosts
*   D. On-Demand Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Dedicated Hosts**
*   **Explanation:** An **Amazon EC2 Dedicated Host** is a physical server with EC2 instance capacity fully dedicated to your use, which allows you to use your existing server-bound software licenses (BYOL - Bring Your Own License) for Windows Server or SQL Server.
</details>

---

### **Question 9**
Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)
*   A. High availability
*   B. Shared security model
*   C. Elasticity
*   D. Pay-as-you-go pricing
*   E. Reliability

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Elasticity** & **D. Pay-as-you-go pricing**
*   **Explanation:**
    *   **Elasticity** (C) allows the application to automatically scale down when demand drops so you don't pay for idle capacity.
    *   **Pay-as-you-go pricing** (D) ensures you only pay for the exact resources you consume with no long-term contracts.
</details>

---

### **Question 10**
Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?
*   A. Amazon CloudWatch
*   B. AWS CloudTrail
*   C. AWS Config
*   D. AWS Health

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CloudTrail**
*   **Explanation:** **AWS CloudTrail** records API calls and account activities across your entire AWS infrastructure, logging details such as who made the request, when, and from what IP address, making it essential for security audit compliance.
</details>

---

### **Question 11**
Which of the following are characteristics of Amazon S3? (Select TWO.)
*   A. A global file system
*   B. An object store
*   C. A local file store
*   D. A network file system
*   E. A durable storage system

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. An object store** & **E. A durable storage system**
*   **Explanation:**
    *   S3 is an **object store** (B) (files are saved as objects within key-value buckets).
    *   S3 is a **highly durable** (E) storage system designed for 99.999999999% (11 9s) durability of data by replicating it across multiple physical Availability Zones.
</details>

---

### **Question 12**
Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)
*   A. Amazon Route 53
*   B. Virtual Private Gateway
*   C. Classic Load Balancer
*   D. Auto Scaling
*   E. Amazon CloudWatch default metrics

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Route 53** & **B. Virtual Private Gateway**
*   **Explanation:**
    *   **Amazon Route 53** (A) supports global DNS lookup routing and health checks that can target both on-premises endpoints and AWS resources.
    *   A **Virtual Private Gateway** (B) is attached to your VPC to terminate site-to-site VPN connections from your on-premises routers.
</details>

---

### **Question 13**
What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?
*   A. Project management
*   B. Antivirus software licensing
*   C. Data center security
*   D. Software development

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Data center security**
*   **Explanation:** TCO comparisons look at direct infrastructure cost variables. **Data center security** (facility guards, access locks, physical audits) is an on-premises cost that is eliminated or absorbed into AWS infrastructure pricing.
</details>

---

### **Question 14**
A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?
*   A. Amazon Redshift
*   B. Amazon DynamoDB
*   C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store
*   D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)**
*   **Explanation:** For a self-hosted database on EC2 that needs to be shut down regularly, **Amazon EBS** is mandatory because EBS persists database files when the instance is in a `stopped` state. EC2 instance store is ephemeral and all data is lost once stopped.
</details>

---

### **Question 15**
Which of the following is a correct relationship between regions, Availability Zones, and edge locations?
*   A. Data centers contain regions.
*   B. Regions contain Availability Zones.
*   C. Availability Zones contain edge locations.
*   D. Edge locations contain regions.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Regions contain Availability Zones.**
*   **Explanation:** An AWS **Region** is a geographical area that contains multiple, isolated, and physically separate **Availability Zones**. Edge locations are separate network access points deployed globally and do not sit within AZs or contain Regions.
</details>

---

### **Question 16**
Which AWS tools assist with estimating costs? (Select three.)
*   A. Detailed billing report
*   B. Cost allocation tags
*   C. AWS Simple Monthly Calculator
*   D. AWS Total Cost of Ownership (TCO) Calculator
*   E. Cost Eliminator

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Cost allocation tags**, **C. AWS Simple Monthly Calculator**, & **D. AWS Total Cost of Ownership (TCO) Calculator**
*   **Explanation:**
    *   **Cost allocation tags** (B) help label resources so you can attribute and estimate future operational budgets.
    *   **Simple Monthly Calculator** (C) lets you estimate monthly bills before deployments.
    *   **TCO Calculator** (D) compares the cost of on-premises hardware against AWS.
</details>

---

### **Question 17**
Which of the following are advantages of AWS consolidated billing? (Select TWO.)
*   A. The ability to receive one bill for multiple accounts
*   B. Service limits increasing by default in all accounts
*   C. A fixed discount on the monthly bill
*   D. Potential volume discounts, as usage in all accounts is combined
*   E. The automatic extension of the master account’s AWS support plan to all accounts

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. The ability to receive one bill for multiple accounts** & **D. Potential volume discounts, as usage in all accounts is combined**
*   **Explanation:** Consolidated billing combines the charges of all linked accounts under AWS Organizations, producing one single monthly invoice (A) and aggregating resource consumption metrics to qualify for high-tier volume discounts (D).
</details>

---

### **Question 18**
Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?
*   A. One-year, No Upfront, Standard RI pricing
*   B. One-year, All Upfront, Convertible RI pricing
*   C. Three-year, All Upfront, Standard RI pricing
*   D. Three-year, No Upfront, Convertible RI pricing

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Three-year, All Upfront, Standard RI pricing**
*   **Explanation:** RIs offer greater discounts based on three variables: commitment length (3 years > 1 year), payment terms (All Upfront > Partial > No Upfront), and rigidity (Standard > Convertible). Thus, a **3-year, All Upfront, Standard RI** provides the maximum possible savings.
</details>

---

### **Question 19**
Compared with costs in traditional and virtualized data centers, AWS has:
*   A. greater variable costs and greater upfront costs.
*   B. fixed usage costs and lower upfront costs.
*   C. lower variable costs and greater upfront costs.
*   D. lower variable costs and lower upfront costs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. lower variable costs and lower upfront costs.**
*   **Explanation:** AWS removes large physical datacenter purchases (lower upfront capital costs) and provides low pay-as-you-go costs due to the benefits of massive scale economies (lower variable costs).
</details>

---

### **Question 20**
A characteristic of edge locations is that they:
*   A. host Amazon EC2 instances closer to users.
*   B. help lower latency and improve performance for users.
*   C. cache frequently changing data without reaching the origin server.
*   D. refresh data changes daily.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. help lower latency and improve performance for users.**
*   **Explanation:** Edge locations run CloudFront distribution servers globally to cache media and web content locally, significantly reducing transit time and improving load latency for end-users.
</details>

---

### **Question 21**
Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?
*   A. A public and private key-pair
*   B. Amazon Inspector
*   C. AWS Identity and Access Management (IAM) policies
*   D. Security Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Identity and Access Management (IAM) policies**
*   **Explanation:** S3 access can be explicitly restricted to certain users or groups via **IAM Policies** (user-based access control) or S3 Bucket Policies (resource-based access control).
</details>

---

### **Question 22**
Which of the following security-related actions are available at no cost?
*   A. Calling AWS Support
*   B. Contacting AWS Professional Services to request a workshop
*   C. Accessing forums, blogs, and whitepapers
*   D. Attending AWS classes at a local university

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Accessing forums, blogs, and whitepapers**
*   **Explanation:** AWS provides a wealth of self-service security resources, including community forums, security blogs, architectural guides, and whitepapers, completely free of charge.
</details>

---

### **Question 23**
Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
*   A. Dedicated RIs
*   B. Scheduled RIs
*   C. Convertible RIs
*   D. Standard RIs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Convertible RIs**
*   **Explanation:** **Convertible Reserved Instances** offer slightly lower discount rates but allow you to modify instance families, OS types, tenancy, or scopes, provided the target exchange configuration is of equal or greater value.
</details>

---

### **Question 24**
Which AWS feature will reduce the customer’s total cost of ownership (TCO)?
*   A. Shared responsibility security model
*   B. Single tenancy
*   C. Elastic computing
*   D. Encryption

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Elastic computing**
*   **Explanation:** **Elastic computing** allows systems to provision dynamically based on demand. Shutting down resources when they aren't needed avoids paying for unused compute capacity, lowering the overall TCO.
</details>

---

### **Question 25**
Which of the following services will automatically scale with an expected increase in web traffic?
*   A. AWS CodePipeline
*   B. Elastic Load Balancing
*   C. Amazon EBS
*   D. AWS Direct Connect

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Elastic Load Balancing**
*   **Explanation:** **Elastic Load Balancing (ELB)** automatically scales its throughput capacity in response to incoming traffic demand spikes, distributing connections evenly across healthy application instances.
</details>

---

### **Question 26**
Where are AWS compliance documents, such as an SOC 1 report, located?
*   A. Amazon Inspector
*   B. AWS CloudTrail
*   C. AWS Artifact
*   D. AWS Certificate Manager

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Artifact**
*   **Explanation:** **AWS Artifact** is the dedicated, self-service compliance portal where customers can download AWS security and compliance documents (such as SOC reports, PCI data sheets, and ISO logs).
</details>

---

### **Question 27**
Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO.)
*   A. Patching operating system components for Amazon Relational Database Server (Amazon RDS)
*   B. Encrypting data on the client-side
*   C. Training the data center staff
*   D. Configuring Network Access Control Lists (ACL)
*   E. Maintaining environmental controls within a data center

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Encrypting data on the client-side** & **D. Configuring Network Access Control Lists (ACL)**
*   **Explanation:**
    *   **Client-side data encryption** (B) is the user's duty to protect data in transit/at rest.
    *   **NACL configuration** (D) is a network security control managed inside the user's VPC.
    *   *Note:* RDS operating system patching, datacenter environmental controls, and datacenter staff training are fully managed by AWS.
</details>

---

### **Question 28**
Which is a recommended pattern for designing a highly available architecture on AWS?
*   A. Ensure that components have low-latency network connectivity.
*   B. Run enough Amazon EC2 instances to operate at peak load.
*   C. Ensure that the application is designed to accommodate failure of any single component.
*   D. Use a monolithic application that handles all operations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Ensure that the application is designed to accommodate failure of any single component.**
*   **Explanation:** Architecting for high availability requires decoupling components and creating redundancies so that the **failure of any single component** does not bring down the entire application stack.
</details>

---

### **Question 29**
According to best practices, how should an application be designed to run in the AWS Cloud?
*   A. Use tightly coupled components.
*   B. Use loosely coupled components.
*   C. Use infrequently coupled components.
*   D. Use frequently coupled components.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Use loosely coupled components.**
*   **Explanation:** **Loose coupling** isolates components from each other (e.g. using message queues like SQS between tiers). If one component fails, the rest of the application remains operational, protecting system integrity.
</details>

---

### **Question 30**
AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)
*   A. Implementing Amazon Rekognition
*   B. Using AWS Shield-protected resources
*   C. Blocking access with Security Groups
*   D. Using Multi-Factor Authentication (MFA)
*   E. Enforcing password strength and expiration

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Using Multi-Factor Authentication (MFA)** & **E. Enforcing password strength and expiration**
*   **Explanation:** Core login security controls for IAM users include requiring **MFA** (D) to prevent credential theft, and enforcing an account **password policy** (E) that requires minimum length, complexity, and rotation.
</details>

---

### **Question 31**
Which AWS services should be used for read/write of constantly changing data? (Select TWO.)
*   A. Amazon Glacier
*   B. Amazon RDS
*   C. AWS Snowball
*   D. Amazon Redshift
*   E. Amazon EFS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon RDS** & **E. Amazon EFS**
*   **Explanation:**
    *   **Amazon RDS** (B) manages active relational databases with constant transaction writes.
    *   **Amazon EFS** (E) provides a shared network file system for multiple compute resources to perform simultaneous read/write cycles.
    *   *Note:* Glacier is for archiving, Redshift is an analytical OLAP warehouse, and Snowball is for physical data migration.
</details>

---

### **Question 32**
What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?
*   A. It simplifies relational database administration tasks.
*   B. It provides 99.99999999999% reliability and durability.
*   C. It automatically scales databases for loads.
*   D. It enabled users to dynamically adjust CPU and RAM resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. It simplifies relational database administration tasks.**
*   **Explanation:** **Amazon RDS** removes the administrative overhead of setting up, patching, back-up scheduling, and managing physical hardware for relational databases.
</details>

---

### **Question 33**
A customer needs to run a MySQL database that easily scales. Which AWS service should they use?
*   A. Amazon Aurora
*   B. Amazon Redshift
*   C. Amazon DynamoDB
*   D. Amazon ElastiCache

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Aurora**
*   **Explanation:** **Amazon Aurora** is a relational database engine compatible with MySQL and PostgreSQL. It automatically scales storage up to 128 TB as data grows, provides up to 15 read replicas, and offers high durability.
</details>

---

### **Question 34**
Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?
*   A. Availability Zone
*   B. Edge location
*   C. Region
*   D. Private networking

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Availability Zone**
*   **Explanation:** An **Availability Zone (AZ)** is one or more discrete datacenters with redundant power, networking, and connectivity in an AWS Region, connected via low-latency networks.
</details>

---

### **Question 35**
Which of the following is a shared control between the customer and AWS?
*   A. Providing a key for Amazon S3 client-side encryption
*   B. Configuration of an Amazon EC2 instance
*   C. Environmental controls of physical AWS data centers
*   D. Awareness and training

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Awareness and training**
*   **Explanation:** **Awareness and training** is a shared control. AWS trains its physical datacenter and cloud operations staff, and the customer is responsible for training their own developers, system admins, and staff on security procedures.
</details>

---

### **Question 36**
How many Availability Zones should compute resources be provisioned across to achieve high availability?
*   A. A minimum of one
*   B. A minimum of two
*   C. A minimum of three
*   D. A minimum of four or more

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. A minimum of two**
*   **Explanation:** To achieve high availability, you must deploy compute instances across **at least two Availability Zones**. If one AZ goes down due to a local incident, the resources in the second AZ can continue to serve the workload.
</details>

---

### **Question 37**
One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:
*   A. it allows the business to eliminate IT bills.
*   B. it allows the business to put a server in each customer’s data center.
*   C. it allows the business to focus on business activities.
*   D. it allows the business to leave servers unpatched.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. it allows the business to focus on business activities.**
*   **Explanation:** Moving to the cloud eliminates the heavy lifting of running physical server rooms (stacking racks, routing power, cooling maintenance), letting the business focus on customer value and core competencies.
</details>

---

### **Question 38**
What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?
*   A. Amazon S3
*   B. Amazon Glacier
*   C. Amazon EBS
*   D. Amazon EC2 Instance Store

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon S3**
*   **Explanation:** **Amazon S3** is the lowest-cost storage option that provides **immediate retrieval** of backup files. Amazon S3 Glacier offers lower cost storage but introduces retrieval delays (ranging from minutes to hours), which violates the "immediate retrieval" requirement.
</details>

---

### **Question 39**
Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
*   A. API keys
*   B. Access keys
*   C. User names/Passwords
*   D. SSH keys

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Access keys**
*   **Explanation:** Programmatic access to AWS via the CLI or SDKs requires an **Access Key ID** and a **Secret Access Key** associated with an IAM user account.
</details>

---

### **Question 40**
Which of the following is a fast and reliable NoSQL database service?
*   A. Amazon Redshift
*   B. Amazon RDS
*   C. Amazon DynamoDB
*   D. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon DynamoDB**
*   **Explanation:** **Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.
</details>

---

### **Question 41**
What is an example of agility in the AWS Cloud?
*   A. Access to multiple instance types
*   B. Access to managed services
*   C. Using Consolidated Billing to produce one bill
*   D. Decreased acquisition time for new compute resources

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Decreased acquisition time for new compute resources**
*   **Explanation:** Agility refers to the speed of innovation and implementation. Reducing hardware procurement and setup times from weeks to seconds (**decreased acquisition time**) enables businesses to test and iterate ideas quickly.
</details>

---

### **Question 42**
Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
*   A. AWS IAM
*   B. AWS Organizations
*   C. AWS Schema Conversion Tool
*   D. AWS Config

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Organizations**
*   **Explanation:** **AWS Organizations** provides consolidated billing, central security policies (Service Control Policies), and account grouping capabilities to govern multiple AWS accounts under one root entity.
</details>

---

### **Question 43**
What approach to transcoding a large number of individual video files adheres to AWS architecture principles?
*   A. Using many instances in parallel
*   B. Using a single large instance during off-peak hours
*   C. Using dedicated hardware
*   D. Using a large GPU instance type

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Using many instances in parallel**
*   **Explanation:** AWS encourages a **horizontal scaling ("think parallel")** approach. Transcoding files using multiple independent instances simultaneously gets the job done faster and leverages the cloud's elasticity.
</details>

---

### **Question 44**
For which auditing process does AWS have sole responsibility?
*   A. AWS IAM policies
*   B. Physical security
*   C. Amazon S3 bucket policies
*   D. AWS CloudTrail Logs

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Physical security**
*   **Explanation:** Under the Shared Responsibility Model, AWS is solely responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud—specifically, **physical security** of datacenters.
</details>

---

### **Question 45**
Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?
*   A. Fault tolerance
*   B. Global reach
*   C. Pay-as-you-go pricing
*   D. High availability

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Global reach**
*   **Explanation:** AWS's **global reach**—with physical regions and edge locations distributed across the Americas, Europe, Asia, and Africa—lets companies deploy resources close to their customers worldwide to minimize latency.
</details>

---

### **Question 46**
Which of the following is the customer’s responsibility under the AWS shared responsibility model?
*   A. Patching underlying infrastructure
*   B. Physical security
*   C. Patching Amazon EC2 instances
*   D. Patching network infrastructure

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Patching Amazon EC2 instances**
*   **Explanation:** EC2 is an Infrastructure as a Service (IaaS) solution. While AWS maintains the underlying hardware hypervisor, the user is fully responsible for configuring and **patching the guest operating system** on the EC2 instances.
</details>

---

### **Question 47**
A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?
*   A. Create one global AWS account and move all AWS resources to that account.
*   B. Sign up for three years of Reserved Instance pricing up front.
*   C. Use the consolidated billing feature from AWS Organizations.
*   D. Sign up for the AWS Enterprise support plan to get volume discounts.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Use the consolidated billing feature from AWS Organizations.**
*   **Explanation:** Consolidated billing under **AWS Organizations** links accounts together for pricing purposes, aggregating their usage to reach lower tier pricing thresholds without requiring any physical changes or migration of active resources.
</details>

---

### **Question 48**
Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)
*   A. Summaries by Amazon Simple Notification Service (Amazon SNS)
*   B. Free Amazon Elasticsearch Service analytics
*   C. Provided at no charge
*   D. Real-time monitoring
*   E. Adjustable retention

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Real-time monitoring** & **E. Adjustable retention**
*   **Explanation:**
    *   **Real-time monitoring** (D) allows CloudWatch Logs to ingest and parse log streams in real-time.
    *   **Adjustable retention** (E) allows customers to customize log expiration intervals (ranging from one day to 10 years, or never expire) to control costs.
</details>

---

### **Question 49**
Which of the following is an AWS managed Domain Name System (DNS) web service?
*   A. Amazon Route 53
*   B. Amazon Neptune
*   C. Amazon SageMaker
*   D. Amazon Lightsail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Route 53**
*   **Explanation:** **Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service that translates domain names into IP addresses.
</details>

---

### **Question 50**
A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO.)
*   A. Reduced latency to users
*   B. The application’s presentation in the local language
*   C. Data sovereignty compliance
*   D. Cooling costs in hotter climates
*   E. Proximity to the customer’s office for on-site visits

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Reduced latency to users** & **C. Data sovereignty compliance**
*   **Explanation:**
    *   **Reduced latency** (A) is achieved by choosing a region geographically close to the user base.
    *   **Data sovereignty compliance** (C) mandates choosing regions located inside specific countries/territories to comply with local storage privacy laws (e.g. GDPR).
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
