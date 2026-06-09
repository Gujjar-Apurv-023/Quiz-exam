# 🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 12

This interactive practice exam contains 42 questions mapped to the official AWS Certified Cloud Practitioner domains. Click on **Reveal Answer & Explanation** under each question to check your knowledge and understand the underlying concepts.

---

### **Question 1**
Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?
*   A. Availability Zone
*   B. Edge location
*   C. Region
*   D. Private networking

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Availability Zone**
*   **Explanation:** An **Availability Zone (AZ)** is one or more discrete datacenters with redundant power, networking, and connectivity in an AWS Region, connected via low-latency, redundant fiber networks.
</details>

---

### **Question 2**
One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
*   A. The ability to bid for a lower hourly cost.
*   B. Paying a daily rate regardless of time used.
*   C. Paying only for time used.
*   D. Pre-paying for instances and paying a lower hourly rate.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Paying only for time used.**
*   **Explanation:** On-Demand EC2 instances let you pay only for compute capacity per second or per hour with no long-term commitments or upfront fees, ensuring you pay only for the exact amount of time used.
</details>

---

### **Question 3**
What can assist in evaluating an application for migration to the cloud? (Select TWO)
*   A. AWS Trusted Advisor.
*   B. AWS Professional Services.
*   C. AWS Systems Manager.
*   D. AWS Partner Network (APN).
*   E. AWS Secrets Manager.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Professional Services.** & **D. AWS Partner Network (APN).**
*   **Explanation:** Evaluating migrations requires specialized consulting expertise:
    *   **AWS Professional Services** (B) consists of a team of AWS experts who assist organizations with migration planning.
    *   **AWS Partner Network (APN)** (D) provides certified third-party consultancies and tools to guide migration strategies.
</details>

---

### **Question 4**
A characteristic of edge locations is that they:
*   A. Host Amazon EC2 instances closer to users.
*   B. Help lower latency and improve performance for users.
*   C. Cache frequently changing data without reaching the origin server.
*   D. Refresh data changes daily.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Help lower latency and improve performance for users.**
*   **Explanation:** Edge locations are global points of presence utilized by Amazon CloudFront to cache static content closer to users, lowering latency and boosting content transfer speeds.
</details>

---

### **Question 5**
Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)
*   A. Command line interface.
*   B. On-premises.
*   C. Software Development Kits.
*   D. Software-as-a-service.
*   E. Hybrid.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Command line interface.** & **C. Software Development Kits.**
*   **Explanation:** Customers manage their resources programmatically using the **AWS Command Line Interface (CLI)** (A) or language-specific **Software Development Kits (SDKs)** (C) integrated into application code.
</details>

---

### **Question 6**
What is a value proposition of the AWS Cloud?
*   A. AWS is responsible for security in the AWS Cloud.
*   B. No long-term contract is required.
*   C. Provision new servers in days.
*   D. AWS manages user applications in the AWS Cloud.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. No long-term contract is required.**
*   **Explanation:** A primary cloud benefit is flexibility; services are run on a pay-as-you-go consumption model where **no long-term contract is required** to use services.
</details>

---

### **Question 7**
A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?
*   A. Amazon EC2 Spot Instances.
*   B. Amazon EC2 Dedicated Instances.
*   C. Amazon EC2 On-Demand Instances.
*   D. Amazon EC2 Reserved Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2 Reserved Instances.**
*   **Explanation:** For continuous, predictable, non-interruptible workloads running over a 3-year term, **Reserved Instances (RIs)** offer the highest discount rate (up to 72%) compared to On-Demand billing.
</details>

---

### **Question 8**
Which AWS service is used to track, record, and audit configuration changes made to AWS resources?
*   A. AWS Shield.
*   B. AWS Config.
*   C. AWS IAM.
*   D. Amazon Inspector.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Config.**
*   **Explanation:** **AWS Config** tracks and evaluates resource configuration modifications over time, assisting in audit compliance and inventory governance.
</details>

---

### **Question 9**
Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?
*   A. Fault tolerance.
*   B. Global reach.
*   C. Pay-as-you-go pricing.
*   D. High availability.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Global reach.**
*   **Explanation:** **Global reach** (specifically, deploying resources across multiple regions and edge locations worldwide) places applications closer to international users to minimize latency.
</details>

---

### **Question 10**
How can one AWS account use Reserved Instances from another AWS account?
*   A. By using Amazon EC2 Dedicated Instances.
*   B. By using AWS Organizations consolidated billing.
*   C. By using the AWS Cost Explorer tool.
*   D. By using AWS Budgets.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. By using AWS Organizations consolidated billing.**
*   **Explanation:** When accounts are consolidated under **AWS Organizations**, Reserved Instance discounts are automatically shared across all linked accounts in the organization, allowing one account to benefit from another's unused reservations.
</details>

---

### **Question 11**
What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)
*   A. AWS automatically distributes the data globally for higher durability.
*   B. AWS will take care of operating the application.
*   C. AWS makes it easy to architect for high availability.
*   D. AWS can easily accommodate application demand changes.
*   E. AWS takes care of application security patching.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS makes it easy to architect for high availability.** & **D. AWS can easily accommodate application demand changes.**
*   **Explanation:** The cloud simplifies high availability architectures via multiple AZs (C) and accommodates demand fluctuations automatically through Auto Scaling (D).
</details>

---

### **Question 12**
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

### **Question 13**
AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)
*   A. Implementing Amazon Rekognition.
*   B. Using AWS Shield-protected resources.
*   C. Blocking access with Security Groups.
*   D. Using Multi-Factor Authentication (MFA).
*   E. Enforcing password strength and expiration.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Using Multi-Factor Authentication (MFA).** & **E. Enforcing password strength and expiration.**
*   **Explanation:** To secure IAM user logins, administrators should enforce **MFA** (D) (second-factor validation tokens) and strong account **password policies** (E) (strength complexity, rotation schedules).
</details>

---

### **Question 14**
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

### **Question 15**
Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
*   A. AWS Marketplace.
*   B. Amazon Lumberyard.
*   C. AWS Artifact.
*   D. Amazon CloudSearch.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS Marketplace.**
*   **Explanation:** **AWS Marketplace** is a digital catalog containing thousands of software listings from independent software vendors, enabling quick deployment of pre-configured AMIs and software solutions.
</details>

---

### **Question 16**
Which of the following is a component of the AWS Global Infrastructure?
*   A. Amazon Alexa.
*   B. AWS Regions.
*   C. Amazon Lightsail.
*   D. AWS Organizations.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Regions.**
*   **Explanation:** The physical foundation of the AWS Global Infrastructure is composed of **AWS Regions**, Availability Zones, and Edge Locations.
</details>

---

### **Question 17**
Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
*   A. On-Demand Instances.
*   B. Reserved Instances.
*   C. Spot Instances.
*   D. Convertible Reserved Instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Spot Instances.**
*   **Explanation:** **Spot Instances** represent spare EC2 capacity offered at discounts up to 90%, with pricing fluctuating dynamically based on real-time supply and demand.
</details>

---

### **Question 18**
A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)
*   A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated
*   B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC
*   C. Use Amazon Athena to query data from the on-premises database servers
*   D. Connect the company’s on-premises data center to AWS using AWS Direct Connect
*   E. Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC** & **D. Connect the company’s on-premises data center to AWS using AWS Direct Connect**
*   **Explanation:** To link on-premises networks to an AWS VPC, organizations use **Site-to-Site VPN** (B) or **AWS Direct Connect** (D) circuits.
</details>

---

### **Question 19**
A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?
*   A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
*   B. Run AWS Trusted Advisor and review the findings.
*   C. Open the AWS IAM console and check the inbound rule filters for open access.
*   D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Run AWS Trusted Advisor and review the findings.**
*   **Explanation:** **AWS Trusted Advisor** automatically scans security group configurations and reports a list of security groups that permit unrestricted incoming access on common ports, making it the simplest solution.
</details>

---

### **Question 20**
Which of the following security-related services does AWS offer? (Select TWO)
*   A. Multi-factor authentication physical tokens.
*   B. AWS Trusted Advisor security checks.
*   C. Data encryption.
*   D. Automated penetration testing.
*   E. Amazon S3 copyrighted content detection.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Trusted Advisor security checks.** & **C. Data encryption.**
*   **Explanation:** AWS offers built-in **Data Encryption** (C) features (KMS, CloudHSM) and automated security compliance checking using **AWS Trusted Advisor** (B). (MFA token hardware can be bought externally, but AWS does not manufacture them).
</details>

---

### **Question 21**
Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)
*   A. AWS WAF.
*   B. Amazon DynamoDB.
*   C. Amazon EC2.
*   D. Amazon CloudFront.
*   E. Amazon Inspector.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS WAF.** & **D. Amazon CloudFront.**
*   **Explanation:** DDoS mitigation is supported by network edge services:
    *   **Amazon CloudFront** (D) absorbs traffic surges and handles edge requests.
    *   **AWS WAF** (A) inspects layer-7 web requests and rate-limits attacks.
</details>

---

### **Question 22**
Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
*   A. Amazon Elastic Block Store (Amazon EBS).
*   B. Amazon Machine Image.
*   C. Amazon EC2 Systems Manager.
*   D. Amazon AppStream 2.0.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Amazon Machine Image.**
*   **Explanation:** An **Amazon Machine Image (AMI)** contains the pre-configured OS template, volume layouts, and applications needed to boot an EC2 instance.
</details>

