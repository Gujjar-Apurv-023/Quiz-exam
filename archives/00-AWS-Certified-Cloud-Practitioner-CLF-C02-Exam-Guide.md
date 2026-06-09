# 📖 AWS Certified Cloud Practitioner (CLF-C02) Exam Guide

This document contains the official exam guide outline for the AWS Certified Cloud Practitioner (CLF-C02) certification.


## 🚀 Introduction

The AWS Certified Cloud Practitioner (CLF-C02) exam is intended for individuals who can effectively demonstrate overall knowledge of the AWS Cloud, independent of a specific job role.

The exam validates a candidate's ability to complete the following tasks:
*   Explain the value of the AWS Cloud.
*   Understand and explain the AWS shared responsibility model.
*   Understand the AWS Well-Architected Framework.
*   Understand security best practices.
*   Understand AWS Cloud costs, economics, and billing practices.
*   Describe and position the core AWS services, including compute, network, database, and storage services.
*   Identify AWS services for common use cases.

---

## 🎯 Target Candidate Description

The target candidate has up to 6 months of exposure to AWS Cloud design, implementation, and/or operations. The candidate might be in the early stages of pursuing an AWS Cloud career or the candidate might work with people in AWS Cloud roles.

### 💡 Recommended AWS Knowledge
The target candidate should have AWS knowledge in the following areas:
*   AWS Cloud concepts
*   Security and compliance in the AWS Cloud
*   Core AWS services
*   Economics of the AWS Cloud

### 🚫 Out-of-Scope Job Tasks
The following list contains job tasks that the target candidate is not expected to be able to perform. These tasks are out of scope for the exam:
*   Coding
*   Designing cloud architecture
*   Troubleshooting
*   Implementation
*   Load and performance testing

---

## 📝 Exam Content & Structure

### Question Types
There are two types of questions on the exam:
*   **Multiple choice:** Has one correct response and three incorrect responses (distractors).
*   **Multiple response:** Has two or more correct responses out of five or more response options.

*Unanswered questions are scored as incorrect; there is no penalty for guessing.*

### Scored & Unscored Content
*   **Scored Questions:** 50 questions that affect your score.
*   **Unscored Questions:** 15 questions that do not affect your score (used to evaluate performance for future exam forms).

### Exam Results
*   **Scaled Score Range:** 100–1,000
*   **Minimum Passing Score:** 700

---

## 📊 Content Outline & Domain Weighting

The exam has the following content domains and weightings:

| Content Domain | Weighting |
| :--- | :---: |
| **Domain 1: Cloud Concepts** | 24% |
| **Domain 2: Security and Compliance** | 30% |
| **Domain 3: Cloud Technology and Services** | 34% |
| **Domain 4: Billing, Pricing, and Support** | 12% |
| **Total Scored Content** | **100%** |

---

## 🗺️ Domain Details & Task Statements

### **Content Domain 1: Cloud Concepts (24% of scored content)**

#### **Task Statement 1.1: Define the benefits of the AWS Cloud.**
*   **Knowledge of:** Value proposition of the AWS Cloud.
*   **Skills in:**
    *   Understanding the benefits of global infrastructure (for example, speed of deployment, global reach).
    *   Understanding the advantages of high availability, elasticity, and agility.

#### **Task Statement 1.2: Identify design principles of the AWS Cloud.**
*   **Knowledge of:** AWS Well-Architected Framework.
*   **Skills in:**
    *   Understanding the pillars of the Well-Architected Framework (operational excellence, security, reliability, performance efficiency, cost optimization, sustainability).
    *   Identifying differences between the pillars of the Well-Architected Framework.

#### **Task Statement 1.3: Understand the benefits of and strategies for migration to the AWS Cloud.**
*   **Knowledge of:** Cloud adoption strategies; resources to support the cloud migration journey.
*   **Skills in:**
    *   Understanding the components of the AWS Cloud Adoption Framework (AWS CAF) (for example, reduced business risk; improved environmental, social, and governance [ESG] performance; increased revenue; increased operational efficiency).
    *   Identifying appropriate migration strategies (for example, database replication, use of AWS Snowball).

