# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 5

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?
*   A. Least Privilege
*   B. Pilot Light
*   C. Fault Tolerance
*   D. Multi-threading

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Fault Tolerance**
*   **Explanation:** **Fault Tolerance** refers to a system's ability to remain operational despite individual component failures. Implementing redundant EC2 instances across multiple Availability Zones under an Elastic Load Balancer (ELB) guarantees that if some nodes crash, the site stays online.
</details>

---

### **Question 2**
You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?
*   A. All up-front reservation
*   B. All reserved instance payment options provide the same discount level
*   C. Partial up-front reservation
*   D. No up-front reservation

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. All up-front reservation**
*   **Explanation:** Reserved Instances support three payment tiers: All Upfront, Partial Upfront, and No Upfront. Paying the entire contract cost **All Upfront** at the start of the term secures the largest possible discount rate.
</details>

---

### **Question 3**
What features does AWS offer to help protect your data in the Cloud? (Choose TWO)
*   A. Access control
*   B. Physical MFA devices
*   C. Data encryption
*   D. Unlimited storage
*   E. Load balancing

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Access control** & **C. Data encryption**
*   **Explanation:**
    *   **Access Control** (A) via IAM permissions and bucket policies restricts logical access to data files.
    *   **Data Encryption** (C) (using KMS or SSE protocols) encodes data at rest and in transit to protect it from unauthorized viewing.
</details>

---

### **Question 4**
An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?
*   A. 3 hours for the Linux instance and 5 hours for the CentOS instance.
*   B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.
*   C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.
*   D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.**
*   **Explanation:** 
    *   Amazon Linux EC2 instances are billed in **1-second increments** (minimum 1 minute), so the customer is charged for exactly 2 hours, 5 minutes, and 9 seconds.
    *   Certain third-party, commercial software, or custom operating system configurations (like Red Hat or some CentOS offerings) are billed in **1-hour increments** (rounded up to the nearest hour), meaning 4 hours, 23 minutes, and 7 seconds is billed as 5 hours.
</details>

---

### **Question 5**
What is the AWS Support feature that allows customers to manage support cases programmatically?
*   A. AWS Trusted Advisor
*   B. AWS Operations Support
*   C. AWS Support API
*   D. AWS Personal Health Dashboard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Support API**
*   **Explanation:** The **AWS Support API** (accessible under Business or Enterprise support plans) enables customers to programmatically interact with and manage their support tickets, cases, and Trusted Advisor checks.
</details>

---

### **Question 6**
Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)
*   A. AWS CLI
*   B. AWS Security Groups
*   C. AWS SDKs
*   D. AWS Network Access Control Lists
*   E. AWS CodeCommit

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CLI** & **C. AWS SDKs**
*   **Explanation:** Developers and admins can configure IAM resources (users, groups, roles, and policies) programmatically using the **AWS CLI** (A) and **AWS SDKs** (C).
</details>

---

### **Question 7**
Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)
*   A. AWS Resource Groups
*   B. IAM Policies
*   C. IAM Roles
*   D. IAM Users
*   E. AWS Organizations

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. IAM Roles** & **D. IAM Users**
*   **Explanation:** An **IAM Identity** represents a resource that can be authenticated. These include **IAM Users** (representing a person or application) (D) and **IAM Roles** (representing temporary access states for services/users) (C). Policies are permission documents attached to identities.
</details>

---

### **Question 8**
Which of the following Amazon RDS features facilitates offloading of database read activity?
*   A. Database Snapshots
*   B. Multi-AZ Deployments
*   C. Automated Backups
*   D. Read Replicas

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Read Replicas**
*   **Explanation:** Amazon RDS **Read Replicas** enable you to run read-only copies of your database. Applications can direct query read traffic to these replicas, offloading processing strain from the primary write database.
</details>

---

### **Question 9**
How does AWS notify customers about security and privacy events pertaining to AWS services?
*   A. Using the AWS ACM service
*   B. Using Security Bulletins
*   C. Using the AWS Management Console
*   D. Using Compliance Resources

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Using Security Bulletins**
*   **Explanation:** AWS publishes security bulletins and alerts on its public **AWS Security Bulletins** website to inform customers of security issues, vulnerabilities, and patches affecting AWS infrastructure and services.
</details>

---

### **Question 10**
Which IAM entity can best be used to grant temporary access to your AWS resources?
*   A. IAM Users
*   B. Key Pair
*   C. IAM Roles
*   D. IAM Groups

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. IAM Roles**
*   **Explanation:** An **IAM Role** does not have long-term passwords or access keys. Instead, assuming a role yields temporary security credentials (valid for minutes to hours) that allow users or systems to perform specific actions securely.
</details>

---

### **Question 11**
A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?
*   A. AWS Global Accelerator
*   B. AWS Application Load Balancer (ALB)
*   C. Amazon CloudFront
*   D. Transit VPC

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Application Load Balancer (ALB)**
*   **Explanation:** An **Application Load Balancer (ALB)** distributes incoming application traffic (HTTP/HTTPS) evenly across multiple target servers (EC2 instances) running in parallel, enabling horizontal scaling.
</details>

---

### **Question 12**
Which of the following integration approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?
*   A. Use Software test automation tools.
*   B. Use AWS CodeDeploy to build and automate your AWS environment.
*   C. Use code to provision and operate your AWS infrastructure.
*   D. Migrate all of your applications to a dedicated host.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Use code to provision and operate your AWS infrastructure.**
*   **Explanation:** **Infrastructure as Code (IaC)** (such as using AWS CloudFormation templates or Terraform configurations) allows you to define your infrastructure state in code. This automates the provisioning process, ensuring consistency and eliminating manual human error.
</details>

---

### **Question 13**
A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?
*   A. Restrict any API call made through SDKs or CLI.
*   B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.
*   C. Require Multi-Factor Authentication (MFA) for all IAM User access.
*   D. Set up two login passwords.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Require Multi-Factor Authentication (MFA) for all IAM User access.**
*   **Explanation:** Enabling **MFA** adds a critical security layer by requiring users to enter a code from a physical or virtual device in addition to their password, blocking access if credentials are stolen. Sharing IAM accounts (B) violates security standards.
</details>

---

### **Question 14**
Which AWS Service offers volume discounts based on usage?
*   A. Amazon VPC
*   B. Amazon S3
*   C. Amazon Lightsail
*   D. AWS Cost Explorer

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3**
*   **Explanation:** **Amazon S3** charges tier-based prices. As your total stored data increases (into larger Terabyte/Petabyte ranges), the per-GB monthly storage cost decreases, implementing volume discounts.
</details>

---

### **Question 15**
Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)
*   A. The AWS Region’s security level.
*   B. Data sovereignty.
*   C. Cost.
*   D. The planned number of VPCs.
*   E. Geographic proximity to the company’s location.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Data sovereignty.** & **C. Cost.**
*   **Explanation:** 
    *   **Data Sovereignty/Compliance** (B): Regulations may mandate that user data remain within specific geographic boundaries (e.g. EU GDPR).
    *   **Cost** (C): Resource rates vary across AWS Regions based on localized operational and tax costs.
    *   *Note:* While geographic proximity is important, it focuses on proximity to **end-users** to minimize network latency, not proximity to the company itself (E).
</details>

---

### **Question 16**
You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?
*   A. Amazon EFS
*   B. Amazon Neptune
*   C. Amazon ElastiCache
*   D. DAX

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon ElastiCache**
*   **Explanation:** **Amazon ElastiCache** provides an in-memory caching layer (Redis or Memcached) that speeds up database read queries for relational databases like MySQL by caching frequent queries. DAX is specifically for DynamoDB caching, not MySQL.
</details>

---

### **Question 17**
What are the advantages of using Auto Scaling Groups for EC2 instances?
*   A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.
*   B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.
*   C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.
*   D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.**
*   **Explanation:** Auto Scaling Groups can launch and terminate instances across **multiple Availability Zones** within a Region, ensuring that if one zone suffers a physical power or network outage, the workload automatically continues running in other zones.
</details>

---

### **Question 18**
The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?
*   A. AWS helps customers invest more in capital expenditures.
*   B. AWS automates all infrastructure operations, so customers save more on human resources costs.
*   C. AWS continues to lower the cost of cloud computing for its customers.
*   D. AWS secures AWS resources at no additional charge.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS continues to lower the cost of cloud computing for its customers.**
*   **Explanation:** AWS regularly reduces pricing for its services as a result of its scale, passing capital efficiency and infrastructure savings back to the consumer, widening the TCO advantage.
</details>

---

### **Question 19**
Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)
*   A. Building a schema for an application.
*   B. Replacing physical hardware.
*   C. Creating a new hypervisor.
*   D. Patch management of the underlying infrastructure.
*   E. File system encryption.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Building a schema for an application.** & **E. File system encryption.**
*   **Explanation:** Under the Shared Responsibility Model, the customer is responsible for data security, configurations, and data design (security **in** the cloud). This includes encrypting storage volumes (E) and designing secure database schemas (A). AWS manages hardware and physical hypervisor maintenance.
</details>

---

