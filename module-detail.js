const iconMap = {
  shield: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 2.2L18 6.5V11c0 3.9-2.5 7.5-6 8.8-3.5-1.3-6-4.9-6-8.8V6.5l6-2.3Zm-1 4.3h2v5h-2v-5Zm0 6.5h2v2h-2v-2Z"/></svg>',
  document: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 2H6v16h12V8h-4V4Zm-5 7h6v2H9v-2Zm0 4h6v2H9v-2Z"/></svg>',
  monitor: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16v12H4V4Zm2 2v8h12V6H6Zm4 12h4v2h3v2H7v-2h3v-2Z"/></svg>',
  home: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10h-6v-6H9v6H3V11Zm2 .9V19h2v-6h10v6h2v-7.1l-7-6.2-7 6.2Z"/></svg>',
  globe: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.2a15.5 15.5 0 0 0-1.1-5 8 8 0 0 1 4.3 5ZM12 4c.7 1 1.4 3.4 1.7 7h-3.4C10.6 7.4 11.3 5 12 4Zm-2.6 2a15.5 15.5 0 0 0-1.1 5H5.1a8 8 0 0 1 4.3-5ZM5.1 13h3.2c.2 1.9.6 3.6 1.1 5a8 8 0 0 1-4.3-5Zm6.9 7c-.7-1-1.4-3.4-1.7-7h3.4c-.3 3.6-1 6-1.7 7Zm2.6-2c.5-1.4.9-3.1 1.1-5h3.2a8 8 0 0 1-4.3 5Z"/></svg>',
  checkShield: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 2 7 3v6c0 4.4-2.8 8.5-7 10-4.2-1.5-7-5.6-7-10V5l7-3Zm0 2.2L7 6.3V11c0 3.2 1.9 6.3 5 7.8 3.1-1.5 5-4.6 5-7.8V6.3l-5-2.1Zm3.7 5.1 1.4 1.4-5.8 5.8-3.4-3.4 1.4-1.4 2 2 4.4-4.4Z"/></svg>',
  pulse: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6v2h-4.6L13 21 9 9l-.6 5H3v-2Z"/></svg>',
  chart: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 15 5-5 4 4 5.6-6H15V6h7v7h-2V9.4L13 17l-4-4-3.6 3.6L4 15Z"/></svg>',
  audit: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm9.5-2H20v2h-4.5v-2ZM13 16h7v2h-7v-2Zm2.5 3H20v2h-4.5v-2Z"/></svg>',
  academy: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm0 2.3L18.8 9 12 12.7 5.2 9 12 5.3ZM5 13.2V17c0 1.8 3.1 4 7 4s7-2.2 7-4v-3.8l-7 3.8-7-3.8Zm2 3.1 5 2.7 5-2.7v.7c0 .6-2 2-5 2s-5-1.4-5-2v-.7Z"/></svg>'
};

const modules = {
  "integration-audit-tools": {
    platform: "Audit Platform",
    title: "Integration Audit Tools",
    subtitle: "Centralized audit workspace",
    icon: "audit",
    description: "A unified audit workspace for planning engagements, managing evidence requests, tracking findings, and producing structured audit outputs.",
    body: "Integration Audit Tools helps internal teams and assessors coordinate audit activities from preparation to reporting. The module is designed to reduce scattered documentation, improve traceability, and provide a clearer view of open actions, evidence readiness, and audit progress.",
    service: "Run a guided self assessment to check audit readiness, evidence completeness, finding status, and improvement priorities before engaging the CBQA Global audit team."
  },
  tvra: {
    platform: "GRC Platform",
    title: "TVRA",
    subtitle: "Threat & Vulnerability Risk Assessment",
    icon: "shield",
    description: "Threat & Vulnerability Risk Assessment framework for identifying and managing security risks.",
    body: "TVRA helps organizations identify critical assets, map threats and vulnerabilities, evaluate likelihood and impact, and prioritize remediation activities through a structured risk assessment workflow.",
    service: "Start with a self assessment to capture assets, threat scenarios, existing controls, and risk treatment priorities."
  },
  "iso-27001": {
    platform: "GRC Platform",
    title: "ISO 27001:2022",
    subtitle: "Information Security Management System",
    icon: "document",
    description: "Information Security Management System standard for protecting data assets and managing security risks systematically.",
    body: "This module supports readiness activities for ISO 27001:2022, including ISMS scope, risk management, controls, documented information, and continuous improvement alignment.",
    service: "Use the self assessment to review ISMS readiness, identify control gaps, and prepare evidence for internal or external assessment."
  },
  kks: {
    platform: "GRC Platform",
    title: "KKS",
    subtitle: "Cyber resilience assessment",
    icon: "monitor",
    description: "KKS Audit Assessment for Information Security & Cyber Resilience Framework.",
    body: "KKS helps organizations assess information security and cyber resilience practices, focusing on preparedness, control maturity, governance, and response capability.",
    service: "Run a structured self assessment to benchmark cyber resilience posture and define practical improvement actions."
  },
  ins: {
    platform: "GRC Platform",
    title: "INS",
    subtitle: "Sustainability certification readiness",
    icon: "home",
    description: "The Italian National Certification System ensures renewable and low-carbon fuels meet strict sustainability, traceability, and greenhouse gas reduction standards.",
    body: "INS supports preparation for sustainability, traceability, and GHG reduction requirements by organizing documentation, process controls, and compliance evidence.",
    service: "Use self assessment to review documentation readiness, traceability records, and sustainability compliance gaps."
  },
  "iso-14064": {
    platform: "GRC Platform",
    title: "ISO 14064",
    subtitle: "Greenhouse gas reporting",
    icon: "globe",
    description: "Greenhouse Gas quantification and reporting standard for measuring, monitoring, and verifying GHG emissions at organizational level.",
    body: "ISO 14064 helps organizations establish a consistent basis for greenhouse gas inventories, emissions data quality, monitoring processes, and verification readiness.",
    service: "Perform a self assessment to review GHG boundaries, data sources, calculation methods, and verification evidence."
  },
  smk3: {
    platform: "GRC Platform",
    title: "SMK3",
    subtitle: "Occupational health and safety",
    icon: "checkShield",
    description: "Occupational Health & Safety Management System for workplace safety risk management and regulatory compliance.",
    body: "SMK3 supports organizations in assessing safety governance, hazard identification, risk controls, worker participation, emergency readiness, and compliance documentation.",
    service: "Run a self assessment to identify gaps in workplace safety controls, documentation, and regulatory readiness."
  },
  "soc-1": {
    platform: "GRC Platform",
    title: "SOC 1",
    subtitle: "Financial reporting controls",
    icon: "monitor",
    description: "Service Organization Control reporting on internal controls over financial reporting.",
    body: "SOC 1 supports assessment readiness for service organizations whose controls may affect customer financial reporting, including control objectives and evidence mapping.",
    service: "Use self assessment to review control design, evidence availability, and readiness for SOC 1 reporting."
  },
  "soc-2": {
    platform: "GRC Platform",
    title: "SOC 2",
    subtitle: "Trust service criteria",
    icon: "checkShield",
    description: "Trust service criteria covering security, availability, processing integrity, confidentiality & privacy.",
    body: "SOC 2 helps teams evaluate trust service controls, policies, monitoring, incident response, access management, and operational evidence.",
    service: "Start a self assessment to benchmark trust service controls and prepare the evidence set required for review."
  },
  "pci-dss": {
    platform: "GRC Platform",
    title: "PCI-DSS",
    subtitle: "Cardholder data protection",
    icon: "document",
    description: "Payment Card Industry Data Security Standard for protecting cardholder data environments.",
    body: "PCI-DSS supports organizations in reviewing cardholder data scope, security controls, network segmentation, access controls, monitoring, and compliance evidence.",
    service: "Run a self assessment to validate PCI-DSS scope, identify control gaps, and organize remediation priorities."
  },
  hipaa: {
    platform: "GRC Platform",
    title: "HIPAA",
    subtitle: "Protected health information",
    icon: "pulse",
    description: "Health Insurance Portability & Accountability Act compliance for protected health information.",
    body: "HIPAA helps organizations assess administrative, physical, and technical safeguards for protected health information and related operational processes.",
    service: "Use self assessment to review privacy and security safeguards, documentation, and risk management readiness."
  },
  dora: {
    platform: "GRC Platform",
    title: "DORA",
    subtitle: "Digital operational resilience",
    icon: "chart",
    description: "Digital Operational Resilience Act for ICT risk management in the financial sector.",
    body: "DORA supports ICT risk management, resilience testing, incident reporting, third-party risk, and governance readiness for financial sector operations.",
    service: "Run a self assessment to evaluate ICT risk controls, resilience practices, incident readiness, and third-party oversight."
  },
  swift: {
    platform: "GRC Platform",
    title: "SWIFT",
    subtitle: "Secure financial messaging",
    icon: "globe",
    description: "SWIFT Customer Security Programme controls for secure financial messaging infrastructure.",
    body: "SWIFT helps organizations assess controls for secure financial messaging, environment protection, access control, monitoring, and customer security programme alignment.",
    service: "Use self assessment to review SWIFT control readiness and prepare evidence for security attestation activities."
  },
  "training-system": {
    platform: "Academy",
    title: "Training system",
    subtitle: "Learning and competency management",
    icon: "academy",
    description: "Structured training management for schedules, participants, materials, progress tracking, and completion records.",
    body: "Training system helps manage learning programs, participant registration, curriculum materials, attendance, assessments, and completion history across CBQA Global Academy activities.",
    service: "Use self assessment to identify training needs, map competency gaps, and plan the right learning path for your organization."
  }
};

const fallback = modules.tvra;
const params = new URLSearchParams(window.location.search);
const moduleKey = params.get("module");
const selected = modules[moduleKey] || fallback;

document.title = `${selected.title} - OneConnect`;
document.getElementById("modulePlatform").textContent = selected.platform;
document.getElementById("moduleTitle").textContent = selected.title;
document.getElementById("moduleSubtitle").textContent = selected.subtitle;
document.getElementById("moduleDescription").textContent = selected.description;
document.getElementById("descriptionBody").textContent = selected.body;
document.getElementById("serviceBody").textContent = selected.service;
document.getElementById("moduleIcon").innerHTML = iconMap[selected.icon] || iconMap.shield;

const serviceLink = document.getElementById("serviceLink");
serviceLink.href = moduleKey === "iso-27001" ? "selfasesment_iso27001.html" : "#";
