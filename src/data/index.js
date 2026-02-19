import {
    BookOpen,
    Award,
    Briefcase,
    FileText
} from 'lucide-react';

export const STATS = [
    { label: 'Books Authored', value: '43', icon: BookOpen },
    { label: 'Years Experience', value: '25+', icon: Briefcase },
    { label: 'Intl. Awards', value: '7', icon: Award },
    { label: 'Research Papers', value: '36', icon: FileText },
];

export const INTERNATIONAL_BOOKS = [
    {
        id: 1,
        title: "Cloud Computing: An Introduction",
        publisher: "Mercury Learning & Information (USA)",
        year: 2024,
        color: "from-teal-500 to-emerald-700",
        link: "https://www.amazon.in/Cloud-Computing-Introduction-R-Chopra/dp/1683920929",
        cover: "/books/cloud-computing-cover.jpg",
        cover: "/books/cloud-computing-cover.jpg"
    },
    {
        id: 2,
        title: "C Programming: A Self-Teaching Introduction",
        publisher: "Mercury Learning & De Gruyter",
        year: 2018,
        color: "from-blue-600 to-indigo-800",
        link: "https://www.amazon.com/s?k=C+Programming+Rajiv+Chopra",
        cover: "/books/intro-to-programming-c.jpg"
    },
    {
        id: 3,
        title: "Software Testing",
        publisher: "Mercury Learning (USA)",
        year: 2018,
        color: "from-purple-600 to-violet-900",
        link: "https://www.amazon.com/s?k=Software+Testing+Rajiv+Chopra",
        cover: "/books/software-testing.jpg"
    },
    {
        id: 4,
        title: "Database Management Systems",
        publisher: "Mercury Learning (USA)",
        year: 2016,
        color: "from-cyan-600 to-blue-800",
        link: "https://www.amazon.com/s?k=Database+Management+Systems+Rajiv+Chopra",
        cover: "/books/dbms-practical.jpg"
    },
    {
        id: 5,
        title: "Principles of Programming Languages",
        publisher: "Mercury Learning (USA)",
        year: 2020,
        color: "from-rose-500 to-pink-800",
        link: "https://www.amazon.com/s?k=Principles+of+Programming+Languages+Rajiv+Chopra",
        cover: "/books/principles-of-programming-languages.jpg"
    },
    {
        id: 6,
        title: "Operating Systems",
        publisher: "Mercury Learning (USA)",
        year: 2019,
        color: "from-slate-600 to-slate-800",
        link: "https://www.amazon.com/s?k=Operating+Systems+Rajiv+Chopra",
        cover: "/books/operating-systems.jpg"
    },
    {
        id: 7,
        title: "IoT Advanced Applications",
        publisher: "De Gruyter",
        year: 2024,
        color: "from-orange-600 to-red-800",
        link: "https://www.amazon.in/Iot-Advanced-Applications-Rajiv-Chopra/dp/1041206917",
        cover: "/books/iot-advanced-applications.jpg"
    }
];

export const NATIONAL_BOOKS = [
    {
        id: 7,
        title: "Artificial Intelligence (AI & ML)",
        publisher: "S. Chand & Company",
        year: 2023,
        color: "from-indigo-600 to-purple-800",
        link: "https://www.amazon.in/s?k=Artificial+Intelligence+Rajiv+Chopra+S+Chand",
        cover: "/books/artificial-intelligence-ai-ml.jpg"
    },
    {
        id: 8,
        title: "Computer Graphics with Multimedia",
        publisher: "S. Chand & Company",
        year: 2022,
        color: "from-orange-500 to-red-700",
        link: "https://www.amazon.in/s?k=Computer+Graphics+Rajiv+Chopra",
        cover: "/books/computer-graphics-multimedia.jpg"
    },
    {
        id: 9,
        title: "Web Engineering",
        publisher: "S. Chand & Company",
        year: 2016,
        color: "from-cyan-700 to-blue-900",
        link: "https://www.amazon.in/s?k=Web+Engineering+Rajiv+Chopra",
        cover: "/books/web-engineering.jpg"
    },
    {
        id: 10,
        title: "Deep Learning",
        publisher: "Khanna Book House",
        year: 2025,
        color: "from-violet-600 to-fuchsia-800",
        link: "https://www.amazon.in/s?k=Deep+Learning+Rajiv+Chopra+Khanna",
        cover: "/books/deep-learning-practical.jpg"
    },
    {
        id: 11,
        title: "Cyber Security",
        publisher: "Khanna Book House",
        year: 2024,
        color: "from-emerald-600 to-green-800",
        link: "https://www.amazon.in/s?k=Cyber+Security+Rajiv+Chopra"
    },
    {
        id: 12,
        title: "Quantum Computing & Techniques",
        publisher: "Khanna Book House",
        year: 2025,
        color: "from-fuchsia-600 to-pink-800",
        link: "https://www.amazon.in/s?k=Quantum+Computing+Rajiv+Chopra",
        cover: "/books/quantum-computing-techniques.jpg"
    },
    {
        id: 13,
        title: "Data Science with AI, ML and DL",
        publisher: "Khanna Book House",
        year: 2024,
        color: "from-blue-600 to-indigo-900",
        link: "https://www.amazon.in/s?k=Data+Science+Rajiv+Chopra",
        cover: "/books/data-science-ai-ml-dl.jpg"
    },
    {
        id: 14,
        title: "Computer Architecture & Organization",
        publisher: "S. Chand & Company",
        year: 2020,
        color: "from-slate-700 to-slate-900",
        link: "https://www.amazon.in/s?k=Computer+Architecture+Rajiv+Chopra",
        cover: "/books/computer-architecture-organization.jpg"
    },
    {
        id: 15,
        title: "Software Project Management",
        publisher: "S. Chand & Company",
        year: 2019,
        color: "from-emerald-600 to-teal-800",
        link: "https://www.amazon.in/s?k=Software+Project+Management+Rajiv+Chopra",
        cover: "/books/software-project-management.jpg"
    },
];

