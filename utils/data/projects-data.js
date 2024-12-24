export const projectsData = [
    {
        id: 1,
        name: 'Cloud Cost Efficiency Analytics',
        description: "Me and my team consists of 5 other developers develop the backend and dashboard of a cloud cost efficiency data from both Azure and AWS, creating alerts for high cost usages, detects anomalies and displays possible cost saving potentials in a dashboard application",
        tools: ['DBT', 'AWS S3', 'AWS Athena', 'AWS Lambda', 'AWS SQS', 'AWS Quicksight', 'SQL', 'Python', 'Terraform', 'Grafana'],
        role: 'DataEngineeringTeamLead',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Formula1 Game Real Time Analytics',
        description: "A real-time data application that monitors car-related telemetry data using IoT, MQTT, and WebSocket technologies. The application leverages AWS for cloud infrastructure, Kubernetes for container orchestration, and Confluent-hosted Kafka for data streaming. It also features a historical data dashboard to track metrics such as lap times and best sector times",
        tools: ['Kubernetes', 'Helm Charts', 'AWS EKS', 'Grafana', 'AWS Lambda', 'AWS Redshift', 'Confluent Kafka', 'Confluent Flink', 'InfluxDB', 'SQL', 'Python', 'Terraform'],
        role: 'DataPlatformEngineer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Data Fabric Project',
        description: "I worked on an exciting data fabric project for a major German manufacturing giant. The goal of the project was to consolidate all cybersecurity departmental data into a single, accessible platform for users. We utilized a range of technologies including Python, Airflow, Neo4j, AWS, Terraform, and Kubernetes. For the virtualization layer, we implemented a powerful data integration tool to ensure seamless data access. This project was a significant step towards enhancing data management and accessibility within the client's domain.",
        tools: ['Python', 'Airflow', 'Neo4j', 'AWS', 'Terraform', 'Kubernetes', "Starburst"],
        role: 'SeniorDataEngineer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'Regulatory Data Stack',
        description: "At Scalable Capital, I worked on a project called Regulatory Data Stack. The goal was to build robust data pipelines. We used AWS Step Functions for orchestration and dbt for data transformation. Our main development stack included Python and SQL. We implemented numerous Terraform modules and utilized DynamoDB to copy data from various tables belonging to different departments to the raw layer in S3. Additionally, we used AWS DMS to copy data from Amazon RDS, PostgreSQL, and MySQL to our data lake. For querying and analyzing data, we used AWS Athena. For the frontend, we used Metabase.",
        tools: ['Python', 'SQL', 'AWS Step Functions', 'Dbt', 'Terraform', 'DynamoDB', 'AWS DMS', 'Amazon RDS', 'PostgreSQL', 'MySQL', 'AWS S3', 'AWS Athena', 'Metabase'],
        role: 'SeniorDataEngineer',
        code: '',
        demo: '',
    },
    {
        id: 5,
        name: 'Automotive Data Processing and Dashboarding',
        description: "At Adastra, I worked on a project for major automotive clients, Volkswagen and Audi. The goal was to process data from the S3 raw layer using AWS Glue, transforming it into various layers and ultimately loading it into Redshift. I then created dashboards using Tableau. Additionally, I developed a file uploader backend using AWS Lambda and API Gateway to bring data into the raw layer. I used AWS Step Functions for orchestration and implemented numerous Terraform modules, which I also contributed to on GitHub. This project significantly improved data processing and visualization capabilities for the clients.",
        tools: ['AWS Glue', 'S3', 'Redshift', 'Tableau', 'AWS Lambda', 'API Gateway', 'AWS Step Functions', 'Terraform'],
        role: 'DataEngineer',
        code: '',
        demo: '',
    },
    {
        id: 5,
        name: "Streaming Data Processing Online Betting",
        description: "At VNGRS, I worked on a streaming data transformation and anomaly detection project for an online betting client. The project utilized AWS Kinesis Data Analytics and Apache Flink for real-time processing, with DynamoDB managing intermediate states and DynamoDB Streams capturing real-time updates. Data sources included an on-premise Kafka cluster and AWS DMS with change data capture, and the pipeline sank into Kinesis Data Firehose. Terraform handled infrastructure provisioning, GitLab CI/CD ensured continuous delivery, and the primary programming language was Scala.",
        tools: ["Scala", "AWS Kinesis Data Analytics", "AWS Kinesis Data Firehose", "Apache Flink", "Kafka", "AWS Athena", "AWS DMS", "DynamoDB/DynamoDB Streams", "Terraform", "GitLab CI/CD"],
        role: "SoftwareDataEngineer",
        code: "",
        demo: ""
    },
    {
        id: 6,
        name: "Product Feed ETL Pipeline for Insider",
        description: "At Insider, I worked on a Product Feed ETL pipeline where source data was transformed into semantic layers and fed into Elasticsearch for both the recommendation system and Product Feed API. The pipeline utilized AWS Lambda and AWS Kinesis as the data source. Additionally, I developed an API using Scala and the Akka framework to serve the source data.",
        tools: ["Scala", "Akka", "AWS Lambda", "AWS Kinesis", "Elasticsearch", "JavaScript", "Python"],
        role: "BigDataSoftwareEngineer",
        code: "",
        demo: ""
    }

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },