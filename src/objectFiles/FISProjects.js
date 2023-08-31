const fisProjects = [
    {
        title: 'Aureus',
        refName:'AureusRef',
        subtitle: 'Event Correlation Engine',
        status: "In Progress",
        description: 'Aureus is an event correlation engine, designed to ingest alerts from many data sources (log monitoring, network monitoring, server monitoring, config monitoring, etc.), and produce meaningful correlations against enterprise-level incidents using Machine Learning models to point back to potential root cause. The scope for this project is quite broad as there are components for data ingestion, pipelining, correlation, and observability. I will speak toward data ingestion and pipelining, as that is what I am working on for this project.',
        technologicalDescription: "Regarding data ingestion and pipelining for Aureus, alert records from numerous data sources are posted to Nifi clusters, which are forwarded to Kafka topics and streamed. I work in developing Flink, which is an Apache product that is used to route and sink realtime data in mass quantities from a streaming source (usually a Kafka topic) to a destination, which could be any number of databases or other kafka instances. I have built out routing parameters and data mapping and transforms that produce a customizable range of Flink streams which are dynamically created based on user input config on options for source and destination streaming, routing dictations, and attribute options for transform functions to be applied.",
        languagesUsed: [
            'Java',
            'Python',
        ],
        technologiesUsed: [
            'Flink',
            'Pyflink',
            'Kafka',
            'Nifi',
            'Flask',
            'Docker',
            'Postgres',
            'Cassandra'
        ],
        appsInterfacedWith:[
            'CA Spectrum',
            'Dynatrace',
            'Thousand Eyes',
            'Storm',
            'Netcool',
            'Qradar',
            'Splunk',
            'Appneta'
        ]
    },
    {
        title: 'Minerva',
        refName:'MinervaRef',
        subtitle: 'Monitoring Control Center',
        status: "In Progress",
        description: 'Minerva is designed to be a manager of all monitoring. Minerva collects alert data from a number of sources, not unlike Aureus, to which it can correlate from multiple tools and display for end users in a way that is decipherable and adjustable from one location. Not only can individual tool thresholds be adjusted, but also entire business rules which can handle major monitoring changes against entire environments in one fell swoop rather than on individual tools. There are layers for ingestion, correlation, transactions, and visibility',
        technologicalDescription: "Minerva is a React application used in conjunction with MaterialUI that utilizes an Express and Node stack to perform transactions against our Opensearch, MSSQL, and Oracle databases as well as to interface with third party tools.",
        languagesUsed: [
            'Javascript',
            'HTML',
            'CSS',
        ],
        technologiesUsed: [
            'React',
            'Node',
            'MaterialUI',
            'Opensearch',
            'MSSQL',
            'Oracle',
        ],
        appsInterfacedWith:[
            'CA Spectrum',
            'Dynatrace',
            'Thousand Eyes',
            'Storm',
            'Netcool',
            'Qradar',
            'Splunk',
            'Appneta'
        ]
    },
    {
        title: 'Event Dispatch',
        refName:'EDRef',
        subtitle: 'Event Management Engine to Interface Between Event Producers and ServiceNow Alarm Management',
        status: "Complete",
        description: "Event Dispatch is a solution built for proper alert generation upon event consumption and processing for any of numerous input sets against ServiceNOW. Events are collected and analyzed based on their source, then applied against business rules which determine the alerting threshold and subsequently calulates the necessary alarm generation from active events. This is key for accurate ticket generation upon any incident that occurs for monitored devices.",
        technologicalDescription: "This project was created using AWS technologies, and our environment was provisioned via Terraform. Custom built event integrations are handled via RESTful Posts to our API Gateway, then ingested into a Postgres instance against numerous characterestics via a Python Lambda. Apache Airflow manages processing against these events, and then subsequent alarm generation in ServiceNOW. Any necessary callouts or issues with downtime are reported via a corresponding xMatters Workflow.",
        languagesUsed: [
            'Python'
        ],
        technologiesUsed: [
            'AWS',
            'Airflow',
            'Terraform',
            'Postgres'
        ],
        appsInterfacedWith:[
            'ServiceNow',
            'xMatters'
        ]

    },
    {
        title: 'Certificate Monitoring Processor',
        refName:'CertRef',
        subtitle: 'A Solution to SSL Certificate Expiration Monitoring',
        status: "Complete",
        description: 'The Certificate Monitoring Processor provides SSL certificate monitoring for application owners who may not always have the visibility nor any automated tool to help them in renewing certificates in a timely fashion. This moinitoring solution provides automated identification, ticketing, and callout against certificates which are nearing expiration. This saves our company greatly in reducing the number of certificate related major incidents which can often have impact of full application downtime.',
        technologicalDescription: "The certificate processor reads individual certificate data from an MSSQL database which is loaded in schedules from scanning engines which pull certificate data directly from application servers. The cert processor then cleans that data to find which certs are within the configured time until expiration date, and then will perform matches of the identifier for the application entity against the support group in our CMDB, from which it can either provide a new ticket if one hasn't been created or generate reminders and callouts on the ticket based on set interval expiration. There is also a functionality built in to perform phone-based escalated callouts via xMatters workflows upon a certificate surpassing a dangerous threshold of time until expiration. Auto resolve functionalites are also built in when certificates have been detected as successfully updated.",
        languagesUsed: [
            'Python'
        ],
        technologiesUsed: [
            'Docker',
            'Crontab',
            'MSSQL'
        ],
        appsInterfacedWith:[
            'ServiceNow',
            'xMatters'
        ]
    },
    {
        title: 'Device Addition and Deletion Interface - Optimized (DADI-O)',
        refName:'DADIRef',
        subtitle: 'An Interface for Network Engineers to Add, Remove, and Modify Devices on the FIS Network',
        status: "Complete",
        description: 'DADI-O is a web interface that provides self service in the Network Monitoring space for Network Engineers to perform tasks for device searching, onboarding, offboarding, and alterations. Monitoring is performed by CA Spectrum, and DADI-O is a tool that allows users to easily navigate the complexities of Spectrum requirements and processes via an interface that was designed for the streamlinig of their direct workflows. DADI-O allows users to perform all necessary netowkr checks to meet minimum requirements for onboarding from the DADI-O interface, as wells as set custom maintenance schedules, define enhanced monitoring characteristics, easily decommission devices, and also perform enhanced audit lookups against any transaction that was made in the app. This was my first ever large project for FIS, and it was built as a replacement for a lesser Perl CGI application of the name DADI.',
        technologicalDescription: "DADI-O is a Java Webapp built on Tomcat 9, hosted on RHEL servers and beautified with Bootstrap and jQuery. We maintain subscription databases in MSSQL and Oracle which keeps track of our devices in network on corresponding tools, then we communicate RESTful transactions against the tool APIs' when alterations are made, and perform concurrency operations at that. DADI-O also performs health tests against devices via remote ssh commands to monitoring servers using SNMP to ensure devices are able to meet minimum requirements to reside in our network. DADI-O also provides an interface for functionalities such as auto-ticket disabling windows for patching, which is an integration with legacy Perl scripts on our own servers.",
        languagesUsed: [
            'Java',
            'Javascript',
            'HTML',
            'CSS',
            'Perl'
        ],
        technologiesUsed: [
            'Java Web App',
            'Tomcat',
            'Bootstrap',
            'SNMP',
            'MSSQL',
            'Oracle DB'
        ],
        appsInterfacedWith:[
            'CA Spectrum',
            'MicroFocus Network Automation (MFNA)'
        ]
    },
]

export default fisProjects