const iconMap = {
  shield:      '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 2.2L18 6.5V11c0 3.9-2.5 7.5-6 8.8-3.5-1.3-6-4.9-6-8.8V6.5l6-2.3Zm-1 4.3h2v5h-2v-5Zm0 6.5h2v2h-2v-2Z"/></svg>',
  document:    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 2H6v16h12V8h-4V4Zm-5 7h6v2H9v-2Zm0 4h6v2H9v-2Z"/></svg>',
  monitor:     '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16v12H4V4Zm2 2v8h12V6H6Zm4 12h4v2h3v2H7v-2h3v-2Z"/></svg>',
  home:        '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3V11Zm2 .9V19h2v-6h10v6h2v-7.1l-7-6.2-7 6.2Z"/></svg>',
  globe:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.2a15.5 15.5 0 0 0-1.1-5 8 8 0 0 1 4.3 5ZM12 4c.7 1 1.4 3.4 1.7 7h-3.4C10.6 7.4 11.3 5 12 4Zm-2.6 2a15.5 15.5 0 0 0-1.1 5H5.1a8 8 0 0 1 4.3-5ZM5.1 13h3.2c.2 1.9.6 3.6 1.1 5a8 8 0 0 1-4.3-5Zm6.9 7c-.7-1-1.4-3.4-1.7-7h3.4c-.3 3.6-1 6-1.7 7Zm2.6-2c.5-1.4.9-3.1 1.1-5h3.2a8 8 0 0 1-4.3 5Z"/></svg>',
  checkShield: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 2 7 3v6c0 4.4-2.8 8.5-7 10-4.2-1.5-7-5.6-7-10V5l7-3Zm0 2.2L7 6.3V11c0 3.2 1.9 6.3 5 7.8 3.1-1.5 5-4.6 5-7.8V6.3l-5-2.1Zm3.7 5.1 1.4 1.4-5.8 5.8-3.4-3.4 1.4-1.4 2 2 4.4-4.4Z"/></svg>',
  pulse:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6v2h-4.6L13 21 9 9l-.6 5H3v-2Z"/></svg>',
  chart:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 15 5-5 4 4 5.6-6H15V6h7v7h-2V9.4L13 17l-4-4-3.6 3.6L4 15Z"/></svg>',
  audit:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm9.5-2H20v2h-4.5v-2ZM13 16h7v2h-7v-2Zm2.5 3H20v2h-4.5v-2Z"/></svg>',
  academy:     '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm0 2.3L18.8 9 12 12.7 5.2 9 12 5.3ZM5 13.2V17c0 1.8 3.1 4 7 4s7-2.2 7-4v-3.8l-7 3.8-7-3.8Zm2 3.1 5 2.7 5-2.7v.7c0 .6-2 2-5 2s-5-1.4-5-2v-.7Z"/></svg>',
  leaf:        '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 14-8 14-8-1 2-2 3.5-3.17 4.85L17 8Zm-3.5 6.5A4.49 4.49 0 0 1 8 16c0-2.9 1.75-5.5 5.5-6.5l2.75.5A9.48 9.48 0 0 1 13 17a10.16 10.16 0 0 1-.5-2.5Z"/></svg>',
  energy:      '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M11 21H5L9 3h4l-4 9h6l-8 9Z"/></svg>',
  hard_hat:    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Zm0 2a7 7 0 0 0-6.93 6h13.86A7 7 0 0 0 12 4ZM3 13h18v2H3v-2Zm2 3h14v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2Z"/></svg>',
  quality:     '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z"/></svg>',
  cloud:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3Z"/></svg>',
  bank:        '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4Zm6 0v7h3v-7h-3Zm-8 9h19v3H2v-3Zm14-9v7h3v-7h-3ZM11.5 1 2 6v2h19V6l-9.5-5Z"/></svg>',
  payment:     '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 14H4v-6h16v6Zm0-10H4V6h16v2Z"/></svg>',
  health:      '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6Zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19Z"/></svg>',
  resilience:  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8ZM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6Z"/></svg>',
  swift_icon:  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16v4H4V4Zm0 6h7v10H4V10Zm9 0h7v4h-7v-4Zm0 6h7v4h-7v-4Z"/></svg>',
  continuity:  '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3Z"/></svg>',
  records:     '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm4 18H6V4h7v5h5v11ZM8 15h8v2H8v-2Zm0-4h8v2H8v-2Zm0-4h5v2H8V7Z"/></svg>',
  risk:        '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 1 21h22L12 2Zm0 3.5L20.5 19h-17L12 5.5ZM11 10v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>',
  integrity:   '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>',
  itgov:       '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2Zm0 5h-2V5h2v3ZM4 19h16v2H4v-2Z"/></svg>'
};

