import { Microscope, Cpu, Scissors, FlaskConical } from "lucide-react";

export const departments = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    short: "CSE",
    count: "4 Labs",
    accent: "cyan",
    themeClass: "from-cyan-500/10 to-blue-500/5 border-cyan-500/15 dark:border-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    icon: Microscope,
    tagline: "High-performance programming platforms, software engineering modules, and networking sandboxes.",
    labs: [
      {
        name: "Internet and Common Uses Lab",
        location: "9th Floor, Main Campus",
        details: "An open-access resource laboratory available to all departmental students. Designed for academic research, assignment completion, learning basic office suites, and English language listening practice.",
        equipment: ["High-speed Internet workstations", "Audio/Listening equipment", "Office Application software packages"],
        future: "Upgrading client stations with high-efficiency terminal hardware.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-03-02_959680.jpg"
      },
      {
        name: "Network Lab",
        location: "Room 1204, 12th Floor",
        details: "An exclusive laboratory engineered specifically for Computer Science & Engineering students to perform advanced networking configurations and routing experiments.",
        equipment: ["CCNA Advanced routing setups", "Cisco simulation terminals", "LAN configuration nodes"],
        future: "Integration of software-defined networking (SDN) interfaces.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-05-48_371383.jpg"
      },
      {
        name: "Programming Lab",
        location: "Room 1503, 15th Floor",
        details: "Dedicated to core algorithm design, data structures, and database programming. Facilitates competitive programming bootcamps and algorithmic research experiments.",
        equipment: ["Linux programming environments", "High-performance database compilers", "IDE packages"],
        future: "Introduction of Cloud Integrated Development Environments (IDEs).",
        image: null
      },
      {
        name: "Internet by Software Engineering & Software Development Lab",
        location: "Room 1703, 17th Floor",
        details: "Focused on the software development lifecycle, web architectures, custom graphics rendering, multimedia design, and advanced CCNA practices.",
        equipment: ["Multimedia rendering software", "CCNA Lab practice rigs", "Full-stack framework suites"],
        future: "Setting up IoT (Internet of Things), Artificial Intelligence (AI), and Robotics research modules.",
        image: null
      }
    ]
  },
  {
    id: "eee",
    name: "Electrical & Electronic Engineering",
    short: "EEE",
    count: "6 Labs",
    accent: "amber",
    themeClass: "from-amber-500/10 to-orange-500/5 border-amber-500/15 dark:border-amber-500/10 text-amber-500 dark:text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
    icon: Cpu,
    tagline: "Equipped with robotics workstations, heavy power transformers, circuit kits, and microcontroller chips.",
    labs: [
      {
        name: "Robotics Lab",
        location: "Ground Floor, Campus Hub",
        details: "A ground-floor laboratory designed to integrate physical hardware with programming. Currently features industrial robotic arms. Merged with Control System training setups.",
        equipment: ["2 Industrial robotic arms", "3D Printers", "Sensors & Actuator control kits", "Dispenser meters & Solenoid valves"],
        future: "Complete integration of Control System sandbox and advanced 3D fabrication models.",
        image: null
      },
      {
        name: "Power Protection & Switchgear Lab",
        location: "Room 901 (Side A), 9th Floor",
        details: "A heavy electrical infrastructure facility designed to simulate high-voltage systems and protective relays.",
        equipment: ["400kg Industrial Transformer (700kg including oil)", "Power control panels", "Relay coordination testers"],
        future: "Developing miniaturized substations to replicate real-life emergency grids.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-14-42_559518.jpg"
      },
      {
        name: "Machine Lab",
        location: "Room 901 (Side B), 9th Floor",
        details: "Configured to study electric motors and generators. Features full electrical feedback circuits and power system kits.",
        equipment: ["DC Motors & AC Alternators", "Power station machines", "Transmission line simulators"],
        future: "Upgrading motors to smart digitalized machines with computer data-logging.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-15-05_722454.jpg"
      },
      {
        name: "Electrical Circuit Lab",
        location: "Room 903, 9th Floor",
        details: "Features 5 large workstations with movable apparatus trolleys. Accommodates 8 workstations with 6 seating slots per table to support group circuit experiments.",
        equipment: ["AC & DC Power sources", "Active & Passive components", "Oscilloscopes & Multimeters", "Apparatus transport trolleys"],
        future: "Modernizing laboratory computing units for digital circuit simulation.",
        image: null
      },
      {
        name: "Communication Lab",
        location: "17th Floor, Lab Block",
        details: "Introduces students to analog/digital modulation, signal processing, and telecommunication principles.",
        equipment: ["Analog/Digital telecommunication kits", "Oscilloscopes", "Signal converters (A/D and D/A)"],
        future: "Procurement of microwave antennas for wireless communication experiments.",
        image: null
      },
      {
        name: "Microprocessor Lab",
        location: "17th Floor, Lab Block",
        details: "Dedicated to low-level assembly language programming and embedded systems interfacing.",
        equipment: ["8086 Microprocessor trainers", "Microcontroller simulation kits", "4 Dedicated trainer boards"],
        future: "Adding Arduino and Raspberry Pi developer kits with custom microprocessor boards.",
        image: null
      }
    ]
  },
  {
    id: "textile",
    name: "Textile Engineering",
    short: "Textile",
    count: "5 Labs",
    accent: "pink",
    themeClass: "from-pink-500/10 to-rose-500/5 border-pink-500/15 dark:border-pink-500/10 text-pink-500 dark:text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.15)",
    icon: Scissors,
    tagline: "Advanced machinery for yarn manufacturing, fabric knitting, wet chemical processing, and quality assessment.",
    labs: [
      {
        name: "Yarn Manufacturing Lab",
        location: "Room 101, 1st Floor",
        details: "Demonstrates carding, drawing, roving, and yarn formation. Focuses on the functions of yarn manufacturing machinery.",
        equipment: ["Mini carding machine", "Roving frames", "Yarn spinning mechanisms"],
        future: "Introduction of automated blow-room machinery simulations.",
        image: null
      },
      {
        name: "Knitting Lab",
        location: "Room 1204, 12th Floor",
        details: "Enables students to produce woven and knit fabrics. Teaches custom fabric design, structures, and knit dynamics.",
        equipment: ["Semi-automatic power loom (Dobby loom)", "Socks making machine", "Flat V-bed knitting machine", "Linking and Circular knitting machines"],
        future: "Expansion of circular knitting models to produce high-density double-knit fabrics.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-55-50_754036.jpg"
      },
      {
        name: "Wet Processing Lab",
        location: "Room 1401, 14th Floor",
        details: "Teaches fabric dyeing, chemical printing, scouring, bleaching, and chemical treatment setups.",
        equipment: ["Sample dyeing machines", "Chemical mixers", "Printing rollers & screen blocks"],
        future: "Procurement of advanced spectrophotometer for recipe calculations.",
        image: "http://ius.edu.bd/public/upload/page_files/test_2022-11-08%2007-59-33_900333.jpg"
      },
      {
        name: "Apparel and Fashion Lab",
        location: "Room 2001, 20th Floor",
        details: "Designed with modern apparel manufacturing machinery for shirts, pants, T-shirts, and fashion design. Prepares students for garment production management.",
        equipment: ["Industrial plain sewing machines", "Flatlock stitching machines", "4-thread overlock rigs", "Kansai stitch machines"],
        future: "Upgrading layout with Computer-Aided Design (CAD) apparel software nodes.",
        image: null
      },
      {
        name: "Textile Testing & Quality Control Lab",
        location: "Room 1202, 12th Floor",
        details: "Dedicated to assessing physical and chemical properties of yarn and fabrics, including moisture levels, yarn count, and fabric thickness.",
        equipment: ["Yarn count testers", "Fabric thickness meters", "GSM test balances", "Color fastness to rubbing units (Greyscale cards)"],
        future: "Installing automatic printing devices and advanced chemical analysis apparatus.",
        image: null
      }
    ]
  },
  {
    id: "sciences",
    name: "Chemistry & Physics Labs",
    short: "Sciences",
    count: "2 Labs",
    accent: "emerald",
    themeClass: "from-emerald-500/10 to-teal-500/5 border-emerald-500/15 dark:border-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: FlaskConical,
    tagline: "Essential laboratories facilitating fundamental experiments in mechanics, optics, heat, and organic chemistry.",
    labs: [
      {
        name: "Chemistry & Physics Lab",
        location: "Room 1404, 14th Floor",
        details: "A combined basic sciences facility supporting student practical applications in physics and chemistry. Equipped with emergency safety accessories.",
        equipment: ["Measuring flasks & burettes", "Titration setups", "Optics benches & prisms", "Emergency wash basins"],
        future: "Addition of spectrophotometry units and high-precision digital balances.",
        image: null
      }
    ]
  }
];