---

### **Question 23**
A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
*   A. Think parallel.
*   B. Implement elasticity.
*   C. Decouple your components.
*   D. Design for failure.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Implement elasticity.**
*   **Explanation:** **Elasticity**—the capability of an infrastructure to scale resources dynamically to match changing user volumes and workloads—is the core principle designed to maintain performance levels during growth spikes.
</details>

---

### **Question 24**
Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
*   A. Easy and fast deployment of applications in multiple Regions around the world.
*   B. Security of the AWS Cloud.
*   C. Elasticity of the AWS Cloud.
*   D. Lower variable costs due to massive economies of scale.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Elasticity of the AWS Cloud.**
*   **Explanation:** The **elasticity** of the cloud enables resources to auto-scale dynamically on demand, removing the need to predict or guess capacity limits.
</details>

---

### **Question 25**
What can users access from AWS Artifact?
*   A. AWS security and compliance documents.
*   B. A download of configuration management details for all AWS resources.
*   C. Training materials for AWS services.
*   D. A security assessment of the applications deployed in the AWS Cloud.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. AWS security and compliance documents.**
*   **Explanation:** **AWS Artifact** provides on-demand, self-service access to compliance reports (e.g. ISO certificates, SOC reports) and security agreements.
</details>

---

### **Question 26**
Compared with costs in traditional and virtualized data centers, AWS has:
*   A. Greater variable costs and greater upfront costs.
*   B. Fixed usage costs and lower upfront costs.
*   C. Lower variable costs and greater upfront costs.
*   D. Lower variable costs and lower upfront costs.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Lower variable costs and lower upfront costs.**
*   **Explanation:** AWS reduces **upfront costs** by replacing hardware purchases with a pay-as-you-go model, and provides **lower variable costs** because of the savings achieved through massive economies of scale.
</details>

---

### **Question 27**
Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?
*   A. AWS Lambda.
*   B. Amazon DynamoDB Accelerator.
*   C. Amazon Route 53.
*   D. Amazon CloudFront.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon CloudFront.**
*   **Explanation:** **Amazon CloudFront** caches static website objects (HTML/CSS/media) globally at edge locations, delivering them with ultra-low latency and high transfer speeds.
</details>

---

### **Question 28**
How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
*   A. They automatically add more instances across multiple AWS Regions based on global demand of the application.
*   B. They automatically add or replace instances across multiple Availability Zones when the application needs it.
*   C. They enable the application’s static content to reside closer to end users.
*   D. They are able to distribute incoming requests across a tier of web server instances.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. They automatically add or replace instances across multiple Availability Zones when the application needs it.**
*   **Explanation:** Auto Scaling maintains application availability by automatically adding nodes across multiple Availability Zones to handle load spikes, and replacing unhealthy nodes immediately.
</details>

---

### **Question 29**
Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
*   A. A public and private key-pair.
*   B. Amazon Inspector.
*   C. AWS Identity and Access Management (IAM) policies.
*   D. Security Groups.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Identity and Access Management (IAM) policies.**
*   **Explanation:** Access controls to S3 resources are managed using **IAM Policies** (assigned to users, roles, or groups) or S3 Bucket Policies (resource-based).
</details>

---

### **Question 30**
How should a customer forecast the future costs for running a new web application?
*   A. Amazon Aurora Backtrack.
*   B. Amazon CloudWatch Billing Alarms.
*   C. AWS Simple Monthly Calculator.
*   D. AWS Cost and Usage report.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Simple Monthly Calculator.**
*   **Explanation:** The **AWS Simple Monthly Calculator** (now known as AWS Pricing Calculator) is the tool used to estimate and forecast the cost of services before or during deployment.
</details>

---

### **Question 31**
Where are AWS compliance documents, such as an SOC 1 report, located?
*   A. Amazon Inspector.
*   B. AWS CloudTrail.
*   C. AWS Artifact.
*   D. AWS Certificate Manager.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. AWS Artifact.**
*   **Explanation:** **AWS Artifact** is the central self-service portal to download audit and compliance reports (SOC 1, SOC 2, PCI, ISO) and sign agreements.
</details>

---

### **Question 32**
Which of the following tasks is the responsibility of AWS?
*   A. Encrypting client-side data.
*   B. Configuring AWS Identity and Access Management (IAM) roles.
*   C. Securing the Amazon EC2 hypervisor.
*   D. Setting user password policies.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **C. Securing the Amazon EC2 hypervisor.**
*   **Explanation:** In the Shared Responsibility Model, AWS is responsible for security "of" the cloud, which includes maintaining and securing the underlying hypervisor software running EC2 virtual machines.
</details>

---

