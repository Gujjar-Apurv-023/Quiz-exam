// AWS Certified Cloud Practitioner Practice Exams Data
const EXAMS_DATA = [
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 1",
    "questions": [
      {
        "id": 1,
        "question": "AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?",
        "options": [
          "A. AWS CLI",
          "B. AWS API",
          "C. AWS SDK",
          "D. AWS Management Console"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Management Console** is the web-based graphical user interface (GUI) used to access and manage Amazon Web Services.\n*AWS CLI* is a command-line interface tool.\n*AWS SDK* stands for Software Development Kit, used to interact with AWS services programmatically in code.\n*AWS API* represents the underlying programmatic application programming interfaces.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
        "options": [
          "A. Replacing an existing EC2 instance with a larger, more powerful one.",
          "B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
          "C. Adding more RAM capacity to an EC2 instance.",
          "D. Adding more EC2 instances of the same size to handle an increase in traffic."
        ],
        "correct_letter": "D",
        "explanation": "**Horizontal scaling** (scaling out/in) involves adding or removing resources of the same size (e.g., adding more EC2 instances behind a load balancer).\n**Vertical scaling** (scaling up/down) involves changing the specifications of a single resource (e.g., upgrading instance size, adding RAM or CPU capacity), which is represented by options A, B, and C.\n\n\n---"
      },
      {
        "id": 3,
        "question": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
        "options": [
          "A. Amazon Inspector",
          "B. AWS CloudTrail",
          "C. AWS Trusted Advisor",
          "D. EC2 Instance Usage Report"
        ],
        "correct_letter": "B",
        "explanation": "**AWS CloudTrail** records API calls and user activity across your AWS account. It logs detail such as the identity of the API caller, the time of the call, the source IP address, and the parameters used (e.g., who initiated `TerminateInstances`).\n*Amazon Inspector* checks for software vulnerabilities and deviations from best practices on EC2 instances.\n*AWS Trusted Advisor* checks your environment and provides recommendations for optimization across cost, security, performance, and fault tolerance.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
        "options": [
          "A. Applying the principle of least privilege to all AWS resources.",
          "B. Automatically provisioning new resources to meet demand.",
          "C. All AWS services are considered Global Services, and this design helps customers serve their international users.",
          "D. Providing compensation to customers if issues occur.",
          "E. Ability to recover quickly from failures."
        ],
"correct_letter": "BE",
        "explanation": "Under the AWS Well-Architected Framework, **Reliability** is defined as the ability of a workload to perform its intended function correctly and consistently when it's expected to. This includes the ability to operate elastically by automatically provisioning new resources to meet demand (B) and the capability of self-healing or recovering quickly from infrastructure/service failures (E).\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which statement is true regarding the AWS Shared Responsibility Model?",
        "options": [
          "A. Responsibilities vary depending on the services used.",
          "B. Security of the IaaS services is the responsibility of AWS.",
          "C. Patching the guest OS is always the responsibility of AWS.",
          "D. Security of the managed services is the responsibility of the customer."
        ],
        "correct_letter": "A",
        "explanation": "The division of responsibility changes depending on the service tier:\nFor **Infrastructure as a Service (IaaS)** (e.g., Amazon EC2), the customer has more responsibility, including guest OS patching, firewall settings (security groups), and software updates.\nFor **Platform as a Service (PaaS) / Managed Services** (e.g., Amazon RDS), AWS handles database engine updates, guest OS patching, and hardware maintenance, shifting more burden to AWS.\n\n\n---"
      },
      {
        "id": 6,
        "question": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
        "options": [
          "A. The Reserved Instance discounts can only be shared with the master account.",
          "B. All accounts can receive the hourly cost benefit of the Reserved Instances.",
          "C. The purchased instances will have better performance than On-demand instances.",
          "D. There are no cost benefits from using consolidated billing; It is for informational purposes only."
        ],
        "correct_letter": "B",
        "explanation": "Under consolidated billing (part of AWS Organizations), the billing system aggregates usage from all member accounts. Consequently, any unused **Reserved Instance (RI) discounts** or savings plans purchased by one account are automatically applied to matching usage in any other member account in the organization, maximizing the cost benefits.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
        "options": [
          "A. Deploy the application across multiple Availability Zones and Edge locations.",
          "B. Deploy the application across multiple Availability Zones and subnets.",
          "C. Deploy the application across multiple Regions and Availability Zones.",
          "D. Deploy the application across multiple VPC’s and subnets."
        ],
        "correct_letter": "C",
        "explanation": "Deploying across **multiple Availability Zones (AZs)** ensures fault tolerance against single data center outages.\nDeploying across **multiple AWS Regions** ensures the application survives complete regional outages (e.g., major natural disasters or grid failures), providing the absolute highest level of availability.\n\n\n---"
      },
      {
        "id": 8,
        "question": "What does AWS Snowball provide? (Choose TWO)",
        "options": [
          "A. Built-in computing capabilities that allow customers to process data locally.",
          "B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
          "C. A hybrid cloud storage between on-premises environments and the AWS Cloud.",
          "D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
          "E. Secure transfer of large amounts of data into and out of the AWS."
        ],
"correct_letter": "AE",
        "explanation": "**AWS Snowball Edge** devices feature on-board compute power (CPU/GPU) and storage, allowing users to run processing workloads locally in disconnected edge locations (A).\nIt is designed for secure, physical transport of petabytes of data into and out of AWS (E).\n*AWS Snowmobile* is used for Exabyte-scale migrations (D).\n\n\n---"
      },
      {
        "id": 9,
        "question": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
        "options": [
          "A. AWS Health Dashboard.",
          "B. AWS Support Concierge.",
          "C. AWS Customer Service.",
          "D. AWS Operations Support."
        ],
        "correct_letter": "B",
        "explanation": "The **Support Concierge** is a specialized billing and account management team available solely to AWS Enterprise and Enterprise On-Ramp Support customers. They provide quick and efficient guidance for complex billing questions, consolidated billing setup, cost allocation tags, and resource limits.\n\n\n---"
      },
      {
        "id": 10,
        "question": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
        "options": [
          "A. Applying the Amazon Connect latency-based routing policy.",
          "B. Registering a new US domain name to serve the users in the US.",
          "C. Building a new data center in the US and implementing a hybrid model.",
          "D. Deploying new Amazon EC2 instances in a Region located in the US."
        ],
        "correct_letter": "D",
        "explanation": "Network latency is caused by the physical distance data must travel. By deploying new EC2 instances in an AWS region located in the US (near the new branches), the company brings the application closer to the users, dramatically reducing latency at a low cloud cost.\n\n\n---"
      },
      {
        "id": 11,
        "question": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
        "options": [
          "A. IAM roles.",
          "B. IAM users.",
          "C. IAM user groups.",
          "D. AWS Organizations."
        ],
        "correct_letter": "C",
        "explanation": "An **IAM User Group** is a collection of IAM users. You can assign IAM policies directly to a user group, and all members of that group will inherit those permissions. This simplifies the management of access control for structured teams (e.g., Developers, Admins, Testers).\n\n\n---"
      },
      {
        "id": 12,
        "question": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
        "options": [
          "A. AWS OpsWorks.",
          "B. AWS Database Migration Service.",
          "C. AWS Server Migration Service.",
          "D. AWS Application Discovery Service."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Database Migration Service (DMS)** helps you migrate databases to AWS quickly and securely. Crucially, the source database remains fully operational during the migration, minimizing downtime for applications that rely on it.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
        "options": [
          "A. Build security in every layer.",
          "B. Parallelize tasks.",
          "C. Implement elasticity.",
          "D. Adopt monolithic architecture."
        ],
        "correct_letter": "C",
        "explanation": "**Elasticity** is the ability to match supply of cloud resources (like EC2 instances) to demand in real time. Dynamic scaling (via Amazon EC2 Auto Scaling) ensures you only pay for what you need by adding instances when demand spikes and terminating instances when demand drops.\n\n\n---"
      },
      {
        "id": 14,
        "question": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
        "options": [
          "A. Increasing speed and agility.",
          "B. There is no need to worry about security.",
          "C. Gaining complete control over the physical infrastructure.",
          "D. Operating applications on behalf of customers.",
          "E. All of the physical security and most of the data/network security are taken care of for you."
        ],
"correct_letter": "AE",
        "explanation": "AWS enables rapid provisioning of resources, vastly increasing **speed and agility** (A) for development teams.\nUnder the Shared Responsibility Model, AWS manages the physical security of the data centers, hardware, virtualization layer, and baseline networking services (E). However, the customer must still manage configurations, encryption, and access policies (so B is incorrect).\n\n\n---"
      },
      {
        "id": 15,
        "question": "What is the advantage of the AWS-recommended practice of “decoupling” applications?",
        "options": [
          "A. Allows treating an application as a single, cohesive unit.",
          "B. Reduces inter-dependencies so that failures do not impact other components of the application.",
          "C. Allows updates of any monolithic application quickly and easily.",
          "D. Allows tracking of any API call made to any AWS service."
        ],
        "correct_letter": "B",
        "explanation": "**Decoupling** applications involves breaking them down into small, loosely coupled microservices (often utilizing message queues like Amazon SQS). If one component fails (e.g., the billing module), other components (e.g., inventory catalog searching) can continue to function uninterrupted.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
        "options": [
          "A. AWS Budgets.",
          "B. AWS Pricing Calculator.",
          "C. AWS Systems Manager.",
          "D. AWS Cost & Usage Reports."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Cost & Usage Reports (CUR)** contain the most detailed set of cost and usage data available. You can use it to review granular billing logs, down to hourly or daily usage of specific EC2 instances, for current or past months.\n\n\n---"
      },
      {
        "id": 17,
        "question": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
        "options": [
          "A. AWS services’ costs will be reduced to half the original price.",
          "B. The consolidated billing feature is just for organizational purpose.",
          "C. Each AWS account gets volume discounts.",
          "D. Each AWS account gets five times the free-tier services capacity."
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing aggregates usage across all member accounts. Since AWS charges lower per-unit rates for higher usage volumes (such as S3 storage tiers and EC2 data transfers), combining usage allows all member accounts to reach pricing discount tiers much faster.\n\n\n---"
      },
      {
        "id": 18,
        "question": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
        "options": [
          "A. Regularly update firmware on EBS devices.",
          "B. Create EBS snapshots.",
          "C. Ensure that EBS data is encrypted at rest.",
          "D. Store a backup daily in an external drive.",
          "E. Prevent any unauthorized access to AWS data centers."
        ],
"correct_letter": "BC",
        "explanation": "**EBS snapshots** are point-in-time backups of EBS volumes that are stored incrementally in Amazon S3, allowing recovery if data is corrupted or deleted (B).\n**Encryption at rest** protects the data from unauthorized access to the underlying storage volume (C).\n\n\n---"
      },
      {
        "id": 19,
        "question": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
        "options": [
          "A. By automatically scaling your on-premises resources based on changes in demand.",
          "B. By automatically scaling your AWS resources using an Elastic Load Balancer.",
          "C. By reducing interdependencies between application components wherever possible.",
          "D. By automatically provisioning the required AWS resources based on changes in demand."
        ],
        "correct_letter": "D",
        "explanation": "**Elasticity** is the ability to dynamically scale computing resources up or down in response to workload demands. This ensures that you don't over-provision resources (wasting money) or under-provision them (causing downtime).\n\n\n---"
      },
      {
        "id": 20,
        "question": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
        "options": [
          "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
          "B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
          "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
          "D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
          "E. Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
        ],
"correct_letter": "AC",
        "explanation": "**Amazon CloudWatch Billing Alarms** track total billing metrics and can send notifications via Amazon Simple Notification Service (SNS) when costs exceed a set limit (A).\n**AWS Budgets** lets you set custom cost budgets and automatically alerts you via email or SNS when your forecasted or actual costs exceed your threshold (C).\n\n\n---"
      },
      {
        "id": 21,
        "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
        "options": [
          "A. AWS Global Accelerator.",
          "B. AWS Regions.",
          "C. AWS Edge Locations.",
          "D. AWS Availability Zones."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) service that caches static and dynamic website content at physical locations called **Edge Locations** around the globe, ensuring that users retrieve data from the nearest geographical node with minimal latency.\n\n\n---"
      },
      {
        "id": 22,
        "question": "What does the “Principle of Least Privilege” refer to?",
        "options": [
          "A. You should grant your users only the permissions they need when they need them and nothing more.",
          "B. All IAM users should have at least the necessary permissions to access the core AWS services.",
          "C. All trusted IAM users should have access to any AWS service in the respective AWS account.",
          "D. IAM users should not be granted any permissions; to keep your account safe."
        ],
        "correct_letter": "A",
        "explanation": "The **Principle of Least Privilege (PoLP)** is a security best practice that dictates users, applications, or systems should only be granted the minimum set of permissions necessary to perform their specified jobs. This minimizes the risk of accidental modifications or security breaches.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the following does NOT belong to the AWS Cloud Computing models?",
        "options": [
          "A. Platform as a Service (PaaS).",
          "B. Infrastructure as a Service (IaaS).",
          "C. Software as a Service (SaaS).",
          "D. Networking as a Service (NaaS)."
        ],
        "correct_letter": "D",
        "explanation": "The three standard cloud computing service models recognized by AWS and NIST are **IaaS** (virtual infrastructure), **PaaS** (managed application platforms), and **SaaS** (complete end-user applications). *NaaS* is not defined as one of the standard cloud computing deployment models.\n\n\n---"
      },
      {
        "id": 24,
        "question": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
        "options": [
          "A. S3 Intelligent-Tiering.",
          "B. AWS Marketplace.",
          "C. Amazon S3 Glacier Deep Archive.",
          "D. Amazon EBS."
        ],
        "correct_letter": "C",
        "explanation": "**S3 Glacier Deep Archive** is AWS’s lowest-cost storage class. It is ideal for storing data that is rarely accessed (access retrieve times are within 12 hours) and needs to be retained long-term for regulatory compliance and audit purposes.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which service provides DNS in the AWS cloud?",
        "options": [
          "A. Route 53.",
          "B. AWS Config.",
          "C. Amazon CloudFront.",
          "D. Amazon EMR."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Route 53** is a highly available and scalable Domain Name System (DNS) web service. It translates human-readable domain names (like `example.com`) into numeric IP addresses (like `192.0.2.1`).\n\n\n---"
      },
      {
        "id": 26,
        "question": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
        "options": [
          "A. AWS Shield.",
          "B. AWS Config.",
          "C. Amazon Cognito.",
          "D. AWS WAF.",
          "E. AWS KMS."
        ],
"correct_letter": "AD",
        "explanation": "**AWS Shield** provides managed Distributed Denial of Service (DDoS) protection for web applications running on AWS. Standard protection is free and activated automatically.\n**AWS WAF** (Web Application Firewall) allows you to filter web traffic based on custom rules (IP addresses, headers, SQL injection) to block malicious traffic before it reaches your web app.\n\n\n---"
      },
      {
        "id": 27,
        "question": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
        "options": [
          "A. AWS OpsWorks.",
          "B. AWS Storage Gateway.",
          "C. Amazon EBS volume.",
          "D. Amazon ElastiCache."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon ElastiCache** is a fully managed in-memory data store and cache (Redis or Memcached) service. By storing database query results or session states in-memory, the application can bypass disk reads from traditional databases, optimizing response times down to sub-milliseconds.\n\n\n---"
      },
      {
        "id": 28,
        "question": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
        "options": [
          "A. Reserved instances.",
          "B. Spot instances.",
          "C. Dedicated instances.",
          "D. On-demand instances."
        ],
        "correct_letter": "D",
        "explanation": "**On-demand instances** are ideal for short-term, unpredictable workloads that cannot be interrupted.\n*Spot instances* can be terminated by AWS with a 2-minute notice if AWS needs the capacity back, making them unsuitable for continuous user workloads.\n*Reserved instances* require a 1-year or 3-year commitment.\n\n\n---"
      },
      {
        "id": 29,
        "question": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
        "options": [
          "A. Reserved Instances.",
          "B. On-demand Instances.",
          "C. Dedicated Instances.",
          "D. Spot Instances."
        ],
        "correct_letter": "D",
        "explanation": "**Spot Instances** let you purchase spare Amazon EC2 compute capacity at steep discounts (up to 90% off On-Demand rates). Because consistent uptime is not required and processing is fault-tolerant, this is the most cost-effective solution for batch image resizing.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the following can be described as a global content delivery network (CDN) service?",
        "options": [
          "A. AWS VPN.",
          "B. AWS Direct Connect.",
          "C. AWS Regions.",
          "D. Amazon CloudFront."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon CloudFront** is a global Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following services allows customers to manage their agreements with AWS?",
        "options": [
          "A. AWS Artifact.",
          "B. AWS Certificate Manager.",
          "C. AWS Systems Manager.",
          "D. AWS Organizations."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is a self-service portal that provides on-demand access to AWS compliance reports and allows customers to review, accept, and manage agreements with AWS (such as the Business Associate Addendum for HIPAA compliance).\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
        "options": [
          "A. Amazon VPC.",
          "B. Amazon DynamoDB.",
          "C. Amazon Elastic MapReduce (EMR).",
          "D. AWS IAM.",
          "E. Amazon Elastic Compute Cloud (EC2)."
        ],
"correct_letter": "BC",
        "explanation": "**Amazon DynamoDB** is a fully managed NoSQL database service; AWS takes care of server provisioning, patching, scaling, and clustering.\n**Amazon EMR** is a managed cluster platform that simplifies running big data frameworks; AWS automates cluster provisioning and scaling.\n*Amazon EC2* is unmanaged (IaaS), meaning the customer is responsible for patching and database installations.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
        "options": [
          "A. Amazon Aurora.",
          "B. Amazon DynamoDB.",
          "C. Amazon Elastic Block Store.",
          "D. Amazon Redshift."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is a fully managed proprietary NoSQL database service that supports key-value and document data models, providing fast and predictable performance.\n*Amazon Aurora* is a relational (SQL) database service.\n*Amazon Redshift* is a data warehouse service.\n\n\n---"
      },
      {
        "id": 34,
        "question": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
        "options": [
          "A. AWS Identity and Access Management (IAM) user.",
          "B. Infrastructure Event Management (IEM) engineer.",
          "C. AWS Consulting Partners.",
          "D. Technical Account Manager (TAM)."
        ],
        "correct_letter": "D",
        "explanation": "Under the AWS Enterprise Support plan, customers are assigned a dedicated **Technical Account Manager (TAM)**. The TAM is the primary point of contact who provides operational advice, architectural review, and coordinates access to deep AWS subject-matter expertise.\n\n\n---"
      },
      {
        "id": 35,
        "question": "How can you view the distribution of AWS spending in one of your AWS accounts?",
        "options": [
          "A. By using Amazon VPC console.",
          "B. By contacting the AWS Support team.",
          "C. By using AWS Cost Explorer.",
          "D. By contacting the AWS Finance team."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Cost Explorer** is a free tool that allows you to visualize and analyze your AWS spending and resource usage over time. You can filter data by service, account, region, or tags to identify trends and anomalies.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
        "options": [
          "A. Access keys.",
          "B. Secret token.",
          "C. UserID.",
          "D. User name and password."
        ],
        "correct_letter": "A",
        "explanation": "Programmatic access to AWS (via the AWS CLI, SDKs, or APIs) requires credentials called **Access Keys** (which consist of an Access Key ID and a Secret Access Key) to verify and authenticate requests.\n*Username and password* are used exclusively to sign in to the web-based AWS Management Console.\n\n\n---"
      },
      {
        "id": 37,
        "question": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
        "options": [
          "A. Contact the AWS Customer Service team.",
          "B. Contact the AWS Abuse team.",
          "C. Contact the AWS Concierge team.",
          "D. Contact the AWS Security team."
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Abuse team** investigates allegations of abusive behavior originating from AWS resources, such as spam, port scanning, hosting malware, or hacking attempts. Anyone (even with Basic support) can report abuse directly to this team.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Select TWO examples of the AWS shared controls.",
        "options": [
          "A. Patch Management.",
          "B. IAM Management.",
          "C. VPC Management.",
          "D. Configuration Management.",
          "E. Data Center operations."
        ],
"correct_letter": "AD",
        "explanation": "**Shared controls** are controls that apply to both the infrastructure layer (responsibility of AWS) and the customer's layer (responsibility of the customer):\n*Patch Management:* AWS is responsible for patching infrastructure hosts, while the customer is responsible for patching guest operating systems (e.g., EC2 instances).\n*Configuration Management:* AWS configures infrastructure devices, while the customer configures their databases, security groups, and guest OS settings.\n\n\n---"
      },
      {
        "id": 39,
        "question": "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
        "options": [
          "A. ELB (Elastic Load Balancing).",
          "B. Auto Scaling.",
          "C. Amazon Athena.",
          "D. ECR (Elastic Container Registry).",
          "E. Amazon EC2."
        ],
"correct_letter": "AB",
        "explanation": "**ELB** automatically detects unhealthy EC2 instances and routes client traffic away from them to healthy ones (A).\n**EC2 Auto Scaling** automatically detects when instances have failed or when load has shifted, provisioning replacement instances without manual intervention (B).\n\n\n---"
      },
      {
        "id": 40,
        "question": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
        "options": [
          "A. Amazon SNS.",
          "B. Amazon Kinesis Video Streams.",
          "C. AWS CloudFormation.",
          "D. Amazon CloudFront."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) service that caches video files and web assets globally. This allows international users to stream content with minimal buffering and high transfer speeds.\n\n\n---"
      },
      {
        "id": 41,
        "question": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
        "options": [
          "A. A MySQL database installed on an EC2 instance.",
          "B. Amazon Aurora.",
          "C. Amazon DynamoDB.",
          "D. Amazon Neptune."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Aurora** is a fully managed relational database system compatible with MySQL and PostgreSQL. It automatically and continuously backs up your database to Amazon S3 and retains backups up to 35 days with zero impact on performance.\n*MySQL on EC2* is unmanaged, meaning the customer must configure their own backups.\n\n\n---"
      },
      {
        "id": 42,
        "question": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
        "options": [
          "A. AWS CloudFormation.",
          "B. AWS Config.",
          "C. Amazon SES.",
          "D. Amazon EMR."
        ],
        "correct_letter": "A",
        "explanation": "**AWS CloudFormation** allows you to model, provision, and update your AWS resources using declarative JSON or YAML templates, establishing Infrastructure as Code (IaC) best practices.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
        "options": [
          "A. Client-side encryption.",
          "B. Configuring infrastructure devices.",
          "C. Server-side encryption.",
          "D. Filtering traffic with Security Groups."
        ],
        "correct_letter": "B",
        "explanation": "AWS is responsible for configuring, maintaining, and upgrading physical routers, switches, servers, and hypervisors. Client-side/server-side encryption and Security Group configuration are the customer's responsibilities.\n\n\n---"
      },
      {
        "id": 44,
        "question": "What does the AWS Health Dashboard provide? (Choose TWO)",
        "options": [
          "A. Detailed troubleshooting guidance to address AWS events impacting your resources.",
          "B. Health checks for Auto Scaling instances.",
          "C. Recommendations for Cost Optimization.",
          "D. A dashboard detailing vulnerabilities in your applications.",
          "E. Personalized view of AWS service health."
        ],
"correct_letter": "AE",
        "explanation": "The **AWS Health Dashboard** displays status notifications triggered by changes in the AWS environment that might impact your running resources (E), along with specific, actionable instructions to help troubleshoot and remediate service events (A).\n\n\n---"
      },
      {
        "id": 45,
        "question": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
        "options": [
          "A. AWS Lambda.",
          "B. AWS Config.",
          "C. Amazon CloudWatch.",
          "D. AWS CloudTrail."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon CloudWatch** is AWS's primary monitoring service. It automatically tracks system performance metrics (such as CPU utilization, Network In/Out, and disk status) from EC2 instances, allowing you to troubleshoot accessibility bottlenecks.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
        "options": [
          "A. AWS Shield.",
          "B. AWS Management Console.",
          "C. AWS Secrets Manager.",
          "D. AWS Trusted Advisor."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Trusted Advisor** offers automated recommendations following AWS best practices. The **Security** check category alerts you to potential vulnerabilities, such as open ports (0.0.0.0/0 in Security Groups), unrestricted S3 buckets, or disabled MFA on the root account.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
        "options": [
          "A. Amazon S3 provides unlimited storage for any type of data.",
          "B. Amazon S3 can run any type of application or backend system.",
          "C. Amazon S3 stores any number of objects, but with object size limits.",
          "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
          "E. Amazon S3 provides 99.999999999% (11 9’s) of data durability."
        ],
"correct_letter": "BD",
        "explanation": "Amazon S3 is strictly an object storage service and **cannot run applications** or operating systems (B is not a benefit/feature).\nS3 **scales automatically**; users do not need to manually configure capacity scaling (D is incorrect, as manual scaling is not a benefit/requirement).\n\n\n---"
      },
      {
        "id": 48,
        "question": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
        "options": [
          "A. Disk disposal.",
          "B. Controlling physical access to compute resources.",
          "C. Patching the Network infrastructure.",
          "D. Setting password complexity rules.",
          "E. Configuring network access rules."
        ],
"correct_letter": "DE",
        "explanation": "Customers are responsible for managing IAM password configurations (D) and setting up logical network isolation boundaries/access paths via Security Groups and Network ACLs (E). Disk disposal, physical access, and patching physical infrastructure belong to AWS.\n\n\n---"
      },
      {
        "id": 49,
        "question": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
        "options": [
          "A. Amazon Aurora.",
          "B. Amazon CloudWatch.",
          "C. AWS Quick Start reference deployments.",
          "D. AWS OpsWorks."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Quick Starts** are pre-configured CloudFormation templates created by AWS and partners to help you spin up complex software architectures (like IBM MQ, databases, etc.) on AWS using best-practices with minimal time and manual configuration.\n\n\n---"
      },
      {
        "id": 50,
        "question": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
        "options": [
          "A. Elastic RI.",
          "B. Premium RI.",
          "C. Standard RI.",
          "D. Convertible RI."
        ],
        "correct_letter": "D",
        "explanation": "**Convertible Reserved Instances** allow you to exchange the RI for another Convertible RI of equal or greater value, letting you change the instance family, operating system, tenancy, or payment option if your application requirements change during the term.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 1
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 2",
    "questions": [
      {
        "id": 1,
        "question": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
        "options": [
          "A. AWS Organizations",
          "B. AWS Trusted Advisor",
          "C. IAM User Groups",
          "D. AWS Config"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Organizations** is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It provides consolidated billing for all member accounts and allows you to enforce security policies (via Service Control Policies - SCPs) across the entire hierarchy.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which service provides object-level storage in AWS?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon Instance Store",
          "C. Amazon EFS",
          "D. Amazon S3"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** (Simple Storage Service) is an object-level storage service, storing data as objects (files + metadata) within buckets.\n*Amazon EBS* and *Instance Store* provide block-level storage (structured like a raw virtual disk).\n*Amazon EFS* provides file-level storage (a shared network filesystem).\n\n\n---"
      },
      {
        "id": 3,
        "question": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
        "options": [
          "A. AWS Elastic Load Balancer",
          "B. AWS Budgets",
          "C. AWS Auto Scaling",
          "D. AWS Cost Explorer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Auto Scaling** monitors your applications and automatically adjusts capacity (adding or removing EC2 instances) to maintain steady, predictable performance at the lowest possible cost, matching resource supply to dynamic demand.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which S3 storage class is best for data with unpredictable access patterns?",
        "options": [
          "A. Amazon S3 Intelligent-Tiering",
          "B. Amazon S3 Glacier Flexible Retrieval",
          "C. Amazon S3 Standard",
          "D. Amazon S3 Standard-Infrequent Access"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3 Intelligent-Tiering** automatically optimizes storage costs by moving data between two access tiers (Frequent and Infrequent Access) based on access frequency, without operational overhead, retrieval fees, or performance impact.\n\n\n---"
      },
      {
        "id": 5,
        "question": "What is the AWS database service that allows you to upload data structured in key-value format?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon Aurora",
          "C. Amazon Redshift",
          "D. Amazon RDS"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon DynamoDB** is a fully managed, multi-region, multi-active durable NoSQL database service that supports key-value and document data structures, providing sub-millisecond latency.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
        "options": [
          "A. You have to pay a start-up fee when launching a new instance for the first time.",
          "B. The on-demand instances follow the AWS pay-as-you-go pricing model.",
          "C. With on-demand instances, no longer-term commitments or upfront payments are needed.",
          "D. When using on-demand Linux instances, you are charged per second based on an hourly rate."
        ],
        "correct_letter": "A",
        "explanation": "There are **no start-up or upfront fees** when launching On-Demand instances. You pay strictly for the compute capacity you consume by the second (Linux) or by the hour (Windows) with no long-term commitment.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon SNS",
          "D. Amazon CloudWatch",
          "E. Concierge Support Team"
        ],
"correct_letter": "AB",
        "explanation": "**AWS Trusted Advisor** (A) compares your infrastructure against AWS security best practices (e.g., checking for open ports, public S3 buckets, and lack of MFA).\n**Amazon Inspector** (B) is an automated vulnerability management service that scans your EC2 instances and container images for software vulnerabilities and network exposure issues.\n\n\n---"
      },
      {
        "id": 8,
        "question": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
        "options": [
          "A. Encrypted keys",
          "B. Email verification",
          "C. AWS KMS",
          "D. AWS MFA"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Multi-Factor Authentication (MFA)** is a security best practice that adds an extra layer of protection on top of usernames and passwords. It requires users to enter a time-sensitive code from a hardware or software MFA device to authenticate access.\n\n\n---"
      },
      {
        "id": 9,
        "question": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
        "options": [
          "A. AWS Knowledge Center",
          "B. AWS Health Dashboard",
          "C. Infrastructure Event Management",
          "D. AWS Support Concierge Service"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a structured program included in the Enterprise Support plan (and available for a fee in Enterprise On-Ramp) that partners with your team to provide architecture review, capacity planning, and scaling guidance for major business events like product launches.\n\n\n---"
      },
      {
        "id": 10,
        "question": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon CloudWatch"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon RDS** (Relational Database Service) manages the relational database engine. It automates administrative tasks such as hardware provisioning, OS and engine patching, backups, point-in-time recovery, and storage scaling, allowing DBAs to focus on optimization.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Which of the below is a best-practice when designing solutions on AWS?",
        "options": [
          "A. Invest heavily in architecting your environment, as it is not easy to change your design later.",
          "B. Use AWS reservations to reduce costs when testing your production environment.",
          "C. Automate wherever possible to make architectural experimentation easier.",
          "D. Provision a large compute capacity to handle any spikes in load"
        ],
        "correct_letter": "C",
        "explanation": "In AWS, you should **automate your deployments** (using Infrastructure as Code tools like CloudFormation or Terraform). Automation makes it fast and easy to spin up, experiment with, tear down, and replicate different architectures without manually building resources.\n\n\n---"
      },
      {
        "id": 12,
        "question": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
        "options": [
          "A. Penetration testing is not allowed in AWS.",
          "B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
          "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
          "D. The AWS customers are only allowed to perform penetration testing on services managed by AWS."
        ],
        "correct_letter": "C",
        "explanation": "AWS permits security scanning and penetration testing against certain eligible services (like Amazon EC2, Amazon RDS, etc.) without any prior authorization or notification to AWS, provided customers adhere to the terms of the policy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
        "options": [
          "A. Amazon SQS",
          "B. Amazon SES",
          "C. AWS Direct Connect",
          "D. Amazon Connect"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon SQS** (Simple Queue Service) is a fully managed message queuing service. By placing messages in a queue, software components are decoupled; if a downstream processor crashes, the messages stay in the SQS queue until it recovers, preventing data loss.\n\n\n---"
      },
      {
        "id": 14,
        "question": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
        "options": [
          "A. Multi-factor authentication",
          "B. Availability Zones",
          "C. Elastic Load Balancing",
          "D. Penetration testing",
          "E. Vertical Scaling"
        ],
"correct_letter": "BC",
        "explanation": "Deploying applications across **multiple Availability Zones** (B) ensures that if one data center zone suffers an outage, the application continues to run in other zones.\n**Elastic Load Balancing (ELB)** (C) automatically detects unhealthy instances and routes traffic only to healthy ones, eliminating single points of failure.\n\n\n---"
      },
      {
        "id": 15,
        "question": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
        "options": [
          "A. AWS VPN",
          "B. AWS Subnets",
          "C. AWS Dedicated Hosts",
          "D. Amazon VPC"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon VPC** (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.\n\n\n---"
      },
      {
        "id": 16,
        "question": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
        "options": [
          "A. Managing environmental events of AWS data centers.",
          "B. Protecting the confidentiality of data in transit in Amazon S3.",
          "C. Controlling physical access to AWS Regions.",
          "D. Ensuring that the underlying EC2 host is configured properly.",
          "E. Patching applications installed on Amazon EC2."
        ],
"correct_letter": "BE",
        "explanation": "Customers are responsible for securing data **in the cloud**, which includes forcing SSL/TLS for S3 buckets (B) and managing applications and configurations (E).\nAWS is responsible for physical security (C), datacenter environments (A), and hypervisor/host configuration (D).\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
        "options": [
          "A. Amazon VPC",
          "B. Amazon CloudWatch",
          "C. Amazon S3",
          "D. Amazon EC2",
          "E. AWS Lambda"
        ],
"correct_letter": "DE",
        "explanation": "**Amazon EC2** (virtual machines) and **AWS Lambda** (serverless functions) provide compute resources in AWS.\n*VPC* is networking; *CloudWatch* is monitoring; *S3* is storage.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon SQS",
          "C. Amazon S3",
          "D. Amazon Instance store"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon S3** is an object storage service built to store and retrieve unlimited quantities of files (photos, videos, static media) with 99.999999999% durability. It is far more cost-effective and scalable for media storage than block storage like EBS or Instance Store.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
        "options": [
          "A. Instance Password",
          "B. Key pairs",
          "C. Access Keys",
          "D. MFA"
        ],
        "correct_letter": "C",
        "explanation": "An **Access Key** (consisting of an Access Key ID and a Secret Access Key) acts as a programmatic username/password combination. It is used to authenticate commands sent via the AWS CLI, SDKs, or raw HTTP API calls.\n\n\n---"
      },
      {
        "id": 20,
        "question": "What does Amazon ElastiCache provide?",
        "options": [
          "A. In-memory caching for read-heavy applications.",
          "B. An Ehcache compatible in-memory data store.",
          "C. An online software store that allows Customers to launch pre-configured software with just few clicks.",
          "D. A domain name system in the cloud."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon ElastiCache** offers fully managed Redis or Memcached in-memory databases. It caches frequently queried data to reduce latency and load on relational databases for read-heavy workloads.\n\n\n---"
      },
      {
        "id": 21,
        "question": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
        "options": [
          "A. AWS WAF",
          "B. AWS Trusted Advisor",
          "C. AWS Organizations",
          "D. Amazon Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Organizations** allows you to consolidate multiple AWS accounts into a single organization that you can centrally manage, configure policies, and implement consolidated billing.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
        "options": [
          "A. Dedicated Instances",
          "B. Dedicated Hosts",
          "C. On-demand Instances",
          "D. Reserved Instances"
        ],
        "correct_letter": "B",
        "explanation": "An **Amazon EC2 Dedicated Host** is a physical server with EC2 instance capacity fully dedicated to your use. It allows you to use your existing software licenses (like Windows Server, SQL Server, Oracle) that are bound to sockets, cores, or VMs, fulfilling strict BYOL requirements.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
        "options": [
          "A. Free support for all enterprise customers.",
          "B. Automatic data protection.",
          "C. Reduced Capital Expenditure (CapEx).",
          "D. AWS holds responsibility for managing customer applications."
        ],
        "correct_letter": "C",
        "explanation": "AWS cloud computing uses a utility billing model. Instead of paying heavy upfront costs for physical hardware (Capital Expenditure / CapEx), you pay variable monthly charges based on your consumption (Operational Expenditure / OpEx), thereby drastically reducing CapEx.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
        "options": [
          "A. Always use Global Services in your architecture rather than Regional Services.",
          "B. Always choose to pay as you go.",
          "C. Treat servers as fixed resources.",
          "D. Automate wherever possible.",
          "E. Remove single points of failure."
        ],
"correct_letter": "DE",
        "explanation": "**Automation** (D) (via tools like Auto Scaling or CloudFormation) increases agility and consistency.\n**Removing single points of failure** (E) via redundant, multi-AZ configurations ensures system resilience.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. AWS Snowball",
          "D. Amazon Route 53"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Direct Connect** bypasses the public internet by establishing a dedicated physical network connection from your on-premises network to AWS, providing lower latency and more consistent throughput.\n\n\n---"
      },
      {
        "id": 26,
        "question": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
        "options": [
          "A. Internet gateways",
          "B. Virtual Private Cloud",
          "C. Security Groups",
          "D. Amazon CloudFront"
        ],
        "correct_letter": "B",
        "explanation": "A **Virtual Private Cloud (VPC)** allows you to provision logically isolated networks inside your AWS account. By putting resources for different projects into separate VPCs, you isolate their network configurations entirely.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
        "options": [
          "A. Amazon Cognito",
          "B. AWS IAM",
          "C. Amazon Aurora",
          "D. AWS WAF"
        ],
        "correct_letter": "D",
        "explanation": "**AWS WAF** (Web Application Firewall) allows you to define custom security rules to monitor and block HTTP/HTTPS requests, protecting web applications from common exploits like SQL Injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 28,
        "question": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
        "options": [
          "A. Amazon EMR",
          "B. Amazon MQ",
          "C. Amazon SNS",
          "D. Amazon SQS"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon EMR** (Elastic MapReduce) is a managed big data platform that simplifies running large-scale data processing frameworks like Apache Spark, Hadoop, and Hive on AWS to analyze large datasets.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
        "options": [
          "A. Monitoring network performance",
          "B. Installing software on EC2 instances",
          "C. Creating hypervisors",
          "D. Configuring Access Control Lists (ACLs)",
          "E. Hardware maintenance"
        ],
"correct_letter": "CE",
        "explanation": "AWS is solely responsible for **Security of the Cloud**, which includes maintaining the physical hardware (E) and managing the hypervisor virtualization software (C) that runs customer VMs.\n\n\n---"
      },
      {
        "id": 30,
        "question": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon DynamoDB",
          "C. Amazon EC2",
          "D. Amazon RDS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon EC2** provides Virtual Machines (IaaS) where you have full root/administrator access to the operating system, allowing you to install custom software and configure the environment exactly as you need. Managed services like RDS, Redshift, and DynamoDB abstract away OS-level access.\n\n\n---"
      },
      {
        "id": 31,
        "question": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
        "options": [
          "A. MFA",
          "B. Security tokens",
          "C. A user name and password",
          "D. Access keys"
        ],
        "correct_letter": "C",
        "explanation": "An IAM user requires a **username and password** to log in to the web-based AWS Management Console by default. Access keys are for command-line or programmatic API access.\n\n\n---"
      },
      {
        "id": 32,
        "question": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
        "options": [
          "A. IAM",
          "B. An internet gateway",
          "C. EBS Snapshot",
          "D. AMI"
        ],
        "correct_letter": "D",
        "explanation": "An **AMI (Amazon Machine Image)** is a template containing a pre-configured operating system and software stack. You use an AMI to launch one or many identical EC2 instances in the cloud.\n\n\n---"
      },
      {
        "id": 33,
        "question": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
        "options": [
          "A. Reserved Compute capacity",
          "B. Eliminating Single Points of Failure (SPOFs)",
          "C. Distributed infrastructure",
          "D. Virtualized compute resources",
          "E. Dedicated hosting"
        ],
"correct_letter": "BC",
        "explanation": "Cloud computing provides global **distributed infrastructure** (C) across multiple AZs and Regions, allowing you to easily build redundant architectures that **eliminate Single Points of Failure** (SPOFs) (B).\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
        "options": [
          "A. Encryption of EBS volumes",
          "B. VPC security",
          "C. Access permissions",
          "D. Hardware patching",
          "E. Securing global physical infrastructure"
        ],
"correct_letter": "DE",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for physical and environmental security (E) of data centers and the patching/maintenance of underlying physical infrastructure hosts (D). EBS encryption and access permissions are managed by the customer.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. The ability of a system to recover gracefully from failure.",
          "B. The efficient use of computing resources to meet requirements.",
          "C. The ability to monitor systems and improve supporting processes and procedures.",
          "D. The ability to manage datacenter operations more efficiently."
        ],
        "correct_letter": "C",
        "explanation": "The **Operational Excellence** pillar focuses on running and monitoring systems to deliver business value, and continually improving supporting processes and procedures (e.g., through automation, testing, and continuous feedback).\n\n\n---"
      },
      {
        "id": 36,
        "question": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
        "options": [
          "A. Edge locations are used by CloudFront to cache the most recent responses.",
          "B. Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
          "C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
          "D. Edge locations are used by CloudFront to distribute content to global users with low latency."
        ],
        "correct_letter": "C",
        "explanation": "Distributing traffic across multiple instances is the role of an **Elastic Load Balancer (ELB)**, not CloudFront's Edge Locations. Edge Locations cache downloads (A & D) and optimize uploads via S3 Transfer Acceleration (B).\n\n\n---"
      },
      {
        "id": 37,
        "question": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon Comprehend",
          "C. AWS Transit Gateway",
          "D. AWS X-Ray",
          "E. AWS Config"
        ],
"correct_letter": "AE",
        "explanation": "**AWS CloudTrail** (A) audits user actions and API calls (who changed the resource).\n**AWS Config** (E) records the history of resource configurations and alerts you when resource settings change over time.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
        "options": [
          "A. Amazon ECS",
          "B. AWS Data Pipeline",
          "C. AWS Cloud9",
          "D. AWS Personal Health Dashboard"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon ECS** (Elastic Container Service) is a highly scalable container orchestration service that allows you to run, stop, and manage Docker containers on a cluster of EC2 instances or using AWS Fargate (serverless).\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following services will help businesses ensure compliance in AWS?",
        "options": [
          "A. CloudFront",
          "B. CloudEndure Migration",
          "C. CloudWatch",
          "D. CloudTrail"
        ],
        "correct_letter": "D",
        "explanation": "**AWS CloudTrail** logs all API calls in your AWS account. This detailed event history acts as an audit log that helps businesses ensure regulatory compliance and security standards by proving who performed actions.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which of the following procedures will help reduce your Amazon S3 costs?",
        "options": [
          "A. Use the Import/Export feature to move old files automatically to Amazon Glacier.",
          "B. Use the right combination of storage classes based on different use cases.",
          "C. Pick the right Availability Zone for your S3 bucket.",
          "D. Move all the data stored in S3 standard to EBS."
        ],
        "correct_letter": "B",
        "explanation": "Amazon S3 offers various storage classes (Standard, Infrequent Access, Glacier, Deep Archive) at different price points. By configuring S3 Lifecycle policies to automatically move files to colder storage classes based on access frequency, you minimize storage costs.\n\n\n---"
      },
      {
        "id": 41,
        "question": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon EC2 Auto Scaling",
          "C. Elastic Load Balancer",
          "D. CloudFormation",
          "E. Network ACLs"
        ],
"correct_letter": "BC",
        "explanation": "**ELB** routes traffic only to healthy instances across multiple Availability Zones, while **Auto Scaling** launches new instances to replace failed ones. Together, they form the cornerstone of highly available and fault-tolerant cloud architectures.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which of the following activities may help reduce your AWS monthly costs?",
        "options": [
          "A. Enabling Amazon EC2 Auto Scaling for all of your workloads.",
          "B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
          "C. Removing all of your Cost Allocation Tags.",
          "D. Deploying your AWS resources across multiple Availability Zones."
        ],
        "correct_letter": "A",
        "explanation": "**Auto Scaling** dynamically adjusts EC2 capacity based on load metrics. This allows you to scale down during low-traffic periods (e.g., nights/weekends) so that you aren't paying for idle CPU cycles.\n\n\n---"
      },
      {
        "id": 43,
        "question": "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
        "options": [
          "A. S3 Transfer Acceleration",
          "B. AWS WAF",
          "C. AWS Snowmobile",
          "D. AWS Snowball"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3 Transfer Acceleration** utilizes CloudFront's globally distributed Edge Locations to accelerate uploads. Data is routed from the edge location to the S3 bucket over the optimized AWS private network backbone, bypassing public internet congestion.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
        "options": [
          "A. AWS X-Ray",
          "B. Network ACL",
          "C. Security Groups",
          "D. VPC Flow logs"
        ],
        "correct_letter": "C",
        "explanation": "A **Security Group** acts as a virtual firewall for your EC2 instance to control inbound and outbound traffic at the instance level.\n*Network ACL* is a firewall at the subnet level.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
        "options": [
          "A. AWS KMS",
          "B. AWS Global accelerator",
          "C. AWS Direct Connect",
          "D. AWS Glue",
          "E. Amazon CloudFront"
        ],
"correct_letter": "BE",
        "explanation": "**AWS Global Accelerator** (B) routes user traffic over the AWS global network backbone, improving TCP performance and reducing latency.\n**Amazon CloudFront** (E) caches application content closer to global users at Edge Locations, drastically improving latency.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
        "options": [
          "A. Building the relational database schema.",
          "B. Performing backups.",
          "C. Managing the database settings.",
          "D. Patching the database software.",
          "E. Installing the database software."
        ],
"correct_letter": "AC",
        "explanation": "For Amazon RDS, AWS manages the database installation (E), OS/engine patching (D), and baseline database backups (B). The customer is responsible for configuring database settings and parameters (C), and designing the schemas/indexes (A).\n\n\n---"
      },
      {
        "id": 47,
        "question": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon SNS",
          "C. Amazon RDS",
          "D. Amazon ElastiCache"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon RDS** (Relational Database Service) is the ideal target for structured data structured in tables with defined relationships (schemas), as it supports engines like MySQL, PostgreSQL, Oracle, and SQL Server.\n\n\n---"
      },
      {
        "id": 48,
        "question": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
        "options": [
          "A. APN Consulting Partners",
          "B. AWS TAM",
          "C. APN Technology Partners",
          "D. AWS Professional Services"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Partner Network (APN)** has two main types of partners:\n**APN Technology Partners** (C) provide software, SaaS, or security tools integrated with AWS.\n**APN Consulting Partners** (A) are professional services firms that help customers design, build, and migrate workloads.\n\n\n---"
      },
      {
        "id": 49,
        "question": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
        "options": [
          "A. Amazon LightSail",
          "B. AWS Lambda",
          "C. Amazon RDS instances",
          "D. Amazon EC2 instances"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is a serverless compute service that runs code in response to events and manages all execution environments and server capacity automatically, removing administration overhead.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
        "options": [
          "A. She has properly built an elastic system.",
          "B. She has properly built a fault tolerant system.",
          "C. She has properly built an encrypted system.",
          "D. She has properly built a scalable system."
        ],
        "correct_letter": "B",
        "explanation": "**Fault tolerance** is the ability of an application architecture to survive resource failures (such as half of the web instances crashing) with zero downtime and zero impact on end-user requests.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 2
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 3",
    "questions": [
      {
        "id": 1,
        "question": "Where can you store files in AWS? (Choose TWO)",
        "options": [
          "A. Amazon EFS",
          "B. Amazon SNS",
          "C. Amazon EBS",
          "D. Amazon ECS",
          "E. Amazon EMR"
        ],
"correct_letter": "AC",
        "explanation": "**Amazon EFS** (Elastic File System) provides shared, elastic file storage accessible by multiple EC2 instances.\n**Amazon EBS** (Elastic Block Store) provides persistent block storage volumes designed for single EC2 instances.\n*SNS* is a pub/sub messaging service, *ECS* runs containers, and *EMR* is for big data processing.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
        "options": [
          "A. Amazon Simple Queue Service",
          "B. AWS Storage Gateway",
          "C. Amazon Simple Email Service",
          "D. Amazon Simple Storage Service"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon SQS** (Simple Queue Service) is a fully managed message queuing service that stores messages reliably until processed, decoupling microservices and distributed application components.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
        "options": [
          "A. Pay less as AWS grows",
          "B. Pay as you go",
          "C. Pay less by using more",
          "D. Save when you reserve"
        ],
        "correct_letter": "D",
        "explanation": "The **Save when you reserve** model allows you to achieve significant cost savings (up to 72%) compared to On-Demand pricing by committing to a 1-year or 3-year term for AWS resources (like EC2 Reserved Instances or Savings Plans).\n\n\n---"
      },
      {
        "id": 4,
        "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
        "options": [
          "A. Right-size before and after migration",
          "B. Use a Multi-Region Active-Passive architecture",
          "C. Combine On-demand Capacity Reservations with Saving Plans",
          "D. Use a Multi-Region Active-Active architecture"
        ],
        "correct_letter": "A",
        "explanation": "**Right-sizing** is the process of matching instance types and sizes to your actual workload performance and capacity requirements. Analyzing utilization metrics and scaling down over-provisioned instances before and after migrating to RDS ensures you pay only for what you need.\n\n\n---"
      },
      {
        "id": 5,
        "question": "What is the primary storage service used by Amazon RDS database instances?",
        "options": [
          "A. Amazon Glacier",
          "B. Amazon EBS",
          "C. Amazon EFS",
          "D. Amazon S3"
        ],
        "correct_letter": "B",
        "explanation": "Amazon RDS DB instances run on virtual machines and use **Amazon Elastic Block Store (EBS)** SSD-backed volumes (General Purpose or Provisioned IOPS) as their primary database storage.\n\n\n---"
      },
      {
        "id": 6,
        "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
        "options": [
          "A. AWS CodePipeline",
          "B. AWS X-Ray",
          "C. Amazon Inspector",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "B",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using microservices. It provides a visual trace map of requests as they travel across multiple services, highlighting where latency or errors are occurring.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
        "options": [
          "A. Amazon Redshift",
          "B. AWS Snowball",
          "C. Amazon Simple Storage Service",
          "D. Amazon EBS",
          "E. Amazon DynamoDB"
        ],
"correct_letter": "CE",
        "explanation": "**Amazon S3** (C) natively replicates objects across a minimum of three geographically separate Availability Zones (AZs) in a region.\n**Amazon DynamoDB** (E) automatically spreads data and traffic across multiple AZs to achieve built-in high availability.\n*EBS* and *Redshift* are provisioned within a single AZ by default.\n\n\n---"
      },
      {
        "id": 8,
        "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
        "options": [
          "A. AWS Regions",
          "B. Multi-AZ Deployment",
          "C. Automatic patching",
          "D. Read Replicas",
          "E. Edge Locations"
        ],
"correct_letter": "BD",
        "explanation": "**Multi-AZ Deployment** (B) replicates database updates synchronously to a standby instance in a different AZ, providing automatic failover if the primary instance crashes.\n**Read Replicas** (D) can be promoted to a standalone primary database if disaster strikes, increasing overall database availability.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
        "options": [
          "A. Replicate the current resources across multiple Availability Zones within the same region.",
          "B. Migrate the application to a hosting provider in Asia.",
          "C. Recreate the website content.",
          "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon CloudFront** caches static and dynamic website content at global **Edge Locations**. By using CloudFront, users in Asia will pull cached content from regional edge locations inside Asia, bypassing long-distance network round-trips to the US West region.\n\n\n---"
      },
      {
        "id": 10,
        "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
        "options": [
          "A. AWS Identity and Access Management",
          "B. Amazon RDS",
          "C. Network Access Control Lists",
          "D. Amazon EMR"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** is the service used to manage access to AWS services and resources securely. It allows you to create users, groups, and roles, and associate fine-grained permissions policies to control developer interactions.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
        "options": [
          "A. Iaas & SaaS",
          "B. IaaS",
          "C. SaaS",
          "D. PaaS"
        ],
        "correct_letter": "B",
        "explanation": "**Infrastructure as a Service (IaaS)** provides raw access to networking, computers (virtual or dedicated hardware), and storage. Running Amazon EC2 instances gives you full administrative control over the guest OS, making it a classic IaaS model.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the below is a best-practice when building applications on AWS?",
        "options": [
          "A. Strengthen physical security by applying the principle of least privilege.",
          "B. Ensure that the application runs on hardware from trusted vendors.",
          "C. Use IAM policies to maintain performance.",
          "D. Decouple the components of the application so that they run independently."
        ],
        "correct_letter": "D",
        "explanation": "**Decoupling** application components (e.g. using message brokers like SQS or SNS) reduces inter-dependencies. If one component goes offline, other layers (like input submission) can buffer requests, preventing a cascading outage.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon SQS",
          "C. Amazon Instance store",
          "D. Amazon S3"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** is an object storage service designed to store and retrieve any amount of unstructured data (like photos and videos) from anywhere on the web, offering high durability and cost-efficiency.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing […] & […]. (Choose TWO)",
        "options": [
          "A. Active archives",
          "B. Dynamic websites’ assets",
          "C. Long-term analytic data",
          "D. Active databases",
          "E. Cached data"
        ],
"correct_letter": "AC",
        "explanation": "**Amazon S3 Glacier** is designed for low-cost archiving of data that does not require immediate access. Suitable use cases include long-term data archives (A) and regulatory compliance backups or cold analytical data (C) that are accessed infrequently.\n\n\n---"
      },
      {
        "id": 15,
        "question": "What does Amazon Elastic Beanstalk provide?",
        "options": [
          "A. A PaaS solution to automate application deployment.",
          "B. A compute engine for Amazon ECS.",
          "C. A scalable file storage solution for use with AWS and on-premises servers.",
          "D. A NoSQL database service."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Elastic Beanstalk** is a Platform as a Service (PaaS) offering that allows you to upload application code. It automatically manages server provisioning, load balancing, scaling, and system health checks, abstracting infrastructure management.\n\n\n---"
      },
      {
        "id": 16,
        "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
        "options": [
          "A. Amazon Kinesis",
          "B. Security groups",
          "C. Amazon Inspector",
          "D. AWS Network Access Control Lists"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that continually scans EC2 workloads, container images, and Lambda functions for software vulnerabilities and network path exposure.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
        "options": [
          "A. Patch management controls",
          "B. Database controls",
          "C. Awareness & Training",
          "D. Environmental controls",
          "E. Physical controls"
        ],
"correct_letter": "DE",
        "explanation": "**Inherited controls** are security elements that the customer does not configure; they are fully managed by AWS. These include the **physical security** of AWS data centers (E) and **environmental controls** (UPS power, HVAC, fire suppression) (D).\n\n\n---"
      },
      {
        "id": 18,
        "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
        "options": [
          "A. Reserved instances - No Upfront",
          "B. Reserved instances - Partial Upfront",
          "C. On-Demand instances",
          "D. Spot Instances"
        ],
        "correct_letter": "B",
        "explanation": "When you commit to a database node for three years, purchasing **Reserved Instances** yields substantial savings over On-Demand rates. A **Partial Upfront** (or All Upfront) option provides a larger discount tier than No Upfront. Spot instances are not supported for managed Amazon RDS instances.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
        "options": [
          "A. Elasticity",
          "B. Global reach",
          "C. Data durability",
          "D. High availability"
        ],
        "correct_letter": "B",
        "explanation": "AWS’s massive global infrastructure footprint—comprising multiple Regions and Edge Locations globally—gives developers **global reach**, letting them deploy app resources closer to international users to minimize latency.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
        "options": [
          "A. AWS Batch",
          "B. AWS Outposts",
          "C. Amazon Lightsail",
          "D. Amazon EC2",
          "E. AWS Lambda"
        ],
"correct_letter": "DE",
        "explanation": "**Compute Savings Plans** offer up to 66% discount in exchange for a commitment to a consistent amount of compute usage ($/hour) across **Amazon EC2**, **AWS Fargate**, and **AWS Lambda**.\n\n\n---"
      },
      {
        "id": 21,
        "question": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
        "options": [
          "A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
          "B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
          "C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
          "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
        ],
        "correct_letter": "D",
        "explanation": "To guarantee resilience against catastrophic environmental outages (like hurricanes or earthquakes affecting an entire region), deploying resources across **multiple AWS Regions** using an **Active-Active** routing strategy ensures that if one Region fails, another instantly processes all user traffic.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
        "options": [
          "A. You can contact AWS support to increase the service limits.",
          "B. Each IAM user has the same service limit.",
          "C. There are no service limits on AWS.",
          "D. You can use the AWS Trusted Advisor to monitor your service limits.",
          "E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
        ],
"correct_letter": "AD",
        "explanation": "Most AWS service limits (now called Service Quotas) are adjustable, and customers can request an increase by raising a case with **AWS Support** (A).\n**AWS Trusted Advisor** contains Service Limit checks to monitor resource usage and alerts you when your account usage approaches default limits (D).\n\n\n---"
      },
      {
        "id": 23,
        "question": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
        "options": [
          "A. AWS Console",
          "B. AWS Service Catalog",
          "C. AWS OpsWorks",
          "D. AWS CLI"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Command Line Interface (CLI)** is an open-source command-line tool that lets you script and automate interactions with AWS services and resources directly through shell terminals.\n\n\n---"
      },
      {
        "id": 24,
        "question": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
        "options": [
          "A. AWS Artifact",
          "B. AWS Cloud9",
          "C. AWS Direct Connect",
          "D. AWS CloudTrail",
          "E. AWS VPN"
        ],
"correct_letter": "CE",
        "explanation": "**AWS Direct Connect** (C) creates a dedicated physical network connection from an on-premises network to AWS.\n**AWS VPN** (E) establishes a secure, encrypted tunnel over the public internet to connect on-premises environments with AWS.\n\n\n---"
      },
      {
        "id": 25,
        "question": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
        "options": [
          "A. AWS EC2 Auto Recovery",
          "B. AWS Auto Scaling",
          "C. AWS Network Load Balancer",
          "D. AWS Application Load Balancer"
        ],
        "correct_letter": "D",
        "explanation": "An **Application Load Balancer (ALB)** operates at the application layer (Layer 7) and is designed to distribute incoming HTTP/HTTPS traffic evenly and intelligently across targets (EC2 instances, microservices) based on request routing rules.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
        "options": [
          "A. Amazon Neptune",
          "B. Amazon Aurora",
          "C. Amazon RDS for SQL Server",
          "D. Amazon RDS for PostgreSQL"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Aurora** is a relational database built for the cloud. Aurora Serverless is an on-demand, auto-scaling configuration that automatically starts up, scales down, or shuts database capacity off based on active workload usage.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
        "options": [
          "A. AWS CloudHSM",
          "B. Security Groups",
          "C. AWS Batch",
          "D. AWS IAM",
          "E. Network Access Control Lists (Network ACLs)"
        ],
"correct_letter": "BE",
        "explanation": "At the VPC layer, **Security Groups** (instance-level firewall) and **Network ACLs** (subnet-level firewall) filter out traffic from malicious IP addresses, forming a primary line of defense against network flood and DDoS attacks.\n\n\n---"
      },
      {
        "id": 28,
        "question": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon Kinesis",
          "C. Amazon DynamoDB",
          "D. Amazon RDS"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Redshift** is a fully managed petabyte-scale data warehouse service in the cloud. It uses Columnar Storage and Massively Parallel Processing (MPP) to run complex analytics queries at speed.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
        "options": [
          "A. Application development",
          "B. Market research",
          "C. Business analysis",
          "D. Physical hardware"
        ],
        "correct_letter": "D",
        "explanation": "A **Total Cost of Ownership (TCO)** analysis compares direct and indirect costs. When evaluating cloud migration vs on-premises hosting, you must account for the capital cost of purchasing and maintaining physical host hardware, network switches, racks, storage arrays, power, and cooling facilities on-premises.\n\n\n---"
      },
      {
        "id": 30,
        "question": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
        "options": [
          "A. EC2 instances will be billed on one second increments, with a minimum of one minute.",
          "B. EC2 instances will be billed on one hour increments, with a minimum of one day.",
          "C. EC2 instances will be billed on one minute increments, with a minimum of one hour.",
          "D. EC2 instances will be billed on one day increments, with a minimum of one month."
        ],
        "correct_letter": "A",
        "explanation": "AWS charges for Linux-based EC2 instances on a **per-second** basis (minimum charge of 60 seconds), allowing users to launch and terminate instances without paying for unused fractional hours.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
        "options": [
          "A. Instance type",
          "B. The Availability Zone where the instance is provisioned",
          "C. Load balancing",
          "D. Number of buckets",
          "E. Number of private IPs"
        ],
"correct_letter": "AB",
        "explanation": "**Instance type** (A) determines the CPU, RAM, and hardware configuration, which directly dictates hourly costs.\n**Location** (B) (specifically the AWS Region and sometimes the AZ) has slightly varying base pricing tables based on regional infrastructure costs.\n\n\n---"
      },
      {
        "id": 32,
        "question": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
        "options": [
          "A. By creating an AWS Config template from the old instance and launching a new instance from it.",
          "B. By creating an EBS Snapshot of the old instance.",
          "C. By installing Aurora on EC2 and launching a new instance from it.",
          "D. By creating an AMI from the old instance and launching a new instance from it."
        ],
        "correct_letter": "D",
        "explanation": "An **Amazon Machine Image (AMI)** is a packaged template configuration containing the guest OS, software tools, settings, and file structures. You can capture a snapshot of a configured instance as an AMI, and then spin up multiple identical clone instances instantly.\n\n\n---"
      },
      {
        "id": 33,
        "question": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
        "options": [
          "A. IAM Principals",
          "B. AWS Service Control Policies (SCPs)",
          "C. IAM policies",
          "D. AWS Fargate"
        ],
        "correct_letter": "B",
        "explanation": "**Service Control Policies (SCPs)** are organization policy documents used to manage maximum permission thresholds in an organization. You can attach SCPs to accounts or Organizational Units (OUs) to restrict access to specific AWS services or API actions (e.g. denying access to create resources in specific regions).\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which of the following statements describes the AWS Cloud’s agility?",
        "options": [
          "A. AWS allows you to host your applications in multiple regions around the world.",
          "B. AWS provides customizable hardware at the lowest possible cost.",
          "C. AWS allows you to provision resources in minutes.",
          "D. AWS allows you to pay upfront to reduce costs."
        ],
        "correct_letter": "C",
        "explanation": "**Agility** refers to speed and flexibility. With cloud computing, you can launch databases, servers, or serverless functions in minutes, reducing the time required to procure physical equipment from weeks or months down to minutes.\n\n\n---"
      },
      {
        "id": 35,
        "question": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
        "options": [
          "A. Lower administrative burden",
          "B. Complete control over the underlying host",
          "C. Resizable compute capacity",
          "D. Scales automatically to larger or smaller instance types",
          "E. Supports the document and key-value data structure."
        ],
"correct_letter": "AC",
        "explanation": "RDS eliminates the **administrative burden** (A) of OS installation, patching, hardware deployment, and manual database backups.\nIt offers **resizable compute capacity** (C), allowing you to change instance sizing (scaling up/down vertically) to meet workload variations.\n\n\n---"
      },
      {
        "id": 36,
        "question": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
        "options": [
          "A. Internet Gateway",
          "B. AWS IQ",
          "C. AWS Direct Connect",
          "D. AWS Site-to-Site VPN"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec-encrypted VPN connection between an on-premises Customer Gateway and a Virtual Private Gateway (or Transit Gateway) in AWS over the public internet.\n\n\n---"
      },
      {
        "id": 37,
        "question": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
        "options": [
          "A. Enterprise Support",
          "B. Developer Support",
          "C. Basic Support",
          "D. Business Support"
        ],
        "correct_letter": "D",
        "explanation": "**Business Support** is the lowest support tier that provides 24x7 phone, email, and chat access to cloud support engineers for troubleshooting. Basic is free (non-technical queries only), and Developer Support only provides business hours email access.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
        "options": [
          "A. Network Access Control Lists (NACLs)",
          "B. Key Pairs",
          "C. Access Keys",
          "D. IAM Policies",
          "E. Security Groups"
        ],
"correct_letter": "AE",
        "explanation": "**NACLs** (A) are stateless firewalls protecting subnets.\n**Security Groups** (E) are stateful firewalls protecting individual EC2 instances. Together they control network access paths.\n\n\n---"
      },
      {
        "id": 39,
        "question": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
        "options": [
          "A. Reserved instances",
          "B. Spot Instances",
          "C. On-Demand instances",
          "D. Dedicated instances"
        ],
        "correct_letter": "B",
        "explanation": "**Spot Instances** provide up to 90% discount compared to On-Demand instances. Since the media transcoding application is stateless and resilient enough to recover quickly from sudden instance terminations, Spot instances are the most cost-effective option.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
        "options": [
          "A. AWS Service Health Dashboard",
          "B. AWS Management Console",
          "C. Amazon CloudWatch",
          "D. AWS Personal Health Dashboard"
        ],
        "correct_letter": "A",
        "explanation": "The public **AWS Service Health Dashboard** (also known as the AWS Health Dashboard - Service Status) lists the general operational status of all AWS services across all regions. The *Personal Health Dashboard* provides status updates specific to your running accounts and resources.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
        "options": [
          "A. AWS Software Development Kit",
          "B. AWS Command Line Interface",
          "C. AWS CodeDeploy",
          "D. AWS Management Console"
        ],
        "correct_letter": "A",
        "explanation": "**AWS SDKs** provide language-specific library components (e.g. for Java, Python, .NET, Node.js) that allow developers to code integrations and control AWS resources directly in their applications.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which AWS Service can be used to register a new domain name?",
        "options": [
          "A. Amazon Personalize",
          "B. Amazon Route 53",
          "C. AWS KMS",
          "D. AWS Config"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Route 53** acts as a Domain Name Registrar, permitting users to purchase, register, and manage DNS records for domain names (such as `.com`, `.net`, `.org`).\n\n\n---"
      },
      {
        "id": 43,
        "question": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
        "options": [
          "A. AWS CloudFormation",
          "B. AWS Migration Hub",
          "C. AWS IAM",
          "D. AWS Elastic Beanstalk",
          "E. Amazon Macie"
        ],
"correct_letter": "AD",
        "explanation": "**AWS CloudFormation** (A) automates the creation of infrastructure resources via declarative JSON/YAML templates.\n**AWS Elastic Beanstalk** (D) automates web application deployments, taking care of load balancers, auto-scaling, and code deployment automatically.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS service provides cost-optimization recommendations?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. AWS Pricing Calculator",
          "C. Amazon QuickSight",
          "D. AWS X-Ray"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** inspects your AWS environment and provides optimization checks. Its **Cost Optimization** category lists idle resources, underutilized instances, and unused resources that can be deleted to save money.\n\n\n---"
      },
      {
        "id": 45,
        "question": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
        "options": [
          "A. VPC Peering",
          "B. AWS Transit Gateway",
          "C. Amazon Connect",
          "D. Security Groups"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Transit Gateway** acts as a central cloud router. It connects VPCs and on-premises networks together, replacing complex mesh topologies (VPC Peering) with a hub-and-spoke configuration that is much easier to manage.\n\n\n---"
      },
      {
        "id": 46,
        "question": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
        "options": [
          "A. Instances can be shut down by AWS at any time with no notification.",
          "B. Reserved instances require at least a one-year pricing commitment.",
          "C. There is no additional charge for using dedicated instances.",
          "D. Reserved instances provide a significant discount compared to on-demand instances.",
          "E. Reserved instances are best suited for periodic workloads."
        ],
"correct_letter": "BD",
        "explanation": "Reserved Instances require a contract commitment of either **1 year or 3 years** (B).\nIn exchange for this commitment, AWS grants a **significant discount** (up to 72%) compared to regular On-Demand hourly prices (D).\n\n\n---"
      },
      {
        "id": 47,
        "question": "Why does every AWS Region contain multiple Availability Zones?",
        "options": [
          "A. Multiple Availability Zones allows you to build resilient and highly available architectures.",
          "B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
          "C. Multiple Availability Zones allows for data replication and global reach.",
          "D. Multiple Availability Zones within a region increases the storage capacity available in that region."
        ],
        "correct_letter": "A",
        "explanation": "Availability Zones are physically isolated data center structures. By deploying applications across multiple AZs within a Region, you create a failover topology; if one AZ fails (e.g. from power cut or local disaster), the other AZs continue processing traffic, ensuring high availability.\n\n\n---"
      },
      {
        "id": 48,
        "question": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
        "options": [
          "A. On-Demand Instances",
          "B. Spot Instances",
          "C. Reserved Instances - All Upfront",
          "D. Reserved Instances - No Upfront"
        ],
        "correct_letter": "A",
        "explanation": "For a short-term workload lasting only 2 months that cannot afford interruptions (must always be available, ruling out Spot), **On-Demand Instances** are the most cost-effective option. Reserved instances have a minimum commitment period of 1 year.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following is a benefit of running an application in multiple Availability Zones?",
        "options": [
          "A. Allows you to exceed AWS service limits.",
          "B. Reduces application response time between servers and global users.",
          "C. Increases available compute capacity.",
          "D. Increases the availability of your application."
        ],
        "correct_letter": "D",
        "explanation": "Replicating resources across multiple AZs ensures that if a localized power, network, or hardware failure disables one Availability Zone, the application remains accessible in other zones, thereby increasing overall availability.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
        "options": [
          "A. AWS sells the old devices to other hosting providers.",
          "B. AWS destroys the old devices in accordance with industry-standard practices.",
          "C. AWS sends the old devices for remanufacturing.",
          "D. AWS stores the old devices in a secure place."
        ],
        "correct_letter": "B",
        "explanation": "When AWS storage devices (EBS drives, S3 disks) reach the end of their lifecycle, AWS implements strict media sanitization processes (such as degaussing and physical shredding) to prevent raw data from ever being recovered.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 3
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 4",
    "questions": [
      {
        "id": 1,
        "question": "A developer needs to set up an SSL security certificate for a client’s eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
        "options": [
          "A. Amazon Route 53",
          "B. AWS ACM",
          "C. AWS Directory Service",
          "D. AWS Identity & Access Management",
          "E. AWS Data Pipeline"
        ],
"correct_letter": "BD",
        "explanation": "**AWS ACM** (Certificate Manager) is the primary AWS service used to provision, manage, and deploy SSL/TLS certificates for use with AWS services like Elastic Load Balancing, Amazon CloudFront, and Amazon API Gateway (B).\n**AWS IAM** serves as a certificate manager/storage repository for regions where ACM is not supported or for custom configurations (D).\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
        "options": [
          "A. Amazon EC2",
          "B. Amazon S3",
          "C. AWS Lambda",
          "D. Amazon EMR",
          "E. Amazon EBS"
        ],
"correct_letter": "BC",
        "explanation": "Amazon S3 and AWS Lambda are serverless/managed platform offerings that scale capacity and throughput automatically in response to active traffic/data demands without requiring user intervention. EC2, EMR, and EBS require user-configured capacity scaling.\n\n\n---"
      },
      {
        "id": 3,
        "question": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
        "options": [
          "A. Application management",
          "B. Capacity management",
          "C. Access control",
          "D. Operating system maintenance",
          "E. Data management"
        ],
"correct_letter": "BD",
        "explanation": "With a serverless service like AWS Lambda, the customer delegates infrastructure control to AWS. AWS handles the provisioning of servers, execution capacity scaling (B), and guest operating system maintenance/patching (D). The customer is responsible for writing and configuring function code.\n\n\n---"
      },
      {
        "id": 4,
        "question": "How do ELBs improve the reliability of your application?",
        "options": [
          "A. By distributing traffic across multiple S3 buckets.",
          "B. By replicating data to multiple availability zones.",
          "C. By creating database Read Replicas.",
          "D. By ensuring that only healthy targets receive traffic."
        ],
        "correct_letter": "D",
        "explanation": "Elastic Load Balancers (ELBs) continually execute protocol-based **health checks** on all registered target instances. If an instance fails a health check, ELB immediately stops routing client requests to it, ensuring only active, healthy targets handle traffic.\n\n\n---"
      },
      {
        "id": 5,
        "question": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
        "options": [
          "A. On-demand instances.",
          "B. Spot instances.",
          "C. Dedicated instances.",
          "D. Reserved instances."
        ],
        "correct_letter": "C",
        "explanation": "**Dedicated Instances** are Amazon EC2 instances that run in a VPC on physical hardware that is dedicated to a single customer, ensuring absolute physical isolation from the hardware instances running other customers' workloads.\n\n\n---"
      },
      {
        "id": 6,
        "question": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
        "options": [
          "A. Snowball",
          "B. S3 Transfer Acceleration",
          "C. Snowmobile",
          "D. Amazon VPC"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowmobile** is an Exabyte-scale physical data transfer service. It is a shipping container pulled by a semi-trailer truck that can transport up to 100 Petabytes of data securely, making it ideal for massive data migrations like 60 PB. Standard Snowballs hold up to 80TB, which would require hundreds of devices.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
        "options": [
          "A. Amazon S3 Glacier",
          "B. Amazon EFS",
          "C. Amazon S3 Standard",
          "D. Amazon EBS"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3 Glacier Flexible Retrieval** is the most cost-effective storage class matching these needs. It offers low storage cost and supports data retrieval within a standard window of 3 to 5 hours.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which AWS Service is used to manage user permissions?",
        "options": [
          "A. Security Groups",
          "B. Amazon ECS",
          "C. AWS IAM",
          "D. AWS Support"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Identity and Access Management (IAM)** is the central service that controls who is authenticated (signed in) and authorized (has permissions) to run API actions on AWS resources.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which support plan includes AWS Support Concierge Service?",
        "options": [
          "A. Premium Support",
          "B. Business Support",
          "C. Enterprise Support",
          "D. Standard Support"
        ],
        "correct_letter": "C",
        "explanation": "The **Support Concierge** is a dedicated billing and account expert team included exclusively in the **Enterprise Support** and Enterprise On-Ramp plans.\n\n\n---"
      },
      {
        "id": 10,
        "question": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
        "options": [
          "A. AWS Config",
          "B. Amazon CloudWatch",
          "C. AWS CloudTrail",
          "D. AWS CloudFormation"
        ],
        "correct_letter": "C",
        "explanation": "**AWS CloudTrail** monitors and records account activity and API call history across your AWS infrastructure, providing full audit visibility into who initiated configuration changes or service actions.\n\n\n---"
      },
      {
        "id": 11,
        "question": "What are the benefits of using an AWS-managed service? (Choose TWO)",
        "options": [
          "A. Provides complete control over the virtual infrastructure.",
          "B. Allows customers to deliver new solutions faster.",
          "C. Lowers operational complexity.",
          "D. Eliminates the need to encrypt data.",
          "E. Allows developers to control all patching related activities."
        ],
"correct_letter": "BC",
        "explanation": "AWS-managed services abstract server deployment, patching, OS upgrades, and scaling configurations, which directly **lowers operational complexity** (C) and frees developers to focus on writing code, allowing them to **deliver new solutions faster** (B).\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the following are use cases for Amazon S3? (Choose TWO)",
        "options": [
          "A. Hosting static websites.",
          "B. Hosting websites that require sustained high CPU utilization.",
          "C. Cost-effective database and log storage.",
          "D. A media store for the CloudFront service.",
          "E. Processing data streams at any scale."
        ],
"correct_letter": "AD",
        "explanation": "Amazon S3 is an object storage service designed to store files. It can serve static web assets (HTML, CSS, JS) directly as a **static website** (A) and serves as a highly scalable **origin media store for Amazon CloudFront CDN** distributions (D).\n\n\n---"
      },
      {
        "id": 13,
        "question": "What is the AWS’ recommendation regarding access keys?",
        "options": [
          "A. Delete all access keys and use passwords instead.",
          "B. Only share them with trusted people.",
          "C. Rotate them regularly.",
          "D. Save them within your application code."
        ],
        "correct_letter": "C",
        "explanation": "AWS security best practices recommend **rotating access keys regularly** to limit the lifetime of credentials and reduce the impact if they are accidentally leaked. They should never be saved within application code (D).\n\n\n---"
      },
      {
        "id": 14,
        "question": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
        "options": [
          "A. Key Pair",
          "B. Access Keys",
          "C. SDK",
          "D. MFA"
        ],
        "correct_letter": "D",
        "explanation": "**Multi-Factor Authentication (MFA)** is a security control that requires users to provide a secondary verification code from an approved MFA device in addition to their username and password.\n\n\n---"
      },
      {
        "id": 15,
        "question": "What is the benefit of using an API to access AWS Services?",
        "options": [
          "A. It improves the performance of AWS resources.",
          "B. It reduces the time needed to provision AWS resources.",
          "C. It reduces the number of developers necessary.",
          "D. It allows for programmatic management of AWS resources."
        ],
        "correct_letter": "D",
        "explanation": "Using APIs (directly or via AWS CLI/SDKs) allows developers to write code that automates resource provisioning, configuration, monitoring, and scaling.\n\n\n---"
      },
      {
        "id": 16,
        "question": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. Amazon S3",
          "C. Amazon EBS",
          "D. Amazon Glacier"
        ],
        "correct_letter": "C",
        "explanation": "For high-throughput transactional database workloads (like MySQL or Oracle) with high read/write activity installed on EC2, **Amazon EBS SSD-backed volumes** (like GP3 or Provisioned IOPS) provide the low-latency block storage required.\n\n\n---"
      },
      {
        "id": 17,
        "question": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
        "options": [
          "A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
          "B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
          "C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
          "D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Budgets** allows you to set custom RI Utilization or RI Coverage budgets and configure alerts (via email or SNS) to notify you if your Reserved Instance utilization drops below your desired threshold.\n\n\n---"
      },
      {
        "id": 18,
        "question": "What is the AWS service that provides five times the performance of a standard MySQL database?",
        "options": [
          "A. Amazon Aurora",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Neptune"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora** is a fully managed relational database engine compatible with MySQL and PostgreSQL that offers up to 5x the throughput of standard MySQL databases and 3x standard PostgreSQL.\n\n\n---"
      },
      {
        "id": 19,
        "question": "What does AWS Service Catalog provide?",
        "options": [
          "A. It enables customers to quickly find descriptions and use cases for AWS services.",
          "B. It enables customers to explore the different catalogs of AWS services.",
          "C. It simplifies organizing and governing commonly deployed IT services.",
          "D. It allows developers to deploy infrastructure on AWS using familiar programming languages."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Service Catalog** allows organizations to create, govern, and distribute catalogs of approved IT services (CloudFormation stacks) on AWS, simplifying self-service deployment while maintaining compliance.\n\n\n---"
      },
      {
        "id": 20,
        "question": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
        "options": [
          "A. Protecting credentials",
          "B. Logging access activity",
          "C. Patching the database software",
          "D. Operating system maintenance",
          "E. Creating access policies"
        ],
"correct_letter": "CD",
        "explanation": "Under the Shared Responsibility Model for fully managed services like DynamoDB, AWS manages the database software updates/patching (C) and the underlying host operating system maintenance (D). The customer is responsible for data modeling and IAM access control.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
        "options": [
          "A. AWS Snowball Migration Service",
          "B. AWS Application Discovery Service",
          "C. AWS DMS",
          "D. AWS Migration Hub"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Application Discovery Service** assists in migration planning by collecting configuration, usage, and behavior data from your on-premises servers to map dependencies and calculate TCO.\n\n\n---"
      },
      {
        "id": 22,
        "question": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
        "options": [
          "A. Amazon Machine Image",
          "B. AWS Cost Explorer",
          "C. AWS Cost & Usage Report",
          "D. Amazon CloudWatch"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Cost & Usage Report (CUR)** contains the most detailed and granular billing dataset available, breaking down costs down to hourly usage of specific resources and resource tags.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which statement best describes the concept of an AWS region?",
        "options": [
          "A. An AWS Region is a geographical location with a collection of Edge locations.",
          "B. An AWS Region is a virtual network dedicated only to a single AWS customer.",
          "C. An AWS Region is a geographical location with a collection of Availability Zones.",
          "D. An AWS Region represents the country where the AWS infrastructure exist."
        ],
        "correct_letter": "C",
        "explanation": "An **AWS Region** is a physical geographical location in the world where AWS hosts two or more physically isolated **Availability Zones (AZs)** connected via a dedicated low-latency fiber network.\n\n\n---"
      },
      {
        "id": 24,
        "question": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
        "options": [
          "A. SNS logs",
          "B. SQS logs",
          "C. CloudWatch Logs",
          "D. CloudTrail logs"
        ],
        "correct_letter": "D",
        "explanation": "**AWS CloudTrail** captures API activity history. Reviewing the CloudTrail event logs for the `DeleteBucket` action will reveal the identity (IAM user or role) that executed the call.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
        "options": [
          "A. Availability Zones",
          "B. Data sovereignty",
          "C. The number of reads and writes per second",
          "D. The nature of the queries",
          "E. Software bugs"
        ],
"correct_letter": "CD",
        "explanation": "Choosing the right database depends on transactional throughput requirements (reads/writes per second) (C) and the database access patterns/queries (relational SQL joins vs NoSQL key-value/document queries) (D).\n\n\n---"
      },
      {
        "id": 26,
        "question": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
        "options": [
          "A. Quickly identify resources that belong to a specific project.",
          "B. Quickly identify software solutions on AWS.",
          "C. Track API calls in your AWS account.",
          "D. Quickly identify deleted resources and their metadata.",
          "E. Track AWS spending across multiple resources."
        ],
"correct_letter": "AE",
        "explanation": "Tags are custom key-value pairs associated with resources. They are used to group and search resources by project/owner (A) and allocate/track cost distributions in billing reports (E).\n\n\n---"
      },
      {
        "id": 27,
        "question": "What are AWS shared controls?",
        "options": [
          "A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
          "B. Controls that a customer inherits from AWS.",
          "C. Controls that apply to both the infrastructure layer and customer layers.",
          "D. Controls that the customer and AWS collaborate together upon to secure the infrastructure."
        ],
        "correct_letter": "C",
        "explanation": "**Shared controls** are security settings that both AWS (for physical hosts/hypervisors) and the customer (for guest OS/databases) must implement independently in their respective spheres (e.g. Patch Management, Configuration Management).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
        "options": [
          "A. Build multi-region architectures to better serve global customers.",
          "B. Apply security at all layers.",
          "C. Implement strong Identity and Access controls.",
          "D. Use serverless architectures.",
          "E. Enable audit logging."
        ],
"correct_letter": "AD",
        "explanation": "The **Performance Efficiency** pillar advocates using **serverless architectures** (D) to remove operational overhead and deploying in **multiple regions** (A) to reduce network latency for international users.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
        "options": [
          "A. Protecting sensitive data.",
          "B. Patching of the underlying infrastructure.",
          "C. Setup and operation of managed databases.",
          "D. Maintaining consistent hardware components.",
          "E. Installing and configuring third-party software."
        ],
"correct_letter": "AE",
        "explanation": "With EC2 (IaaS), the customer manages everything inside the OS. This includes securing data (A) and installing/configuring databases and software (E). AWS manages physical hosting, hardware components, and hypervisors.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
        "options": [
          "A. Free commercial software licenses",
          "B. Free technical support",
          "C. Elastic resources",
          "D. On-site visits for auditing",
          "E. Cost Savings"
        ],
"correct_letter": "CE",
        "explanation": "The cloud offers resource elasticity (C) (instantly scale out/in) and cost savings (E) by trading expensive upfront hardware investments (CapEx) for low, variable pay-as-you-go costs (OpEx).\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
        "options": [
          "A. Amazon Inspector",
          "B. AWS Virtual Private Gateway",
          "C. AWS Batch",
          "D. Amazon ECS",
          "E. AWS Config"
        ],
"correct_letter": "AE",
        "explanation": "**Amazon Inspector** (A) performs automated vulnerability scanning on EC2/container instances.\n**AWS Config** (E) tracks resource settings changes over time, assessing configurations against compliance rules to verify auditing policies.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
        "options": [
          "A. Amazon EC2 is considered a Serverless Web Service.",
          "B. Amazon EC2 eliminates the need to invest in hardware upfront.",
          "C. Amazon EC2 can launch as many or as few virtual servers as needed.",
          "D. Amazon EC2 offers scalable computing."
        ],
        "correct_letter": "A",
        "explanation": "Amazon EC2 provides virtual servers (instances) and is classified as **Infrastructure as a Service (IaaS)**. It is **not** a serverless service because you must provision and manage the operating system and execution instances.\n\n\n---"
      },
      {
        "id": 33,
        "question": "What is the AWS Compute service that executes code only when triggered by events?",
        "options": [
          "A. AWS Lambda",
          "B. Amazon CloudWatch",
          "C. AWS Transit Gateway",
          "D. Amazon EC2"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Lambda** is an event-driven serverless compute service that executes code only when triggered by events (e.g. S3 file uploads, DynamoDB streams, or HTTP calls).\n\n\n---"
      },
      {
        "id": 34,
        "question": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
        "options": [
          "A. Amazon EBS Snapshots",
          "B. Amazon VPC",
          "C. AWS Managed Servers",
          "D. Amazon EC2 Instances"
        ],
        "correct_letter": "D",
        "explanation": "In AWS, virtual servers running in the cloud are called **Amazon EC2 Instances**.\n\n\n---"
      },
      {
        "id": 35,
        "question": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
        "options": [
          "A. AWS Secrets Manager",
          "B. AWS WAF",
          "C. AWS CAF",
          "D. Amazon EFS"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Cloud Adoption Framework (CAF)** provides structured guidance to help organizations design a strategic roadmap to migrate workloads successfully to the cloud.\n\n\n---"
      },
      {
        "id": 36,
        "question": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS TCO Calculator",
          "C. AWS Budgets",
          "D. AWS Pricing Calculator"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS TCO (Total Cost of Ownership) Calculator** (now integrated inside the AWS Pricing Calculator) compares the costs of running on-premises systems versus AWS to perform a financial cost-benefit analysis.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Using AWS Trusted Advisor to find underutilized resources.",
          "B. Using AWS CloudTrail to record user activities.",
          "C. Using AWS CloudFormation to manage infrastructure as code.",
          "D. Deploying an application in multiple Availability Zones."
        ],
        "correct_letter": "C",
        "explanation": "A primary design principle of the **Operational Excellence** pillar is \"Perform operations as code.\" Using **AWS CloudFormation** to manage Infrastructure as Code (IaC) automates deployments and keeps operations repeatable and documented.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
        "options": [
          "A. AWS allows them to pay later when their business succeed.",
          "B. AWS can build complete data centers faster than any other Cloud provider.",
          "C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
          "D. AWS removes the need to invest in operational expenditure.",
          "E. Using AWS allows companies to replace large capital expenditure with low variable costs."
        ],
"correct_letter": "CE",
        "explanation": "Startups choose AWS because it removes the need for expensive upfront server purchases (replacing CapEx with low variable OpEx) (E), and lets them focus on coding and marketing rather than datacenter construction, reducing time-to-market (C).\n\n\n---"
      },
      {
        "id": 39,
        "question": "What are the benefits of using DynamoDB? (Choose TWO)",
        "options": [
          "A. Automatically scales to meet required throughput capacity.",
          "B. Provides resizable instances to match the current demand.",
          "C. Supports both relational and non-relational data models.",
          "D. Offers extremely low (single-digit millisecond) latency.",
          "E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
        ],
"correct_letter": "AD",
        "explanation": "Amazon DynamoDB is a fully managed NoSQL database service that scales database throughput automatically (A) and provides single-digit millisecond latencies at any scale (D).\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
        "options": [
          "A. Versioning",
          "B. Deduplication",
          "C. Permissions",
          "D. Decryption",
          "E. Conversion"
        ],
"correct_letter": "AC",
        "explanation": "**Permissions** (C) (Bucket Policies/IAM) control and restrict unauthorized access to bucket contents.\n**Versioning** (A) preserves historical object files to prevent data loss from accidental deletes or overwrites.\n\n\n---"
      },
      {
        "id": 41,
        "question": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
        "options": [
          "A. AWS Partners",
          "B. AWS Artifact",
          "C. AWS Professional Services",
          "D. Amazon Athena",
          "E. Amazon PinPoint"
        ],
"correct_letter": "AC",
        "explanation": "The Migration Acceleration Program (MAP) uses APN Partners (A) and AWS Professional Services consultants (C) to assist enterprises with migrations, utilizing proven methodologies and cost incentives.\n\n\n---"
      },
      {
        "id": 42,
        "question": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
        "options": [
          "A. Deleting unused EBS volumes after terminating an EC2 instance.",
          "B. Deleting unused AutoScaling launch configuration.",
          "C. Deleting unused Elastic Load Balancers.",
          "D. Releasing unused Elastic IPs after terminating an EC2 instance."
        ],
        "correct_letter": "B",
        "explanation": "Storing Auto Scaling **Launch Configurations** or Launch Templates is completely free. Deleting them does not save money. However, unused EBS volumes (A), ELBs (C), and unallocated Elastic IPs (D) all carry hourly usage charges and must be cleaned up.\n\n\n---"
      },
      {
        "id": 43,
        "question": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Consolidated Billing"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Cost Explorer** is a free visualization interface that lets you view charts and analyze your cost and usage history from past months.\n\n\n---"
      },
      {
        "id": 44,
        "question": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
        "options": [
          "A. Running penetration tests.",
          "B. Reserving capacity.",
          "C. Data center operations.",
          "D. Auditing and regulatory compliance.",
          "E. Infrastructure security."
        ],
"correct_letter": "CE",
        "explanation": "Under the Shared Responsibility Model, AWS handles physical datacenter operations (C) and the baseline security of the physical/networking infrastructure (E). Running pen tests, managing compliance, and choosing billing configurations are customer responsibilities.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
        "options": [
          "A. Amazon Simple Email Service (Amazon SES)",
          "B. Amazon Simple Storage Service (Amazon S3)",
          "C. Amazon Simple Notification Service (Amazon SNS)",
          "D. Amazon Simple Queue Service (Amazon SQS)"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon SNS** has direct support for sending SMS text notifications to mobile numbers in over 200 countries globally.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which of the following allows you to create new RDS instances? (Choose TWO)",
        "options": [
          "A. AWS CodeDeploy",
          "B. AWS Quick Starts",
          "C. AWS CloudFormation",
          "D. AWS DMS",
          "E. AWS Management Console"
        ],
"correct_letter": "CE",
        "explanation": "You can provision new RDS database instances manually via the web-based **AWS Management Console** (E) or programmatically via **AWS CloudFormation** templates (C).\n\n\n---"
      },
      {
        "id": 47,
        "question": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
        "options": [
          "A. Low monthly instance maintenance costs",
          "B. Low-cost instance tagging",
          "C. Per-second instance billing",
          "D. Low instance start-up fees"
        ],
        "correct_letter": "C",
        "explanation": "AWS bills Amazon EC2 instances on a **per-second** basis (with a 1-minute minimum). This reduces compute costs by ensuring you do not pay for unused partial hours when spinning nodes up and down.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which AWS Group assists customers in achieving their desired business outcomes?",
        "options": [
          "A. AWS Security Team",
          "B. AWS Professional Services",
          "C. AWS Trusted Advisor",
          "D. AWS Concierge Support Team"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Professional Services** is a global team of consultants that partners with customer organizations to implement cloud migration plans and help achieve targeted business outcomes.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
        "options": [
          "A. AWS KMS",
          "B. AWS Service Control Policies (SCPs)",
          "C. Multi-Factor Authentication (MFA)",
          "D. Amazon Macie"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Key Management Service (KMS)** allows you to create, manage, rotate, and control access permissions to the cryptographic keys used to encrypt data across AWS services.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
        "options": [
          "A. AWS Well-Architected Tool",
          "B. AWS Artifact",
          "C. AWS Glue",
          "D. Amazon Chime"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Artifact** is a self-service compliance portal providing on-demand access to AWS's security and compliance documentation, such as SOC, ISO, and PCI compliance reports.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 4
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 5",
    "questions": [
      {
        "id": 1,
        "question": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
        "options": [
          "A. Least Privilege",
          "B. Pilot Light",
          "C. Fault Tolerance",
          "D. Multi-threading"
        ],
        "correct_letter": "C",
        "explanation": "**Fault Tolerance** refers to a system's ability to remain operational despite individual component failures. Implementing redundant EC2 instances across multiple Availability Zones under an Elastic Load Balancer (ELB) guarantees that if some nodes crash, the site stays online.\n\n\n---"
      },
      {
        "id": 2,
        "question": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
        "options": [
          "A. All up-front reservation",
          "B. All reserved instance payment options provide the same discount level",
          "C. Partial up-front reservation",
          "D. No up-front reservation"
        ],
        "correct_letter": "A",
        "explanation": "Reserved Instances support three payment tiers: All Upfront, Partial Upfront, and No Upfront. Paying the entire contract cost **All Upfront** at the start of the term secures the largest possible discount rate.\n\n\n---"
      },
      {
        "id": 3,
        "question": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
        "options": [
          "A. Access control",
          "B. Physical MFA devices",
          "C. Data encryption",
          "D. Unlimited storage",
          "E. Load balancing"
        ],
"correct_letter": "AC",
        "explanation": "**Access Control** (A) via IAM permissions and bucket policies restricts logical access to data files.\n**Data Encryption** (C) (using KMS or SSE protocols) encodes data at rest and in transit to protect it from unauthorized viewing.\n\n\n---"
      },
      {
        "id": 4,
        "question": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
        "options": [
          "A. 3 hours for the Linux instance and 5 hours for the CentOS instance.",
          "B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
          "C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
          "D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
        ],
        "correct_letter": "C",
        "explanation": "Amazon Linux EC2 instances are billed in **1-second increments** (minimum 1 minute), so the customer is charged for exactly 2 hours, 5 minutes, and 9 seconds.\nCertain third-party, commercial software, or custom operating system configurations (like Red Hat or some CentOS offerings) are billed in **1-hour increments** (rounded up to the nearest hour), meaning 4 hours, 23 minutes, and 7 seconds is billed as 5 hours.\n\n\n---"
      },
      {
        "id": 5,
        "question": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. AWS Operations Support",
          "C. AWS Support API",
          "D. AWS Personal Health Dashboard"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Support API** (accessible under Business or Enterprise support plans) enables customers to programmatically interact with and manage their support tickets, cases, and Trusted Advisor checks.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
        "options": [
          "A. AWS CLI",
          "B. AWS Security Groups",
          "C. AWS SDKs",
          "D. AWS Network Access Control Lists",
          "E. AWS CodeCommit"
        ],
"correct_letter": "AC",
        "explanation": "Developers and admins can configure IAM resources (users, groups, roles, and policies) programmatically using the **AWS CLI** (A) and **AWS SDKs** (C).\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
        "options": [
          "A. AWS Resource Groups",
          "B. IAM Policies",
          "C. IAM Roles",
          "D. IAM Users",
          "E. AWS Organizations"
        ],
"correct_letter": "CD",
        "explanation": "An **IAM Identity** represents a resource that can be authenticated. These include **IAM Users** (representing a person or application) (D) and **IAM Roles** (representing temporary access states for services/users) (C). Policies are permission documents attached to identities.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
        "options": [
          "A. Database Snapshots",
          "B. Multi-AZ Deployments",
          "C. Automated Backups",
          "D. Read Replicas"
        ],
        "correct_letter": "D",
        "explanation": "Amazon RDS **Read Replicas** enable you to run read-only copies of your database. Applications can direct query read traffic to these replicas, offloading processing strain from the primary write database.\n\n\n---"
      },
      {
        "id": 9,
        "question": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
        "options": [
          "A. Using the AWS ACM service",
          "B. Using Security Bulletins",
          "C. Using the AWS Management Console",
          "D. Using Compliance Resources"
        ],
        "correct_letter": "B",
        "explanation": "AWS publishes security bulletins and alerts on its public **AWS Security Bulletins** website to inform customers of security issues, vulnerabilities, and patches affecting AWS infrastructure and services.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
        "options": [
          "A. IAM Users",
          "B. Key Pair",
          "C. IAM Roles",
          "D. IAM Groups"
        ],
        "correct_letter": "C",
        "explanation": "An **IAM Role** does not have long-term passwords or access keys. Instead, assuming a role yields temporary security credentials (valid for minutes to hours) that allow users or systems to perform specific actions securely.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
        "options": [
          "A. AWS Global Accelerator",
          "B. AWS Application Load Balancer (ALB)",
          "C. Amazon CloudFront",
          "D. Transit VPC"
        ],
        "correct_letter": "B",
        "explanation": "An **Application Load Balancer (ALB)** distributes incoming application traffic (HTTP/HTTPS) evenly across multiple target servers (EC2 instances) running in parallel, enabling horizontal scaling.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the following integration approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
        "options": [
          "A. Use Software test automation tools.",
          "B. Use AWS CodeDeploy to build and automate your AWS environment.",
          "C. Use code to provision and operate your AWS infrastructure.",
          "D. Migrate all of your applications to a dedicated host."
        ],
        "correct_letter": "C",
        "explanation": "**Infrastructure as Code (IaC)** (such as using AWS CloudFormation templates or Terraform configurations) allows you to define your infrastructure state in code. This automates the provisioning process, ensuring consistency and eliminating manual human error.\n\n\n---"
      },
      {
        "id": 13,
        "question": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
        "options": [
          "A. Restrict any API call made through SDKs or CLI.",
          "B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
          "C. Require Multi-Factor Authentication (MFA) for all IAM User access.",
          "D. Set up two login passwords."
        ],
        "correct_letter": "C",
        "explanation": "Enabling **MFA** adds a critical security layer by requiring users to enter a code from a physical or virtual device in addition to their password, blocking access if credentials are stolen. Sharing IAM accounts (B) violates security standards.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which AWS Service offers volume discounts based on usage?",
        "options": [
          "A. Amazon VPC",
          "B. Amazon S3",
          "C. Amazon Lightsail",
          "D. AWS Cost Explorer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon S3** charges tier-based prices. As your total stored data increases (into larger Terabyte/Petabyte ranges), the per-GB monthly storage cost decreases, implementing volume discounts.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
        "options": [
          "A. The AWS Region’s security level.",
          "B. Data sovereignty.",
          "C. Cost.",
          "D. The planned number of VPCs.",
          "E. Geographic proximity to the company’s location."
        ],
"correct_letter": "BC",
        "explanation": "**Data Sovereignty/Compliance** (B): Regulations may mandate that user data remain within specific geographic boundaries (e.g. EU GDPR).\n**Cost** (C): Resource rates vary across AWS Regions based on localized operational and tax costs.\n*Note:* While geographic proximity is important, it focuses on proximity to **end-users** to minimize network latency, not proximity to the company itself (E).\n\n\n---"
      },
      {
        "id": 16,
        "question": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon Neptune",
          "C. Amazon ElastiCache",
          "D. DAX"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon ElastiCache** provides an in-memory caching layer (Redis or Memcached) that speeds up database read queries for relational databases like MySQL by caching frequent queries. DAX is specifically for DynamoDB caching, not MySQL.\n\n\n---"
      },
      {
        "id": 17,
        "question": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
        "options": [
          "A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
          "B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
          "C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
          "D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
        ],
        "correct_letter": "B",
        "explanation": "Auto Scaling Groups can launch and terminate instances across **multiple Availability Zones** within a Region, ensuring that if one zone suffers a physical power or network outage, the workload automatically continues running in other zones.\n\n\n---"
      },
      {
        "id": 18,
        "question": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
        "options": [
          "A. AWS helps customers invest more in capital expenditures.",
          "B. AWS automates all infrastructure operations, so customers save more on human resources costs.",
          "C. AWS continues to lower the cost of cloud computing for its customers.",
          "D. AWS secures AWS resources at no additional charge."
        ],
        "correct_letter": "C",
        "explanation": "AWS regularly reduces pricing for its services as a result of its scale, passing capital efficiency and infrastructure savings back to the consumer, widening the TCO advantage.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
        "options": [
          "A. Building a schema for an application.",
          "B. Replacing physical hardware.",
          "C. Creating a new hypervisor.",
          "D. Patch management of the underlying infrastructure.",
          "E. File system encryption."
        ],
"correct_letter": "AE",
        "explanation": "Under the Shared Responsibility Model, the customer is responsible for data security, configurations, and data design (security **in** the cloud). This includes encrypting storage volumes (E) and designing secure database schemas (A). AWS manages hardware and physical hypervisor maintenance.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
        "options": [
          "A. AWS CloudHSM",
          "B. U2F Security Key",
          "C. AWS Access Keys",
          "D. AWS Key Pair"
        ],
        "correct_letter": "B",
        "explanation": "AWS supports hardware-based MFA security keys that follow the **U2F / FIDO** security standards (e.g. YubiKeys) as physical second-factor verification devices.\n\n\n---"
      },
      {
        "id": 21,
        "question": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
        "options": [
          "A. Amazon SNS",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Elastic Beanstalk** is a Platform as a Service (PaaS). It accepts your .NET application code, deploys the required resources (servers, OS, load balancer), and handles scaling automatically, making it the fastest deployment path.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
        "options": [
          "A. The amount of time the instances will be running.",
          "B. Number of security groups.",
          "C. Allocated Elastic IP Addresses.",
          "D. Number of Hosted Zones.",
          "E. Number of instances."
        ],
"correct_letter": "BD",
        "explanation": "Security Groups are virtual firewalls and are completely free (B). Hosted Zones are a billing component of **Amazon Route 53**, not EC2 (D). Run time, count of instances, and Elastic IPs carry EC2-specific billing rates.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
        "options": [
          "A. AWS Data Pipeline",
          "B. AWS Storage Gateway",
          "C. Amazon Aurora",
          "D. Amazon EFS"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Storage Gateway** is a hybrid cloud storage service that allows on-premises systems to connect and extend their storage to AWS (saving local disk space by caching and backing up data to S3).\n\n\n---"
      },
      {
        "id": 24,
        "question": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
        "options": [
          "A. Amazon Simple Storage Service",
          "B. Amazon Elastic Block Store",
          "C. Amazon Elastic Container Service",
          "D. AWS Storage Gateway"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3** automatically scales to store trillions of files, offering massive storage capacity with tiered storage classes (like Intelligent-Tiering or Glacier) to minimize costs.\n\n\n---"
      },
      {
        "id": 25,
        "question": "You have just hired a sys-admin. You created a new IAM user for him. On his first day, you ask him to create snapshots of EBS volumes and save them in a new S3 bucket. However, he is unable to create snapshots or buckets. What might prevent him?",
        "options": [
          "A. EBS and S3 are accessible only to the root account owner.",
          "B. The systems administrator must contact AWS Support first to activate his new IAM account.",
          "C. There is not enough space in S3 to store the snapshots.",
          "D. There is a non-explicit deny to all new users."
        ],
        "correct_letter": "D",
        "explanation": "In AWS IAM, new users are created with **no permissions by default** (referred to as an implicit deny). You must explicitly attach policies (permissions) to the IAM user or group to allow them to create S3 buckets or EBS snapshots.\n\n\n---"
      },
      {
        "id": 26,
        "question": "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudFront",
          "C. AWS CloudFormation",
          "D. Amazon CloudWatch"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CloudTrail** records user activity, console changes, and API actions throughout the AWS account. This provides the auditor with a complete log of who accessed which resources and when.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the below options is true of Amazon Cloud Directory?",
        "options": [
          "A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
          "B. Amazon Cloud Directory enables the analysis of video and data streams in real time.",
          "C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
          "D. Amazon Cloud Directory allows for registration and management of domain names."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Cloud Directory** is a high-performance directory store that enables you to build multi-dimensional hierarchical directories of data (such as organization charts or course catalogs).\n\n\n---"
      },
      {
        "id": 28,
        "question": "A user has opened a “Production System Down” support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
        "options": [
          "A. 12 hours",
          "B. 15 minutes",
          "C. 24 hours",
          "D. One hour"
        ],
        "correct_letter": "D",
        "explanation": "Under the Business and Enterprise support plans, the response time target for a **Production System Down** case is **under 1 hour**. A \"Business Critical System Down\" (Enterprise support only) has a 15-minute response target.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the below options is a best practice for making your application on AWS highly available?",
        "options": [
          "A. Deploy the application to at least two Availability Zones.",
          "B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
          "C. Deploy the application code on at least two servers in the same Availability Zone.",
          "D. Rewrite the application code to handle all incoming requests."
        ],
        "correct_letter": "A",
        "explanation": "High availability requires setting up redundancy. Deploying resources across **at least two Availability Zones** ensures that if one zone experiences an outage, your application remains active in the other zone.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
        "options": [
          "A. Labor and IT costs.",
          "B. Cooling and power consumption.",
          "C. Amazon EBS computing power.",
          "D. Software architecture.",
          "E. Software compatibility."
        ],
"correct_letter": "AB",
        "explanation": "Direct on-premises server operations costs include **electricity/cooling** (B) and the **labor cost** of sysadmins and IT staff (A) required to physically build and maintain the systems.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
        "options": [
          "A. AWS Basic Support",
          "B. AWS Developer Support",
          "C. AWS Business Support",
          "D. AWS Enterprise Support"
        ],
        "correct_letter": "D",
        "explanation": "Only the **Enterprise Support** plan guarantees a technical response time target of **less than 15 minutes** for \"Business-Critical System Down\" events.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following AWS offerings are serverless services? (Choose TWO)",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. Amazon DynamoDB",
          "D. Amazon EMR",
          "E. Amazon RDS"
        ],
"correct_letter": "BC",
        "explanation": "AWS Lambda (compute) and DynamoDB (NoSQL database) run serverlessly; users do not manage or scale underlying EC2 host servers.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
        "options": [
          "A. Amazon GuardDuty",
          "B. AWS ACM",
          "C. Amazon Detective",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Certificate Manager (ACM)** enables you to easily provision, manage, and deploy SSL/TLS certificates for use with integrated AWS resources.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
        "options": [
          "A. AWS Config",
          "B. AWS OpsWorks",
          "C. AutoScaling",
          "D. AWS CloudFormation"
        ],
        "correct_letter": "B",
        "explanation": "**AWS OpsWorks** is a configuration management service that provides managed instances of Chef and Puppet, enabling automated configuration and deployment of servers.\n\n\n---"
      },
      {
        "id": 35,
        "question": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon EFS",
          "C. Amazon S3",
          "D. Amazon Instance Store"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon S3** stores files as objects and provides direct web URL accessibility (when configured with appropriate public/presigned permissions), making files downloadable over the internet.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
        "options": [
          "A. AWS WAF",
          "B. Amazon CloudWatch",
          "C. AWS Cloud9",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS WAF** (Web Application Firewall) integrates with Amazon CloudFront, allowing you to monitor and filter HTTP and HTTPS traffic requests sent to CloudFront distributions.\n\n\n---"
      },
      {
        "id": 37,
        "question": "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
        "options": [
          "A. On-demand Instances",
          "B. Dedicated Hosts",
          "C. Spot Instances",
          "D. Reserved Instances"
        ],
        "correct_letter": "D",
        "explanation": "For steady-state workloads running continuously throughout the year, **Reserved Instances** yield the highest cost savings (up to 72% off compared to On-Demand).\n\n\n---"
      },
      {
        "id": 38,
        "question": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
        "options": [
          "A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
          "B. Create an IAM role and attach a policy with Administrator access permissions.",
          "C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
          "D. Create an IAM user and attach a policy with Administrator access permissions."
        ],
        "correct_letter": "C",
        "explanation": "For individual personnel access, you should create a dedicated **IAM User** (C). To apply the principle of least privilege, attach a policy restricted strictly to DynamoDB access rather than full administrator rights.\n\n\n---"
      },
      {
        "id": 39,
        "question": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
        "options": [
          "A. Generate new IAM access keys every time you delegate permissions.",
          "B. Store the required AWS credentials directly within the application code.",
          "C. Use temporary security credentials (IAM roles) instead of long-term access keys.",
          "D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
        ],
        "correct_letter": "C",
        "explanation": "Best practice dictates assigning an **IAM Role** to an EC2 instance. This provides the running applications with automatically rotated temporary credentials, avoiding the risk of hardcoding long-term access keys.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
        "options": [
          "A. Use servers instead of managed services.",
          "B. Use existing third-party software licenses on AWS.",
          "C. Migrate production workloads to AWS edge locations instead of AWS Regions.",
          "D. Use AWS Outposts to run all workloads in a cost-optimized environment."
        ],
        "correct_letter": "B",
        "explanation": "Bring Your Own License (BYOL) allows customers to use existing software licenses (like Microsoft, Oracle) on AWS EC2 Dedicated Hosts or instances, avoiding repurchase fees.\n\n\n---"
      },
      {
        "id": 41,
        "question": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
        "options": [
          "A. Amazon SQS",
          "B. Virtual Private Gateway",
          "C. AWS Artifact",
          "D. Amazon CloudFront"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon SQS** provides message queues that allow decoupled microservices or application components to queue and process messages asynchronously.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
        "options": [
          "A. Amazon Connect",
          "B. AWS CLI",
          "C. AWS Identity and Access Management (IAM)",
          "D. Amazon SNS",
          "E. Amazon Virtual Private Cloud"
        ],
"correct_letter": "BC",
        "explanation": "Enabling virtual MFA devices is a security setting configured via the **AWS IAM Console** (C) or programmatically via the **AWS CLI** (B).\n\n\n---"
      },
      {
        "id": 43,
        "question": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
        "options": [
          "A. Vertically scaling EC2 instances.",
          "B. Running RDS instances in parallel.",
          "C. Vertically scaling RDS instances.",
          "D. Running EC2 instances in parallel."
        ],
        "correct_letter": "D",
        "explanation": "**Running EC2 instances in parallel** (horizontal scaling) allows you to distribute the binary processing workload across multiple machines, increasing processing speed and providing fault tolerance compared to scaling a single server vertically.\n\n\n---"
      },
      {
        "id": 44,
        "question": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Cost & Usage Report"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is the tool used to estimate cost architectures before creating the actual resources.\n\n\n---"
      },
      {
        "id": 45,
        "question": "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
        "options": [
          "A. Stop all running services and open an investigation.",
          "B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
          "C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
          "D. Open an investigation and delete any potentially compromised IAM users.",
          "E. Change your AWS root account password and the passwords of any IAM users."
        ],
"correct_letter": "DE",
        "explanation": "If unknown resources appear, your account credentials might be compromised. Best security practice is to immediately change passwords of the root account and IAM users (E) and identify and delete compromised credentials or user entities in IAM (D).\n\n\n---"
      },
      {
        "id": 46,
        "question": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
        "options": [
          "A. Elastic coupling",
          "B. Loosely coupling",
          "C. Scalable coupling",
          "D. Tightly coupling"
        ],
        "correct_letter": "B",
        "explanation": "**Loose coupling** isolates components from each other so that a failure in one does not cause a cascading failure across the rest of the application.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
        "options": [
          "A. Amazon Elastic File System",
          "B. Amazon Simple Storage Service",
          "C. Amazon Elastic Block Store",
          "D. AWS Storage Gateway"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon EFS** (Elastic File System) provides a fully managed shared file system that supports the NFSv4 protocol and can be mounted concurrently by thousands of instances.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
        "options": [
          "A. Create private connection to your data center.",
          "B. Achieve global high availability.",
          "C. Automate the process of provisioning new compute resources.",
          "D. Make synchronous replication of your data possible."
        ],
        "correct_letter": "D",
        "explanation": "The high-speed fiber lines linking AZs in a Region provide extremely low-latency connections, making real-time, **synchronous replication** of database records or block volumes (like in RDS Multi-AZ) feasible without slowing down application transactions.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
        "options": [
          "A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
          "B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
          "C. Lambda is AWS’ proprietary programming language for microservices.",
          "D. Lambda doesn’t support programming languages; it is a serverless compute service.",
          "E. Lambda can support any programming language using an API."
        ],
"correct_letter": "BE",
        "explanation": "AWS Lambda natively supports node.js, Python, Java, Go, C#, PowerShell, and Ruby (B). It also supports a Runtime API that allows executing custom runtimes for **any other programming language** (E) (e.g. C++ or Rust).\n\n\n---"
      },
      {
        "id": 50,
        "question": "What are the capabilities of AWS X-Ray? (Choose TWO)",
        "options": [
          "A. Automatically decouples application components.",
          "B. Facilitates tracking of user requests to identify application issues.",
          "C. Helps improve application performance.",
          "D. Deploys applications to Amazon EC2 instances.",
          "E. Deploys applications to on-premises servers."
        ],
"correct_letter": "BC",
        "explanation": "**AWS X-Ray** traces user requests as they traverse distributed microservices (B), identifying latency bottlenecks and errors, which directly assists developers in **improving application performance** (C).\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 5
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 6",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following is true regarding the AWS availability zones and edge locations?",
        "options": [
          "A. Edge locations are located in separate Availability Zones worldwide to serve global customers.",
          "B. An availability zone exists within an edge location to distribute content globally with low latency.",
          "C. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
          "D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
        ],
        "correct_letter": "D",
        "explanation": "Availability Zones (AZs) are physically isolated datacenters within a specific AWS Region. **Edge Locations** are separate, global endpoints operated by AWS to cache web content close to users (located in major cities globally, outside AWS Regions).\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
        "options": [
          "A. 24x7 access to customer service",
          "B. Access to Cloud Support Engineers via email only during business hours",
          "C. Access to the Infrastructure Event Management (IEM) feature for additional fee",
          "D. 24x7 access to the TAM feature",
          "E. Partial access to the core Trusted Advisor checks"
        ],
"correct_letter": "AC",
        "explanation": "**Business Support** provides 24x7 support access via phone, email, and chat with technical support engineers (A).\nIt allows enrollment in the **Infrastructure Event Management (IEM)** service for an additional fee to help prepare for product launches or migration events (C).\n*Note:* Access to a Technical Account Manager (TAM) requires the Enterprise support plan (D).\n\n\n---"
      },
      {
        "id": 3,
        "question": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Personalize",
          "C. Amazon Cognito",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Cognito User Pools** manage user sign-in, signup, and authentication. It natively supports social identity federation, allowing users to authenticate using external identities like Apple, Google, Facebook, or Amazon.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
        "options": [
          "A. AWS CloudFormation",
          "B. AWS Config",
          "C. AWS CloudTrail",
          "D. AWS Auto Scaling"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CloudFormation** allows you to model, provision, and manage AWS resource configurations programmatically using JSON/YAML text files as **Infrastructure as Code (IaC)**, which can be reused to launch identical configurations.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
        "options": [
          "A. Eliminates the need to monitor servers and applications.",
          "B. Manages all the compliance and auditing tasks.",
          "C. Provides custom hardware to meet any specification.",
          "D. Eliminates the need to guess on infrastructure capacity needs.",
          "E. Enables customers to trade their capital expenses for operational expenses."
        ],
"correct_letter": "DE",
        "explanation": "Key advantages of cloud computing include:\n**Stop guessing capacity** (D) because you can scale resources up or down on demand.\n**Trade capital expense for variable/operational expense** (E) paying only for what you consume rather than purchasing physical infrastructure upfront.\n\n\n---"
      },
      {
        "id": 6,
        "question": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
        "options": [
          "A. AWS Fargate",
          "B. Amazon Elastic Compute Cloud",
          "C. Amazon RDS",
          "D. AWS Database Migration service (DMS)",
          "E. AWS Lambda"
        ],
"correct_letter": "BC",
        "explanation": "SQL Server can be deployed on virtual machines in **Amazon EC2** (giving you OS administration control) (B) or as a managed database service on **Amazon RDS for SQL Server** (C). DMS is a database replication tool, not a database host environment.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which AWS Service can perform health checks on Amazon EC2 instances?",
        "options": [
          "A. AWS CloudFormation",
          "B. Amazon Route 53",
          "C. Amazon Chime",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Route 53** can perform continuous health checks on target endpoints (such as web server instances). If an instance is found unhealthy, Route 53 automatically routes DNS traffic away from it to healthy destinations.\n\n\n---"
      },
      {
        "id": 8,
        "question": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
        "options": [
          "A. Amazon Comprehend",
          "B. AWS IAM",
          "C. Amazon Polly",
          "D. Amazon Rekognition"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Rekognition** is a computer vision service powered by deep learning that analyzes images and videos for facial recognition, object detection, text in images, and content moderation.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
        "options": [
          "A. Amazon Neptune",
          "B. Amazon CloudSearch",
          "C. Microsoft SQL Server on Amazon EC2",
          "D. MySQL on Amazon EC2",
          "E. Amazon RDS for MySQL"
        ],
"correct_letter": "AE",
        "explanation": "**Amazon Neptune** (A) is a fully managed graph database service.\n**Amazon RDS for MySQL** (E) is a managed relational database service. SQL Server/MySQL hosted directly on EC2 are self-managed databases.\n\n\n---"
      },
      {
        "id": 10,
        "question": "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
        "options": [
          "A. EC2 On-Demand Instances",
          "B. EC2 Reserved Instances - No Upfront",
          "C. EC2 Spot Instances",
          "D. EC2 Reserved Instances - All Upfront"
        ],
        "correct_letter": "C",
        "explanation": "**Spot Instances** provide up to 90% discount over On-Demand rates by utilizing spare AWS compute capacity. Since the processing jobs are periodic and can tolerate interruptions without losing work, Spot instances are the most cost-effective solution.\n\n\n---"
      },
      {
        "id": 11,
        "question": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
        "options": [
          "A. AWS account owner",
          "B. AWS technical account manager",
          "C. AWS security team",
          "D. AWS cloud support engineers"
        ],
        "correct_letter": "A",
        "explanation": "Only the **AWS account owner** (the root account user or an administrator IAM identity within that account) holds authorization to configure IAM permissions and grant access. AWS support engineers/TAMs cannot manage credentials or access customer account controls.\n\n\n---"
      },
      {
        "id": 12,
        "question": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
        "options": [
          "A. AWS File Transfer Acceleration",
          "B. AWS Server Migration Service",
          "C. AWS Database Migration Service",
          "D. AWS Application Discovery Service"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Server Migration Service (SMS)** (and its modern successor, AWS Application Migration Service - MGN) automates and migrates physical, VMware, or Hyper-V virtual machines from on-premises to Amazon EC2.\n\n\n---"
      },
      {
        "id": 13,
        "question": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
        "options": [
          "A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
          "B. It applies advanced IAM security features automatically.",
          "C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
          "D. It allows you to model your entire infrastructure in just a text file.",
          "E. It compiles and builds application code in a timely manner."
        ],
"correct_letter": "CD",
        "explanation": "CloudFormation enables developers to define infrastructure setups in a JSON/YAML configuration text file (D) and automates the provisioning, modifications, and deletion of resource stacks safely (C).\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
        "options": [
          "A. On-premises",
          "B. Mixed",
          "C. Hybrid",
          "D. Cloud"
        ],
        "correct_letter": "C",
        "explanation": "A **Hybrid** cloud deployment bridges cloud-based resources (AWS) with existing on-premises infrastructure (private datacenters).\n\n\n---"
      },
      {
        "id": 15,
        "question": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
        "options": [
          "A. CloudEndure Disaster Recovery",
          "B. CloudEndure Migration",
          "C. AWS Backup",
          "D. AWS Glue"
        ],
        "correct_letter": "A",
        "explanation": "**CloudEndure Disaster Recovery** (and its modern successor, AWS Elastic Disaster Recovery - DRS) continuously replicates workloads (databases and VMs) to a lightweight staging area in another AWS Region, allowing near-instantaneous recovery (within minutes) during a regional disaster.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
        "options": [
          "A. S3 Standard-IA",
          "B. S3 Intelligent-Tiering",
          "C. S3 Glacier Deep Archive",
          "D. S3 Standard"
        ],
        "correct_letter": "D",
        "explanation": "Static assets for an active, popular website have high access frequencies. **Amazon S3 Standard** is designed for high-frequency access data, offering low latency, high throughput, and zero retrieval fees.\n\n\n---"
      },
      {
        "id": 17,
        "question": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
        "options": [
          "A. In another Edge location.",
          "B. In another Region.",
          "C. In another VPC.",
          "D. In another Availability Zone."
        ],
        "correct_letter": "B",
        "explanation": "Geographical redundancy requires storing backups in a completely separate **AWS Region** (geographically separated by hundreds of miles). Availability Zones are located within the same local region, and Edge locations do not support custom backup storage.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which statement is true in relation to the security of Amazon EC2?",
        "options": [
          "A. You should use instance store volumes to store login data.",
          "B. You should regularly patch the operating system and applications on your EC2 instances.",
          "C. You should deploy critical components of your application in the Availability Zone that you trust.",
          "D. You can track all API calls using Amazon Athena."
        ],
        "correct_letter": "B",
        "explanation": "According to the Shared Responsibility Model, AWS manages physical security and infrastructure, while the customer is responsible for guest operating system patching and application security configurations (B).\n\n\n---"
      },
      {
        "id": 19,
        "question": "What does AWS Cost Explorer provide to help manage your AWS spend?",
        "options": [
          "A. Cost comparisons between AWS Cloud environments and on-premises environments.",
          "B. Accurate estimates of AWS service costs based on your expected usage.",
          "C. Consolidated billing.",
          "D. Highly accurate cost forecasts for up to 12 months ahead."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Cost Explorer** lets you visualize and analyze your cost and usage history. It also generates cost forecasts for up to the next 12 months, assisting with cloud budget planning.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
        "options": [
          "A. RDS Single-AZ",
          "B. RDS Write Replica",
          "C. RDS Snapshots",
          "D. RDS Multi-AZ"
        ],
        "correct_letter": "D",
        "explanation": "**RDS Multi-AZ Deployments** replicate database changes synchronously to a standby instance in another Availability Zone. If the primary instance goes down, RDS executes automatic failover to the standby node.\n\n\n---"
      },
      {
        "id": 21,
        "question": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
        "options": [
          "A. Deleting all EBS volumes attached to the instances.",
          "B. You cannot minimize charges for on-demand instances.",
          "C. Terminating the instances.",
          "D. Stopping the instances."
        ],
        "correct_letter": "D",
        "explanation": "Stopping your On-Demand instances when they are not in use (e.g. over weekends or nights) halts EC2 compute charges. You only pay for the EBS volume storage while the instances are in a stopped state.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following strategies helps protect your AWS root account?",
        "options": [
          "A. Delete root user access keys if you do not need them.",
          "B. Apply MFA for the root account and use it for all of your work.",
          "C. Access the root account only from your personal Mobile Phone.",
          "D. Only share your AWS account password or access keys with trusted persons."
        ],
        "correct_letter": "A",
        "explanation": "Standard security best practices recommend deleting any access keys for the root account to prevent accidental exposure of full-admin credentials. You should create dedicated IAM users for day-to-day administrative activities rather than using root (B is incorrect).\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
        "options": [
          "A. The size of volumes provisioned per month.",
          "B. The compute capacity you consume.",
          "C. The amount of data you have stored in snapshots.",
          "D. The compute time you consume.",
          "E. The number of Snowball storage devices you request."
        ],
"correct_letter": "AC",
        "explanation": "EBS pricing is based on:\nThe volume capacity (GBs) provisioned per month (A).\nThe volume type (e.g., GP3, IO2) and any provisioned IOPS.\nThe storage space consumed by EBS Snapshots in S3 (C).\n\n\n---"
      },
      {
        "id": 24,
        "question": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
        "options": [
          "A. Attach a separate IAM policy for each individual account.",
          "B. Apply the Principle of Least Privilege.",
          "C. For security purposes, you should not grant any permission to the DevOps team.",
          "D. Create six different IAM passwords."
        ],
        "correct_letter": "B",
        "explanation": "The **Principle of Least Privilege** is a standard security guideline recommending that you grant users only the minimum permissions required to perform their specific job responsibilities.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which of the following has the greatest impact on cost? (Choose TWO)",
        "options": [
          "A. Compute charges",
          "B. The number of services used",
          "C. Data Transfer In charges",
          "D. Data Transfer Out charges",
          "E. The number of IAM roles provisioned"
        ],
"correct_letter": "AD",
        "explanation": "The main drivers of cloud costs are compute resources (instances, databases, running runtimes) (A) and egress bandwidth costs (**Data Transfer Out** to the internet) (D). Data Transfer In is free, and creating IAM roles is free.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Who from the following will get the largest discount?",
        "options": [
          "A. A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
          "B. A user who chooses to buy Reserved, Convertible, All upfront instances.",
          "C. A user who chooses to buy Reserved, Standard, No upfront instances.",
          "D. A user who chooses to buy Reserved, Standard, All upfront instances."
        ],
        "correct_letter": "D",
        "explanation": "**Standard Reserved Instances** yield higher discount rates than Convertible Reserved Instances. **All Upfront** payment models offer larger discounts than No Upfront or Partial Upfront models. Standard, All Upfront RIs yield the largest total discount.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an available option when purchasing Amazon EC2 instances?",
        "options": [
          "A. The ability to bid to get the lowest possible prices.",
          "B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
          "C. The ability to buy Dedicated Instances for up to 90% discount.",
          "D. The ability to pay upfront to get lower hourly costs."
        ],
        "correct_letter": "D",
        "explanation": "Paying upfront (All Upfront or Partial Upfront) for Reserved Instances allows you to achieve lower effective hourly rates. AWS no longer uses a bidding model for Spot Instances (which fluctuate based on real-time capacity supply and demand).\n\n\n---"
      },
      {
        "id": 28,
        "question": "What does the term “Economies of scale” mean?",
        "options": [
          "A. It means that you save more when you consume more.",
          "B. It means as more time passes using AWS, you pay more for its services.",
          "C. It means that AWS will continuously lower costs as it grows.",
          "D. It means that you have the ability to pay as you go."
        ],
        "correct_letter": "C",
        "explanation": "**Economies of scale** refers to the operational savings AWS achieves by purchasing hardware and bandwidth in massive volumes. AWS passes these savings back to customers by continuously lowering service prices.\n\n\n---"
      },
      {
        "id": 29,
        "question": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
        "options": [
          "A. AWS Auto Scaling",
          "B. Amazon Elastic Compute Cloud",
          "C. Amazon Elastic File System",
          "D. Amazon ElastiCache"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Auto Scaling** monitors applications and automatically adjusts compute capacity (adding or removing EC2 instances) to match changing traffic requirements, ensuring consistent performance.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the below options is true of Amazon VPC?",
        "options": [
          "A. Amazon VPC allows customers to control user interactions with all other AWS resources.",
          "B. AWS Customers have complete control over their Amazon VPC virtual networking environment.",
          "C. AWS is responsible for all the management and configuration details of Amazon VPC.",
          "D. Amazon VPC helps customers to review their AWS architecture and adopt best practices."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Virtual Private Cloud (VPC)** lets you provision a logically isolated section of the AWS Cloud where you have complete control over virtual networking features, including subnets, IP ranges, routing tables, and gateways.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS TCO Calculator"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS TCO (Total Cost of Ownership) Calculator** (which is now integrated inside the AWS Pricing Calculator) is used to perform a cost-benefit analysis by comparing the costs of running your workloads on-premises versus on AWS.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
        "options": [
          "A. AWS Config",
          "B. Amazon Redshift",
          "C. Amazon MQ",
          "D. AWS Trusted Advisor",
          "E. Amazon Cognito"
        ],
"correct_letter": "AD",
        "explanation": "**AWS Config** (A) continuously records and audits configuration settings to evaluate compliance against organizational rules.\n**AWS Trusted Advisor** (D) scans your environment against AWS best practices to provide real-time checks across security, cost, and fault tolerance.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
        "options": [
          "A. AWS OpsWorks",
          "B. AWS CloudFormation",
          "C. AWS Quick Starts",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS OpsWorks** is a managed configuration service that provides automation environments using Chef and **Puppet** to configure and maintain virtual servers.\n\n\n---"
      },
      {
        "id": 34,
        "question": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
        "options": [
          "A. Amazon Kinesis",
          "B. Amazon QuickSight",
          "C. AWS CodeDeploy",
          "D. Amazon Athena"
        ],
        "correct_letter": "C",
        "explanation": "**AWS CodeDeploy** is a managed deployment service that automates software deployment to various compute services, including Amazon EC2 instances, AWS Lambda functions, AWS Fargate services, or on-premises servers.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Select the services that are server-based: (Choose TWO)",
        "options": [
          "A. Amazon RDS",
          "B. Amazon DynamoDB",
          "C. AWS Lambda",
          "D. AWS Fargate",
          "E. Amazon EMR"
        ],
"correct_letter": "AE",
        "explanation": "**Amazon RDS** (A) deploys relational databases directly on virtual server instances.\n**Amazon EMR** (E) spins up big data clusters of EC2 server instances. DynamoDB, Lambda, and Fargate are serverless services.\n\n\n---"
      },
      {
        "id": 36,
        "question": "What best describes penetration testing?",
        "options": [
          "A. Testing your application’s response time from different locations.",
          "B. Testing your network to find security vulnerabilities that an attacker could exploit.",
          "C. Testing your instances to check for the unhealthy ones.",
          "D. Testing your software for bugs and errors."
        ],
        "correct_letter": "B",
        "explanation": "**Penetration testing** is the practice of simulating attacks on your systems, applications, and networks to identify security weaknesses before malicious actors can exploit them.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
        "options": [
          "A. Enables you to backup extremely large amounts of data at very low costs.",
          "B. Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
          "C. Enables you to analyze and process extremely large amounts of data in a timely manner.",
          "D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
          "E. Enables you to easily run and manage Docker containers."
        ],
"correct_letter": "CD",
        "explanation": "**Amazon EMR** (Elastic MapReduce) is a cloud-based big data platform used to process and analyze massive datasets (C) by running and scaling open-source frameworks like Apache Spark, Hadoop, Presto, and Hive (D).\n\n\n---"
      },
      {
        "id": 38,
        "question": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?",
        "options": [
          "A. There is no chat feature in AWS support.",
          "B. The chat feature is available for all plans for an additional fee, but you have to request it first.",
          "C. At a minimum, upgrade to Business support plan.",
          "D. Upgrade from the Basic Support plan to Developer Support."
        ],
        "correct_letter": "C",
        "explanation": "The Basic plan is free and only handles billing issues. The Developer support plan only allows email submissions. You must upgrade to the **Business** (or Enterprise) support plan to access 24/7 technical support via phone, email, and chat.\n\n\n---"
      },
      {
        "id": 39,
        "question": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
        "options": [
          "A. AWS Fargate",
          "B. AWS Batch",
          "C. Amazon Personalize",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Elastic Beanstalk** is an easy-to-use PaaS service for deploying and scaling web applications. The developer can upload their application code, and Beanstalk automatically handles provisioning, load balancing, and scaling without requiring cloud architecture experience.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
        "options": [
          "A. With AWS, you replace low upfront expenses with large variable payments.",
          "B. With AWS, you replace low upfront expenses with large fixed payments.",
          "C. With AWS, you replace large upfront expenses with low fixed payments.",
          "D. With AWS, you replace large capital expenses with low variable payments."
        ],
        "correct_letter": "D",
        "explanation": "The pay-as-you-go pricing model allows customers to trade large capital expenses (CapEx for physical servers) for low, variable operating expenses (OpEx), paying only for what they consume.\n\n\n---"
      },
      {
        "id": 41,
        "question": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
        "options": [
          "A. Database setup",
          "B. Network traffic protection",
          "C. Management of the operating system",
          "D. Access management",
          "E. Management of firewall rules"
        ],
"correct_letter": "AC",
        "explanation": "As a managed service, Amazon RDS handles database provisioning and setup (A), physical hosting, backups, patching, and guest operating system management (C). The customer is responsible for managing application-level access (D) and security group firewall rules (E).\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which of the following strategies help analyze costs in AWS?",
        "options": [
          "A. Using tags to group resources",
          "B. Using AWS CloudFormation to automate the deployment of resources",
          "C. Deploying resources of the same type in different regions",
          "D. Configuring Amazon Inspector to automatically analyze costs and email reports"
        ],
        "correct_letter": "A",
        "explanation": "Allocating **cost allocation tags** to resources allows you to group and categorize expenses by project, owner, or environment in billing reports, making cost analysis simple.\n\n\n---"
      },
      {
        "id": 43,
        "question": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon Comprehend",
          "C. AWS Snowmobile",
          "D. AWS VPN"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Direct Connect** creates a dedicated, private physical network connection between customer data centers and AWS. This bypasses the public internet, offering highly consistent bandwidth and throughput.\n\n\n---"
      },
      {
        "id": 44,
        "question": "What is the main benefit of the AWS Storage Gateway service?",
        "options": [
          "A. It automates the process of building, maintaining, and running ETL jobs.",
          "B. It provides physical devices to migrate data from on premises to AWS.",
          "C. It allows integration of on-premises IT environments with Cloud Storage.",
          "D. It provides hardware-based key storage for regulatory compliance."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Storage Gateway** is a hybrid cloud storage service that bridges local IT environments with AWS storage services (like S3, EBS, and Glacier) through a local appliance.\n\n\n---"
      },
      {
        "id": 45,
        "question": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
        "options": [
          "A. Amazon S3 Glacier Deep Archive",
          "B. Amazon S3 Standard-Infrequent Access",
          "C. Amazon S3 Glacier",
          "D. Instance Store"
        ],
        "correct_letter": "B",
        "explanation": "**S3 Standard-IA** is designed for infrequently accessed data that requires rapid, immediate retrieval. Glacier storage classes are cheaper for storage but take minutes to hours to retrieve. Instance stores are ephemeral and will lose data on instance stop/termination, so they are not suitable for backups.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
        "options": [
          "A. AWS Global Accelerator",
          "B. AWS Data Pipeline",
          "C. AWS DAX Accelerator",
          "D. AWS Transfer Acceleration"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Global Accelerator** uses the AWS global network infrastructure to route user traffic to the optimal endpoint, improving the availability and performance of applications globally.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Why are Serverless Architectures more economical than Server-based Architectures?",
        "options": [
          "A. Serverless Architectures use new powerful computing devices.",
          "B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
          "C. When you reserve serverless capacity, you will get large discounts compared to server reservation.",
          "D. With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
        ],
        "correct_letter": "B",
        "explanation": "Serverless computing bills customers only during code execution. Traditional server-based models run virtual machines constantly, incurring billing hours even when servers are idle.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
        "options": [
          "A. Point-to-point connectivity between an on-premises data center and AWS.",
          "B. Detects configuration changes in the AWS environment.",
          "C. DNS configuration and management.",
          "D. Manages global application traffic through a variety of routing types.",
          "E. Provides infrastructure security optimization recommendations."
        ],
"correct_letter": "CD",
        "explanation": "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) service. It handles DNS configuration and domain registration (C) and directs global application traffic using routing policies like latency, failover, and geolocation (D).\n\n\n---"
      },
      {
        "id": 49,
        "question": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
        "options": [
          "A. AWS Snowmobile",
          "B. AWS Import/Export",
          "C. AWS DMS",
          "D. AWS Snowball"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Snowball Edge** is a physical data transfer device. A single Snowball holds up to 80TB or 100TB, so a few Snowball devices can securely and cost-effectively migrate 200 Terabytes of data, avoiding expensive bandwidth costs. Snowmobile is designed for petabyte/exabyte scales (tens of PBs).\n\n\n---"
      },
      {
        "id": 50,
        "question": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon Athena",
          "C. AWS Cloud9",
          "D. Amazon ElastiCache for Redis"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon ElastiCache for Redis** is an in-memory data store that offers sub-millisecond response latencies, making it ideal for real-time IoT data processing, gaming, or caching.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 6
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 7",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
        "options": [
          "A. Delete the encryption keys once your data is encrypted.",
          "B. With AWS you do not need to worry about encryption.",
          "C. Enable S3 Encryption.",
          "D. Encrypt the data prior to uploading it.",
          "E. Delete all IAM users that have access to S3."
        ],
"correct_letter": "CD",
        "explanation": "Data stored on Amazon S3 can be secured using:\n**Server-Side Encryption** (C) where S3 encrypts objects when saving them to disks inside AWS datacenters.\n**Client-Side Encryption** (D) where you encrypt files locally before transmitting/uploading them to S3.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS service helps developers compile and test their code?",
        "options": [
          "A. AWS CodeDeploy",
          "B. AWS CodeCommit",
          "C. CloudEndure",
          "D. AWS CodeBuild"
        ],
        "correct_letter": "D",
        "explanation": "**AWS CodeBuild** is a fully managed continuous integration (CI) service that compiles source code, runs unit tests, and packages software artifacts for deployment.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
        "options": [
          "A. Using default encryption for any number of S3 buckets.",
          "B. The number of EBS volumes attached to your instances.",
          "C. The storage class used for the objects stored.",
          "D. Creating and deleting S3 buckets.",
          "E. The total size in gigabytes of all objects stored."
        ],
"correct_letter": "CE",
        "explanation": "Key S3 cost drivers are:\nThe **Storage Class** used (e.g. S3 Standard costs more per GB than S3 Glacier) (C).\nThe **Total volume (GB/TB)** stored (E).\n*Note:* Creating buckets or applying default encryption carries no extra charges.\n\n\n---"
      },
      {
        "id": 4,
        "question": "What does the Amazon CloudFront service provide? (Choose TWO)",
        "options": [
          "A. Tracks user activity and API usage.",
          "B. Increases application availability by caching at the edge.",
          "C. Enables faster disaster recovery.",
          "D. Stores archived data at very low costs.",
          "E. Delivers content to end users with low latency."
        ],
"correct_letter": "BE",
        "explanation": "**Amazon CloudFront** is a CDN that caches static/dynamic assets at global Edge Locations. This **delivers content with low latency** to users globally (E) and offloads requests from origin servers, **increasing application availability** (B).\n\n\n---"
      },
      {
        "id": 5,
        "question": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
        "options": [
          "A. Amazon Lightsail",
          "B. Amazon Connect",
          "C. AWS Direct Connect",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Connect** is a fully managed cloud contact center service that makes it simple to establish customer service centers at any scale.\n\n\n---"
      },
      {
        "id": 6,
        "question": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
        "options": [
          "A. Using the AWS Cost & Usage Report.",
          "B. Using the AWS Total Cost of Ownership (TCO) dashboard.",
          "C. Using the AWS CloudWatch logs dashboard.",
          "D. Using the Amazon VPC dashboard."
        ],
        "correct_letter": "A",
        "explanation": "The **AWS Cost & Usage Report (CUR)** provides the most granular database of billing information, allowing you to audit all costs applied to your accounts.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
        "options": [
          "A. Convertible",
          "B. Expedited",
          "C. Bulk",
          "D. Spot",
          "E. Standard"
        ],
"correct_letter": "AE",
        "explanation": "The two primary classes of EC2 Reserved Instances are:\n**Standard RIs** (E): Provides the highest discount but limited attribute modifications.\n**Convertible RIs** (A): Offers slightly lower discounts but allows changing instance families, operating systems, and tenancies over the term.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Config",
          "C. Amazon CloudWatch",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is a self-service compliance portal providing on-demand access to AWS security and compliance documents (such as SOC or PCI reports and ISO certifications).\n\n\n---"
      },
      {
        "id": 9,
        "question": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
        "options": [
          "A. AWS Resource Groups",
          "B. AWS Placement Groups",
          "C. AWS Management Console",
          "D. AWS Tag Editor"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Resource Groups** lets you organize and consolidate AWS resources (like EC2 instances, S3 buckets, RDS nodes) based on environment tags, providing a single consolidated custom view to monitor and manage each environment's resources.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service collects metrics from running EC2 instances?",
        "options": [
          "A. Amazon Inspector",
          "B. Amazon CloudWatch",
          "C. AWS CloudFormation",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch** is the main monitoring service in AWS that collects resource utilization metrics (CPU, disk reads/writes, network in/out) from EC2 instances and other AWS services.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
        "options": [
          "A. Amazon Detective",
          "B. AWS X-Ray",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "B",
        "explanation": "**AWS X-Ray** helps developers trace requests and debug distributed applications to map exact service dependencies and identify latency and performance bottlenecks.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the following compute resources are serverless? (Choose TWO)",
        "options": [
          "A. Amazon EC2",
          "B. AWS Fargate",
          "C. AWS Lambda",
          "D. Amazon ECS",
          "E. Amazon EMR"
        ],
"correct_letter": "BC",
        "explanation": "AWS Lambda (function executions) and AWS Fargate (serverless container engine) are serverless compute models that automate resource capacity provisioning without guest OS or host management.\n\n\n---"
      },
      {
        "id": 13,
        "question": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
        "options": [
          "A. Use EC2 Dedicated Hosts",
          "B. Use EC2 Reserved Instances",
          "C. Use EC2 Spot Instances",
          "D. Use EC2 On-demand Instances"
        ],
        "correct_letter": "A",
        "explanation": "**EC2 Dedicated Hosts** provision physical host servers dedicated solely to a single customer's use, enabling adherence to strict compliance policies that require complete hardware isolation.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
        "options": [
          "A. Tagging Enforcement",
          "B. Architecture Optimization",
          "C. Budgeting Processes",
          "D. Resource Controls"
        ],
        "correct_letter": "B",
        "explanation": "**Architecture Optimization** involves continuously refining deployed architectures, analyzing usage metrics, and applying Well-Architected principles to implement cost-efficient solutions and right-sizing.\n\n\n---"
      },
      {
        "id": 15,
        "question": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
        "options": [
          "A. RedShift",
          "B. RDS",
          "C. CloudHSM",
          "D. DMS"
        ],
        "correct_letter": "B",
        "explanation": "Financial systems require ACID compliance to guarantee database transaction reliability. Relational databases running on **Amazon RDS** natively support ACID transactions.\n\n\n---"
      },
      {
        "id": 16,
        "question": "What can you use to assign permissions directly to an IAM user?",
        "options": [
          "A. IAM Identity",
          "B. IAM Group",
          "C. IAM Role",
          "D. IAM Policy"
        ],
        "correct_letter": "D",
        "explanation": "Permissions are defined in JSON documents called **IAM Policies**. These policies must be attached directly to an IAM User (or group/role) to grant resource access permissions.\n\n\n---"
      },
      {
        "id": 17,
        "question": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
        "options": [
          "A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
          "B. AWS allows customers to pay upfront to get bigger discounts.",
          "C. AWS allows customers to launch and terminate EC2 instances based on demand.",
          "D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
        ],
        "correct_letter": "C",
        "explanation": "The cloud's **elasticity**—the ability to launch and terminate instances dynamically (scaling horizontally) to match demand—ensures that you pay only for active resources, eliminating over-provisioning costs.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
        "options": [
          "A. PostgreSQL",
          "B. Oracle",
          "C. Microsoft SQL Server",
          "D. Teradata"
        ],
        "correct_letter": "D",
        "explanation": "Amazon RDS supports PostgreSQL, Oracle, SQL Server, MySQL, MariaDB, and Amazon Aurora. It does not offer Teradata support.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
        "options": [
          "A. AWS DMS",
          "B. Amazon S3 Transfer Acceleration",
          "C. AWS Directory Service",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Database Migration Service (DMS)** allows secure database migrations from on-premises sites to AWS while keeping the source database operational.\n\n\n---"
      },
      {
        "id": 20,
        "question": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
        "options": [
          "A. Run WordPress on an Amazon Lightsail instance.",
          "B. Install WordPress on an Amazon EC2 instance.",
          "C. Use the Amazon S3 Web hosting feature.",
          "D. Host the website directly on AWS Cloud Development Kit (AWS CDK)."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Lightsail** offers low-cost, pre-packaged virtual private servers with click-to-deploy application blueprint stacks (like WordPress), making deployment simple for beginners.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
        "options": [
          "A. AWS KMS",
          "B. AWS Certificate Manager",
          "C. AWS CodeDeploy",
          "D. AWS CodeCommit",
          "E. CloudHSM"
        ],
"correct_letter": "AE",
        "explanation": "Keys can be managed using **AWS KMS** (shared, managed key management service) (A) or **AWS CloudHSM** (dedicated hardware security modules) (E).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following services allows you to install and run custom relational database software?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Cognito",
          "C. Amazon RDS",
          "D. Amazon Inspector"
        ],
        "correct_letter": "A",
        "explanation": "Running database software on **Amazon EC2** (IaaS) gives you root access to the host operating system, letting you install custom relational engines. Managed RDS restricts host OS access.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
        "options": [
          "A. Auto Scaling",
          "B. ELB",
          "C. Amazon Route53",
          "D. Amazon Elastic Container Service"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Auto Scaling** dynamically adjusts compute capacities (adding/removing EC2 instances) to match workload requirements under changing loads.\n\n\n---"
      },
      {
        "id": 24,
        "question": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
        "options": [
          "A. AWS IAM",
          "B. AWS Outposts",
          "C. AWS Federation",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Identity and Access Management (IAM)** manages credentials, users, access permissions, and roles, acting as the cloud identity manager.\n\n\n---"
      },
      {
        "id": 25,
        "question": "What are some key design principles for designing public cloud systems? (Choose TWO)",
        "options": [
          "A. Reserved capacity instead of on demand.",
          "B. Loose coupling over tight coupling.",
          "C. Servers instead of managed services.",
          "D. Disposable resources instead of fixed servers.",
          "E. Multi-AZ deployments instead of multi-region deployments."
        ],
"correct_letter": "BD",
        "explanation": "Key cloud system design guidelines are:\n**Loose coupling** (B) to ensure component failures do not crash the entire application stack.\n**Disposable resources** (D) to provision virtual systems on demand and discard them when finished rather than building static, permanent servers.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
        "options": [
          "A. AWS CloudTrail Trails",
          "B. IAM Credential Report",
          "C. AWS Artifact reports",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "B",
        "explanation": "The **IAM Credential Report** generates a downloadable CSV audit report detailing all users in the account and their credentials status (password creation times, MFA status, access key rotation).\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
        "options": [
          "A. AWS Shield",
          "B. AWS Certificate Manager",
          "C. AWS CloudHSM",
          "D. AWS WAF"
        ],
        "correct_letter": "C",
        "explanation": "**AWS CloudHSM** provides dedicated, physical cryptographic hardware modules inside the AWS Cloud, giving you exclusive control to generate and manage keys.\n\n\n---"
      },
      {
        "id": 28,
        "question": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
        "options": [
          "A. There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
          "B. Deploy the application in a single Availability Zone.",
          "C. Deploy the application in multiple Availability Zones in a single AWS region.",
          "D. Deploy the application in multiple Availability Zones in multiple AWS regions."
        ],
        "correct_letter": "D",
        "explanation": "Spreading resources across **multiple Availability Zones in multiple AWS Regions** protects the application from both local datacenter shutdowns and major geographical disasters.\n\n\n---"
      },
      {
        "id": 29,
        "question": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
        "options": [
          "A. Instance Store",
          "B. S3",
          "C. DynamoDB",
          "D. Amazon Route 53",
          "E. AWS VPN"
        ],
"correct_letter": "BC",
        "explanation": "Amazon S3 and Amazon DynamoDB natively distribute data replicates across multiple, separated Availability Zones in a Region to guarantee high durability.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
        "options": [
          "A. Number of Requests",
          "B. Traffic Distribution",
          "C. Number of Volumes",
          "D. Instance type",
          "E. Storage Class"
        ],
"correct_letter": "AB",
        "explanation": "CloudFront billing is determined by:\n**Data Transfer Out** (GBs of traffic delivered to users) and the geographical **Traffic Distribution** (B) of those users (since data transit rates vary by global region).\nThe total **Number of HTTP/HTTPS Requests** (A) received at edge locations.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
        "options": [
          "A. AWS Service Control Policies (SCPs)",
          "B. AWS Artifact",
          "C. AWS Budgets",
          "D. AWS Acceptable Use Policy"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Acceptable Use Policy** describes actions that are prohibited on AWS infrastructure (such as hosting illegal content, spamming, or security scans without permission).\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following security resources are available to any user for free? (Choose TWO)",
        "options": [
          "A. AWS Bulletins",
          "B. AWS TAM",
          "C. AWS Support API",
          "D. AWS Security Blog",
          "E. AWS Classroom Training"
        ],
"correct_letter": "AD",
        "explanation": "The public **AWS Security Bulletins** web portal (A) and the **AWS Security Blog** (D) are free, public educational resources containing security warnings and threat analyses.\n\n\n---"
      },
      {
        "id": 33,
        "question": "How can you protect data stored on Amazon S3 from accidental deletion?",
        "options": [
          "A. By enabling S3 Versioning.",
          "B. By configuring S3 Bucket Policies.",
          "C. By configuring S3 Lifecycle Policies.",
          "D. By disabling S3 Cross-Region Replication (CRR)."
        ],
        "correct_letter": "A",
        "explanation": "**S3 Versioning** retains previous versions of files in your bucket. When an object is deleted, S3 places a delete marker rather than purging the data, allowing you to restore the file version.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
        "options": [
          "A. Securing regions and edge locations.",
          "B. Performing auditing tasks.",
          "C. Monitoring AWS resources usage.",
          "D. Securing access to AWS resources."
        ],
        "correct_letter": "A",
        "explanation": "According to the Shared Responsibility Model, AWS is responsible for security **of** the cloud (the physical hardware, networks, regions, and edge locations (A)).\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
        "options": [
          "A. Business & Enterprise Support",
          "B. Basic & Developer Support",
          "C. Developer & Enterprise Support",
          "D. Developer & Business Support"
        ],
        "correct_letter": "B",
        "explanation": "Free **Basic** and low-cost **Developer** support tiers include access to only the 7 core Trusted Advisor checks. Business and Enterprise support plans provide access to the full check database.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which of the following is NOT a benefit of using AWS Lambda?",
        "options": [
          "A. AWS Lambda runs code without provisioning or managing servers.",
          "B. AWS Lambda provides resizable compute capacity in the cloud.",
          "C. There is no charge when your AWS Lambda code is not running.",
          "D. AWS Lambda can be called directly from any mobile app."
        ],
        "correct_letter": "B",
        "explanation": "\"Resizable compute capacity\" refers to standard virtual machines (like EC2) where you modify CPU/RAM sizing. Since Lambda is serverless, compute capacity scales automatically per execution, rather than by manually resizing resources.\n\n\n---"
      },
      {
        "id": 37,
        "question": "How does AWS help customers achieve compliance in the cloud?",
        "options": [
          "A. It’s not possible to meet regulatory compliance requirements in the Cloud.",
          "B. AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.",
          "C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
          "D. Many AWS services are assessed regularly to comply with local laws and regulations."
        ],
        "correct_letter": "C",
        "explanation": "AWS achieves and maintains numerous compliance standards (like ISO 9001, SOC, and complies with HIPAA data handling policies), enabling customers to inherit these control baselines for their applications.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
        "options": [
          "A. Your security team",
          "B. Your development team",
          "C. AWS",
          "D. Your internal DevOps team"
        ],
        "correct_letter": "C",
        "explanation": "Under the Shared Responsibility Model for fully managed DynamoDB, **AWS** manages physical scaling, partitioning, and resource provisioning to meet workload requests.\n\n\n---"
      },
      {
        "id": 39,
        "question": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
        "options": [
          "A. Amazon Elastic Transcoder",
          "B. Amazon Pinpoint",
          "C. AmazonS3",
          "D. Amazon Rekognition"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Elastic Transcoder** is a media transcoding service designed to convert media files from their source formats into versions that will play on mobile devices, tablets, and PCs.\n\n\n---"
      },
      {
        "id": 40,
        "question": "What are the benefits of the AWS Organizations service? (Choose TWO)",
        "options": [
          "A. Control access to AWS services.",
          "B. Help organizations design and maintain an accelerated path to successful cloud adoption.",
          "C. Manage your organization’s payment methods.",
          "D. Help organization achieve their desired business outcomes with AWS.",
          "E. Consolidate billing across multiple AWS accounts."
        ],
"correct_letter": "AE",
        "explanation": "AWS Organizations allows you to:\nApply Service Control Policies (SCPs) to **control access to AWS services** across accounts (A).\nLink accounts under a single master payer account to **consolidate billing** (E).\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which AWS service allows you to build a data warehouse in the cloud?",
        "options": [
          "A. AWS Shield",
          "B. Amazon Redshift",
          "C. Amazon RDS",
          "D. Amazon Comprehend"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a managed, petabyte-scale cloud data warehousing service designed for SQL-based analytical workloads.\n\n\n---"
      },
      {
        "id": 42,
        "question": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
        "options": [
          "A. AWS Application Discovery service",
          "B. Amazon DevPay",
          "C. AWS Marketplace",
          "D. Resource Groups"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Marketplace** is a digital store catalog letting customers buy, deploy, and manage third-party software applications and SaaS tools built to run on AWS.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
        "options": [
          "A. AWS CodePipeline",
          "B. AWS CodeCommit",
          "C. AWS X-Ray",
          "D. Amazon Inspector"
        ],
        "correct_letter": "B",
        "explanation": "**AWS CodeCommit** is a fully managed, secure Git-based source control repository service designed to store and version code.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
        "options": [
          "A. Amazon Cognito",
          "B. AWS Systems Manager",
          "C. AWS Cloud9",
          "D. Amazon Route 53"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Route 53** supports Latency-Based Routing (LBR), which directs user DNS requests to the AWS Region that provides the lowest network latency.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
        "options": [
          "A. Federation",
          "B. Access keys",
          "C. IAM Permissions",
          "D. WAF rules"
        ],
        "correct_letter": "A",
        "explanation": "**Identity Federation** enables single sign-on (SSO), permitting users to authenticate and access AWS resources using their existing corporate credentials.\n\n\n---"
      },
      {
        "id": 46,
        "question": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
        "options": [
          "A. Awareness and Training",
          "B. Communications controls",
          "C. Data center security controls",
          "D. Environmental controls",
          "E. Resource Configuration Management"
        ],
"correct_letter": "CD",
        "explanation": "Under the Shared Responsibility Model, the customer completely inherits physical security controls (C) and datacenter environmental controls (cooling, fire suppression, power) (D) from AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "What can you access by visiting the URL: http://status.aws.amazon.com?",
        "options": [
          "A. AWS Billing Dashboard",
          "B. AWS Cost Dashboard",
          "C. AWS Service Health Dashboard",
          "D. AWS Security Dashboard"
        ],
        "correct_letter": "C",
        "explanation": "The URL `http://status.aws.amazon.com` (now redirecting to the AWS Health Dashboard) displays the real-time operational status of all AWS services across regions.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
        "options": [
          "A. Store media assets in the region closest to your end users.",
          "B. Store media assets on an additional EBS volume and increase the capacity of your server.",
          "C. Replicate media assets to at least two availability zones.",
          "D. Reduce the size of media assets using the Amazon Elastic Transcoder.",
          "E. Store media assets in S3 and use CloudFront to distribute these assets."
        ],
"correct_letter": "AE",
        "explanation": "Latency is reduced by bringing content closer to users geographically. This is achieved by storing data in the nearest regional datacenter (A) and leveraging **Amazon CloudFront CDN** to cache content at Edge Locations (E).\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
        "options": [
          "A. Use manual monitoring techniques to protect your AWS resources.",
          "B. Use IAM roles to grant temporary access instead of long-term credentials.",
          "C. Scale horizontally to protect from failures.",
          "D. Enable real-time traceability.",
          "E. Never store sensitive data in the cloud."
        ],
"correct_letter": "BD",
        "explanation": "Security design principles in the AWS Well-Architected Framework include:\n**Enable traceability** (D): Monitor, alert, and audit actions and resource configurations.\n**Protect keys and credentials**: Grant temporary access using roles (B) rather than permanent keys.\n\n\n---"
      },
      {
        "id": 50,
        "question": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
        "options": [
          "A. Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
          "B. Use Amazon Aurora to forecast AWS spending based on usage.",
          "C. Apply cost allocation tags to segment AWS costs by different projects and departments.",
          "D. Configure AWS Price List API to receive billing updates for each department automatically."
        ],
        "correct_letter": "C",
        "explanation": "Applying **cost allocation tags** (like `Department: Marketing`) to resources allows organizations to segment and track AWS spending in billing reports and Cost Explorer.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 7
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 8",
    "questions": [
      {
        "id": 1,
        "question": "What is the main benefit of attaching security groups to an Amazon RDS instance?",
        "options": [
          "A. Manages user access and encryption keys.",
          "B. Controls what IP address ranges can connect to your database instance.",
          "C. Deploys SSL/TLS certificates for use with your database instance.",
          "D. Distributes incoming traffic across multiple targets."
        ],
        "correct_letter": "B",
        "explanation": "Security groups act as a virtual firewall for your database instances. You define rules that control the inbound and outbound traffic, specifying which resource security groups (like EC2) or IP addresses can establish database connections.\n\n\n---"
      },
      {
        "id": 2,
        "question": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
        "options": [
          "A. EC2 launch type",
          "B. Fargate launch type",
          "C. Lightsail launch type",
          "D. Lambda launch type"
        ],
        "correct_letter": "A",
        "explanation": "The **ECS EC2 launch type** deploys containers onto a cluster of EC2 instances that you manage and configure, providing full OS-level administration, visibility, and control. The serverless Fargate launch type abstracts virtual machines away.\n\n\n---"
      },
      {
        "id": 3,
        "question": "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
        "options": [
          "A. Try to remove unnecessary AWS accounts.",
          "B. Add the accounts to an AWS Organization and use Consolidated Billing.",
          "C. Track the AWS charges that are incurred by the member accounts.",
          "D. Enable AWS tiered-pricing before provisioning resources."
        ],
        "correct_letter": "B",
        "explanation": "**Consolidated Billing** aggregates usage across all connected accounts in an AWS Organization, allowing them to collectively reach volume-pricing discount thresholds (e.g. S3 storage tiers, EC2 volume discounts).\n\n\n---"
      },
      {
        "id": 4,
        "question": "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
        "options": [
          "A. Network ACLs and Traffic Manager.",
          "B. Network ACLs and Subnets.",
          "C. Security Groups and Internet Gateways.",
          "D. Security Groups and Network ACLs."
        ],
        "correct_letter": "D",
        "explanation": "Traffic permissions are controlled at two levels: **Security Groups** (stateful, instance-level firewalls) and **Network ACLs** (stateless, subnet-level firewalls).\n\n\n---"
      },
      {
        "id": 5,
        "question": "What does the AWS “Business” support plan provide? (Choose TWO)",
        "options": [
          "A. Access to the full set of Trusted Advisor checks.",
          "B. Support Concierge Service.",
          "C. Less than 15 minutes response-time support if your business critical system goes down.",
          "D. AWS Support API.",
          "E. Proactive Technical Account Management."
        ],
"correct_letter": "AD",
        "explanation": "The **Business** plan unlocks access to the full suite of Trusted Advisor recommendation checks (A).\nIt includes the **AWS Support API** (D) for programmatically managing support cases.\n*Note:* Concierge service, <15 min response, and TAMs are Enterprise plan features.\n\n\n---"
      },
      {
        "id": 6,
        "question": "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
        "options": [
          "A. Amazon Simple Storage Service",
          "B. AWS Elastic Beanstalk",
          "C. AWS CodeCommit",
          "D. Amazon Elastic File System"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Elastic Beanstalk** is a Platform-as-a-Service (PaaS) that handles resource provisioning, load balancing, auto-scaling, and health monitoring automatically when you upload code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which statement is true in relation to security in AWS?",
        "options": [
          "A. AWS manages everything related to EC2 operating systems.",
          "B. AWS customers are responsible for patching any database software running on Amazon EC2.",
          "C. Server side encryption is the responsibility of AWS.",
          "D. AWS is responsible for the security of your application."
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, instances on EC2 are Infrastructure as a Service (IaaS). Patching host operating systems and database packages installed on EC2 is the customer's responsibility.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
        "options": [
          "A. Improves Fault-Tolerance.",
          "B. Provides your business with a seamless remote accessibility.",
          "C. Prevents unauthorized users from getting into your network.",
          "D. Provides automatic data backups.",
          "E. Can be scaled manually in a shorter period of time."
        ],
"correct_letter": "AE",
        "explanation": "Fault tolerance is improved by deploying instances across physically isolated Availability Zones (A).\nSizing can be changed and extra compute instances launched in minutes, allowing rapid scaling compared to acquiring physical hardware (E).\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which statement is true regarding AWS pricing? (Choose TWO)",
        "options": [
          "A. With the AWS pay-as-you-go pricing model, you don’t have to pay any upfront fee.",
          "B. You have no responsibility for third-party software license costs.",
          "C. You only pay for the individual services that you need with no long-term contracts.",
          "D. For some services, you have to pay a startup fee in order to get the service running.",
          "E. There are no reservations on AWS, you only pay for what you use."
        ],
"correct_letter": "AC",
        "explanation": "The cloud billing system features:\nNo startup costs or upfront fees under pay-as-you-go (A).\nNo long-term commitments; you pay only for active resources consumed (C).\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
        "options": [
          "A. AWS Control Tower",
          "B. Amazon Macie",
          "C. AWS Systems Manager Patch Manager",
          "D. AWS Security Hub"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Control Tower** automates the creation of a baseline landing zone, utilizing best-practice security guardrails and IAM structures across a multi-account organization.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
        "options": [
          "A. Use CloudFront to monitor the CPU usage.",
          "B. Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
          "C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
          "D. Use SNS to monitor the utilization of the server."
        ],
        "correct_letter": "C",
        "explanation": "You can configure a **CloudWatch Alarm** to monitor metrics like CPU utilization. When the threshold (>= 60%) is met, the alarm triggers and sends notifications via SNS.\n\n\n---"
      },
      {
        "id": 12,
        "question": "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon RDS",
          "C. You can’t run a database inside an Amazon EC2 instance.",
          "D. Amazon DynamoDB"
        ],
        "correct_letter": "A",
        "explanation": "Databases on EC2 require persistent, high-throughput, block-level storage. **Amazon EBS** is the recommended block storage service. RDS is a separate, managed database service (not attached block storage).\n\n\n---"
      },
      {
        "id": 13,
        "question": "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
        "options": [
          "A. Amazon CloudWatch",
          "B. Amazon CloudSearch",
          "C. Amazon Elastic MapReduce",
          "D. Amazon CloudHSM"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon CloudWatch** is a monitoring and observability service designed to collect application/infrastructure log files, metrics, and trigger automated alerts.\n\n\n---"
      },
      {
        "id": 14,
        "question": "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
        "options": [
          "A. Storage consumed.",
          "B. Number of requests to your functions.",
          "C. Number of volumes.",
          "D. Placement groups.",
          "E. Compute time consumed."
        ],
"correct_letter": "BE",
        "explanation": "Lambda bills customers based on:\nThe total **Number of Requests** (B) routed to your functions.\nThe **Compute Time** (E) (measured in GB-seconds, depending on memory capacity allocated and code runtime).\n\n\n---"
      },
      {
        "id": 15,
        "question": "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
        "options": [
          "A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
          "B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
          "C. IAM users are more cost effective than IAM roles.",
          "D. A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
          "E. An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it."
        ],
"correct_letter": "AB",
        "explanation": "IAM Users are distinct identities representing one person/system, with long-term credentials like passwords or keys (A, B).\nIAM Roles have no permanent keys; they issue temporary credentials and are designed to be assumed by any identity possessing permission.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
        "options": [
          "A. Deleting unused buckets.",
          "B. Using reservations.",
          "C. Deleting unnecessary snapshots.",
          "D. Changing the type of the volume.",
          "E. Distributing requests to multiple volumes."
        ],
"correct_letter": "CD",
        "explanation": "EBS costs can be reduced by deleting unneeded volume snapshots (C) and upgrading/changing volume types (D) (such as changing GP2 volumes to newer GP3 configurations which offer lower costs per GB).\n\n\n---"
      },
      {
        "id": 17,
        "question": "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
        "options": [
          "A. Notifies AWS customers about abuse events once they are reported.",
          "B. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
          "C. Helps AWS customers identify the root cause of potential security issues.",
          "D. Checks security groups for rules that allow unrestricted access to AWS. resources."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon GuardDuty** is a continuous security monitoring service that analyzes CloudTrail logs, VPC flow logs, and DNS records using machine learning to detect anomalies and threats like crypto-mining or credential compromises.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which database service should you use if your application and data schema require “joins” or complex transactions?",
        "options": [
          "A. Amazon RDS",
          "B. AWS Outposts",
          "C. Amazon DocumentDB",
          "D. Amazon DynamoDB"
        ],
        "correct_letter": "A",
        "explanation": "Relational databases handle structured tables, joins, and ACID compliance. **Amazon RDS** is AWS's managed relational database service. DynamoDB is NoSQL and does not naturally support standard SQL join queries.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the following makes it easier for you to categorize, manage and filter your resources?",
        "options": [
          "A. Amazon CloudWatch",
          "B. AWS Service Catalog",
          "C. AWS Directory Service",
          "D. AWS Tagging"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Tagging** assigns metadata key-value tags to resources, making it easy to filter, search, and categorize objects in your environment.\n\n\n---"
      },
      {
        "id": 20,
        "question": "What should you consider when storing data in Amazon Glacier?",
        "options": [
          "A. Amazon Glacier only accepts data in a compressed format.",
          "B. Glacier can only be used to store frequently accessed data and data archives.",
          "C. Amazon Glacier does not provide immediate retrieval of data.",
          "D. Attach Glacier to an EC2 Instance to be able to store data."
        ],
        "correct_letter": "C",
        "explanation": "Glacier is an archival service. Unlike S3 Standard which retrieves files instantly, Glacier retrieval takes anywhere from minutes (Expedited) to hours (Standard/Bulk).\n\n\n---"
      },
      {
        "id": 21,
        "question": "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Batch",
          "C. Lambda@Edge",
          "D. AWS Fargate"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Batch** manages and provisions compute capacities to run thousands of batch computing workloads efficiently, removing the administrative overhead of setting up custom clusters.\n\n\n---"
      },
      {
        "id": 22,
        "question": "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
        "options": [
          "A. Deploy your application across multiple EC2 instances.",
          "B. Deploy your application across multiple Availability Zones.",
          "C. Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
          "D. Deploy the underlying application resources across multiple subnets."
        ],
        "correct_letter": "B",
        "explanation": "Fault tolerance is increased by deploying resources across **multiple Availability Zones**. This ensures the application remains online even if an entire AZ suffers a localized blackout or networking breakdown.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
        "options": [
          "A. Developer",
          "B. Premium",
          "C. Enterprise",
          "D. Standard",
          "E. Business"
        ],
"correct_letter": "CE",
        "explanation": "24/7 direct phone and chat access to Cloud Support Engineers is provided starting in the **Business** (E) plan and is also included in **Enterprise** (C) plans.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
        "options": [
          "A. IAM group",
          "B. IAM user",
          "C. IAM role",
          "D. AWS account root user",
          "E. TAM"
        ],
"correct_letter": "BD",
        "explanation": "Static Access Keys (Access Key ID and Secret Access Key) are long-term credentials generated for programmatic logins by **IAM Users** (B) or the **AWS Account Root User** (D). Roles use temporary token keys.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which of the following is a benefit of the “Loose Coupling” architecture principle?",
        "options": [
          "A. It eliminates the need for change management.",
          "B. It allows for Cross-Region Replication.",
          "C. It helps AWS customers reduce Privileged Access to AWS resources.",
          "D. It allows individual application components or services to be modified without affecting other components."
        ],
        "correct_letter": "D",
        "explanation": "**Loose coupling** isolates components from each other. If one backend service is changed or crashes, it doesn't cause cascading failures across the other decoupled frontend or database components.\n\n\n---"
      },
      {
        "id": 26,
        "question": "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
        "options": [
          "A. Amazon Elastic Block Store",
          "B. AWS Storage Gateway",
          "C. Amazon Elastic File System",
          "D. S3"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon EFS** is a shared file system that can be mounted simultaneously by hundreds of EC2 instances, providing shared access and high aggregate throughput. (EBS is block storage and only mounts to one instance under normal setups).\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
        "options": [
          "A. On-premises",
          "B. IaaS",
          "C. PaaS",
          "D. Cloud"
        ],
        "correct_letter": "D",
        "explanation": "The **Cloud** deployment model hosts infrastructure in a public cloud provider, removing all physical datacenter construction, hosting, or maintenance tasks.\n\n\n---"
      },
      {
        "id": 28,
        "question": "What are the benefits of the AWS Marketplace service? (Choose TWO)",
        "options": [
          "A. Protects customers by performing periodic security checks on listed products.",
          "B. Per-second billing.",
          "C. Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
          "D. Provides flexible pricing options that suit most customer needs.",
          "E. Provides software solutions that run on AWS or any other Cloud vendor."
        ],
"correct_letter": "AD",
        "explanation": "AWS runs periodic scans and verification tests on listed software products to ensure security (A).\nIt offers flexible billing structures (D) (including BYOL, hourly, or annual contracts).\n\n\n---"
      },
      {
        "id": 29,
        "question": "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
        "options": [
          "A. Elasticity",
          "B. Durability",
          "C. Traceability",
          "D. Accessibility"
        ],
        "correct_letter": "B",
        "explanation": "Automated replication inside an AZ protects against localized drive failures, increasing storage **durability** and data retention.\n\n\n---"
      },
      {
        "id": 30,
        "question": "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
        "options": [
          "A. Savings Plans",
          "B. Spot Instances",
          "C. Reserved Instances",
          "D. On-Demand Instances"
        ],
        "correct_letter": "D",
        "explanation": "For a short-term campaign (one weekend) where stability is mandatory (preventing Spot instance usage because they can be interrupted), **On-Demand Instances** are the most cost-effective solution. They require no contract commitments.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
        "options": [
          "A. Amazon EFS",
          "B. AWS Secrets Manager",
          "C. AWS Systems Manager",
          "D. Amazon CloudFront"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon CloudFront** routes web traffic via edge locations which natively integrate with Shield and WAF to block attacks before reaching origins.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following services is used when encrypting EBS volumes?",
        "options": [
          "A. AWS WAF",
          "B. AWS KMS",
          "C. Amazon Macie",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "EBS integrates directly with **AWS KMS** (Key Management Service) to encrypt volumes using Customer Managed or AWS Managed keys.\n\n\n---"
      },
      {
        "id": 33,
        "question": "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
        "options": [
          "A. Download all the attached policies in a safe place.",
          "B. Delete all IAM accounts and recreate them.",
          "C. Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
          "D. Rotate all access keys.",
          "E. Change the email address and password of the root user account and enable MFA."
        ],
"correct_letter": "DE",
        "explanation": "To block potential root compromise, change root login details (email/password) and configure Multi-Factor Authentication (E).\n**Rotate/deactivate all IAM access keys** (D) to invalidate credentials the administrator might have generated.\n\n\n---"
      },
      {
        "id": 34,
        "question": "What is the Amazon ElastiCache service used for? (Choose TWO)",
        "options": [
          "A. Provide an in-memory data storage service.",
          "B. Reduce delivery costs using Edge Locations.",
          "C. Improve web application performance.",
          "D. Provide a Chef-compatible cache to speed up application response.",
          "E. Distribute requests to multiple instances."
        ],
"correct_letter": "AC",
        "explanation": "**Amazon ElastiCache** deploys managed in-memory caches (A) (Redis or Memcached) to cache database reads, dramatically reducing query response latencies and improving app speed (C).\n\n\n---"
      },
      {
        "id": 35,
        "question": "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
        "options": [
          "A. Deploy your resources across multiple Availability Zones.",
          "B. Use Amazon EC2 Auto Scaling.",
          "C. Deploy your resources in another region.",
          "D. Use Elastic Load Balancing.",
          "E. Use Serverless Computing whenever possible."
        ],
"correct_letter": "BE",
        "explanation": "**Auto Scaling** (B) automates horizontal scaling, provisioning or terminating instances to match demand.\n**Serverless architectures** (E) run code only on request execution, automatically scaling down to zero idle costs.\n\n\n---"
      },
      {
        "id": 36,
        "question": "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
        "options": [
          "A. They provide free capacity when testing your new applications.",
          "B. They are cheaper than all other EC2 options.",
          "C. They remove the need to buy “safety net” capacity to handle periodic traffic spikes.",
          "D. They only require 1-2 days for setup and configuration.",
          "E. You can increase or decrease your compute capacity depending on the demands of your application."
        ],
"correct_letter": "CE",
        "explanation": "On-Demand compute lets you resize capacities instantly based on app demand (E), removing the need to pay for idle physical \"safety net\" servers to handle periodic traffic spikes (C).\n\n\n---"
      },
      {
        "id": 37,
        "question": "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
        "options": [
          "A. It is a data center designed to be completely isolated from other data centers in the same region.",
          "B. It is a collection of data centers distributed in multiple countries.",
          "C. It is a logically isolated network of the AWS Cloud.",
          "D. It is a distinct location within a region that is insulated from failures in other Availability Zones."
        ],
        "correct_letter": "D",
        "explanation": "An AZ consists of one or more separate datacenters. They are engineered with isolated power, cooling, and low-latency network connections, protecting them from cascading outages in adjacent AZs.\n\n\n---"
      },
      {
        "id": 38,
        "question": "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple […].",
        "options": [
          "A. Regions",
          "B. Transportation devices",
          "C. Support plans",
          "D. Edge locations"
        ],
        "correct_letter": "A",
        "explanation": "Deploying identical application setups across **multiple Regions** offers the highest protection from total regional natural disasters or grid blackouts.\n\n\n---"
      },
      {
        "id": 39,
        "question": "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
        "options": [
          "A. Start the migration process immediately as all AWS services are PCI compliant.",
          "B. Ensure that AWS services are configured properly to meet all PCI DSS standards.",
          "C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
          "D. Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
          "E. Ensure that all PCI DSS physical security requirements are met."
        ],
"correct_letter": "BC",
        "explanation": "Under the Shared Responsibility Model, AWS manages physical facility security (E). The customer is responsible for:\nConfiguring security settings and IAM rules correctly on AWS services to meet PCI standards (B).\nManaging database/application-level card access rules and employee security policies (C).\n\n\n---"
      },
      {
        "id": 40,
        "question": "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
        "options": [
          "A. 100 PetaBytes",
          "B. Virtually unlimited storage",
          "C. 5 TeraBytes",
          "D. 10 Exabytes"
        ],
        "correct_letter": "B",
        "explanation": "S3 has **no storage limit**; you can store an unlimited volume of objects. An individual S3 file object is capped at 5 Terabytes.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
        "options": [
          "A. Operational Excellence",
          "B. Security",
          "C. Performance Efficiency",
          "D. Reliability"
        ],
        "correct_letter": "C",
        "explanation": "The **Performance Efficiency** pillar guides resource selection (choosing optimal compute, storage, databases), benchmarking, and scaling to maintain capacity.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
        "options": [
          "A. Amazon Route 53",
          "B. Amazon Connect",
          "C. Amazon CloudFront",
          "D. Amazon EC2"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon CloudFront** is AWS's CDN service, designed to accelerate content deliveries worldwide using edge location caching.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        "options": [
          "A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
          "B. Request and wait for approval from the customer’s internal security team, and then conduct testing.",
          "C. Notify AWS support, and then conduct testing immediately.",
          "D. Request and wait for approval from AWS support, and then conduct testing."
        ],
        "correct_letter": "B",
        "explanation": "AWS no longer requires advance authorization for penetration testing of key services. However, customers must still get authorization from their own internal security administration team before launching tests (B).\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Cost and Usage report",
          "D. AWS Billing dashboard"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Cost and Usage Report (CUR)** provides the most granular, detailed breakdown of usage and costs inside the billing tool suite.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
        "options": [
          "A. AWS Regions",
          "B. Availability Zones",
          "C. Edge locations",
          "D. Amazon CloudFront"
        ],
        "correct_letter": "B",
        "explanation": "**Availability Zones (AZs)** are composed of one or more physically isolated, redundant datacenters located within a specific Region.\n\n\n---"
      },
      {
        "id": 46,
        "question": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        "options": [
          "A. A minimum of one",
          "B. A minimum of two",
          "C. A minimum of three",
          "D. A minimum of four or more"
        ],
        "correct_letter": "B",
        "explanation": "High availability configurations require deploying resources across **at least two AZs**. If one zone goes down, the standby resources in the remaining AZ keep the service online.\n\n\n---"
      },
      {
        "id": 47,
        "question": "The AWS Cloud’s multiple Regions are an example of:",
        "options": [
          "A. Agility",
          "B. Global infrastructure",
          "C. Elasticity",
          "D. Pay-as-you-go pricing"
        ],
        "correct_letter": "B",
        "explanation": "Spreading services across multiple geographical Regions is part of the **AWS Global Infrastructure** design.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which AWS service can be used to manually launch instances based on resource requirements?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon S3",
          "C. Amazon EC2",
          "D. Amazon ECS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Elastic Compute Cloud (EC2)** provides resizable virtual instances that you can launch manually or provision programmatically.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which is a recommended pattern for designing a highly available architecture on AWS?",
        "options": [
          "A. Ensure that components have low-latency network connectivity.",
          "B. Run enough Amazon EC2 instances to operate at peak load.",
          "C. Ensure that the application is designed to accommodate failure of any single component.",
          "D. Use a monolithic application that handles all operations."
        ],
        "correct_letter": "C",
        "explanation": "Highly available systems are built with redundancy, avoiding single points of failure (SPOF) and preparing components to auto-recover or failover on failure (C).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        "options": [
          "A. High availability",
          "B. Shared security model",
          "C. Elasticity",
          "D. Pay-as-you-go pricing",
          "E. Reliability"
        ],
"correct_letter": "CD",
        "explanation": "Dynamic workloads are optimized by **Elasticity** (scaling resources to active demand automatically) (C) and **Pay-as-you-go pricing** (paying only for the active runtimes) (D).\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 8
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 9",
    "questions": [
      {
        "id": 1,
        "question": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        "options": [
          "A. AWS Well-Architected Framework documentation.",
          "B. Amazon CloudFront.",
          "C. AWS CodeCommit.",
          "D. AWS Quick Start reference deployments."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Quick Starts** (now called AWS Partner Solutions / Architecture Center) provide gold-standard Reference Deployments built by solutions architects using CloudFormation templates, letting administrators quickly spin up popular software architectures in a few clicks.\n\n\n---"
      },
      {
        "id": 2,
        "question": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          "A. It simplifies relational database administration tasks.",
          "B. It provides 99.99999999999% reliability and durability.",
          "C. It automatically scales databases for loads.",
          "D. It enables users to dynamically adjust CPU and RAM resources."
        ],
        "correct_letter": "A",
        "explanation": "Amazon RDS automates time-consuming database operations such as provisioning, operating system patching, backups, configuration, and failover management, freeing up administrators to focus on application layer optimization.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        "options": [
          "A. Amazon EC2.",
          "B. Amazon Route 53.",
          "C. Amazon ElastiCache.",
          "D. Amazon DynamoDB."
        ],
        "correct_letter": "A",
        "explanation": "Deploys database engines directly on **Amazon EC2** virtual servers when you require full guest OS administration controls, custom database configurations, and manual patching.\n\n\n---"
      },
      {
        "id": 4,
        "question": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
        "options": [
          "A. Launch the instances across multiple Availability Zones in a single AWS Region.",
          "B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
          "C. Launch the instances in multiple AWS Regions but in the same Availability Zone.",
          "D. Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
        ],
        "correct_letter": "A",
        "explanation": "High availability inside an AWS Region is accomplished by launching instances across **multiple Availability Zones** (AZs). If one zone goes down, the standby instances in other AZs continue processing traffic.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          "A. A public and private key-pair.",
          "B. Amazon Inspector.",
          "C. AWS Identity and Access Management (IAM) policies.",
          "D. Security Groups."
        ],
        "correct_letter": "C",
        "explanation": "Access to S3 buckets can be limited to specific users or resources using **IAM Policies** (attached to users/groups/roles) or S3 Bucket Policies (resource-based policies).\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        "options": [
          "A. AWS VPN.",
          "B. Amazon Redshift.",
          "C. API Gateway.",
          "D. Amazon Direct Connect."
        ],
"correct_letter": "AD",
        "explanation": "Connecting on-premises networks to a VPC is supported using:\n**AWS VPN** (A) (creates a secure, encrypted tunnel over the public internet).\n**AWS Direct Connect** (D) (creates a dedicated, private physical fiber-optic connection).\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which AWS service or feature can be used to monitor CPU usage?",
        "options": [
          "A. AWS CloudTrail.",
          "B. VPC Flow Logs.",
          "C. Amazon CloudWatch.",
          "D. AWS Config."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon CloudWatch** gathers resource utilization metrics (like CPU usage, memory levels, and disk metrics) from EC2 instances and other AWS services.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        "options": [
          "A. Granting access to individuals and services.",
          "B. Encrypting data in transit.",
          "C. Updating Amazon EC2 host firmware.",
          "D. Updating operating systems."
        ],
        "correct_letter": "C",
        "explanation": "Under the Shared Responsibility Model, AWS manages physical security and infrastructure security (\"of\" the cloud), which includes updating the hypervisor software and host hardware firmware (C). OS patching, data encryption, and access controls are customer responsibilities.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which of the following security-related actions are available at no cost?",
        "options": [
          "A. Calling AWS Support.",
          "B. Contacting AWS Professional Services to request a workshop.",
          "C. Accessing forums, blogs, and whitepapers.",
          "D. Attending AWS classes at a local university."
        ],
        "correct_letter": "C",
        "explanation": "Informational resources such as AWS documentation, official whitepapers, security blogs, and discussion forums are publicly accessible online at no charge.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which storage service can be used as a low-cost option for hosting static websites?",
        "options": [
          "A. Amazon Glacier.",
          "B. Amazon DynamoDB.",
          "C. Amazon Elastic File System (Amazon EFS).",
          "D. Amazon Simple Storage Service (Amazon S3)."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** features a built-in static website hosting mode, serving HTML, CSS, JavaScript, and media files directly from an S3 bucket without server instances.\n\n\n---"
      },
      {
        "id": 11,
        "question": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
        "options": [
          "A. Application security.",
          "B. Edge location management.",
          "C. Patch management.",
          "D. Client-side data."
        ],
        "correct_letter": "B",
        "explanation": "Physical infrastructure, including building and managing global Regions, Availability Zones, and **Edge Locations**, is the sole responsibility of AWS. (Patch management is shared; OS patching is customer, host patching is AWS).\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
        "options": [
          "A. Multiple Availability Zones.",
          "B. Performance efficiency.",
          "C. Security.",
          "D. Encryption usage.",
          "E. High availability."
        ],
"correct_letter": "BC",
        "explanation": "The pillars of the AWS Well-Architected Framework are: Operational Excellence, **Security** (C), Reliability, **Performance Efficiency** (B), Cost Optimization, and Sustainability.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
        "options": [
          "A. AWS Trusted Advisor.",
          "B. Amazon Inspector.",
          "C. Amazon CloudWatch.",
          "D. AWS CloudTrail."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** scans your configuration settings against best-practice rules, flagging security groups that permit unrestricted incoming traffic (such as port 22 or 3389 open to `0.0.0.0/0`).\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
        "options": [
          "A. Use manual monitoring.",
          "B. Use fixed servers.",
          "C. Implement loose coupling.",
          "D. Rely on individual components.",
          "E. Design for scalability."
        ],
"correct_letter": "CE",
        "explanation": "To break up monoliths, architects are advised to implement **loose coupling** (decoupling components using queues or APIs to prevent cascading failures) (C) and **design for scalability** to handle fluctuating demand (E).\n\n\n---"
      },
      {
        "id": 15,
        "question": "When architecting cloud applications, which of the following are a key design principle?",
        "options": [
          "A. Use the largest instance possible.",
          "B. Provision capacity for peak load.",
          "C. Use the Scrum development process.",
          "D. Implement elasticity."
        ],
        "correct_letter": "D",
        "explanation": "**Elasticity**—designing systems to scale up or down automatically based on active demands—prevents wasteful over-provisioning and saves infrastructure costs.\n\n\n---"
      },
      {
        "id": 16,
        "question": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
        "options": [
          "A. Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
          "B. Enable automate patching for the instances using the Amazon RDS console.",
          "C. In AWS Config. configure a rule for the instances and the required patch level.",
          "D. Use AWS Systems Manager to automate database patching according to a schedule."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Systems Manager Patch Manager** automates operating system and software package patching schedules across fleets of managed EC2 instances, reducing manual maintenance overheads.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which mechanism allows developers to access AWS services from application code?",
        "options": [
          "A. AWS Software Development Kit.",
          "B. AWS Management Console.",
          "C. AWS CodePipeline.",
          "D. AWS Config."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Software Development Kits (SDKs)** provide language-specific libraries (e.g. Python, Java, JavaScript) allowing developers to programmatically integrate and call AWS APIs directly from their application code.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
        "options": [
          "A. Shared responsibility security model.",
          "B. Single tenancy.",
          "C. Elastic computing.",
          "D. Encryption."
        ],
        "correct_letter": "C",
        "explanation": "**Elastic computing** lets you scale capacity dynamically to match workload volumes, avoiding expenditures on idle physical server assets, which decreases TCO.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Permissive security removes the administrative burden.",
          "B. Ability to focus on revenue-generating activities.",
          "C. Control over cloud network hardware.",
          "D. Choice of specific cloud hardware vendors."
        ],
        "correct_letter": "B",
        "explanation": "Offloading physical infrastructure operations (power, space, cooling, host patching) to AWS allows businesses to redirect resources toward development and **revenue-generating activities**.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
        "options": [
          "A. Fault Tolerance.",
          "B. Instance Usage.",
          "C. Infrastructure.",
          "D. Performance.",
          "E. Storage Capacity."
        ],
"correct_letter": "AD",
        "explanation": "The five recommendation categories of Trusted Advisor are: Cost Optimization, Security, **Fault Tolerance** (A), **Performance** (D), and Service Limits.\n\n\n---"
      },
      {
        "id": 21,
        "question": "What is Amazon CloudWatch?",
        "options": [
          "A. A code repository with customizable build and team commit features.",
          "B. A metrics repository with customizable notification thresholds and channels.",
          "C. A security configuration repository with threat analytics.",
          "D. A rule repository of a web application firewall with automated vulnerability prevention features."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch** acts as a centralized repository for application and resource metrics. You can monitor data, build dashboards, set threshold alarms, and send notifications when thresholds are crossed.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
        "options": [
          "A. Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
          "B. Encrypting data on the client-side.",
          "C. Training the data center staff.",
          "D. Configuring Network Access Control Lists (ACL).",
          "E. Maintaining environmental controls within a data center."
        ],
"correct_letter": "BD",
        "explanation": "The customer manages security \"in\" the cloud, which includes data protection (client-side encryption) (B) and virtual network configurations (NACLs, security groups) (D). Datacenter facilities, staff training, and RDS host patching are AWS's duties.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        "options": [
          "A. Physical controls.",
          "B. Patch management.",
          "C. Zone security.",
          "D. Data center auditing."
        ],
        "correct_letter": "B",
        "explanation": "**Patch management** is a shared control: AWS is responsible for patching infrastructure hardware and virtualization hypervisors, while the customer is responsible for patching guest operating systems and application software.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
        "options": [
          "A. AWS Billing and Cost Management.",
          "B. Consolidated billing.",
          "C. Amazon CloudWatch.",
          "D. Amazon QuickSight."
        ],
        "correct_letter": "A",
        "explanation": "The **AWS Billing and Cost Management** console is the centralized area where you manage invoices, configure payments, track monthly budgets, and analyze spending.\n\n\n---"
      },
      {
        "id": 25,
        "question": "How do customers benefit from Amazon’s massive economies of scale?",
        "options": [
          "A. Periodic price reductions as the result of Amazon’s operational efficiencies.",
          "B. New Amazon EC2 instance types providing the latest hardware.",
          "C. The ability to scale up and down when needed.",
          "D. Increased reliability in the underlying hardware of Amazon EC2 instances."
        ],
        "correct_letter": "A",
        "explanation": "As a result of purchase power and massive infrastructure scale, AWS continuously lowers operational overhead and routinely passes those savings back to customers via price reductions.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
        "options": [
          "A. Service control policies (SCPs).",
          "B. Consolidated billing.",
          "C. All Upfront Reserved Instances.",
          "D. AWS Cost Explorer."
        ],
        "correct_letter": "B",
        "explanation": "**Consolidated billing** aggregates usage across all member accounts within an AWS Organization, allowing the entire organization to qualify for high-volume discount tiers (such as S3 storage price reductions).\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
        "options": [
          "A. Amazon EBS.",
          "B. Amazon Connect.",
          "C. AWS Storage Gateway.",
          "D. Amazon CloudFront.",
          "E. AWS Direct Connect."
        ],
"correct_letter": "CE",
        "explanation": "**AWS Storage Gateway** (C) connects on-premises applications to cloud storage services.\n**AWS Direct Connect** (E) creates a private, physical high-speed network link between on-premises sites and VPC networks.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which of the following services will automatically scale with an expected increase in web traffic?",
        "options": [
          "A. AWS CodePipeline.",
          "B. Elastic Load Balancing.",
          "C. Amazon EBS.",
          "D. AWS Direct Connect."
        ],
        "correct_letter": "B",
        "explanation": "**Elastic Load Balancing (ELB)** automatically scales its traffic-routing capacity up and down to handle changing traffic spikes.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which service provides a virtually unlimited amount of online highly durable object storage?",
        "options": [
          "A. Amazon Redshift.",
          "B. Amazon Elastic File System (Amazon EFS).",
          "C. Amazon Elastic Container Service (Amazon ECS).",
          "D. Amazon S3."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** is a highly durable object storage service designed to store an unlimited quantity of unstructured files.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which AWS feature should a customer leverage to achieve high availability of an application?",
        "options": [
          "A. AWS Direct Connect.",
          "B. Availability Zones.",
          "C. Data centers.",
          "D. Amazon Virtual Private Cloud (Amazon VPC)."
        ],
        "correct_letter": "B",
        "explanation": "Distributing application deployments across multiple physically isolated **Availability Zones (AZs)** ensures continuous uptime even if one zone experiences an outage.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
        "options": [
          "A. AWS WAF.",
          "B. AWS Trusted Advisor.",
          "C. AWS Direct Connect.",
          "D. AWS Organizations.",
          "E. Network ACLs."
        ],
"correct_letter": "AE",
        "explanation": "**AWS WAF** (A) permits setting up IP rules to block web requests coming from particular networks/countries.\n**Network ACLs** (E) allow you to configure stateless subnet-level rules to deny incoming/outgoing traffic from specific IP subnets.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following is a cloud architectural design principle?",
        "options": [
          "A. Scale up not out.",
          "B. Loosely couple components.",
          "C. Build monolithic systems.",
          "D. Use commercial database software."
        ],
        "correct_letter": "B",
        "explanation": "Decoupled or **loosely coupled** configurations reduce interdependencies, preventing individual service errors from triggering system-wide failures.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        "options": [
          "A. Amazon CloudWatch.",
          "B. AWS CloudTrail.",
          "C. AWS Config.",
          "D. AWS Health."
        ],
        "correct_letter": "B",
        "explanation": "**AWS CloudTrail** tracks and logs API activities, capturing user actions across the console, CLI, and SDK calls to provide detailed auditing trails.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Where can AWS compliance and certification reports be downloaded?",
        "options": [
          "A. AWS Artifact.",
          "B. AWS Concierge.",
          "C. AWS Certificate Manager.",
          "D. AWS Trusted Advisor."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** provides on-demand access to AWS security and compliance reports (audits, SOC, ISO documents).\n\n\n---"
      },
      {
        "id": 35,
        "question": "The financial benefits of using AWS are: (Select TWO)",
        "options": [
          "A. Reduced Total Cost of Ownership (TCO).",
          "B. Increased capital expenditure (capex).",
          "C. Reduced operational expenditure ( opex ).",
          "D. Deferred payment plans for startups.",
          "E. Business credit lines for startups."
        ],
"correct_letter": "AC",
        "explanation": "AWS reduces **Total Cost of Ownership (TCO)** (A) by eliminating physical infrastructure overhead. It also lowers overall **operational expenditure (OpEx)** (C) through pay-as-you-go billing, preventing companies from paying for idle server capacities.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which AWS service can serve a static website?",
        "options": [
          "A. Amazon S3.",
          "B. Amazon Route 53.",
          "C. Amazon QuickSight.",
          "D. AWS X-Ray."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3** buckets can be configured to host static websites, serving HTML/CSS/JS files directly without requiring running virtual servers.\n\n\n---"
      },
      {
        "id": 37,
        "question": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
        "options": [
          "A. Companies can deploy applications in multiple AWS Regions to reduce latency.",
          "B. Amazon Translate automatically translates third-party website interfaces into multiple languages.",
          "C. Amazon CloudFront has multiple edge locations around the world to reduce latency.",
          "D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
          "E. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency."
        ],
"correct_letter": "AC",
        "explanation": "Deploying applications across **multiple AWS Regions** places workloads physically closer to users, lowering latency (A).\nUsing **Amazon CloudFront** caches assets at edge locations globally to speed up delivery times (C).\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
        "options": [
          "A. Resource groups.",
          "B. Availability Zones.",
          "C. Security groups.",
          "D. Regions.",
          "E. Amazon Machine Images (AMIS)."
        ],
"correct_letter": "BD",
        "explanation": "The fundamental geographical structures of AWS's global network footprint are **Regions** (D) and **Availability Zones (AZs)** (B).\n\n\n---"
      },
      {
        "id": 39,
        "question": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        "options": [
          "A. Physical access controls.",
          "B. Data encryption.",
          "C. Secure disposal of storage devices.",
          "D. Environmental risk management."
        ],
        "correct_letter": "B",
        "explanation": "Under the shared responsibility model, security \"in\" the cloud—which includes configuring **data encryption** (both at rest and in transit) (B) and managing access permissions—is the customer's duty.\n\n\n---"
      },
      {
        "id": 40,
        "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        "options": [
          "A. Use AWS Budgets on each account to pay only to budget.",
          "B. Contact AWS Support for a monthly bill.",
          "C. Create an AWS Organization from the payer account and invite the other accounts to join.",
          "D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
        ],
        "correct_letter": "C",
        "explanation": "You can configure consolidated billing by building an **AWS Organization** from a central master account (C) and inviting other accounts to join.\n\n\n---"
      },
      {
        "id": 41,
        "question": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        "options": [
          "A. Project management.",
          "B. Antivirus software licensing.",
          "C. Data center security.",
          "D. Software development."
        ],
        "correct_letter": "C",
        "explanation": "TCO calculations compare physical infrastructure costs, including hardware maintenance, utilities, cooling, and physical **datacenter security** (C).\n\n\n---"
      },
      {
        "id": 42,
        "question": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          "A. They require the customer to monitor and replace failing instances.",
          "B. They have better performance than customer-managed services.",
          "C. They simplify patching and updating underlying OSs.",
          "D. They do not require the customer to optimize instance type or size selections."
        ],
        "correct_letter": "C",
        "explanation": "Managed services abstract hardware maintenance, automatically handling OS configuration, security patching, and updates (C).\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
        "options": [
          "A. Amazon Route 53.",
          "B. Virtual Private Gateway.",
          "C. Classic Load Balancer.",
          "D. Auto Scaling.",
          "E. Amazon CloudWatch default metrics."
        ],
"correct_letter": "AB",
        "explanation": "**Amazon Route 53** (A) can resolve and route DNS requests to both AWS endpoints and local on-premises servers.\n**Virtual Private Gateway** (B) establishes VPN connections linking VPCs to on-premises routers.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which statement best describes Elastic Load Balancing?",
        "options": [
          "A. It translates a domain name into an IP address using DNC.",
          "B. It distributes incoming application traffic across one or more Amazon EC2 instances.",
          "C. It collects metrics on connected Amazon EC2 instances.",
          "D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
        ],
        "correct_letter": "B",
        "explanation": "**Elastic Load Balancing (ELB)** automatically routes incoming client traffic across multiple targets (like EC2 instances or containers) to ensure load balancing.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a fast and reliable NoSQL database service?",
        "options": [
          "A. Amazon Redshift.",
          "B. Amazon RDS.",
          "C. Amazon DynamoDB.",
          "D. Amazon S3."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency NoSQL database service.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which AWS service would you use to obtain compliance reports and certificates?",
        "options": [
          "A. AWS Artifact.",
          "B. AWS Lambda.",
          "C. Amazon Inspector.",
          "D. AWS Certificate Manager."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** provides on-demand, self-service access to AWS's security compliance documentation and auditor reports.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which AWS services are defined as global instead of regional? (Select TWO)",
        "options": [
          "A. Amazon Route 53.",
          "B. Amazon EC2.",
          "C. Amazon S3.",
          "D. Amazon CloudFront.",
          "E. Amazon DynamoDB."
        ],
"correct_letter": "AD",
        "explanation": "Global services operate across the entire global network of edge locations rather than being locked to a regional boundary. **Amazon Route 53** (DNS) and **Amazon CloudFront** (CDN) are global services.\n\n\n---"
      },
      {
        "id": 48,
        "question": "How would an AWS customer easily apply common access controls to a large set of users?",
        "options": [
          "A. Apply an IAM policy to an IAM group.",
          "B. Apply an IAM policy to an IAM role.",
          "C. Apply the same IAM policy to all IAM users with access to the same workload.",
          "D. Apply an IAM policy to an Amazon Cognito user pool."
        ],
        "correct_letter": "A",
        "explanation": "Best practices recommend adding users to an **IAM Group** and attaching the security policies to the group, automatically applying the rules to all members.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following is an important architectural design principle when designing cloud applications?",
        "options": [
          "A. Use multiple Availability Zones.",
          "B. Use tightly coupled components.",
          "C. Use open source software.",
          "D. Provision extra capacity."
        ],
        "correct_letter": "A",
        "explanation": "Spreading resources across **multiple Availability Zones** prevents a localized datacenter blackout from causing application downtime.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        "options": [
          "A. AWS Server Migration Service.",
          "B. AWS Organizations.",
          "C. AWS Budgets.",
          "D. AWS Trusted Advisor."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Organizations** supports consolidated billing, consolidating usage across accounts to reach higher volume discount pricing.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 9
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 10",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
        "options": [
          "A. AWS Concierge.",
          "B. AWS CloudFormation.",
          "C. Amazon Simple Storage Service (Amazon S3).",
          "D. Amazon EC2 Auto Scaling.",
          "E. AWS Management Console."
        ],
"correct_letter": "BE",
        "explanation": "An RDS cluster can be provisioned graphically via the **AWS Management Console** (E) or programmatically configured using Infrastructure as Code (IaC) via **AWS CloudFormation** templates (B).\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        "options": [
          "A. One-year, No Upfront, Standard RI pricing.",
          "B. One-year, All Upfront, Convertible RI pricing.",
          "C. Three-year, All Upfront, Standard RI pricing.",
          "D. Three-year, No Upfront, Convertible RI pricing."
        ],
        "correct_letter": "C",
        "explanation": "Standard RIs yield larger discounts than Convertible RIs. Longer commitments (3-year vs. 1-year) and payment choices (All Upfront vs. No/Partial Upfront) produce the largest discounts. Therefore, 3-year, All Upfront, Standard RIs offer the highest average savings (up to 72%).\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
        "options": [
          "A. Summaries by Amazon Simple Notification Service (Amazon SNS).",
          "B. Free Amazon Elasticsearch Service analytics.",
          "C. Provided at no charge.",
          "D. Real-time monitoring.",
          "E. Adjustable retention."
        ],
"correct_letter": "DE",
        "explanation": "CloudWatch Logs allows you to track and store system and application logs, supporting:\n**Real-time monitoring** (D) of log entries to identify issues.\n**Adjustable retention** (E) where you set log group retention limits from 1 day to indefinite.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which of the following is an AWS-managed compute service?",
        "options": [
          "A. Amazon SWF.",
          "B. Amazon EC2.",
          "C. AWS Lambda.",
          "D. Amazon Aurora."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Lambda** is a fully managed serverless compute service. EC2 is customer-managed compute (IaaS), SWF is a workflow coordinator, and Aurora is a database service.\n\n\n---"
      },
      {
        "id": 5,
        "question": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        "options": [
          "A. Amazon Elastic Compute Cloud (Amazon EC2).",
          "B. AWS Lambda.",
          "C. Amazon DynamoDB.",
          "D. AWS CodeCommit."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** executes developer code on-demand without provisioning or managing virtual machines, eliminating physical and software compute capacity maintenance burdens.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Patching underlying infrastructure",
          "B. Physical security",
          "C. Patching Amazon EC2 instances",
          "D. Patching network infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "Under the Shared Responsibility Model, patching the guest operating system and applications installed on EC2 instances is the customer's responsibility (C).\n\n\n---"
      },
      {
        "id": 7,
        "question": "According to the AWS shared responsibility model who is responsible for configuration management?",
        "options": [
          "A. It is solely the responsibility of the customer.",
          "B. It is solely the responsibility of AWS.",
          "C. It is shared between AWS and the customer.",
          "D. It is not part of the AWS shared responsibility model."
        ],
        "correct_letter": "C",
        "explanation": "Configuration management is a **shared control**. AWS configures physical network infrastructure and hardware systems, while the customer configures their deployed resources (OS, subnets, firewalls, and application code).\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        "options": [
          "A. Amazon GuardDuty.",
          "B. Amazon Macie.",
          "C. Amazon Inspector.",
          "D. AWS Shield."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed data security and privacy service that leverages machine learning and pattern matching to discover, classify, and secure sensitive information (like PII) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
        "options": [
          "A. Fixed-term.",
          "B. Pay-as-you-go.",
          "C. Colocation.",
          "D. Planned.",
          "E. Variable cost."
        ],
"correct_letter": "BE",
        "explanation": "AWS services feature utility pricing: you pay for resources as you use them (**pay-as-you-go**) (B), yielding a **variable cost** (E) structure that adjusts alongside active usage demand.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
        "options": [
          "A. Ensuring that application data is encrypted at rest.",
          "B. Ensuring that AWS NTP servers are set to the correct time.",
          "C. Ensuring that users have received security training in the use of AWS services.",
          "D. Ensuring that access to data centers is restricted.",
          "E. Ensuring that hardware is disposed of properly."
        ],
"correct_letter": "AC",
        "explanation": "The customer manages security \"in\" the cloud, which includes configuring data-at-rest encryption (A) and managing security training awareness for their own staff users (C). Datacenter security and hardware disposal are AWS responsibilities.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        "options": [
          "A. Create one global AWS account and move all AWS resources to that account.",
          "B. Sign up for three years of Reserved Instance pricing up front.",
          "C. Use the consolidated billing feature from AWS Organizations.",
          "D. Sign up for the AWS Enterprise support plan to get volume discounts."
        ],
        "correct_letter": "C",
        "explanation": "**Consolidated billing** aggregates usage across linked accounts under a single master organization account, helping qualify for volume discount tiers without requiring changes to active resources.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
        "options": [
          "A. A Partial Upfront Reserved Instances for a 1-year term.",
          "B. All Upfront Reserved instances for a 1 year form.",
          "C. All Upfront Reserved Instances for a 3 year term.",
          "D. No Upfront Reserved Instances for a 3 year term."
        ],
        "correct_letter": "C",
        "explanation": "Standard RIs with a **3-year term** combined with **All Upfront** payment offer the highest discount percentage compared to standard On-Demand rates.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
        "options": [
          "A. Amazon Glacier.",
          "B. Amazon RDS.",
          "C. AWS Snowball.",
          "D. Amazon Redshift.",
          "E. Amazon EFS."
        ],
"correct_letter": "BE",
        "explanation": "Frequently updated database records and transactional files require active read/write capacities.\n**Amazon RDS** (B) is a managed relational database service.\n**Amazon EFS** (E) is a scalable shared network file system.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which AWS service allows users to identify the changes made to a resource over time?",
        "options": [
          "A. Amazon Inspector.",
          "B. AWS Config.",
          "C. AWS Service Catalog.",
          "D. AWS IAM."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Config** monitors and logs configuration settings for AWS resources. It records configurations continuously, keeping a historical timeline of modifications.\n\n\n---"
      },
      {
        "id": 15,
        "question": "According to best practices, how should an application be designed to run in the AWS Cloud?",
        "options": [
          "A. Use tightly coupled components.",
          "B. Use loosely coupled components.",
          "C. Use infrequently coupled components.",
          "D. Use frequently coupled components."
        ],
        "correct_letter": "B",
        "explanation": "Building **loosely coupled components** ensures that failure in one application service does not trigger cascading failures across other parts of the application architecture.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
        "options": [
          "A. 24/7 assistance by way of live chat or a telephone call.",
          "B. Support from a dedicated AWS Technical Account Manager.",
          "C. An unlimited number of cases and contacts.",
          "D. 15-minute response time for production system interruption cases.",
          "E. Annual operational reviews with AWS Solutions Architects."
        ],
"correct_letter": "AC",
        "explanation": "The **Business Support** plan features 24x7 phone, email, and chat access to Cloud Support Engineers (A).\nIt permits an **unlimited number of support cases and contacts** (C).\n*Note:* Dedicated TAMs and annual operational reviews require the Enterprise support tier.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        "options": [
          "A. Amazon Route 53.",
          "B. Amazon Neptune.",
          "C. Amazon SageMaker.",
          "D. Amazon Lightsail."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service.\n\n\n---"
      },
      {
        "id": 18,
        "question": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
        "options": [
          "A. Dedicated Hosts.",
          "B. Dedicated Instances.",
          "C. Spot Instances.",
          "D. Reserved Instances."
        ],
        "correct_letter": "A",
        "explanation": "**Dedicated Hosts** provision physical host servers dedicated solely to a single customer's use, providing the socket/core visibility needed to satisfy licensing and compliance requirements.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        "options": [
          "A. Dedicated RIs.",
          "B. Scheduled RIs.",
          "C. Convertible RIs.",
          "D. Standard RIs."
        ],
        "correct_letter": "C",
        "explanation": "**Convertible Reserved Instances** allow you to exchange the RI for another Convertible RI of equal or greater value to modify attributes like family, size, or OS type over the term.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which service is best for storing common database query results, which helps to alleviate database access load?",
        "options": [
          "A. Amazon Machine Learning.",
          "B. Amazon SQS.",
          "C. Amazon ElastiCache.",
          "D. Amazon EC2 Instance Store."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon ElastiCache** acts as an in-memory cache. Caching database query results in memory reduces database query loads and improves application speed.\n\n\n---"
      },
      {
        "id": 21,
        "question": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
        "options": [
          "A. For non-production applications.",
          "B. For stateful workloads.",
          "C. For applications that cannot have interruptions.",
          "D. For fault-tolerant flexible applications.",
          "E. For sensitive database applications."
        ],
"correct_letter": "AD",
        "explanation": "Spot instances leverage spare capacity at steep discounts. However, they can be reclaimed by AWS on short notice, making them ideal only for **non-production environments** (A) and **fault-tolerant, flexible applications** (D) (like batch computations).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS tools assist with estimating costs? (Select three)",
        "options": [
          "A. Detailed billing report.",
          "B. Cost allocation tags.",
          "C. AWS Simple Monthly Calculator.",
          "D. AWS Total Cost of Ownership (TCO) Calculator.",
          "E. Cost Estimator."
        ],
"correct_letter": "BCD",
        "explanation": "**Simple Monthly Calculator** (C) estimates monthly service billing based on resource inputs.\n**TCO Calculator** (D) compares on-premises database/hardware costs against AWS.\n**Cost allocation tags** (B) categorize resources to track and forecast budgets.\n\n\n---"
      },
      {
        "id": 23,
        "question": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
        "options": [
          "A. Elastic Load Balancer.",
          "B. Amazon EC2 Auto Scaling.",
          "C. Amazon Route 53.",
          "D. Amazon CloudFront."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EC2 Auto Scaling** automatically adjusts compute fleet capacities, adding instances during traffic spikes and terminating them during idle periods.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        "options": [
          "A. Enterprise.",
          "B. Business.",
          "C. Developer.",
          "D. Basic."
        ],
        "correct_letter": "A",
        "explanation": "**Infrastructure Event Management (IEM)** is included at no additional charge in the **Enterprise** support tier. (It is available in the Business plan for an additional fee).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Access keys in AWS Identity and Access Management (IAM) are used to:",
        "options": [
          "A. Log in to the AWS Management Console.",
          "B. Make programmatic calls to AWS from AWS APIs.",
          "C. Log in to Amazon EC2 instances.",
          "D. Authenticate to AWS CodeCommit repositories."
        ],
        "correct_letter": "B",
        "explanation": "Access Keys (Access Key ID and Secret Access Key) are cryptographic credentials used to sign programmatic API calls made via the CLI, SDKs, or application code.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
        "options": [
          "A. AWS Glue.",
          "B. AWS Data Pipeline.",
          "C. Amazon CloudSearch.",
          "D. Amazon Athena."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Athena** is an interactive serverless query service designed to analyze S3 data directly using standard SQL queries, with no database load overhead.\n\n\n---"
      },
      {
        "id": 27,
        "question": "How does AWS shorten the time to provision IT resources?",
        "options": [
          "A. It supplies an online IT ticketing platform for resource requests.",
          "B. It supports automatic code validation services.",
          "C. It provides the ability to programmatically provision existing resources.",
          "D. It automates the resource request process from a company’s IT vendor list."
        ],
        "correct_letter": "C",
        "explanation": "Because AWS resource management is API-driven, developers can instantly **programmatically provision resources** using CLI or SDK utilities, decreasing server setup cycles from weeks to minutes.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
        "options": [
          "A. Amazon CloudFront.",
          "B. AWS Cloud9.",
          "C. AWS CloudTrail.",
          "D. AWS CloudHSM.",
          "E. Amazon CloudWatch."
        ],
"correct_letter": "CE",
        "explanation": "**AWS CloudTrail** (C) logs API calls and account user activity history.\n**Amazon CloudWatch** (E) monitors resource metrics and collects log data.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following are characteristics of Amazon S3? (Select TWO)",
        "options": [
          "A. A global file system.",
          "B. An object store.",
          "C. A local file store.",
          "D. A network file system.",
          "E. A durable storage system."
        ],
"correct_letter": "BE",
        "explanation": "Amazon S3 stores files as key-value objects in flat namespaces (**object store**) (B) and replicates data automatically to ensure high **durability** (99.999999999% durability) (E).\n\n\n---"
      },
      {
        "id": 30,
        "question": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
        "options": [
          "A. AWS Budgets.",
          "B. Cost Explorer.",
          "C. AWS Total Cost of Ownership (TCO) Calculator.",
          "D. AWS Well-Architected Tool."
        ],
        "correct_letter": "C",
        "explanation": "The **AWS TCO Calculator** generates estimations comparing on-premises server and operational expenditures to AWS hosting models, helping justify migration decisions.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following services is in the category of AWS serverless platform?",
        "options": [
          "A. Amazon EMR.",
          "B. Elastic Load Balancing.",
          "C. AWS Lambda.",
          "D. AWS Mobile Hub."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Lambda** is the core serverless compute service on the AWS serverless platform.\n\n\n---"
      },
      {
        "id": 32,
        "question": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        "options": [
          "A. Cost allocation tags.",
          "B. Consolidated billing.",
          "C. AWS Budgets.",
          "D. AWS Marketplace."
        ],
        "correct_letter": "A",
        "explanation": "**Cost allocation tags** allow labeling resources with metadata, letting teams filter and group expenses by environment, owner, or application.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        "options": [
          "A. AWS Cost Explorer.",
          "B. AWS Trusted Advisor.",
          "C. Consolidated billing.",
          "D. Detailed billing."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Trusted Advisor** offers optimization check reports covering Cost Optimization (saving money) and Performance (improving speed).\n\n\n---"
      },
      {
        "id": 34,
        "question": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        "options": [
          "A. Cloud-native.",
          "B. Partner network.",
          "C. Hybrid architecture.",
          "D. Infrastructure as a service."
        ],
        "correct_letter": "C",
        "explanation": "A **hybrid architecture** integrates public cloud infrastructure (EC2) with local on-premises workloads (legacy corporate datacenters).\n\n\n---"
      },
      {
        "id": 35,
        "question": "What technology enables compute capacity to adjust as loads change?",
        "options": [
          "A. Load balancing.",
          "B. Automatic failover.",
          "C. Round robin.",
          "D. Auto Scaling."
        ],
        "correct_letter": "D",
        "explanation": "**Auto Scaling** dynamically launches or terminates compute resources in response to changing performance loads.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which AWS service is a managed NoSQL database?",
        "options": [
          "A. Amazon Redshift.",
          "B. Amazon DynamoDB.",
          "C. Amazon Aurora.",
          "D. Amazon RDS for MariaDB."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is AWS's fully managed NoSQL key-value database service. (RDS and Aurora are relational database services).\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        "options": [
          "A. Data centers contain regions.",
          "B. Regions contain Availability Zones.",
          "C. Availability Zones contain edge locations.",
          "D. Edge locations contain regions."
        ],
        "correct_letter": "B",
        "explanation": "An AWS **Region** represents a geographic area which contains multiple physically isolated, low-latency connected **Availability Zones (AZs)**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        "options": [
          "A. Using many instances in parallel.",
          "B. Using a single large instance during off-peak hours.",
          "C. Using dedicated hardware.",
          "D. Using a large GPU instance type."
        ],
        "correct_letter": "A",
        "explanation": "AWS architectural guidelines recommend horizontal scaling and parallel processing. Distributing transcoding jobs across **many instances in parallel** (A) improves throughput and cost-efficiency.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        "options": [
          "A. Amazon EC2.",
          "B. Amazon Relational Database Service (Amazon RDS).",
          "C. Amazon Aurora.",
          "D. Amazon Redshift.",
          "E. Amazon S3."
        ],
"correct_letter": "AB",
        "explanation": "SQL Server databases can be run as customer-managed hosts on **Amazon EC2** (A) or managed databases on **Amazon RDS for SQL Server** (B).\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        "options": [
          "A. API keys.",
          "B. Access keys.",
          "C. User names/Passwords.",
          "D. SSH keys."
        ],
        "correct_letter": "B",
        "explanation": "Programmatic access keys (comprising Access Key ID and Secret Access Key) must be configured in the AWS CLI to authorize terminal API queries.\n\n\n---"
      },
      {
        "id": 41,
        "question": "The user is fully responsible for which action when running workloads on AWS?",
        "options": [
          "A. Patching the infrastructure components.",
          "B. Maintaining the underlying infrastructure components.",
          "C. Maintaining physical and environmental controls.",
          "D. Implementing controls to route application traffic."
        ],
        "correct_letter": "D",
        "explanation": "Setting up traffic routing policies (like Route 53 or load balancers) is the customer's responsibility (D). Hardware hosting, physical safety controls, and physical infrastructure patching are managed by AWS.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which AWS support plan includes a dedicated Technical Account Manager?",
        "options": [
          "A. Developer.",
          "B. Enterprise.",
          "C. Business.",
          "D. Basic."
        ],
        "correct_letter": "B",
        "explanation": "A dedicated Technical Account Manager (TAM) is only included in the **Enterprise** support tier.\n\n\n---"
      },
      {
        "id": 43,
        "question": "What time-savings advantage is offered with the use of Amazon Rekognition?",
        "options": [
          "A. Amazon Rekognition provides automatic watermarking of images.",
          "B. Amazon Rekognition provides automatic detection of objects appearing in pictures.",
          "C. Amazon Recognition provides the ability to resize millions of images automatically.",
          "D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Rekognition** automates computer vision workflows, instantly detecting objects, faces, text, and scenes in photos and videos.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
        "options": [
          "A. Amazon AutoScaling.",
          "B. Amazon Redshift.",
          "C. AWS CloudTrail.",
          "D. AWS Lambda."
        ],
        "correct_letter": "D",
        "explanation": "Since **AWS Lambda** is serverless, it runs and scales code automatically in response to triggers without requiring manual capacity planning or VM provisioning.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        "options": [
          "A. AWS manages the data stored in Amazon RDS tables.",
          "B. AWS manages the maintenance of the operating system.",
          "C. AWS automatically scales up instance types on demand.",
          "D. AWS manages the database type."
        ],
        "correct_letter": "B",
        "explanation": "RDS automates guest operating system installation, patches, and system maintenance updates (B). The customer remains responsible for table schemas, records, and access permissions.\n\n\n---"
      },
      {
        "id": 46,
        "question": "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        "options": [
          "A. Implementing elasticity enabling the application to scale up or scale down as demand changes.",
          "B. Enabling several EC2 instances to run in parallel to achieve better performance.",
          "C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
          "D. Doubling EC2 computing resources to increase system fault tolerance."
        ],
        "correct_letter": "C",
        "explanation": "**Decoupling** isolates application services, ensuring failures in individual components (like database writing) do not crash the entire application stack.\n\n\n---"
      },
      {
        "id": 47,
        "question": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        "options": [
          "A. AWS Partner Network Technology Partners.",
          "B. AWS Marketplace.",
          "C. AWS Partner Network Consulting Partners.",
          "D. AWS Service Catalog."
        ],
        "correct_letter": "C",
        "explanation": "**APN Consulting Partners** are professional service firms (consultancies, system integrators) that help customers design, architect, build, migrate, and manage their applications on AWS.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        "options": [
          "A. Amazon Glacier.",
          "B. AWS Storage Gateway.",
          "C. Amazon S3.",
          "D. Amazon EBS."
        ],
        "correct_letter": "C",
        "explanation": "**Amazon S3** is an object storage service providing immediate read/write access to files, built-in file versioning, and lifecycle management rules.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        "options": [
          "A. Implement automation.",
          "B. Design for agility.",
          "C. Design for failure.",
          "D. Implement elasticity."
        ],
        "correct_letter": "C",
        "explanation": "Distributing workloads across multiple AZs adheres to **designing for failure**, ensuring continuous operation even during total power grid failure in a single zone.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        "options": [
          "A. AWS IAM.",
          "B. AWS Organizations.",
          "C. AWS Schema Conversion Tool.",
          "D. AWS Config."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Organizations** is designed to centrally govern, manage, consolidate billing, and apply service control policies (SCPs) across multiple AWS accounts.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 10
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 11",
    "questions": [
      {
        "id": 1,
        "question": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
        "options": [
          "A. By minimizing large capital expenditures.",
          "B. By having no responsibility for third-party license costs.",
          "C. By having no operational expenditures.",
          "D. By having AWS manage applications."
        ],
        "correct_letter": "A",
        "explanation": "AWS replaces the need to pay large upfront capital expenditures (CapEx) to purchase and set up physical datacenters and servers with lower, variable pay-as-you-go operational expenditures (OpEx), which reduces overall TCO.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
        "options": [
          "A. AWS Trusted Advisor.",
          "B. AWS Online Tech Talks.",
          "C. AWS Blog.",
          "D. AWS Forums.",
          "E. AWS Classroom Training."
        ],
"correct_letter": "BE",
        "explanation": "**AWS Classroom Training** (E) features live classes (in-person or virtual) led by accredited AWS instructors.\n**AWS Online Tech Talks** (B) are live, interactive webinars presented by AWS experts/instructors where users can ask questions in real-time.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following will enhance the security of access to the AWS Management Console? (Select TWO)",
        "options": [
          "A. AWS Secrets Manager.",
          "B. AWS Certificate Manager.",
          "C. AWS Multi-Factor Authentication (AWS MFA).",
          "D. Security groups.",
          "E. Password policies."
        ],
"correct_letter": "CE",
        "explanation": "Access to the console is secured by:\n**MFA** (C) which adds a second layer of authentication (e.g. dynamic token from virtual or hardware device).\n**Password policies** (E) which enforce complexity, rotation, and lockout guidelines.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
        "options": [
          "A. Amazon CloudFront distributions.",
          "B. Amazon Route 53.",
          "C. Security Groups.",
          "D. Subnets.",
          "E. Elastic Load Balancing."
        ],
"correct_letter": "CD",
        "explanation": "The **Amazon VPC Dashboard** is used to manage virtual networking resources, including **Subnets** (D) (IP address ranges within a VPC) and **Security Groups** (C) (instance-level firewalls).\n\n\n---"
      },
      {
        "id": 5,
        "question": "For which auditing process does AWS have sole responsibility?",
        "options": [
          "A. AWS IAM policies.",
          "B. Physical security.",
          "C. Amazon S3 bucket policies.",
          "D. AWS CloudTrail Logs."
        ],
        "correct_letter": "B",
        "explanation": "In the Shared Responsibility Model, AWS is solely responsible for auditing the physical and environmental security of its data centers and underlying cloud hardware infrastructure. Customers audit their own IAM policies, S3 bucket policies, and CloudTrail log history.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
        "options": [
          "A. The ability to receive one bill for multiple accounts.",
          "B. Service limits increasing by default in all accounts.",
          "C. A fixed discount on the monthly bill.",
          "D. Potential volume discounts, as usage in all accounts is combined.",
          "E. The automatic extension of the master account’s AWS support plan to all accounts."
        ],
"correct_letter": "AD",
        "explanation": "Consolidated billing under AWS Organizations provides:\n**One bill** (A) representing the combined charges of all member accounts.\n**Volume pricing discounts** (D) because usage across all accounts is aggregated, qualifying the organization for lower tier rates.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
        "options": [
          "A. Patching databases software.",
          "B. Testing application releases.",
          "C. Backing up databases.",
          "D. Creating database schema.",
          "E. Running penetration tests."
        ],
"correct_letter": "AC",
        "explanation": "By using managed services like Amazon RDS, AWS manages **patching database software** (A) and executing automated **database backups** (C), allowing IT staff to focus on other core tasks.\n\n\n---"
      },
      {
        "id": 8,
        "question": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
        "options": [
          "A. Contact an AWS Account Manager to sign a new contract.",
          "B. Move an Availability Zone to the new Region.",
          "C. Begin deploying resources in the second Region.",
          "D. Download the AWS Management Console for the new Region."
        ],
        "correct_letter": "C",
        "explanation": "The AWS global infrastructure is on-demand. To start using a new Region, a customer simply selects that Region from the console/CLI/SDK dropdown and **begins deploying resources** there immediately.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Why is it beneficial to use Elastic Load Balancers with applications?",
        "options": [
          "A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
          "B. Balancers to Classic Load Balancers.",
          "C. They are capable of handling constant changes in network traffic patterns.",
          "D. They automatically adjust capacity. They are provided at no charge to users."
        ],
        "correct_letter": "C",
        "explanation": "Elastic Load Balancers automatically scale their routing and handling capacity in response to varying incoming traffic volumes, ensuring high availability and handling traffic fluctuations.\n\n\n---"
      },
      {
        "id": 10,
        "question": "What is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        "options": [
          "A. Enterprise.",
          "B. Business.",
          "C. Developer.",
          "D. Basic."
        ],
        "correct_letter": "B",
        "explanation": "The **Business Support** plan guarantees a response time of less than 1 hour for production system down incidents, making it the minimum plan to meet this requirement.\n\n\n---"
      },
      {
        "id": 11,
        "question": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        "options": [
          "A. Amazon S3.",
          "B. Amazon Glacier.",
          "C. Amazon EBS.",
          "D. Amazon EC2 Instance Store."
        ],
        "correct_letter": "A",
        "explanation": "Amazon S3 offers highly durable object storage at low cost with **immediate retrieval** support (via S3 Standard or S3 Standard-IA). Glacier requires minutes to hours for data retrieval, EC2 Instance Store is ephemeral (non-durable), and EBS is block storage meant for active EC2 instance mounting (which is more expensive than S3 per GB).\n\n\n---"
      },
      {
        "id": 12,
        "question": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        "options": [
          "A. AWS Enterprise Support.",
          "B. AWS Solutions Architects.",
          "C. AWS Professional Services.",
          "D. AWS Account Managers."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Professional Services** is a global team of experts that assists customers through paid consulting engagements to design, build, and optimize their workloads on AWS.\n\n\n---"
      },
      {
        "id": 13,
        "question": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
        "options": [
          "A. Basic.",
          "B. Developer.",
          "C. Business.",
          "D. Enterprise."
        ],
        "correct_letter": "C",
        "explanation": "The **Business Support** plan is the lowest-cost plan that provides 24x7 phone, email, and chat support with <1 hour response times for production system disruptions.\n\n\n---"
      },
      {
        "id": 14,
        "question": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        "options": [
          "A. AWS Config.",
          "B. AWS Trusted Advisor.",
          "C. Amazon CloudWatch.",
          "D. Amazon Inspector."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Config** is used to audit change management by tracking, recording, and evaluating configuration changes of AWS resources over time.\n\n\n---"
      },
      {
        "id": 15,
        "question": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
        "options": [
          "A. It identifies software vulnerabilities in applications running on AWS.",
          "B. It provides a list of cost optimization recommendations based on current AWS usage.",
          "C. It detects potential security vulnerabilities caused by permissions settings on account resources.",
          "D. It automatically corrects potential security issues caused by permissions settings on account resources.",
          "E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised."
        ],
"correct_letter": "BC",
        "explanation": "Trusted Advisor checks resources against best practices and provides recommendations for:\n**Cost optimization** (B) (identifying idle resources).\n**Security vulnerabilities** (C) (flags open ports, weak IAM configuration).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which AWS managed service is used to host databases?",
        "options": [
          "A. AWS Batch.",
          "B. AWS Artifact.",
          "C. AWS Data Pipeline.",
          "D. Amazon RDS."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon RDS** (Relational Database Service) is the managed service used to set up, operate, and scale relational databases in the cloud.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        "options": [
          "A. IAM group.",
          "B. IAM user.",
          "C. IAM role.",
          "D. IAM policy."
        ],
        "correct_letter": "B",
        "explanation": "Access keys are associated directly with an **IAM User** to authenticate programmatic CLI/SDK commands under that user's identity.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Under the shared responsibility model, which of the following is the customer responsible for?",
        "options": [
          "A. Ensuring that disk drives are wiped after use.",
          "B. Ensuring that firmware is updated on hardware devices.",
          "C. Ensuring that data is encrypted at rest.",
          "D. Ensuring that network cables are category six or higher."
        ],
        "correct_letter": "C",
        "explanation": "Data security \"in\" the cloud, such as configuring encryption keys and applying encryption to data at rest, is the customer's responsibility.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        "options": [
          "A. Amazon S3.",
          "B. Amazon Glacier.",
          "C. Amazon EBS.",
          "D. Amazon EFS."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Elastic File System (Amazon EFS)** is a managed network file system (NFS) that provides shared, scalable file storage for Linux instances and on-premises servers.\n\n\n---"
      },
      {
        "id": 20,
        "question": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
        "options": [
          "A. An access key ID.",
          "B. A primary key.",
          "C. A secret access key.",
          "D. A user ID.",
          "E. A secondary key."
        ],
"correct_letter": "AC",
        "explanation": "Programmatic interactions with AWS APIs (using CLI, SDKs, or tools) require an **Access Key ID** (A) and a **Secret Access Key** (C).\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following is a shared control between the customer and AWS?",
        "options": [
          "A. Providing a key for Amazon S3 client-side encryption.",
          "B. Configuration of an Amazon EC2 instance.",
          "C. Environmental controls of physical AWS data centers.",
          "D. Awareness."
        ],
        "correct_letter": "D",
        "explanation": "**Awareness & Training** is a shared control: AWS trains its employees on security and infrastructure, and customers are responsible for training their own users on cloud security and IAM compliance.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
        "options": [
          "A. Amazon EBS.",
          "B. Amazon EC2 instance store.",
          "C. Amazon EFS.",
          "D. Amazon S3."
        ],
        "correct_letter": "B",
        "explanation": "**EC2 Instance Store** provides temporary, block-level storage located physically on the host computer. It is ephemeral; data is lost if the instance stops, terminates, or the host hardware fails.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the following is an advantage of consolidated billing on AWS?",
        "options": [
          "A. Volume pricing qualification.",
          "B. Shared access permissions.",
          "C. Multiple bills per account.",
          "D. Eliminates the need for tagging."
        ],
        "correct_letter": "A",
        "explanation": "Consolidated billing combines usage across all linked accounts, which helps the company qualify for higher tier volume discounts on services like S3 and EC2.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which services are parts of the AWS serverless platform?",
        "options": [
          "A. Amazon EC2, Amazon S3, Amazon Athena.",
          "B. Amazon Kinesis, Amazon SQS, Amazon EMR.",
          "C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
          "D. Amazon Athena, Amazon Cognito, Amazon EC2."
        ],
        "correct_letter": "C",
        "explanation": "Serverless services require no server management from the customer. AWS Step Functions (orchestration), DynamoDB (NoSQL database), and SNS (notifications) are all fully serverless (C). EC2 and EMR require server provisioning and/or cluster sizing management.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        "options": [
          "A. Spot Instances.",
          "B. Reserved Instances.",
          "C. Dedicated Hosts.",
          "D. On-Demand Instances."
        ],
        "correct_letter": "C",
        "explanation": "**Dedicated Hosts** allocate a physical server dedicated entirely to the customer, supporting Bring Your Own License (BYOL) software models bound to sockets or cores.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which of the following security measures protect access to an AWS account? (Select TWO)",
        "options": [
          "A. Enable AWS CloudTrail.",
          "B. Grant least privilege access to IAM users.",
          "C. Create one IAM user and share with many developers and users.",
          "D. Enable Amazon CloudFront.",
          "E. Activate multi-factor authentication (MFA) for privileged users."
        ],
"correct_letter": "BE",
        "explanation": "Best practice security measures include:\nGranting **least privilege access** to IAM users (B) to limit exposure.\nActivating **MFA** for privileged users (E) to enforce multi-factor logins.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which AWS service provides the ability to manage infrastructure as code?",
        "options": [
          "A. AWS CodePipeline.",
          "B. AWS CodeDeploy.",
          "C. AWS Direct Connect.",
          "D. AWS CloudFormation."
        ],
        "correct_letter": "D",
        "explanation": "**AWS CloudFormation** allows users to model and provision AWS infrastructure resources programmatically using JSON or YAML text files (Infrastructure as Code).\n\n\n---"
      },
      {
        "id": 28,
        "question": "What is an advantage of deploying an application across multiple Availability Zones?",
        "options": [
          "A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
          "B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
          "C. There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
          "D. There will be decreased application latency that will improve the user experience."
        ],
        "correct_letter": "B",
        "explanation": "Spreading instances across multiple AZs within a Region isolates them from power, water, or cooling failures in a single AZ, giving the system higher availability.\n\n\n---"
      },
      {
        "id": 29,
        "question": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        "options": [
          "A. Amazon Aurora.",
          "B. Amazon Redshift.",
          "C. Amazon DynamoDB.",
          "D. Amazon ElastiCache."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora** is a fully managed, MySQL and PostgreSQL-compatible relational database built for the cloud that easily and automatically scales compute and storage.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the following is an AWS Cloud architecture design principle?",
        "options": [
          "A. Implement single points of failure.",
          "B. Implement loose coupling.",
          "C. Implement monolithic design.",
          "D. Implement vertical scaling."
        ],
        "correct_letter": "B",
        "explanation": "Decoupled, loosely coupled architectures prevent localized failures from crashing adjacent services.\n\n\n---"
      },
      {
        "id": 31,
        "question": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
        "options": [
          "A. AWS Trusted Advisor.",
          "B. AWS Support case.",
          "C. Concierge team.",
          "D. Amazon Connect."
        ],
        "correct_letter": "C",
        "explanation": "The **Concierge team** (assisting with billing, account settings, and best practices) is exclusively available to **Enterprise** Support plan members.\n\n\n---"
      },
      {
        "id": 32,
        "question": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        "options": [
          "A. Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
          "B. Moving from upfront capital expense (capex) to variable capital expense (capex).",
          "C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
          "D. Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
        ],
        "correct_letter": "C",
        "explanation": "Cloud adoption moves companies from paying high upfront capital expenditures (CapEx) for datacenters/servers to variable pay-as-you-go operational expenditures (OpEx).\n\n\n---"
      },
      {
        "id": 33,
        "question": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        "options": [
          "A. Dedicated Hosts",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. No Upfront Reserved Instances"
        ],
        "correct_letter": "A",
        "explanation": "**Dedicated Hosts** physically isolate customer workloads at the host level, ensuring no other customers share the physical hardware.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which AWS service should be used for long-term, low-cost storage of data backups?",
        "options": [
          "A. Amazon RDS.",
          "B. Amazon Glacier.",
          "C. AWS Snowball.",
          "D. AWS EBS."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon S3 Glacier** is optimized for cold data archives and backups, providing very low-cost long-term storage.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        "options": [
          "A. Enterprise.",
          "B. Business.",
          "C. Developer.",
          "D. Basic."
        ],
        "correct_letter": "B",
        "explanation": "**Business** is the minimum support plan that allows phone and chat contact with AWS engineers 24/7. (Developer offers email support during business hours only; Basic offers no technical support).\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        "options": [
          "A. Reserved Instances.",
          "B. On-Demand.",
          "C. Dedicated Hosts.",
          "D. Spot Instances."
        ],
        "correct_letter": "D",
        "explanation": "**Spot Instances** utilize spare EC2 capacity at steep discounts of up to 90% compared to standard On-Demand pricing.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
        "options": [
          "A. appGateway.",
          "B. Amazon S3.",
          "C. Amazon Elastic File System (EFS).",
          "D. Amazon Glacier.",
          "E. Amazon CloudFront."
        ],
"correct_letter": "BE",
        "explanation": "**Amazon S3** (B) hosts video objects durably.\n**Amazon CloudFront** (E) caches and delivers the video streams with ultra-low latency via edge locations around the world.\n\n\n---"
      },
      {
        "id": 38,
        "question": "What can AWS edge locations be used for? (Select TWO)",
        "options": [
          "A. Hosting applications.",
          "B. Delivering content closer to users.",
          "C. Running NoSQL database caching services.",
          "D. Reducing traffic on the server by caching responses.",
          "E. Sending notification messages to end users."
        ],
"correct_letter": "BD",
        "explanation": "Edge locations are points of presence used by Amazon CloudFront to:\nCache content to deliver it closer to end-users (B).\nReduce request traffic reaching origin servers by serving cached responses locally (D).\n\n\n---"
      },
      {
        "id": 39,
        "question": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
        "options": [
          "A. AWS Total Cost of Ownership (TCO) Calculator.",
          "B. Cost Explorer.",
          "C. AWS Budgets.",
          "D. AWS Migration Hub."
        ],
        "correct_letter": "A",
        "explanation": "The **AWS TCO Calculator** is explicitly designed to model migration scenarios and output cost savings reports comparing AWS vs. on-premises configurations.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
        "options": [
          "A. AWS Service Health Dashboard.",
          "B. AWS X-Ray.",
          "C. AWS Personal Health Dashboard.",
          "D. Amazon CloudWatch."
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Personal Health Dashboard** (AWS Health Dashboard) provides alert details and remediation guides when issues occur with services powering your specific active resources. (The Service Health Dashboard shows the general status of all services across all regions).\n\n\n---"
      },
      {
        "id": 41,
        "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        "options": [
          "A. It allows the business to eliminate IT bills.",
          "B. It allows the business to put a server in each customer’s data center.",
          "C. It allows the business to focus on business activities.",
          "D. It allows the business to leave servers unpatched."
        ],
        "correct_letter": "C",
        "explanation": "Offloading infrastructure operations to AWS allows organizations to focus engineering time and focus on business goals and innovations.\n\n\n---"
      },
      {
        "id": 42,
        "question": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        "options": [
          "A. AWS Senior Support Engineers.",
          "B. AWS Technical Account Managers.",
          "C. AWS Trusted Advisor.",
          "D. AWS Discussion Forums."
        ],
        "correct_letter": "D",
        "explanation": "Basic Support includes access to billing support and customer service, but no technical support. Users seeking technical help must use the community-driven **AWS Discussion Forums** or official documentation.\n\n\n---"
      },
      {
        "id": 43,
        "question": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        "options": [
          "A. Deploy applications across multiple Availability Zones within an AWS Region.",
          "B. Use a hybrid cloud computing deployment model within the geographic area.",
          "C. Deploy applications across multiple AWS Regions.",
          "D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
        ],
        "correct_letter": "C",
        "explanation": "Because natural disasters can affect an entire geographic area (Region), deploying applications across **multiple AWS Regions** provides cross-region redundancy, protecting against regional outages.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
        "options": [
          "A. Ensuring network connectivity from AWS to the internet.",
          "B. Patching and fixing flaws within the AWS Cloud infrastructure.",
          "C. Ensuring the physical security of cloud data centers.",
          "D. Ensuring Amazon EBS volumes are backed up."
        ],
        "correct_letter": "D",
        "explanation": "Backing up client data (including taking snapshots to back up EBS volumes) is the customer's responsibility (D). Network infrastructure, datacenter physical access, and hypervisor patching are managed by AWS.\n\n\n---"
      },
      {
        "id": 45,
        "question": "In which scenario should Amazon EC2 Spot Instances be used?",
        "options": [
          "A. A company wants to move its main website to AWS from an on-premises web server.",
          "B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
          "C. A company’s heavily used legacy database is currently running on-premises.",
          "D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
        ],
        "correct_letter": "D",
        "explanation": "Spot Instances are suited for workload tasks that can survive interruptions, such as background batch rendering or data processing jobs, offering large savings compared to On-Demand instances.\n\n\n---"
      },
      {
        "id": 46,
        "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)",
        "options": [
          "A. Reduced latency to users.",
          "B. The application’s presentation in the local language.",
          "C. Data sovereignty compliance.",
          "D. Cooling costs in hotter climates.",
          "E. Proximity to the customer’s office for on-site visits."
        ],
"correct_letter": "AC",
        "explanation": "Crucial region selection parameters include:\n**Reduced latency to users** (A) by choosing regions closest to customers.\n**Data sovereignty compliance** (C) to satisfy legal requirements regarding local data storage.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
        "options": [
          "A. AWS Personal Health Dashboard.",
          "B. AWS Service Health Dashboard.",
          "C. AWS Trusted Advisor.",
          "D. AWS Infrastructure Event Management."
        ],
        "correct_letter": "A",
        "explanation": "The **AWS Personal Health Dashboard** alerts you and provides remediation guides when active AWS events might affect your specific resources.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which disaster recovery scenario offers the lowest probability of down time?",
        "options": [
          "A. Backup and restore.",
          "B. Pilot light.",
          "C. Warm standby.",
          "D. Multi-site active-active."
        ],
        "correct_letter": "D",
        "explanation": "An **active-active multi-site** disaster recovery strategy runs fully operational workloads in parallel across multiple locations, directing client traffic to both, and yielding near-zero downtime.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service’s PRIMARY purpose is software version control?",
        "options": [
          "A. Amazon CodeStar.",
          "B. AWS Command Line Interface (AWS CLI).",
          "C. Amazon Cognito.",
          "D. AWS CodeCommit."
        ],
        "correct_letter": "D",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 50,
        "question": "How can a customer increase security to AWS account logons? (Select TWO)",
        "options": [
          "A. Configure AWS Certificate Manager",
          "B. Enable Multi-Factor Authentication (MFA)",
          "C. Use Amazon Cognito to manage access",
          "D. Configure a strong password policy",
          "E. Enable AWS Organizations"
        ],
"correct_letter": "BD",
        "explanation": "Account logons are secured by enforcing strong authentication:\n**Multi-Factor Authentication (MFA)** (B) (requires secondary token codes).\n**Strong password policies** (D) (enforcing complexity, character rules, and rotation).\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 11
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 12",
    "questions": [
      {
        "id": 1,
        "question": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        "options": [
          "A. Availability Zone",
          "B. Edge location",
          "C. Region",
          "D. Private networking"
        ],
        "correct_letter": "A",
        "explanation": "An **Availability Zone (AZ)** is one or more discrete datacenters with redundant power, networking, and connectivity in an AWS Region, connected via low-latency, redundant fiber networks.\n\n\n---"
      },
      {
        "id": 2,
        "question": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        "options": [
          "A. The ability to bid for a lower hourly cost.",
          "B. Paying a daily rate regardless of time used.",
          "C. Paying only for time used.",
          "D. Pre-paying for instances and paying a lower hourly rate."
        ],
        "correct_letter": "C",
        "explanation": "On-Demand EC2 instances let you pay only for compute capacity per second or per hour with no long-term commitments or upfront fees, ensuring you pay only for the exact amount of time used.\n\n\n---"
      },
      {
        "id": 3,
        "question": "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
        "options": [
          "A. AWS Trusted Advisor.",
          "B. AWS Professional Services.",
          "C. AWS Systems Manager.",
          "D. AWS Partner Network (APN).",
          "E. AWS Secrets Manager."
        ],
"correct_letter": "BD",
        "explanation": "Evaluating migrations requires specialized consulting expertise:\n**AWS Professional Services** (B) consists of a team of AWS experts who assist organizations with migration planning.\n**AWS Partner Network (APN)** (D) provides certified third-party consultancies and tools to guide migration strategies.\n\n\n---"
      },
      {
        "id": 4,
        "question": "A characteristic of edge locations is that they:",
        "options": [
          "A. Host Amazon EC2 instances closer to users.",
          "B. Help lower latency and improve performance for users.",
          "C. Cache frequently changing data without reaching the origin server.",
          "D. Refresh data changes daily."
        ],
        "correct_letter": "B",
        "explanation": "Edge locations are global points of presence utilized by Amazon CloudFront to cache static content closer to users, lowering latency and boosting content transfer speeds.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
        "options": [
          "A. Command line interface.",
          "B. On-premises.",
          "C. Software Development Kits.",
          "D. Software-as-a-service.",
          "E. Hybrid."
        ],
"correct_letter": "AC",
        "explanation": "Customers manage their resources programmatically using the **AWS Command Line Interface (CLI)** (A) or language-specific **Software Development Kits (SDKs)** (C) integrated into application code.\n\n\n---"
      },
      {
        "id": 6,
        "question": "What is a value proposition of the AWS Cloud?",
        "options": [
          "A. AWS is responsible for security in the AWS Cloud.",
          "B. No long-term contract is required.",
          "C. Provision new servers in days.",
          "D. AWS manages user applications in the AWS Cloud."
        ],
        "correct_letter": "B",
        "explanation": "A primary cloud benefit is flexibility; services are run on a pay-as-you-go consumption model where **no long-term contract is required** to use services.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        "options": [
          "A. Amazon EC2 Spot Instances.",
          "B. Amazon EC2 Dedicated Instances.",
          "C. Amazon EC2 On-Demand Instances.",
          "D. Amazon EC2 Reserved Instances."
        ],
        "correct_letter": "D",
        "explanation": "For continuous, predictable, non-interruptible workloads running over a 3-year term, **Reserved Instances (RIs)** offer the highest discount rate (up to 72%) compared to On-Demand billing.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
        "options": [
          "A. AWS Shield.",
          "B. AWS Config.",
          "C. AWS IAM.",
          "D. Amazon Inspector."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Config** tracks and evaluates resource configuration modifications over time, assisting in audit compliance and inventory governance.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
        "options": [
          "A. Fault tolerance.",
          "B. Global reach.",
          "C. Pay-as-you-go pricing.",
          "D. High availability."
        ],
        "correct_letter": "B",
        "explanation": "**Global reach** (specifically, deploying resources across multiple regions and edge locations worldwide) places applications closer to international users to minimize latency.\n\n\n---"
      },
      {
        "id": 10,
        "question": "How can one AWS account use Reserved Instances from another AWS account?",
        "options": [
          "A. By using Amazon EC2 Dedicated Instances.",
          "B. By using AWS Organizations consolidated billing.",
          "C. By using the AWS Cost Explorer tool.",
          "D. By using AWS Budgets."
        ],
        "correct_letter": "B",
        "explanation": "When accounts are consolidated under **AWS Organizations**, Reserved Instance discounts are automatically shared across all linked accounts in the organization, allowing one account to benefit from another's unused reservations.\n\n\n---"
      },
      {
        "id": 11,
        "question": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
        "options": [
          "A. AWS automatically distributes the data globally for higher durability.",
          "B. AWS will take care of operating the application.",
          "C. AWS makes it easy to architect for high availability.",
          "D. AWS can easily accommodate application demand changes.",
          "E. AWS takes care of application security patching."
        ],
"correct_letter": "CD",
        "explanation": "The cloud simplifies high availability architectures via multiple AZs (C) and accommodates demand fluctuations automatically through Auto Scaling (D).\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        "options": [
          "A. Amazon RDS.",
          "B. Amazon EC2.",
          "C. Amazon ElastiCache.",
          "D. AWS Fargate."
        ],
        "correct_letter": "B",
        "explanation": "Amazon EC2 is an Infrastructure as a Service (IaaS) resource, meaning the guest operating system, custom security patches, software dependencies, and port rules are fully managed by the customer.\n\n\n---"
      },
      {
        "id": 13,
        "question": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
        "options": [
          "A. Implementing Amazon Rekognition.",
          "B. Using AWS Shield-protected resources.",
          "C. Blocking access with Security Groups.",
          "D. Using Multi-Factor Authentication (MFA).",
          "E. Enforcing password strength and expiration."
        ],
"correct_letter": "DE",
        "explanation": "To secure IAM user logins, administrators should enforce **MFA** (D) (second-factor validation tokens) and strong account **password policies** (E) (strength complexity, rotation schedules).\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        "options": [
          "A. Amazon Glacier",
          "B. AWS Snowball",
          "C. AWS Storage Gateway",
          "D. Amazon Elastic Block Storage (Amazon EBS)"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Storage Gateway** is a hybrid cloud storage service that allows on-premises systems to utilize scalable AWS storage options (S3, EBS, Glacier) via file, volume, or tape gateway protocols.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        "options": [
          "A. AWS Marketplace.",
          "B. Amazon Lumberyard.",
          "C. AWS Artifact.",
          "D. Amazon CloudSearch."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Marketplace** is a digital catalog containing thousands of software listings from independent software vendors, enabling quick deployment of pre-configured AMIs and software solutions.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which of the following is a component of the AWS Global Infrastructure?",
        "options": [
          "A. Amazon Alexa.",
          "B. AWS Regions.",
          "C. Amazon Lightsail.",
          "D. AWS Organizations."
        ],
        "correct_letter": "B",
        "explanation": "The physical foundation of the AWS Global Infrastructure is composed of **AWS Regions**, Availability Zones, and Edge Locations.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        "options": [
          "A. On-Demand Instances.",
          "B. Reserved Instances.",
          "C. Spot Instances.",
          "D. Convertible Reserved Instances."
        ],
        "correct_letter": "C",
        "explanation": "**Spot Instances** represent spare EC2 capacity offered at discounts up to 90%, with pricing fluctuating dynamically based on real-time supply and demand.\n\n\n---"
      },
      {
        "id": 18,
        "question": "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
        "options": [
          "A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
          "B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
          "C. Use Amazon Athena to query data from the on-premises database servers",
          "D. Connect the company’s on-premises data center to AWS using AWS Direct Connect",
          "E. Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers"
        ],
"correct_letter": "BD",
        "explanation": "To link on-premises networks to an AWS VPC, organizations use **Site-to-Site VPN** (B) or **AWS Direct Connect** (D) circuits.\n\n\n---"
      },
      {
        "id": 19,
        "question": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
        "options": [
          "A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
          "B. Run AWS Trusted Advisor and review the findings.",
          "C. Open the AWS IAM console and check the inbound rule filters for open access.",
          "D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
        ],
        "correct_letter": "B",
        "explanation": "**AWS Trusted Advisor** automatically scans security group configurations and reports a list of security groups that permit unrestricted incoming access on common ports, making it the simplest solution.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following security-related services does AWS offer? (Select TWO)",
        "options": [
          "A. Multi-factor authentication physical tokens.",
          "B. AWS Trusted Advisor security checks.",
          "C. Data encryption.",
          "D. Automated penetration testing.",
          "E. Amazon S3 copyrighted content detection."
        ],
"correct_letter": "BC",
        "explanation": "AWS offers built-in **Data Encryption** (C) features (KMS, CloudHSM) and automated security compliance checking using **AWS Trusted Advisor** (B). (MFA token hardware can be bought externally, but AWS does not manufacture them).\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
        "options": [
          "A. AWS WAF.",
          "B. Amazon DynamoDB.",
          "C. Amazon EC2.",
          "D. Amazon CloudFront.",
          "E. Amazon Inspector."
        ],
"correct_letter": "AD",
        "explanation": "DDoS mitigation is supported by network edge services:\n**Amazon CloudFront** (D) absorbs traffic surges and handles edge requests.\n**AWS WAF** (A) inspects layer-7 web requests and rate-limits attacks.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        "options": [
          "A. Amazon Elastic Block Store (Amazon EBS).",
          "B. Amazon Machine Image.",
          "C. Amazon EC2 Systems Manager.",
          "D. Amazon AppStream 2.0."
        ],
        "correct_letter": "B",
        "explanation": "An **Amazon Machine Image (AMI)** contains the pre-configured OS template, volume layouts, and applications needed to boot an EC2 instance.\n\n\n---"
      },
      {
        "id": 23,
        "question": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        "options": [
          "A. Think parallel.",
          "B. Implement elasticity.",
          "C. Decouple your components.",
          "D. Design for failure."
        ],
        "correct_letter": "B",
        "explanation": "**Elasticity**—the capability of an infrastructure to scale resources dynamically to match changing user volumes and workloads—is the core principle designed to maintain performance levels during growth spikes.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
        "options": [
          "A. Easy and fast deployment of applications in multiple Regions around the world.",
          "B. Security of the AWS Cloud.",
          "C. Elasticity of the AWS Cloud.",
          "D. Lower variable costs due to massive economies of scale."
        ],
        "correct_letter": "C",
        "explanation": "The **elasticity** of the cloud enables resources to auto-scale dynamically on demand, removing the need to predict or guess capacity limits.\n\n\n---"
      },
      {
        "id": 25,
        "question": "What can users access from AWS Artifact?",
        "options": [
          "A. AWS security and compliance documents.",
          "B. A download of configuration management details for all AWS resources.",
          "C. Training materials for AWS services.",
          "D. A security assessment of the applications deployed in the AWS Cloud."
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** provides on-demand, self-service access to compliance reports (e.g. ISO certificates, SOC reports) and security agreements.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Compared with costs in traditional and virtualized data centers, AWS has:",
        "options": [
          "A. Greater variable costs and greater upfront costs.",
          "B. Fixed usage costs and lower upfront costs.",
          "C. Lower variable costs and greater upfront costs.",
          "D. Lower variable costs and lower upfront costs."
        ],
        "correct_letter": "D",
        "explanation": "AWS reduces **upfront costs** by replacing hardware purchases with a pay-as-you-go model, and provides **lower variable costs** because of the savings achieved through massive economies of scale.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
        "options": [
          "A. AWS Lambda.",
          "B. Amazon DynamoDB Accelerator.",
          "C. Amazon Route 53.",
          "D. Amazon CloudFront."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon CloudFront** caches static website objects (HTML/CSS/media) globally at edge locations, delivering them with ultra-low latency and high transfer speeds.\n\n\n---"
      },
      {
        "id": 28,
        "question": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
        "options": [
          "A. They automatically add more instances across multiple AWS Regions based on global demand of the application.",
          "B. They automatically add or replace instances across multiple Availability Zones when the application needs it.",
          "C. They enable the application’s static content to reside closer to end users.",
          "D. They are able to distribute incoming requests across a tier of web server instances."
        ],
        "correct_letter": "B",
        "explanation": "Auto Scaling maintains application availability by automatically adding nodes across multiple Availability Zones to handle load spikes, and replacing unhealthy nodes immediately.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          "A. A public and private key-pair.",
          "B. Amazon Inspector.",
          "C. AWS Identity and Access Management (IAM) policies.",
          "D. Security Groups."
        ],
        "correct_letter": "C",
        "explanation": "Access controls to S3 resources are managed using **IAM Policies** (assigned to users, roles, or groups) or S3 Bucket Policies (resource-based).\n\n\n---"
      },
      {
        "id": 30,
        "question": "How should a customer forecast the future costs for running a new web application?",
        "options": [
          "A. Amazon Aurora Backtrack.",
          "B. Amazon CloudWatch Billing Alarms.",
          "C. AWS Simple Monthly Calculator.",
          "D. AWS Cost and Usage report."
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Simple Monthly Calculator** (now known as AWS Pricing Calculator) is the tool used to estimate and forecast the cost of services before or during deployment.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Where are AWS compliance documents, such as an SOC 1 report, located?",
        "options": [
          "A. Amazon Inspector.",
          "B. AWS CloudTrail.",
          "C. AWS Artifact.",
          "D. AWS Certificate Manager."
        ],
        "correct_letter": "C",
        "explanation": "**AWS Artifact** is the central self-service portal to download audit and compliance reports (SOC 1, SOC 2, PCI, ISO) and sign agreements.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following tasks is the responsibility of AWS?",
        "options": [
          "A. Encrypting client-side data.",
          "B. Configuring AWS Identity and Access Management (IAM) roles.",
          "C. Securing the Amazon EC2 hypervisor.",
          "D. Setting user password policies."
        ],
        "correct_letter": "C",
        "explanation": "In the Shared Responsibility Model, AWS is responsible for security \"of\" the cloud, which includes maintaining and securing the underlying hypervisor software running EC2 virtual machines.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
        "options": [
          "A. Firmware upgrades of network infrastructure.",
          "B. Patching of operating systems.",
          "C. Patching of the underlying hypervisor.",
          "D. Physical security of data centers.",
          "E. Configuration of the security group."
        ],
"correct_letter": "BE",
        "explanation": "Customers are responsible for managing guest resources, which includes OS patching (B) and virtual firewall rule configuration (Security Groups) (E).\n\n\n---"
      },
      {
        "id": 34,
        "question": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
        "options": [
          "A. Amazon Simple Storage Service (Amazon S3).",
          "B. Amazon DynamoDB.",
          "C. Amazon Kinesis.",
          "D. Amazon Redshift."
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Redshift** is a fully managed, petabyte-scale cloud data warehousing service.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
        "options": [
          "A. Amazon EBS.",
          "B. AWS Direct Connect.",
          "C. Amazon CloudFront.",
          "D. AWS Storage Gateway.",
          "E. Amazon Connect."
        ],
"correct_letter": "BD",
        "explanation": "**AWS Direct Connect** (B) creates private physical network tunnels linking local datacenters to VPCs.\n**AWS Storage Gateway** (D) bridges local operations with cloud-hosted S3/EBS systems.\n\n\n---"
      },
      {
        "id": 36,
        "question": "What are the advantages of the AWS Cloud? (Select TWO)",
        "options": [
          "A. Fixed rate monthly cost.",
          "B. No need to guess capacity requirements.",
          "C. Increased speed to market.",
          "D. Increased upfront capital expenditure.",
          "E. Physical access to cloud data centers."
        ],
"correct_letter": "BC",
        "explanation": "The cloud eliminates capacity planning guesswork (B) through auto-scaling, and increases agility and **speed to market** (C) by provisioning services in minutes.\n\n\n---"
      },
      {
        "id": 37,
        "question": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
        "options": [
          "A. Users do not have to wait for infrastructure provisioning.",
          "B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
          "C. AWS takes over application configuration management on behalf of users.",
          "D. Users do not need to address security and compliance issues."
        ],
        "correct_letter": "A",
        "explanation": "Immediate cloud resource provisioning removes long hardware purchasing cycles, letting development teams build and deploy workloads instantly.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
        "options": [
          "A. AWS Elastic Beanstalk.",
          "B. AWS OpsWorks.",
          "C. AWS CodeDeploy.",
          "D. AWS Batch.",
          "E. AWS X-Ray."
        ],
"correct_letter": "BC",
        "explanation": "**AWS OpsWorks** (B) supports running Chef/Puppet recipes on local on-premises hosts.\n**AWS CodeDeploy** (C) deploys software packages directly to on-premises servers using local agents.\n\n\n---"
      },
      {
        "id": 39,
        "question": "What is an example of agility in the AWS Cloud?",
        "options": [
          "A. Access to multiple instance types.",
          "B. Access to managed services.",
          "C. Using Consolidated Billing to produce one bill.",
          "D. Decreased acquisition time for new compute resources."
        ],
        "correct_letter": "D",
        "explanation": "**Agility** refers to speed of experimentation. Provisioning virtual servers in minutes rather than waiting weeks for server delivery represents a dramatic reduction in acquisition time.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        "options": [
          "A. Amazon Inspector.",
          "B. AWS Web Application Firewall (AWS WAF).",
          "C. Elastic Load Balancing (ELB).",
          "D. AWS Shield."
        ],
        "correct_letter": "D",
        "explanation": "**AWS Shield** is a managed DDoS protection service that is always-on to safeguard applications running on AWS.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which of the following are advantages of AWS consolidated billing? (Choose two)",
        "options": [
          "A. The ability to receive one bill for multiple accounts.",
          "B. Service limits increasing by default in all accounts.",
          "C. A fixed discount on the monthly bill.",
          "D. Potential volume discounts, as usage in all accounts is combined.",
          "E. The automatic extension of the master account’s AWS support plan to all accounts."
        ],
"correct_letter": "AD",
        "explanation": "Consolidated billing aggregates usage data across linked accounts under a single master payer account (A), letting the company reach higher tier volume pricing thresholds (D).\n\n\n---"
      },
      {
        "id": 42,
        "question": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        "options": [
          "A. Amazon Redshift.",
          "B. Amazon DynamoDB.",
          "C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
          "D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
        ],
        "correct_letter": "D",
        "explanation": "To shut down database host instances nightly to save compute costs while preserving database table storage contents, you must back the instances with **Amazon EBS** persistent volumes. EC2 instance store is ephemeral; shutting down the host will destroy all stored database files.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 12
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 13",
    "questions": [
      {
        "id": 1,
        "question": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        "options": [
          "A. Cost allocation tags",
          "B. Consolidated billing",
          "C. AWS Budgets",
          "D. AWS Marketplace"
        ],
        "correct_letter": "A",
        "explanation": "**Cost allocation tags** allow you to assign metadata (like \"Department: Finance\" or \"Project: Alpha\") to AWS resources, which then appear in your cost management reports to track and categorize spending on a highly detailed level.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        "options": [
          "A. Amazon Glacier",
          "B. AWS Storage Gateway",
          "C. Amazon S3",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Simple Storage Service (S3)** is a durable, object-based storage service that provides real-time access to objects, alongside features like object versioning (keeping multiple versions of the same object) and lifecycle policies (automatically transitioning files to colder tiers).\n\n\n---"
      },
      {
        "id": 3,
        "question": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        "options": [
          "A. AWS Enterprise Support",
          "B. AWS Solutions Architects",
          "C. AWS Professional Services",
          "D. AWS Account Managers"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Professional Services** is a global team of experts who work on paid customer engagements to help them realize their desired business outcomes when using the AWS Cloud, specializing in complex migrations, security architectures, and DevOps.\n\n\n---"
      },
      {
        "id": 4,
        "question": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        "options": [
          "A. AWS Partner Network Technology Partners",
          "B. AWS Marketplace",
          "C. AWS Partner Network Consulting Partners",
          "D. AWS Service Catalog"
        ],
        "correct_letter": "C",
        "explanation": "**AWS APN Consulting Partners** are professional services firms that help customers of all types and sizes design, architect, build, migrate, and manage their workloads and applications on AWS.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        "options": [
          "A. Implement automation.",
          "B. Design for agility.",
          "C. Design for failure.",
          "D. Implement elasticity."
        ],
        "correct_letter": "C",
        "explanation": "By placing resources across multiple Availability Zones, you ensure that if one Availability Zone suffers a hardware, power, or connectivity failure, the other Availability Zone continues running the workload, aligning with the \"Design for Failure\" (or reliability) principle.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Relational Database Service (Amazon RDS)",
          "C. Amazon Aurora",
          "D. Amazon Redshift",
          "E. Amazon S3"
        ],
"correct_letter": "AB",
        "explanation": "**Amazon EC2** allows you to deploy and self-manage a SQL Server instance.\n**Amazon RDS** supports SQL Server as an engine option with fully managed patching and backups.\n*Note:* Amazon Aurora is only compatible with MySQL and PostgreSQL.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Trusted Advisor",
          "C. Consolidated billing",
          "D. Detailed billing"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Trusted Advisor** is an online tool that inspects your AWS environment and provides real-time recommendations to help you follow AWS best practices across five categories: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. Dedicated Hosts",
          "D. On-Demand Instances"
        ],
        "correct_letter": "C",
        "explanation": "An **Amazon EC2 Dedicated Host** is a physical server with EC2 instance capacity fully dedicated to your use, which allows you to use your existing server-bound software licenses (BYOL - Bring Your Own License) for Windows Server or SQL Server.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        "options": [
          "A. High availability",
          "B. Shared security model",
          "C. Elasticity",
          "D. Pay-as-you-go pricing",
          "E. Reliability"
        ],
"correct_letter": "CD",
        "explanation": "**Elasticity** (C) allows the application to automatically scale down when demand drops so you don't pay for idle capacity.\n**Pay-as-you-go pricing** (D) ensures you only pay for the exact resources you consume with no long-term contracts.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        "options": [
          "A. Amazon CloudWatch",
          "B. AWS CloudTrail",
          "C. AWS Config",
          "D. AWS Health"
        ],
        "correct_letter": "B",
        "explanation": "**AWS CloudTrail** records API calls and account activities across your entire AWS infrastructure, logging details such as who made the request, when, and from what IP address, making it essential for security audit compliance.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Which of the following are characteristics of Amazon S3? (Select TWO.)",
        "options": [
          "A. A global file system",
          "B. An object store",
          "C. A local file store",
          "D. A network file system",
          "E. A durable storage system"
        ],
"correct_letter": "BE",
        "explanation": "S3 is an **object store** (B) (files are saved as objects within key-value buckets).\nS3 is a **highly durable** (E) storage system designed for 99.999999999% (11 9s) durability of data by replicating it across multiple physical Availability Zones.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
        "options": [
          "A. Amazon Route 53",
          "B. Virtual Private Gateway",
          "C. Classic Load Balancer",
          "D. Auto Scaling",
          "E. Amazon CloudWatch default metrics"
        ],
"correct_letter": "AB",
        "explanation": "**Amazon Route 53** (A) supports global DNS lookup routing and health checks that can target both on-premises endpoints and AWS resources.\nA **Virtual Private Gateway** (B) is attached to your VPC to terminate site-to-site VPN connections from your on-premises routers.\n\n\n---"
      },
      {
        "id": 13,
        "question": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        "options": [
          "A. Project management",
          "B. Antivirus software licensing",
          "C. Data center security",
          "D. Software development"
        ],
        "correct_letter": "C",
        "explanation": "TCO comparisons look at direct infrastructure cost variables. **Data center security** (facility guards, access locks, physical audits) is an on-premises cost that is eliminated or absorbed into AWS infrastructure pricing.\n\n\n---"
      },
      {
        "id": 14,
        "question": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon DynamoDB",
          "C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
          "D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
        ],
        "correct_letter": "D",
        "explanation": "For a self-hosted database on EC2 that needs to be shut down regularly, **Amazon EBS** is mandatory because EBS persists database files when the instance is in a `stopped` state. EC2 instance store is ephemeral and all data is lost once stopped.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        "options": [
          "A. Data centers contain regions.",
          "B. Regions contain Availability Zones.",
          "C. Availability Zones contain edge locations.",
          "D. Edge locations contain regions."
        ],
        "correct_letter": "B",
        "explanation": "An AWS **Region** is a geographical area that contains multiple, isolated, and physically separate **Availability Zones**. Edge locations are separate network access points deployed globally and do not sit within AZs or contain Regions.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which AWS tools assist with estimating costs? (Select three.)",
        "options": [
          "A. Detailed billing report",
          "B. Cost allocation tags",
          "C. AWS Simple Monthly Calculator",
          "D. AWS Total Cost of Ownership (TCO) Calculator",
          "E. Cost Eliminator"
        ],
"correct_letter": "BCD",
        "explanation": "**Cost allocation tags** (B) help label resources so you can attribute and estimate future operational budgets.\n**Simple Monthly Calculator** (C) lets you estimate monthly bills before deployments.\n**TCO Calculator** (D) compares the cost of on-premises hardware against AWS.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
        "options": [
          "A. The ability to receive one bill for multiple accounts",
          "B. Service limits increasing by default in all accounts",
          "C. A fixed discount on the monthly bill",
          "D. Potential volume discounts, as usage in all accounts is combined",
          "E. The automatic extension of the master account’s AWS support plan to all accounts"
        ],
"correct_letter": "AD",
        "explanation": "Consolidated billing combines the charges of all linked accounts under AWS Organizations, producing one single monthly invoice (A) and aggregating resource consumption metrics to qualify for high-tier volume discounts (D).\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        "options": [
          "A. One-year, No Upfront, Standard RI pricing",
          "B. One-year, All Upfront, Convertible RI pricing",
          "C. Three-year, All Upfront, Standard RI pricing",
          "D. Three-year, No Upfront, Convertible RI pricing"
        ],
        "correct_letter": "C",
        "explanation": "RIs offer greater discounts based on three variables: commitment length (3 years > 1 year), payment terms (All Upfront > Partial > No Upfront), and rigidity (Standard > Convertible). Thus, a **3-year, All Upfront, Standard RI** provides the maximum possible savings.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Compared with costs in traditional and virtualized data centers, AWS has:",
        "options": [
          "A. greater variable costs and greater upfront costs.",
          "B. fixed usage costs and lower upfront costs.",
          "C. lower variable costs and greater upfront costs.",
          "D. lower variable costs and lower upfront costs."
        ],
        "correct_letter": "D",
        "explanation": "AWS removes large physical datacenter purchases (lower upfront capital costs) and provides low pay-as-you-go costs due to the benefits of massive scale economies (lower variable costs).\n\n\n---"
      },
      {
        "id": 20,
        "question": "A characteristic of edge locations is that they:",
        "options": [
          "A. host Amazon EC2 instances closer to users.",
          "B. help lower latency and improve performance for users.",
          "C. cache frequently changing data without reaching the origin server.",
          "D. refresh data changes daily."
        ],
        "correct_letter": "B",
        "explanation": "Edge locations run CloudFront distribution servers globally to cache media and web content locally, significantly reducing transit time and improving load latency for end-users.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          "A. A public and private key-pair",
          "B. Amazon Inspector",
          "C. AWS Identity and Access Management (IAM) policies",
          "D. Security Groups"
        ],
        "correct_letter": "C",
        "explanation": "S3 access can be explicitly restricted to certain users or groups via **IAM Policies** (user-based access control) or S3 Bucket Policies (resource-based access control).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which of the following security-related actions are available at no cost?",
        "options": [
          "A. Calling AWS Support",
          "B. Contacting AWS Professional Services to request a workshop",
          "C. Accessing forums, blogs, and whitepapers",
          "D. Attending AWS classes at a local university"
        ],
        "correct_letter": "C",
        "explanation": "AWS provides a wealth of self-service security resources, including community forums, security blogs, architectural guides, and whitepapers, completely free of charge.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        "options": [
          "A. Dedicated RIs",
          "B. Scheduled RIs",
          "C. Convertible RIs",
          "D. Standard RIs"
        ],
        "correct_letter": "C",
        "explanation": "**Convertible Reserved Instances** offer slightly lower discount rates but allow you to modify instance families, OS types, tenancy, or scopes, provided the target exchange configuration is of equal or greater value.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
        "options": [
          "A. Shared responsibility security model",
          "B. Single tenancy",
          "C. Elastic computing",
          "D. Encryption"
        ],
        "correct_letter": "C",
        "explanation": "**Elastic computing** allows systems to provision dynamically based on demand. Shutting down resources when they aren't needed avoids paying for unused compute capacity, lowering the overall TCO.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which of the following services will automatically scale with an expected increase in web traffic?",
        "options": [
          "A. AWS CodePipeline",
          "B. Elastic Load Balancing",
          "C. Amazon EBS",
          "D. AWS Direct Connect"
        ],
        "correct_letter": "B",
        "explanation": "**Elastic Load Balancing (ELB)** automatically scales its throughput capacity in response to incoming traffic demand spikes, distributing connections evenly across healthy application instances.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Where are AWS compliance documents, such as an SOC 1 report, located?",
        "options": [
          "A. Amazon Inspector",
          "B. AWS CloudTrail",
          "C. AWS Artifact",
          "D. AWS Certificate Manager"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Artifact** is the dedicated, self-service compliance portal where customers can download AWS security and compliance documents (such as SOC reports, PCI data sheets, and ISO logs).\n\n\n---"
      },
      {
        "id": 27,
        "question": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO.)",
        "options": [
          "A. Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
          "B. Encrypting data on the client-side",
          "C. Training the data center staff",
          "D. Configuring Network Access Control Lists (ACL)",
          "E. Maintaining environmental controls within a data center"
        ],
"correct_letter": "BD",
        "explanation": "**Client-side data encryption** (B) is the user's duty to protect data in transit/at rest.\n**NACL configuration** (D) is a network security control managed inside the user's VPC.\n*Note:* RDS operating system patching, datacenter environmental controls, and datacenter staff training are fully managed by AWS.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which is a recommended pattern for designing a highly available architecture on AWS?",
        "options": [
          "A. Ensure that components have low-latency network connectivity.",
          "B. Run enough Amazon EC2 instances to operate at peak load.",
          "C. Ensure that the application is designed to accommodate failure of any single component.",
          "D. Use a monolithic application that handles all operations."
        ],
        "correct_letter": "C",
        "explanation": "Architecting for high availability requires decoupling components and creating redundancies so that the **failure of any single component** does not bring down the entire application stack.\n\n\n---"
      },
      {
        "id": 29,
        "question": "According to best practices, how should an application be designed to run in the AWS Cloud?",
        "options": [
          "A. Use tightly coupled components.",
          "B. Use loosely coupled components.",
          "C. Use infrequently coupled components.",
          "D. Use frequently coupled components."
        ],
        "correct_letter": "B",
        "explanation": "**Loose coupling** isolates components from each other (e.g. using message queues like SQS between tiers). If one component fails, the rest of the application remains operational, protecting system integrity.\n\n\n---"
      },
      {
        "id": 30,
        "question": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
        "options": [
          "A. Implementing Amazon Rekognition",
          "B. Using AWS Shield-protected resources",
          "C. Blocking access with Security Groups",
          "D. Using Multi-Factor Authentication (MFA)",
          "E. Enforcing password strength and expiration"
        ],
"correct_letter": "DE",
        "explanation": "Core login security controls for IAM users include requiring **MFA** (D) to prevent credential theft, and enforcing an account **password policy** (E) that requires minimum length, complexity, and rotation.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
        "options": [
          "A. Amazon Glacier",
          "B. Amazon RDS",
          "C. AWS Snowball",
          "D. Amazon Redshift",
          "E. Amazon EFS"
        ],
"correct_letter": "BE",
        "explanation": "**Amazon RDS** (B) manages active relational databases with constant transaction writes.\n**Amazon EFS** (E) provides a shared network file system for multiple compute resources to perform simultaneous read/write cycles.\n*Note:* Glacier is for archiving, Redshift is an analytical OLAP warehouse, and Snowball is for physical data migration.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          "A. It simplifies relational database administration tasks.",
          "B. It provides 99.99999999999% reliability and durability.",
          "C. It automatically scales databases for loads.",
          "D. It enabled users to dynamically adjust CPU and RAM resources."
        ],
        "correct_letter": "A",
        "explanation": "**Amazon RDS** removes the administrative overhead of setting up, patching, back-up scheduling, and managing physical hardware for relational databases.\n\n\n---"
      },
      {
        "id": 33,
        "question": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        "options": [
          "A. Amazon Aurora",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon ElastiCache"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora** is a relational database engine compatible with MySQL and PostgreSQL. It automatically scales storage up to 128 TB as data grows, provides up to 15 read replicas, and offers high durability.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        "options": [
          "A. Availability Zone",
          "B. Edge location",
          "C. Region",
          "D. Private networking"
        ],
        "correct_letter": "A",
        "explanation": "An **Availability Zone (AZ)** is one or more discrete datacenters with redundant power, networking, and connectivity in an AWS Region, connected via low-latency networks.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a shared control between the customer and AWS?",
        "options": [
          "A. Providing a key for Amazon S3 client-side encryption",
          "B. Configuration of an Amazon EC2 instance",
          "C. Environmental controls of physical AWS data centers",
          "D. Awareness and training"
        ],
        "correct_letter": "D",
        "explanation": "**Awareness and training** is a shared control. AWS trains its physical datacenter and cloud operations staff, and the customer is responsible for training their own developers, system admins, and staff on security procedures.\n\n\n---"
      },
      {
        "id": 36,
        "question": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        "options": [
          "A. A minimum of one",
          "B. A minimum of two",
          "C. A minimum of three",
          "D. A minimum of four or more"
        ],
        "correct_letter": "B",
        "explanation": "To achieve high availability, you must deploy compute instances across **at least two Availability Zones**. If one AZ goes down due to a local incident, the resources in the second AZ can continue to serve the workload.\n\n\n---"
      },
      {
        "id": 37,
        "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        "options": [
          "A. it allows the business to eliminate IT bills.",
          "B. it allows the business to put a server in each customer’s data center.",
          "C. it allows the business to focus on business activities.",
          "D. it allows the business to leave servers unpatched."
        ],
        "correct_letter": "C",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical server rooms (stacking racks, routing power, cooling maintenance), letting the business focus on customer value and core competencies.\n\n\n---"
      },
      {
        "id": 38,
        "question": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        "options": [
          "A. Amazon S3",
          "B. Amazon Glacier",
          "C. Amazon EBS",
          "D. Amazon EC2 Instance Store"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon S3** is the lowest-cost storage option that provides **immediate retrieval** of backup files. Amazon S3 Glacier offers lower cost storage but introduces retrieval delays (ranging from minutes to hours), which violates the \"immediate retrieval\" requirement.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        "options": [
          "A. API keys",
          "B. Access keys",
          "C. User names/Passwords",
          "D. SSH keys"
        ],
        "correct_letter": "B",
        "explanation": "Programmatic access to AWS via the CLI or SDKs requires an **Access Key ID** and a **Secret Access Key** associated with an IAM user account.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which of the following is a fast and reliable NoSQL database service?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon RDS",
          "C. Amazon DynamoDB",
          "D. Amazon S3"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.\n\n\n---"
      },
      {
        "id": 41,
        "question": "What is an example of agility in the AWS Cloud?",
        "options": [
          "A. Access to multiple instance types",
          "B. Access to managed services",
          "C. Using Consolidated Billing to produce one bill",
          "D. Decreased acquisition time for new compute resources"
        ],
        "correct_letter": "D",
        "explanation": "Agility refers to the speed of innovation and implementation. Reducing hardware procurement and setup times from weeks to seconds (**decreased acquisition time**) enables businesses to test and iterate ideas quickly.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        "options": [
          "A. AWS IAM",
          "B. AWS Organizations",
          "C. AWS Schema Conversion Tool",
          "D. AWS Config"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Organizations** provides consolidated billing, central security policies (Service Control Policies), and account grouping capabilities to govern multiple AWS accounts under one root entity.\n\n\n---"
      },
      {
        "id": 43,
        "question": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        "options": [
          "A. Using many instances in parallel",
          "B. Using a single large instance during off-peak hours",
          "C. Using dedicated hardware",
          "D. Using a large GPU instance type"
        ],
        "correct_letter": "A",
        "explanation": "AWS encourages a **horizontal scaling (\"think parallel\")** approach. Transcoding files using multiple independent instances simultaneously gets the job done faster and leverages the cloud's elasticity.\n\n\n---"
      },
      {
        "id": 44,
        "question": "For which auditing process does AWS have sole responsibility?",
        "options": [
          "A. AWS IAM policies",
          "B. Physical security",
          "C. Amazon S3 bucket policies",
          "D. AWS CloudTrail Logs"
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, AWS is solely responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud—specifically, **physical security** of datacenters.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
        "options": [
          "A. Fault tolerance",
          "B. Global reach",
          "C. Pay-as-you-go pricing",
          "D. High availability"
        ],
        "correct_letter": "B",
        "explanation": "AWS's **global reach**—with physical regions and edge locations distributed across the Americas, Europe, Asia, and Africa—lets companies deploy resources close to their customers worldwide to minimize latency.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Patching underlying infrastructure",
          "B. Physical security",
          "C. Patching Amazon EC2 instances",
          "D. Patching network infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "EC2 is an Infrastructure as a Service (IaaS) solution. While AWS maintains the underlying hardware hypervisor, the user is fully responsible for configuring and **patching the guest operating system** on the EC2 instances.\n\n\n---"
      },
      {
        "id": 47,
        "question": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        "options": [
          "A. Create one global AWS account and move all AWS resources to that account.",
          "B. Sign up for three years of Reserved Instance pricing up front.",
          "C. Use the consolidated billing feature from AWS Organizations.",
          "D. Sign up for the AWS Enterprise support plan to get volume discounts."
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing under **AWS Organizations** links accounts together for pricing purposes, aggregating their usage to reach lower tier pricing thresholds without requiring any physical changes or migration of active resources.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
        "options": [
          "A. Summaries by Amazon Simple Notification Service (Amazon SNS)",
          "B. Free Amazon Elasticsearch Service analytics",
          "C. Provided at no charge",
          "D. Real-time monitoring",
          "E. Adjustable retention"
        ],
"correct_letter": "DE",
        "explanation": "**Real-time monitoring** (D) allows CloudWatch Logs to ingest and parse log streams in real-time.\n**Adjustable retention** (E) allows customers to customize log expiration intervals (ranging from one day to 10 years, or never expire) to control costs.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        "options": [
          "A. Amazon Route 53",
          "B. Amazon Neptune",
          "C. Amazon SageMaker",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service that translates domain names into IP addresses.\n\n\n---"
      },
      {
        "id": 50,
        "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO.)",
        "options": [
          "A. Reduced latency to users",
          "B. The application’s presentation in the local language",
          "C. Data sovereignty compliance",
          "D. Cooling costs in hotter climates",
          "E. Proximity to the customer’s office for on-site visits"
        ],
"correct_letter": "AC",
        "explanation": "**Reduced latency** (A) is achieved by choosing a region geographically close to the user base.\n**Data sovereignty compliance** (C) mandates choosing regions located inside specific countries/territories to comply with local storage privacy laws (e.g. GDPR).\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 13
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 14",
    "questions": [
      {
        "id": 1,
        "question": "Which storage service can be used as a low-cost option for hosting static websites?",
        "options": [
          "A. Amazon Glacier",
          "B. Amazon DynamoDB",
          "C. Amazon Elastic File System (Amazon EFS)",
          "D. Amazon Simple Storage Service (Amazon S3)"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** supports a static website hosting feature that allows you to configure an S3 bucket to serve HTML, CSS, and client-side scripts directly to a web browser at an extremely low cost with no servers to manage.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        "options": [
          "A. Reserved Instances",
          "B. On-Demand",
          "C. Dedicated Hosts",
          "D. Spot Instances"
        ],
        "correct_letter": "D",
        "explanation": "**Spot Instances** let you bid for spare EC2 compute capacity, yielding up to a 90% discount compared to standard On-Demand pricing. However, they are subject to interruption with a 2-minute warning if AWS needs the capacity back.\n\n\n---"
      },
      {
        "id": 3,
        "question": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        "options": [
          "A. Physical access controls",
          "B. Data encryption",
          "C. Secure disposal of storage devices",
          "D. Environmental risk management"
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, the customer is responsible for security **in** the cloud. This includes configuring and enforcing **data encryption** policies (both in transit and at rest) to protect customer data.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Route 53",
          "C. Amazon ElastiCache",
          "D. Amazon DynamoDB"
        ],
        "correct_letter": "A",
        "explanation": "By launching an **Amazon EC2** instance, you can install any database engine (e.g. Oracle, MySQL, SQL Server) and manage it yourself. This gives you complete operating system and database administrative access (self-managed).\n\n\n---"
      },
      {
        "id": 5,
        "question": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
        "options": [
          "A. Amazon Simple Storage Service (Amazon S3)",
          "B. Amazon DynamoDB",
          "C. Amazon Kinesis",
          "D. Amazon Redshift"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Redshift** is a fully managed, petabyte-scale column-oriented database designed specifically for high-performance data warehousing and complex analytical SQL queries.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which statement best describes Elastic Load Balancing?",
        "options": [
          "A. It translates a domain name into an IP address using DNS.",
          "B. It distributes incoming application traffic across one or more Amazon EC2 instances.",
          "C. It collects metrics on connected Amazon EC2 instances.",
          "D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
        ],
        "correct_letter": "B",
        "explanation": "**Elastic Load Balancing (ELB)** acts as the single entry point for traffic, automatically distributing incoming user requests across backend targets (such as EC2 instances, containers, or IP addresses) to ensure high availability.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
        "options": [
          "A. Command line interface",
          "B. On-premises",
          "C. Software Development Kits",
          "D. Software-as-a-service",
          "E. Hybrid"
        ],
"correct_letter": "AC",
        "explanation": "AWS provides three primary administrative access interfaces:\n1.  **AWS Management Console** (Browser-based GUI)\n2.  **AWS Command Line Interface (CLI)** (A) (Terminal/Shell script-based commands)\n3.  **AWS SDKs** (C) (Application code integrations like Python, Node.js, Java)\n\n\n---"
      },
      {
        "id": 8,
        "question": "The AWS Cloud’s multiple Regions are an example of:",
        "options": [
          "A. agility.",
          "B. global infrastructure.",
          "C. elasticity.",
          "D. pay-as-you-go pricing."
        ],
        "correct_letter": "B",
        "explanation": "The physical layout of AWS datacenters distributed globally into geographically isolated regions and availability zones constitutes the **AWS Global Infrastructure**.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
        "options": [
          "A. AWS Storage Gateway",
          "B. Amazon S3",
          "C. Amazon Elastic File System (EFS)",
          "D. Amazon Glacier",
          "E. Amazon CloudFront"
        ],
"correct_letter": "BE",
        "explanation": "**Amazon S3** (B) is the ideal origin storage system to hold massive video assets with high durability.\n**Amazon CloudFront** (E) is the Content Delivery Network (CDN) that distributes and caches those files at global edge locations, serving them to users with the lowest possible latency.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        "options": [
          "A. Cloud-native",
          "B. Partner network",
          "C. Hybrid architecture",
          "D. Infrastructure as a service"
        ],
        "correct_letter": "C",
        "explanation": "A **hybrid architecture** describes a setup where public cloud resources (like AWS EC2 instances) are integrated with and interact with on-premises resources located in physical corporate datacenters.\n\n\n---"
      },
      {
        "id": 11,
        "question": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          "A. They require the customer to monitor and replace failing instances.",
          "B. They have better performance than customer-managed services.",
          "C. They simplify patching and updating underlying OSs.",
          "D. They do not require the customer to optimize instance type or size selections."
        ],
        "correct_letter": "C",
        "explanation": "In fully managed services, AWS abstracts the infrastructure layer, taking care of server provisioning, scheduled backups, and **underlying operating system patching and updates**, which reduces routine database admin work.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which service provides a virtually unlimited amount of online highly durable object storage?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon Elastic File System (Amazon EFS)",
          "C. Amazon Elastic Container Service (Amazon ECS)",
          "D. Amazon S3"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon S3** is a highly durable object storage service that has no storage capacity limits, allowing you to store and retrieve any amount of data from anywhere on the web.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        "options": [
          "A. IAM group",
          "B. IAM user",
          "C. IAM role",
          "D. IAM policy"
        ],
        "correct_letter": "B",
        "explanation": "An **IAM User** represents a person or application that interacts with AWS resources. Programmatic credentials (Access Key ID and Secret Access Key) are created and assigned directly to the IAM User.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which of the following security-related services does AWS offer? (Select TWO.)",
        "options": [
          "A. Multi-factor authentication physical tokens",
          "B. AWS Trusted Advisor security checks",
          "C. Data encryption",
          "D. Automated penetration testing",
          "E. Amazon S3 copyrighted content detection"
        ],
"correct_letter": "BC",
        "explanation": "AWS provides native features for **Data Encryption** (C) (using KMS/CloudHSM) and **AWS Trusted Advisor security checks** (B) which scan your configuration for potential vulnerabilities (such as open security group ports or public S3 buckets).\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which AWS managed service is used to host databases?",
        "options": [
          "A. AWS Batch",
          "B. AWS Artifact",
          "C. AWS Data Pipeline",
          "D. Amazon RDS"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Relational Database Service (RDS)** is the primary managed service for relational databases (MySQL, PostgreSQL, Oracle, MariaDB, SQL Server).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        "options": [
          "A. Amazon S3",
          "B. Amazon Glacier",
          "C. Amazon EBS",
          "D. Amazon EFS"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Elastic File System (EFS)** provides a serverless network file system (NFSv4) that can be shared and mounted simultaneously by thousands of EC2 instances and on-premises Linux servers.\n\n\n---"
      },
      {
        "id": 17,
        "question": "When architecting cloud applications, which of the following are a key design principle?",
        "options": [
          "A. Use the largest instance possible",
          "B. Provision capacity for peak load",
          "C. Use the Scrum development process",
          "D. Implement elasticity"
        ],
        "correct_letter": "D",
        "explanation": "**Elasticity**—designing systems to scale out automatically under load and scale in when resources are idle—replaces the legacy process of purchasing fixed hardware capacity based on peak load predictions.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service should be used for long-term, low-cost storage of data backups?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Glacier",
          "C. AWS Snowball",
          "D. AWS EBS"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon S3 Glacier** is a low-cost, durable archive storage class designed for data backups that are accessed infrequently and can tolerate retrieval times of several minutes or hours.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        "options": [
          "A. Granting access to individuals and services",
          "B. Encrypting data in transit",
          "C. Updating Amazon EC2 host firmware",
          "D. Updating operating systems"
        ],
        "correct_letter": "C",
        "explanation": "AWS manages security \"of\" the cloud. Host hypervisors, server chassis firmware, physical networking, and datacenter hardware updates are entirely the responsibility of AWS.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        "options": [
          "A. AWS Marketplace",
          "B. Amazon Lumberyard",
          "C. AWS Artifact",
          "D. Amazon CloudSearch"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Marketplace** is a digital catalog containing thousands of software listings from independent software vendors, enabling quick deployment of pre-configured AMIs and software solutions.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which of the following is a benefit of using the AWS Cloud?",
        "options": [
          "A. Permissive security removes the administrative burden.",
          "B. Ability to focus on revenue-generating activities.",
          "C. Control over cloud network hardware.",
          "D. Choice of specific cloud hardware vendors."
        ],
        "correct_letter": "B",
        "explanation": "Offloading physical infrastructure operations (racks, electricity, hardware repair, patching) to AWS allows businesses to devote their development talent and financial resources to writing software and driving business revenue.\n\n\n---"
      },
      {
        "id": 22,
        "question": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        "options": [
          "A. Dedicated Hosts",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. No Upfront Reserved Instances"
        ],
        "correct_letter": "A",
        "explanation": "**Dedicated Hosts** allocate a physical server to a single customer, satisfying regulatory requirements that demand strict physical separation/isolation from other tenants' workloads.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which AWS service provides the ability to manage infrastructure as code?",
        "options": [
          "A. AWS CodePipeline",
          "B. AWS CodeDeploy",
          "C. AWS Direct Connect",
          "D. AWS CloudFormation"
        ],
        "correct_letter": "D",
        "explanation": "**AWS CloudFormation** allows you to model, provision, and update your entire infrastructure in a declarative manner using JSON or YAML configuration files (Infrastructure as Code).\n\n\n---"
      },
      {
        "id": 24,
        "question": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        "options": [
          "A. AWS Config",
          "B. AWS Trusted Advisor",
          "C. Amazon CloudWatch",
          "D. Amazon Inspector"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Config** continually monitors and records resource configuration states. It acts as an audit trail for change management, allowing you to see how a resource was configured at any point in the past.\n\n\n---"
      },
      {
        "id": 25,
        "question": "What is Amazon CloudWatch?",
        "options": [
          "A. A code repository with customizable build and team commit features.",
          "B. A metrics repository with customizable notification thresholds and channels.",
          "C. A security configuration repository with threat analytics.",
          "D. A rule repository of a web application firewall with automated vulnerability prevention features."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch** collects and monitors resource metrics (CPU usage, network traffic, custom app logs). It acts as a metrics repository and can trigger notifications (via CloudWatch Alarms and SNS) when thresholds are crossed.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        "options": [
          "A. AWS Server Migration Service",
          "B. AWS Organizations",
          "C. AWS Budgets",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "By linking multiple AWS accounts into a single organization via **AWS Organizations**, consolidated billing combines usage across all member accounts to qualify for tier-based volume discounts.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
        "options": [
          "A. AWS Elastic Beanstalk",
          "B. AWS OpsWorks",
          "C. AWS CodeDeploy",
          "D. AWS Batch",
          "E. AWS X-Ray"
        ],
"correct_letter": "BC",
        "explanation": "**AWS OpsWorks** (B) (Puppet/Chef-based automation) and **AWS CodeDeploy** (C) can deploy code to on-premises servers by running lightweight software agents on those external instances.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        "options": [
          "A. On-Demand Instances",
          "B. Reserved Instances",
          "C. Spot Instances",
          "D. Convertible Reserved Instances"
        ],
        "correct_letter": "C",
        "explanation": "**Spot Instances** represent spare EC2 capacity offered at discounts up to 90%, with pricing fluctuating dynamically based on real-time supply and demand.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
        "options": [
          "A. Use manual monitoring.",
          "B. Use fixed servers.",
          "C. Implement loose coupling.",
          "D. Rely on individual components.",
          "E. Design for scalability."
        ],
"correct_letter": "CE",
        "explanation": "To successfully modernise a monolith, you should break it into microservices using **loose coupling** (C) (isolating systems using queues or APIs) and design for **scalability** (E) (ensuring components scale horizontally).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        "options": [
          "A. Enterprise",
          "B. Business",
          "C. Developer",
          "D. Basic"
        ],
        "correct_letter": "B",
        "explanation": "The **Business Support Plan** offers a 1-hour response time for \"production system down\" cases. Developer-level support has response times of 12-24 hours for basic issues.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Where can AWS compliance and certification reports be downloaded?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Concierge",
          "C. AWS Certificate Manager",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the central self-service compliance portal containing AWS audit reports, certifications (e.g. ISO, PCI), and corporate security agreements.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
        "options": [
          "A. AWS Service Health Dashboard",
          "B. AWS X-Ray",
          "C. AWS Personal Health Dashboard",
          "D. Amazon CloudWatch"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Personal Health Dashboard** (also known as AWS Health Dashboard - Personal View) displays alerts and remediation guidance tailored specifically to the AWS resources running in your account. The *Service Health Dashboard* shows general status across all AWS services globally.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which of the following is an advantage of consolidated billing on AWS?",
        "options": [
          "A. Volume pricing qualification",
          "B. Shared access permissions",
          "C. Multiple bills per account",
          "D. Eliminates the need for tagging"
        ],
        "correct_letter": "A",
        "explanation": "Consolidated billing aggregates usage data across linked accounts under a single master payer account, letting the company reach higher tier volume pricing thresholds.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        "options": [
          "A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
          "B. Request and wait for approval from the customer’s internal security team, and then conduct testing.",
          "C. Notify AWS support, and then conduct testing immediately.",
          "D. Request and wait for approval from AWS support, and then conduct testing."
        ],
        "correct_letter": "B",
        "explanation": "AWS no longer requires prior approval for penetration testing against common core services (EC2, RDS, Aurora, Lambda, API Gateway). Therefore, a customer only needs internal authorization from their own security team before starting the test.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        "options": [
          "A. Amazon Elastic Block Store (Amazon EBS)",
          "B. Amazon Machine Image",
          "C. Amazon EC2 Systems Manager",
          "D. Amazon AppStream 2.0"
        ],
        "correct_letter": "B",
        "explanation": "An **Amazon Machine Image (AMI)** contains the pre-configured OS template, volume layouts, and applications needed to boot an EC2 instance.\n\n\n---"
      },
      {
        "id": 36,
        "question": "How would an AWS customer easily apply common access controls to a large set of users?",
        "options": [
          "A. Apply an IAM policy to an IAM group.",
          "B. Apply an IAM policy to an IAM role.",
          "C. Apply the same IAM policy to all IAM users with access to the same workload.",
          "D. Apply an IAM policy to an Amazon Cognito user pool."
        ],
        "correct_letter": "A",
        "explanation": "The easiest way to manage access for a large team is by adding users to an **IAM Group** and attaching the required IAM Policy to that group, rather than assigning policies to users individually.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Cost and Usage report",
          "D. AWS Billing dashboard"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Cost and Usage Report (CUR)** provides the most comprehensive and granular billing data available (hourly breakdown by resource, cost allocation tags, and usage metrics).\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
        "options": [
          "A. AWS Concierge",
          "B. AWS CloudFormation",
          "C. Amazon Simple Storage Service (Amazon S3)",
          "D. Amazon EC2 Auto Scaling",
          "E. AWS Management Console"
        ],
"correct_letter": "BE",
        "explanation": "New RDS clusters are provisioned through IaC deployment templates via **AWS CloudFormation** (B) or interactively using the **AWS Management Console** (E) web interface.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following is an AWS Cloud architecture design principle?",
        "options": [
          "A. Implement single points of failure.",
          "B. Implement loose coupling.",
          "C. Implement monolithic design.",
          "D. Implement vertical scaling."
        ],
        "correct_letter": "B",
        "explanation": "**Loose coupling** is a fundamental cloud design principle that splits application components into independent units. This prevents cascading errors and allows components to scale independently.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which of the following security measures protect access to an AWS account? (Select TWO.)",
        "options": [
          "A. Enable AWS CloudTrail.",
          "B. Grant least privilege access to IAM users.",
          "C. Create one IAM user and share with many developers and users.",
          "D. Enable Amazon CloudFront.",
          "E. Activate multi-factor authentication (MFA) for privileged users."
        ],
"correct_letter": "BE",
        "explanation": "Essential account-level security best practices require granting **least privilege** (B) (only the permissions needed to do a job) and enforcing **MFA** (E) for administrative and root users.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        "options": [
          "A. Amazon Glacier",
          "B. AWS Snowball",
          "C. AWS Storage Gateway",
          "D. Amazon Elastic Block Storage (Amazon EBS)"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Storage Gateway** is a hybrid cloud storage service that allows on-premises systems to utilize scalable AWS storage options (S3, EBS, Glacier) via file, volume, or tape gateway protocols.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        "options": [
          "A. Amazon RDS.",
          "B. Amazon EC2.",
          "C. Amazon ElastiCache.",
          "D. AWS Fargate."
        ],
        "correct_letter": "B",
        "explanation": "Amazon EC2 is an Infrastructure as a Service (IaaS) resource, meaning the guest operating system, custom security patches, software dependencies, and port rules are fully managed by the customer.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is an important architectural design principle when designing cloud applications?",
        "options": [
          "A. Use multiple Availability Zones.",
          "B. Use tightly coupled components.",
          "C. Use open source software.",
          "D. Provision extra capacity."
        ],
        "correct_letter": "A",
        "explanation": "Deploying application components across **multiple Availability Zones** ensures the architecture is resilient to localized hardware, power, or connectivity failures.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS support plan includes a dedicated Technical Account Manager?",
        "options": [
          "A. Developer",
          "B. Enterprise",
          "C. Business",
          "D. Basic"
        ],
        "correct_letter": "B",
        "explanation": "A dedicated **Technical Account Manager (TAM)** is a premium support benefit available exclusively to customers on the **Enterprise Support** tier.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        "options": [
          "A. AWS manages the data stored in Amazon RDS tables.",
          "B. AWS manages the maintenance of the operating system.",
          "C. AWS automatically scales up instance types on demand.",
          "D. AWS manages the database type."
        ],
        "correct_letter": "B",
        "explanation": "RDS reduces administrative overhead by handling server hardware management, OS patching, updates, and backups. The customer is responsible for schema design and query optimization.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service is best for storing common database query results, which helps to alleviate database access load?",
        "options": [
          "A. Amazon Machine Learning",
          "B. Amazon SQS",
          "C. Amazon ElastiCache",
          "D. Amazon EC2 Instance Store"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon ElastiCache** provides an in-memory database caching layer (Redis or Memcached) to store frequently read query results, significantly reducing database query times and lowering backend workload.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
        "options": [
          "A. Patching operating system software",
          "B. Encrypting data",
          "C. Enforcing multi-factor authentication",
          "D. Auditing physical data center assets"
        ],
        "correct_letter": "D",
        "explanation": "Physical security and **auditing physical assets** within AWS datacenters are completely handled by AWS under security \"of\" the cloud.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
        "options": [
          "A. AWS Trusted Advisor",
          "B. AWS Online Tech Talks",
          "C. AWS Blog",
          "D. AWS Forums",
          "E. AWS Classroom Training"
        ],
"correct_letter": "BE",
        "explanation": "For interactive or structured instructor-guided environments:\n**Classroom Training** (E) features live classes taught by AWS-certified instructors (either virtually or in person).\n**Online Tech Talks** (B) feature live webinars with Q&A sessions led by AWS technical experts.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
        "options": [
          "A. Amazon CloudFront distributions",
          "B. Amazon Route 53",
          "C. Security Groups",
          "D. Subnets",
          "E. Elastic Load Balancing"
        ],
"correct_letter": "CD",
        "explanation": "The VPC dashboard allows you to manage network resources within your virtual private network, including **subnets** (D) and **security groups** (C). *Note:* CloudFront, Route 53, and ELB have their own dedicated consoles.\n\n\n---"
      },
      {
        "id": 50,
        "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        "options": [
          "A. Use AWS Budgets on each account to pay only to budget.",
          "B. Contact AWS Support for a monthly bill.",
          "C. Create an AWS Organization from the payer account and invite the other accounts to join.",
          "D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
        ],
        "correct_letter": "C",
        "explanation": "To enable consolidated billing, you designate a primary payer account, create an organization using **AWS Organizations**, and send invitations to the independent departmental accounts to join the organization.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 14
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 15",
    "questions": [
      {
        "id": 1,
        "question": "How do customers benefit from Amazon’s massive economies of scale?",
        "options": [
          "A. Periodic price reductions as the result of Amazon’s operational efficiencies",
          "B. New Amazon EC2 instance types providing the latest hardware",
          "C. The ability to scale up and down when needed",
          "D. Increased reliability in the underlying hardware of Amazon EC2 instances"
        ],
        "correct_letter": "A",
        "explanation": "One of the core business benefits of Cloud Computing is **massive economies of scale**. As AWS grows, it optimizes operations, resulting in lower hardware and resource acquisition costs, which AWS consistently passes back to customers in the form of periodic price reductions.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS services can be used to gather information about AWS account activity? (Select TWO.)",
        "options": [
          "A. Amazon CloudFront",
          "B. AWS Cloud9",
          "C. AWS CloudTrail",
          "D. AWS CloudHSM",
          "E. Amazon CloudWatch"
        ],
"correct_letter": "CE",
        "explanation": "**AWS CloudTrail** (C) records account API activity (who requested what action, when, and from where).\n**Amazon CloudWatch** (E) tracks resource operational metrics and logs over time, providing visibility into account operational performance.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)",
        "options": [
          "A. Patching databases software",
          "B. Testing application releases",
          "C. Backing up databases",
          "D. Creating database schema",
          "E. Running penetration tests"
        ],
"correct_letter": "AC",
        "explanation": "Fully managed services like Amazon RDS automatically handle infrastructure tasks such as **patching database software** (A) and **performing database backups** (C), freeing up the customer's developers to focus on schema design and application testing.\n\n\n---"
      },
      {
        "id": 4,
        "question": "In which scenario should Amazon EC2 Spot Instances be used?",
        "options": [
          "A. A company wants to move its main website to AWS from an on-premises web server.",
          "B. A company has a number of application services whose Service Level Agreements (SLAs) do not support interruptions.",
          "C. A database cluster needs to run 24 hours a day, 7 days a week.",
          "D. A company has a number of application services whose Service Level Agreements (SLAs) allow for system interruption."
        ],
        "correct_letter": "D",
        "explanation": "Spot instances are spare EC2 capacity offered at up to a 90% discount, but they can be reclaimed by AWS with a 2-minute warning. Therefore, they are only appropriate for workloads that are flexible, fault-tolerant, and **allow for system interruption**.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Under the AWS shared responsibility model, which of the following is the customer’s responsibility?",
        "options": [
          "A. Physical security of data centers",
          "B. Replacing failed hard drives",
          "C. Configuring network access control lists (NACLs)",
          "D. Upgrading the virtualization hypervisor on physical hosts"
        ],
        "correct_letter": "C",
        "explanation": "The customer is responsible for security **in** the cloud. Configuring networking access policies like VPC Security Groups and **Network Access Control Lists (NACLs)** is managed by the customer.\n\n\n---"
      },
      {
        "id": 6,
        "question": "A system administrator needs to connect to an Amazon EC2 instance using SSH. Which of the following can be used to control network access?",
        "options": [
          "A. IAM policies",
          "B. AWS Shield",
          "C. Amazon CloudFront",
          "D. Security Groups"
        ],
        "correct_letter": "D",
        "explanation": "**Security Groups** act as virtual firewalls at the instance level, controlling inbound and outbound network traffic. To allow SSH access, you must configure an inbound rule allowing TCP port 22 traffic from your specific IP address.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which of the following database engines is compatible with Amazon Aurora?",
        "options": [
          "A. Microsoft SQL Server",
          "B. PostgreSQL",
          "C. Oracle",
          "D. MariaDB"
        ],
        "correct_letter": "B",
        "explanation": "Amazon Aurora is a high-performance relational database engine designed by AWS that is fully compatible with **PostgreSQL** and **MySQL**.\n\n\n---"
      },
      {
        "id": 8,
        "question": "A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?",
        "options": [
          "A. Patching the guest operating system",
          "B. Maintaining physical and environmental controls",
          "C. Protecting communications and maintaining zone security",
          "D. Patching custom applications"
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, AWS takes over **physical and environmental controls** of the datacenter (power, climate control, fire suppression, physical site security).\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which AWS service is best suited to migrating database schemas?",
        "options": [
          "A. AWS Database Migration Service (AWS DMS)",
          "B. AWS Snowball",
          "C. AWS Schema Conversion Tool (AWS SCT)",
          "D. AWS Application Discovery Service"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Schema Conversion Tool (SCT)** is used to convert database schemas from a source engine (like Oracle or SQL Server) to a target engine (like MySQL or PostgreSQL on AWS Aurora). AWS DMS is then used to migrate the actual data.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service or tool should be used to monitor a company’s spend on AWS?",
        "options": [
          "A. Amazon Inspector",
          "B. AWS Budgets",
          "C. AWS Directory Service",
          "D. AWS Systems Manager"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom cost and usage budgets and alert you (via email or SNS) when your actual spending exceeds (or is forecasted to exceed) your budget threshold.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Which service allows a Cloud Practitioner to download compliance and certification reports for the AWS infrastructure?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS CloudTrail",
          "D. AWS Certificate Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is your go-to central portal for security agreements and compliance documents (such as SOC, PCI, and ISO reports).\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which AWS Support plan provides a 15-minute response time for business-critical system down cases?",
        "options": [
          "A. Enterprise Support",
          "B. Business Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "A",
        "explanation": "The **Enterprise Support Plan** offers a 15-minute SLA target response time for \"business-critical system down\" incidents, alongside access to a dedicated Technical Account Manager (TAM).\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which of the following are benefits of the AWS Cloud? (Select TWO.)",
        "options": [
          "A. Increase speed and agility",
          "B. Direct control over server hardware vendors",
          "C. Stop guessing capacity",
          "D. Fixed monthly operating costs",
          "E. Custom physical network customization"
        ],
"correct_letter": "AC",
        "explanation": "**Increase speed and agility** (A) refers to resource provisioning in seconds rather than weeks.\n**Stop guessing capacity** (C) is achieved by utilizing elasticity to scale dynamically based on demand.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which service is an AWS managed NoSQL database service?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon DynamoDB",
          "C. Amazon Redshift",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Managing data encryption keys",
          "B. Disposing of faulty storage devices",
          "C. Training datacenter security guards",
          "D. Patching the virtualization hypervisor"
        ],
        "correct_letter": "A",
        "explanation": "The customer manages all data security controls **in** the cloud. Creating, rotating, and managing access permissions for **data encryption keys** (using KMS) is a customer responsibility.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which AWS IAM feature allows a customer to verify that users are complying with password complexity and rotation policies?",
        "options": [
          "A. Credential report",
          "B. Password policy dashboard",
          "C. Access advisor",
          "D. IAM policies"
        ],
        "correct_letter": "A",
        "explanation": "An **IAM Credential Report** provides a downloadable CSV list detailing all users in your account, including information such as password creation date, last rotated date, and MFA status, which is ideal for security audits.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
        "options": [
          "A. Managing the application code inside the Docker container",
          "B. Maintaining physical infrastructure",
          "C. Patching the guest operating system of the EC2 instance",
          "D. Deploying container scaling policies"
        ],
        "correct_letter": "B",
        "explanation": "Because the company chose to host Docker on standard EC2 instances (IaaS), they manage the container setup, application code, and guest OS. AWS is responsible for **maintaining physical hardware infrastructure** of the host servers.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service can be used to track CPU usage of an Amazon EC2 instance?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch",
          "C. AWS Config",
          "D. Amazon Inspector"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch** is a monitoring service that collects and visualizes operational metrics (such as CPU utilization, Disk I/O, and Network In/Out) for AWS resources.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which AWS service can be used to host a scalable relational database?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon DynamoDB",
          "C. Amazon S3",
          "D. Amazon ElastiCache"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Relational Database Service (RDS)** is the primary managed database service designed to host relational engines. DynamoDB is NoSQL, S3 is object storage, and ElastiCache is an in-memory cache.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a benefit of deploying an application across multiple Availability Zones?",
        "options": [
          "A. Reduced data transfer charges",
          "B. Automated application code debugging",
          "C. Lowest latency globally",
          "D. Increased fault tolerance"
        ],
        "correct_letter": "D",
        "explanation": "Deploying across multiple AZs ensures that even if one physical datacenter (or AZ) experiences power outages or network failures, the workload immediately runs from the remaining AZs, improving overall **fault tolerance**.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which AWS service allows a user to run code without provisioning or managing servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. Amazon ECS",
          "D. AWS Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources for you.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which service is best suited for sharing files between multiple Amazon EC2 instances?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon EFS",
          "C. Amazon S3 Glacier",
          "D. Amazon RDS"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Elastic File System (EFS)** provides a serverless network file system that supports concurrent read/write access for thousands of EC2 instances.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which AWS billing feature allows a company to combine usage from multiple AWS accounts to receive volume discounts?",
        "options": [
          "A. Cost allocation tags",
          "B. AWS Budgets",
          "C. Consolidated billing",
          "D. Cost Explorer"
        ],
        "correct_letter": "C",
        "explanation": "**Consolidated billing** (offered via AWS Organizations) aggregates the usage data across all linked accounts, allowing the master account to qualify for higher-volume discount tiers.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which tool is used to estimate costs before launching resources on AWS?",
        "options": [
          "A. AWS Budgets",
          "B. AWS Cost Explorer",
          "C. AWS Cost and Usage Report",
          "D. AWS Pricing Calculator"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the guest operating system on Amazon EC2?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Both AWS and the customer (Shared)",
          "D. The hardware vendor"
        ],
        "correct_letter": "B",
        "explanation": "In EC2, AWS manages the host physical machine and hypervisor. Managing, updating, and patching the **guest operating system** is a customer responsibility.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which AWS service allows a customer to build a virtual network within the AWS Cloud?",
        "options": [
          "A. Amazon Route 53",
          "B. AWS Direct Connect",
          "C. Amazon VPC",
          "D. Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Virtual Private Cloud (VPC)** allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. High availability",
          "B. High scalability",
          "C. Elasticity",
          "D. Performance efficiency"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the AWS Well-Architected Framework are:\n1. Operational Excellence\n2. Security\n3. Reliability\n4. **Performance Efficiency** (D)\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which AWS pricing model is best suited for workloads with stable and predictable compute requirements?",
        "options": [
          "A. Spot Instances",
          "B. On-Demand Instances",
          "C. Reserved Instances",
          "D. Dedicated Instances"
        ],
        "correct_letter": "C",
        "explanation": "**Reserved Instances (RIs)** provide significant discounts (up to 72%) compared to On-Demand instances, making them the best option for workloads with steady state, predictable usage over a 1- or 3-year term.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which AWS service provides a simple way to deploy and run applications by automatically handling capacity provisioning, load balancing, auto-scaling, and health monitoring?",
        "options": [
          "A. AWS Elastic Beanstalk",
          "B. AWS CloudFormation",
          "C. AWS OpsWorks",
          "D. AWS Lambda"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Elastic Beanstalk** is a Platform-as-a-Service (PaaS) offering. You upload your application code, and Beanstalk automatically manages provisioning, load balancing, auto-scaling, and health checks.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which AWS service provides protection against DDoS attacks at no additional cost?",
        "options": [
          "A. AWS Shield Standard",
          "B. AWS Shield Advanced",
          "C. AWS WAF",
          "D. AWS Firewall Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Shield Standard** protects all AWS customers at no additional cost from common infrastructure (Layer 3 and 4) DDoS attacks.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which of the following is an example of horizontal scaling?",
        "options": [
          "A. Upgrading an EC2 instance from `t3.medium` to `t3.xlarge`",
          "B. Adding more Amazon EC2 instances to an Auto Scaling group",
          "C. Attaching a larger EBS volume to an EC2 instance",
          "D. Increasing the CPU capacity of an RDS database"
        ],
        "correct_letter": "B",
        "explanation": "**Horizontal scaling** (scaling out) involves adding more instances of resources to distribute workload. **Vertical scaling** (scaling up) involves adding resources (such as CPU or RAM) to a single existing instance.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which service allows customers to easily configure and manage a central registry of domain names?",
        "options": [
          "A. Amazon Route 53",
          "B. AWS Directory Service",
          "C. Amazon Lightsail",
          "D. Amazon VPC"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Route 53** is a highly available domain registrar and DNS routing web service.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Under the AWS shared responsibility model, who is responsible for securing physical data centers?",
        "options": [
          "A. The customer",
          "B. AWS",
          "C. Both AWS and the customer (Shared)",
          "D. A third-party security firm"
        ],
        "correct_letter": "B",
        "explanation": "Security \"of\" the cloud includes physical security, hardware protection, and facility infrastructure maintenance, which are managed entirely by **AWS**.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which AWS service helps customers migrate databases to AWS quickly and securely?",
        "options": [
          "A. AWS Database Migration Service (AWS DMS)",
          "B. AWS Migration Hub",
          "C. AWS Snowball",
          "D. AWS DataSync"
        ],
        "correct_letter": "A",
        "explanation": "**AWS DMS** facilitates migrations of active database workloads into AWS databases, keeping the source database operational during migration to minimize downtime.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which tool helps customers analyze their AWS spending patterns over time?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Trusted Advisor",
          "D. AWS Pricing Calculator"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Cost Explorer** provides an interactive graphical interface to visualize, analyze, and report on your past AWS cost and usage trends.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which of the following is a benefit of AWS Regions?",
        "options": [
          "A. Automated global database replication",
          "B. Free international edge network routing",
          "C. Meeting regulatory compliance by storing data in specific geographic locations",
          "D. Eliminates the need to configure network routing rules"
        ],
        "correct_letter": "C",
        "explanation": "Deploying resources in specific geographic AWS Regions helps organizations comply with data residency, compliance, and sovereignty regulations (like GDPR) that require data to be stored within local boundaries.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which IAM entity should be used to delegate permissions to an AWS service, such as EC2, to access resources in S3?",
        "options": [
          "A. IAM group",
          "B. IAM role",
          "C. IAM user",
          "D. IAM policy boundary"
        ],
        "correct_letter": "B",
        "explanation": "An **IAM Role** provides temporary credentials to trusted entities (such as AWS services like EC2 or lambda) to execute API requests without embedding hardcoded access keys.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which of the following provides access to AWS compliance reports and security agreements?",
        "options": [
          "A. AWS Artifact",
          "B. AWS License Manager",
          "C. AWS Certificate Manager",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing security audit documents and compliance reports for the AWS infrastructure.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which service allows customers to cache web content at edge locations to improve delivery speed to global users?",
        "options": [
          "A. Amazon Route 53",
          "B. Amazon CloudFront",
          "C. AWS Direct Connect",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) that caches content at edge locations globally, lowering latency and improving load times.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical and environmental controls?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Third-party contractors"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages **physical and environmental controls** (HVAC, power grids, physical security guards) for all its datacenters.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Build fixed storage architectures",
          "B. Focus entirely on hardware configurations",
          "C. Increase capital expense to reduce operating cost",
          "D. Trade capital expense for variable expense"
        ],
        "correct_letter": "D",
        "explanation": "Cloud computing allows businesses to avoid large physical datacenter purchases (capital expenses) and instead pay for resource consumption dynamically (variable operational expenses).\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which service should a company use to monitor and audit API calls within their AWS account?",
        "options": [
          "A. Amazon CloudWatch",
          "B. AWS CloudTrail",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS CloudTrail** records API calls and activities within your AWS account for auditing and traceability.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following database services is serverless and scales automatically?",
        "options": [
          "A. Amazon RDS for PostgreSQL",
          "B. Amazon Redshift",
          "C. Amazon Aurora Serverless",
          "D. Amazon RDS for Oracle"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Aurora Serverless** automatically starts up, shuts down, and scales compute capacity based on your application's transaction volume.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which tool can be used to identify unused or underutilized AWS resources to help reduce costs?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Trusted Advisor",
          "C. AWS Budgets",
          "D. Amazon Inspector"
        ],
        "correct_letter": "B",
        "explanation": "The **Cost Optimization** category in **AWS Trusted Advisor** flags underutilized EC2 instances, idle load balancers, and unassociated Elastic IPs to help optimize spend.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Under the AWS shared responsibility model, who is responsible for application security and patching?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared",
          "D. Operating system vendors"
        ],
        "correct_letter": "B",
        "explanation": "Customers are responsible for application-level security, including patch management of their applications and operating system configurations.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service provides temporary security credentials for users who need access to AWS resources?",
        "options": [
          "A. AWS IAM",
          "B. AWS Directory Service",
          "C. AWS STS (Security Token Service)",
          "D. AWS Organizations"
        ],
        "correct_letter": "C",
        "explanation": "**AWS STS** provides temporary, limited-privilege security credentials for IAM users or federated accounts.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which AWS pricing option offers the largest discount for Amazon EC2 instances?",
        "options": [
          "A. No Upfront Reserved Instances",
          "B. Spot Instances",
          "C. On-Demand Instances",
          "D. Three-year, All Upfront, Standard Reserved Instances"
        ],
        "correct_letter": "D",
        "explanation": "Standard Reserved Instances committed for 3 years with an All Upfront payment offer the highest stable, guaranteed discount (up to 72%). *Note:* While Spot Instances can reach up to 90% savings, they do not offer guaranteed availability and are not considered a standard pricing option for stable workloads.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool allows customers to set alerts when their AWS costs exceed predefined thresholds?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which of the following is a best practice for securing the AWS Root user account?",
        "options": [
          "A. Share credentials with team leads",
          "B. Use root access keys for routine API calls",
          "C. Enable Multi-Factor Authentication (MFA) and delete the root access keys",
          "D. Disable root user login"
        ],
        "correct_letter": "C",
        "explanation": "Securing the **Root User** requires enabling MFA to prevent unauthorized console login and deleting administrative access keys to prevent programmatic API use.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which disaster recovery scenario offers the lowest probability of downtime?",
        "options": [
          "A. Backup and restore",
          "B. Pilot light",
          "C. Warm standby",
          "D. Multi-site active-active"
        ],
        "correct_letter": "D",
        "explanation": "In a **Multi-Site Active-Active** setup, workloads run concurrently across multiple active environments. If one site goes down, traffic is routed to the remaining active sites, providing near-zero downtime.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 15
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 16",
    "questions": [
      {
        "id": 1,
        "question": "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
        "options": [
          "A. Cost Explorer",
          "B. AWS Total Cost of Ownership (TCO) Calculator",
          "C. AWS Simple Monthly Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS TCO Calculator** (now integrated into the AWS Pricing Calculator) is designed specifically to help companies perform a cost-benefit analysis by comparing the capital and operating expenses of running their workloads in an on-premises datacenter versus the AWS Cloud.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
        "options": [
          "A. AWS Cost Explorer between AWS accounts",
          "B. Linked accounts and consolidated billing",
          "C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report",
          "D. Amazon EC2 Instance Usage Report between AWS accounts"
        ],
        "correct_letter": "B",
        "explanation": "Through consolidated billing under AWS Organizations, the billing system aggregates all **linked accounts** to apply Reserved Instance (RI) cost benefits across the entire organization, ensuring any account with matching instance usage receives the discounted RI rate.\n\n\n---"
      },
      {
        "id": 3,
        "question": "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
        "options": [
          "A. AWS Cost and Usage Reports",
          "B. AWS Organizations",
          "C. AWS Cost Explorer",
          "D. AWS Budgets"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Organizations** features **Consolidated Billing**, which aggregates the costs of multiple AWS accounts under a single master payer account, simplifying invoicing and tracking.\n\n\n---"
      },
      {
        "id": 4,
        "question": "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help?",
        "options": [
          "A. Amazon Route 53",
          "B. Amazon CloudFront",
          "C. AWS Direct Connect",
          "D. Amazon VPC"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) that caches web content (images, videos, APIs) at a global network of edge locations, ensuring low-latency delivery to users worldwide regardless of which Region the application is hosted in.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which of the following can a customer use to configure backup schedules for Amazon EBS volumes?",
        "options": [
          "A. Amazon EBS Snapshot Manager",
          "B. AWS Backup",
          "C. AWS Config",
          "D. Amazon Inspector"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Backup** (and Amazon Data Lifecycle Manager - DLM) allows you to define backup policies, schedule automated snapshots of Amazon EBS volumes, and manage backup retention cycles centrally.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which AWS service is used to create and manage security keys?",
        "options": [
          "A. AWS Secrets Manager",
          "B. AWS Certificate Manager (ACM)",
          "C. AWS Directory Service",
          "D. AWS Key Management Service (AWS KMS)"
        ],
        "correct_letter": "D",
        "explanation": "**AWS KMS** is a fully managed service that allows you to easily create, control, and manage cryptographic keys used to encrypt your data across AWS services.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates for their AWS-based applications?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)\n*   F. Server chassis rack hardware procurement",
        "options": [
          "A. Compute costs (e.g. EC2 instances)",
          "B. Storage costs (e.g. EBS volumes, S3 buckets)",
          "C. Network data transfer costs (outbound transit)",
          "D. Power and cooling facility utilities",
          "E. Physical datacenter security guard wages"
        ],
"correct_letter": "ABC",
        "explanation": "When calculating TCO for workloads running on AWS, you calculate the cloud operational expenses: **Compute** (A), **Storage** (B), and **Outbound Network Data Transfer** (C). Infrastructure components like datacenter power, cooling (D), security guards (E), and hardware rack procurement (F) are managed by AWS and are not billed directly to the customer.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 16
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 17",
    "questions": [
      {
        "id": 1,
        "question": "What time-savings advantage is offered with the use of Amazon Rekognition?",
        "options": [
          "A. Amazon Rekognition provides automatic watermarking of images.",
          "B. Amazon Rekognition provides automatic detection of objects appearing in pictures.",
          "C. Amazon Rekognition provides the ability to resize millions of images automatically.",
          "D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Rekognition** is a deep learning-based image and video analysis service that automatically identifies objects, people, text, scenes, and activities, saving developers from manually building complex computer vision models.\n\n\n---"
      },
      {
        "id": 2,
        "question": "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
        "options": [
          "A. Data center security",
          "B. Business analysis",
          "C. Project management",
          "D. Operating system administration"
        ],
        "correct_letter": "A",
        "explanation": "When calculating TCO comparisons, direct infrastructure costs like physical datacenter utility overheads, lease payments, and **datacenter security** (guards, biometric locks, video systems) are included because these on-premises costs are offset by AWS.\n\n\n---"
      },
      {
        "id": 3,
        "question": "According to the AWS shared responsibility model, what is AWS responsible for?",
        "options": [
          "A. Configuring Amazon VPC",
          "B. Managing application code",
          "C. Maintaining application traffic",
          "D. Managing the network infrastructure"
        ],
        "correct_letter": "D",
        "explanation": "Under the shared responsibility model, AWS is responsible for security **of** the cloud, which includes the physical physical hardware, global virtualization hosts, and the underlying physical **network infrastructure** of the datacenters.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which service should be used to estimate the costs of running a new project on AWS?",
        "options": [
          "A. AWS TCO Calculator",
          "B. AWS Simple Monthly Calculator",
          "C. AWS Cost Explorer API",
          "D. AWS Budgets"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Simple Monthly Calculator** (now replaced by the modern **AWS Pricing Calculator**) is the primary tool used to estimate and model monthly service expenses before creating and running a new project on AWS.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
        "options": [
          "A. Managing data encryption keys",
          "B. Replacing failed hard drives",
          "C. Patching virtualization hosts",
          "D. Setting up physical database cooling"
        ],
        "correct_letter": "A",
        "explanation": "The customer is responsible for security **in** the cloud. Generating, rotating, and controlling access permissions for **data encryption keys** (using KMS) is a customer-managed responsibility.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which AWS service can be used to monitor API calls and resource changes across an AWS account?",
        "options": [
          "A. Amazon CloudWatch",
          "B. AWS CloudTrail",
          "C. AWS Trusted Advisor",
          "D. AWS Health Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "**AWS CloudTrail** captures API requests made by users, roles, or AWS services, tracking resource modifications, logins, and CLI/SDK actions for compliance audits.\n\n\n---"
      },
      {
        "id": 7,
        "question": "Which service is a fully managed NoSQL database service?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon Aurora",
          "D. Amazon DynamoDB"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.\n\n\n---"
      },
      {
        "id": 8,
        "question": "What is the benefit of using Amazon EC2 Reserved Instances?",
        "options": [
          "A. Automatic instances vertical scaling",
          "B. The ability to launch instances across multiple cloud providers",
          "C. Lower hourly rates compared to On-Demand instances",
          "D. Free operating system updates"
        ],
        "correct_letter": "C",
        "explanation": "**Reserved Instances (RIs)** offer significant billing discounts (up to 72%) compared to standard hourly On-Demand rates in exchange for a committed term of 1 or 3 years.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows users to run code without provisioning or managing servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. Amazon Elastic Container Service (Amazon ECS)",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is a serverless compute service that runs your application code in response to events, managing provisioning, patching, and scaling automatically.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS data centers?",
        "options": [
          "A. The customer",
          "B. AWS",
          "C. Shared between AWS and the customer",
          "D. Local governments"
        ],
        "correct_letter": "B",
        "explanation": "Physical security of datacenters (guards, gates, biometric entry systems) is managed entirely by **AWS** as part of security \"of\" the cloud.\n\n\n---"
      },
      {
        "id": 11,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. High availability",
          "B. Vertical scaling",
          "C. Elasticity",
          "D. Reliability"
        ],
        "correct_letter": "D",
        "explanation": "**Reliability** is one of the core pillars of the AWS Well-Architected Framework, focusing on the ability of a workload to perform its intended function correctly and consistently.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which tool is used to monitor AWS resources and trigger alarms based on predefined thresholds?",
        "options": [
          "A. Amazon CloudWatch",
          "B. AWS CloudTrail",
          "C. AWS Config",
          "D. AWS Budgets"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon CloudWatch** monitors resources and applications in real-time, allowing you to configure CloudWatch Alarms to send notifications (via SNS) or trigger Auto Scaling events when metrics exceed thresholds.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which AWS billing feature allows a company to consolidate bills across multiple accounts?",
        "options": [
          "A. Cost allocation tags",
          "B. Consolidated billing",
          "C. Detailed billing reports",
          "D. AWS Budgets"
        ],
        "correct_letter": "B",
        "explanation": "**Consolidated billing** (managed via AWS Organizations) aggregates the billing data from multiple linked AWS accounts under a single master payer account, yielding one monthly invoice.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which service provides a simple way to deploy and run applications by handling provisioning, scaling, and load balancing?",
        "options": [
          "A. AWS Elastic Beanstalk",
          "B. AWS CloudFormation",
          "C. AWS Systems Manager",
          "D. AWS CodePipeline"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Elastic Beanstalk** is a Platform-as-a-Service (PaaS) offering. You upload your application code, and Beanstalk automatically manages provisioning, load balancing, auto-scaling, and health checks.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is an advantage of deploying applications across multiple Availability Zones?",
        "options": [
          "A. Reduced data transfer charges",
          "B. Automated code debugging",
          "C. Lower storage costs",
          "D. High availability and fault tolerance"
        ],
        "correct_letter": "D",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which AWS pricing model is best for temporary, flexible workloads with low SLA requirements?",
        "options": [
          "A. On-Demand Instances",
          "B. Reserved Instances",
          "C. Spot Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "C",
        "explanation": "**Spot Instances** let you purchase unused EC2 capacity at discounts up to 90%. They are ideal for flexible, fault-tolerant workloads (like batch processing or testing) that can tolerate being interrupted.\n\n\n---"
      },
      {
        "id": 17,
        "question": "Which service allows users to securely access AWS resources via temporary credentials?",
        "options": [
          "A. AWS IAM",
          "B. AWS KMS",
          "C. AWS Security Token Service (AWS STS)",
          "D. AWS Directory Service"
        ],
        "correct_letter": "C",
        "explanation": "**AWS STS** provides temporary, limited-privilege security credentials for IAM users, federated accounts, or AWS services (through IAM roles).\n\n\n---"
      },
      {
        "id": 18,
        "question": "Under the AWS shared responsibility model, who is responsible for patching the guest operating system on Amazon EC2?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The OS manufacturer"
        ],
        "correct_letter": "B",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which AWS service is a fast and reliable managed data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Athena"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which tool helps customers identify underutilized resources and save money?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Trusted Advisor",
          "C. AWS Budgets",
          "D. Amazon Inspector"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which component must be attached to a VPC to enable inbound internet access?",
        "options": [
          "A. Internet Gateway",
          "B. NAT Gateway",
          "C. Virtual Private Gateway",
          "D. VPC Endpoint"
        ],
        "correct_letter": "A",
        "explanation": "An **Internet Gateway (IGW)** is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC resources and the internet.\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which service should be used for long-term, low-cost archiving of data?",
        "options": [
          "A. Amazon S3 Standard",
          "B. Amazon S3 Glacier",
          "C. Amazon EBS",
          "D. Amazon EFS"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon S3 Glacier** is a secure, durable, and extremely low-cost storage class designed for data archiving and long-term backup.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a secure, private connection between an on-premises data center and AWS?",
        "options": [
          "A. AWS Site-to-Site VPN",
          "B. AWS Client VPN",
          "C. AWS Direct Connect",
          "D. Amazon Route 53"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Direct Connect** establishes a dedicated, private network connection from your on-premises datacenter to AWS, bypassing the public internet to provide more consistent network performance and lower data transfer rates.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Stop guessing capacity",
          "C. Customized OS kernels managed by AWS",
          "D. Free application code debugging"
        ],
        "correct_letter": "B",
        "explanation": "By utilizing AWS elasticity, you can scale resources up or down automatically based on demand, eliminating the need to guess capacity requirements and pay for unused servers.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which IAM entity should be used to delegate permissions to an AWS service to access resources in another service?",
        "options": [
          "A. IAM user",
          "B. IAM role",
          "C. IAM group",
          "D. IAM policy boundary"
        ],
        "correct_letter": "B",
        "explanation": "An **IAM Role** provides temporary credentials to trusted entities (such as AWS services like EC2 or lambda) to execute API requests without embedding hardcoded access keys.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service allows customers to cache static and dynamic web content at edge locations?",
        "options": [
          "A. Amazon Route 53",
          "B. Amazon CloudFront",
          "C. AWS Direct Connect",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) that caches web content (images, videos, APIs) at a global network of edge locations, ensuring low-latency delivery to users worldwide.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Under the AWS shared responsibility model, who is responsible for securing physical storage devices?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes safeguarding physical storage devices, servers, and hypervisors inside the datacenters.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Trade capital expense for variable expense"
        ],
        "correct_letter": "D",
        "explanation": "Instead of having to invest heavily in datacenters and physical servers before you know how you're going to use them, you can pay only when you consume resources, and pay only for the amount you consume.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which service should a company use to record, audit, and evaluate configuration changes of their AWS resources?",
        "options": [
          "A. AWS CloudTrail",
          "B. AWS Config",
          "C. Amazon CloudWatch",
          "D. AWS GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Config** is a fully managed service that provides resource inventory, configuration history, and configuration change notifications to enable compliance, auditing, and security analysis.\n\n\n---"
      },
      {
        "id": 30,
        "question": "Which of the following database services is serverless and scales automatically?",
        "options": [
          "A. Amazon RDS for PostgreSQL",
          "B. Amazon Redshift",
          "C. Amazon Aurora Serverless",
          "D. Amazon RDS for Oracle"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Aurora Serverless** automatically starts up, shuts down, and scales compute capacity based on your application's transaction volume.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which tool allows customers to set alerts when their AWS costs exceed predefined thresholds?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 32,
        "question": "Which of the following is a best practice for securing the AWS Root user account?",
        "options": [
          "A. Share credentials with team leads",
          "B. Use root access keys for routine API calls",
          "C. Enable Multi-Factor Authentication (MFA)",
          "D. Disable root user login"
        ],
        "correct_letter": "C",
        "explanation": "Securing the **Root User** requires enabling MFA to prevent unauthorized console login and deleting administrative access keys to prevent programmatic API use.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which disaster recovery scenario offers the lowest probability of downtime?",
        "options": [
          "A. Backup and restore",
          "B. Pilot light",
          "C. Warm standby",
          "D. Multi-site active-active"
        ],
        "correct_letter": "D",
        "explanation": "In a **Multi-Site Active-Active** setup, workloads run concurrently across multiple active environments. If one site goes down, traffic is routed to the remaining active sites, providing near-zero downtime.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which service helps customers migrate databases to AWS quickly and securely?",
        "options": [
          "A. AWS Database Migration Service (AWS DMS)",
          "B. AWS Migration Hub",
          "C. AWS Snowball",
          "D. AWS DataSync"
        ],
        "correct_letter": "A",
        "explanation": "**AWS DMS** facilitates migrations of active database workloads into AWS databases, keeping the source database operational during migration to minimize downtime.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which tool helps customers analyze their AWS spending patterns over time?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Trusted Advisor",
          "D. AWS Pricing Calculator"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Cost Explorer** provides an interactive graphical interface to visualize, analyze, and report on your past AWS cost and usage trends.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which of the following is a benefit of AWS Regions?",
        "options": [
          "A. Automated global database replication",
          "B. Free international edge network routing",
          "C. Meeting regulatory compliance by storing data in specific geographic locations",
          "D. Eliminates the need to configure network routing rules"
        ],
        "correct_letter": "C",
        "explanation": "Deploying resources in specific geographic AWS Regions helps organizations comply with data residency, compliance, and sovereignty regulations (like GDPR) that require data to be stored within local boundaries.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which IAM feature allows a customer to download a list of all users and the status of their credentials?",
        "options": [
          "A. Credential report",
          "B. Password policy dashboard",
          "C. Access advisor",
          "D. IAM policies"
        ],
        "correct_letter": "A",
        "explanation": "An **IAM Credential Report** provides a downloadable CSV list detailing all users in your account, including information such as password creation date, last rotated date, and MFA status, which is ideal for security audits.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides temporary security credentials for federated users?",
        "options": [
          "A. AWS IAM",
          "B. AWS Directory Service",
          "C. AWS STS (Security Token Service)",
          "D. AWS Organizations"
        ],
        "correct_letter": "C",
        "explanation": "**AWS STS** provides temporary, limited-privilege security credentials for IAM users, federated accounts, or AWS services.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which AWS pricing option offers the largest discount for Amazon EC2 instances?",
        "options": [
          "A. No Upfront Reserved Instances",
          "B. Spot Instances",
          "C. On-Demand Instances",
          "D. Three-year, All Upfront, Standard Reserved Instances"
        ],
        "correct_letter": "D",
        "explanation": "Standard Reserved Instances committed for 3 years with an All Upfront payment offer the highest stable, guaranteed discount (up to 72%).\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for application security?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared",
          "D. Operating system vendors"
        ],
        "correct_letter": "B",
        "explanation": "Customers are responsible for application-level security, including patch management of their applications, code integrity, and database schemas.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service is best suited for sharing files between multiple Linux instances?",
        "options": [
          "A. Amazon EBS",
          "B. Amazon EFS",
          "C. Amazon S3 Glacier",
          "D. Amazon RDS"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Elastic File System (EFS)** provides a serverless network file system that supports concurrent read/write access for thousands of EC2 instances.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which of the following is an example of horizontal scaling?",
        "options": [
          "A. Upgrading an EC2 instance from `t3.medium` to `t3.xlarge`",
          "B. Adding more EC2 instances to an Auto Scaling group",
          "C. Attaching a larger EBS volume to an EC2 instance",
          "D. Increasing the CPU capacity of an RDS database"
        ],
        "correct_letter": "B",
        "explanation": "**Horizontal scaling** (scaling out) involves adding more instances of resources to distribute workload. **Vertical scaling** (scaling up) involves adding resources (such as CPU or RAM) to a single existing instance.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which service allows customers to manage their domain names and DNS routing?",
        "options": [
          "A. Amazon Route 53",
          "B. AWS Directory Service",
          "C. Amazon Lightsail",
          "D. Amazon VPC"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available domain registrar and DNS routing web service.\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which AWS Support plan includes access to a dedicated Technical Account Manager?",
        "options": [
          "A. Developer",
          "B. Enterprise Support",
          "C. Business",
          "D. Basic"
        ],
        "correct_letter": "B",
        "explanation": "A dedicated **Technical Account Manager (TAM)** is a premium support benefit available exclusively to customers on the **Enterprise Support** tier.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
        "options": [
          "A. Patching operating system software",
          "B. Encrypting data",
          "C. Enforcing multi-factor authentication",
          "D. Auditing physical datacenter assets"
        ],
        "correct_letter": "D",
        "explanation": "Physical security and **auditing physical assets** within AWS datacenters are completely handled by AWS under security \"of\" the cloud.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service is best for storing common database query results to alleviate database load?",
        "options": [
          "A. Amazon Machine Learning",
          "B. Amazon SQS",
          "C. Amazon ElastiCache",
          "D. Amazon EC2 Instance Store"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon ElastiCache** provides an in-memory database caching layer (Redis or Memcached) to store frequently read query results, significantly reducing database query times.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Which features can be configured through the Amazon VPC Dashboard? (Select TWO.)",
        "options": [
          "A. Amazon CloudFront distributions",
          "B. Amazon Route 53",
          "C. Security Groups",
          "D. Subnets",
          "E. Elastic Load Balancing"
        ],
"correct_letter": "CD",
        "explanation": "The VPC dashboard allows you to manage network resources within your virtual private network, including **subnets** (D) and **security groups** (C).\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool allows you to view the most granular data about your AWS bill?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Cost and Usage Report",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "C",
        "explanation": "The **AWS Cost and Usage Report (CUR)** provides the most comprehensive and granular billing data available.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to run Docker containers without managing the underlying servers?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters.\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which AWS service enables users to consolidate billing across multiple accounts?",
        "options": [
          "A. AWS Budgets",
          "B. AWS Organizations",
          "C. AWS Config",
          "D. AWS Identity and Access Management (IAM)"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Organizations** provides a **consolidated billing** feature that aggregates payments and usage metrics across multiple AWS accounts under a single master payer account.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 17
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 18",
    "questions": [
      {
        "id": 1,
        "question": "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
        "options": [
          "A. Managing edge locations",
          "B. Physical security",
          "C. Firewall configuration",
          "D. Global infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "Security **in** the cloud refers to customer-controlled configurations. **Firewall configuration** (such as setting rules for Security Groups and Network Access Control Lists) is a customer duty. Physical security, global infrastructure, and edge locations are security **of** the cloud (managed by AWS).\n\n\n---"
      },
      {
        "id": 2,
        "question": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        "options": [
          "A. AWS Senior Support Engineers",
          "B. AWS Technical Account Managers",
          "C. AWS Trusted Advisor",
          "D. AWS Discussion Forums"
        ],
        "correct_letter": "D",
        "explanation": "The Basic Support plan includes free access to billing and account support, but **no technical case support**. Basic users must utilize self-service resources like the **AWS Discussion Forums**, documentation, and whitepapers for technical guidance.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        "options": [
          "A. Multiple Availability Zones",
          "B. Performance efficiency",
          "C. Security",
          "D. Encryption usage",
          "E. High availability"
        ],
"correct_letter": "BC",
        "explanation": "The six pillars of the AWS Well-Architected Framework are:\n1. Operational Excellence\n2. **Security** (C)\n3. Reliability\n4. **Performance Efficiency** (B)\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 4,
        "question": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
        "options": [
          "A. No upfront payment",
          "B. Hourly on-demand payment",
          "C. Partial upfront payment",
          "D. All upfront payment"
        ],
        "correct_letter": "D",
        "explanation": "For any AWS reservation (EC2 instances, RDS instances, Dedicated Hosts), the **All Upfront** payment option always yields the highest discount rate compared to Partial Upfront or No Upfront.\n\n\n---"
      },
      {
        "id": 5,
        "question": "What is an advantage of deploying an application across multiple Availability Zones?\n*   *Note:* Let's clarify: deploying in multiple AZs prevents localized failures (like a power outage, fire, or flood in one building) from crashing your application, providing high availability.",
        "options": [
          "A. There is a lower risk of service failure if a natural disaster occurs.",
          "B. There is a lower risk of service failure if a localized facility failure occurs.",
          "C. Automated application code profiling",
          "D. Eliminates database storage charges"
        ],
        "correct_letter": "B",
        "explanation": "Availability Zones are physically separated datacenters located in the same geographic region. Running applications across multiple AZs ensures that a power grid or **localized facility failure** in one AZ will not disrupt the application, since the other AZs remain online.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which AWS service would simplify migration of a database to AWS?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS Schema Conversion Tool",
          "C. AWS Database Migration Service (AWS DMS)",
          "D. AWS AppSync"
        ],
        "correct_letter": "C",
        "explanation": "**AWS DMS** helps migrate database workloads to AWS quickly and securely, keeping the source database fully operational during the migration to minimize downtime.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 18
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 19",
    "questions": [
      {
        "id": 1,
        "question": "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
        "options": [
          "A. AWS Config",
          "B. AWS OpsWorks",
          "C. AWS SDK",
          "D. AWS Marketplace"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Marketplace** is a digital catalog containing thousands of software listings from independent software vendors, allowing customers to easily find, buy, and deploy pre-configured software that runs on AWS.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS networking service enables a company to create a virtual network within AWS?",
        "options": [
          "A. AWS Config",
          "B. Amazon Route 53",
          "C. AWS Direct Connect",
          "D. Amazon Virtual Private Cloud (Amazon VPC)"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon VPC** enables customers to provision a logically isolated section of the AWS Cloud where they can launch AWS resources in a virtual network that they define.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which of the following is AWS’s responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Configuring third-party applications",
          "B. Maintaining physical hardware",
          "C. Securing application access and data",
          "D. Managing custom Amazon Machine Images (AMIs)"
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes physical datacenter security, environmental controls, and **maintaining the physical hardware** (servers, storage devices, networks).\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        "options": [
          "A. AWS Regions",
          "B. AWS edge locations",
          "C. AWS Availability Zones",
          "D. Amazon Virtual Private Cloud (Amazon VPC)"
        ],
        "correct_letter": "B",
        "explanation": "Amazon CloudFront caches web content at global **AWS edge locations** to deliver it to end-users with the lowest possible latency.\n\n\n---"
      },
      {
        "id": 5,
        "question": "How would a system administrator add an additional layer of login security to a user’s AWS Management Console?",
        "options": [
          "A. Use AWS Cloud Directory",
          "B. Use Multi-Factor Authentication (MFA)",
          "C. Use Directory Service",
          "D. Use AWS Key Management Service (AWS KMS)"
        ],
        "correct_letter": "B",
        "explanation": "Enforcing **Multi-Factor Authentication (MFA)** is a key security practice that adds an extra layer of protection on top of user passwords, requiring users to enter a unique code from an MFA device during console login.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Amazon Route 53 enables users to:",
        "options": [
          "A. Record API activity across AWS accounts.",
          "B. Register domain names and route internet traffic to resources.",
          "C. Inspect network packets for security threats.",
          "D. Build serverless container workflows."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar that routes end-user requests to internet applications.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 19
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 20",
    "questions": [
      {
        "id": 1,
        "question": "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
        "options": [
          "A. Amazon Rekognition",
          "B. AWS Trusted Advisor",
          "C. Amazon GuardDuty",
          "D. Amazon CloudWatch"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon GuardDuty** is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 2,
        "question": "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
        "options": [
          "A. AWS Marketplace",
          "B. AWS Partner Network (APN)",
          "C. AWS Managed Services",
          "D. AWS Service Catalog"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Marketplace** is a digital catalog with thousands of software listings from independent software vendors, allowing customers to easily find, buy, test, and deploy pre-configured solutions.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which AWS service is a managed NoSQL database?",
        "options": [
          "A. Amazon Redshift",
          "B. Amazon DynamoDB",
          "C. Amazon Aurora",
          "D. Amazon RDS for MariaDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which AWS service should be used to create a billing alarm?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. AWS CloudTrail",
          "C. Amazon CloudWatch",
          "D. Amazon QuickSight"
        ],
        "correct_letter": "C",
        "explanation": "You can monitor your estimated AWS charges by creating a billing alarm in **Amazon CloudWatch**, which can notify you (via Amazon SNS) when charges exceed a specified threshold.\n\n\n---"
      },
      {
        "id": 5,
        "question": "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
        "options": [
          "A. Scaling the web application and services developed with Docker",
          "B. Provisioning or scheduling containers to run on clusters and maintain their availability",
          "C. Maintaining the physical security of the underlying hardware",
          "D. Managing custom Docker container images"
        ],
        "correct_letter": "C",
        "explanation": "Since the application is running on self-managed EC2 instances (IaaS), the customer is responsible for managing the guest OS, Docker runtime, and container configurations. AWS is responsible for the **physical security and maintenance of the underlying datacenter hardware**.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
        "options": [
          "A. Operational excellence",
          "B. Security",
          "C. Reliability",
          "D. Performance efficiency"
        ],
        "correct_letter": "B",
        "explanation": "Using **AWS Config** to track, audit, and trace modifications to AWS configurations supports the **Security** pillar (specifically the Traceability requirement) of the AWS Well-Architected Framework.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 20
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 21",
    "questions": [
      {
        "id": 1,
        "question": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon DynamoDB",
          "C. Amazon Aurora",
          "D. Amazon Redshift"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless, single-digit millisecond latency key-value and document NoSQL database, requiring zero hardware provisioning or software configuration.\n\n\n---"
      },
      {
        "id": 2,
        "question": "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?",
        "options": [
          "A. AWS Accounts",
          "B. AWS Regions",
          "C. Availability Zones",
          "D. Edge locations"
        ],
        "correct_letter": "B",
        "explanation": "AWS **Regions** are geographically separate areas. Replicating data between Regions provides protection against large-scale natural disasters or regional power grid outages.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
        "options": [
          "A. Establishing real-time communications between members of an internal team",
          "B. Facilitating the use of NoSQL databases",
          "C. Providing automated security checks",
          "D. Implementing consolidated billing",
          "E. Enforcing the governance of AWS accounts"
        ],
"correct_letter": "DE",
        "explanation": "**Consolidated billing** (D) aggregates costs across all linked accounts.\n**Governance enforcement** (E) is achieved by applying Service Control Policies (SCPs) to restrict actions that users or accounts can perform.\n\n\n---"
      },
      {
        "id": 4,
        "question": "Which AWS service is used to automate configuration management using Chef and Puppet?",
        "options": [
          "A. AWS Config",
          "B. AWS OpsWorks",
          "C. AWS CloudFormation",
          "D. AWS Systems Manager"
        ],
        "correct_letter": "B",
        "explanation": "**AWS OpsWorks** is a configuration management service that provides managed instances of Chef and Puppet, helping you automate server configurations and deployments.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
        "options": [
          "A. Security of physical hardware",
          "B. Patching operating system software",
          "C. Disposing of faulty disks",
          "D. Custom database schema and application security"
        ],
        "correct_letter": "D",
        "explanation": "Under the Shared Responsibility Model, the customer is responsible for security **in** the cloud. Defining custom database schemas, data classifications, and application-level security policies is a customer responsibility.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Fault tolerance refers to:",
        "options": [
          "A. The ability to automatically scale compute capacity based on CPU usage.",
          "B. The built-in ability of an application's infrastructure to remain operational despite a component failure.",
          "C. The process of migrating code from development to production.",
          "D. The security compliance guidelines enforced by AWS."
        ],
        "correct_letter": "B",
        "explanation": "**Fault tolerance** is the ability of a system to continue operating properly in the event of the failure of some of its components (e.g. automatically routing traffic around a failed database node or instance).\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 21
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 22",
    "questions": [
      {
        "id": 1,
        "question": "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?",
        "options": [
          "A. Use multiple AWS accounts",
          "B. Use resource tagging",
          "C. Use multiple VPCs",
          "D. Use Cost Explorer"
        ],
        "correct_letter": "A",
        "explanation": "AWS issues bills at the account level. To obtain completely separate, independent invoices for different environments (like Dev, Test, Prod), the company should configure **multiple AWS accounts** (and optionally group them under AWS Organizations).\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS service can be used in the application deployment process?",
        "options": [
          "A. AWS AppSync",
          "B. AWS Batch",
          "C. AWS CodePipeline",
          "D. AWS DataSync"
        ],
        "correct_letter": "C",
        "explanation": "**AWS CodePipeline** is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.\n\n\n---"
      },
      {
        "id": 3,
        "question": "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
        "options": [
          "A. Spot Instances for stateless and flexible workloads",
          "B. Memory optimized instances for high-compute workloads",
          "C. On-Demand Instances for high-cost and sustained workloads",
          "D. Reserved Instances for sustained workloads",
          "E. Spend limits set using AWS Budgets"
        ],
"correct_letter": "AD",
        "explanation": "**Spot Instances** (A) provide up to a 90% discount for fault-tolerant and stateless workloads.\n**Reserved Instances** (D) provide up to a 72% discount for workloads that have predictable, steady-state usage.\n\n\n---"
      },
      {
        "id": 4,
        "question": "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. Which AWS service provides on-demand access to these items?",
        "options": [
          "A. AWS Certificate Manager (ACM)",
          "B. AWS Config",
          "C. AWS Artifact",
          "D. AWS Directory Service"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Artifact** is the self-service portal containing AWS compliance documentation (such as SOC and PCI reports) and agreements (such as the Business Associate Addendum).\n\n\n---"
      },
      {
        "id": 5,
        "question": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
        "options": [
          "A. Security of physical hardware",
          "B. Patching operating system software",
          "C. Disposing of faulty disks",
          "D. Custom database schema and application security"
        ],
        "correct_letter": "D",
        "explanation": "Under the Shared Responsibility Model, the customer is responsible for security **in** the cloud. Defining custom database schemas, data classifications, and application-level security policies is a customer responsibility.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "Which service provides a user the ability to warehouse data in the AWS Cloud?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon S3 Glacier",
          "D. Amazon DynamoDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a fast, fully managed, petabyte-scale data warehouse service in the cloud, designed for analyzing large-scale enterprise datasets.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 22
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 23",
    "questions": [
      {
        "id": 1,
        "question": "A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?",
        "options": [
          "A. Patching the guest operating system",
          "B. Maintaining physical and environmental controls",
          "C. Protecting communications and maintaining zone security",
          "D. Patching specific applications"
        ],
        "correct_letter": "B",
        "explanation": "Once you migrate workloads to AWS, security **of** the cloud (the physical facilities, perimeter security, cooling, and power infrastructure) becomes the sole responsibility of AWS. Patching the guest OS and applications remain the customer's responsibility.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which services can be used to deploy applications on AWS? (Choose two.)",
        "options": [
          "A. AWS Elastic Beanstalk",
          "B. AWS Config",
          "C. AWS OpsWorks",
          "D. AWS Application Discovery Service",
          "E. Amazon Kinesis"
        ],
"correct_letter": "AC",
        "explanation": "**AWS Elastic Beanstalk** (A) is a platform-as-a-service that manages application deployments automatically.\n**AWS OpsWorks** (C) uses Chef and Puppet configuration management to automate server deployment and management.\n\n\n---"
      },
      {
        "id": 3,
        "question": "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon Connect",
          "C. AWS Support Center",
          "D. AWS Managed Services"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Connect** is an easy-to-use, omni-channel cloud contact center service that helps companies deliver customer service at a lower cost.\n\n\n---"
      },
      {
        "id": 4,
        "question": "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
        "options": [
          "A. Cost Explorer",
          "B. TCO Calculator",
          "C. AWS Budgets",
          "D. AWS Pricing Calculator"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Pricing Calculator** is a web-based, public planning tool that allows anyone (even without an active AWS account or login) to estimate costs for AWS services based on expected usage.\n\n\n---"
      },
      {
        "id": 5,
        "question": "Which component must be attached to a VPC to enable inbound Internet access?",
        "options": [
          "A. NAT gateway",
          "B. VPC endpoint",
          "C. VPN gateway",
          "D. Internet gateway"
        ],
        "correct_letter": "D",
        "explanation": "An **Internet gateway (IGW)** is a horizontally scaled, redundant VPC component that enables communication between resources inside your VPC and the public internet.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which service should a company use to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 7,
        "question": "A company needs to run a serverless database that automatically scales storage capacity. Which database service meets this requirement?",
        "options": [
          "A. Amazon Aurora Serverless",
          "B. Amazon RDS for MySQL",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora Serverless** is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales compute capacity up or down based on application needs, and storage scales automatically up to 128 TB.\n\n\n---"
      },
      {
        "id": 8,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          "A. Security of physical hardware",
          "B. Configuring security groups",
          "C. Encrypting data at rest",
          "D. Setting up IAM user passwords"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud, which includes safeguarding the physical infrastructure (hardware, servers, disks) and datacenters.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Which service allows customers to easily design, deploy, and manage SSL/TLS certificates?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS Secrets Manager",
          "C. AWS Certificate Manager (ACM)",
          "D. AWS IAM"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Certificate Manager (ACM)** handles the creation, renewal, deployment, and management of public and private SSL/TLS certificates for use with AWS services like Elastic Load Balancing and CloudFront.\n\n\n---"
      },
      {
        "id": 10,
        "question": "Which AWS service provides a central place to view and manage security alerts and compliance status across multiple AWS accounts?",
        "options": [
          "A. AWS GuardDuty",
          "B. Amazon Inspector",
          "C. AWS Security Hub",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Security Hub** aggregates security alerts (findings) from multiple AWS services (such as GuardDuty, Inspector, Macie) and AWS Partner solutions, giving you a comprehensive view of your security posture.\n\n\n---"
      },
      {
        "id": 11,
        "question": "A company needs to run a containerized application but does not want to manage the underlying server infrastructure. Which compute service should the company use?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon ECS with EC2 launch type",
          "C. AWS Elastic Beanstalk",
          "D. AWS Fargate"
        ],
        "correct_letter": "D",
        "explanation": "**AWS Fargate** is a serverless compute engine for containers. It works with Amazon ECS and EKS, letting you run containerized applications without provisioning, configuring, or scaling virtual machine clusters.\n\n\n---"
      },
      {
        "id": 12,
        "question": "Under the AWS shared responsibility model, which of the following is a responsibility of the customer?",
        "options": [
          "A. Physical security of edge locations",
          "B. Upgrading hypervisor firmware",
          "C. Patching application operating systems",
          "D. Managing network hardware infrastructure"
        ],
        "correct_letter": "C",
        "explanation": "For Infrastructure-as-a-Service (IaaS) resources like EC2, the customer is responsible for maintaining and **patching the guest operating system** and applications they deploy.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which service can be used to capture and trace user requests as they travel through a distributed application?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS X-Ray",
          "D. AWS Config"
        ],
        "correct_letter": "C",
        "explanation": "**AWS X-Ray** helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through various services.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Which pricing model offers the highest discount for EC2 instances but has the highest risk of instance termination?",
        "options": [
          "A. Spot Instances",
          "B. Reserved Instances",
          "C. On-Demand Instances",
          "D. Savings Plans"
        ],
        "correct_letter": "A",
        "explanation": "**Spot Instances** leverage spare EC2 capacity at discounts of up to 90%, but they can be reclaimed (terminated) by AWS with a 2-minute warning if capacity is needed elsewhere.\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which of the following is a benefit of deploying resources in multiple AWS Availability Zones?",
        "options": [
          "A. Reduced data storage costs",
          "B. High availability",
          "C. Automated code profiling",
          "D. Direct connectivity to on-premises servers"
        ],
        "correct_letter": "B",
        "explanation": "Distributing application components across **multiple Availability Zones** protects against localized datacenter failures, ensuring the application remains operational (High Availability).\n\n\n---"
      },
      {
        "id": 16,
        "question": "Which service provides on-demand access to AWS security and compliance reports?",
        "options": [
          "A. AWS Artifact",
          "B. AWS Trusted Advisor",
          "C. AWS Security Hub",
          "D. AWS Shield"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is the self-service portal containing audit reports, SOC logs, ISO records, and compliance agreements.\n\n\n---"
      },
      {
        "id": 17,
        "question": "A company is migrating a large database to AWS and needs a physical device to transfer 80 TB of data securely. Which AWS service should they use?",
        "options": [
          "A. AWS Storage Gateway",
          "B. AWS DataSync",
          "C. AWS Snowball Edge",
          "D. Amazon S3 Transfer Acceleration"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Snowball Edge Storage Optimized** is a physical ruggedized device with up to 80-100 TB of storage capacity, ideal for transferring large datasets to AWS when internet bandwidth is limited.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps customers configure rules to filter web traffic and protect web applications from common web exploits?",
        "options": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Firewall Manager",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**AWS WAF (Web Application Firewall)** allows you to create rules to monitor and filter HTTP/HTTPS requests, protecting web applications from common exploits like SQL injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which tool can be used to monitor, store, and access log files from Amazon EC2 instances?",
        "options": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch Logs",
          "C. AWS Config",
          "D. Amazon GuardDuty"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch Logs** is used to monitor, store, and access log files generated by EC2 instances, CloudTrail, Route 53, or custom application code.\n\n\n---"
      },
      {
        "id": 20,
        "question": "Which of the following is a key design principle of the AWS Well-Architected Framework?",
        "options": [
          "A. Tight coupling of application components",
          "B. Monolithic infrastructure deployment",
          "C. Design for failure",
          "D. Under-provisioning resources to save cost"
        ],
        "correct_letter": "C",
        "explanation": "Under the Reliability and Operational Excellence pillars, the AWS Well-Architected Framework encourages teams to **design for failure** by assuming components will fail and building self-healing redundancies.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which service allows users to run code in response to events without provisioning servers?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Lambda",
          "C. AWS Fargate",
          "D. AWS Elastic Beanstalk"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Lambda** is the premier serverless compute service that runs code on-demand in response to events (such as S3 uploads or API Gateway requests).\n\n\n---"
      },
      {
        "id": 22,
        "question": "Which AWS support plan includes access to an Infrastructure Event Management (IEM) engineer?",
        "options": [
          "A. Business Support",
          "B. Enterprise Support",
          "C. Developer Support",
          "D. Basic Support"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Infrastructure Event Management (IEM)** is a planned engagement service included with the **Enterprise Support** tier (and available as an upgrade on Business Support) to assist during high-visibility launch events.\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which service provides a fast, fully managed, petabyte-scale data warehouse?",
        "options": [
          "A. Amazon RDS",
          "B. Amazon Redshift",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Redshift** is a column-oriented, fully managed database solution designed for high-performance data warehousing and analytics.\n\n\n---"
      },
      {
        "id": 24,
        "question": "Under the AWS shared responsibility model, who is responsible for managing the hypervisor?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. The hypervisor software vendor"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS manages the virtualization infrastructure layer, including the host operating system and **virtualization hypervisor** (e.g. Nitro or Xen).\n\n\n---"
      },
      {
        "id": 25,
        "question": "Which AWS tool helps estimate the monthly cost of AWS services before provisioning them?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets",
          "D. AWS Billing Dashboard"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Pricing Calculator** is a web-based service estimator tool used to approximate the cost of AWS services prior to launching them.\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which service is used to register domain names and route internet traffic to resources?",
        "options": [
          "A. AWS Direct Connect",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.\n\n\n---"
      },
      {
        "id": 27,
        "question": "Which of the following is an example of vertical scaling?",
        "options": [
          "A. Adding 5 more EC2 instances to a web application tier",
          "B. Creating a read replica for an RDS database",
          "C. Changing an EC2 instance type from `m5.large` to `m5.xlarge`",
          "D. Caching static assets on Amazon CloudFront"
        ],
        "correct_letter": "C",
        "explanation": "**Vertical scaling** (scaling up) involves increasing the capacity (CPU, RAM) of a single resource. Adding more instances is horizontal scaling (scaling out).\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which service should a company use to discover, classify, and protect sensitive data stored in Amazon S3?",
        "options": [
          "A. Amazon GuardDuty",
          "B. Amazon Macie",
          "C. AWS Secrets Manager",
          "D. AWS IAM Access Analyzer"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Macie** is a fully managed security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data (such as PII or credentials) stored in Amazon S3.\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which of the following is a benefit of using consolidated billing?",
        "options": [
          "A. Eliminates the need for data encryption",
          "B. Grants administrative access to all accounts automatically",
          "C. Combining usage to qualify for volume discounts",
          "D. Automatically increases account service limits"
        ],
        "correct_letter": "C",
        "explanation": "Consolidated billing combines usage metrics across all linked accounts in the organization, enabling the company to qualify for volume discounts (e.g. for S3 storage tiers or EC2 usage).\n\n\n---"
      },
      {
        "id": 30,
        "question": "Under the AWS shared responsibility model, who is responsible for encrypting data at rest?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Hardware vendors"
        ],
        "correct_letter": "B",
        "explanation": "The customer is responsible for security **in** the cloud. Defining encryption settings, using KMS keys, and ensuring data at rest is encrypted are customer responsibilities.\n\n\n---"
      },
      {
        "id": 31,
        "question": "Which AWS service is a managed relational database service?",
        "options": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon DocumentDB"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon RDS (Relational Database Service)** is a fully managed relational database service supporting MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server.\n\n\n---"
      },
      {
        "id": 32,
        "question": "What is the minimum recommended number of Availability Zones to use for a highly available application architecture?",
        "options": [
          "A. One",
          "B. Two",
          "C. Three",
          "D. Four"
        ],
        "correct_letter": "B",
        "explanation": "To guarantee high availability, you must deploy compute and network resources across **at least two Availability Zones** to remain resilient to any single datacenter outage.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Which service provides real-time guidance to help configure resources according to AWS best practices?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Trusted Advisor** provides real-time recommendations across five categories (Cost, Security, Fault Tolerance, Performance, and Service Limits) to align configurations with AWS best practices.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which compute service allows users to launch and manage virtual private servers with pre-configured templates?",
        "options": [
          "A. Amazon EC2",
          "B. AWS Elastic Beanstalk",
          "C. AWS Systems Manager",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon Lightsail** is an easy-to-use virtual private server (VPS) service that provides pre-configured templates (OS, application stacks) at a flat, predictable monthly price.\n\n\n---"
      },
      {
        "id": 35,
        "question": "Which of the following is a benefit of the AWS Cloud?",
        "options": [
          "A. Physical control over datacenter hardware",
          "B. Free application code debugging",
          "C. Customized OS kernels managed by AWS",
          "D. Stop spending money running and maintaining data centers"
        ],
        "correct_letter": "D",
        "explanation": "Moving to the cloud eliminates the heavy lifting of running physical datacenters (facility costs, racks, cooling, electricity), allowing businesses to pay only for the resources they consume.\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which service allows customers to easily configure a secure, fast, and reliable VPN connection from an on-premises network to AWS?",
        "options": [
          "A. AWS Direct Connect",
          "B. AWS Site-to-Site VPN",
          "C. AWS Client VPN",
          "D. AWS Transit Gateway"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Site-to-Site VPN** creates an IPsec VPN connection between your VPC and your on-premises network over the public internet, providing secure hybrid networking.\n\n\n---"
      },
      {
        "id": 37,
        "question": "Which of the following is a customer responsibility under the AWS shared responsibility model?",
        "options": [
          "A. Physical security of the hypervisor host",
          "B. Patching underlying network switches",
          "C. Patching EC2 operating systems",
          "D. Disposing of decommissioned storage drives"
        ],
        "correct_letter": "C",
        "explanation": "The customer manages all configurations and software layers inside their EC2 instances, including guest **operating system patching and updates**.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Which service provides a central repository for storing software development code and tracking version history?",
        "options": [
          "A. AWS CodeCommit",
          "B. AWS CodePipeline",
          "C. AWS CodeBuild",
          "D. AWS CodeDeploy"
        ],
        "correct_letter": "A",
        "explanation": "**AWS CodeCommit** is a fully managed source control service that hosts secure Git-based repositories.\n\n\n---"
      },
      {
        "id": 39,
        "question": "Which of the following AWS services helps identify security vulnerabilities and deviations from best practices in EC2 instances?",
        "options": [
          "A. AWS Trusted Advisor",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. AWS WAF"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon Inspector** is an automated vulnerability management service that scans EC2 instances, container images, and Lambda functions for software vulnerabilities and network exposure.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Under the AWS shared responsibility model, who is responsible for physical security of the AWS global infrastructure?",
        "options": [
          "A. AWS",
          "B. The customer",
          "C. Shared between AWS and the customer",
          "D. Local governments where datacenters are hosted"
        ],
        "correct_letter": "A",
        "explanation": "AWS manages security \"of\" the cloud, which includes **physical security controls** (perimeter fencing, biometrics, security guards) at all datacenter facilities.\n\n\n---"
      },
      {
        "id": 41,
        "question": "Which service provides a fully managed file system for Windows workloads?",
        "options": [
          "A. Amazon EFS",
          "B. Amazon S3",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon EBS"
        ],
        "correct_letter": "C",
        "explanation": "**Amazon FSx for Windows File Server** provides fully managed shared file storage built on Windows Server, supporting SMB protocols and NTFS permissions native to Windows.\n\n\n---"
      },
      {
        "id": 42,
        "question": "Which tool can be used to set custom alerts when AWS costs or usage exceed predefined limits?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Pricing Calculator",
          "D. AWS Trusted Advisor"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Budgets** allows you to set custom budgets and trigger alerts when costs or usage exceed (or are forecasted to exceed) target thresholds.\n\n\n---"
      },
      {
        "id": 43,
        "question": "Which of the following is a pillar of the AWS Well-Architected Framework?",
        "options": [
          "A. Scalability",
          "B. High availability",
          "C. Elasticity",
          "D. Operational excellence"
        ],
        "correct_letter": "D",
        "explanation": "The six pillars of the Well-Architected Framework are:\n1. **Operational Excellence** (D)\n2. Security\n3. Reliability\n4. Performance Efficiency\n5. Cost Optimization\n6. Sustainability\n\n\n---"
      },
      {
        "id": 44,
        "question": "Which service should a company use to securely control access to AWS resources?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Directory Service",
          "C. AWS Single Sign-On (AWS IAM Identity Center)",
          "D. AWS Secrets Manager"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** allows you to securely manage access to AWS services and resources by creating users, groups, and roles, and attaching granular permission policies.\n\n\n---"
      },
      {
        "id": 45,
        "question": "Which of the following is a key advantage of cloud computing?",
        "options": [
          "A. Trade variable expense for capital expense",
          "B. Manual capacity provisioning",
          "C. Custom hypervisor configuration",
          "D. Go global in minutes"
        ],
        "correct_letter": "D",
        "explanation": "The ability to deploy applications globally across multiple AWS Regions in just a few clicks (**go global in minutes**) is a core advantage of cloud computing.\n\n\n---"
      },
      {
        "id": 46,
        "question": "Which service can be used to run Apache Spark and Hadoop clusters?",
        "options": [
          "A. Amazon Athena",
          "B. Amazon EMR",
          "C. Amazon Redshift",
          "D. Amazon Kinesis"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon EMR (Elastic MapReduce)** is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark and Hadoop, on AWS.\n\n\n---"
      },
      {
        "id": 47,
        "question": "Under the AWS shared responsibility model, who is responsible for database backups in Amazon RDS?",
        "options": [
          "A. AWS (Solely responsible for both scheduling and storage infrastructure)",
          "B. The customer (Solely responsible for writing script automation)",
          "C. Shared (The customer configures the retention window and schedule; AWS runs the backup infrastructure and processes the snapshots automatically)",
          "D. The database software engine provider"
        ],
        "correct_letter": "C",
        "explanation": "RDS database backups are a **shared responsibility**. AWS provides the underlying backup orchestration infrastructure and automatically takes snapshots. However, the customer must enable backups, define the backup window, configure retention periods, and monitor compliance.\n\n\n---"
      },
      {
        "id": 48,
        "question": "Which tool provides a detailed view of all costs and usage in CSV format down to the resource level?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Billing Dashboard",
          "D. AWS Cost and Usage Report"
        ],
        "correct_letter": "D",
        "explanation": "The **AWS Cost and Usage Report** provides the most detailed cost and usage data available, allowing you to output raw CSV datasets down to the resource ID and hourly level.\n\n\n---"
      },
      {
        "id": 49,
        "question": "Which service allows customers to easily run Docker containers without managing the container orchestration infrastructure?",
        "options": [
          "A. Amazon EC2",
          "B. Amazon Elastic Container Service (Amazon ECS) with AWS Fargate",
          "C. AWS Elastic Beanstalk",
          "D. Amazon Lightsail"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon ECS** paired with **AWS Fargate** allows you to deploy containerized applications without needing to manage physical or virtual server clusters (serverless container orchestration).\n\n\n---"
      },
      {
        "id": 50,
        "question": "What is the AWS service that assists you in converting database schemas from one engine to another during a migration?",
        "options": [
          "A. AWS Database Migration Service (AWS DMS)",
          "B. AWS Schema Conversion Tool (SCT)",
          "C. AWS Migration Hub",
          "D. AWS Systems Manager"
        ],
        "correct_letter": "B",
        "explanation": "The **AWS Schema Conversion Tool (SCT)** makes heterogeneous database migrations predictable by automatically converting the source database schema and a majority of the database code (views, stored procedures) to a format compatible with the target database engine.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 23
  },
  {
    "title": "🎓 AWS Cloud Practitioner (CLF-C02) Practice Exam 24",
    "questions": [
      {
        "id": 1,
        "question": "AWS Elastic Beanstalk is a service that manages web infrastructure.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Elastic Beanstalk** is a Platform-as-a-Service (PaaS) designed to quickly deploy and scale web applications. It automatically handles deployment details like capacity provisioning, load balancing, auto-scaling, and health monitoring, which effectively manages the underlying web infrastructure on your behalf.\n\n\n---"
      },
      {
        "id": 2,
        "question": "Which AWS service reduces network latency?",
        "options": [
          "A. Amazon CloudFront",
          "B. AWS Transit Gateway",
          "C. Elastic Load Balancing",
          "D. AWS Direct Connect"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon CloudFront** is a Content Delivery Network (CDN) service that caches content at edge locations worldwide. By serving data, videos, applications, and APIs from locations closer to users, it dramatically reduces network latency.\n\n\n---"
      },
      {
        "id": 3,
        "question": "What kind of database is AWS DynamoDB?",
        "options": [
          "A. Relational database",
          "B. NoSQL database",
          "C. Document database"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon DynamoDB** is a fully managed, serverless **NoSQL** database service that provides fast, single-digit millisecond response times at any scale. It supports key-value and document data models.\n\n\n---"
      },
      {
        "id": 4,
        "question": "What is AWS EC2?",
        "options": [
          "A. AWS EC2 is a virtual server in the AWS Cloud",
          "B. AWS EC2 is a data center",
          "C. AWS EC2 is a resource monitoring service",
          "D. AWS EC2 is a serverless compute service"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Elastic Compute Cloud (Amazon EC2)** provides secure, resizable compute capacity in the cloud as virtual servers (referred to as EC2 instances). It is classified under Infrastructure-as-a-Service (IaaS).\n\n\n---"
      },
      {
        "id": 5,
        "question": "AWS Regions are part of the AWS Global Infrastructure.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "The **AWS Global Infrastructure** is built on Regions, Availability Zones, Local Zones, and Edge Locations. Regions are separate geographic areas containing multiple isolated and physically separate Availability Zones.\n\n\n---"
      },
      {
        "id": 6,
        "question": "Which Amazon S3 storage class has the lowest cost?",
        "options": [
          "A. S3 Standard",
          "B. S3 Glacier Deep Archive",
          "C. S3 Intelligent-Tiering"
        ],
        "correct_letter": "B",
        "explanation": "**Amazon S3 Glacier Deep Archive** is the lowest-cost storage class in Amazon S3. It is designed for long-term archiving of data that is rarely accessed (retrieval times can range from 12 to 48 hours).\n\n\n---"
      },
      {
        "id": 7,
        "question": "What is AWS EFS?",
        "options": [
          "A. AWS Elastic File System",
          "B. AWS Enterprise File System",
          "C. AWS Efficient File System"
        ],
        "correct_letter": "A",
        "explanation": "**AWS EFS** stands for **Elastic File System**. It provides a serverless, fully managed, shareable file storage system that can mount on multiple EC2 instances or on-premises servers simultaneously.\n\n\n---"
      },
      {
        "id": 8,
        "question": "What are Edge Locations?",
        "options": [
          "A. Data centers that store petabytes of data",
          "B. Data centers that deliver data fast to the users",
          "C. AWS Regions",
          "D. Physical hard drives"
        ],
        "correct_letter": "B",
        "explanation": "**Edge Locations** are specialized data centers located in major cities worldwide. They are used by Amazon CloudFront to cache content closer to end-users to deliver data fast with low latency.\n\n\n---"
      },
      {
        "id": 9,
        "question": "Denial-of-Service (DoS) attacks come from different sources.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "B",
        "explanation": "A **Denial-of-Service (DoS)** attack originates from a **single source** (one computer or network connection). In contrast, a **Distributed Denial-of-Service (DDoS)** attack originates from **different / multiple sources** (e.g., a botnet).\n\n\n---"
      },
      {
        "id": 10,
        "question": "What is the purpose of the AWS Organizations service?",
        "options": [
          "A. AWS Organizations helps you manage multiple AWS Accounts",
          "B. AWS Organizations groups your applications and manages them",
          "C. AWS Organizations optimizes your system performance",
          "D. AWS Organizations organizes your services and makes service usage reports"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Organizations** is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It supports consolidated billing and policy controls (SCPs).\n\n\n---"
      },
      {
        "id": 11,
        "question": "Which of the following is an AWS Migration Strategy?",
        "options": [
          "A. Auditability",
          "B. Replatforming",
          "C. Governance"
        ],
        "correct_letter": "B",
        "explanation": "**Replatforming** (sometimes called \"lift-tinker-and-shift\") is one of the standard migration strategies defined in the AWS 7 Rs model. It involves making a few optimizations to the application without changing its core architecture (e.g., migrating an on-premises database to Amazon RDS).\n\n\n---"
      },
      {
        "id": 12,
        "question": "Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on minimizing business risks?",
        "options": [
          "A. Operations Perspective",
          "B. Governance Perspective",
          "C. Business Perspective",
          "D. People Perspective"
        ],
        "correct_letter": "B",
        "explanation": "The **Governance Perspective** of the AWS CAF focuses on program and project management, risk management, and cloud governance to ensure cloud initiatives align with business goals while minimizing business risks.\n\n\n---"
      },
      {
        "id": 13,
        "question": "Which pillar of the AWS Well-Architected Framework focuses on recovering from service or infrastructure disruptions?",
        "options": [
          "A. Operational excellence",
          "B. Reliability",
          "C. Performance efficiency"
        ],
        "correct_letter": "B",
        "explanation": "The **Reliability** pillar is designed to ensure a workload performs its intended function correctly and consistently. This includes the ability to prevent and quickly recover from service or infrastructure disruptions.\n\n\n---"
      },
      {
        "id": 14,
        "question": "Economies of scale continually reduce AWS Cloud pricing.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "**Economies of scale** allow AWS to lower its costs by operating at a massive global scale. These cost savings are passed back to customers in the form of price reductions (AWS has reduced prices dozens of times since its launch).\n\n\n---"
      },
      {
        "id": 15,
        "question": "Which service sends and receives messages between application components?",
        "options": [
          "A. AWS Simple Queue Service (AWS SQS)",
          "B. AWS Lambda",
          "C. AWS Snowmobile",
          "D. AWS CloudTrail"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon SQS** is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications by transmitting messages between components.\n\n\n---"
      },
      {
        "id": 16,
        "question": "Who is responsible for protecting the storage and database infrastructure in the AWS Cloud?",
        "options": [
          "A. AWS",
          "B. Customers"
        ],
        "correct_letter": "A",
        "explanation": "Under the Shared Responsibility Model, AWS is responsible for security **of** the cloud. This includes physical protection, maintenance, and logical security of the underlying hardware, networking, and virtualization hypervisor layers that power storage and database infrastructure.\n\n\n---"
      },
      {
        "id": 17,
        "question": "AWS Artifact is a service that provides access to AWS security and compliance reports.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Artifact** is a central resource portal for compliance-related information. It provides on-demand access to AWS's security and compliance reports (e.g., SOC, ISO) and select online agreements.\n\n\n---"
      },
      {
        "id": 18,
        "question": "Which AWS service helps you create users and provide them security access?",
        "options": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS CloudFormation",
          "C. AWS Redshift",
          "D. AWS Direct Connect"
        ],
        "correct_letter": "A",
        "explanation": "**AWS IAM** is the core identity and access management service that allows you to securely manage access to AWS services by creating and managing users, groups, and roles, and applying granular permission policies.\n\n\n---"
      },
      {
        "id": 19,
        "question": "Which AWS service helps you build text chatbots?",
        "options": [
          "A. Amazon Lex",
          "B. Amazon Transcribe",
          "C. Amazon Polly",
          "D. Amazon Comprehend"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Lex** is a fully managed service for building conversational interfaces into applications using voice and text (chatbots). It uses advanced natural language understanding (NLU) and automatic speech recognition (ASR).\n\n\n---"
      },
      {
        "id": 20,
        "question": "Can all accounts of an AWS Organization be billed with a single bill?",
        "options": [
          "A. Yes",
          "B. No"
        ],
        "correct_letter": "A",
        "explanation": "Through **Consolidated Billing** in AWS Organizations, all linked member accounts can be paid through a single master payment method, helping to track costs easily and qualify for volume tier discounts.\n\n\n---"
      },
      {
        "id": 21,
        "question": "Which database is ideal for large organizations and enterprises?",
        "options": [
          "A. Amazon Aurora",
          "B. MySQL",
          "C. PostgreSQL"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon Aurora** is a relational database engine designed for enterprise-grade workloads. It provides up to 5x the throughput of standard MySQL and 3x standard PostgreSQL databases, offering the performance of commercial-grade databases at open-source costs.\n\n\n---"
      },
      {
        "id": 22,
        "question": "If an instance store reboots, does the data in the instance persist?",
        "options": [
          "A. Yes",
          "B. No"
        ],
        "correct_letter": "A",
        "explanation": "Data stored in an **EC2 Instance Store** persists when the instance reboots. However, the data will be lost if the instance is stopped, terminated, or if the underlying host hardware fails (which is why instance store is called ephemeral).\n\n\n---"
      },
      {
        "id": 23,
        "question": "Which sentence best describes AWS CloudWatch?",
        "options": [
          "A. CloudWatch is a service that logs your AWS environment Actions. It is used to create events that describe how your application is being used.",
          "B. CloudWatch is a monitoring service that monitors your resources, and configures automatic alarms.",
          "C. CloudWatch monitors your account and recommends you cost optimization and performance improvement actions."
        ],
        "correct_letter": "B",
        "explanation": "**Amazon CloudWatch** is a monitoring and observability service. It collects performance logs and metrics, allowing you to configure alarms to react automatically to predefined threshold changes. (Note: Option A describes **AWS CloudTrail**, and Option C describes **AWS Trusted Advisor**).\n\n\n---"
      },
      {
        "id": 24,
        "question": "What does AWS Shield protect from?",
        "options": [
          "A. DoS and DDoS attacks",
          "B. Infrastructure threats",
          "C. Software vulnerabilities"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Shield** is a managed Distributed Denial of Service (DDoS) protection service that safeguards web applications running on AWS from common infrastructure and protocol attacks.\n\n\n---"
      },
      {
        "id": 25,
        "question": "Based on an application's network requests, the AWS Web Application Firewall (WAF) can block network traffic.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "**AWS WAF** allows you to block or allow requests based on criteria you define, such as the IP addresses, HTTP headers, HTTP body, or URI strings. This helps protect applications against exploits like SQL Injection and Cross-Site Scripting (XSS).\n\n\n---"
      },
      {
        "id": 26,
        "question": "Which AWS service manages encryption and decryption of data?",
        "options": [
          "A. AWS Key Management Service (AWS KMS)",
          "B. AWS GuardDuty",
          "C. AWS WAF",
          "D. AWS Inspector"
        ],
        "correct_letter": "A",
        "explanation": "**AWS KMS** is a managed service that makes it easy to create and control cryptographic keys. It integrates with many other AWS services to handle encryption and decryption of data at rest.\n\n\n---"
      },
      {
        "id": 27,
        "question": "AWS Elastic Block Store (EBS) Snapshots are:",
        "options": [
          "A. Full data backups",
          "B. Incremental data backups",
          "C. Differential data backups"
        ],
        "correct_letter": "B",
        "explanation": "**EBS Snapshots** are incremental backups. This means only the blocks of data that have changed since your last backup snapshot are copied and billed, minimizing storage space requirements.\n\n\n---"
      },
      {
        "id": 28,
        "question": "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
        "options": [
          "A. AWS Redshift",
          "B. AWS Snowmobile",
          "C. AWS S3"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Snowmobile** is an exabyte-scale data transfer service that can move up to 100 PB of data per shipping container. (Note: The AWS Snow Family handles physical media transfers, whereas Amazon S3 is cloud storage, and Redshift is a data warehouse).\n\n\n---"
      },
      {
        "id": 29,
        "question": "Which tool lets you visualize and manage your AWS costs?",
        "options": [
          "A. AWS Cost Explorer",
          "B. AWS Pricing Calculator",
          "C. AWS Budgets"
        ],
        "correct_letter": "A",
        "explanation": "**AWS Cost Explorer** provides a graphical interface that lets you visualize, understand, and manage your historical and future estimated AWS costs and usage.\n\n\n---"
      },
      {
        "id": 30,
        "question": "What is an IAM Policy?",
        "options": [
          "A. An IAM Policy is a document that customizes user permissions for AWS services and resources",
          "B. An IAM Policy is a temporary access to AWS services or resources",
          "C. An IAM Policy is an entity that interacts with AWS resources or services"
        ],
        "correct_letter": "A",
        "explanation": "An **IAM Policy** is a formal JSON document that defines permissions. When associated with an IAM user, group, or role, it determines what actions they can perform on specific AWS resources.\n\n\n---"
      },
      {
        "id": 31,
        "question": "What is the name of the service that lets you run code without needing to think about servers?",
        "options": [
          "A. AWS ECS",
          "B. AWS EC2 Auto Scaling",
          "C. AWS Lambda",
          "D. AWS Serverless"
        ],
        "correct_letter": "C",
        "explanation": "**AWS Lambda** is the event-driven serverless compute service that runs code only when triggered, automatically managing the compute resources and servers behind the scenes.\n\n\n---"
      },
      {
        "id": 32,
        "question": "DNS stands for \"Data Name System\".",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "B",
        "explanation": "**DNS** stands for **Domain Name System**. It is the hierarchical naming protocol that translates human-readable web addresses (like `example.com`) to machine-readable IP addresses.\n\n\n---"
      },
      {
        "id": 33,
        "question": "Who is responsible for managing platform and customer data in the AWS Cloud?",
        "options": [
          "A. AWS",
          "B. Customers"
        ],
        "correct_letter": "B",
        "explanation": "Under the Shared Responsibility Model, the **customer** is responsible for security **in** the cloud. This includes protecting customer data, configuring access controls, managing platform policies, and performing operating system patches.\n\n\n---"
      },
      {
        "id": 34,
        "question": "Which AWS database service provides historical data of your application changes?",
        "options": [
          "A. AWS ElastiCache",
          "B. AWS Neptune",
          "C. AWS DocumentDB",
          "D. AWS Quantum Ledger Database (QLDB)"
        ],
        "correct_letter": "D",
        "explanation": "**Amazon QLDB** is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log of all application data changes.\n\n\n---"
      },
      {
        "id": 35,
        "question": "What is AWS DynamoDB Accelerator (DAX) capable of?",
        "options": [
          "A. Improves read times of non-relational data",
          "B. Improves visualization times of graphs",
          "C. Improves write times of documents",
          "D. Improves read times of relational data"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon DynamoDB Accelerator (DAX)** is a fully managed, highly available, in-memory cache for DynamoDB. It provides microsecond read performance for DynamoDB (a NoSQL / non-relational database).\n\n\n---"
      },
      {
        "id": 36,
        "question": "Which AWS service do you need to use to get a complete history of user activity?",
        "options": [
          "A. AWS CloudWatch",
          "B. AWS Trusted Advisor",
          "C. AWS CloudTrail"
        ],
        "correct_letter": "C",
        "explanation": "**AWS CloudTrail** captures API calls and user activities within your AWS account. It acts as an auditor's tool, providing a full history of resource modifications, logins, and management actions.\n\n\n---"
      },
      {
        "id": 37,
        "question": "What does AWS Marketplace allow you to do?",
        "options": [
          "A. AWS Marketplace lets you see the cost analysis of all AWS Cloud Services",
          "B. AWS Marketplace lets you list and sell software",
          "C. AWS Marketplace lets you list all AWS Cloud Services"
        ],
        "correct_letter": "B",
        "explanation": "**AWS Marketplace** is a curated digital catalog that makes it easy for customers to find, buy, deploy, and manage third-party software. Sellers (ISVs) can list and sell their software to customers there.\n\n\n---"
      },
      {
        "id": 38,
        "question": "Containers are an essential concept in microservice architectures.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "Containers package code, runtimes, and system libraries together, making them lightweight and ideal for building, deploying, scaling, and isolating microservice components.\n\n\n---"
      },
      {
        "id": 39,
        "question": "With AWS EC2, you only pay for the compute time that you use.",
        "options": [
          "A. True",
          "B. False"
        ],
        "correct_letter": "A",
        "explanation": "A primary cloud benefit is the pay-as-you-go model. With **Amazon EC2**, you only pay for the virtual CPU and memory capacity (compute time) that your instance consumes while active.\n\n\n---"
      },
      {
        "id": 40,
        "question": "Which service helps you reduce development time and complexity of Machine Learning (ML)?",
        "options": [
          "A. AWS SageMaker",
          "B. AWS Lex",
          "C. AWS Elastic Beanstalk",
          "D. AWS Redshift"
        ],
        "correct_letter": "A",
        "explanation": "**Amazon SageMaker AI** is a fully managed service that provides developers and data scientists with the ability to build, train, and deploy machine learning (ML) models quickly, simplifying the complex tasks of machine learning lifecycle management.\n\n\n---\n> [!IMPORTANT]\n> **© AWS Certified Developer - Associate • Author: [Apurv Gujjar](https://apurv-gujjar.me)**\n>\n> 🧡 **The Learning Journey:** This repository is my personal sandbox for growth. If you find a bug or a script fails, don't worry every mistake is just a puzzle waiting to be solved. Treat it as a stepping stone, fix it with pride, and keep moving forward. We are all learning, growing, and building the future together! 🚀"
      }
    ],
    "id": 24
  }
];