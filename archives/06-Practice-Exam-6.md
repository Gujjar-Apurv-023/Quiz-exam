# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 6

This interactive practice exam contains 50 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Which of the following is true regarding the AWS availability zones and edge locations?
*   A. Edge locations are located in separate Availability Zones worldwide to serve global customers.
*   B. An availability zone exists within an edge location to distribute content globally with low latency.
*   C. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.
*   D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.**
*   **Explanation:** Availability Zones (AZs) are physically isolated datacenters within a specific AWS Region. **Edge Locations** are separate, global endpoints operated by AWS to cache web content close to users (located in major cities globally, outside AWS Regions).
</details>

---

### **Question 2**
Which features are included in the AWS Business Support Plan? (Choose TWO)
*   A. 24x7 access to customer service
*   B. Access to Cloud Support Engineers via email only during business hours
*   C. Access to the Infrastructure Event Management (IEM) feature for additional fee
*   D. 24x7 access to the TAM feature
*   E. Partial access to the core Trusted Advisor checks

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. 24x7 access to customer service** & **C. Access to the Infrastructure Event Management (IEM) feature for additional fee**
*   **Explanation:**
    *   **Business Support** provides 24x7 support access via phone, email, and chat with technical support engineers (A).
    *   It allows enrollment in the **Infrastructure Event Management (IEM)** service for an additional fee to help prepare for product launches or migration events (C).
    *   *Note:* Access to a Technical Account Manager (TAM) requires the Enterprise support plan (D).
</details>

---

### **Question 3**
A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?
*   A. Amazon GuardDuty
*   B. Amazon Personalize
*   C. Amazon Cognito
*   D. AWS IAM

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Amazon Cognito**
*   **Explanation:** **Amazon Cognito User Pools** manage user sign-in, signup, and authentication. It natively supports social identity federation, allowing users to authenticate using external identities like Apple, Google, Facebook, or Amazon.
</details>

---

### **Question 4**
Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?
*   A. AWS CloudFormation
*   B. AWS Config
*   C. AWS CloudTrail
*   D. AWS Auto Scaling

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS CloudFormation**
*   **Explanation:** **AWS CloudFormation** allows you to model, provision, and manage AWS resource configurations programmatically using JSON/YAML text files as **Infrastructure as Code (IaC)**, which can be reused to launch identical configurations.
</details>

---

### **Question 5**
Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)
*   A. Eliminates the need to monitor servers and applications.
*   B. Manages all the compliance and auditing tasks.
*   C. Provides custom hardware to meet any specification.
*   D. Eliminates the need to guess on infrastructure capacity needs.
*   E. Enables customers to trade their capital expenses for operational expenses.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Eliminates the need to guess on infrastructure capacity needs.** & **E. Enables customers to trade their capital expenses for operational expenses.**
*   **Explanation:** Key advantages of cloud computing include:
    *   **Stop guessing capacity** (D) because you can scale resources up or down on demand.
    *   **Trade capital expense for variable/operational expense** (E) paying only for what you consume rather than purchasing physical infrastructure upfront.
</details>

---

### **Question 6**
A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)
*   A. AWS Fargate
*   B. Amazon Elastic Compute Cloud
*   C. Amazon RDS
*   D. AWS Database Migration service (DMS)
*   E. AWS Lambda

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Elastic Compute Cloud** & **C. Amazon RDS**
*   **Explanation:** SQL Server can be deployed on virtual machines in **Amazon EC2** (giving you OS administration control) (B) or as a managed database service on **Amazon RDS for SQL Server** (C). DMS is a database replication tool, not a database host environment.
</details>

---

### **Question 7**
Which AWS Service can perform health checks on Amazon EC2 instances?
*   A. AWS CloudFormation
*   B. Amazon Route 53
*   C. Amazon Chime
*   D. Amazon Aurora

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Route 53**
*   **Explanation:** **Amazon Route 53** can perform continuous health checks on target endpoints (such as web server instances). If an instance is found unhealthy, Route 53 automatically routes DNS traffic away from it to healthy destinations.
</details>

---

### **Question 8**
A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?
*   A. Amazon Comprehend
*   B. AWS IAM
*   C. Amazon Polly
*   D. Amazon Rekognition

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Rekognition**
*   **Explanation:** **Amazon Rekognition** is a computer vision service powered by deep learning that analyzes images and videos for facial recognition, object detection, text in images, and content moderation.
</details>

---

### **Question 9**
Which of the following are examples of AWS-managed databases? (Choose TWO)
*   A. Amazon Neptune
*   B. Amazon CloudSearch
*   C. Microsoft SQL Server on Amazon EC2
*   D. MySQL on Amazon EC2
*   E. Amazon RDS for MySQL

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon Neptune** & **E. Amazon RDS for MySQL**
*   **Explanation:**
    *   **Amazon Neptune** (A) is a fully managed graph database service.
    *   **Amazon RDS for MySQL** (E) is a managed relational database service. SQL Server/MySQL hosted directly on EC2 are self-managed databases.
</details>

---

### **Question 10**
A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?
*   A. EC2 On-Demand Instances
*   B. EC2 Reserved Instances - No Upfront
*   C. EC2 Spot Instances
*   D. EC2 Reserved Instances - All Upfront

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. EC2 Spot Instances**
*   **Explanation:** **Spot Instances** provide up to 90% discount over On-Demand rates by utilizing spare AWS compute capacity. Since the processing jobs are periodic and can tolerate interruptions without losing work, Spot instances are the most cost-effective solution.
</details>

---

### **Question 11**
There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?
*   A. AWS account owner
*   B. AWS technical account manager
*   C. AWS security team
*   D. AWS cloud support engineers

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS account owner**
*   **Explanation:** Only the **AWS account owner** (the root account user or an administrator IAM identity within that account) holds authorization to configure IAM permissions and grant access. AWS support engineers/TAMs cannot manage credentials or access customer account controls.
</details>

---

### **Question 12**
You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?
*   A. AWS File Transfer Acceleration
*   B. AWS Server Migration Service
*   C. AWS Database Migration Service
*   D. AWS Application Discovery Service

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Server Migration Service**
*   **Explanation:** **AWS Server Migration Service (SMS)** (and its modern successor, AWS Application Migration Service - MGN) automates and migrates physical, VMware, or Hyper-V virtual machines from on-premises to Amazon EC2.
</details>

---

### **Question 13**
What are some key benefits of using AWS CloudFormation? (Choose TWO)
*   A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.
*   B. It applies advanced IAM security features automatically.
*   C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.
*   D. It allows you to model your entire infrastructure in just a text file.
*   E. It compiles and builds application code in a timely manner.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.** & **D. It allows you to model your entire infrastructure in just a text file.**
*   **Explanation:** CloudFormation enables developers to define infrastructure setups in a JSON/YAML configuration text file (D) and automates the provisioning, modifications, and deletion of resource stacks safely (C).
</details>

---

### **Question 14**
Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?
*   A. On-premises
*   B. Mixed
*   C. Hybrid
*   D. Cloud

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Hybrid**
*   **Explanation:** A **Hybrid** cloud deployment bridges cloud-based resources (AWS) with existing on-premises infrastructure (private datacenters).
</details>

---

### **Question 15**
A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?
*   A. CloudEndure Disaster Recovery
*   B. CloudEndure Migration
*   C. AWS Backup
*   D. AWS Glue

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. CloudEndure Disaster Recovery**
*   **Explanation:** **CloudEndure Disaster Recovery** (and its modern successor, AWS Elastic Disaster Recovery - DRS) continuously replicates workloads (databases and VMs) to a lightweight staging area in another AWS Region, allowing near-instantaneous recovery (within minutes) during a regional disaster.
</details>

---

### **Question 16**
Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?
*   A. S3 Standard-IA
*   B. S3 Intelligent-Tiering
*   C. S3 Glacier Deep Archive
*   D. S3 Standard

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. S3 Standard**
*   **Explanation:** Static assets for an active, popular website have high access frequencies. **Amazon S3 Standard** is designed for high-frequency access data, offering low latency, high throughput, and zero retrieval fees.
</details>

---

### **Question 17**
You want to create a backup of your data in another geographical location. Where should you create this backup?
*   A. In another Edge location.
*   B. In another Region.
*   C. In another VPC.
*   D. In another Availability Zone.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. In another Region.**
*   **Explanation:** Geographical redundancy requires storing backups in a completely separate **AWS Region** (geographically separated by hundreds of miles). Availability Zones are located within the same local region, and Edge locations do not support custom backup storage.
</details>

---