### **Question 20**
Which of the following is a type of MFA device that customers can use to protect their AWS resources?
*   A. AWS CloudHSM
*   B. U2F Security Key
*   C. AWS Access Keys
*   D. AWS Key Pair

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. U2F Security Key**
*   **Explanation:** AWS supports hardware-based MFA security keys that follow the **U2F / FIDO** security standards (e.g. YubiKeys) as physical second-factor verification devices.
</details>

---

### **Question 21**
A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?
*   A. Amazon SNS
*   B. AWS Elastic Beanstalk
*   C. AWS Systems Manager
*   D. AWS Trusted Advisor

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Elastic Beanstalk**
*   **Explanation:** **AWS Elastic Beanstalk** is a Platform as a Service (PaaS). It accepts your .NET application code, deploys the required resources (servers, OS, load balancer), and handles scaling automatically, making it the fastest deployment path.
</details>

---

### **Question 22**
Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)
*   A. The amount of time the instances will be running.
*   B. Number of security groups.
*   C. Allocated Elastic IP Addresses.
*   D. Number of Hosted Zones.
*   E. Number of instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Number of security groups.** & **D. Number of Hosted Zones.**
*   **Explanation:** Security Groups are virtual firewalls and are completely free (B). Hosted Zones are a billing component of **Amazon Route 53**, not EC2 (D). Run time, count of instances, and Elastic IPs carry EC2-specific billing rates.
</details>

---

### **Question 23**
Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?
*   A. AWS Data Pipeline
*   B. AWS Storage Gateway
*   C. Amazon Aurora
*   D. Amazon EFS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Storage Gateway**
*   **Explanation:** **AWS Storage Gateway** is a hybrid cloud storage service that allows on-premises systems to connect and extend their storage to AWS (saving local disk space by caching and backing up data to S3).
</details>

---

### **Question 24**
A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?
*   A. Amazon Simple Storage Service
*   B. Amazon Elastic Block Store
*   C. Amazon Elastic Container Service
*   D. AWS Storage Gateway

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Simple Storage Service**
*   **Explanation:** **Amazon S3** automatically scales to store trillions of files, offering massive storage capacity with tiered storage classes (like Intelligent-Tiering or Glacier) to minimize costs.
</details>

---

### **Question 25**
You have just hired a sys-admin. You created a new IAM user for him. On his first day, you ask him to create snapshots of EBS volumes and save them in a new S3 bucket. However, he is unable to create snapshots or buckets. What might prevent him?
*   A. EBS and S3 are accessible only to the root account owner.
*   B. The systems administrator must contact AWS Support first to activate his new IAM account.
*   C. There is not enough space in S3 to store the snapshots.
*   D. There is a non-explicit deny to all new users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. There is a non-explicit deny to all new users.**
*   **Explanation:** In AWS IAM, new users are created with **no permissions by default** (referred to as an implicit deny). You must explicitly attach policies (permissions) to the IAM user or group to allow them to create S3 buckets or EBS snapshots.
</details>

---

### **Question 26**
An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?
*   A. AWS CloudTrail
*   B. Amazon CloudFront
*   C. AWS CloudFormation
*   D. Amazon CloudWatch

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CloudTrail**
*   **Explanation:** **AWS CloudTrail** records user activity, console changes, and API actions throughout the AWS account. This provides the auditor with a complete log of who accessed which resources and when.
</details>

---

### **Question 27**
Which of the below options is true of Amazon Cloud Directory?
*   A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.
*   B. Amazon Cloud Directory enables the analysis of video and data streams in real time.
*   C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.
*   D. Amazon Cloud Directory allows for registration and management of domain names.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.**
*   **Explanation:** **Amazon Cloud Directory** is a high-performance directory store that enables you to build multi-dimensional hierarchical directories of data (such as organization charts or course catalogs).
</details>

---

### **Question 28**
A user has opened a “Production System Down” support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?
*   A. 12 hours
*   B. 15 minutes
*   C. 24 hours
*   D. One hour

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. One hour**
*   **Explanation:** Under the Business and Enterprise support plans, the response time target for a **Production System Down** case is **under 1 hour**. A "Business Critical System Down" (Enterprise support only) has a 15-minute response target.
</details>

---

### **Question 29**
Which of the below options is a best practice for making your application on AWS highly available?
*   A. Deploy the application to at least two Availability Zones.
*   B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.
*   C. Deploy the application code on at least two servers in the same Availability Zone.
*   D. Rewrite the application code to handle all incoming requests.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Deploy the application to at least two Availability Zones.**
*   **Explanation:** High availability requires setting up redundancy. Deploying resources across **at least two Availability Zones** ensures that if one zone experiences an outage, your application remains active in the other zone.
</details>

---

### **Question 30**
Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)
*   A. Labor and IT costs.
*   B. Cooling and power consumption.
*   C. Amazon EBS computing power.
*   D. Software architecture.
*   E. Software compatibility.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Labor and IT costs.** & **B. Cooling and power consumption.**
*   **Explanation:** Direct on-premises server operations costs include **electricity/cooling** (B) and the **labor cost** of sysadmins and IT staff (A) required to physically build and maintain the systems.
</details>

---

### **Question 31**
Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?
*   A. AWS Basic Support
*   B. AWS Developer Support
*   C. AWS Business Support
*   D. AWS Enterprise Support

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Enterprise Support**
*   **Explanation:** Only the **Enterprise Support** plan guarantees a technical response time target of **less than 15 minutes** for "Business-Critical System Down" events.
</details>

---

### **Question 32**
Which of the following AWS offerings are serverless services? (Choose TWO)
*   A. Amazon EC2
*   B. AWS Lambda
*   C. Amazon DynamoDB
*   D. Amazon EMR
*   E. Amazon RDS

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Lambda** & **C. Amazon DynamoDB**
*   **Explanation:** AWS Lambda (compute) and DynamoDB (NoSQL database) run serverlessly; users do not manage or scale underlying EC2 host servers.
</details>

---

### **Question 33**
Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?
*   A. Amazon GuardDuty
*   B. AWS ACM
*   C. Amazon Detective
*   D. AWS WAF

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS ACM**
*   **Explanation:** **AWS Certificate Manager (ACM)** enables you to easily provision, manage, and deploy SSL/TLS certificates for use with integrated AWS resources.
</details>

---

### **Question 34**
Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?
*   A. AWS Config
*   B. AWS OpsWorks
*   C. AutoScaling
*   D. AWS CloudFormation

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS OpsWorks**
*   **Explanation:** **AWS OpsWorks** is a configuration management service that provides managed instances of Chef and Puppet, enabling automated configuration and deployment of servers.
</details>

---

### **Question 35**
A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?
*   A. Amazon EBS
*   B. Amazon EFS
*   C. Amazon S3
*   D. Amazon Instance Store

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon S3**
*   **Explanation:** **Amazon S3** stores files as objects and provides direct web URL accessibility (when configured with appropriate public/presigned permissions), making files downloadable over the internet.
</details>

---

### **Question 36**
Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?
*   A. AWS WAF
*   B. Amazon CloudWatch
*   C. AWS Cloud9
*   D. AWS CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS WAF**
*   **Explanation:** **AWS WAF** (Web Application Firewall) integrates with Amazon CloudFront, allowing you to monitor and filter HTTP and HTTPS traffic requests sent to CloudFront distributions.
</details>

---

### **Question 37**
A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?
*   A. On-demand Instances
*   B. Dedicated Hosts
*   C. Spot Instances
*   D. Reserved Instances

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Reserved Instances**
*   **Explanation:** For steady-state workloads running continuously throughout the year, **Reserved Instances** yield the highest cost savings (up to 72% off compared to On-Demand).
</details>

---

### **Question 38**
A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?
*   A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.
*   B. Create an IAM role and attach a policy with Administrator access permissions.
*   C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.
*   D. Create an IAM user and attach a policy with Administrator access permissions.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.**
*   **Explanation:** For individual personnel access, you should create a dedicated **IAM User** (C). To apply the principle of least privilege, attach a policy restricted strictly to DynamoDB access rather than full administrator rights.
</details>

---

### **Question 39**
When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?
*   A. Generate new IAM access keys every time you delegate permissions.
*   B. Store the required AWS credentials directly within the application code.
*   C. Use temporary security credentials (IAM roles) instead of long-term access keys.
*   D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Use temporary security credentials (IAM roles) instead of long-term access keys.**
*   **Explanation:** Best practice dictates assigning an **IAM Role** to an EC2 instance. This provides the running applications with automatically rotated temporary credentials, avoiding the risk of hardcoding long-term access keys.
</details>

---

### **Question 40**
Which of the following will help AWS customers save on costs when migrating their workloads to AWS?
*   A. Use servers instead of managed services.
*   B. Use existing third-party software licenses on AWS.
*   C. Migrate production workloads to AWS edge locations instead of AWS Regions.
*   D. Use AWS Outposts to run all workloads in a cost-optimized environment.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Use existing third-party software licenses on AWS.**
*   **Explanation:** Bring Your Own License (BYOL) allows customers to use existing software licenses (like Microsoft, Oracle) on AWS EC2 Dedicated Hosts or instances, avoiding repurchase fees.
</details>

---

### **Question 41**
An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?
*   A. Amazon SQS
*   B. Virtual Private Gateway
*   C. AWS Artifact
*   D. Amazon CloudFront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon SQS**
*   **Explanation:** **Amazon SQS** provides message queues that allow decoupled microservices or application components to queue and process messages asynchronously.
</details>

---

### **Question 42**
Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)
*   A. Amazon Connect
*   B. AWS CLI
*   C. AWS Identity and Access Management (IAM)
*   D. Amazon SNS
*   E. Amazon Virtual Private Cloud

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS CLI** & **C. AWS Identity and Access Management (IAM)**
*   **Explanation:** Enabling virtual MFA devices is a security setting configured via the **AWS IAM Console** (C) or programmatically via the **AWS CLI** (B).
</details>

---

### **Question 43**
According to best practices, which of the below options is best suited for processing a large number of binary files?
*   A. Vertically scaling EC2 instances.
*   B. Running RDS instances in parallel.
*   C. Vertically scaling RDS instances.
*   D. Running EC2 instances in parallel.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Running EC2 instances in parallel.**
*   **Explanation:** **Running EC2 instances in parallel** (horizontal scaling) allows you to distribute the binary processing workload across multiple machines, increasing processing speed and providing fault tolerance compared to scaling a single server vertically.
</details>

---

### **Question 44**
A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?
*   A. AWS Cost Explorer
*   B. AWS Pricing Calculator
*   C. AWS Budgets
*   D. AWS Cost & Usage Report

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Pricing Calculator**
*   **Explanation:** The **AWS Pricing Calculator** is the tool used to estimate cost architectures before creating the actual resources.
</details>

---

### **Question 45**
What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)
*   A. Stop all running services and open an investigation.
*   B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.
*   C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.
*   D. Open an investigation and delete any potentially compromised IAM users.
*   E. Change your AWS root account password and the passwords of any IAM users.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Open an investigation and delete any potentially compromised IAM users.** & **E. Change your AWS root account password and the passwords of any IAM users.**
*   **Explanation:** If unknown resources appear, your account credentials might be compromised. Best security practice is to immediately change passwords of the root account and IAM users (E) and identify and delete compromised credentials or user entities in IAM (D).
</details>

---

### **Question 46**
A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?
*   A. Elastic coupling
*   B. Loosely coupling
*   C. Scalable coupling
*   D. Tightly coupling

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Loosely coupling**
*   **Explanation:** **Loose coupling** isolates components from each other so that a failure in one does not cause a cascading failure across the rest of the application.
</details>

---

### **Question 47**
Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?
*   A. Amazon Elastic File System
*   B. Amazon Simple Storage Service
*   C. Amazon Elastic Block Store
*   D. AWS Storage Gateway

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Elastic File System**
*   **Explanation:** **Amazon EFS** (Elastic File System) provides a fully managed shared file system that supports the NFSv4 protocol and can be mounted concurrently by thousands of instances.
</details>

---

### **Question 48**
Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?
*   A. Create private connection to your data center.
*   B. Achieve global high availability.
*   C. Automate the process of provisioning new compute resources.
*   D. Make synchronous replication of your data possible.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Make synchronous replication of your data possible.**
*   **Explanation:** The high-speed fiber lines linking AZs in a Region provide extremely low-latency connections, making real-time, **synchronous replication** of database records or block volumes (like in RDS Multi-AZ) feasible without slowing down application transactions.
</details>

---

### **Question 49**
Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)
*   A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.
*   B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.
*   C. Lambda is AWS’ proprietary programming language for microservices.
*   D. Lambda doesn’t support programming languages; it is a serverless compute service.
*   E. Lambda can support any programming language using an API.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.** & **E. Lambda can support any programming language using an API.**
*   **Explanation:** AWS Lambda natively supports node.js, Python, Java, Go, C#, PowerShell, and Ruby (B). It also supports a Runtime API that allows executing custom runtimes for **any other programming language** (E) (e.g. C++ or Rust).
</details>

---

### **Question 50**
What are the capabilities of AWS X-Ray? (Choose TWO)
*   A. Automatically decouples application components.
*   B. Facilitates tracking of user requests to identify application issues.
*   C. Helps improve application performance.
*   D. Deploys applications to Amazon EC2 instances.
*   E. Deploys applications to on-premises servers.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Facilitates tracking of user requests to identify application issues.** & **C. Helps improve application performance.**
*   **Explanation:** **AWS X-Ray** traces user requests as they traverse distributed microservices (B), identifying latency bottlenecks and errors, which directly assists developers in **improving application performance** (C).
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
