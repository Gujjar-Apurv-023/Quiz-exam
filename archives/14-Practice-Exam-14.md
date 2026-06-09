# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 14

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Which storage service can be used as a low-cost option for hosting static websites?
*   A. Amazon Glacier
*   B. Amazon DynamoDB
*   C. Amazon Elastic File System (Amazon EFS)
*   D. Amazon Simple Storage Service (Amazon S3)

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Simple Storage Service (Amazon S3)**
*   **Explanation:** **Amazon S3** supports a static website hosting feature that allows you to configure an S3 bucket to serve HTML, CSS, and client-side scripts directly to a web browser at an extremely low cost with no servers to manage.
</details>

---

### **Question 2**
Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
*   A. Reserved Instances
*   B. On-Demand
*   C. Dedicated Hosts
*   D. Spot Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Spot Instances**
*   **Explanation:** **Spot Instances** let you bid for spare EC2 compute capacity, yielding up to a 90% discount compared to standard On-Demand pricing. However, they are subject to interruption with a 2-minute warning if AWS needs the capacity back.
</details>

---

### **Question 3**
What is the AWS customer responsible for according to the AWS shared responsibility model?
*   A. Physical access controls
*   B. Data encryption
*   C. Secure disposal of storage devices
*   D. Environmental risk management

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Data encryption**
*   **Explanation:** Under the Shared Responsibility Model, the customer is responsible for security **in** the cloud. This includes configuring and enforcing **data encryption** policies (both in transit and at rest) to protect customer data.
</details>

---

### **Question 4**
Which of the following AWS Cloud services can be used to run a customer-managed relational database?
*   A. Amazon EC2
*   B. Amazon Route 53
*   C. Amazon ElastiCache
*   D. Amazon DynamoDB

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon EC2**
*   **Explanation:** By launching an **Amazon EC2** instance, you can install any database engine (e.g. Oracle, MySQL, SQL Server) and manage it yourself. This gives you complete operating system and database administrative access (self-managed).
</details>

---

### **Question 5**
A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?
*   A. Amazon Simple Storage Service (Amazon S3)
*   B. Amazon DynamoDB
*   C. Amazon Kinesis
*   D. Amazon Redshift

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Redshift**
*   **Explanation:** **Amazon Redshift** is a fully managed, petabyte-scale column-oriented database designed specifically for high-performance data warehousing and complex analytical SQL queries.
</details>

---

### **Question 6**
Which statement best describes Elastic Load Balancing?
*   A. It translates a domain name into an IP address using DNS.
*   B. It distributes incoming application traffic across one or more Amazon EC2 instances.
*   C. It collects metrics on connected Amazon EC2 instances.
*   D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. It distributes incoming application traffic across one or more Amazon EC2 instances.**
*   **Explanation:** **Elastic Load Balancing (ELB)** acts as the single entry point for traffic, automatically distributing incoming user requests across backend targets (such as EC2 instances, containers, or IP addresses) to ensure high availability.
</details>

---

### **Question 7**
Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)
*   A. Command line interface
*   B. On-premises
*   C. Software Development Kits
*   D. Software-as-a-service
*   E. Hybrid

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Command line interface** & **C. Software Development Kits**
*   **Explanation:** AWS provides three primary administrative access interfaces:
    1.  **AWS Management Console** (Browser-based GUI)
    2.  **AWS Command Line Interface (CLI)** (A) (Terminal/Shell script-based commands)
    3.  **AWS SDKs** (C) (Application code integrations like Python, Node.js, Java)
</details>

---

### **Question 8**
The AWS Cloud’s multiple Regions are an example of:
*   A. agility.
*   B. global infrastructure.
*   C. elasticity.
*   D. pay-as-you-go pricing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. global infrastructure.**
*   **Explanation:** The physical layout of AWS datacenters distributed globally into geographically isolated regions and availability zones constitutes the **AWS Global Infrastructure**.
</details>

---

### **Question 9**
Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)
*   A. AWS Storage Gateway
*   B. Amazon S3
*   C. Amazon Elastic File System (EFS)
*   D. Amazon Glacier
*   E. Amazon CloudFront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3** & **E. Amazon CloudFront**
*   **Explanation:**
    *   **Amazon S3** (B) is the ideal origin storage system to hold massive video assets with high durability.
    *   **Amazon CloudFront** (E) is the Content Delivery Network (CDN) that distributes and caches those files at global edge locations, serving them to users with the lowest possible latency.
</details>

---

### **Question 10**
Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
*   A. Cloud-native
*   B. Partner network
*   C. Hybrid architecture
*   D. Infrastructure as a service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Hybrid architecture**
*   **Explanation:** A **hybrid architecture** describes a setup where public cloud resources (like AWS EC2 instances) are integrated with and interact with on-premises resources located in physical corporate datacenters.
</details>

---

### **Question 11**
What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
*   A. They require the customer to monitor and replace failing instances.
*   B. They have better performance than customer-managed services.
*   C. They simplify patching and updating underlying OSs.
*   D. They do not require the customer to optimize instance type or size selections.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. They simplify patching and updating underlying OSs.**
*   **Explanation:** In fully managed services, AWS abstracts the infrastructure layer, taking care of server provisioning, scheduled backups, and **underlying operating system patching and updates**, which reduces routine database admin work.
</details>

---

### **Question 12**
Which service provides a virtually unlimited amount of online highly durable object storage?
*   A. Amazon Redshift
*   B. Amazon Elastic File System (Amazon EFS)
*   C. Amazon Elastic Container Service (Amazon ECS)
*   D. Amazon S3

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon S3**
*   **Explanation:** **Amazon S3** is a highly durable object storage service that has no storage capacity limits, allowing you to store and retrieve any amount of data from anywhere on the web.
</details>

---

### **Question 13**
Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
*   A. IAM group
*   B. IAM user
*   C. IAM role
*   D. IAM policy

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. IAM user**
*   **Explanation:** An **IAM User** represents a person or application that interacts with AWS resources. Programmatic credentials (Access Key ID and Secret Access Key) are created and assigned directly to the IAM User.
</details>

---

### **Question 14**
Which of the following security-related services does AWS offer? (Select TWO.)
*   A. Multi-factor authentication physical tokens
*   B. AWS Trusted Advisor security checks
*   C. Data encryption
*   D. Automated penetration testing
*   E. Amazon S3 copyrighted content detection

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Trusted Advisor security checks** & **C. Data encryption**
*   **Explanation:** AWS provides native features for **Data Encryption** (C) (using KMS/CloudHSM) and **AWS Trusted Advisor security checks** (B) which scan your configuration for potential vulnerabilities (such as open security group ports or public S3 buckets).
</details>

---

### **Question 15**
Which AWS managed service is used to host databases?
*   A. AWS Batch
*   B. AWS Artifact
*   C. AWS Data Pipeline
*   D. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon RDS**
*   **Explanation:** **Amazon Relational Database Service (RDS)** is the primary managed service for relational databases (MySQL, PostgreSQL, Oracle, MariaDB, SQL Server).
</details>

---

### **Question 16**
Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
*   A. Amazon S3
*   B. Amazon Glacier
*   C. Amazon EBS
*   D. Amazon EFS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EFS**
*   **Explanation:** **Amazon Elastic File System (EFS)** provides a serverless network file system (NFSv4) that can be shared and mounted simultaneously by thousands of EC2 instances and on-premises Linux servers.
</details>

---

### **Question 17**
When architecting cloud applications, which of the following are a key design principle?
*   A. Use the largest instance possible
*   B. Provision capacity for peak load
*   C. Use the Scrum development process
*   D. Implement elasticity

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Implement elasticity**
*   **Explanation:** **Elasticity**—designing systems to scale out automatically under load and scale in when resources are idle—replaces the legacy process of purchasing fixed hardware capacity based on peak load predictions.
</details>

---

### **Question 18**
Which AWS service should be used for long-term, low-cost storage of data backups?
*   A. Amazon RDS
*   B. Amazon Glacier
*   C. AWS Snowball
*   D. AWS EBS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Glacier**
*   **Explanation:** **Amazon S3 Glacier** is a low-cost, durable archive storage class designed for data backups that are accessed infrequently and can tolerate retrieval times of several minutes or hours.
</details>

---

### **Question 19**
Which task is AWS responsible for in the shared responsibility model for security and compliance?
*   A. Granting access to individuals and services
*   B. Encrypting data in transit
*   C. Updating Amazon EC2 host firmware
*   D. Updating operating systems

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Updating Amazon EC2 host firmware**
*   **Explanation:** AWS manages security "of" the cloud. Host hypervisors, server chassis firmware, physical networking, and datacenter hardware updates are entirely the responsibility of AWS.
</details>

---

### **Question 20**
Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
*   A. AWS Marketplace
*   B. Amazon Lumberyard
*   C. AWS Artifact
*   D. Amazon CloudSearch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Marketplace**
*   **Explanation:** **AWS Marketplace** is a digital catalog containing thousands of software listings from independent software vendors, enabling quick deployment of pre-configured AMIs and software solutions.
</details>

---

### **Question 21**
Which of the following is a benefit of using the AWS Cloud?
*   A. Permissive security removes the administrative burden.
*   B. Ability to focus on revenue-generating activities.
*   C. Control over cloud network hardware.
*   D. Choice of specific cloud hardware vendors.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Ability to focus on revenue-generating activities.**
*   **Explanation:** Offloading physical infrastructure operations (racks, electricity, hardware repair, patching) to AWS allows businesses to devote their development talent and financial resources to writing software and driving business revenue.
</details>

---

### **Question 22**
When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
*   A. Dedicated Hosts
*   B. Reserved Instances
*   C. On-Demand Instances
*   D. No Upfront Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Dedicated Hosts**
*   **Explanation:** **Dedicated Hosts** allocate a physical server to a single customer, satisfying regulatory requirements that demand strict physical separation/isolation from other tenants' workloads.
</details>

---

### **Question 23**
Which AWS service provides the ability to manage infrastructure as code?
*   A. AWS CodePipeline
*   B. AWS CodeDeploy
*   C. AWS Direct Connect
*   D. AWS CloudFormation

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS CloudFormation**
*   **Explanation:** **AWS CloudFormation** allows you to model, provision, and update your entire infrastructure in a declarative manner using JSON or YAML configuration files (Infrastructure as Code).
</details>

---

### **Question 24**
If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
*   A. AWS Config
*   B. AWS Trusted Advisor
*   C. Amazon CloudWatch
*   D. Amazon Inspector

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Config**
*   **Explanation:** **AWS Config** continually monitors and records resource configuration states. It acts as an audit trail for change management, allowing you to see how a resource was configured at any point in the past.
</details>

---

### **Question 25**
What is Amazon CloudWatch?
*   A. A code repository with customizable build and team commit features.
*   B. A metrics repository with customizable notification thresholds and channels.
*   C. A security configuration repository with threat analytics.
*   D. A rule repository of a web application firewall with automated vulnerability prevention features.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. A metrics repository with customizable notification thresholds and channels.**
*   **Explanation:** **Amazon CloudWatch** collects and monitors resource metrics (CPU usage, network traffic, custom app logs). It acts as a metrics repository and can trigger notifications (via CloudWatch Alarms and SNS) when thresholds are crossed.
</details>

---

### **Question 26**
Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
*   A. AWS Server Migration Service
*   B. AWS Organizations
*   C. AWS Budgets
*   D. AWS Trusted Advisor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Organizations**
*   **Explanation:** By linking multiple AWS accounts into a single organization via **AWS Organizations**, consolidated billing combines usage across all member accounts to qualify for tier-based volume discounts.
</details>

---

### **Question 27**
Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)
*   A. AWS Elastic Beanstalk
*   B. AWS OpsWorks
*   C. AWS CodeDeploy
*   D. AWS Batch
*   E. AWS X-Ray

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS OpsWorks** & **C. AWS CodeDeploy**
*   **Explanation:**
    *   **AWS OpsWorks** (B) (Puppet/Chef-based automation) and **AWS CodeDeploy** (C) can deploy code to on-premises servers by running lightweight software agents on those external instances.
</details>

---

### **Question 28**
Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
*   A. On-Demand Instances
*   B. Reserved Instances
*   C. Spot Instances
*   D. Convertible Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Spot Instances**
*   **Explanation:** **Spot Instances** represent spare EC2 capacity offered at discounts up to 90%, with pricing fluctuating dynamically based on real-time supply and demand.
</details>

---

### **Question 29**
Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)
*   A. Use manual monitoring.
*   B. Use fixed servers.
*   C. Implement loose coupling.
*   D. Rely on individual components.
*   E. Design for scalability.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Implement loose coupling** & **E. Design for scalability.**
*   **Explanation:** To successfully modernise a monolith, you should break it into microservices using **loose coupling** (C) (isolating systems using queues or APIs) and design for **scalability** (E) (ensuring components scale horizontally).
</details>

---

### **Question 30**
Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
*   A. Enterprise
*   B. Business
*   C. Developer
*   D. Basic

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Business**
*   **Explanation:** The **Business Support Plan** offers a 1-hour response time for "production system down" cases. Developer-level support has response times of 12-24 hours for basic issues.
</details>