#### **Task Statement 1.4: Understand concepts of cloud economics.**
*   **Knowledge of:** Aspects of cloud economics; cost savings of moving to the cloud.
*   **Skills in:**
    *   Understanding the role of fixed costs compared with variable costs.
    *   Understanding costs that are associated with on-premises environments.
    *   Understanding the differences between licensing strategies (for example, Bring Your Own License [BYOL] model compared with included licenses).
    *   Understanding the concept of rightsizing.
    *   Identifying benefits of automation.
    *   Understanding the economies of scale (for example, cost savings).

---

### **Content Domain 2: Security and Compliance (30% of scored content)**

#### **Task Statement 2.1: Understand the AWS shared responsibility model.**
*   **Knowledge of:** AWS shared responsibility model.
*   **Skills in:**
    *   Recognizing the components of the AWS shared responsibility model.
    *   Describing the customer's responsibilities on AWS.
    *   Describing AWS responsibilities.
    *   Describing responsibilities that the customer and AWS share.
    *   Describing how AWS responsibilities and customer responsibilities can shift, depending on the service used (for example, Amazon RDS, AWS Lambda, Amazon EC2).

#### **Task Statement 2.2: Understand AWS Cloud security, governance, and compliance concepts.**
*   **Knowledge of:** AWS compliance and governance concepts; benefits of cloud security (for example, encryption); where to capture and locate logs that are associated with cloud security.
*   **Skills in:**
    *   Identifying where to find AWS compliance information (for example, AWS Artifact).
    *   Understanding compliance needs among geographic locations or industries (for example, AWS compliance).
    *   Describing how customers secure resources on AWS (for example, Amazon Inspector, AWS Security Hub, Amazon GuardDuty, AWS Shield).
    *   Identifying encryption options (for example, encryption in transit, encryption at rest).
    *   Recognizing services that aid in governance and compliance (for example, monitoring with Amazon CloudWatch; auditing with AWS CloudTrail, AWS Audit Manager, and AWS Config; reporting with access reports).
    *   Recognizing compliance requirements that vary among AWS services.

#### **Task Statement 2.3: Identify AWS access management capabilities.**
*   **Knowledge of:** Identity and access management (for example, AWS Identity and Access Management [IAM]); importance of protecting the AWS root user account; principle of least privilege; AWS IAM Identity Center (AWS Single Sign-On).
*   **Skills in:**
    *   Understanding access keys, password policies, and credential storage (for example, AWS Secrets Manager, AWS Systems Manager).
    *   Identifying authentication methods in AWS (for example, multi-factor authentication [MFA], IAM Identity Center, cross-account IAM roles).
    *   Defining groups, users, custom policies, and managed policies in compliance with the principle of least privilege.
    *   Identifying tasks that only the account root user can perform.
    *   Understanding which methods can achieve root user protection.
    *   Understanding the types of identity management (for example, federated).

#### **Task Statement 2.4: Identify components and resources for security.**
*   **Knowledge of:** Security capabilities that AWS provides; security-related documentation that AWS provides.
*   **Skills in:**
    *   Describing AWS security features and services (for example, AWS WAF, AWS Firewall Manager, AWS Shield, Amazon GuardDuty).
    *   Understanding that third-party security products are available from AWS Marketplace.
    *   Identifying where AWS security information is available (for example, AWS Knowledge Center, AWS Security Center, AWS Security Blog).
    *   Understanding the use of AWS services for identifying security issues (for example, AWS Trusted Advisor).

---

### **Content Domain 3: Cloud Technology and Services (34% of scored content)**

#### **Task Statement 3.1: Define methods of deploying and operating in the AWS Cloud.**
*   **Knowledge of:** Various ways of provisioning and operating in the AWS Cloud; various ways to access AWS services; types of cloud deployment models.
*   **Skills in:**
    *   Deciding between options such as programmatic access (for example, APIs, SDKs, CLI), the AWS Management Console, and infrastructure as code (IaC).
    *   Evaluating requirements to determine whether to use one-time operations or repeatable processes.
    *   Identifying deployment models (for example, cloud, hybrid, on-premises).

#### **Task Statement 3.2: Define the AWS global infrastructure.**
*   **Knowledge of:** AWS Regions, Availability Zones, and edge locations; high availability; use of multiple Regions; benefits of edge locations.
*   **Skills in:**
    *   Describing relationships among Regions, Availability Zones, and edge locations.
    *   Describing how to achieve high availability by using multiple Availability Zones.
    *   Recognizing that Availability Zones do not share single points of failure.
    *   Describing when to use multiple Regions (for example, disaster recovery, business continuity, low latency for end users, data sovereignty).

#### **Task Statement 3.3: Identify AWS compute services.**
*   **Knowledge of:** AWS compute services.
*   **Skills in:**
    *   Recognizing the appropriate use of various Amazon EC2 instance types (for example, compute optimized, storage optimized).
    *   Recognizing the appropriate use of various container options (for example, Amazon Elastic Container Service [Amazon ECS], Amazon Elastic Kubernetes Service [Amazon EKS]).
    *   Recognizing the appropriate use of various serverless compute options (for example, AWS Fargate, AWS Lambda).
    *   Recognizing that auto scaling provides elasticity.
    *   Identifying the purposes of load balancers.

#### **Task Statement 3.4: Identify AWS database services.**
*   **Knowledge of:** AWS database services; database migration.
*   **Skills in:**
    *   Deciding when to use EC2 hosted databases or AWS managed databases.
    *   Identifying relational databases (for example, Amazon RDS, Amazon Aurora).
    *   Identifying NoSQL databases (for example, Amazon DynamoDB).
    *   Identifying memory-based databases (for example, Amazon ElastiCache).
    *   Identifying database migration tools (for example, AWS Database Migration Service [AWS DMS], AWS Schema Conversion Tool [AWS SCT]).

#### **Task Statement 3.5: Identify AWS network services.**
*   **Knowledge of:** AWS network services.
*   **Skills in:**
    *   Identifying the components of a VPC (for example, subnets, gateways).
    *   Understanding security in a VPC (for example, network ACLs, security groups, Amazon Inspector).
    *   Understanding the purpose of Amazon Route 53.
    *   Identifying network connectivity options to AWS (for example, AWS VPN, AWS Direct Connect).

#### **Task Statement 3.6: Identify AWS storage services.**
*   **Knowledge of:** AWS storage services.
*   **Skills in:**
    *   Identifying the uses for object storage.
    *   Recognizing the differences in Amazon S3 storage classes.
    *   Identifying block storage solutions (for example, Amazon Elastic Block Store [Amazon EBS], instance store).
    *   Identifying file services (for example, Amazon Elastic File System [Amazon EFS], Amazon FSx).
    *   Identifying cached file systems (for example, AWS Storage Gateway).
    *   Understanding use cases for lifecycle policies.
    *   Understanding use cases for AWS Backup.

#### **Task Statement 3.7: Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services.**
*   **Knowledge of:** AWS AI/ML services; AWS analytics services.
*   **Skills in:**
    *   Understanding AI/ML services and the tasks that they accomplish (for example, Amazon SageMaker AI, Amazon Lex, Amazon Kendra).
    *   Identifying the services for data analytics (for example, Amazon Athena, Amazon EMR, Amazon Kinesis, AWS Glue, Amazon QuickSight, Amazon Redshift).

#### **Task Statement 3.8: Identify services from other in-scope AWS service categories.**
*   **Knowledge of:**
    *   Application integration services of Amazon EventBridge, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS), AWS Step Functions.
    *   Business application services of Amazon Connect and Amazon Simple Email Service (Amazon SES).
    *   Customer enablement services (for example, AWS Support).
    *   Developer tool services and capabilities (for example, AWS CLI, AWS CodeBuild, AWS CodePipeline, and AWS X-Ray).
    *   End-user computing services of Amazon AppStream 2.0, Amazon WorkSpaces, and Amazon WorkSpaces Secure Browser.
    *   Frontend web and mobile services of AWS Amplify and AWS AppSync.
    *   IoT services (for example, AWS IoT Core).
*   **Skills in:**
    *   Choosing the appropriate service to deliver messages and to send alerts and notifications.
    *   Choosing the appropriate service to meet business application needs.
    *   Choosing the appropriate option for business support assistance.
    *   Identifying the tools to develop, deploy, and troubleshoot applications.
    *   Identifying the services that can present the output of virtual machines (VMs) on end-user machines.
    *   Identifying the services that can create and deploy frontend and mobile services.
    *   Identifying the services that manage IoT devices.

---

### **Content Domain 4: Billing, Pricing, and Support (12% of scored content)**

#### **Task Statement 4.1: Compare AWS pricing models.**
*   **Knowledge of:** Compute purchasing options (for example, On-Demand Instances, Reserved Instances, Spot Instances, AWS Savings Plans, Dedicated Hosts, Dedicated Instances, Capacity Reservations); storage options and tiers.
*   **Skills in:**
    *   Identifying when to use various compute purchasing options.
    *   Describing Reserved Instance flexibility.
    *   Describing Reserved Instance behavior in AWS Organizations.
    *   Understanding incoming data transfer costs and outgoing data transfer costs (for example, from one AWS Region to another Region, within the same Region).
    *   Understanding pricing options for various storage options and tiers.

#### **Task Statement 4.2: Understand resources for billing, budget, and cost management.**
*   **Knowledge of:** Billing support and information; pricing information for AWS services; AWS Organizations; AWS cost allocation tags.
*   **Skills in:**
    *   Understanding the appropriate uses and capabilities of AWS Budgets and AWS Cost Explorer.
    *   Understanding the appropriate uses and capabilities of AWS Pricing Calculator.
    *   Understanding AWS Organizations consolidated billing and allocation of costs.
    *   Understanding various types of cost allocation tags and their relation to billing reports (for example, AWS Cost and Usage Report).

#### **Task Statement 4.3: Identify AWS technical resources and AWS Support options.**
*   **Knowledge of:** Resources and documentation available on official AWS websites; AWS Support plans; role of the AWS Partner Network, including independent software vendors and system integrators; AWS Support Center.
*   **Skills in:**
    *   Locating AWS whitepapers, blogs, and documentation on official AWS websites.
    *   Identifying and locating AWS technical resources (for example, AWS Prescriptive Guidance, AWS Knowledge Center, AWS re:Post).
    *   Identifying AWS Support options for AWS customers (for example, customer service and communities, AWS Developer Support, AWS Business Support, AWS Enterprise On-Ramp Support, AWS Enterprise Support).
    *   Identifying the role of AWS Trusted Advisor, AWS Health Dashboard, and the AWS Health API to help manage and monitor environments for cost optimization.
    *   Identifying the role of the AWS Trust and Safety team to report abuse of AWS resources.
    *   Understanding the role of AWS Partners (for example, AWS Marketplace, independent software vendors, system integrators).
    *   Identifying the benefits of being an AWS Partner (for example, partner training and certification, partner events, partner volume discounts).
    *   Identifying the key services that AWS Marketplace offers (for example, cost management, governance and entitlement).
    *   Identifying technical assistance options available at AWS (for example, AWS Professional Services, AWS Solutions Architects).

---

## 🛠️ In-Scope AWS Services

### **Analytics**
*   **Amazon Athena:** Serverless interactive query service to analyze data in S3 using standard SQL.
*   **Amazon EMR:** Managed cluster platform to run big data frameworks like Apache Spark and Hadoop.
*   **AWS Glue:** Serverless data integration service for discovery, prep, and consolidation of data.
*   **Amazon Kinesis:** Services to collect, process, and analyze real-time streaming data.
*   **Amazon OpenSearch Service:** Search, visualize, and analyze data in real time.
*   **Amazon QuickSight:** Business intelligence (BI) service with interactive dashboards.
*   **Amazon Redshift:** Fast, managed, petabyte-scale data warehouse.

### **Application Integration**
*   **Amazon EventBridge:** Serverless event bus for building event-driven applications at scale.
*   **Amazon Simple Notification Service (Amazon SNS):** Pub/sub messaging service.
*   **Amazon Simple Queue Service (Amazon SQS):** Message queuing service for decoupling applications.
*   **AWS Step Functions:** Visual workflow orchestrator to combine multiple AWS services into serverless workflows.

### **Business Applications**
*   **Amazon Connect:** Cloud-based omni-channel contact center.
*   **Amazon Simple Email Service (Amazon SES):** Email sending and receiving service.

### **Cloud Financial Management**
*   **AWS Budgets:** Track cost and usage and get alerts when thresholds are breached.
*   **AWS Cost and Usage Reports (CUR):** Detailed raw CSV files showing all cost and usage metrics.
*   **AWS Cost Explorer:** Graphical interface to visualize and report on spend.
*   **AWS Marketplace:** Digital catalog to discover, buy, and deploy third-party software.

