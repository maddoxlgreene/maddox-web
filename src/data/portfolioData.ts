import { Shield, Server, Lock, Origami } from 'lucide-react';

export interface JourneyItem {
    period: string;
    title: string;
    company: string;
    description: string;
    type: 'work' | 'education';
    technologies: string[];
}

export const journey: JourneyItem[] = [
    { period: "Present", title: "Customer Experience Manager", company: "Leading CX Operations", description: "Spearheading customer experience initiatives, managing cross-functional teams, and implementing data-driven improvements.", type: "work", technologies: ["Team Leadership", "Data Analytics", "Process Optimization"] },
    { period: "2024 - Present", title: "Bachelor's in Information System Security", company: "University Studies", description: "Pursuing specialized education in cybersecurity, focusing on advanced threat analysis, digital forensics, and security architecture.", type: "education", technologies: ["Digital Forensics", "Cryptography", "Incident Response"] },
    { period: "2023 - Present", title: "Penetration Tester", company: "Cybersecurity Consulting", description: "Conducting security assessments for startup enterprises, identifying critical vulnerabilities, and providing actionable remediation.", type: "work", technologies: ["OWASP", "Burp Suite", "Metasploit", "Nessus"] },
    { period: "2022 - Present", title: "System Administrator", company: "Enterprise IT Operations", description: "Managing hybrid cloud infrastructure for 10,000+ users, implementing automation, and maintaining 99.9% uptime.", type: "work", technologies: ["AWS", "Docker", "Kubernetes", "Ansible"] },
];

export const certifications = [
    { title: "CS50X Cyber Security Certificate", subtitle: "Professional Certificate", desc: "Harvard University's Cybersecurity Course", color: "red", icon: Origami },
    { title: "Google Cybersecurity Certificate", subtitle: "Professional Certificate", desc: "Foundational Cybersecurity Skills and Hands-on Labs", color: "blue", icon: Shield },
    { title: "Google IT Support Certificate", subtitle: "Professional Certificate", desc: "Technical Troubleshooting and Customer Support", color: "pink", icon: Server },
    { title: "In Progress", subtitle: "Security+", desc: "System Security Architecture and Design", color: "gray", icon: Lock }
];

export const collaborations = [
    { name: 'AuraSide', imgSrc: '/Auraside.jpg' },
    { name: 'Hone', imgSrc: '/Hone.jpg' },
    { name: 'Ghast', imgSrc: '/Ghast.jpg' },
    { name: 'DuelSet', imgSrc: '/duelset_logo.jpg' },
    { name: 'RegeditMC', imgSrc: '/RegeditMC.jpg' },
    { name: 'TJA', imgSrc: '/TJA.jpg' },
];

export const projects = [
    { name: "Project Redeye", imgSrc: "/projectredeye.png", desc: "Subdomain Enumeration & Asset Discovery Tool...", link: "https://github.com/maddoxlgreene/project-redeye"},
    { name: "Flex Optimizer", imgSrc: "/flexoptimizer.png", desc: "A one-click network optimization batch script...", link: "https://github.com/maddoxlgreene/flexoptimizer" }
];