### **Question 18**
Which statement is true in relation to the security of Amazon EC2?
*   A. You should use instance store volumes to store login data.
*   B. You should regularly patch the operating system and applications on your EC2 instances.
*   C. You should deploy critical components of your application in the Availability Zone that you trust.
*   D. You can track all API calls using Amazon Athena.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. You should regularly patch the operating system and applications on your EC2 instances.**
*   **Explanation:** According to the Shared Responsibility Model, AWS manages physical security and infrastructure, while the customer is responsible for guest operating system patching and application security configurations (B).
</details>

---

### **Question 19**
What does AWS Cost Explorer provide to help manage your AWS spend?
*   A. Cost comparisons between AWS Cloud environments and on-premises environments.
*   B. Accurate estimates of AWS service costs based on your expected usage.
*   C. Consolidated billing.
*   D. Highly accurate cost forecasts for up to 12 months ahead.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Highly accurate cost forecasts for up to 12 months ahead.**
*   **Explanation:** **AWS Cost Explorer** lets you visualize and analyze your cost and usage history. It also generates cost forecasts for up to the next 12 months, assisting with cloud budget planning.
</details>

---

### **Question 20**
Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?
*   A. RDS Single-AZ
*   B. RDS Write Replica
*   C. RDS Snapshots
*   D. RDS Multi-AZ

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. RDS Multi-AZ**
*   **Explanation:** **RDS Multi-AZ Deployments** replicate database changes synchronously to a standby instance in another Availability Zone. If the primary instance goes down, RDS executes automatic failover to the standby node.
</details>

---

### **Question 21**
You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?
*   A. Deleting all EBS volumes attached to the instances.
*   B. You cannot minimize charges for on-demand instances.
*   C. Terminating the instances.
*   D. Stopping the instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Stopping the instances.**
*   **Explanation:** Stopping your On-Demand instances when they are not in use (e.g. over weekends or nights) halts EC2 compute charges. You only pay for the EBS volume storage while the instances are in a stopped state.
</details>

---

### **Question 22**
Which of the following strategies helps protect your AWS root account?
*   A. Delete root user access keys if you do not need them.
*   B. Apply MFA for the root account and use it for all of your work.
*   C. Access the root account only from your personal Mobile Phone.
*   D. Only share your AWS account password or access keys with trusted persons.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Delete root user access keys if you do not need them.**
*   **Explanation:** Standard security best practices recommend deleting any access keys for the root account to prevent accidental exposure of full-admin credentials. You should create dedicated IAM users for day-to-day administrative activities rather than using root (B is incorrect).
</details>

---

### **Question 23**
Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)
*   A. The size of volumes provisioned per month.
*   B. The compute capacity you consume.
*   C. The amount of data you have stored in snapshots.
*   D. The compute time you consume.
*   E. The number of Snowball storage devices you request.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. The size of volumes provisioned per month.** & **C. The amount of data you have stored in snapshots.**
*   **Explanation:** EBS pricing is based on:
    *   The volume capacity (GBs) provisioned per month (A).
    *   The volume type (e.g., GP3, IO2) and any provisioned IOPS.
    *   The storage space consumed by EBS Snapshots in S3 (C).
</details>

---

### **Question 24**
You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?
*   A. Attach a separate IAM policy for each individual account.
*   B. Apply the Principle of Least Privilege.
*   C. For security purposes, you should not grant any permission to the DevOps team.
*   D. Create six different IAM passwords.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Apply the Principle of Least Privilege.**
*   **Explanation:** The **Principle of Least Privilege** is a standard security guideline recommending that you grant users only the minimum permissions required to perform their specific job responsibilities.
</details>

---

### **Question 25**
Which of the following has the greatest impact on cost? (Choose TWO)
*   A. Compute charges
*   B. The number of services used
*   C. Data Transfer In charges
*   D. Data Transfer Out charges
*   E. The number of IAM roles provisioned

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Compute charges** & **D. Data Transfer Out charges**
*   **Explanation:** The main drivers of cloud costs are compute resources (instances, databases, running runtimes) (A) and egress bandwidth costs (**Data Transfer Out** to the internet) (D). Data Transfer In is free, and creating IAM roles is free.
</details>

---

### **Question 26**
Who from the following will get the largest discount?
*   A. A user who chooses to buy On-demand, Convertible, Partial upfront instances.
*   B. A user who chooses to buy Reserved, Convertible, All upfront instances.
*   C. A user who chooses to buy Reserved, Standard, No upfront instances.
*   D. A user who chooses to buy Reserved, Standard, All upfront instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. A user who chooses to buy Reserved, Standard, All upfront instances.**
*   **Explanation:** **Standard Reserved Instances** yield higher discount rates than Convertible Reserved Instances. **All Upfront** payment models offer larger discounts than No Upfront or Partial Upfront models. Standard, All Upfront RIs yield the largest total discount.
</details>

---

### **Question 27**
Which of the following is an available option when purchasing Amazon EC2 instances?
*   A. The ability to bid to get the lowest possible prices.
*   B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.
*   C. The ability to buy Dedicated Instances for up to 90% discount.
*   D. The ability to pay upfront to get lower hourly costs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. The ability to pay upfront to get lower hourly costs.**
*   **Explanation:** Paying upfront (All Upfront or Partial Upfront) for Reserved Instances allows you to achieve lower effective hourly rates. AWS no longer uses a bidding model for Spot Instances (which fluctuate based on real-time capacity supply and demand).
</details>

---

### **Question 28**
What does the term “Economies of scale” mean?
*   A. It means that you save more when you consume more.
*   B. It means as more time passes using AWS, you pay more for its services.
*   C. It means that AWS will continuously lower costs as it grows.
*   D. It means that you have the ability to pay as you go.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It means that AWS will continuously lower costs as it grows.**
*   **Explanation:** **Economies of scale** refers to the operational savings AWS achieves by purchasing hardware and bandwidth in massive volumes. AWS passes these savings back to customers by continuously lowering service prices.
</details>

---

### **Question 29**
A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?
*   A. AWS Auto Scaling
*   B. Amazon Elastic Compute Cloud
*   C. Amazon Elastic File System
*   D. Amazon ElastiCache

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Auto Scaling**
*   **Explanation:** **AWS Auto Scaling** monitors applications and automatically adjusts compute capacity (adding or removing EC2 instances) to match changing traffic requirements, ensuring consistent performance.
</details>

---

### **Question 30**
Which of the below options is true of Amazon VPC?
*   A. Amazon VPC allows customers to control user interactions with all other AWS resources.
*   B. AWS Customers have complete control over their Amazon VPC virtual networking environment.
*   C. AWS is responsible for all the management and configuration details of Amazon VPC.
*   D. Amazon VPC helps customers to review their AWS architecture and adopt best practices.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Customers have complete control over their Amazon VPC virtual networking environment.**
*   **Explanation:** **Amazon Virtual Private Cloud (VPC)** lets you provision a logically isolated section of the AWS Cloud where you have complete control over virtual networking features, including subnets, IP ranges, routing tables, and gateways.
</details>

---

### **Question 31**
Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?
*   A. AWS Cost Explorer
*   B. AWS Pricing Calculator
*   C. AWS Budgets
*   D. AWS TCO Calculator

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS TCO Calculator**
*   **Explanation:** The **AWS TCO (Total Cost of Ownership) Calculator** (which is now integrated inside the AWS Pricing Calculator) is used to perform a cost-benefit analysis by comparing the costs of running your workloads on-premises versus on AWS.
</details>

---

### **Question 32**
Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)
*   A. AWS Config
*   B. Amazon Redshift
*   C. Amazon MQ
*   D. AWS Trusted Advisor
*   E. Amazon Cognito

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Config** & **D. AWS Trusted Advisor**
*   **Explanation:**
    *   **AWS Config** (A) continuously records and audits configuration settings to evaluate compliance against organizational rules.
    *   **AWS Trusted Advisor** (D) scans your environment against AWS best practices to provide real-time checks across security, cost, and fault tolerance.
</details>

---

### **Question 33**
Which of the following AWS services uses Puppet to automate how EC2 instances are configured?
*   A. AWS OpsWorks
*   B. AWS CloudFormation
*   C. AWS Quick Starts
*   D. AWS CloudTrail

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS OpsWorks**
*   **Explanation:** **AWS OpsWorks** is a managed configuration service that provides automation environments using Chef and **Puppet** to configure and maintain virtual servers.
</details>

---