export const TIMELINE = [
    { year: "2025 - Present", role: "Professor (SCSE)", org: "Galgotias University, Greater Noida", type: "work" },
    { year: "2006 - 2024", role: "Associate Professor (CSE)", org: "GTBIT (G.G.S.I.P.U., Delhi)", type: "work" },
    { year: "2015", role: "Ph.D. (Comp. Sc. Engineering)", org: "Banasthali Vidyapith University", type: "edu" },
    { year: "2007", role: "M. Tech. (I.T.)", org: "GGS USIT, Indraprastha University", type: "edu" },
    { year: "2002", role: "M.I.T.", org: "Manipal MAHE University", type: "edu" },
];

export const AWARDS = [
    { title: "USA Life Time Achievement Award Recognition (2024)", image: "/awards/award1.jpg" },
    { title: "London Prolific Author of CSE Recognition (2024)", image: "/awards/award2.jpg" },
    { title: "International Prolific Author Certification (2024)", image: "/awards/award3.png" },
    { title: "RABINDRA RATNA PURASKAR - LITERATURE (2024)", image: "/awards/award4.png" },
    { title: "AMERICAN MERIT COUNCIL Recognition (2024)", image: "/awards/award5.png" },
    { title: "NESIN Best Researcher Award (2020)", image: null },
    { title: "IARDO Academic Excellence Award for Best College Teacher (2019)", image: null }
];

export const RESEARCH = [
    "Load Balancing using Quantum Computers on Cloud (ICSDCT 2025) - Best Paper Award",
    "Roses are Red, Violets are Blue, Deep Learning can Recognize Objects for You (Novyi Mir, 2024)",
    "Improving the Quality of Web Applications Deployed on Cloud (JIOS, 2020)",
    "Training Data on Recursive Processors for Deep Learning (Springer, 2019)",
    "A Comparison of Artificial Intelligence, Machine Learning and Deep Learning (IEEE, 2018)"
];

export const MEMBERSHIPS = [
    "Life Member (LM) of COMPUTER SOCIETY OF INDIA (CSI)",
    "Life Member (LM) of ISTE New Delhi",
    "Member of CEGR (2017 - 2027)"
];

export const CERTIFICATIONS = [
    "Ethical Hacking (Crezone Technologies)",
    "MS AZURE-CLOUD CERTIFIED (2016)",
    "CEGR Certified Researcher (2017)",
    "Certified Professional Data Engineer Assessment (CareerNinja, 2024)",
    "Certified Java Assessment (CareerNinja, 2024)",
    "Certified Python Assessment (CareerNinja, 2024)",
    "Certified Data Analytics Assessment (CareerNinja, 2024)",
    "Certified Generative AI Assessment (CareerNinja, 2024)",
    "Certified Cybersecurity Assessment (CareerNinja, 2024)",
    "Certified AWS Cloud Assessment (CareerNinja, 2024)",
    "Certified IoT Assessment (CareerNinja, 2025)",
    "Certified AI and ML Assessment (CareerNinja, 2025)",
    "Certified AI and ML Program (ICTRD, 2025)",
    "Certified Practitioner in Human Resources (CPHRx) (LearnTube.ai, 2025)",
    "Certified ISO 27001:2022 Cyber Security Expert (LearnTube.ai, 2025)",
    "Certified Problem Solving Skills Assessment (LearnTube.ai, 2025)"
];

export const ENGAGEMENTS = [
    "Chairperson, Online Tech Session at National Conference on AI (DIAS, 2026)",
    "Session Chair, ICCICT-2026 (India Habitat Center, 2026)",
    "Judge, SparX Project Exhibition (Galgotias University, 2026)",
    "Session Chair & Conference Reviewer, ICCCA-2025 (Galgotias University, 2025)",
    "Review Committee Member, ACDSA 2026",
    "Invited Resource Person, FDP on Quantum Gates (Delhi University, 2025)",
    "Invited Resource Person, 'Quantum SDLC' (IEEE/ACM/CSI Chennai, 2025)",
    "Reviewer, ETIS-2024 (NIET, 2024)",
    "Internship, A Primer on Quantum Machine Learning (KwantumG, 2024)",
    "Reviewer, ICGCPA-2024 (VIPS-TC, 2024)",
    "Advisory Committee Member, ICTBIG-2023 (Symbiosis University, 2023)",
    "Invited Speaker, 'A Garden of Web-based System' (IEEE/ACM/CSI Chennai, 2021)",
    "Reviewer, ICCIN-2020 (BPIT, 2020)"
];