### **Compute**
*   **AWS Batch:** Run batch computing workloads at any scale.
*   **Amazon EC2:** Resizable virtual servers in the cloud (Infrastructure-as-a-Service).
*   **AWS Elastic Beanstalk:** Platform-as-a-Service (PaaS) to deploy and scale web apps quickly.
*   **Amazon Lightsail:** Easy-to-use virtual private server (VPS) for simple workloads.
*   **AWS Outposts:** Run native AWS services on-premises with hybrid hardware.

### **Containers**
*   **Amazon Elastic Container Registry (Amazon ECR):** Managed container image registry.
*   **Amazon Elastic Container Service (Amazon ECS):** Highly secure, reliable container orchestration.
*   **Amazon Elastic Kubernetes Service (Amazon EKS):** Run managed Kubernetes on AWS.

### **Customer Enablement**
*   **AWS Support:** Assistance tiers (Basic, Developer, Business, Enterprise On-Ramp, Enterprise).

### **Database**
*   **Amazon Aurora:** Fully managed, high-performance MySQL/PostgreSQL-compatible relational database.
*   **Amazon DocumentDB:** Fully managed JSON document database.
*   **Amazon DynamoDB:** Fully managed, serverless, single-digit millisecond latency NoSQL database.
*   **Amazon ElastiCache:** In-memory caching engine (Redis/Memcached).
*   **Amazon Neptune:** Fully managed graph database.
*   **Amazon RDS:** Managed relational database engine service (MySQL, PostgreSQL, Oracle, SQL Server).

### **Developer Tools**
*   **AWS CLI:** Unified command line tool to manage AWS services.
*   **AWS CodeBuild:** Managed continuous integration build service.
*   **AWS CodePipeline:** Continuous delivery pipeline service.
*   **AWS X-Ray:** Trace requests through distributed architectures and microservices.

### **End User Computing**
*   **Amazon AppStream 2.0:** Stream desktop applications securely to web browsers.
*   **Amazon WorkSpaces:** Managed virtual desktop service (DaaS).
*   **Amazon WorkSpaces Secure Browser:** Secure, enterprise web browsing workspace.

### **Frontend Web and Mobile**
*   **AWS Amplify:** Tools and services to build full-stack mobile and web apps.
*   **AWS AppSync:** Serverless GraphQL and Pub/Sub API service.

### **Internet of Things (IoT)**
*   **AWS IoT Core:** Securely connect and manage IoT devices.

### **Machine Learning (AI/ML)**
*   **Amazon Comprehend:** Natural language processing (NLP) to extract insights from text.
*   **Amazon Kendra:** Highly accurate intelligent search service powered by machine learning.
*   **Amazon Lex:** Build conversational bots (voice and text).
*   **Amazon Polly:** Text-to-speech service using advanced deep learning.
*   **Amazon Q:** Generative AI-powered assistant for work.
*   **Amazon Rekognition:** Computer vision to identify objects, people, text, and scenes in images/videos.
*   **Amazon SageMaker AI:** End-to-end platform to build, train, and deploy machine learning models.
*   **Amazon Textract:** Automatically extract text, handwriting, and layout data from scanned documents.
*   **Amazon Transcribe:** Speech-to-text service.
*   **Amazon Translate:** High-quality neural machine translation service.

### **Management and Governance**
*   **AWS Auto Scaling:** Automatically adjust capacity to maintain steady performance.
*   **AWS CloudFormation:** Infrastructure as Code (IaC) templating engine.
*   **AWS CloudTrail:** Audit logs capturing API calls and activity history.
*   **Amazon CloudWatch:** Monitor application and infrastructure operational metrics and logs.
*   **AWS Compute Optimizer:** Recommends optimal AWS resources to reduce costs and improve performance.
*   **AWS Config:** Continuous configuration tracking and compliance rule auditor.
*   **AWS Control Tower:** Set up and govern secure, compliant multi-account environments.
*   **AWS Health Dashboard:** Real-time visibility into AWS service status and localized outages.
*   **AWS License Manager:** Manage software licenses across AWS and on-premises environments.
*   **AWS Management Console:** Web-based GUI to administer AWS resources.
*   **AWS Organizations:** Central management and governance tool for multiple AWS accounts.
*   **AWS Service Catalog:** Create, manage, and govern portfolios of approved IT services.
*   **Service Quotas:** View and manage limits/quotas for AWS resources.
*   **AWS Systems Manager:** Operational hub to manage resource configurations and OS patches.
*   **AWS Trusted Advisor:** Best practice recommendations across cost, security, performance, limits, and resilience.
*   **AWS Well-Architected Tool:** Evaluates architecture and workloads against cloud design principles.

### **Migration and Transfer**
*   **AWS Application Discovery Service:** Automatically discover on-premises servers to plan migrations.
*   **AWS Application Migration Service (MGN):** Simplify and lift-and-shift server migrations to AWS.
*   **AWS Database Migration Service (AWS DMS):** Securely migrate active database engines to AWS.
*   **Migration Evaluator:** Build directional business cases for cloud migration.
*   **AWS Migration Hub:** Track migration progress across multiple AWS and partner migration tools.
*   **AWS Schema Conversion Tool (AWS SCT):** Convert database schemas between different engines.
*   **AWS Snow Family:** Physical storage transfer appliances (Snowcone, Snowball Edge).

### **Networking and Content Delivery**
*   **Amazon API Gateway:** Create, publish, maintain, and monitor APIs at any scale.
*   **Amazon CloudFront:** Global content delivery network (CDN) using edge locations.
*   **AWS Direct Connect:** Dedicated private fiber network link between on-premises and AWS.
*   **AWS Global Accelerator:** Improve global application performance using AWS edge routes.
*   **AWS PrivateLink:** Securely connect VPC resources to services privately without public IPs.
*   **Amazon Route 53:** Highly available, scalable cloud Domain Name System (DNS).
*   **AWS Transit Gateway:** Central hub to connect VPCs, VPNs, and Direct Connect links.
*   **Amazon VPC:** Custom isolated virtual networks.
*   **AWS VPN:** Secure VPN connectivity options (Site-to-Site VPN, Client VPN).

### **Security, Identity, and Compliance**
*   **AWS Artifact:** Download security compliance audit reports and agreements.
*   **AWS Audit Manager:** Continuously audit AWS usage to simplify risk assessment.
*   **AWS Certificate Manager (ACM):** Provision and renew public and private SSL/TLS certificates.
*   **AWS CloudHSM:** Cloud-based hardware security modules (HSM) for cryptography keys.
*   **Amazon Cognito:** Customer identity and access management for apps (signup/signin).
*   **Amazon Detective:** Investigate security findings and root causes using graph models.
*   **AWS Directory Service:** Active Directory integration in the cloud.
*   **AWS Firewall Manager:** Centralized configuration of firewall rules across accounts.
*   **Amazon GuardDuty:** Intelligent threat detection and continuous security monitoring.
*   **AWS Identity and Access Management (IAM):** Manage granular access to AWS resources.
*   **AWS IAM Identity Center:** Single sign-on for all AWS accounts and cloud apps.
*   **Amazon Inspector:** Automated security assessment scanning for EC2, ECR, and Lambda.
*   **AWS Key Management Service (AWS KMS):** Create and control cryptographic keys.
*   **Amazon Macie:** Discover, classify, and protect sensitive data in S3 using machine learning.
*   **AWS Resource Access Manager (AWS RAM):** Securely share resources across accounts.
*   **AWS Secrets Manager:** Rotate, manage, and retrieve passwords and secrets.
*   **AWS Security Hub:** Aggregates findings and performs security checks against standards.
*   **AWS Shield:** Managed Distributed Denial of Service (DDoS) protection.
*   **AWS WAF:** Web Application Firewall protecting from SQLi, XSS, and common web exploits.

### **Serverless**
*   **AWS Fargate:** Serverless compute for containers.
*   **AWS Lambda:** Event-driven serverless functions (Function-as-a-Service).

### **Storage**
*   **AWS Backup:** Centralized backup management across AWS services.
*   **Amazon Elastic Block Store (Amazon EBS):** High-performance block storage volumes for EC2.
*   **Amazon Elastic File System (Amazon EFS):** Serverless, shared file system.
*   **AWS Elastic Disaster Recovery (DRS):** Automated disaster recovery replication.
*   **Amazon FSx:** Fully managed, high-performance file systems (Windows, Lustre, NetApp ONTAP, OpenZFS).
*   **Amazon S3:** Highly scalable, durable object storage.
*   **Amazon S3 Glacier:** Secure, durable, low-cost archive storage classes in S3.
*   **AWS Storage Gateway:** Hybrid cloud storage linking on-premises systems to AWS storage.

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