const modules = {

  /* ══════════════════════════════════════
     GRC PLATFORM
  ══════════════════════════════════════ */
  "tvra": {
    platform: "Cyber & Privacy Platform",
    title: "TVRA",
    subtitle: "Threat & Vulnerability Risk Assessment",
    icon: "shield",
    description: "Threat & Vulnerability Risk Assessment framework for identifying and managing security risks.",
    body: "TVRA helps organizations identify critical assets, map threats and vulnerabilities, evaluate likelihood and impact, and prioritize remediation activities through a structured risk assessment workflow.",
    service: "Start with a self assessment to capture assets, threat scenarios, existing controls, and risk treatment priorities.",
    serviceNarrative: ""
  },
  "kks": {
    platform: "Cyber & Privacy Platform",
    title: "KKS",
    subtitle: "Cyber Resilience Assessment",
    icon: "monitor",
    description: "KKS Audit Assessment for Information Security & Cyber Resilience Framework.",
    body: "KKS helps organizations assess information security and cyber resilience practices, focusing on preparedness, control maturity, governance, and response capability across critical infrastructure and operational systems.",
    service: "Run a structured self assessment to benchmark cyber resilience posture and define practical improvement actions.",
    serviceNarrative: ""
  },
  "ins": {
    platform: "Sustainability Platform",
    title: "INS",
    subtitle: "Sustainability Certification Readiness",
    icon: "home",
    description: "The Italian National Sustainability Standard (INS) ensures renewable and low-carbon fuels meet strict sustainability, traceability, and greenhouse gas reduction standards.",
    body: "INS supports preparation for sustainability, traceability, and GHG reduction requirements by organizing documentation, process controls, and compliance evidence across the full fuel supply chain.",
    service: "Use self assessment to review documentation readiness, traceability records, and sustainability compliance gaps.",
    serviceNarrative: ""
  },
  "iso-22301": {
    platform: "GRC Platform",
    title: "ISO 22301",
    subtitle: "Business Continuity Management System",
    icon: "continuity",
    description: "International standard for Business Continuity Management Systems to plan, respond, and recover from disruptive incidents.",
    body: "ISO 22301 provides a framework for organizations to protect against, reduce the likelihood of, prepare for, respond to, and recover from disruptive incidents such as cyberattacks, natural disasters, and supply chain failures. It requires Business Impact Analysis, tested Business Continuity Plans, defined RTOs and RPOs, and continual improvement of the BCMS.",
    service: "Run a self assessment to evaluate BCMS readiness, business impact analysis maturity, and recovery plan documentation completeness.",
    serviceNarrative: ""
  },
  "iso-30301": {
    platform: "GRC Platform",
    title: "ISO 30301",
    subtitle: "Records Management System",
    icon: "records",
    description: "International standard for Management Systems for Records, enabling systematic and accountable records governance.",
    body: "ISO 30301 specifies requirements for a Management System for Records (MSR) applicable to all types of records regardless of format or media. It integrates records management into broader governance and accountability structures, covering classification, retention schedules, secure storage, access controls, and disposal procedures.",
    service: "Use self assessment to review records classification, retention schedules, access controls, and disposal documentation readiness.",
    serviceNarrative: ""
  },
  "iso-31000": {
    platform: "GRC Platform",
    title: "ISO 31000",
    subtitle: "Risk Management",
    icon: "risk",
    description: "International standard providing principles and guidelines for enterprise risk management across all organization types.",
    body: "ISO 31000 provides a universal framework for integrating risk management into governance, strategy, planning, and decision-making. It covers risk identification, analysis, evaluation, treatment, monitoring, and communication — applicable to all types of risk across any industry or sector.",
    service: "Use self assessment to review risk management framework maturity, risk identification processes, and treatment plan completeness.",
    serviceNarrative: ""
  },
  "iso-37001": {
    platform: "GRC Platform",
    title: "ISO 37001",
    subtitle: "Anti-Bribery Management System",
    icon: "integrity",
    description: "International standard for Anti-Bribery Management Systems to prevent, detect, and respond to bribery.",
    body: "ISO 37001 specifies requirements for establishing, implementing, and maintaining an Anti-Bribery Management System (ABMS). It covers due diligence on personnel and business associates, financial controls, whistleblowing mechanisms, investigation procedures, and management review — applicable to public, private, and non-profit organizations.",
    service: "Run a self assessment to identify bribery risk exposure, evaluate existing controls, and review due diligence and reporting procedures.",
    serviceNarrative: ""
  },
  "iso-38500": {
    platform: "GRC Platform",
    title: "ISO 38500",
    subtitle: "IT Governance",
    icon: "itgov",
    description: "International standard for governing bodies on the effective, efficient, and acceptable use of Information Technology.",
    body: "ISO 38500 provides six principles — Responsibility, Strategy, Acquisition, Performance, Conformance, and Human Behaviour — for boards and senior executives to evaluate, direct, and monitor IT use. It ensures IT decisions support organizational objectives and manages IT-related risk at the governance level.",
    service: "Use self assessment to review IT governance framework, board-level accountability, strategic alignment, and IT performance monitoring practices.",
    serviceNarrative: ""
  },
  "soc-1": {
    platform: "GRC Platform",
    title: "SOC 1",
    subtitle: "Financial Reporting Controls",
    icon: "bank",
    description: "Service Organization Control reporting on internal controls over financial reporting.",
    body: "SOC 1 supports assessment readiness for service organizations whose controls may affect customer financial reporting. It covers control objectives, evidence mapping, segregation of duties, change management, and incident response — with Type I (point-in-time) and Type II (6–12 month operating effectiveness) reporting options.",
    service: "Use self assessment to review control design, evidence availability, and readiness for SOC 1 Type I or Type II reporting.",
    serviceNarrative: ""
  },
  "soc-2": {
    platform: "GRC Platform",
    title: "SOC 2",
    subtitle: "Trust Service Criteria",
    icon: "checkShield",
    description: "Trust service criteria covering Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
    body: "SOC 2 helps teams evaluate trust service controls across the five Trust Services Criteria categories. The assessment covers policies, monitoring, incident response, access management, encryption, availability SLAs, and operational evidence. Widely required by enterprise customers evaluating SaaS vendors and cloud providers.",
    service: "Start a self assessment to benchmark trust service controls and prepare the evidence set required for external review.",
    serviceNarrative: ""
  },
  "pci-dss": {
    platform: "GRC Platform",
    title: "PCI-DSS",
    subtitle: "Cardholder Data Protection",
    icon: "payment",
    description: "Payment Card Industry Data Security Standard for protecting cardholder data environments.",
    body: "PCI-DSS v4.0 requires organizations to review cardholder data scope, network security controls, secure configuration, encryption, malware protection, access controls, logging, and compliance evidence. Mandatory for all organizations that store, process, or transmit payment card data — with increased flexibility for customized implementation approaches in the latest version.",
    service: "Run a self assessment to validate PCI-DSS scope, identify control gaps, and organize remediation priorities.",
    serviceNarrative: ""
  },
  "hipaa": {
    platform: "GRC Platform",
    title: "HIPAA",
    subtitle: "Protected Health Information",
    icon: "health",
    description: "Health Insurance Portability & Accountability Act compliance for protected health information.",
    body: "HIPAA helps organizations assess administrative, physical, and technical safeguards for protected health information. Coverage includes risk analysis, workforce training, access management, audit controls, integrity controls, transmission security, contingency planning, Business Associate Agreements, and breach notification procedures.",
    service: "Use self assessment to review privacy and security safeguards, documentation, and risk management readiness.",
    serviceNarrative: ""
  },
  "dora": {
    platform: "GRC Platform",
    title: "DORA",
    subtitle: "Digital Operational Resilience",
    icon: "resilience",
    description: "Digital Operational Resilience Act for ICT risk management in the financial sector (EU, effective 2025).",
    body: "DORA supports ICT risk management framework, resilience testing (including TLPT for major entities), incident classification and regulatory reporting, third-party ICT risk management, information sharing on cyber threats, and management body accountability for ICT risk across EU financial institutions.",
    service: "Run a self assessment to evaluate ICT risk controls, resilience practices, incident readiness, and third-party oversight.",
    serviceNarrative: ""
  },
  "swift": {
    platform: "GRC Platform",
    title: "SWIFT CSP",
    subtitle: "Secure Financial Messaging",
    icon: "swift_icon",
    description: "SWIFT Customer Security Programme controls for secure financial messaging infrastructure.",
    body: "SWIFT CSP helps organizations assess controls for secure financial messaging environments — covering network segmentation, access control, MFA enforcement, anomaly detection, change management, and annual attestation requirements. Compliance with the Customer Security Controls Framework (CSCF) is mandatory for all SWIFT users.",
    service: "Use self assessment to review SWIFT control readiness and prepare evidence for annual security attestation activities.",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     CYBER & PRIVACY PLATFORM
  ══════════════════════════════════════ */
  "iso-27001": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 27001:2022",
    subtitle: "Information Security Management System",
    icon: "document",
    description: "Information Security Management System — the world's leading standard for managing information security risks systematically.",
    body: "This module supports readiness activities for ISO 27001:2022, including ISMS scope definition, information security risk assessment, Statement of Applicability (SoA), Annex A controls across Organizational, People, Physical, and Technological themes, documented information requirements, and continual improvement alignment.",
    service: "Use the self assessment to review ISMS readiness, identify control gaps, and prepare evidence for internal or external assessment.",
    serviceNarrative: ""
  },
  "iso-27701": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 27701:2019",
    subtitle: "Privacy Information Management System",
    icon: "shield",
    description: "Privacy Information Management System extending ISO 27001 with requirements for managing PII as both a controller and a processor.",
    body: "This module supports readiness activities for ISO 27701:2019, covering PIMS scope, PII processing roles (controller and processor), privacy risk assessment, Records of Processing Activities (RoPA), DPIA process, Data Subject rights fulfilment, breach notification, and Privacy by Design implementation.",
    service: "Use the self assessment to review PIMS readiness, identify privacy control gaps, and prepare evidence for internal or external assessment.",
    serviceNarrative: ""
  },
  "iso-42001": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 42001:2023",
    subtitle: "Artificial Intelligence Management System",
    icon: "pulse",
    description: "Artificial Intelligence Management System — the world's first international standard for governing responsible AI development and deployment.",
    body: "This module supports readiness activities for ISO 42001:2023, including AI management system scope, AI risk and impact assessment, control implementation for responsible AI, data quality management for training data, human oversight mechanisms, transparency and explainability requirements, and monitoring of deployed AI systems.",
    service: "Use the self assessment to review AIMS readiness, identify AI governance control gaps, and prepare evidence for internal or external assessment.",
    serviceNarrative: ""
  },
  "iso-42005": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 42005:2025",
    subtitle: "AI System Impact Assessment",
    icon: "chart",
    description: "AI System Impact Assessment framework for identifying and evaluating potential effects of AI systems on individuals, organizations, and society.",
    body: "This module supports readiness activities for ISO 42005:2025, covering AI impact assessment scope, stakeholder identification and engagement, impact identification across all affected parties, analysis of likelihood and severity, risk treatment for significant AI impacts, and documentation across AI system lifecycle phases — aligned with EU AI Act requirements for high-risk AI systems.",
    service: "Use the self assessment to review ASIA process and documentation readiness, identify impact analysis gaps, and prepare evidence for stakeholder reporting.",
    serviceNarrative: ""
  },
  "iso-27017": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 27017",
    subtitle: "Cloud Security Controls",
    icon: "cloud",
    description: "Code of practice providing information security controls specifically designed for cloud service providers and cloud service customers.",
    body: "ISO 27017 builds on ISO 27001 and ISO 27002 to address cloud-specific security requirements — covering shared responsibility models, asset inventory for virtual assets, logical tenant segregation, virtual machine hardening, cloud-specific access control, monitoring and logging in cloud environments, and data portability planning for service termination.",
    service: "Run a self assessment to review cloud security control coverage, shared responsibility clarity, and cloud-specific risk treatment.",
    serviceNarrative: ""
  },
  "iso-27018": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 27018",
    subtitle: "Protection of PII in Public Cloud",
    icon: "cloud",
    description: "International code of practice for protection of personally identifiable information (PII) in public cloud computing environments.",
    body: "ISO 27018 extends ISO 27001 and ISO 27002 with specific controls for cloud service providers acting as PII processors. It covers consent and transparency for PII processing, restrictions on use of PII for marketing purposes, data subject rights for cloud-held PII, data return and deletion at contract end, disclosure of sub-processors, and audit rights for cloud customers — making it a key standard for GDPR-aligned cloud services.",
    service: "Run a self assessment to review cloud PII protection controls, processor obligations, and GDPR alignment in public cloud environments.",
    serviceNarrative: ""
  },
  "iso-27032": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 27032",
    subtitle: "Cybersecurity Guidelines",
    icon: "shield",
    description: "International guidelines for improving the state of cybersecurity — addressing gaps between internet security, web security, network security, and critical information infrastructure protection.",
    body: "ISO 27032 provides a framework for collaboration and information sharing between stakeholders in cyberspace. It covers cybersecurity risk management, technical controls for preventing and detecting cybersecurity incidents, threat intelligence sharing, coordination between organizations, and guidance for consumers, businesses, and governments on maintaining a secure cyberspace.",
    service: "Use self assessment to review cybersecurity control coverage, threat management maturity, and incident coordination readiness.",
    serviceNarrative: ""
  },
  "iso-29100": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 29100",
    subtitle: "Privacy Framework",
    icon: "shield",
    description: "International standard providing a high-level privacy framework for protecting personally identifiable information within ICT systems.",
    body: "ISO 29100 establishes 11 privacy principles: consent and choice, purpose legitimacy and specification, collection limitation, data minimization, use-retention-disclosure limitation, accuracy and quality, openness and transparency, individual participation and access, accountability, information security, and privacy compliance. It provides a common privacy terminology and framework used as the foundation for other ISO privacy standards including ISO 27701 and ISO 29134.",
    service: "Use self assessment to review privacy principle implementation, PII handling practices, and accountability mechanisms across your organization.",
    serviceNarrative: ""
  },
  "iso-29134": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 29134",
    subtitle: "Privacy Impact Assessment",
    icon: "chart",
    description: "International guidelines for Privacy Impact Assessment (PIA) — a systematic process for evaluating privacy risks of information systems and processes.",
    body: "ISO 29134 provides requirements and guidelines for conducting Privacy Impact Assessments (PIA), equivalent to the DPIA required under GDPR Article 35. It covers PIA threshold assessment, scope definition, data flow analysis, privacy risk identification and evaluation, risk treatment and mitigation, consultation with stakeholders and supervisory authorities, and reporting of PIA outcomes. It is designed to be used alongside ISO 29100 and ISO 27701.",
    service: "Use self assessment to review PIA/DPIA process maturity, documentation completeness, and integration with system development and procurement lifecycles.",
    serviceNarrative: ""
  },
  "iso-20000": {
    platform: "Cyber & Privacy Platform",
    title: "ISO 20000",
    subtitle: "IT Service Management System",
    icon: "monitor",
    description: "International standard for IT Service Management Systems — enabling organizations to deliver managed IT services that meet business and customer requirements.",
    body: "ISO 20000 aligns closely with ITIL practices and covers the full IT service lifecycle: service planning, design, transition, delivery, and improvement. Requirements include service level management, incident and problem management, change management, configuration management, capacity and availability management, and continual improvement. It is applicable to internal IT departments, managed service providers, and outsourced IT service organizations.",
    service: "Run a self assessment to evaluate IT service management process maturity, SLA compliance, and readiness for ISO 20000 certification.",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     SUSTAINABILITY PLATFORM
  ══════════════════════════════════════ */
  "iso-14001": {
    platform: "Sustainability Platform",
    title: "ISO 14001",
    subtitle: "Environmental Management System",
    icon: "leaf",
    description: "International standard for Environmental Management Systems — the world's most widely used environmental management framework.",
    body: "ISO 14001 follows the Plan-Do-Check-Act cycle to help organizations identify environmental aspects and impacts, establish measurable improvement objectives, implement operational controls, manage environmental incidents, and demonstrate continual improvement. It is recognized globally and is a prerequisite for many supply chain requirements.",
    service: "Use self assessment to review EMS readiness, environmental aspects register, legal compliance status, and objectives progress.",
    serviceNarrative: ""
  },
  "iso-50001": {
    platform: "Sustainability Platform",
    title: "ISO 50001",
    subtitle: "Energy Management System",
    icon: "energy",
    description: "International standard for Energy Management Systems to optimize energy performance, reduce costs, and drive decarbonization.",
    body: "ISO 50001 requires an Energy Review to identify Significant Energy Uses (SEUs), an Energy Baseline, Energy Performance Indicators (EnPIs), documented action plans, and monitoring of energy data. It integrates with ISO 14001 and ISO 45001 through the High Level Structure, supporting organizations on their net zero journey.",
    service: "Run a self assessment to review energy management practices, SEU identification, EnPI baseline accuracy, and action plan progress.",
    serviceNarrative: ""
  },
  "iso-45001": {
    platform: "HSQ Platform",
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    icon: "hard_hat",
    description: "International standard for OH&S Management Systems — replacing OHSAS 18001 with a risk-based approach to workplace safety.",
    body: "ISO 45001 requires hazard identification and risk assessment, legal compliance evaluation, worker participation and consultation mechanisms, operational controls for identified risks, emergency preparedness, incident investigation, and continual improvement of the OH&S Management System. It emphasizes proactive risk prevention over reactive incident response.",
    service: "Use self assessment to review OH&S Management System readiness, hazard register completeness, and worker participation processes.",
    serviceNarrative: ""
  },
  "iso-9001": {
    platform: "HSQ Platform",
    title: "ISO 9001",
    subtitle: "Quality Management System",
    icon: "quality",
    description: "International standard for Quality Management Systems — the most widely adopted management system standard with over one million certifications globally.",
    body: "ISO 9001:2015 is built on seven quality management principles: customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, and relationship management. It requires risk-based thinking throughout, customer requirements determination, process controls, internal audit, management review, and corrective action processes.",
    service: "Run a self assessment to evaluate QMS readiness, process documentation coverage, customer satisfaction monitoring, and audit programme effectiveness.",
    serviceNarrative: ""
  },
  "iso-14064-1": {
    platform: "Sustainability Platform",
    title: "ISO 14064-1",
    subtitle: "GHG Inventory — Organization Level",
    icon: "globe",
    description: "International standard for the quantification and reporting of greenhouse gas emissions and removals at the organizational level.",
    body: "ISO 14064-1 specifies principles and requirements for designing, developing, managing, and reporting organization-level GHG inventories. It covers organizational and operational boundaries, GHG source identification and categorization (Scope 1, 2, and 3), activity data collection, emission factor selection, GHG quantification methodologies, uncertainty assessment, data quality management, and preparation of inventory reports for external verification.",
    service: "Use self assessment to review GHG inventory boundaries, data collection processes, emission calculation methodologies, and verification readiness.",
    serviceNarrative: ""
  },
  "iso-14064-2": {
    platform: "Sustainability Platform",
    title: "ISO 14064-2",
    subtitle: "GHG Quantification — Project Level",
    icon: "leaf",
    description: "International standard for quantification, monitoring, and reporting of GHG emission reductions or removal enhancements from specific projects.",
    body: "ISO 14064-2 is used for GHG projects — renewable energy, reforestation, efficiency improvements, and carbon capture initiatives. It requires a GHG project plan, selection of baseline scenarios, identification and quantification of project emissions and removals, monitoring plans, and documentation for third-party validation and verification. It is widely used alongside carbon credit and offset programmes.",
    service: "Run a self assessment to review GHG project documentation, baseline methodology, monitoring plan design, and readiness for third-party validation.",
    serviceNarrative: ""
  },
  "iso-26000": {
    platform: "Sustainability Platform",
    title: "ISO 26000",
    subtitle: "Social Responsibility",
    icon: "home",
    description: "International guidance standard on social responsibility — covering human rights, labor practices, environment, fair operating practices, consumer issues, and community involvement.",
    body: "ISO 26000 is a guidance standard (not certifiable) that helps organizations understand and integrate social responsibility into their operations and strategies. It covers seven core subjects: organizational governance, human rights, labor practices, the environment, fair operating practices, consumer issues, and community involvement and development. It aligns with the UN Sustainable Development Goals (SDGs) and is used widely in ESG reporting and supply chain due diligence.",
    service: "Use self assessment to review social responsibility integration across the seven core subjects and identify priority areas for ESG reporting and stakeholder engagement.",
    serviceNarrative: ""
  },
  "iscc": {
    platform: "Sustainability Platform",
    title: "ISCC",
    subtitle: "International Sustainability & Carbon Certification",
    icon: "leaf",
    description: "Global sustainability certification system for biomass, bioenergy, and renewable fuels — ensuring sustainability, traceability, and greenhouse gas reduction requirements are met.",
    body: "ISCC (International Sustainability and Carbon Certification) is a globally recognized certification system covering the full supply chain of sustainable raw materials, biofuels, and bio-based products. It verifies compliance with sustainability criteria including GHG emission savings, no conversion of high carbon stock land, no damage to biodiversity, compliance with social standards, and mass balance traceability throughout the supply chain. ISCC EU and ISCC PLUS are recognized under the EU Renewable Energy Directive (RED II).",
    service: "Use self assessment to review supply chain traceability documentation, GHG calculation methodology, land use evidence, and readiness for ISCC certification audit.",
    serviceNarrative: ""
  },
  "iso-55001": {
    platform: "HSQ Platform",
    title: "ISO 55001",
    subtitle: "Asset Management System",
    icon: "chart",
    description: "International standard for Asset Management Systems — enabling organizations to realize value from physical and non-physical assets.",
    body: "ISO 55001 provides requirements for establishing, implementing, maintaining, and improving an Asset Management System (AMS). It covers asset policy and strategic asset management plan (SAMP), asset lifecycle planning from acquisition through disposal, risk management for assets, performance evaluation, and continual improvement. It is particularly relevant for infrastructure, utilities, manufacturing, and transport sectors managing large physical asset portfolios.",
    service: "Run a self assessment to review asset management framework maturity, lifecycle planning practices, and risk-based maintenance approaches.",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     HSQ PLATFORM
  ══════════════════════════════════════ */
  "smk3": {
    platform: "HSQ Platform",
    title: "SMK3",
    subtitle: "Sistem Manajemen Keselamatan dan Kesehatan Kerja",
    icon: "checkShield",
    description: "Sistem Manajemen K3 berdasarkan PP No. 50 Tahun 2012 — wajib bagi perusahaan dengan 100 tenaga kerja atau lebih, atau tingkat bahaya tinggi.",
    body: "SMK3 mencakup 5 prinsip utama: Kebijakan K3, Perencanaan, Pelaksanaan, Pemantauan dan Evaluasi, serta Peninjauan Ulang dan Peningkatan Kinerja. Audit SMK3 dilakukan oleh lembaga audit independen yang ditunjuk Menteri Ketenagakerjaan RI, mencakup identifikasi bahaya, penilaian risiko, prosedur kerja aman, penyelidikan kecelakaan, dan pelaporan kepada pemerintah.",
    service: "Gunakan self assessment untuk mengidentifikasi kesenjangan dalam pengendalian K3, dokumentasi, dan kesiapan regulasi.",
    serviceNarrative: ""
  },
  "iso-21500": {
    platform: "HSQ Platform",
    title: "ISO 21500",
    subtitle: "Project Management",
    icon: "chart",
    description: "International standard providing guidance on project management concepts and practices for effective project delivery.",
    body: "ISO 21500 provides a high-level framework for project management applicable to any type of organization and project. It defines key project management concepts — scope, time, cost, quality, human resources, communication, risk, procurement, and stakeholder management — organized across five process groups: Initiating, Planning, Implementing, Controlling, and Closing. It aligns with PMBOK and PRINCE2 frameworks and provides a common language for project governance.",
    service: "Use self assessment to review project management process maturity, documentation practices, and governance framework alignment.",
    serviceNarrative: ""
  },
  "iso-19650": {
    platform: "HSQ Platform",
    title: "ISO 19650",
    subtitle: "Information Management — BIM",
    icon: "home",
    description: "International standard for organizing and digitizing information about buildings and civil engineering works using Building Information Modelling (BIM).",
    body: "ISO 19650 provides a framework for managing information throughout the full asset lifecycle using BIM — from design and construction through operation and maintenance. It defines concepts for information management, appointment processes, information delivery planning, collaborative production of information, and quality assurance of information assets. Parts 1 and 2 cover concept and delivery phase; Parts 3 and 5 address operational phase and security-minded information management.",
    service: "Run a self assessment to review BIM information management processes, data exchange standards, and ISO 19650 appointment documentation readiness.",
    serviceNarrative: ""
  },
  "iso-21001": {
    platform: "HSQ Platform",
    title: "ISO 21001",
    subtitle: "Educational Organizations Management System",
    icon: "academy",
    description: "International standard for Management Systems for Educational Organizations (EOMS) — enhancing the satisfaction of learners, staff, and other interested parties.",
    body: "ISO 21001 provides a management system framework specifically designed for educational organizations — schools, universities, training providers, and e-learning platforms. It covers learner-centered design of educational products and services, inclusive education and accessibility, competence of educators, learning environment management, monitoring of learner progress and satisfaction, and continual improvement. It follows the High Level Structure, integrating naturally with ISO 9001.",
    service: "Use self assessment to review educational management system readiness, learner satisfaction measurement, and curriculum quality assurance processes.",
    serviceNarrative: ""
  },
  "iso-39001": {
    platform: "HSQ Platform",
    title: "ISO 39001",
    subtitle: "Road Traffic Safety Management System",
    icon: "hard_hat",
    description: "International standard for Road Traffic Safety (RTS) Management Systems — reducing death and serious injury from road traffic crashes.",
    body: "ISO 39001 provides a framework for organizations that interact with the road transport system — fleet operators, logistics companies, road authorities, and infrastructure managers — to systematically eliminate or reduce death and serious injuries. It covers road traffic safety policy, risk assessment for road use, operational controls for vehicles and drivers, journey planning and fatigue management, incident investigation, and performance monitoring against safety targets.",
    service: "Run a self assessment to review road traffic safety management processes, driver risk controls, vehicle safety standards, and incident reporting practices.",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     AUDIT PLATFORM
  ══════════════════════════════════════ */
  "integration-audit-tools": {
    platform: "Audit Platform",
    title: "Integration Audit Tools",
    subtitle: "Centralized Audit Workspace",
    icon: "audit",
    description: "A unified audit workspace for planning engagements, managing evidence requests, tracking findings, and producing structured audit outputs.",
    body: "Integration Audit Tools helps internal teams and assessors coordinate audit activities from preparation to reporting. The module reduces scattered documentation, improves traceability, and provides a clearer view of open actions, evidence readiness, and audit progress across all active engagements.",
    service: "",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     ACADEMY
  ══════════════════════════════════════ */
  "training-system": {
    platform: "Academy",
    title: "Training System",
    subtitle: "Learning and Competency Management",
    icon: "academy",
    description: "Structured training management for schedules, participants, materials, progress tracking, and completion records.",
    body: "Training System helps manage learning programs, participant registration, curriculum materials, attendance, assessments, and completion history across CBQA Global Academy activities.",
    service: "Use self assessment to identify training needs, map competency gaps, and plan the right learning path for your organization.",
    serviceNarrative: ""
  },

  /* ══════════════════════════════════════
     LEGACY / OTHER
  ══════════════════════════════════════ */
  "iso-14064": {
    platform: "GRC Platform",
    title: "ISO 14064",
    subtitle: "Greenhouse Gas Reporting",
    icon: "globe",
    description: "Greenhouse Gas quantification and reporting standard for measuring, monitoring, and verifying GHG emissions at organizational level.",
    body: "ISO 14064 helps organizations establish a consistent basis for greenhouse gas inventories, emissions data quality, monitoring processes, and verification readiness. It covers boundary setting, source identification, calculation methodologies, data quality assessment, and reporting for third-party verification.",
    service: "Perform a self assessment to review GHG boundaries, data sources, calculation methods, and verification evidence.",
    serviceNarrative: ""
  }
};

/* ── Service link map ── */
const serviceLinks = {
  "iso-27001":  "selfasesment_iso27001.html",
  "iso-27701":  "selfassessment_iso27701.html",
  "iso-42001":  "selfassessment_iso42001.html",
  "iso-42005":  "selfassessment_iso42005.html"
};

/* ── Render ── */
const fallback = modules.tvra;
const params    = new URLSearchParams(window.location.search);
const moduleKey = params.get("module");
const selected  = modules[moduleKey] || fallback;

document.title = `${selected.title} — OneConnect`;
document.getElementById("modulePlatform").textContent  = selected.platform;
document.getElementById("moduleTitle").textContent     = selected.title;
document.getElementById("moduleSubtitle").textContent  = selected.subtitle;
document.getElementById("moduleDescription").textContent = selected.description;
document.getElementById("descriptionBody").textContent = selected.body;
document.getElementById("moduleIcon").innerHTML        = iconMap[selected.icon] || iconMap.shield;

const serviceLink      = document.getElementById("serviceLink");
const serviceBody      = document.getElementById("serviceBody");
const serviceNarrative = document.getElementById("serviceNarrative");

if (selected.serviceNarrative) {
  serviceNarrative.textContent = selected.serviceNarrative;
  serviceNarrative.hidden = false;
} else {
  serviceNarrative.hidden = true;
}

if (selected.service) {
  serviceBody.textContent = selected.service;
  serviceLink.hidden = false;
  serviceLink.href = serviceLinks[moduleKey] || "#";
} else {
  serviceLink.hidden = true;
  serviceLink.removeAttribute("href");
}

const servicesCard = document.getElementById("servicesCard");
const contentGrid  = document.querySelector(".content-grid");
if (!selected.service && !selected.serviceNarrative) {
  servicesCard.style.display = "none";
  contentGrid.classList.add("no-services");
}