### **Question 34**
An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?
*   A. Amazon Kinesis
*   B. Amazon QuickSight
*   C. AWS CodeDeploy
*   D. Amazon Athena

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS CodeDeploy**
*   **Explanation:** **AWS CodeDeploy** is a managed deployment service that automates software deployment to various compute services, including Amazon EC2 instances, AWS Lambda functions, AWS Fargate services, or on-premises servers.
</details>

---

### **Question 35**
Select the services that are server-based: (Choose TWO)
*   A. Amazon RDS
*   B. Amazon DynamoDB
*   C. AWS Lambda
*   D. AWS Fargate
*   E. Amazon EMR

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Amazon RDS** & **E. Amazon EMR**
*   **Explanation:**
    *   **Amazon RDS** (A) deploys relational databases directly on virtual server instances.
    *   **Amazon EMR** (E) spins up big data clusters of EC2 server instances. DynamoDB, Lambda, and Fargate are serverless services.
</details>

---

### **Question 36**
What best describes penetration testing?
*   A. Testing your application’s response time from different locations.
*   B. Testing your network to find security vulnerabilities that an attacker could exploit.
*   C. Testing your instances to check for the unhealthy ones.
*   D. Testing your software for bugs and errors.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Testing your network to find security vulnerabilities that an attacker could exploit.**
*   **Explanation:** **Penetration testing** is the practice of simulating attacks on your systems, applications, and networks to identify security weaknesses before malicious actors can exploit them.
</details>

---

### **Question 37**
Which of the following are use cases for Amazon EMR? (Choose TWO)
*   A. Enables you to backup extremely large amounts of data at very low costs.
*   B. Enables you to move Exabyte-scale data from on-premises datacenters into AWS.
*   C. Enables you to analyze and process extremely large amounts of data in a timely manner.
*   D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.
*   E. Enables you to easily run and manage Docker containers.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Enables you to analyze and process extremely large amounts of data in a timely manner.** & **D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.**
*   **Explanation:** **Amazon EMR** (Elastic MapReduce) is a cloud-based big data platform used to process and analyze massive datasets (C) by running and scaling open-source frameworks like Apache Spark, Hadoop, Presto, and Hive (D).
</details>

---

### **Question 38**
Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?
*   A. There is no chat feature in AWS support.
*   B. The chat feature is available for all plans for an additional fee, but you have to request it first.
*   C. At a minimum, upgrade to Business support plan.
*   D. Upgrade from the Basic Support plan to Developer Support.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. At a minimum, upgrade to Business support plan.**
*   **Explanation:** The Basic plan is free and only handles billing issues. The Developer support plan only allows email submissions. You must upgrade to the **Business** (or Enterprise) support plan to access 24/7 technical support via phone, email, and chat.
</details>

---

### **Question 39**
A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?
*   A. AWS Fargate
*   B. AWS Batch
*   C. Amazon Personalize
*   D. AWS Elastic Beanstalk

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Elastic Beanstalk**
*   **Explanation:** **AWS Elastic Beanstalk** is an easy-to-use PaaS service for deploying and scaling web applications. The developer can upload their application code, and Beanstalk automatically handles provisioning, load balancing, and scaling without requiring cloud architecture experience.
</details>

---

### **Question 40**
Which statement best describes the AWS Pay-As-You-Go pricing model?
*   A. With AWS, you replace low upfront expenses with large variable payments.
*   B. With AWS, you replace low upfront expenses with large fixed payments.
*   C. With AWS, you replace large upfront expenses with low fixed payments.
*   D. With AWS, you replace large capital expenses with low variable payments.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. With AWS, you replace large capital expenses with low variable payments.**
*   **Explanation:** The pay-as-you-go pricing model allows customers to trade large capital expenses (CapEx for physical servers) for low, variable operating expenses (OpEx), paying only for what they consume.
</details>

---

### **Question 41**
For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)
*   A. Database setup
*   B. Network traffic protection
*   C. Management of the operating system
*   D. Access management
*   E. Management of firewall rules

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Database setup** & **C. Management of the operating system**
*   **Explanation:** As a managed service, Amazon RDS handles database provisioning and setup (A), physical hosting, backups, patching, and guest operating system management (C). The customer is responsible for managing application-level access (D) and security group firewall rules (E).
</details>

---

### **Question 42**
Which of the following strategies help analyze costs in AWS?
*   A. Using tags to group resources
*   B. Using AWS CloudFormation to automate the deployment of resources
*   C. Deploying resources of the same type in different regions
*   D. Configuring Amazon Inspector to automatically analyze costs and email reports

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Using tags to group resources.**
*   **Explanation:** Allocating **cost allocation tags** to resources allows you to group and categorize expenses by project, owner, or environment in billing reports, making cost analysis simple.
</details>

---

### **Question 43**
A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?
*   A. AWS Direct Connect
*   B. Amazon Comprehend
*   C. AWS Snowmobile
*   D. AWS VPN

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Direct Connect**
*   **Explanation:** **AWS Direct Connect** creates a dedicated, private physical network connection between customer data centers and AWS. This bypasses the public internet, offering highly consistent bandwidth and throughput.
</details>

---

### **Question 44**
What is the main benefit of the AWS Storage Gateway service?
*   A. It automates the process of building, maintaining, and running ETL jobs.
*   B. It provides physical devices to migrate data from on premises to AWS.
*   C. It allows integration of on-premises IT environments with Cloud Storage.
*   D. It provides hardware-based key storage for regulatory compliance.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. It allows integration of on-premises IT environments with Cloud Storage.**
*   **Explanation:** **AWS Storage Gateway** is a hybrid cloud storage service that bridges local IT environments with AWS storage services (like S3, EBS, and Glacier) through a local appliance.
</details>

---

### **Question 45**
To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?
*   A. Amazon S3 Glacier Deep Archive
*   B. Amazon S3 Standard-Infrequent Access
*   C. Amazon S3 Glacier
*   D. Instance Store

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon S3 Standard-Infrequent Access**
*   **Explanation:** **S3 Standard-IA** is designed for infrequently accessed data that requires rapid, immediate retrieval. Glacier storage classes are cheaper for storage but take minutes to hours to retrieve. Instance stores are ephemeral and will lose data on instance stop/termination, so they are not suitable for backups.
</details>

---

### **Question 46**
Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?
*   A. AWS Global Accelerator
*   B. AWS Data Pipeline
*   C. AWS DAX Accelerator
*   D. AWS Transfer Acceleration

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Global Accelerator**
*   **Explanation:** **AWS Global Accelerator** uses the AWS global network infrastructure to route user traffic to the optimal endpoint, improving the availability and performance of applications globally.
</details>

---

### **Question 47**
Why are Serverless Architectures more economical than Server-based Architectures?
*   A. Serverless Architectures use new powerful computing devices.
*   B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.
*   C. When you reserve serverless capacity, you will get large discounts compared to server reservation.
*   D. With Serverless Architectures you have the ability to scale automatically up or down as demand changes.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.**
*   **Explanation:** Serverless computing bills customers only during code execution. Traditional server-based models run virtual machines constantly, incurring billing hours even when servers are idle.
</details>

---

### **Question 48**
Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)
*   A. Point-to-point connectivity between an on-premises data center and AWS.
*   B. Detects configuration changes in the AWS environment.
*   C. DNS configuration and management.
*   D. Manages global application traffic through a variety of routing types.
*   E. Provides infrastructure security optimization recommendations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. DNS configuration and management.** & **D. Manages global application traffic through a variety of routing types.**
*   **Explanation:** Amazon Route 53 is a highly available and scalable Domain Name System (DNS) service. It handles DNS configuration and domain registration (C) and directs global application traffic using routing policies like latency, failover, and geolocation (D).
</details>

---

### **Question 49**
You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?
*   A. AWS Snowmobile
*   B. AWS Import/Export
*   C. AWS DMS
*   D. AWS Snowball

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Snowball**
*   **Explanation:** **AWS Snowball Edge** is a physical data transfer device. A single Snowball holds up to 80TB or 100TB, so a few Snowball devices can securely and cost-effectively migrate 200 Terabytes of data, avoiding expensive bandwidth costs. Snowmobile is designed for petabyte/exabyte scales (tens of PBs).
</details>

---

### **Question 50**
You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?
*   A. Amazon Redshift
*   B. Amazon Athena
*   C. AWS Cloud9
*   D. Amazon ElastiCache for Redis

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon ElastiCache for Redis**
*   **Explanation:** **Amazon ElastiCache for Redis** is an in-memory data store that offers sub-millisecond response latencies, making it ideal for real-time IoT data processing, gaming, or caching.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