---

### **Question 31**
Where can AWS compliance and certification reports be downloaded?
*   A. AWS Artifact
*   B. AWS Concierge
*   C. AWS Certificate Manager
*   D. AWS Trusted Advisor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Artifact**
*   **Explanation:** **AWS Artifact** is the central self-service compliance portal containing AWS audit reports, certifications (e.g. ISO, PCI), and corporate security agreements.
</details>

---

### **Question 32**
Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?
*   A. AWS Service Health Dashboard
*   B. AWS X-Ray
*   C. AWS Personal Health Dashboard
*   D. Amazon CloudWatch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Personal Health Dashboard**
*   **Explanation:** The **AWS Personal Health Dashboard** (also known as AWS Health Dashboard - Personal View) displays alerts and remediation guidance tailored specifically to the AWS resources running in your account. The *Service Health Dashboard* shows general status across all AWS services globally.
</details>

---

### **Question 33**
Which of the following is an advantage of consolidated billing on AWS?
*   A. Volume pricing qualification
*   B. Shared access permissions
*   C. Multiple bills per account
*   D. Eliminates the need for tagging

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Volume pricing qualification**
*   **Explanation:** Consolidated billing aggregates usage data across linked accounts under a single master payer account, letting the company reach higher tier volume pricing thresholds.
</details>

---

### **Question 34**
Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
*   A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.
*   B. Request and wait for approval from the customer’s internal security team, and then conduct testing.
*   C. Notify AWS support, and then conduct testing immediately.
*   D. Request and wait for approval from AWS support, and then conduct testing.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Request and wait for approval from the customer’s internal security team, and then conduct testing.**
*   **Explanation:** AWS no longer requires prior approval for penetration testing against common core services (EC2, RDS, Aurora, Lambda, API Gateway). Therefore, a customer only needs internal authorization from their own security team before starting the test.
</details>

---

### **Question 35**
Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
*   A. Amazon Elastic Block Store (Amazon EBS)
*   B. Amazon Machine Image
*   C. Amazon EC2 Systems Manager
*   D. Amazon AppStream 2.0

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Machine Image**
*   **Explanation:** An **Amazon Machine Image (AMI)** contains the pre-configured OS template, volume layouts, and applications needed to boot an EC2 instance.
</details>

---

### **Question 36**
How would an AWS customer easily apply common access controls to a large set of users?
*   A. Apply an IAM policy to an IAM group.
*   B. Apply an IAM policy to an IAM role.
*   C. Apply the same IAM policy to all IAM users with access to the same workload.
*   D. Apply an IAM policy to an Amazon Cognito user pool.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Apply an IAM policy to an IAM group.**
*   **Explanation:** The easiest way to manage access for a large team is by adding users to an **IAM Group** and attaching the required IAM Policy to that group, rather than assigning policies to users individually.
</details>

---

### **Question 37**
Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
*   A. AWS Cost Explorer
*   B. AWS Budgets
*   C. AWS Cost and Usage report
*   D. AWS Billing dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Cost and Usage report**
*   **Explanation:** The **AWS Cost and Usage Report (CUR)** provides the most comprehensive and granular billing data available (hourly breakdown by resource, cost allocation tags, and usage metrics).
</details>

---

### **Question 38**
Which of the following an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)
*   A. AWS Concierge
*   B. AWS CloudFormation
*   C. Amazon Simple Storage Service (Amazon S3)
*   D. Amazon EC2 Auto Scaling
*   E. AWS Management Console

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CloudFormation** & **E. AWS Management Console**
*   **Explanation:** New RDS clusters are provisioned through IaC deployment templates via **AWS CloudFormation** (B) or interactively using the **AWS Management Console** (E) web interface.
</details>

---

### **Question 39**
Which of the following is an AWS Cloud architecture design principle?
*   A. Implement single points of failure.
*   B. Implement loose coupling.
*   C. Implement monolithic design.
*   D. Implement vertical scaling.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Implement loose coupling.**
*   **Explanation:** **Loose coupling** is a fundamental cloud design principle that splits application components into independent units. This prevents cascading errors and allows components to scale independently.
</details>

---

### **Question 40**
Which of the following security measures protect access to an AWS account? (Select TWO.)
*   A. Enable AWS CloudTrail.
*   B. Grant least privilege access to IAM users.
*   C. Create one IAM user and share with many developers and users.
*   D. Enable Amazon CloudFront.
*   E. Activate multi-factor authentication (MFA) for privileged users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Grant least privilege access to IAM users** & **E. Activate multi-factor authentication (MFA) for privileged users.**
*   **Explanation:** Essential account-level security best practices require granting **least privilege** (B) (only the permissions needed to do a job) and enforcing **MFA** (E) for administrative and root users.
</details>