### **Question 33**
Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)
*   A. Firmware upgrades of network infrastructure.
*   B. Patching of operating systems.
*   C. Patching of the underlying hypervisor.
*   D. Physical security of data centers.
*   E. Configuration of the security group.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. Patching of operating systems.** & **E. Configuration of the security group.**
*   **Explanation:** Customers are responsible for managing guest resources, which includes OS patching (B) and virtual firewall rule configuration (Security Groups) (E).
</details>

---

### **Question 34**
A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?
*   A. Amazon Simple Storage Service (Amazon S3).
*   B. Amazon DynamoDB.
*   C. Amazon Kinesis.
*   D. Amazon Redshift.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon Redshift.**
*   **Explanation:** **Amazon Redshift** is a fully managed, petabyte-scale cloud data warehousing service.
</details>

---

### **Question 35**
Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)
*   A. Amazon EBS.
*   B. AWS Direct Connect.
*   C. Amazon CloudFront.
*   D. AWS Storage Gateway.
*   E. Amazon Connect.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS Direct Connect.** & **D. AWS Storage Gateway.**
*   **Explanation:**
    *   **AWS Direct Connect** (B) creates private physical network tunnels linking local datacenters to VPCs.
    *   **AWS Storage Gateway** (D) bridges local operations with cloud-hosted S3/EBS systems.
</details>

---

### **Question 36**
What are the advantages of the AWS Cloud? (Select TWO)
*   A. Fixed rate monthly cost.
*   B. No need to guess capacity requirements.
*   C. Increased speed to market.
*   D. Increased upfront capital expenditure.
*   E. Physical access to cloud data centers.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. No need to guess capacity requirements.** & **C. Increased speed to market.**
*   **Explanation:** The cloud eliminates capacity planning guesswork (B) through auto-scaling, and increases agility and **speed to market** (C) by provisioning services in minutes.
</details>

---

### **Question 37**
How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
*   A. Users do not have to wait for infrastructure provisioning.
*   B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.
*   C. AWS takes over application configuration management on behalf of users.
*   D. Users do not need to address security and compliance issues.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. Users do not have to wait for infrastructure provisioning.**
*   **Explanation:** Immediate cloud resource provisioning removes long hardware purchasing cycles, letting development teams build and deploy workloads instantly.
</details>

---

### **Question 38**
Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)
*   A. AWS Elastic Beanstalk.
*   B. AWS OpsWorks.
*   C. AWS CodeDeploy.
*   D. AWS Batch.
*   E. AWS X-Ray.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **B. AWS OpsWorks.** & **C. AWS CodeDeploy.**
*   **Explanation:**
    *   **AWS OpsWorks** (B) supports running Chef/Puppet recipes on local on-premises hosts.
    *   **AWS CodeDeploy** (C) deploys software packages directly to on-premises servers using local agents.
</details>

---

### **Question 39**
What is an example of agility in the AWS Cloud?
*   A. Access to multiple instance types.
*   B. Access to managed services.
*   C. Using Consolidated Billing to produce one bill.
*   D. Decreased acquisition time for new compute resources.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Decreased acquisition time for new compute resources.**
*   **Explanation:** **Agility** refers to speed of experimentation. Provisioning virtual servers in minutes rather than waiting weeks for server delivery represents a dramatic reduction in acquisition time.
</details>

---

### **Question 40**
Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
*   A. Amazon Inspector.
*   B. AWS Web Application Firewall (AWS WAF).
*   C. Elastic Load Balancing (ELB).
*   D. AWS Shield.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. AWS Shield.**
*   **Explanation:** **AWS Shield** is a managed DDoS protection service that is always-on to safeguard applications running on AWS.
</details>

---

### **Question 41**
Which of the following are advantages of AWS consolidated billing? (Choose two)
*   A. The ability to receive one bill for multiple accounts.
*   B. Service limits increasing by default in all accounts.
*   C. A fixed discount on the monthly bill.
*   D. Potential volume discounts, as usage in all accounts is combined.
*   E. The automatic extension of the master account’s AWS support plan to all accounts.

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **A. The ability to receive one bill for multiple accounts.** & **D. Potential volume discounts, as usage in all accounts is combined.**
*   **Explanation:** Consolidated billing aggregates usage data across linked accounts under a single master payer account (A), letting the company reach higher tier volume pricing thresholds (D).
</details>

---

### **Question 42**
A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?
*   A. Amazon Redshift.
*   B. Amazon DynamoDB.
*   C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.
*   D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).

<details>
<summary><b>👁️ Reveal Answer & Explanation</b></summary>

*   **Correct Answer:** **D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).**
*   **Explanation:** To shut down database host instances nightly to save compute costs while preserving database table storage contents, you must back the instances with **Amazon EBS** persistent volumes. EC2 instance store is ephemeral; shutting down the host will destroy all stored database files.
</details>

---
> [!IMPORTANT]
> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**
> 
> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀
