"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { 
  BookOpen, Video, Users, Microscope, Info, FileText, ArrowLeft, 
  MapPin, Clock, Award, Star, Mail, GraduationCap, ChevronRight, NotebookText, Code2, Sparkles, AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { teachersData } from "@/app/faculty/facultyData";
import { departments } from "@/app/labs/labsData";

interface ProgramDetail {
  title: string;
  description: string;
  bannerImage: string;
  duration: string;
  semesters: number;
  credits: number;
  tuition: string;
  requirements: string;
  vision: string;
  mission: string[];
  objectives: string[];
  syllabus: {
    semester: string;
    courses: { code: string; title: string; credits: number }[];
  }[];
  courseDescriptions: { code: string; title: string; credits: number; description: string }[];
  videos: { title: string; url: string; description: string }[];
  facultyDept: string;
  labDept: string;
}

const programsDetails: Record<string, ProgramDetail> = {
  cse: {
    title: "B.Sc. in Computer Science & Engineering",
    description: "The B.Sc. in Computer Science and Engineering is a comprehensive program designed to provide students with a strong foundation in computer systems, algorithms, software engineering, databases, and emerging technologies like artificial intelligence and network security.",
    bannerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    duration: "4 Years",
    semesters: 8,
    credits: 144,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Mathematics in HSC.",
    vision: "To produce highly competent computer experts to satisfy the need for highly qualified engineers in the information and technology business, allowing them to contribute locally and overseas to cutting-edge research and innovation.",
    mission: [
      "To develop ethical engineering practices among the students to enable active and healthy participation in a diverse society and enable lifelong learning.",
      "To provide internationally recognized education to our students and equip them with state-of-the-art knowledge and skill sets in computer science.",
      "To familiarize students with the latest tech-industry best practices and include industrial research trends in the curriculum.",
      "To induce competitive problem-solving and active communication skills through effective classroom practices."
    ],
    objectives: [
      "To improve technical skills while adhering to social and ethical issues related to the profession.",
      "To familiarize students with fundamental knowledge of computer science to design, create, document, and test software.",
      "To build a center of excellence concerning teaching-learning, research, and innovation.",
      "To ensure rational outcomes in higher education and promote lifelong learning."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "CSE-101", title: "Structured Programming Language", credits: 3 },
          { code: "CSE-102", title: "Structured Programming Language Lab", credits: 1.5 },
          { code: "MAT-101", title: "Differential and Integral Calculus", credits: 3 },
          { code: "ENG-101", title: "English Composition", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "CSE-103", title: "Object Oriented Programming", credits: 3 },
          { code: "CSE-104", title: "Object Oriented Programming Lab", credits: 1.5 },
          { code: "EEE-101", title: "Basic Electrical Engineering", credits: 3 },
          { code: "MAT-103", title: "Linear Algebra & Coordinate Geometry", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "CSE-201", title: "Data Structures", credits: 3 },
          { code: "CSE-202", title: "Data Structures Lab", credits: 1.5 },
          { code: "CSE-203", title: "Discrete Mathematics", credits: 3 },
          { code: "MAT-201", title: "Differential Equations & Fourier Analysis", credits: 3 }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "CSE-205", title: "Algorithms", credits: 3 },
          { code: "CSE-206", title: "Algorithms Lab", credits: 1.5 },
          { code: "CSE-207", title: "Computer Architecture", credits: 3 },
          { code: "CSE-209", title: "Database Management Systems", credits: 3 }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "CSE-301", title: "Software Engineering & Information System", credits: 3 },
          { code: "CSE-302", title: "Software Engineering Lab", credits: 1.5 },
          { code: "CSE-303", title: "Theory of Computation & Automata", credits: 3 },
          { code: "CSE-305", title: "Microprocessors & Microcontrollers", credits: 3 }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "CSE-307", title: "Operating Systems", credits: 3 },
          { code: "CSE-308", title: "Operating Systems Lab", credits: 1.5 },
          { code: "CSE-309", title: "Computer Networks", credits: 3 },
          { code: "CSE-310", title: "Computer Networks Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "CSE-401", title: "Compiler Design", credits: 3 },
          { code: "CSE-402", title: "Compiler Design Lab", credits: 1.5 },
          { code: "CSE-403", title: "Artificial Intelligence", credits: 3 },
          { code: "CSE-404", title: "Artificial Intelligence Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "CSE-400", title: "Project / Thesis", credits: 3 },
          { code: "CSE-405", title: "Machine Learning", credits: 3 },
          { code: "CSE-407", title: "Computer Graphics & Multimedia", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "CSE-101", title: "Structured Programming Language", credits: 3, description: "Introduces structured programming using C. Covers variables, data types, operators, control statements (if-else, loops, switch), functions, recursion, arrays, pointers, structures, unions, and file input/output systems." },
      { code: "CSE-201", title: "Data Structures", credits: 3, description: "Design and implementation of basic data structures. Topics include arrays, linked lists, stacks, queues, trees (binary trees, AVL trees, heaps), graphs, hashing, and searching/sorting algorithms." },
      { code: "CSE-205", title: "Algorithms", credits: 3, description: "Advanced techniques for algorithm design and analysis. Covers divide-and-conquer, greedy algorithms, dynamic programming, backtracking, and graph algorithms. Analyzes worst-case and average-case complexities using Big-O notation." },
      { code: "CSE-309", title: "Computer Networks", credits: 3, description: "Introduces OSI and TCP/IP layered reference models. Covers routing and congestion control algorithms, transport layer protocols (TCP, UDP), socket programming, IP addressing, subnetting, and network security protocols." }
    ],
    videos: [
      { title: "Introduction to C Programming (CSE-101)", url: "https://www.youtube.com/embed/KJgsSF0S9sw", description: "Learn the fundamentals of C programming, including compilation, loops, and basic structures." },
      { title: "Data Structures & Algorithms (CSE-201/205)", url: "https://www.youtube.com/embed/8hly31xKjIc", description: "An introductory lecture on stacks, queues, and complexity analysis." },
      { title: "Computer Networks Layered Models (CSE-309)", url: "https://www.youtube.com/embed/qiQR5rTSshw", description: "Understanding physical, data link, and network layers in modern communication." }
    ],
    facultyDept: "cse",
    labDept: "cse"
  },
  eee: {
    title: "B.Sc. in Electrical & Electronic Engineering",
    description: "The B.Sc. in Electrical and Electronic Engineering prepares students to design, develop, and test electrical systems, electronic devices, power grids, robotics, and control systems, combining academic excellence with hands-on industrial experiences.",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    duration: "4 Years",
    semesters: 8,
    credits: 143,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Mathematics in HSC.",
    vision: "To be a premier department providing quality engineering education and research that prepares students to lead technological developments in electrical and electronic industries.",
    mission: [
      "To offer high-quality undergraduate education in electrical and electronic engineering.",
      "To foster a research environment that advances technological solutions for global challenges.",
      "To cultivate professional ethics, leadership, and lifelong learning in students."
    ],
    objectives: [
      "Provide solid grounding in basic sciences, mathematics, and electrical engineering fundamentals.",
      "Develop analytical skills to diagnose, formulate, and solve complex electrical and electronics engineering problems.",
      "Equip students with the capability to design system components that meet specified social, economic, and environmental needs."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "EEE-101", title: "Electrical Circuits I", credits: 3 },
          { code: "EEE-102", title: "Electrical Circuits I Lab", credits: 1.5 },
          { code: "MAT-101", title: "Calculus I", credits: 3 },
          { code: "ENG-101", title: "English Composition", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "EEE-103", title: "Electrical Circuits II", credits: 3 },
          { code: "EEE-104", title: "Electrical Circuits II Lab", credits: 1.5 },
          { code: "PHY-101", title: "Physics I (Mechanics & Waves)", credits: 3 },
          { code: "MAT-103", title: "Linear Algebra & Vectors", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "EEE-201", title: "Electronic Circuits I", credits: 3 },
          { code: "EEE-202", title: "Electronic Circuits I Lab", credits: 1.5 },
          { code: "MAT-201", title: "Differential Equations", credits: 3 }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "EEE-203", title: "Electronic Circuits II", credits: 3 },
          { code: "EEE-204", title: "Electronic Circuits II Lab", credits: 1.5 },
          { code: "EEE-205", title: "Signals & Systems", credits: 3 }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "EEE-301", title: "Electromagnetic Fields & Waves", credits: 3 },
          { code: "EEE-303", title: "Electrical Machines I", credits: 3 },
          { code: "EEE-304", title: "Electrical Machines I Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "EEE-305", title: "Electrical Machines II", credits: 3 },
          { code: "EEE-307", title: "Power System I", credits: 3 },
          { code: "EEE-309", title: "Microprocessors & Interfacing", credits: 3 }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "EEE-401", title: "Control Systems I", credits: 3 },
          { code: "EEE-402", title: "Control Systems I Lab", credits: 1.5 },
          { code: "EEE-403", title: "Power System Protection", credits: 3 },
          { code: "EEE-404", title: "Power System Protection Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "EEE-400", title: "Project / Thesis", credits: 3 },
          { code: "EEE-405", title: "Telecommunication Engineering", credits: 3 },
          { code: "EEE-407", title: "VLSI Design & Technology", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "EEE-101", title: "Electrical Circuits I", credits: 3, description: "Formulates circuit parameters using loop and nodal methods. Relies heavily on network theorems: Norton, Thevenin, Maximum Power Transfer, and Superposition in DC circuits." },
      { code: "EEE-201", title: "Electronic Circuits I", credits: 3, description: "Focuses on diode applications, bipolar junction transistors (BJT), field-effect transistors (FET), operational amplifiers, and dc biasing models." },
      { code: "EEE-303", title: "Electrical Machines I", credits: 3, description: "Covers electromagnetic induction, magnetic circuits, dc generators, dc motors, and single-phase and three-phase transformers." },
      { code: "EEE-403", title: "Power System Protection", credits: 3, description: "Covers switchgear, high-voltage fuses, circuit breakers, transmission relays, differential transformers, and generator relays." }
    ],
    videos: [
      { title: "Basic Electrical Circuit Analysis (EEE-101)", url: "https://www.youtube.com/embed/F_VHeQke3D0", description: "An introductory session explaining voltage, current, node voltages, and loop currents." },
      { title: "Electronic Devices & Amp Circuits (EEE-201)", url: "https://www.youtube.com/embed/J4oO7PT_ykw", description: "Covers operational amplifier basics, negative feedback, and voltage comparators." },
      { title: "Power Grid Protection Relay Systems (EEE-403)", url: "https://www.youtube.com/embed/O874Wn8H-c8", description: "Deals with protective relays, switchgears, and transformer safety grids." }
    ],
    facultyDept: "eee",
    labDept: "eee"
  },
  textile: {
    title: "B.Sc. in Textile Engineering",
    description: "The B.Sc. in Textile Engineering blends engineering principles with fiber science, knitting/weaving manufacturing, wet chemical processing, garment technology, and quality control systems to prepare students for the global apparel and textile industries.",
    bannerImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    duration: "4 Years",
    semesters: 8,
    credits: 142,
    tuition: "450,000 BDT",
    requirements: "Combined GPA 6.0 in SSC/HSC with Chemistry & Physics in HSC.",
    vision: "To be recognized as a center of excellence in textile engineering education, producing industry-ready graduates with innovation and sustainability.",
    mission: [
      "To deliver state-of-the-art curriculum covering yarn, fabric, wet processing, and apparel manufacturing.",
      "To establish strong industrial linkages to provide hands-on experience and internship opportunities.",
      "To encourage sustainable practices in textile processing and design."
    ],
    objectives: [
      "Understand physical and chemical behaviors of natural and man-made textile fibers.",
      "Operate and design machines for spinning, weaving, circular knitting, dyeing, and garment manufacturing.",
      "Implement international quality standards (ISO, AATCC) in fabric inspection and wet processing recipe calculations."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "TE-101", title: "Introduction to Textile Engineering", credits: 3 },
          { code: "CHM-101", title: "General Chemistry & Lab", credits: 4 },
          { code: "MAT-101", title: "Calculus I", credits: 3 },
          { code: "ENG-101", title: "English", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "TE-103", title: "Polymer Science & Textile Fibers", credits: 3 },
          { code: "PHY-101", title: "General Physics I", credits: 3 },
          { code: "MAT-103", title: "Linear Algebra", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "TE-201", title: "Yarn Manufacturing I", credits: 3 },
          { code: "TE-202", title: "Yarn Manufacturing I Lab", credits: 1.5 },
          { code: "TE-203", title: "Fabric Manufacturing I", credits: 3 }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "TE-205", title: "Yarn Manufacturing II", credits: 3 },
          { code: "TE-207", title: "Fabric Manufacturing II", credits: 3 },
          { code: "TE-208", title: "Fabric Manufacturing II Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "TE-301", title: "Textile Wet Processing I", credits: 3 },
          { code: "TE-302", title: "Textile Wet Processing I Lab", credits: 1.5 },
          { code: "TE-303", title: "Apparel Manufacturing I", credits: 3 }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "TE-305", title: "Textile Wet Processing II", credits: 3 },
          { code: "TE-307", title: "Apparel Manufacturing II", credits: 3 },
          { code: "TE-308", title: "Apparel Manufacturing II Lab", credits: 1.5 }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "TE-401", title: "Textile Testing & Quality Control", credits: 3 },
          { code: "TE-402", title: "Textile Testing & Quality Control Lab", credits: 1.5 },
          { code: "TE-403", title: "Technical Textiles", credits: 3 }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "TE-400", title: "Project / Thesis", credits: 3 },
          { code: "TE-405", title: "Textile Mill Utilities & Planning", credits: 3 },
          { code: "TE-407", title: "Production Planning & Control", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "TE-201", title: "Yarn Manufacturing I", credits: 3, description: "Covers mechanical opening, blending, cleaning, carding, drafting, roving, and ring spinning systems of cotton yarns." },
      { code: "TE-203", title: "Fabric Manufacturing I", credits: 3, description: "Covers winding, warping, sizing, drafting, and denting as preparation for loom weaving. Discusses the primary and secondary motions of weaving looms." },
      { code: "TE-301", title: "Textile Wet Processing I", credits: 3, description: "Explores scouring, bleaching, mercerizing, and dyeing procedures for natural fibers. Reviews recipe calculation and dye fixing chemistry." },
      { code: "TE-401", title: "Textile Testing & Quality Control", credits: 3, description: "Focuses on fiber and yarn characterizations: count, twist, strength, circularity, moisture content, fabric drape, color rub fastness, and testing machines." }
    ],
    videos: [
      { title: "Yarn Manufacturing carding & roving (TE-201)", url: "https://www.youtube.com/embed/b87l1aE0nZg", description: "Demonstrating modern mill carding and roving machinery operations." },
      { title: "Fabric Circular Knitting Principles (TE-203)", url: "https://www.youtube.com/embed/c93t1mP738w", description: "Explains circular knitting machines, needles, sinkers, and double knit fabrics." },
      { title: "Wet Scouring & Fabric Dyeing (TE-301)", url: "https://www.youtube.com/embed/t-6nQYwUq64", description: "Shows wet chemical processes, bleaching, scouring, and recipe setup in reactive dyeing." }
    ],
    facultyDept: "textile",
    labDept: "textile"
  },
  bba: {
    title: "Bachelor of Business Administration (BBA)",
    description: "The Bachelor of Business Administration is a premium four-year program that prepares students for dynamic career paths in corporations, consulting, and entrepreneurship by delivering robust training in marketing, accounting, HR, and strategic finance.",
    bannerImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    duration: "4 Years",
    semesters: 8,
    credits: 126,
    tuition: "350,000 BDT",
    requirements: "Combined GPA 5.5 in SSC/HSC (any background).",
    vision: "To develop innovative, ethical, and socially responsible business leaders capable of steering organizations in a competitive global market.",
    mission: [
      "To provide a rigorous business curriculum integrating theory and practical experience.",
      "To foster analytical thinking, leadership skills, and global perspectives in students.",
      "To engage with the corporate sector for professional networking and internships."
    ],
    objectives: [
      "Acquire general knowledge of accounting, economics, marketing, and human resources.",
      "Develop team leadership, communications, presentation, and data management skills.",
      "Solve realistic business case problems using quantitative tools and models."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "BBA-101", title: "Introduction to Business", credits: 3 },
          { code: "BBA-102", title: "Microeconomics", credits: 3 },
          { code: "ENG-101", title: "English Composition", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "BBA-103", title: "Financial Accounting", credits: 3 },
          { code: "BBA-104", title: "Macroeconomics", credits: 3 },
          { code: "MAT-101", title: "Business Mathematics", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "BBA-201", title: "Managerial Accounting", credits: 3 },
          { code: "BBA-202", title: "Business Communication", credits: 3 },
          { code: "BBA-203", title: "Principles of Management", credits: 3 }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "BBA-204", title: "Principles of Marketing", credits: 3 },
          { code: "BBA-205", title: "Business Statistics", credits: 3 },
          { code: "BBA-206", title: "Organizational Behavior", credits: 3 }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "BBA-301", title: "Financial Management", credits: 3 },
          { code: "BBA-302", title: "Human Resource Management", credits: 3 },
          { code: "BBA-303", title: "Operations Management", credits: 3 }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "BBA-304", title: "Business Law", credits: 3 },
          { code: "BBA-305", title: "International Business", credits: 3 },
          { code: "BBA-306", title: "Research Methodology", credits: 3 }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "BBA-401", title: "Strategic Management", credits: 3 },
          { code: "MGT-402", title: "Business Ethics & CSR", credits: 3 },
          { code: "FIN-403", title: "Investment & Portfolio Management", credits: 3 }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "BBA-400", title: "Internship & Defense", credits: 3 },
          { code: "MKT-405", title: "Consumer Behavior", credits: 3 },
          { code: "HRM-407", title: "Human Resource Development", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "BBA-103", title: "Financial Accounting", credits: 3, description: "Covers bookkeeping systems, ledger entries, bank reconciliation statements, balance sheets, and income statement analyses." },
      { code: "BBA-204", title: "Principles of Marketing", credits: 3, description: "Covers consumer buying behavior, segmentation, targeting, brand positioning, and the marketing mix (4Ps)." },
      { code: "BBA-301", title: "Financial Management", credits: 3, description: "Deals with time value of money, risk/return, capital budgeting models, cost of capital, and working capital solutions." },
      { code: "BBA-302", title: "Human Resource Management", credits: 3, description: "Principles of recruitment, corporate selection, compensation packages, appraisal, and industrial safety." }
    ],
    videos: [
      { title: "Principles of Marketing Overview (BBA-204)", url: "https://www.youtube.com/embed/m063mO-fFis", description: "Covers target markets, customer loyalty values, and brand positioning tactics." },
      { title: "Introduction to Corporate Accounting (BBA-103)", url: "https://www.youtube.com/embed/yYX8v9q7j2c", description: "Deals with accounting double entry, balance sheets, and cash flow structures." },
      { title: "Human Resource Management basics (BBA-302)", url: "https://www.youtube.com/embed/n4p_8u8oK-g", description: "Covers organizational structures, training programs, and performance appraisals." }
    ],
    facultyDept: "bba",
    labDept: "bba"
  },
  english: {
    title: "B.A. in English",
    description: "The B.A. in English provides students with deep competence in English literature, linguistics, writing skills, phonology, and English Language Teaching (ELT) to prepare them for content design, teaching, and media careers.",
    bannerImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    duration: "4 Years",
    semesters: 8,
    credits: 120,
    tuition: "300,000 BDT",
    requirements: "Combined GPA 5.5 in SSC/HSC (any background).",
    vision: "To produce graduates with advanced language competencies, critical thinking, and cultural awareness through literary studies.",
    mission: [
      "To cultivate reading, writing, and communication skills in students.",
      "To expose students to a diverse body of English literature and linguistics.",
      "To prepare students for careers in media, writing, and teaching."
    ],
    objectives: [
      "Interpret major literary texts, genres, and movements in historical and cultural contexts.",
      "Understand scientific foundations of language study (phonetics, syntax, semantics).",
      "Apply ELT methodologies for curriculum design and vocabulary teaching."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "ENG-101", title: "English Composition", credits: 3 },
          { code: "ENG-102", title: "Introduction to Literature", credits: 3 },
          { code: "ENG-103", title: "History of England", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "ENG-104", title: "Reading and Writing Skills", credits: 3 },
          { code: "ENG-105", title: "Introduction to Linguistics", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "ENG-201", title: "Romantic Poetry", credits: 3 },
          { code: "ENG-202", title: "Introduction to Phonetics & Phonology", credits: 3 }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "ENG-203", title: "Victorian Literature", credits: 3 },
          { code: "ENG-204", title: "Sociolinguistics", credits: 3 }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "ENG-301", title: "Shakespeare", credits: 3 },
          { code: "ENG-302", title: "Syntax & Semantics", credits: 3 }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "ENG-303", title: "20th Century Literature", credits: 3 },
          { code: "ENG-304", title: "Literary Criticism", credits: 3 }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "ENG-401", title: "American Literature", credits: 3 },
          { code: "ENG-402", title: "English Language Teaching (ELT)", credits: 3 }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "ENG-403", title: "Postcolonial Literature", credits: 3 },
          { code: "ENG-400", title: "Thesis / Project", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "ENG-105", title: "Introduction to Linguistics", credits: 3, description: "Analyzes phonetics, morphology, syntax, pragmatics, language variance, and scientific theories of linguistic origins." },
      { code: "ENG-202", title: "Phonetics & Phonology", credits: 3, description: "Covers production of sounds, IPA transcriptions, stress, intonation, and rules of vowel/consonant vocal patterns." },
      { code: "ENG-301", title: "Shakespeare", credits: 3, description: "Examines historical tragedies, comedies, sonnets, Elizabethan theater culture, and structural textual criticism." },
      { code: "ENG-402", title: "English Language Teaching (ELT)", credits: 3, description: "Examines teaching approaches, communicative syllabi, lesson planning, and student testing mechanisms." }
    ],
    videos: [
      { title: "English IPA Phonetics (ENG-202)", url: "https://www.youtube.com/embed/0_x-U1tEw-0", description: "Explains vocal charts, IPA phonemes, and english sound articulations." },
      { title: "Introduction to English Literature (ENG-102)", url: "https://www.youtube.com/embed/41XgBv0H-tU", description: "Discusses major genres, poetry metrics, and historical literature periods." },
      { title: "ELT Communicative Methodologies (ENG-402)", url: "https://www.youtube.com/embed/nUjOaU0b6F0", description: "Deals with lesson plans, group activities, and vocabulary instruction in class." }
    ],
    facultyDept: "english",
    labDept: "english"
  },
  mba: {
    title: "Master of Business Administration (MBA)",
    description: "The Master of Business Administration is a premium graduate program designed to shape next-generation corporate leaders who can manage uncertainty, make data-driven decisions, and lead strategic business transformations.",
    bannerImage: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1200&auto=format&fit=crop",
    duration: "1.5 Years",
    semesters: 3,
    credits: 36,
    tuition: "140,500 BDT",
    requirements: "Graduation CGPA 2.50 in any discipline.",
    vision: "To shape corporate leaders who can manage uncertainty and drive strategic business transformations.",
    mission: [
      "To deliver advanced managerial skills and strategic leadership capabilities.",
      "To encourage corporate ethics, values, and decision-making rigor.",
      "To build strong professional linkages through internships and business case challenges."
    ],
    objectives: [
      "Acquire deep knowledge of strategic marketing, corporate finance, and operations management.",
      "Formulate corporate strategy and coordinate organizational change initiatives.",
      "Lead cross-functional teams to solve modern corporate challenges."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "MBA-501", title: "Managerial Economics", credits: 3 },
          { code: "MBA-502", title: "Corporate Finance", credits: 3 },
          { code: "MBA-503", title: "Strategic Marketing", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "MBA-504", title: "Operations & Supply Chain Management", credits: 3 },
          { code: "MBA-505", title: "Managerial Accounting", credits: 3 },
          { code: "MBA-506", title: "Business Research Methods", credits: 3 }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "MBA-601", title: "Strategic Management", credits: 3 },
          { code: "MBA-602", title: "Corporate Finance Elective", credits: 3 },
          { code: "MBA-603", title: "Marketing Strategy Elective", credits: 3 },
          { code: "MBA-600", title: "Master Thesis / Capstone Project", credits: 3 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "MBA-501", title: "Managerial Economics", credits: 3, description: "Microeconomic theories applied to business decisions, pricing strategies, market demand analysis, and risk assessment." },
      { code: "MBA-503", title: "Strategic Marketing", credits: 3, description: "In-depth strategy planning, brand value chain, digital positioning, customer relationship management (CRM) frameworks." },
      { code: "MBA-601", title: "Strategic Management", credits: 3, description: "Integrative course covering business policy, strategic alignment, corporate restructuring, competitive dynamics." }
    ],
    videos: [
      { title: "Strategic Management Cases (MBA-601)", url: "https://www.youtube.com/embed/PjRkG9p973s", description: "Case analysis on competitive strategy, SWOT, and industry dynamics." },
      { title: "Managerial Economics Decision Tools (MBA-501)", url: "https://www.youtube.com/embed/n4p_8u8oK-g", description: "Introduction to marginal analysis, price elasticity, and market structures." }
    ],
    facultyDept: "bba",
    labDept: "bba"
  },
  emba: {
    title: "Executive MBA (EMBA)",
    description: "The Executive MBA is a fast-track, highly practical program designed specifically for working professionals, senior managers, and corporate executives aiming to accelerate their career progression and build strategic leadership capacity.",
    bannerImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Year",
    semesters: 2,
    credits: 30,
    tuition: "120,600 BDT",
    requirements: "Graduation CGPA 2.50 with minimum 2 years of corporate experience.",
    vision: "To accelerate the career progression of working professionals into executive leadership roles.",
    mission: [
      "To deliver highly practical, case-based decision-making insights.",
      "To enhance corporate governance, compliance, and leadership agility.",
      "To facilitate professional peer networking and executive mentorship."
    ],
    objectives: [
      "Synthesize analytical results for executive-level board decisions.",
      "Understand frameworks of corporate governance, change management, and operational risk.",
      "Develop executive presence, communication agility, and crisis negotiation techniques."
    ],
    syllabus: [
      {
        semester: "Semester 1",
        courses: [
          { code: "EMBA-501", title: "Executive Decision Making", credits: 3 },
          { code: "EMBA-502", title: "Corporate Governance & Ethics", credits: 3 },
          { code: "EMBA-503", title: "Strategic Leadership", credits: 3 },
          { code: "EMBA-504", title: "Global Business Environment", credits: 3 }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "EMBA-505", title: "Change Management in Corporations", credits: 3 },
          { code: "EMBA-506", title: "Project Portfolio Management", credits: 3 },
          { code: "EMBA-600", title: "Executive Capstone Project", credits: 6 }
        ]
      }
    ],
    courseDescriptions: [
      { code: "EMBA-501", title: "Executive Decision Making", credits: 3, description: "Tools and frameworks for decision analysis, statistical forecasting, heuristic bias mitigation." },
      { code: "EMBA-502", title: "Corporate Governance", credits: 3, description: "Legal and ethical responsibilities of boards, stakeholder management, auditing principles, corporate social responsibility (CSR)." },
      { code: "EMBA-503", title: "Strategic Leadership", credits: 3, description: "Organizational culture, leading high-performance teams, emotional intelligence in leadership, crisis communications." }
    ],
    videos: [
      { title: "Corporate Governance Best Practices (EMBA-502)", url: "https://www.youtube.com/embed/jZ_7nU_Jg0Q", description: "Deals with corporate governance structures, agency theories, and board roles." },
      { title: "Strategic Leadership and Culture (EMBA-503)", url: "https://www.youtube.com/embed/O874Wn8H-c8", description: "In-depth session on organizational culture, leadership style, and motivation." }
    ],
    facultyDept: "bba",
    labDept: "bba"
  }
};

type TabType = "details" | "syllabus" | "description" | "videos" | "faculty" | "labs";

export default function ProgramDetails() {
  const { dept } = useParams();
  const programKey = (typeof dept === "string" ? dept.toLowerCase() : "") || "cse";
  const program = programsDetails[programKey];

  const [activeTab, setActiveTab] = useState<TabType>("details");

  if (!program) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-6">
        <AlertCircle className="w-16 h-16 text-crimson mx-auto" />
        <h1 className="text-3xl font-bold font-serif text-navy-950 dark:text-white">Program Not Found</h1>
        <p className="text-slate-500">The program details page you are trying to visit does not exist.</p>
        <Link href="/programs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson text-white font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Return to Catalog
        </Link>
      </div>
    );
  }

  // Get real faculty data
  const filteredFaculty = teachersData.filter((t) => t.dept === program.facultyDept);

  // Get real lab data from labs list
  const labData = departments.find((d) => d.id === program.labDept)?.labs || [];

  const tabOptions: { id: TabType; label: string; icon: React.ComponentType<any> }[] = [
    { id: "details", label: "Details", icon: Info },
    { id: "syllabus", label: "Syllabus", icon: FileText },
    { id: "description", label: "Course Description", icon: NotebookText },
    { id: "videos", label: "Class Videos", icon: Video },
    { id: "faculty", label: "Faculty Members", icon: Users },
    { id: "labs", label: "Computer Labs", icon: Microscope }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Back link */}
      <div className="flex justify-between items-center">
        <Link href="/programs" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-crimson dark:text-gold px-3 py-1.5 rounded-full bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10">
          Academic Program Details
        </span>
      </div>

      {/* Hero Banner Area */}
      <section className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-200/20 dark:border-slate-800/30">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.bannerImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3 z-10">
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white leading-tight">
            {program.title}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            {program.description}
          </p>
        </div>
      </section>

      {/* Stats Board */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 shadow-inner">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Duration</span>
          <p className="text-base sm:text-lg font-black text-navy-950 dark:text-white">{program.duration}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Semesters</span>
          <p className="text-base sm:text-lg font-black text-navy-950 dark:text-white">{program.semesters} Semesters</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Total Credits</span>
          <p className="text-base sm:text-lg font-black text-navy-950 dark:text-white">{program.credits} Credits</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Tuition Fees</span>
          <p className="text-base sm:text-lg font-black text-crimson dark:text-gold">{program.tuition}</p>
        </div>
      </div>

      {/* Main Grid content with dynamic tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="hidden lg:block glass-panel p-4 rounded-3xl space-y-1 shadow-md border border-slate-200/40 dark:border-slate-800/40">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-3 pb-2 block border-b border-slate-200/30 dark:border-slate-800/30 mb-2">
              Related Menus
            </span>
            {tabOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-left transition-all group ${
                    isActive 
                      ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 shadow-md" 
                      : "text-slate-655 dark:text-slate-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 hover:text-navy-950 dark:hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white dark:text-navy-950" : "text-slate-400 group-hover:text-crimson dark:group-hover:text-gold"}`} />
                    {opt.label}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Swiper Tabs */}
          <div className="lg:hidden flex overflow-x-auto gap-2 py-1 px-1 -mx-4 sm:mx-0 no-scrollbar">
            {tabOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap border shrink-0 transition-all ${
                    isActive
                      ? "bg-crimson dark:bg-gold text-white dark:text-navy-950 border-crimson dark:border-gold shadow-md"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Quick Apply Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4 shadow-lg text-center bg-gradient-to-br from-crimson/5 to-gold/5">
            <h3 className="font-serif font-bold text-navy-950 dark:text-white text-base">Admission Open</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Prerequisites: {program.requirements}
            </p>
            <Link
              href="/admission"
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-crimson dark:bg-gold text-white dark:text-navy-950 text-xs font-bold hover:scale-103 active:scale-97 transition-all shadow-md"
            >
              Apply to this Program
            </Link>
          </div>
        </aside>

        {/* Tab Content Display Area */}
        <main className="lg:col-span-9 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-xl min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* DETAILS TAB */}
              {activeTab === "details" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                      Academic Vision & Objectives
                    </h2>
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-crimson/5 to-gold/5 border border-crimson/10 dark:border-gold/10 space-y-2">
                      <span className="text-[10px] font-bold text-crimson dark:text-gold uppercase tracking-wider block">Program Vision</span>
                      <p className="text-sm text-slate-700 dark:text-slate-350 leading-relaxed font-medium italic">
                        &ldquo;{program.vision}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-crimson dark:text-gold" /> Key Missions
                      </h3>
                      <ul className="space-y-2">
                        {program.mission.map((item, index) => (
                          <li key={index} className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 leading-relaxed flex gap-2">
                            <span className="text-crimson dark:text-gold font-bold font-mono">{index + 1}.</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-crimson dark:text-gold" /> Program Objectives
                      </h3>
                      <ul className="space-y-2">
                        {program.objectives.map((item, index) => (
                          <li key={index} className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 leading-relaxed flex gap-2">
                            <span className="text-crimson dark:text-gold font-bold font-mono">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SYLLABUS TAB */}
              {activeTab === "syllabus" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                    Course Curriculum Schedule
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.syllabus.map((sem, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/40 space-y-3">
                        <h3 className="text-sm font-bold text-crimson dark:text-gold border-b border-slate-200/60 dark:border-slate-800/60 pb-1.5 font-serif">
                          {sem.semester}
                        </h3>
                        <div className="space-y-2.5">
                          {sem.courses.map((course, cIdx) => (
                            <div key={cIdx} className="flex justify-between items-start gap-4 text-xs">
                              <div>
                                <span className="font-bold text-slate-450 dark:text-slate-500 font-mono block">{course.code}</span>
                                <span className="font-semibold text-slate-750 dark:text-slate-300">{course.title}</span>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-mono whitespace-nowrap shrink-0">
                                {course.credits} Cr
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* COURSE DESCRIPTIONS TAB */}
              {activeTab === "description" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                    Core Course Modules Descriptions
                  </h2>
                  <div className="space-y-4">
                    {program.courseDescriptions.map((desc, dIdx) => (
                      <div key={dIdx} className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/40 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                        <div className="p-3 rounded-xl bg-crimson/5 dark:bg-gold/5 border border-crimson/10 dark:border-gold/10 text-center shrink-0">
                          <span className="font-mono text-xs font-black text-crimson dark:text-gold block">{desc.code}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-450 block">{desc.credits} Credits</span>
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-bold text-navy-950 dark:text-white font-serif">{desc.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-350 leading-relaxed">
                            {desc.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CLASS VIDEOS TAB */}
              {activeTab === "videos" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                    Recorded Class Classrooms
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.videos.map((vid, vIdx) => (
                      <div key={vIdx} className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-slate-50 dark:bg-slate-900/40 hover:scale-[1.01] transition-transform shadow-md">
                        <div className="aspect-video w-full relative">
                          <iframe 
                            src={vid.url} 
                            title={vid.title} 
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="p-4 space-y-1.5">
                          <h3 className="text-xs sm:text-sm font-bold text-navy-950 dark:text-white font-serif">{vid.title}</h3>
                          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{vid.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FACULTY MEMBERS TAB */}
              {activeTab === "faculty" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4 flex justify-between items-center">
                    <span>Department Faculty Members</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {filteredFaculty.length} Instructors
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredFaculty.map((teacher, tIdx) => (
                      <div key={tIdx} className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/35 dark:border-slate-800/35 flex gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden relative shrink-0 border border-slate-200/40 dark:border-slate-800/40">
                          <img 
                            src={teacher.imgUrl} 
                            alt={teacher.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            onError={(e) => {
                              // If image fails, use a beautiful SVG placeholder
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${teacher.name}&backgroundColor=090d16&textColor=fab86d`;
                            }}
                          />
                        </div>
                        <div className="space-y-2 flex-1 min-w-0">
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-navy-950 dark:text-white group-hover:text-crimson dark:group-hover:text-gold transition-colors truncate">
                              {teacher.name}
                            </h3>
                            <p className="text-[10px] text-slate-500 font-medium leading-relaxed truncate">{teacher.title}</p>
                          </div>
                          <div className="space-y-0.5">
                            <a href={`mailto:${teacher.email}`} className="text-[10px] text-slate-400 dark:text-slate-500 hover:text-crimson dark:hover:text-gold flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {teacher.email}
                            </a>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-crimson dark:text-gold" /> {teacher.office}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {teacher.interests.slice(0, 2).map((interest, iIdx) => (
                              <span key={iIdx} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 border border-slate-200/10">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* COMPUTER LABS TAB */}
              {activeTab === "labs" && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4">
                    Engineering & Computer Laboratories
                  </h2>
                  
                  {labData.length > 0 ? (
                    <div className="space-y-6">
                      {labData.map((lab, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 space-y-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div>
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-550 dark:text-slate-400">
                                <MapPin className="w-3 h-3 text-crimson dark:text-gold" /> {lab.location}
                              </span>
                              <h3 className="font-serif font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                                {lab.name}
                              </h3>
                            </div>
                          </div>
                          
                          {lab.image && (
                            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-200/30 dark:border-slate-800/40">
                              <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                            </div>
                          )}

                          <p className="text-slate-655 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">{lab.details}</p>
                          
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Key Equipments</span>
                            <div className="flex flex-wrap gap-1.5">
                              {lab.equipment.map((eq, eqIdx) => (
                                <span key={eqIdx} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-200/40 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                  {eq}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 text-center space-y-4 max-w-xl mx-auto">
                      <Sparkles className="w-12 h-12 text-gold mx-auto" />
                      <h3 className="font-bold text-navy-950 dark:text-white text-base">Integrated Academic Labs</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Students of this department have full, priority access to the primary **Internet & Common Uses Laboratory (9th Floor)** and **Multimedia / Software Development Laboratories (17th Floor)** for project assignments, quantitative models, analysis research, and listening practice.
                      </p>
                      <Link href="/labs" className="inline-flex items-center gap-1 text-xs font-bold text-crimson dark:text-gold hover:underline">
                        View All Campus Labs <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>

    </div>
  );
}