---

### **Question 41**
Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
*   A. Amazon Glacier
*   B. AWS Snowball
*   C. AWS Storage Gateway
*   D. Amazon Elastic Block Storage (Amazon EBS)

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Storage Gateway**
*   **Explanation:** **AWS Storage Gateway** is a hybrid cloud storage service that allows on-premises systems to utilize scalable AWS storage options (S3, EBS, Glacier) via file, volume, or tape gateway protocols.
</details>

---

### **Question 42**
Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
*   A. Amazon RDS.
*   B. Amazon EC2.
*   C. Amazon ElastiCache.
*   D. AWS Fargate.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon EC2.**
*   **Explanation:** Amazon EC2 is an Infrastructure as a Service (IaaS) resource, meaning the guest operating system, custom security patches, software dependencies, and port rules are fully managed by the customer.
</details>

---

### **Question 43**
Which of the following is an important architectural design principle when designing cloud applications?
*   A. Use multiple Availability Zones.
*   B. Use tightly coupled components.
*   C. Use open source software.
*   D. Provision extra capacity.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Use multiple Availability Zones.**
*   **Explanation:** Deploying application components across **multiple Availability Zones** ensures the architecture is resilient to localized hardware, power, or connectivity failures.
</details>

---

### **Question 44**
Which AWS support plan includes a dedicated Technical Account Manager?
*   A. Developer
*   B. Enterprise
*   C. Business
*   D. Basic

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Enterprise**
*   **Explanation:** A dedicated **Technical Account Manager (TAM)** is a premium support benefit available exclusively to customers on the **Enterprise Support** tier.
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
*   **Explanation:** RDS reduces administrative overhead by handling server hardware management, OS patching, updates, and backups. The customer is responsible for schema design and query optimization.
</details>

---

### **Question 46**
Which service is best for storing common database query results, which helps to alleviate database access load?
*   A. Amazon Machine Learning
*   B. Amazon SQS
*   C. Amazon ElastiCache
*   D. Amazon EC2 Instance Store

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon ElastiCache**
*   **Explanation:** **Amazon ElastiCache** provides an in-memory database caching layer (Redis or Memcached) to store frequently read query results, significantly reducing database query times and lowering backend workload.
</details>

---

### **Question 47**
Which of the following is a component of the shared responsibility model managed entirely by AWS?
*   A. Patching operating system software
*   B. Encrypting data
*   C. Enforcing multi-factor authentication
*   D. Auditing physical data center assets

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Auditing physical data center assets**
*   **Explanation:** Physical security and **auditing physical assets** within AWS datacenters are completely handled by AWS under security "of" the cloud.
</details>

---

### **Question 48**
Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)
*   A. AWS Trusted Advisor
*   B. AWS Online Tech Talks
*   C. AWS Blog
*   D. AWS Forums
*   E. AWS Classroom Training

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Online Tech Talks** & **E. AWS Classroom Training**
*   **Explanation:** For interactive or structured instructor-guided environments:
    *   **Classroom Training** (E) features live classes taught by AWS-certified instructors (either virtually or in person).
    *   **Online Tech Talks** (B) feature live webinars with Q&A sessions led by AWS technical experts.
</details>

---

### **Question 49**
Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)
*   A. Amazon CloudFront distributions
*   B. Amazon Route 53
*   C. Security Groups
*   D. Subnets
*   E. Elastic Load Balancing

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Security Groups** & **D. Subnets**
*   **Explanation:** The VPC dashboard allows you to manage network resources within your virtual private network, including **subnets** (D) and **security groups** (C). *Note:* CloudFront, Route 53, and ELB have their own dedicated consoles.
</details>

---

### **Question 50**
If each department within a company has its own AWS account, what is one way to enable consolidated billing?
*   A. Use AWS Budgets on each account to pay only to budget.
*   B. Contact AWS Support for a monthly bill.
*   C. Create an AWS Organization from the payer account and invite the other accounts to join.
*   D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Create an AWS Organization from the payer account and invite the other accounts to join.**
*   **Explanation:** To enable consolidated billing, you designate a primary payer account, create an organization using **AWS Organizations**, and send invitations to the independent departmental accounts to join the organization.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
