export interface EduQualification {
  degree: string;
  institute: string;
  year: string;
}

export interface JobExperience {
  institute: string;
  designation: string;
  duration: string;
}

export interface Teacher {
  name: string;
  title: string;
  dept: string;
  deptName: string;
  email: string;
  office: string;
  phd: string;
  interests: string[];
  imgUrl: string;
  profileUrl: string;
  education?: EduQualification[];
  experience?: JobExperience[];
  publications?: string[];
  ongoingResearch?: string[];
}

export const teachersData: Teacher[] = [
  {
    "name": "Md. Najmul Huda",
    "title": "Head of the Department & Assistant Professor",
    "dept": "english",
    "deptName": "Department of English",
    "email": "md.najmul.huda@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/V2ahXVjNDV7ghRJZyUEN.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-najmul-huda",
    "education": [
      {
        "degree": "M.Phil",
        "institute": "Jahangirnagar University",
        "year": "Continuing"
      },
      {
        "degree": "M.A. in English Studies",
        "institute": "Jahangirnagar University",
        "year": "2017"
      },
      {
        "degree": "H.S.C.",
        "institute": "B.A. Green Heart College",
        "year": "2008"
      },
      {
        "degree": "S.S.C.",
        "institute": "Mirpur Bangla High School",
        "year": "2006"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars",
        "designation": "Coordinator & Lecturer",
        "duration": "2021-2022"
      },
      {
        "institute": "A.C.I. Limited",
        "designation": "Sr. Finance Coordination Executive",
        "duration": "2017-2020"
      }
    ],
    "publications": [
      "The Ineluctable Chords of Forty and Ella’s Journey from Nausea to Madhab-i-Ishq to Eudaimonia: Prismatic Effects of Elif Shafak’s The Forty Rules of LoveAbstract:Elif Shafak’s novella, The Forty Rules of Love, published in March 2009, explores the identity of one’s existence through a spiritual transformation. Sufi mysticism, which Ella has discovered, transports her on an adventurous and exotic voyage of life. In this incredibly positive tale, a sense of belonging and purpose in one’s life is instilled in the mind of the readers. A jar of Love will never be able to contain or define Love. Everything about it is limitless and brimming with Rahma (mercy). It is a narrative of a lost soul discovering serenity in Love, exploring the meaning of life, and re-inventing why she is still living. The recompensation for every annihilation is a cleansing of the soul, according to Sufism. Through the prism of Sufism, this paper seeks to understand Ella’s transition from Nausea to Madhab-i-Ishq to Eudaimonia and to bridge several of Tabrizi’s rules with Islamic beliefs and understanding.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Engr. Md. Ahsan Arif",
    "title": "Head of the Department and Associate Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "md.ahsan.arif@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/z72IAzEtehJvH70k49zq.png",
    "profileUrl": "https://ius.edu.bd/profile/engr.-md.-ahsan-arif",
    "education": [],
    "experience": [
      {
        "institute": "Associate Professor & HEAD",
        "designation": "University of Scholars",
        "duration": "October 2021- till date"
      },
      {
        "institute": "Associate Professor & HEAD",
        "designation": "AUB",
        "duration": "2019- OCT 2021"
      },
      {
        "institute": "Associate Professor",
        "designation": "AUB",
        "duration": "2017-2019"
      },
      {
        "institute": "Assistant Professor & Director IT-cum-Advisor, Digital Marketing",
        "designation": "AUB",
        "duration": "2016-2017"
      },
      {
        "institute": "Assistant Professor & Director IT",
        "designation": "AUB",
        "duration": "2015-2016"
      },
      {
        "institute": "Assistant Professor",
        "designation": "AUB",
        "duration": "2010-2015"
      },
      {
        "institute": "Senior Lecturer",
        "designation": "AUB",
        "duration": "2008-2010"
      },
      {
        "institute": "Lecturer & DBA",
        "designation": "AUB",
        "duration": "2005-2008"
      },
      {
        "institute": "Adjunct Faculty",
        "designation": "ASAUB",
        "duration": "--"
      },
      {
        "institute": "Adjunct Faculty",
        "designation": "SU",
        "duration": "--"
      },
      {
        "institute": "Adjunct Faculty",
        "designation": "PU",
        "duration": "--"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "SM Nahidul Islam",
    "title": "Head of the Department and Senior Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "sm.nahidul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/X0yfNgICHDJv8zIFXSme.png",
    "profileUrl": "https://ius.edu.bd/profile/sm-nahidul-islam",
    "education": [
      {
        "degree": "PhD",
        "institute": "Jagannath University",
        "year": "On going"
      },
      {
        "degree": "MBA",
        "institute": "Islamic University",
        "year": "3.92"
      },
      {
        "degree": "BBA",
        "institute": "Islamic University",
        "year": "3.98"
      },
      {
        "degree": "HSC",
        "institute": "Dumuria College",
        "year": "5.00"
      },
      {
        "degree": "SSC",
        "institute": "Gutudia High School",
        "year": "5.00"
      }
    ],
    "experience": [
      {
        "institute": "Senior Assistant Professor",
        "designation": "University of Scholars (IUS)",
        "duration": "February 01, 2025 to present"
      },
      {
        "institute": "HOD of DBA",
        "designation": "University of Scholars (IUS)",
        "duration": "October 6, 2023, to present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars (IUS)",
        "duration": "October 01, 2021, to January 31, 2025"
      },
      {
        "institute": "MBA Course Coordinator",
        "designation": "University of Scholars (IUS)",
        "duration": "29 November 2019 to October 5, 2023"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "July 17, 2018, to September 30, 2021"
      }
    ],
    "publications": [
      "Hasan, M.B., Islam, S.N., and Wahid, A.N.M. (2018). The Effect of Macroeconomic Variables on The Performance of Non-Life Insurance Companies in Bangladesh. Indian Economic Review, 53(1-2), 369-383.",
      "Hasnat,M.A., Khandakar, H., Rahman, M. A., Islam, S.N., & Hasan, K.K. (2025). Capitalism in modern ignorance (jahilliyah): exploring Islamic alternatives to reshape human behaviour and provide solutions for the 21st century. International Journal of Islamic and Middle Eastern Finance and Management. https://doi.org/10.1108/IMEFM-08-2024-0393",
      "Islam, S.N., Ali, M.J., and Wafik, H. A. (2019). Determinants of Deposit Mobilization of Private Commercial Banks: Evidence from Bangladesh. International Journal of Business and Management Invention (IJBMI), 8(10), 26-33.",
      "Islam, S.N., Amin, M.R., and Molla, S.M. (2019). The impact of banking sector financial performance on the economic growth in Bangladesh. International Journal of Finance and Commerce, 1(3), 23-27.",
      "Gazi, M.A.I., Alam, M.S., Hossain, G.A., Islam, S.N., Rahman, M.K., Nahiduzzaman, M., and Hossain, A.I. (2021). Determinants of Profitability in Banking Sector: Empirical Evidence from Bangladesh. Universal Journal of Accounting and Finance, 9(6), 1377-1386.",
      "Islam S. N., Mishad N., Kalam F. A. \"Factors affecting Banks’ selection by depositors: A Study in Bangladesh\" . International Journal of Commerce and Management Research, Volume 10, Issue 2, 2024, Pages 61-65",
      "Rana, M. S., Sharmin, S., & Islam, S.N. (2025). Factors Influencing Purchase Intention in Digital Marketing: A Thematic Analysis. International Journal of Management and Digital Business, 4(1), 32–46.",
      "Hasnat, M. A., Shamim, M. M. I., Islam, S. N., Aubhi, R. U. H., Auntick, N. N.,  Khandakar, H., Rahimi, Z., Chowdhury, R & Hasan, K. K. (2025). The role of business education in creating entrepreneurial intention in public and private universities of Bangladesh. Cogent Education, 12(1), 2514333."
    ],
    "ongoingResearch": []
  },
  {
    "name": "M.M. Fazle Rabbi",
    "title": "Assistant Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "m.m.fazle.rabbi@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/GgjL0GhoB8DntazgKUAJ.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/m.m.-fazle-rabbi",
    "education": [
      {
        "degree": "MSc in Computer Science",
        "institute": "University of Bedfordshire, Luton, Beds, UK",
        "year": "2010-2011"
      },
      {
        "degree": "Bachelor of Science (Honors) in Computer Information Systems (CIS)",
        "institute": "University of Windsor, Windsor, Ontario, Canada",
        "year": "2000-2004"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka Board",
        "year": "1997"
      },
      {
        "degree": "SSC",
        "institute": "Dhaka Board",
        "year": "1995"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars (IUS)",
        "duration": "October 2024–Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "Bangladesh University of Business & Technology (BUBT)",
        "duration": "Oct 2018– Present"
      },
      {
        "institute": "Lecturer",
        "designation": "Bangladesh University of Business & Technology (BUBT)",
        "duration": "July 2013–Oct 2018"
      },
      {
        "institute": "Lecturer",
        "designation": "Royal Institute of Management, Dhaka",
        "duration": "Jan 2013-May 2013"
      },
      {
        "institute": "Consultant",
        "designation": "Harvest International School, Dhaka",
        "duration": "Jun 2024-Jun 2025"
      }
    ],
    "publications": [
      "1.Reza, H., Islam Tareq, N., M. M. Fazle Rabbi, Arfin Tanim, S., & Mamun Rudro, R.A. Acute lymphoblastic leukemia diagnosis and subtype segmentation in blood smears using CNN and U-Net. Indonesian Journal of Electrical Engineering and Computer Science, 38(2), 950-959 (2025)http://doi.org/10.11591/ijeecs.v38.i2.pp950-959",
      "2. Shiekh Rahmatullah Sakib, Kamarun Nahar Sara, Md. Anisul Islam & M. M. Fazle Rabbi, Advanced Hybrid Deep Learning Model for Precise Multiclass Classification of Bone Marrow Cancer Cells, Data-Driven Clinical Decision-Making Using Deep Learning in Imaging. Studies in Big Data, vol 152. Springer,https://doi.org/10.1007/978-981-97-3966-0_5",
      "3.  Md Basitur Rahman Bappi; S M Masfequier Rahman Swapno; M M Fazle Rabbi, Skin Cancer Disease Detection Using MCD-GRU: A Deep Learning Approach, International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT) Publisher: IEEE, 2-4 May 2024.https://doi.org/10.1109/ICEEICT62016.2024.10534421",
      "4. Md. Akbar Hossain;Ashifur Rahman; M. M. Fazle Rabbi, COVID EmotionNet: A Machine Learning Approach to Unraveling Pandemic Sentiments, 2024 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT), Year: 2024 | Conference Paper | Publisher: IEEE,https://doi.org/10.1109/ICEEICT62016.2024.10534477",
      "5. B. M. Shadman Sakib Mahee, M. M. Fazle Rabbi, Tasnuba Khanom, Sanu Akter, Nusrat Jahan Usha & Md. Rabby Hasan, Employing the ResNet50 and InceptionV3 Models for the Detection of Diseases in Both Strawberry Leaves and Fruit ,pp 499–509, 17 October 2024,https://doi.org/10.1007/978-981-97-3937-0_34",
      "6. Anisur Rahman Mahmud, Md. Mubtasim Fuad, Md. Jahid Hasan, Md. Minhazur Rafid, Md. Eusuf Khan, M. M. Fazle Rabbi, A Review on Emotion Detection from Text: Opportunities and Challenges,17 October 2024, pp 17–31, TEHI 2023. Lecture Notes in Networks and Systems, vol 1034. Springer,https://doi.org/10.1007/978-981-97-3937-0_2",
      "7.  Md. Reazul Islam, Arman Hossain, Sayefa Arafah, M. M. Fazle Rabbi & Khondokar Oliullah, A Portable Diagnostic and Medication System for Rural Areas Using IoT, pp 671–685, International Conference on Trends in Electronics and Health Informatics, 2023, Springer,https://doi.org/10.1007/978-981-97-3937-0_46",
      "8. Md. Basitur Rahman Bappi, S. M. Masfequier Rahman Swapno & M. M. Fazle Rabbi, Deploying DenseNet for Cotton Leaf Disease Detection on Deep Learning, pp 485–498, Proceedings of Trends in Electronics and Health Informatics. TEHI 2023. Lecture Notes in Networks and Systems, vol 1034. Springer,https://doi.org/10.1007/978-981-97-3937-0_33",
      "9. Md Basitur Rahman Bappi, S. M. Masfequier Rahman Swapno, Sumiya Akhter & M. M. Fazle Rabbi, Deploying Hybrid VGG19-BiGRU Model for Kidney Disease Segmentation, Intelligent Systems and Applications. IntelliSys 2024. Lecture Notes in Networks and Systems, vol 1068. Springer, Cham.https://doi.org/10.1007/978-3-031-66336-9_4",
      "10. Md. Mehedi Hassan; Md. Asif Rakib Khan; Khan Kamrul Islam; Md. Mahedi Hassan; M.M. Fazle Rabbi, “Depression Detection system with Statistical Analysis and Data Mining Approaches”, IEEE Xplore, December 2021.https://doi.org/10.1109/ICSCT53883.2021.9642550",
      "11. Md. Atiqur Rahman , M.M. Fazle Rabbi, Md. Mijanur Rahman; Md. Masudul Islam; Md. Rashedul Islam, “Histogram modification based lossy image compression scheme using Huffman coding”, IEEE Xplore, Page: 279, January, 2019,https://doi.org/10.1109/CEEICT.2018.8628092"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Faisal Bin Alam",
    "title": "Head of the Department and Associate Professor",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "faisal.bin.alam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/ZSnVOtFR7yKVQHLyFGfn.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/faisal-bin-alam",
    "education": [
      {
        "degree": "Ph.D. Fellow",
        "institute": "University of Twente",
        "year": "Continuing"
      },
      {
        "degree": "Post Graduate Diploma",
        "institute": "Nyenrode Business University",
        "year": "2015"
      },
      {
        "degree": "Master of Business Administration",
        "institute": "Dhaka University",
        "year": "2013"
      },
      {
        "degree": "Bachelor of Science in Textile Technology",
        "institute": "Bangladesh University of Textiles",
        "year": "2007"
      },
      {
        "degree": "Higher Secondary Certificate (HSC)",
        "institute": "Notre Dame College",
        "year": "2003"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Kurmitola High School",
        "year": "2001"
      }
    ],
    "experience": [
      {
        "institute": "Associate Professor",
        "designation": "University of Scholars",
        "duration": "May 2021 to till date"
      },
      {
        "institute": "Assistant Professor",
        "designation": "BGMEA University of Fashion & Technology(Textile Engineering & Management)",
        "duration": "Oct 2017 to Oct 2020"
      },
      {
        "institute": "Assistant Professor",
        "designation": "BGMEA University of Fashion & Technology(Textile Engineering)",
        "duration": "Oct 2015 to Sept 2017"
      },
      {
        "institute": "Senior Lecturer",
        "designation": "BGMEA University of Fashion & Technology",
        "duration": "Sept 2013 to Sept 2015"
      },
      {
        "institute": "Lecturer",
        "designation": "Atish Dipankar University of Science & Technology",
        "duration": "Jan 2011 to Aug 2013"
      },
      {
        "institute": "Officer",
        "designation": "Dulal Brothers Limited",
        "duration": "Sept 2008 to Dec 2010"
      }
    ],
    "publications": [
      "Alam, F. (2014). Green Practice in Textile and Apparel Production. BUFT Journal. Vol 2: 99-105",
      "Alam, F. (2016). Developing Equation between Count and GSM for a Plain Single Jersey Fabric. International Journal of Advanced Research & Review. Vol.1, Issue.9",
      "Alam, F. (2017). Comparative Analysis on Physical Effects of using Elastane on Cotton and CVC Single Jersey Fabric. Imperial Journal of Interdisciplinary Research, 3(9).",
      "Alam, F. (2017). Spirality and Shrinkage Problems Associated with Loose Knit Plain Single Jersey Cotton Fabrics; Advance Research Journal of Multidisciplinary Discoveries.17.0, C4(2017):16-19.",
      "Alam, F. & Santo M. (2018). Comparative Performance Evaluation on Different Brands of Knitting Lubricant; International Journal of Engineering Science Invention (IJESI). Vol7, Issue 8: 76-80;",
      "Alam, F. & Hasan F. (2018). How to Reduce Production Cost of Sizing; International Journal of Scientific & Engineering Research Volume 9, Issue 8, August 2018: 819-829",
      "Alam, F. & Hasan M. (2018). Analysis on SMV to Increase Productivity in Sewing Section: A Case Study on T-Shirt Manufacturing in Bangladesh; International Journal of Research in Engineering and Science (IJRES). Vol 6, Issue 8: 18-24",
      "Alam, F. & Hossain M. (2018). Conservation of Water Resource in Textile and Apparel Industries; IOSR Journal of Polymer and Textile Engineering (IOSR-JPTE). Vol 5, Issue 5: 11-14"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Abdul Hasib Siddique",
    "title": "Associate Professor",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "abdul.hasib.siddique@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/cHGubZCcyjrbcmtRz3zy.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abdul-hasib-siddique",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Arik Morshed",
    "title": "Associate Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "arik.morshed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/j8v2hWHsTWZOFQ1x1iVQ.jpg",
    "profileUrl": "https://ius.edu.bd/profile/arik-morshed",
    "education": [
      {
        "degree": "DBA",
        "institute": "European Institute of Applied Science and Management",
        "year": "Ongoing"
      },
      {
        "degree": "Diploma",
        "institute": "The Anatolia American University",
        "year": "2025"
      },
      {
        "degree": "Master of Business Administration (MBA)",
        "institute": "Lakehead University, Canada",
        "year": "1995"
      },
      {
        "degree": "Bachelor of Business Administration (BBA)",
        "institute": "Humber College, Canada",
        "year": "1993"
      },
      {
        "degree": "HSC",
        "institute": "Sylhet Cadet College, Bangladesh",
        "year": "1989"
      },
      {
        "degree": "SSC",
        "institute": "Sylhet Cadet College, Bangladesh",
        "year": "1987"
      }
    ],
    "experience": [
      {
        "institute": "The Aero Vision Bangladesh Ltd",
        "designation": "CEO",
        "duration": "1998 - Till Date"
      },
      {
        "institute": "Consulate of Lao PDR- Bangladesh",
        "designation": "Honorary Consul",
        "duration": "2016 - Till Date"
      },
      {
        "institute": "American International University Bangladesh (AIUB)",
        "designation": "Faculty Member",
        "duration": "1997 - 1999"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Shaiyek Md. Buland Taslim",
    "title": "Head of the Department and Assistant Professor",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "shaiyek.md.buland.taslim@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/3ezS1WZFFpho1GgbbHf2.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shaiyek-md.-buland-taslim",
    "education": [
      {
        "degree": "M.Sc in Electric Power Engineering",
        "institute": "KTH, The Royal Institute of Technology, Stockholm, Sweden",
        "year": "October 2014"
      },
      {
        "degree": "B.Sc in Electrical & Electronic Engineering",
        "institute": "American International University-Bangladesh (AIUB)",
        "year": "May 2008"
      },
      {
        "degree": "A-Level’s",
        "institute": "London Board Edexcel International",
        "year": "June 2004"
      },
      {
        "degree": "O-Level’s",
        "institute": "London Board Edexcel International",
        "year": "January 2001"
      }
    ],
    "experience": [
      {
        "institute": "The International University of Scholars",
        "designation": "Assistant Professor & HoD of EEE",
        "duration": "March 15, 2022"
      },
      {
        "institute": "Primeasia University",
        "designation": "Assistant Professor",
        "duration": "June 2017- 14 March 2022"
      },
      {
        "institute": "BESTTEX INTERNATIONAL",
        "designation": "Operations Executive",
        "duration": "September 2016 - May 2017"
      },
      {
        "institute": "Graduate Research Assistant, KTH and ABB",
        "designation": "Research Assistant",
        "duration": "October 2013 – October 2014"
      }
    ],
    "publications": [
      "“Producingelectricity from geothermal energy”, DOI:10.1109/EEEIC.2011.5 874669, 13 June 2011, IEEEAuthors: Shaikh Md. Rubayiat Tousif & Shaiyek Md. Buland TaslimPublished on Environment and Electrical Engineering (EEEIC), 2011 10th International ConferenceAbstract:This work emphasis on producing electricity from geothermal energy. The paper talks about geothermal energy and also focuses on geothermal power plant and the basic operation of such a plant. It also focuses on issues like the potential, environmental impacts and generation capacity of geothermal power plant. It provides ample information which justifies why this method of producing electricity can be a primary choice in near future.Details - (link)",
      "“Hybrid Power System Model for Off-Grid Rural Areas of Bangladesh”, 978- 1-7281-0174-3/19/$31.00 ©2019 IEEE, 30th – 31st January, 2019, IEEEAuthors: Rajib Baran Roy, Enamul Basher, Shaiyek Md. Buland Taslim, Md. Altaf HossainPublished on International Conference on Electrical, Communications, Electronics, Instrumentation and Computing (ICECEIC-2019)",
      "“Investigation of suitability of operating frequency and electro technical modeling of microwave oven”, DOI:10.1109/EEEIC.2011.5 874745, 13 June 2011, IEEEAuthors: Shaikh Md. Rubayiat Tousif & Shaiyek Md. Buland TaslimPublished on 2011 10th International Conference on Environment and Electrical EngineeringAbstract:This paper is about electro-technical modeling of microwave oven. The aim of the work is to investigate the suitability of the operating frequency and to investigate why food which has been warmed in a microwave oven often requires a non-uniform temperature distribution. This would be done by making an electromagnetic model that determines the field distribution and the heat transfer to the food, as well as a thermal model that describes the heat transfer between different parts of the food.Details - (link)",
      "“Extractionof Characteristics Quantities and Electro-Technical Modeling of Electrodynamic Direct Radiator Loudspeaker”, Volume 2, Issue 12, December-2011, ISSN 2229-5518, November 2011, IJSERAuthors: Shaiyek Md. Buland Taslim, Shaikh Md. Rubayiat Tousif, Md. Asiqur Rahman, Shauk Muntaha Murshid Khan, Noor Ehteshamul Azad, Md. Shahnewaz BhuiyanPublished on International Journal of Scientific & Engineering ResearchAbstract:This paper documents a comprehensive study of loudspeaker modeling to propose such a model that could be used for dimensioning the driver element of an electrodynamic direct radiator loudspeaker system. A lumped-parameter model for such a driver element mounted in an infinite baffle is presented after being derived from careful consideration of the physical principles related to the electro-mechano-acoustic transduction mechanism of the driver element under inspection. Different characteristics quantities such as resonance frequency, Q-number, acoustic efficiency at maximum radiated sound power, frequency response and electrical impedance were extracted from the models representing the loudspeaker driver elements of diameter 8”, 16”and 32”. Subsequently the outcomes were compared and their behaviors verified with the help of extensive simulation results.Details - (link)",
      "“Tidal Power: An Effective Method of Generating Power”, Volume 2, 5, May 2011, IJSERAuthors: Shaikh Md. Rubayiat Tousif & Shaiyek Md. Buland TaslimPublished on International Journal of Scientific & Engineering ResearchAbstract:This article is about tidal power. It describes tidal power and the various methods of utilizing tidal power to generate electricity. It briefly discusses each method and provides details of calculating tidal power generation and energy most effectively. The paper also focuses on the potential this method of generating electricity has and why this could be a common way of producing electricity in the near futureDetails - (link)",
      "“Fuzzy Logic based Matrix Converter Controlled Induction Motor Drive”, IEEEAuthors: Rajib Baran Roy, Jerome Cros, Enamul Basher, Shaiyek Md. Buland TaslimPublished on International Humanitarian Technology Project Competition (IHTPC-IEEE R10HTC 2017)Abstract:In terms of efficiency, lifetime, compactness and unity power factor operation, the matrix converter is far better than the conventional converter. The conventional control topology based converter is not suitable for efficient speed control of induction motor by direct torque control system. The fuzzy controller based matrix converter can be a suitable option for efficient speed control of induction motor by direct torque mechanism. The mathematical model of switching algorithm of matrix converter as well as power and fuzzy logic controller are designed by modified venturini algorithm and mandani rule. The performance of the proposed fuzzy controller based matrix converter drive is first evaluated by simulated model by using Matlab Simulink. A laboratory setup comprising of DSP and FPGA control based matrix converter drive is used to validate the simulation results of the simulated model. From both simulated and experimental results, the efficient and stable control of torque of induction motor with distortion less output current and less THD (total harmonic distortion) in output voltage can be obtained.Details - (link)",
      "“ANovel Algorithm with a New Form of Adaptive Modulation for Mobile WiMAX Performance Improvement”, ISBN 978- 89-5519-154-7, Feb.13~16, 2011Authors: Shaiyek Md. Buland Taslim, Shaikh Md. Rubayiat Tousif & Mohammad TareqPublished on ICACT2011Abstract:(WiMAX) Worldwide Interoperability for Microwave Access is a promising broadband wireless technology that promises high-speed data services. Mobile WiMAX is a broadband wireless solution that enables junction of mobile and fixed broadband networks through a common wide area broadband radio access technology and flexible network structural design. Mobile WiMAX is based on orthogonal frequency division multiplexing/ orthogonal frequency division multiplexing Access (OFDM/OFDMA) technology. It supports Adaptive Modulation and Coding in both downlink and uplink with variable packet size. This paper presents a new form of Adaptive Modulation (AM), which has the ability to improve the data rate of Mobile WiMAX OFDMA system especially at low SNR values, this new form of AM will combine together with the simplest Peak to Average Power ratio (PAPR) reduction technique, which is the clipping to produce a novel algorithm called Modulation adaptation and Clipping algorithm (MC) has the ability to improve the performance of Mobile WiMAX system through reducing the PAPR, improving the SER performance, and increasing the data rate.Details - (link)",
      "“An FPGA Based Digital Controller for AC Loads Utilizing Half and Full Wave Cycle Control”, Volume 1, December 2010 Edition, IJSERAuthors: Shaiyek Md. Buland Taslim & Shaikh Md. Rubayiat TousifPublished on International Journal of Scientific & Engineering ResearchAbstract:Voltage control for AC loads can be performed by controlling phase and cycles of AC voltages reaching load end. Cycle control tends to be more beneficial, as it reduces the amount of harmonic frequency in the circuit compared to phase control circuit. When a wave is passed in cycle control circuit, then either an entire half cycle or a complete full cycle is passed, hence eliminating the sharp change in the wave which is typical in phase control, causing harmonic frequency in the circuit. Cycle control is the most convenient process to control the output voltage for reducing RFI and this is the very approach that has been utilized in designing this project. This project utilized a voltage comparator to generate a digitized AC voltage and an SCR (Silicon Controlled Rectifier) to supply the required AC cycles to the load. The central controller was a digital controller, implemented in a Xilinx Spartan - 2 FPGA. The digital controller utilized a Finite State Machine (FSM) that took in digital AC signal and the desired percentage of load voltage. With this information it passed a certain number of half or full cycles to the load, at the same time ensuring that, number of these AC cycles satisfied users percentage requirement. The digital controller was modeled in VHDL (Hardware Description Language), synthesized with XST tool, placed and routed in a Xilinx Spartan- 2 FPGA (xc2S50 – pq208) in Xilinx ISE 9.1i WebPack design environment. The placed and routed designed was implemented in the Pegasus FPGA board from Digilent containing the above mentioned FPGA. The simulations and the outputs of the implemented hardware accorded with the expected outputs.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Md Khayrul Islam",
    "title": "Associate Professor",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "md.khayrul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/8xNxj4k9aZcT8wdb69XI.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md-khayrul-islam",
    "education": [
      {
        "degree": "Ph.D",
        "institute": "Dhaka University of Engineering & Technology",
        "year": "Ongoing"
      },
      {
        "degree": "M.Sc.",
        "institute": "Mawlana Bhashani Science and Technology University (MBSTU).",
        "year": "2018"
      },
      {
        "degree": "B.Sc.",
        "institute": "Bangabandhu Textile Engineering College, (Affiliated by University of Dhaka -DU)",
        "year": "2011"
      },
      {
        "degree": "Diploma in Textile Engineering",
        "institute": "Pabna Textile Institute, Pabna.",
        "year": "2006"
      },
      {
        "degree": "SSC",
        "institute": "Kamalpur High School, Sujanagar, Pabna.",
        "year": "2002"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars (IUS)",
        "duration": "08/05/2019 - Present"
      },
      {
        "institute": "Lecturer",
        "designation": "Sonargaon University (SU)",
        "duration": "05/05/2016 - 31/12/2018"
      },
      {
        "institute": "Assistant Professor",
        "designation": "BCMC College of Engineering and Technology, Jessore",
        "duration": "02/02/2015 - 30/04/2016"
      },
      {
        "institute": "Executive",
        "designation": "SQ Hues Ltd. (SQ Group)",
        "duration": "15/08/2011 - 31/01/2015"
      },
      {
        "institute": "Asst. Executive",
        "designation": "RK Spinning mills ltd., Godnyle, Narayangonj",
        "duration": "01/01/2007 - 31/12/2007"
      }
    ],
    "publications": [
      "Md. Khayrul Islam, Shekh Md. Mamun Kabir, Md. Dulal Hosen, Md. Azharul Islam* Fastness Properties Improvement of Fluorescent Pigments. [ Vlakna a Textil, Scopus, and Q3 indexed; already accepted and waiting for final publishing]",
      "Shekh Md. Mamun Kabir, Ph.D., Rezaul Karim, BSc, Khayrul Islam, BSc.; A comparative study on Dyeing properties of Hemp and Cotton fiber. European Scientific Journal November 2017 edition Vol.13, No.33 ISSN: 1857 – 7881 (Print) e - ISSN 1857- 7431; DOI: 10.19044/esj. 2017.v13n33p378",
      "Shekh Md. Mamun Kabir, Rezaul Karim and Md. Khayrul Islam; Mechanical properties of Jute hybrid epoxy composites and its application in car panels., Sonargaon University Journal, Vol.2. No. 1 Print",
      "Md. Khayrul Islam, Md. Israil Hossain, Md. Azharul Islam, Rothy Shaha; Effect of Functional Groups of Reactive Dyes on the Dyeing Properties of Cotton Knit Fabric. [Second Review going on]"
    ],
    "ongoingResearch": []
  },
  {
    "name": "A K M Monzurul Islam",
    "title": "Assistant Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "a.k.m.monzurul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/mE8OXp9oPRXFLKGvZJQF.jpg",
    "profileUrl": "https://ius.edu.bd/profile/a-k-m-monzurul-islam",
    "education": [
      {
        "degree": "MBA in MIS",
        "institute": "World University of Bangladesh",
        "year": "2009"
      },
      {
        "degree": "M.Sc in CSE",
        "institute": "Bangalore University",
        "year": "2002"
      },
      {
        "degree": "B.Sc in CSE",
        "institute": "Bangalore University",
        "year": "2000"
      },
      {
        "degree": "HSC",
        "institute": "Khulna Public College",
        "year": "1995"
      },
      {
        "degree": "SSC",
        "institute": "Khulna Public College",
        "year": "1993"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Professor and Head of Department (Natural Science)",
        "designation": "University of Scholars (IUS)",
        "duration": "September 2020 to Date"
      },
      {
        "institute": "Adjunct Faculty (CSE Department)",
        "designation": "Independent University Bangladesh (IUB)",
        "duration": "September 2016 to Date"
      },
      {
        "institute": "Manager",
        "designation": "Europa Group",
        "duration": "January 2015 to August 2017."
      },
      {
        "institute": "Senior IT Executive",
        "designation": "MGH Group",
        "duration": "January 2010 to December 2014."
      },
      {
        "institute": "Lecturer",
        "designation": "Atish Dipankar University of Science & Technology",
        "duration": "September 2005 to December 2009"
      },
      {
        "institute": "Lecturer",
        "designation": "World University of Bangladesh",
        "duration": "April 2004 to August 2005"
      },
      {
        "institute": "Instructor",
        "designation": "Gateway Education",
        "duration": "February 2003 to March 2004"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Salma Ainy",
    "title": "Visiting Professor",
    "dept": "english",
    "deptName": "Department of English",
    "email": "salma.ainy@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/IdZ5SBi4WqdN424eT1HT.jpg",
    "profileUrl": "https://ius.edu.bd/profile/salma-ainy",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Prof. Dr. Rashed Chowdhury",
    "title": "Acting Pro-Vice Chancellor (Professor & Dean , DBA)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "rashed.chowdhury@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/j2vXSXjbQ7KEqSG5i3cH.jpg",
    "profileUrl": "https://ius.edu.bd/profile/prof.-dr.-rashed-chowdhury",
    "education": [
      {
        "degree": "Ph.D",
        "institute": "UNIRAZAK, Malaysia",
        "year": ""
      },
      {
        "degree": "MBA",
        "institute": "Webster University, USA",
        "year": "3.83"
      },
      {
        "degree": "BBA",
        "institute": "Webster University, USA",
        "year": "3.86"
      }
    ],
    "experience": [
      {
        "institute": "Acting Pro-Vice Chancellor",
        "designation": "University of Scholars (IUS)",
        "duration": "2026 - Currently"
      },
      {
        "institute": "Professor & Dean",
        "designation": "University of Scholars (IUS)",
        "duration": "2024 - 2026"
      },
      {
        "institute": "Country Director",
        "designation": "Canadian Institute of Global Learning",
        "duration": "2019 - Current"
      },
      {
        "institute": "Dean",
        "designation": "University of South Asia",
        "duration": "2017 - 2019"
      },
      {
        "institute": "Adjunct Associate Professor",
        "designation": "Suan Dusit University, Bangkok",
        "duration": "2014 - 2016"
      },
      {
        "institute": "Chairman, Faculty of Business",
        "designation": "Green university of Bangladesh",
        "duration": "2012 - 2014"
      },
      {
        "institute": "Head of Departments (Marketing, HRM, Management, International Business and Hotel and tourism)",
        "designation": "American International University, Bangladesh, AIUB",
        "duration": "2005 - 2011"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mamoon Al Rasheed",
    "title": "Associate Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "mamoon.al.rasheed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/xrFPU8LYu7Ka2UxOHdaj.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mamoon-al-rasheed",
    "education": [
      {
        "degree": "Masters",
        "institute": "University of Dhaka, Bangladesh",
        "year": "2007"
      },
      {
        "degree": "Bachelors",
        "institute": "City University of New York, USA",
        "year": "2001"
      }
    ],
    "experience": [
      {
        "institute": "Associate Professor",
        "designation": "University of Scholars",
        "duration": "Jan 2023 - Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "State University of Bangladesh",
        "duration": "Oct 2015 - Dec 2022"
      },
      {
        "institute": "Senior Lecturer",
        "designation": "State University of Bangladesh",
        "duration": "Mar 2009 - Sept 2015"
      },
      {
        "institute": "Lecturer",
        "designation": "State University of Bangladesh",
        "duration": "Oct 2006 - Feb 2009"
      },
      {
        "institute": "Community Outreach Advisor",
        "designation": "Resource Integration Centre (RIC)",
        "duration": "Feb 2004 - Sept 2006"
      },
      {
        "institute": "Service Solutions Consultant",
        "designation": "Computeq Group Inc., New York, USA",
        "duration": "Jul 2001 - Jan2004"
      },
      {
        "institute": "Specialist, Automated Night-Audit and Front-office Operations",
        "designation": "Boutique Hospitality Management, New York, USA",
        "duration": "Aug 1997 - Dec 2000"
      }
    ],
    "publications": [
      "Adept translator of works by renowned authors into Bengali -notably essays by Jaron Lanier, Eben Moglen, Noam Chomsky, Slavoj Zizek, Michael Harrington and Samir Amin among others.",
      "Moderator and discussant in sessions on social media with experts from different fields of academia."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Prof. Dr. Md. Mamunur Rashid",
    "title": "Professor & Dean of Engineering",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.mamunur.rashid@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/G0J4Snv40cD0eVIoXhqk.jpg",
    "profileUrl": "https://ius.edu.bd/profile/prof.-dr.-md.-mamunur-rashid",
    "education": [
      {
        "degree": "Ph.D.",
        "institute": "Kyushu University, Japan",
        "year": "1994"
      },
      {
        "degree": "M.Sc.",
        "institute": "Dhaka University",
        "year": "1979"
      },
      {
        "degree": "B.Sc.",
        "institute": "Dhaka University",
        "year": "1977"
      },
      {
        "degree": "H.S.C.",
        "institute": "Dhaka Board",
        "year": "1974"
      },
      {
        "degree": "S.S.C.",
        "institute": "Dhaka Board",
        "year": "1972"
      }
    ],
    "experience": [
      {
        "institute": "Scientific Officer",
        "designation": "Bangladesh Atomic Energy Commission",
        "duration": "07/07/1983 – 30/06/1987"
      },
      {
        "institute": "Senior Scientific Officer",
        "designation": "Bangladesh Atomic Energy Commission",
        "duration": "01/0719/87 – 24/04/1995"
      },
      {
        "institute": "Principal Scientific Officer",
        "designation": "Bangladesh Atomic Energy Commission",
        "duration": "25/04/1995 – 28/02/2005"
      },
      {
        "institute": "Chief Scientific Officer",
        "designation": "Bangladesh Atomic Energy Commission",
        "duration": "01/03/2005- 30/05/2015"
      },
      {
        "institute": "Professor, C.S.E.",
        "designation": "University of South Asia",
        "duration": "01/03/2017 - 14/09/2018"
      },
      {
        "institute": "Professor, E.E.E.",
        "designation": "University of Scholars",
        "duration": "15/09/2018 - Present"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Dr. Rowsanara Akhter",
    "title": "Associate Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "rowsanara.akhter@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/MBQhYPAILFxVkOKEVDiy.jpg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-rowsanara-akhter",
    "education": [
      {
        "degree": "Ph. D",
        "institute": "Jahangirnagar University",
        "year": "2014"
      },
      {
        "degree": "M. Phil",
        "institute": "Bangladesh University of Engineering and Technology",
        "year": "2009"
      },
      {
        "degree": "M. Sc.",
        "institute": "Jahangirnagar University",
        "year": "2000"
      },
      {
        "degree": "B. Sc.",
        "institute": "Jahangirnagar University",
        "year": "1999"
      },
      {
        "degree": "HSC",
        "institute": "Gazipur Mohila College",
        "year": "1996"
      },
      {
        "degree": "SSC",
        "institute": "Joydebpur Govt. Girls High School",
        "year": "1994"
      }
    ],
    "experience": [
      {
        "institute": "The International University of Scholars",
        "designation": "Associate Professor",
        "duration": "October 1st, 2022, to till now"
      },
      {
        "institute": "The International University of Scholars",
        "designation": "Assistant Professor",
        "duration": "March 01, 2019, to September 30, 2022"
      },
      {
        "institute": "The International University of Scholars",
        "designation": "Lecturer",
        "duration": "February 1, 2017, to February 28, 2019"
      },
      {
        "institute": "Haji Abul Hossain Institute of Technology",
        "designation": "Lecturer",
        "duration": "April 2, 2009, to February 1, 2012"
      },
      {
        "institute": "Model Institute of Science and Technology",
        "designation": "Lecturer",
        "duration": "September20, 2006, to April 1, 2009"
      }
    ],
    "publications": [
      "Rowsanara Akhter, Mohammad Mokaddes Ali, and Md Abdul Alim, Data analysis of thermal performance and irreversibility of convective flow in porous-wavy channel having triangular obstacle under magnetic field effect, Heliyon, 10,e34580, 2024  (Q1, IF- 3.4, Elsevier, Scopus Indexed).https://doi.org/10.1016/j.heliyon.2024.e34580",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, and Md Abdul Alim. Magnetic field impact on double diffusive mixed convective hybrid-nanofluid flow and irreversibility in porous cavity with vertical wavy walls and rotating solid cylinder. Results in Engineering, 19, 101292, (16 July 2023)https://doi.org/10.1016/j.rineng.2023.101292(Q2, Elsevier). IF: 5.0, ESCI and Scopus Indexed.Abstract:Mixedconvective heat transferdue to rotating surface has sustainable importance in improving cooling efficiency ofthermal engineeringequipment. In this investigation, hydromagnetic double diffusivemixed convectionin a wavyporous cavityfilled withhybrid nanofluidhaving rotating heat source is numerically studied. A solid cylindrical rotating heat source is positioned at the center of the wavy cavity. The fluid domain inside the cavity is heated from the rotating heat source and partially heated bottom wall. The governingpartial differential equationsare simulated usingfinite element method. The computational technique is validated performing rational comparisons. The results indicate that the pattern of streamlines circulation, isotherms and localentropy generationare significantly influenced with the rotating heat source. The flow velocity is observed increasing rapidly withcylinder rotationspeed which is maximized with increasing cavity porosity and permeability but minimized with magnetic field impact and amalgamating hybrid nanoparticles.Heat transfer enhancementis found increasing by 682.07% with rotating heat source for varyingDarcy number(Da = 10−4to 10−1) in absence of magnetic field (Ha= 0) which reduces to 504.02% in presence of magnetic field (Ha= 100). Moreover, 45.62%heat transferenhancement is achieved for varying of cavity porosity (ε = 0.3 to 0.9) which declines to 22.83% in presence of magnetic field (Ha= 100). In addition, 90.04% more heat transfer enhancement is estimated in hybrid nanofluid of 5% volume fraction than base fluid water. The entropy generations components are affected significantly with higher values of physical parameters. The Bejan number is found declining for all influential parameters studied. Accordingly, the study has significant impact on the controlling and optimizing of fluid flow and heat transfer in hybrid nanofluid filled improved designing and is applicable in improving the performance of thermal equipment such as high-performanceheat exchangers, electronic device cooling, energy storage systems, thermal mixing, space thermal management, crystal growth, float glass production, solidifications, solar technologies, and reactor safety devices, etc.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, Md. Motawakkel Billah, Md. Nasir Uddin, Hybrid-nanaofluid mixed convection in square cavity subjected to oriented magnetic field and multiple rotating rough cylinders, Results in Engineering, 18(101100)  2023.https://doi.org/10.1016/j.rineng.2023.101100(Q1, Elsevier). IF: 5.0,ESCI and Scopus Indexed.Abstract:In this study, mixed convective hybrid-nanofluid flow in a partially heatedsquare cavitywith two rotating roughcylindersin presence of anexternal magnetic fieldis numerically investigated. A pair of rotating rough cylinders is placed at different locations inside the cavity. The cavity is permeated by an external magnetic field at different inclination angles. Maxwell'sthermal conductivitymodel is modified incorporating Brownian motion of hybrid nanoparticles. The conservation equations of the flow and thermal fields are simulated usingfinite element method. The effects of different influential parameters such ascylinders rotationvelocity (0 ≤ ω ≤ 50), Hartmann number (0 ≤Ha≤50), hybrid nanoparticle volume fraction (0% ≤ φ ≤ 5%) and magnetic inclination angle (0° ≤ α ≤ 135°) on the flow and thermal fields are explored via streamlines, isotherms and bar charts ofaverage Nusselt number. The simulated results ensure that mixedconvective flowis accelerated with cylinders rotation speed but declines with highermagnetic field strengthand hybrid-nanoparticle volume fraction.Heat transfer enhancementis recorded up to 261.29% at highest rotating speed of rough cylinders (ω: 0–50, φ = 1%,Ha= 10). Enhancement ofheat transfer rateis found decreasing for increasing magnetic field strength. Lowest heat transfer rate is occurred at highest magnetic field impact (Ha= 50) which is 144.62% less than that of heat transfer in absence of magnetic field (Ha= 0). Optimum heat transfer is found for 5% hybrid nanoparticle volume fraction which is 101.2% more compared to base fluid water. The presence of triangular rough components accelerates the fluid flow and heat transfer rate significantly. In addition, 48.89% more heat transfer is obtained for rotating rough cylinders with triangular components compared to smooth cylinders. Moreover, maximum heat transfer is achieved at magnetic inclination angle of 90°. It is also observed that the flow and thermal fields strongly depend on the cylinders arrangements.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, and Md Abdul Alim. Entropy generation due to hydromagnetic buoyancy-driven hybrid-nanofluid flow in partially heated porous cavity containing heat conductive obstacle.Alexandria Engineering Journal, 62, 17-45, 2023 (Online 4 Aug 2022).(Q1, Elsevier).IF:6.8, SCIE Indexed.Abstract:Hydromagneticnatural convectionheat transfer in an improved designing has sustainable importance in high performance thermal equipment andgeothermal energysystems. This investigation explores the fluid flow andtemperature behavioursalong withentropy generationfor buoyancy driven flow ofhybrid nanofluidin a partially heated cavity saturated byporous mediumhaving heat conductive cylinder in presence ofexternal magnetic field.Effective thermal conductivitymodel is formulated based on Brownian motion of Cu and Al2O3nanoparticles. The developed governing equations are solved implementing Galerkinfinite element method. Results-based discussion is presented through streamlines, temperature contours,heat transfer rateand entropy generation tools, respectively. The results endorse that fluid flow and temperature and also local entropy generation are phenomenally influenced with higher buoyancy parameter but these impacts are correlated withmagnetic field strength, amount of hybrid nanoparticles and also cavity permeability. The heat transfer rate and average entropy generation components are increased with the increase inRayleigh numberand these trends are expedited with the increase in cavity porosity and volume fraction but reverse trend is found for magnetic field effect except magnetic-irreversibility. In addition, Bejan number is declined for increasing Rayleigh and Darcy numbers but increased for higher Hartmann number and amount of hybrid nanoparticles.Details - (link)",
      "M. M. Ali, Rowsanara Akhter, M M Alim, M. M Miah, Magnetic- Mixed Convection in nanofluid-filled cavity containing baffles and rotating hollow-cylinders with roughness components. Mathematical Problems in Engineering, 2022. (14 December 2022).http://doi.org/10.1155/2022/3044930(Q2).CS: 2.1, Scopus Indexed.Abstract:Mixed convective heat transfer in a nanofluid-filled lid-driven square cavity equipped with a rotating cylinder, horizontal baffles, and an external magnetic field is numerically examined in this study. A cylinder with triangular components is set at the centre of the cavity while two horizontal baffles are fixed to its vertical walls. The cavity is under the impact of the external magnetic field. Modified Maxwell’s model is taken into consideration to estimate the thermal conductivity of nanofluids. Galerkin FEM is applied to simulate nondimensional governing equations. The computations are carried out for specific ranges of physical parameters, and the results are illustrated through streamlines, isotherms, and average Nusselt number bar charts. Contours plotting indicate that flow circulation and distribution of temperature are significantly affected by the speed of a rotating rough cylinder. The fluid velocity remarkably increases with an increase in speed ratio and Reynolds number but it declines with Hartmann number, baffle length, and volume fraction. Heat transfer rate is substantially augmented by increasing the rotational speed of the rough cylinder, heights of triangular components, and suspended-nanoparticles which are also optimized for increasing baffle’s length and its horizontal arrangement. The findings of this investigation can be applied to improve the cooling efficiency of engineering equipment such as heat exchangers, energy storage systems, electronic equipment, solar collectors, and nuclear reactor safety devices.",
      "M. M. Ali, Rowsanara Akhter, M. M. Miah, Hydromagnetic mixed convective flow in a horizontal channel equipped with Cu-water nanofluid and alternated baffles. International Journal of Thermofluids, 12, 100118, November 2021.(Q4).Abstract:In this study, mixedconvective flowin a horizontal channel equipped with alternated baffles andexternal magnetic fieldis examined numerically. The channel is partially heated from its bottom wall at high temperature Thwhile remaining sections along with the top wall are thermally insulated. Two pairs of baffles are alternately located at both the horizontal walls. Coldnanofluidenters with parabolic velocity through theinlet portof the channel. The governing equations based onBoussinesqapproximation are solved implementingfinite element method. The results for the physical quantities flow and temperature fields are demonstrated via streamlines, temperature contours,average Nusselt numberand average temperature. It is found that the fluid flow and heat transfer are modulated by the orientation and height of alternated baffles. Fluid motion is accelerated with risingReynolds numberand declined for increase in magnetic strength and concentration ofnanoparticles. Optimum heat transfer is obtained in respect of appropriate orientation of baffles. The heat transfer augmentation is also reduced by 22.14% at Ha = 50 compared to heat transfer at Ha = 0. In addition,heat transfer rateis 33.86% more in nanofluid containing 5% nanoparticles than base fluid water.Details - (link)",
      "Mohammad Mokaddes Ali, S. Rushd, Rowsanara Akhter, M.A. Alim, Magneto-hydrodynamic mixed convective heat transfer in a nanofluid filled wavy conduit having rotating cylinders. Scientia Iranica, 29(2), 486-501, 2022 (online 5 October 2021). 10.24200/SCI.2021.56422.4717(Q2). IF: 1.416, SCIE andScopus Indexed.",
      "M. Ali,Rowsanara Akhter, M. M. Miah, Hydromagnetic mixed convective flow in a horizontal channel equipped with Cu-water nanofluid and alternated baffles. Int. Journal of Thermofluids, 12, 100118, Nov 2021.10.1016/j.ijft.2021.100118(Q1, Elsevier). CS: 9.2,Scopus Indexed.Abstract:In this study, mixedconvective flowin a horizontal channel equipped with alternated baffles andexternal magnetic fieldis examined numerically. The channel is partially heated from its bottom wall at high temperature Thwhile remaining sections along with the top wall are thermally insulated. Two pairs of baffles are alternately located at both the horizontal walls. Coldnanofluidenters with parabolic velocity through theinlet portof the channel. The governing equations based onBoussinesqapproximation are solved implementingfinite element method. The results for the physical quantities flow and temperature fields are demonstrated via streamlines, temperature contours,average Nusselt numberand average temperature. It is found that the fluid flow andheat transferare modulated by the orientation and height of alternated baffles. Fluid motion is accelerated with risingReynolds numberand declined for increase in magnetic strength and concentration of nanoparticles. Optimum heat transfer is obtained in respect of appropriate orientation of baffles. The heat transfer augmentation is also reduced by 22.14% at Ha = 50 compared to heat transfer at Ha = 0. In addition,heat transfer rateis 33.86% more in nanofluid containing 5% nanoparticles than base fluid water.",
      "Mohammad Mokaddes Ali,Rowsanara Akhterand Md Abdul Alim, Hydromagnetic mixed convection in a triangular shed filled by nanofluid and equipped with rectangular heater and rotating cylinders. International Journal of Thermofluids, 100105, August, 2021.https://doi.org/10.1016/j.ijft.2021.100105(Q1, Elsevier). CS: 9.2,Scopus Indexed.Abstract:Nanofluidmixed convectionin a triangular shed equipped withrotating cylinderssubjected to a heat source is numerically investigated in this study. The shed is heated and cooled respectively from a rectangular heat source at the bottom wall and inclined top walls. Two rotatingcylindersare placed over the heat source. The shed is permeated by anexternal magnetic field.The conservation equations are solved usingfinite element method.The code is verified by comparisons with previously published results. The numerical results of flow and temperature fields are demonstrated via streamlines, isotherms and bar charts for the variation of key parameters:Reynolds number(0≤Re≤100\">0≤Re≤100), Hartmann number (0   ≤Ha≤   50), nanoparticle volume fraction (0%   ≤   φ   ≤   5%),rotational speedof cylinders (10 ≤Uc≤ 100) and different positions of heat source. The strength of flow circulation is found accelerating with increasing Reynolds number androtational velocityof cylinders but it declines for the effects of magnetic field and nanoparticle volume fraction. The thermal field is significantly influenced due to the variation in Reynolds number, cylinders rotational speed and the position of heat source. Maximumheat transferis found at the corner positions of heat source, and it is 13.70% more than heat transfer for the case of centered position. Optimum heat transfer performance is taken place at higher rotational speed of the cylinders whereas reverse trend for higher magnetic strength. The bestheat transfer rateis achieved in nanofluid with maximum concentration of nanoparticles (5%), which is 94.18% than heat transfer for base fluid water.",
      "Mohammad Mokaddes Ali,Rowsanara Akhterand Md Abdul Alim, Hydromagnetic natural convection in a wavy-walled enclosure equipped with hybrid nanofluid and heat generating cylinder. Alexandria Engineering Journal, 60(6), 5245-5264, 2021.https://doi.org/10.1016/j.aej.2021.04.059(Q1, Elsevier).IF:6.8, SCIE Indexed.Abstract:Flow andheat transfercomponents of buoyancy driven convection in ahybrid nanofluidfilled wavy-walled cavity are numerically investigated in this study. A cylindrical heat generating blockage is placed at the center of the cavity. The cavity is partially heated from its bottom wall and cooled from wavy-walls while the remaining walls are adiabatic. The cavity is permeated by a transverse magnetic field.Thermal conductivitymodel of hybrid nanofluid is developed comprising Brownian motions of different nanoparticles. The non dimensional governing equations are solved by implementingfinite element method. Obtained results demonstrate the intensification of fluid flow circulation for increasingRayleigh numberand heater length. Theheat transfer rateis expeditiously augmented for increase in Rayleigh number and hybrid nanoparticles volume fraction but reverse trend is observed for higher Hartmann number. The flow circulation andtemperature distributionare influenced with the presence of heat generatingcylinderand roughness of the cavity walls. In addition, strength of fluid motion becomes higher for wavy cavity containing heat generating obstacle compared to smooth cavity without blockage. Maximum heat transfer is ensured at lower heater length and radius of the heat generating cylinder. Heat transfer rate also increases with the roughness of the cavity.",
      "Mohammad Mokaddes Ali,Rowsanara Akhterand Md Abdul Alim, Magneto-mixed convection in a lid driven partially heated cavity equipped with nanofluid and rotating flat plate. Alexandria Engineering Journal, 61(1), 257-278, 2022 (online 6 June 2021).https://doi.org/10.1016/j.aej.2021.05.003(Q1, Elsevier).IF:6.8, SCIE Indexed.Abstract:In this study,mixed convectionin ananofluidfilled cavity induced by thermalbuoyancy force, moving wall and rotating flat plate subjected toexternal magnetic fieldis numerically investigated. The cavity is partially heated from its bottom wall and cooled from top wall moving withconstant velocityin ±x direction and other walls are kept adiabatic. A counter-clockwise rotating flat plate is placed at the centre of the cavity. The cavity is permeated by a transverse magnetic field. Conservation equations are simulated through implementingfinite element method. Numerical results are presented using streamlines, isotherms and bar charts to explore the effects of physical parameters on the flow and temperature fields. It is found that flow and thermal fields are impressively affected with the variations in length and speed of rotating flat plate. Besides, higher length androtational speedof the plate causes maximum amount ofheat transfer. Best heat transfer is ensured while the direction of rotating plate is same as the direction of lid wall. Moreover, optimal heat transfer performance is obtained up to 5% nanoparticles concentration which is 123.02% more than base fluid. Highermagnetic field strengthattenuates the fluid motion and henceheat transfer ratesignificantly.",
      "Mohammad Mokaddes Ali,Rowsanara Akhterand Md Abdul Alim. “Performance of flow and heat transfer analysis of mixed convection in Casson fluid filled lid driven cavity including solid obstacle with magnetic impact.” SN Applied Sciences, 3 (2),1-15, 2021.https://doi.org/10.1007/s42452-021-04243-x(Q2, Springer). IF:2.6, ESCI andScopus Indexed.Abstract:In this study, the heat transfer and fluid flow characteristics of mixed convection in a double lid driven cavity containing a heat conducting solid obstacle in presence of magnetic field is numerically investigated. The left and right vertical walls of the cavity are isothermally heated and cooled respectively while horizontal walls are thermally insulated. A solid cylinder is positioned at the centre of the cavity. Mathematical model has been developed considering non-Newtonian model of Casson fluid and solved with finite element method based on Galerkin residual technique. The simulated numerical results are obtained through streamlines, temperature contours and average Nusselt number for a set of dimensionless parameters and discussed elaborately to make the effective usability of Casson fluid in different industrial and engineering processes. The obtained results based on special cases are compared with the existing results. It is observed that the flow and thermal fields were influenced significantly by the Reynolds number for any Casson fluid parameter. The intensification of streamlines strengthened for Casson fluid parameter compared to isotherms. Moreover, enhancement of heat transfer due to increased Reynolds number expedites with Casson fluid parameter while a reverse trend is observed for higher Hartmann number. In addition, appropriate direction of lid walls provides a better heat transfer rate.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, Md Abdul Alim, M. A. Maleque, M .M Ali, Magnetohydrodynamic mixed convection in a nanofluid filled tubular enclosure, Fluid Mechanics Research International Journal, Vol.4, Issue 1,2020.  DOI:10.15406/fmrij.2020.04.00058Abstract:In this paper, the flow and heat transfer characteristics for the influence of oriented magnetic field on mixed convection flow of water based nanofluid inside a grooved channel with a rotating heat source are numerically investigated. The channel is cooled from the grooved as well as vertical walls and heated from the bottom walls as well as rotating heat source while the remaining walls are thermally insulted. The channel is permeated by an inclined magnetic field of uniform strength, and a modified model of effective thermal conductivity is used to improve the overall thermal conductivity of nanofluids. The governing partial differential equations representing the flow model are solved with Galerkin weighted residual finite element method. A complete parametric study is carried out based on numerical results to show the variations of flow and temperature fields in terms of streamlines, isotherms, velocity and temperature profiles, average Nusselt number and average temperature for the effects of pertinent parameters including Reynolds number, Hartmann number, volume fraction of nanoparticles and inclination angle of the magnetic field. It is observed that average heat transfer rate enhances noticeably with the increase in Reynolds number and volume fraction and reduces for increasing Hartmann number. It is also found that the augmentation of heat transfer due to higher inclination angle of magnetic field becomes significant when the value of Hartmann number is sufficiently large. Moreover, the effects of governing parameters on the fluid flow and heat transfer behaviors are affected remarkably with the presence of rotating heat source and the direction of rotation as well. Comparisons of the present results with the previous published results are performed and excellent agreement is found. The outcome of this study can be applied to design engineering equipments such as high performance heat exchangers, cooling of electronic devices and circuit boards, cooling of nuclear reactors and biomedical equipments, etc.",
      "Mohammad Mokaddes Ali,Rowsanara Akhter,and Md Abdul Alim. \"MHD natural convection and entropy generation in a grooved enclosure filled with nanofluid using two-component non-homogeneous model.\" SN Applied Sciences, Vol. 2, no. 4 (2020): 1-25.https://doi.org/10.1007/s42452-020-2319-x(Q2, Springer). IF:2.6, ESCI andScopus Indexed.Abstract:In this paper, a computational study of natural convection in a grooved enclosure filled with water-based nanofluid in the presence of external magnetic field is numerically investigated. Two-component non-homogeneous model is introduced to develop the governing partial differential equations. Galerkin finite element method is used to solve the governing equations. The computation is carried out for a wide range of governing parameters such as Rayleigh number (103≤ Ra ≤ 106), magnetic field parameter (10 ≤ Ha ≤ 100) and volume fraction of nanoparticles (0% ≤ϕ≤ 5%) with fixed values of remaining parameters. A detailed parametric analysis is performed to show the effects of physical parameters on the fluid flow and temperature distributions within the enclosure via streamlines, isotherms, isoconcentrations, mid-sectional velocities, average Nusselt number and temperature, respectively. In addition, the entropy generation and Bejan number are also computed and discussed elaborately. The results of the current study are compared to those of previous numerical and experimental studies and found to be in rational agreements. The results ascertain that the average Nusselt number and entropy generation increase with rising Rayleigh number and nanoparticle volume fraction, whereas they decrease with increasing magnetic field strength. Moreover, it is found that the appropriate combination of governing parameters can maximize the heat transfer rate and minimize the entropy generation as well.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, and Md Abdul Alim. \"Hydromagnetic Natural Convection Heat Transfer in a Partially Heated Enclosure Filled with Porous Medium Saturated by Nanofluid.\" International Journal of Applied and Computational Mathematics, Vol 5, no. 3 (2019): 52.https://doi.org/10.1007/s40819-019-0638-7(Q3, Springer).Scopus Indexed.Abstract:In this paper, a computational analysis has been performed for hydromagnetic natural convection in a partially heated porous square enclosure filled with Al2O3-water nanofluid. The bottom wall of the enclosure is partially heated at constant high temperature Th and the vertical walls are kept at constant temperature Tc which is lower than that of hot wall while the remaining walls are thermally insulated. A modified model for effective thermal conductivity of nanofluids is introduced by taking into account the random motion of nanoparticles. Finite element method is implemented to solve the governing partial differential equations which have been formulated based on Navier–Stokes and energy balance equations along with Brinkman equation. The numerical simulation has been carried out for a range of Rayleigh number (10³–10⁶), solid volume fraction of nanoparticles (0–5%), Hartmann number (0–100) and Darcy number (0.001–1.0) and detailed discussion has been presented based on results in terms of streamlines, isotherms, average Nusselt number and average velocity, respectively. Comparison of the present results with the previously published results has been performed and excellent agreements were found. The results show that the flow and temperature fields inside the enclosure are sensitive due to the variation of Rayleigh number, concentration of nanoparticles, Hartmann number and Darcy number. It is also found that optimum heat transfer take place in higher Rayleigh number, concentration of nanoparticles and Darcy number. In addition, nanofluid shows a greater heat transfer enhancement as compared to base fluid for all concentrations of nanoparticles considered.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, Md. Babul Hossain, Md. Musa Miah, MHD Free Convection Boundary Layer Flow over an Inclined Heated Flat Plate with Thermal Radiation Effect, American Journal of Fluid Dynamics, Vol.7(2), pp.4-48,2017. doi:10.5923/j.ajfd.20170702.01Abstract:This work examines the effect of thermal radiation on convective heat transfer in viscous, incompressible and electrically conducting fluid of low Prandtl number over an inclined heated flat plate in presence of transverse magnetic field. The governing equations are converted into non-dimensional forms containing Prandtl number, magnetic field parameter, inclination parameter and thermal radiation parameter and the obtained non-linear partial differential equations subject to appropriate boundary conditions are solved numerically using finite-difference method and then discussed in detail for the effects of pertinent parameters. A comparison with earlier work shows the excellent agreement.",
      "Mohammad Mokaddes Ali1, Md. Abdul Alim,Rowsanara Akhter, Syed Sabbir Ahmed, MHD Natural Convection Flow of CuO/Water Nanofluid in a Differentially Heated Hexagonal Enclosure with a Tilted Square Block, International Journal of Applied and Computational Mathematics, Vol.3, pp.1047-1069, 2017.https://doi.org/10.1007/s40819-017-0400-y(Q3, Springer). andScopus Indexed.Abstract:A numerical investigation has been performed to analyze the effect of magnetohydrodynamic natural convection flow in a differentially heated hexagonal enclosure having a tilted square block filled with CuO/water nanofluid. The horizontal walls of the cavity and tilted walls of the obstacle are uniformly heated of temperature \\(\\hbox {T}_\\mathrm{h}\\) while the inclined walls are kept at constant temperature \\(\\hbox {T}_\\mathrm{c}\\). The governing conservation equations of the physical problem have been solved using finite element method based on Galerkin weighted residual technique and obtained numerical results are presented graphically in terms of streamlines, isotherms, average Nusselt numbers, mid height horizontal and vertical velocities, average temperature and average velocity of nanofluid for a range of Rayleigh number (\\(10^{3} \\le { Ra} \\le 10^{6}\\)), Hartmann number (\\(0 \\le { Ha} \\le 70\\)) and solid volume fraction (\\(0.1\\% \\le \\phi \\le 5\\%\\)) to show the flow structures and temperature characteristics. It is found that the flow fields and temperature distributions are influenced significantly for the effect of pertinent parameters. In addition, overall heat transfer rate enhanced due to higher values of Ra and \\(\\phi \\) along with lower value of Ha. Comparisons of the present results with the previously published results on the basis of special cases are performed and found to be in good agreement.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, M. Sharif Uddin, A. R. Khan, Heat Generation Effect on Convective Heat Transfer for Cylinder with Radiative Heat Transfer, Journal of Science and Technology (ISSN 2079-472X),Vol.5(1),pp.75-84,2015.(Printed copy: Mawlana Bhashani Science and Tech. Uni. Tangail, Journal)Abstract:In this paper, a steady two-dimensional free convection boundary layer flow and heat transfer of a viscous and incompressible fluid about a circular cylinder in presence of thermal radiation and heat generation is considered. The partial differential equations, governing the problem have been converted employing a set of suitable transformations in a system of non-linear partial differential equations which is solved by using an implicit finite difference method. Numerical calculations are carried out for various values of radiation parameter and heat generation parameter and then presented graphically. It is worth pointing out that, increasing radiation and heat generation leads to enhance the velocity and temperature of the fluid. The results are found to be in good agreement with the existing results.",
      "Rowsanara Akhter, Mohammad Mokaddes Ali, Md. Babul Hossain, M. Sharif Uddin, Conjugate Effect of Radiation and Thermal Conductivity Variation on MHD Free Convection Flow for a Vertical Plate, American Journal of Computational Mathematics, Vol.3, pp.252-259,2013.4236/ajcm.2013.33035Abstract:A numerical investigation is performed to study the effect of thermal radiation on magnetohydrodynamic (MHD) free convection flow along a vertical flat plate in presence of variable thermal conductivity in this paper. The governing equations of the flow and the boundary conditions are transformed into dimensionless form using appropriate similarity transformations and then solved employing the implicit finite difference method with Keller-box scheme. Results for the details of the velocity profiles, temperature distributions as well as the skin friction, the rate of heat transfer and surface temperature distributions are shown graphically. Results reveal that the thermal radiation is more significant in MHD natural convection flow during thermal conductivity effect is considered. To illustrate the accuracy of the present results, the results for the local skin fraction and surface temperature distribution excluding the extension effects are compared with results of Merkin and Pop designed for the fixed value of Prandtl number and a good agreement were found.",
      "Mohammad Mokaddes Ali,Rowsanara Akhter, NHM A Azim, M. A. Maleque, Effects of radiation and viscous dissipation conjugate free convection flow along a vertical flat plate, Journal of Science and Technology (ISSN 2079-472X), Vol.1(1), pp.11-21,2011. (Printed copy: Mawlana Bhashani Science and Tech. Uni. Tangail, Journal)Abstract:In this analysis, the effects of radiation and viscous dissipation on conjugate free convection flow along a vertical flat plate have been investigated. The governing equations which include such effects are made dimensionless form with appropriate transformations and then solved numerically using implicit finite difference method with Keller box scheme. The resulting numerical solutions for the details of the velocity profiles, temperature distributions as well as the skin friction and surface temperature distributions are presented graphically. A discussion has been provided for the effects of Prandtl number, radiation parameter and viscous dissipation parameter on two dimensional flows.",
      "Mohammad Mokaddes Ali,Rowsanara Akhter, NHM. A. Azim, M. A. Maleque, The Effects of Radiation and Heat Generation on MHD Natural Convection Flow Along a Vertical Flat Plate in Presence of Viscous Dissipation, Daffodil International University Journal of Science and Technology, Vol.6, Issue 01, January 2011. https://doi.org/10.3329/diujst.v6i1.9330Abstract:This article investigates the effects of radiation and heat generation on magnetohydrodynamic( MHD) natural convection flow of an incompressible viscous electrically conducting fluid along a vertically placed flat plate in presence of viscous dissipation and heat conduction. Appropriate transformations were employed to transform governing equations of this flow into dimensionless form and then solved using the implicit finite difference method with Keller box scheme. The resulting numerical solutions of transformed governing equations are presented graphically in terms of velocity profile, temperature distribution, skin friction coefficient and surface temperature and the effects of magnetic parameter (M), radiation parameter (R), Prandtl number (Pr) and heat generation parameter (Q) and viscous dissipation parameter (N) on the flow have been studied with the help of graphs.",
      "M. Ali,R. Akhter, N.H.M.A. Azim, M.I. Abdullah, The Effects of Radiation and Viscous Dissipation on MHD Natural Convection Flow along a Vertical Flat Plate in Presence of Joule Heating, Journal of Applied Science and Technology, (ISSN 2218-841X)Vol.7, No.2, pp 9-16,2010. (Printed copy: Islamic Uni. Kushtia, Journal)Abstract:In this analysis, the effects of radiation, joule heating and viscous dissipation on Magneto-Hydrodynamic (MHD) natural convection flow along a vertical flat plate in presence of heat conduction are investigated. The governing equations associated with boundary conditions for this analysis are transformed into dimensionless form using appropriate similarity transformations and then solved numerically adopting implicit finite difference method. The resulting numerical solutions are presented graphically in terms of velocity profile, temperature distribution, local skin friction coefficient in terms of shear stress and local heat transfer rate in terms of Nusselt number and the effects of magnetic parameter (M), radiation parameter (R), Prandtl number (Pr), viscous dissipation parameter (N) and joule heating parameter (J) on the flow have been studied.",
      "Mohammad Mokaddes Ali,Rowsanara Akhter, Combined effects of radiation and heat generation on MHD natural convection flow along a vertical flat plate in presence of heat conduction, BRAC University Journal Vol. VI, No.2, pp.11-20, 2009.http://hdl.handle.net/10361/459Abstract:Study of the effects of radiation and heat generation on MHD natural convection flow of an incompressible viscous electrically conducting fluid along a vertically placed flat plate in presence of heat conduction is considered. The governing equations of the flow are transformed into dimensionless form with appropriate transformations and then solved using the implicit finite difference method with Keller-Box scheme. The resulting numerical solutions of transformed governing equations are presented graphically in terms of velocity profile, temperature distribution, local shear stress, local heat transfer rate and surface temperature and the effects of magnetic parameter (M), radiation parameter (R), Prandtl number (Pr) and heat generation parameter (Q) on the flow and the graphs are discussed.",
      "Mohammad Mokaddes Ali,Rowsanara Akhter, NHM. A. Azim, The effects of radiation and joule heating on MHD natural convection flow along a vertical flat plate in presence of heat conduction, Southeast University Journal of Science and Engineering, Vol.4, No. 4, December 2009. (Printed copy: Southeast University Journal)Abstract:The effects of radiation and joule heating on magnetohydrodynamic (MHD) natural convection flow of a viscous incompressible electrically conducting fluid along a vertical flat plate in presence of heat conduction has been investigated. The governing equations of the flow are transformed into dimensionless form with appropriate transformations and then solved numerically using the implicit finite difference method with Keller box scheme. The numerical solutions are obtained in terms of velocity profile, temperature distributions, skin friction coefficient and surface temperature distributions. It is found that, radiation and joule heating play a significant role on MHD natural convection flow during heat transfer in the heat transfer analysis."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Shafinaz Sikder",
    "title": "Lecturer (On Study Leave)",
    "dept": "english",
    "deptName": "Department of English",
    "email": "shafinaz.sikder@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/s7W0M8B1pOzDzlsKmpDw.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shafinaz-sikder",
    "education": [
      {
        "degree": "Masters of English Language Studies",
        "institute": "Universiti Malaya",
        "year": "2020"
      },
      {
        "degree": "Masters of Arts in English",
        "institute": "BRAC University",
        "year": "2015"
      },
      {
        "degree": "Bachelor of Arts in English",
        "institute": "BRAC University",
        "year": "2013"
      },
      {
        "degree": "H.S.C",
        "institute": "Viqarunnisa Noon College",
        "year": "2009"
      },
      {
        "degree": "S.S.C",
        "institute": "Viqarunnisa Noon School",
        "year": "2007"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "4th May 2021- present"
      },
      {
        "institute": "English Language Trainer",
        "designation": "SI2 with Augmedix",
        "duration": "24th July 2017 to 31st Jan2019"
      },
      {
        "institute": "English Instructor",
        "designation": "E.L.I, United International University",
        "duration": "15th Jan 2016 to May 2017"
      },
      {
        "institute": "Thesis Supervisor",
        "designation": "BRAC University",
        "duration": "2016 Feb to 2016 May"
      },
      {
        "institute": "Assistant H.R.",
        "designation": "Square Hospitals Ltd.",
        "duration": "Dec 2017 to Nov 2018"
      }
    ],
    "publications": [
      "Sikder., Shafinaz & Haque., Mahmudul (2016). Speaking Anxiety and Learners’ Own Variety of English. Crossings (7), 185-193.Details - (link)",
      "Sikder, S. (2021). Request Strategies and Gender Differences among Bangladeshi Students within Online Classrooms. International Journal of English Language Studies, 3(9), 01-08.Abstract:This research tried to identify the type of requests made by the students within a few Bangladeshi online classrooms. The study also aimed at focusing on possible gender differences between the students based on the requests they made. It adopted the research method used by Onem (2016),who investigated how men and women make requests and observed how they differ in the case of being polite and showing directness. Since there have been no previous studies conducted like this before, this paper analysed and categorized the types of requests by addressing the research gap. The theoretical framework relied on the Cross-Cultural Speech Act Realization Project (CCSARP), outlined by Blum-Kulka and Olshtain (1984). Three video records of online classes of “London School of English, Keraniganj, Dhaka, Bangladesh” were undertaken as the main data which was observed naturally followed by analysis and interpretation. The data analysis framework was also undertaken from the Cross-Cultural Speech Act Realization Project (CCSARP) theory by Blum-Kulka and Olshtain (1984). To analyse the data gathered from the videos, a particular coding scheme of (CCSARP) was used. The result obtained showed that the female students made around 62.5% requests while the male students did only around 37.5%. The requests made by the female students were not only significantly higher but they were more polite than the males. Therefore, this small-scale study is expected to help teachers and both male and female students improve their communication skills. The types of requests identified in this study might help students of both genders become aware of their request-making techniques and help the researchers understand the process of request-making in the students' minds.Details - (link)",
      "Sikder., Shafinaz, Nadzri., Filzah & Karunagaran., Laneesha (2021). A Study of Written Noun Pattern Sequences among Secondary School Students in Malaysia. Journal of NELTA.Abstract:The following research work aimed to investigate the language change of learners through their usage of noun pattern in order to identify which words occur with which patterns and then create a repertoire of the three learners’ particular ways of using them. In order to do so, like previous studies, the study relied on the theoretical framework of Hunston’s Pattern Grammar Approach (1997) and the conceptual framework of Larsen-Freeman’s Complexity Theory (2006). This mixed method study adopted a longitudinal research approach into Chau (2015) students’ data to observe the commonly occurred noun pattern sequences within their writing tasks over three years. This helped to understand the changes on the noun pattern about language learning by associating meaning production via noun pattern sequences. Data collection and analysis method was adopted from Tashakkori & Teddlie, 2010. The codification of noun patterns were done quantitatively and then its frequency was quantified. The five nouns have been identified from the analysis at keyness cut-oﬀ of 25 via Keywords Extractor followed by a codification of noun pattern sequences done via the framework by Collins Cobuild English Dictionary and Francis et al. (1998). The result of the analysis shows that students do follow noun patterns yet they also tend to produce structures in their very unique ways. Likewise, the repetition of pattern over the years observed in learners suggests language could be both regressing and progressing simultaneously, unlike the developmental leader metaphor applied in most educational settings. In other words, the study suggests that students should be acquainted with patterns instead of words in isolation because their association with diﬀerent words makes them a natural accompaniment to a lexical approach. This paves the way for unorthodox scoring or marking system, shifting the focus from error analysis to meaningful production of language.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Md. Ashif Mahmud Joy",
    "title": "Assistant Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "md.ashif.mahmud.joy@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/jO0lQ3DRqVARSRAH6AGC.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-ashif-mahmud-joy",
    "education": [
      {
        "degree": "BSc",
        "institute": "United International University",
        "year": "2022"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka College",
        "year": "2016"
      },
      {
        "degree": "SSC",
        "institute": "Engineering University School and College",
        "year": "2014"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "International University of Scholars",
        "duration": "June 2024 - Present"
      },
      {
        "institute": "Lecturer",
        "designation": "International University of Scholars",
        "duration": "May 2022 - May 2024"
      },
      {
        "institute": "Reactjs Developer",
        "designation": "Shuffle BV(Amsterdam)",
        "duration": "2022 (2 Months)"
      },
      {
        "institute": "Social Media Manager",
        "designation": "Adios BD",
        "duration": "2021 (5 Months)"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "H M Atif Wafik",
    "title": "Sr. Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "h.m.atif.wafik@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/2Lv2owYXovpTkpAiVRq5.jpg",
    "profileUrl": "https://ius.edu.bd/profile/h-m-atif-wafik",
    "education": [
      {
        "degree": "MS in Technology",
        "institute": "Pittsburg State University",
        "year": "2016"
      },
      {
        "degree": "Bachelor of Business Administration",
        "institute": "University of Asia Pacific",
        "year": "2008"
      }
    ],
    "experience": [
      {
        "institute": "Asst. Professor & Dept. Coordinator",
        "designation": "The International University of Scholars",
        "duration": "June 2018 – Continuing"
      },
      {
        "institute": "Student Advisor",
        "designation": "The International University of Scholars",
        "duration": "July 2021 - Continuing"
      },
      {
        "institute": "Member, Academic Council",
        "designation": "The International University of Scholars",
        "duration": "May 2021 - Continuing"
      },
      {
        "institute": "Head, Brand & Communication",
        "designation": "The International University of Scholars",
        "duration": "April 2021 - Continuing"
      },
      {
        "institute": "Account Director",
        "designation": "Activist Communications Limited",
        "duration": "March 2017 – August 2017"
      },
      {
        "institute": "Library Assistant",
        "designation": "AXE Library, Pittsburg State University",
        "duration": "January 2016 – December 2016"
      },
      {
        "institute": "Student Supervisor, Catering",
        "designation": "SODEXO",
        "duration": "Aug 2015 – December 2016"
      },
      {
        "institute": "Assistant General Manager",
        "designation": "Spotlight Event Management Limited",
        "duration": "October 2010 – July 2015"
      },
      {
        "institute": "Brand Executive, Client Service",
        "designation": "Bitopi Advertising Limited",
        "duration": "February 2008 – June 2009"
      }
    ],
    "publications": [
      "The Effect of Entrepreneurial Orientation, Market Orientation, and Gender on Business Performance: An Empirical Study of SMEs in Bangladesh International Journal of Business and Management Invention (IJBMI)",
      "What factor do motivate employees in the workplace: Evidence from a service organization.",
      "Journal of Asian Finance, Economics, and Business.",
      "Determinants of Deposit Mobilization of Private Commercial Banks: Evidence from Bangladesh.",
      "International Journal of Business and Management Invention (IJBMI)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Dr. Md Shaiful Islam",
    "title": "Assistant Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "md.shaiful.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/SxNp3OaWj9LroajXmEpD.jpg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-md-shaiful-islam",
    "education": [
      {
        "degree": "Post-Doctoral Fellow- Department of Mechatronics",
        "institute": "International Islamic University Malaysia (IIUM), Malaysia",
        "year": ""
      },
      {
        "degree": "PhD in Tun Razak Graduate School of Business",
        "institute": "Universiti Tun Abdul Razak (UNIRAZAK), Malaysia",
        "year": "2024"
      },
      {
        "degree": "Master of Science in Computer Science",
        "institute": "American International University, Bangladesh",
        "year": "2012"
      },
      {
        "degree": "Bachelor of Science in Computer Science",
        "institute": "University of Madras, India",
        "year": "2004"
      },
      {
        "degree": "Higher Secondary Certificate (H.S.C) in Science",
        "institute": "Islamic University Technical College, Dhaka, Bangladesh",
        "year": "1999"
      },
      {
        "degree": "Secondary School Certificate (S.S.C) in Science",
        "institute": "Bindubashini Government Boys School, Dhaka, Bangladesh",
        "year": "1997"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "September 2025 - Present"
      },
      {
        "institute": "Founder & CEO",
        "designation": "4beats Limited – Dhaka",
        "duration": "May 2016 – Present"
      },
      {
        "institute": "Founder & CEO",
        "designation": "Online News Portal 24 – Dhaka",
        "duration": "Mar 2020 – Present"
      },
      {
        "institute": "Senior Project Manager",
        "designation": "Nexgen Technologies Sdn Bhd-Kuala Lumpur",
        "duration": "Mar 2024 – Feb 2025"
      },
      {
        "institute": "Chief Executive Officer (Remote)",
        "designation": "QUPS (Quality Up Services) – Dhaka",
        "duration": "Feb 2024 – Jan 2025"
      },
      {
        "institute": "Founder & CEO",
        "designation": "Gramen Ponno – Dhaka",
        "duration": "June 2018 – June 2024"
      },
      {
        "institute": "Senior Chief Engineer / Project Lead",
        "designation": "Samsung R&D Institute Bangladesh - Dhaka",
        "duration": "Dec 2010 – Jan 2024"
      },
      {
        "institute": "QA Manager / Test Manager",
        "designation": "Tasawr Interactive – Dhaka",
        "duration": "Mar 2009 – Nov 2010"
      },
      {
        "institute": "Assistant Manager / Test Leader",
        "designation": "Bangladesh Internet Press Ltd. (BIPL) – Dhaka",
        "duration": "Mar 2007 – Feb 2009"
      },
      {
        "institute": "Test Engineer",
        "designation": "UNIQA BDC. - Dhaka",
        "duration": "Dec 2005 – Sept 2006"
      },
      {
        "institute": "SQA Engineer / Test Engineer",
        "designation": "DataSoft Systems Bangladesh Ltd. - Dhaka",
        "duration": "Jan 2005 – Nov 2005"
      }
    ],
    "publications": [
      "Shaiful Islam, Md. Mamun Habib, “Integrating Forecasting & Planning Management for Sustainable Hospital Supply Chains and Societal Advancement”, International Journal of Supply Chain Management, Vol 13, No 4 (2024), ISSN: 2050-7399 (Online) 2051- 3771 (Print), DOI:https://doi.org/10.59160/ijscm.v13i4.6263",
      "Shaiful Islam, Md. Mamun Habib, “Integrating Technology in Hospital Supply Chain: Pathway to a Sustainable Healthcare Ecosystem”, International Journal of Supply Chain Management, Vol 13, No 1 (2024), ISSN: 2050-7399 (Online) 2051-3771 (Print), DOI: https://doi.org/10.59160/ijscm.v13i1.6223 Dr. Md Shaiful Islam Phone: +8801716314667 | Email: jshaiful@gmail.com | Location: Dhaka | LinkedIn: www.linkedin.com/in/shaiful SENIOR PROJECT / SOFTWARE QUALITY / TESTING MANAGEMENT PROFESSIONAL.",
      "Shaiful Islam, Md. Mamun Habib, Gazi Md Nurul Islam, “A Study on Sustainable Hospital Supply Chain Management towards Societal Advancement in the Post-Pandemic Era”, International Journal of Supply Chain Management, Vol 12, No 4 (2023), ISSN: 2050-7399 (Online) 2051-3771 (Print), DOI:https://doi.org/10.59160/ijscm.v12i4.6201",
      "Shaiful Islam, Md. Mamun Habib, “The Role of Latest Technology in Sustainable Hospital Supply Chain Management”, International Supply Chain Technology Journal, vol. 9, no. 7, 2023, DOI:https://doi.org/10.20545/isctj.v09.i07.03",
      "Shaiful Islam, Md. Mamun Habib, “Enhancing Sustainable Hospital Supply Chain Management through Collaboration and Information Flow in the Post-Pandemic Era”, International Supply Chain Technology Journal, vol. 9, no. 6, 2023, DOI:https://doi.org/10.20545/isctj.v9i6.293",
      "Shaiful Islam, Md. Mamun Habib, “Sustainable Hospital Supply Chain Management through Hospital Infrastructure Development”, International Supply Chain Technology Journal, vol. 9, no. 5, 2023, DOI:https://doi.org/10.20545/isctj.v09.i05.02",
      "Shaiful Islam, Md. Mamun Habib, Gazi Md Nurul Islam, “A Unified Approach to Sustainable Hospital Supply Chain Management in the Post-Pandemic Era”, International Supply Chain Technology Journal, vol. 9, no. 8, 2023, DOI:https://doi.org/10.20545/isctj.v9i8.306",
      "Shaiful Islam, Md. Mamun Habib, “The Role of Forecasting and Planning Management in Sustainable Hospital Supply Chain”, International Supply Chain Technology Journal, vol. 8, no. 7, 2022, DOI:https://doi.org/10.20545/isctj.v08.i07.03",
      "Shaiful Islam; Bishwajit B. Pathik; Manzur H. Khan; Mamun Habib, “Software test estimation tool: Comparable with COCOMOII model”, 2016 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), DOI: 10.1109/IEEM.2016.7797865 [SCOPUS]",
      "Shaiful Islam; Bishwajit B. Pathik; Manzur H. Khan; Mamun Habib, “A novel tool for reducing time and cost at software test estimation: An use cases and functions based approach”, 2014 IEEE International Conference on Industrial Engineering and Engineering Management, DOI: 10.1109/IEEM.2014.7058650 [SCOPUS]",
      "Shaiful Islam; Bishwajit B. Pathik; Manzur H. Khan; Mamun Habib, \"Software test estimation tools using use cases and functions\", 2013 IEEE International Conference on Industrial Engineering and Engineering Management, DOI: 10.1109/IEEM.2013.6962440 [SCOPUS]",
      "Mohammad Mamunur Rashid, Md. Shaiful Islam, \"Implementing e-Governance in Bangladesh and the de facto\", Journal of Scientific and Technological Research (JSTR), Vol-2, 73-81, 2011, https://www.researchgate.net/publication/237005907_Implementing_eGovernance_in_Bangladesh_and_the_de_facto"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Salehin Mahbub",
    "title": "Assistant Professor",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "salehin.mahbub@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/vn8BwjbAELMlDlWRtXJy.jpg",
    "profileUrl": "https://ius.edu.bd/profile/salehin-mahbub",
    "education": [
      {
        "degree": "Mastersof Science in Polymer Chemistry",
        "institute": "Pittsburg State University",
        "year": "2020"
      },
      {
        "degree": "Bachelor of Science in Chemistry",
        "institute": "Pittsburg State University",
        "year": "2018"
      },
      {
        "degree": "IB Diploma Program",
        "institute": "Rome International School",
        "year": "2013"
      },
      {
        "degree": "IGCSE Certificate",
        "institute": "Rome International School",
        "year": "2010"
      },
      {
        "degree": "O Level",
        "institute": "British Council",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Undergraduate lab assistant",
        "designation": "Pittsburg State University",
        "duration": "Spring 2014 - Spring 2018"
      },
      {
        "institute": "Chemistry lab stockroom attendant",
        "designation": "Pittsburg State University",
        "duration": "Fall 2014 - Spring 2018"
      },
      {
        "institute": "Chemistry tutor",
        "designation": "Pittsburg State University",
        "duration": "Spring 2014 - Spring 2016"
      },
      {
        "institute": "Chemistry department moving crew",
        "designation": "Pittsburg State University",
        "duration": "Spring 2014"
      },
      {
        "institute": "Sodexo",
        "designation": "Pittsburg State University",
        "duration": "Fall 2015"
      },
      {
        "institute": "Chemistry grader",
        "designation": "Pittsburg State University",
        "duration": "Fall 2014 - Spring 2018"
      },
      {
        "institute": "Photojournalist",
        "designation": "TheCollegio",
        "duration": "Summer 2017 - Spring 2020"
      },
      {
        "institute": "Videographer",
        "designation": "TheCollegio",
        "duration": "Fall 2016 - Spring 2020"
      },
      {
        "institute": "Graduate Research Assistant",
        "designation": "",
        "duration": "Fall 2018 - Summer 2019"
      },
      {
        "institute": "Graduate Teaching Assistant",
        "designation": "",
        "duration": "Fall 2019 - Spring 2020"
      },
      {
        "institute": "Faculty",
        "designation": "University of Scholars",
        "duration": ""
      }
    ],
    "publications": [
      "\"Academicians' Perspectives on AI Integration in Bangladesh's Education: Balancing Promise and Ethical Realities\"Abstract:As Bangladesh embarks on the journey of integrating Artificial Intelligence (AI) into its educational landscape, this article presents a comprehensive analysis of the opportunities and challenges inherent in this transformative endeavor. The potential benefits of AI in education, including enhanced accessibility, personalized learning, and administrative efficiency, are examined within the unique socio-cultural context of Bangladesh. However, the ethical implications, such as data privacy concerns, equity issues, and the risk of depersonalizing education, must not be overlooked. Realistic implementations tailored to Bangladesh's contextual realities and infrastructural capabilities are emphasized, ensuring that AI integration aligns with educational objectives. Insights from academicians and experts, both locally and globally, highlight the significance of collaborative, ethical, and context-specific strategies. This article offers a roadmap for Bangladesh's educational institutions to harness the full potential of AI while maintaining a strong commitment to ethics, equity, and educational effectiveness.Link",
      "\"Gen Z and Generative AI: Shaping the Future of Learning and Creativity\"Abstract:Thus, the appearance of the Generative Artificial Intelligence opened up a great turn in many areas, including education and creative industries. This paper seeks to understand the deep impact that Generative AI is going to have on learning and creating processes for the social context of Generation Z (Gen Z) students – born in digital culture. The work looks into the possibilities and challenges that Gen Z in collaboration with Generative AI leads to the future of learning and creativity. This paper is relevant as it offers some understanding of the ongoing changes in the education and creativity together with the escalating growth in technology. The nature of the association between the members of Generation Z and the Generative AI needs to be known by the educational stakeholders, policymakers, and business executives to leverage value from the existing and upcoming technologies together with dealing with possible negative impacts. The purpose of this study was to explore the nature and uses of Generative AI, and its effects on the learning and creativity of Gen Z, in addition to identifying the advantages, disadvantages, opportunities, and risks/partities’ concerns that are commensurate with the integration of this technology in teaching/learning and creative processes. To achieve the objectives of the study the following research methodology was used: The research used both a literature review and documentary research. The materials used included academic publications, Industry reports, books and other credible internet sources on Generative AI and its impact on the education and creativity of the Gen Z. The document analysis included policy papers, educational technology reports, case studies and white papers from academic and professional bodies as well as other industries that involve Generative AI. Several insights show that using Generative AI can positively impact learners’ experiences, engagement, and creativity. However, there was some controversy about the excessive usage of AI and claimed that because of it people may get worse at critical thinking. The following were noted to be major concerns; Ethical Issues: they included issues to do with bias in the algorithms as well as the right to privacy of data. Thus, the findings of this research point to a three-way settlement with respect to the use of Generative AI in education and creative industries. It underlines the guideline of how human creativity and critical thinking ought to be sustained, while using AI tools Proposals include, the need to teach critical thinking alongside AI use, fostering ethical AI consciousness, surged AI education, appropriate non-ethnical AI data set, strong AI policies and pro positive AI inspires and creative constructive use. The research implications for future studies include studying the changes in the achievement of learning outcomes over a period of time, wherein Generative AI has been incorporated and understanding how this technology influences different learning styles and needs, the issues of ethical and privacy concern, the requirement of professional development to educators in relation to Generative AI and finally, the comparison information and communication technology for learning between different cultures. Related to that, further studies on the effectiveness of AI in approaches like collaborative learning, its potential on preparing learners for employment, and on the psychology of students would be helpful in informing the future advancement of Generative AI in school and particular creative areas.Link",
      "\"Optimizing Strategies for Enhanced Effectiveness in Blended Learning Models\"Abstract:Blended learning models, which combine traditional face-to-face instruction with online learning, have gained significant traction in educational settings due to their potential to offer a more flexible, personalized, and engaging learning experience. This study explores strategies to optimize the effectiveness of blended learning environments, drawing on a comprehensive literature review and data collected through a structured questionnaire administered to educators and students. Key areas of focus include personalized learning pathways, technology integration, professional development, collaborative learning, assessment and feedback, content design, accessibility and inclusivity, and self-regulated learning. The findings indicate a positive perception of adaptive learning technologies and their widespread use, highlighting the importance of personalized learning. Technological tools are effective in enhancing student engagement, though challenges in their implementation persist. Professional development is crucial for the successful integration of blended learning strategies, with a need for ongoing support tailored to educators' specific needs. Collaborative learning is valued but requires more effective implementation strategies. Continuous assessment and timely feedback are essential, yet educators face difficulties in these areas. Moreover, designing engaging and relevant content remains a challenge, despite the prevalent use of multimedia elements. Efforts to ensure accessibility and inclusivity are ongoing but require further attention. Promoting selfregulated learning is recognized as important, but additional support is necessary to foster these skills in students. Future research should focus on longitudinal studies of adaptive learning technologies, effective professional development programs, strategies to overcome technological challenges, methods to enhance collaborative learning, innovative assessment practices, engaging content design, implementation of Universal Design for Learning (UDL) principles, and strategies to promote self-regulated learning. Addressing these areas will contribute to the development of more effective and inclusive blended learning models, ultimately enhancing educational outcomes for diverse learners.Link",
      "\"Integration of Technology in Chemistry Education at University Level\"Abstract:Technology integration in chemistry education at the university level is increasingly recognized as a transformative approach to enhance teaching methodologies and improve student learning outcomes. This abstract provides a concise overview of the impact, challenges, and future directions of technology integration based on recent studies and empirical evidence. This study aims to explore the effectiveness of integrating technology, such as virtual laboratories, simulation software, and multimedia resources, in enhancing student engagement and learning in university-level chemistry education. A mixed-methods approach was employed, including surveys and interviews with students and faculty members from multiple universities. Quantitative data from pre- and post-assessments were analyzed to assess learning outcomes, while qualitative insights were gathered to explore perceptions, challenges, and recommendations related to technology integration. Findings indicate that technology-enhanced tools significantly enhance student understanding of chemistry concepts and improve problem-solving skills. Students and faculty members perceive technology as beneficial for creating interactive and dynamic learning environments. However, challenges such as technical issues and faculty resistance require institutional support and professional development initiatives to overcome. The integration of technology in chemistry education holds promise for transforming traditional teaching practices and preparing students for careers in scientific research and industry. Future research should focus on exploring emerging technologies and innovative pedagogical strategies to further optimize technology integration in higher education.Link",
      "\"Unveiling The Potential Of Ai: Impacts On Industries And Ethical Considerations\"Abstratct:Artificial Intelligence (AI) is widely regarded as a transformative tool capable of enhancing business processes, altering societal dynamics, and addressing sustainability challenges. This article explores the diverse positive effects of AI integration across various sectors and the associated challenges.Link",
      "\"AI Consciousness and Technological Advancement in Bangladesh's Higher Education: AI Awareness among the Learners\"Abstract:This comprehensive research article explores the transformative potential and multifaceted challenges of integrating Artificial Intelligence (AI) consciousness and technological advancements into the higher education system in Bangladesh. The study delves into various dimensions of this integration, including its implications for pedagogy, curriculum, institutional policy, and technological innovation. A particular emphasis is placed on addressing disparities in AI awareness among future students in Bangladesh's higher education system. The research adopts a balanced approach, juxtaposing the promise of technological advancements with critical concerns related to data privacy, educational equity, and cultural preservation. Through interdisciplinary analysis and a robust set of policy recommendations, the study posits that Bangladesh stands at a pivotal moment. It can either seize this technological epoch to elevate its higher education system to global standards while mitigating AI awareness disparities or risk exacerbating existing educational inequities.Link",
      "\"Inadequate Netiquette Citizen of Digital Bangladesh\"Abstract:The study introduced the concept of netiquette, which refers to rules of conduct for respectful communication on the Internet. It highlights the lack of adequate netiquette practices among the citizens of Bangladesh despite the growing use of the Internet in the country. The aim of the study is to explore netiquette behavior in Bangladesh, identify rule violations and understand the impact of poor netiquette on online communities. The importance of the study lies in promoting responsible online behavior, preventing cyberbullying and maintaining a positive digital environment. Research methods include literature review, observational studies, interviews, content analysis and ethnographic research to comprehensively explore the issue. This statement discusses the concept of netiquette (internet etiquette) in the context of Digital Bangladesh, focusing on its meaning, existing practices and limitations. It highlights the lack of attention paid to netiquette in research and the need for a clear definition and understanding of the term. The statement also identifies netiquette issues in Bangladesh, particularly among young people, and provides recommendations to promote responsible online behavior. The ultimate goal is to create a positive and respectful digital environment for all citizens of Bangladesh.Link",
      "\"Breaking Barriers And Empowering Girls: A Study On The Impact Of Education On Gender Equality And Women's Empowerment In Bangladesh\"Abstract:This study focuses on the impact of education on gender equality and women's empowerment in Bangladesh, with a specific emphasis on breaking barriers and empowering girls. The introduction highlights the historical oppression of women and the need for women's empowerment in today's world. Bangladesh's progress in improving women's lives and gender equality is acknowledged. The background outlines the historical low social status of women and the existing gender disparities in education, marriage, and the workplace. The statement of the problem identifies the research's objective to examine barriers to girls' education and explore how education can promote gender equality and women's empowerment. The significance of the study lies in its potential to contribute to policy-making and gender discourse. The objectives of the research include assessing the current state of gender equality, examining the link between education and empowerment, identifying barriers to girls' education, and analyzing education's role in challenging gender roles. The research methods involve a literature review and qualitative data collection through interviews and observations of key stakeholders in Bangladesh. This discussion focuses on the status of girls' education in Bangladesh and the challenges it faces in achieving gender equality and women's empowerment. While progress has been made in increasing female literacy and enrollment, economic vulnerability, patriarchal norms, and limited access in rural areas continue to hinder girls' education. The study emphasizes the importance of women's empowerment and the positive impacts it has on individuals, families, and society as a whole. The recommendations include implementing gendersensitive policies, raising awareness, engaging communities, providing financial support, and improving educational infrastructure to ensure equal opportunities for girls in Bangladesh. Achieving these goals will contribute to the overall development of the country and foster a more inclusive and equitable society.Link",
      "\"INVESTIGATION INTO THE ADDITION OFBENZOIC ACID AND STYRENE OXIDE & EFFECT OF PHOSPHONIUM SALTS FOR FLAMERETARDANCY IN POLYURETHANE FILMS\"Abstract:The thesis will be divided into two sections. First, the synthesis of a 1,2-hydroxy ester was performed using styrene oxide and benzoic acid using several different catalysts and solvents. This project was chosen because there is a limited number of studies in literature and they did not report a systematic study. Various catalysts will be used in this study such as tetrabutylammonium bromide, tetrabutylammonium chloride, tetrabutylammonium fluoride, tetrabutylammonium iodide to determine the effects of the halide on the reaction. The solvents chosen for this research were toluene, isopropanol, butanol and THF to determine solvents effects. Samples were analyzed by Fourier-transform infrared (FT-IR) spectroscopy and Nuclear magnetic resonance (NMR) spectroscopy. FTIR was used to determine reaction completion and NMR was used to determine the ratio of the regioisomers. The second part of the research is the study of the effects of novel phosphonium salts on flame retardancy. New flame resistant materials are required industrially to replace halogenated flame retardants since these compounds have a negative environmental impact. In this study, phosphonium salts and triphenyl phosphate were incorporated into polyurethane films. FT-IR was used to characterize the polymer. Polyurethane films containing phosphonium salts and triphenyl phosphate were characterized by a burn test and thermogravimetric analysis (TGA) to determine their effect on flame retardancy and thermal stability.Details - (Link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Dr. Hasan K K",
    "title": "Associate Professor (On Study Leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "hasan.k.k@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/NmrDcYahhWM4bjGgVLXC.jpg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-hasan-k-k",
    "education": [
      {
        "degree": "Post-Doctoral Scholar",
        "institute": "Universiti Malaysia Kelantan(Kelantan, Malaysia)",
        "year": "Ongoing(Remote)"
      },
      {
        "degree": "Ph.D. in Business Management",
        "institute": "Tripura University (A Central University), Agartala, India",
        "year": "2023"
      },
      {
        "degree": "M.Sc. (Management)",
        "institute": "Peter the Great St.Petersburg Polytechnic University, St. Petersburg, Russia",
        "year": "2003"
      },
      {
        "degree": "B.Sc. (Management)",
        "institute": "Peter the Great St.Petersburg Polytechnic University,St. Petersburg, Russia",
        "year": "2002"
      },
      {
        "degree": "H.S.C.",
        "institute": "Meher Degree College, Chandpur, Bangladesh",
        "year": "1995"
      },
      {
        "degree": "S.S.C.",
        "institute": "Comilla Ishwar Patshala, Cumilla, Bangladesh.",
        "year": "1993"
      }
    ],
    "experience": [
      {
        "institute": "Associate Professor",
        "designation": "University of Scholars",
        "duration": "January, 2024 to Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "July 18, 2023 to December, 2023"
      },
      {
        "institute": "Assistant Professor",
        "designation": "European University of Bangladesh",
        "duration": "September 01, 2014 – April 30, 2023"
      },
      {
        "institute": "Tripura University, India",
        "designation": "Teaching Assistant(During Ph.D.)",
        "duration": "September 30, 2019 – August 31, 2022"
      }
    ],
    "publications": [
      "1.1 Refereed Journals Articles:Mukherjee, D. andKamrul Hasan, K. (2020) ‘Challenges in Learning Continuity during the COVID-19 Pandemic: A Methodological and Thematic Review’,South Asian Journal of Management, 27(3), pp. 56–78.Indexed by ABDC & UGC Care List, IndiaMostofa, S. M., Othman, R., Mukherjee, D., &Hasan, K. K. (2020). A Comprehensive Framework of Design Thinking Approach in Knowledge Management: A Review in Academic Context.Journal of Education Culture and Society,11(2), 281–294.https://doi.org/10.15503/jecs2020.2.281.294Indexed by Web of Science & UGC Care List, IndiaOthman, R., Mukherjee, D., Mostofa, S., &Kamrul Hasan, K.(2021). Synchronous Web-based Learning during COVID -19 Pandemic: A Survey on Library and Information Science Students of Bangladesh.Journal of Information Technology Management, 13(2), 93-112. doi: 10.22059/jitm.2021.80357.Indexed by Scopus.Hasan, K. K., Mukherjee, D., & Saha, M. (2021). Learning Continuity during COVID-19 Pandemic using the Virtual Classroom–A Cross-border experimental Multi Case Approach.Journal of Education Culture and Society,12(1), 335-345.Indexed by Web of Science.Mukherjee, D.,Hasan, K. K., Saha, M., Rahman, M., Nasrin, M., & Karim, R. (2022). Evolution of classrooms in primary education using a design thinking approach: the case of Rajshahi District of Bangladesh.International Journal of Knowledge and Learning,DOI:10.1504/IJKL.2022.10044747.Indexed by ScopusHasan, K. K., Mostofa, S. M., Othman, R., & Mukherjee, D. (2022). Blended Learning During Pandemic Through Knowledge Management: An Analytical Study.Journal of Information & Knowledge Management,21(Supp01), 2240006.https://doi.org/10.1142/S0219649222400068.Indexed by ABDC and Scopus.Mukherjee, D., Chakraborty, S., Bhadra, S.,Hasan, K. K., Jena, L. K., & Debnath, R. (2022). Responsible Governance in Containing the Spread of COVID-19 in a Developing State.Journal of Education Culture and Society,13(2), 119–136.https://doi.org/10.15503/jecs2022.2.119.136.Indexed by Web of Science.Islam, M., Mukherjee, D., Jena, L. K., Chakraborty, S.,Hasan, K. K., & Debnath, R. (2022). Antecedents of Livelihood Development Using Cold Chains in the Horticultural Sector of the Emerging Markets: A Systematic Literature Review.Horticulturae,8(12), 1196.Indexed by Scopus.Mukherjee, D., Chakraborty, S., Jena, L. K.,Hasan, K. K., Debnath, R., & Mitra, S. (2023). Efficacy of Online Training of the Elected Representatives of Local Rural Government: A Focus Group Study.Journal of Education Culture and Society, 14(1), 415-432.Indexed by Scopus and Web of Science.Mukherjee, D., &Hasan, K. K.(2023). Learning Continuity during COVID-19: An Analysis of the Higher Education Sector of Bangladesh.Journal of Education Culture and Society, 14(1), 650-671.Indexed by Scopus and Web of Science.Noor, B., Ahsan, M. M.,Hasan, K. K., & Rahman, R. (2023). Factors Influencing the Awareness of Green Human Resource Management Practices in Bangladesh: An Application of Hierarchical Logistic Regression Model.Journal of Hunan University Natural Sciences, 50(5).Indexed by Scopus.Khandakar, H.,Hasan, K. K., Permarupan, Y. P. & Afnan, K. F. (2023). A Thematic Analysis of the Metaverse within Society 5.0 in Education. Journal of Hunan University Natural Sciences, 50(10).The Indexed by Scopus (Q2).1.2 Edited Volume (Book Chapters): Conference ProceedingsMukherjee, D. &Hasan, K. K.(2020), “Purvottaran – The Rise of North East: Paradigms of Development in the VUCA World”,Mukherjee, D and Saha, M. (Eds.),Metaliteracy: A Comprehensive Learning Framework for New Age Students,Bloomsbury,  New Delhi, India, pp. 393-410.Mukherjee, D., &Hasan, K. K.(2022). Learning Continuity in the Realm of Education 4.0: Higher Education Sector in the Post-pandemic of COVID-19. In: Subudhi, R.N., Mishra, S., Saleh, A., Khezrimotlagh, D. (eds) Future of Work and Business in Covid-19 Era. Springer Proceedings in Business and Economics. Springer, Singapore.https://doi.org/10.1007/978-981-19-0357-1_15.Indexed by Scopus.Mamun Mostofa, S.K.,Hasan, K. K., Mukherjee, D., Hoq, K.M., & Othman, R. (2022). Learning Continuity During the Novel Coronavirus (COVID-19): A Case Study of Arts Faculty Students at University of Dhaka. In: Alareeni, B., Hamdan, A. (eds) Financial Technology (FinTech), Entrepreneurship, and Business Development. ICBT 2021.https://doi.org/10.1007/978-3-031-08087-6_20.Indexed by Scopus.Mostofa, S. M., Hossain, M., Othman, R.,Hasan, K. K.,& Rahman, M. K. (2023). Student Perception on Knowledge Management: Effectiveness of Online Learning During the Pandemic. InInternational Conference on Business and Technology(pp. 889-905). Springer, Cham.https://doi.org/10.1007/978-3-031-08090-6_57.Indexed by Scopus.Ababkova, M.Y.,Hasan, K. K., Mukherjee, D., Mamun Mostofa, S.K., Othman, R. (2023). Self-assessment of Psychological Issues of Bangladeshi and Russian Students on the Online Learning During the Pandemic. In: Bylieva, D., Nordmann, A. (eds) Technologies in a Multilingual Environment. PCSF 2022. Lecture Notes in Networks and Systems, vol 636. Springer, Cham.https://doi.org/10.1007/978-3-031-26783-3_26.Indexed by Scopus.Mukherjee, D., Debnath, R., Chakraborty, S., Jena, L. K., &Hasan, K. K.(2023). Performance Improvement in Budget Hotels Through Consumer Sentiment Analysis Using Text Mining. In Smart Analytics, Artificial Intelligence and Sustainable Performance Management in a Global Digitalised Economy (pp. 67-85). Emerald Publishing Limited.https://doi.org/10.1108/S1569-37592023000110A004Mukherjee, D., Debnath, R., Jena, L. K., Chakraborty, S., &Hasan, K. K.(2023). An analysis of the bibliometrics of educational research between 2012 and 2022 related to \"Management education. Sustainable Business Model Innovation and Management Practices (pp. 265-286.). Mittal Publications (New Delhi, India).1.3 Edited Volume (Book Chapters): Research BlogKhandakar, H., &Hasan, K. K. (2023). Taking Humanity's Next Leap with Society 5.0. Zenodo.https://doi.org/10.5281/zenodo.8064112.Indexed by OpenAIRE.Mukherjee, D., Chatterjee, R., & Mitra, S. (2022). Rural Livelihood Development in Tripura: An MGNREGS Experience. Kaveri Books (New Delhi, India).Reviewed this book at the daily newspaper titled “A Focus on the Rural Livelihood” by North East Colors in Agartala, India on 23rdof April, 2022.Training/Workshops:One-week professional development program on “Seeking Solutions During & Post Pandemic COVID-19: A Perspective from food security, health education, Economy & Technology” at College of Business, University of Buraimi, Sultanate of Oman on 21stof June – 25thof June, 2020.One-week Online Faculty Development Program, organized by IQAC Cell in collaboration with World Bank Project by The Govt. Narmada College, Hoshangabad (M.P.), India on 20thof July – 31stof July, 2020.National Webinar on “Indian business and its leadership: Post COVID strategies”, organized by the Department of Business Administration, Holy Cross College, Agartala, India on 7thof August, 2020.International Webinar on COVID-19 and its impact on Global Economy, organized by LEAD India Foundation on 13thof August, 2020.Online International Training on “Disaster Risk Resilience leadership”, organized by The Panchayat Raj Trainning Institute, A.D. Nagar, Agartala, India on 24thof September – 25thof September, 2020.Five day faculty development program on the theme “Pedagogical Practices of New India Under National Education Policy, 2020”, jointly organized by Tripura University, Manipur University and Assam University on 7thof October – 11thof October, 2020.National Seminar (Web) on Ancient Indian Education System, organized by NITTTR Kalkata on 11thof November-12thof November, 2020.One Week International Faculty Development Programme on “Innovative Approaches in Engineering, Technology & Management Teaching”, organized by Babu Banarsi Das Institute of Technology and Management (BBDITM) on April 17-21, 2021.Bangladesh Society for Private University Academics (BSPUA) in collaboration with Agile in Education USA, New York is organizing a One-day workshop on \"Application of Scrum in Academia and Industry\" on December 1, 2023.",
      "Mukherjee, D. andKamrul Hasan, K. (2020) ‘Challenges in Learning Continuity during the COVID-19 Pandemic: A Methodological and Thematic Review’,South Asian Journal of Management, 27(3), pp. 56–78.Indexed by ABDC & UGC Care List, India",
      "Mostofa, S. M., Othman, R., Mukherjee, D., &Hasan, K. K. (2020). A Comprehensive Framework of Design Thinking Approach in Knowledge Management: A Review in Academic Context.Journal of Education Culture and Society,11(2), 281–294.https://doi.org/10.15503/jecs2020.2.281.294Indexed by Web of Science & UGC Care List, India",
      "Othman, R., Mukherjee, D., Mostofa, S., &Kamrul Hasan, K.(2021). Synchronous Web-based Learning during COVID -19 Pandemic: A Survey on Library and Information Science Students of Bangladesh.Journal of Information Technology Management, 13(2), 93-112. doi: 10.22059/jitm.2021.80357.Indexed by Scopus.",
      "Hasan, K. K., Mukherjee, D., & Saha, M. (2021). Learning Continuity during COVID-19 Pandemic using the Virtual Classroom–A Cross-border experimental Multi Case Approach.Journal of Education Culture and Society,12(1), 335-345.Indexed by Web of Science.",
      "Mukherjee, D.,Hasan, K. K., Saha, M., Rahman, M., Nasrin, M., & Karim, R. (2022). Evolution of classrooms in primary education using a design thinking approach: the case of Rajshahi District of Bangladesh.International Journal of Knowledge and Learning,DOI:10.1504/IJKL.2022.10044747.Indexed by Scopus",
      "Hasan, K. K., Mostofa, S. M., Othman, R., & Mukherjee, D. (2022). Blended Learning During Pandemic Through Knowledge Management: An Analytical Study.Journal of Information & Knowledge Management,21(Supp01), 2240006.https://doi.org/10.1142/S0219649222400068.Indexed by ABDC and Scopus.",
      "Mukherjee, D., Chakraborty, S., Bhadra, S.,Hasan, K. K., Jena, L. K., & Debnath, R. (2022). Responsible Governance in Containing the Spread of COVID-19 in a Developing State.Journal of Education Culture and Society,13(2), 119–136.https://doi.org/10.15503/jecs2022.2.119.136.Indexed by Web of Science.",
      "Islam, M., Mukherjee, D., Jena, L. K., Chakraborty, S.,Hasan, K. K., & Debnath, R. (2022). Antecedents of Livelihood Development Using Cold Chains in the Horticultural Sector of the Emerging Markets: A Systematic Literature Review.Horticulturae,8(12), 1196.Indexed by Scopus.",
      "Mukherjee, D., Chakraborty, S., Jena, L. K.,Hasan, K. K., Debnath, R., & Mitra, S. (2023). Efficacy of Online Training of the Elected Representatives of Local Rural Government: A Focus Group Study.Journal of Education Culture and Society, 14(1), 415-432.Indexed by Scopus and Web of Science.",
      "Mukherjee, D., &Hasan, K. K.(2023). Learning Continuity during COVID-19: An Analysis of the Higher Education Sector of Bangladesh.Journal of Education Culture and Society, 14(1), 650-671.Indexed by Scopus and Web of Science.",
      "Noor, B., Ahsan, M. M.,Hasan, K. K., & Rahman, R. (2023). Factors Influencing the Awareness of Green Human Resource Management Practices in Bangladesh: An Application of Hierarchical Logistic Regression Model.Journal of Hunan University Natural Sciences, 50(5).Indexed by Scopus.",
      "Khandakar, H.,Hasan, K. K., Permarupan, Y. P. & Afnan, K. F. (2023). A Thematic Analysis of the Metaverse within Society 5.0 in Education. Journal of Hunan University Natural Sciences, 50(10).The Indexed by Scopus (Q2).",
      "Mukherjee, D. &Hasan, K. K.(2020), “Purvottaran – The Rise of North East: Paradigms of Development in the VUCA World”,Mukherjee, D and Saha, M. (Eds.),Metaliteracy: A Comprehensive Learning Framework for New Age Students,Bloomsbury,  New Delhi, India, pp. 393-410.",
      "Mukherjee, D., &Hasan, K. K.(2022). Learning Continuity in the Realm of Education 4.0: Higher Education Sector in the Post-pandemic of COVID-19. In: Subudhi, R.N., Mishra, S., Saleh, A., Khezrimotlagh, D. (eds) Future of Work and Business in Covid-19 Era. Springer Proceedings in Business and Economics. Springer, Singapore.https://doi.org/10.1007/978-981-19-0357-1_15.Indexed by Scopus.",
      "Mamun Mostofa, S.K.,Hasan, K. K., Mukherjee, D., Hoq, K.M., & Othman, R. (2022). Learning Continuity During the Novel Coronavirus (COVID-19): A Case Study of Arts Faculty Students at University of Dhaka. In: Alareeni, B., Hamdan, A. (eds) Financial Technology (FinTech), Entrepreneurship, and Business Development. ICBT 2021.https://doi.org/10.1007/978-3-031-08087-6_20.Indexed by Scopus.",
      "Mostofa, S. M., Hossain, M., Othman, R.,Hasan, K. K.,& Rahman, M. K. (2023). Student Perception on Knowledge Management: Effectiveness of Online Learning During the Pandemic. InInternational Conference on Business and Technology(pp. 889-905). Springer, Cham.https://doi.org/10.1007/978-3-031-08090-6_57.Indexed by Scopus.",
      "Ababkova, M.Y.,Hasan, K. K., Mukherjee, D., Mamun Mostofa, S.K., Othman, R. (2023). Self-assessment of Psychological Issues of Bangladeshi and Russian Students on the Online Learning During the Pandemic. In: Bylieva, D., Nordmann, A. (eds) Technologies in a Multilingual Environment. PCSF 2022. Lecture Notes in Networks and Systems, vol 636. Springer, Cham.https://doi.org/10.1007/978-3-031-26783-3_26.Indexed by Scopus.",
      "Mukherjee, D., Debnath, R., Chakraborty, S., Jena, L. K., &Hasan, K. K.(2023). Performance Improvement in Budget Hotels Through Consumer Sentiment Analysis Using Text Mining. In Smart Analytics, Artificial Intelligence and Sustainable Performance Management in a Global Digitalised Economy (pp. 67-85). Emerald Publishing Limited.https://doi.org/10.1108/S1569-37592023000110A004",
      "Mukherjee, D., Debnath, R., Jena, L. K., Chakraborty, S., &Hasan, K. K.(2023). An analysis of the bibliometrics of educational research between 2012 and 2022 related to \"Management education. Sustainable Business Model Innovation and Management Practices (pp. 265-286.). Mittal Publications (New Delhi, India).",
      "Khandakar, H., &Hasan, K. K. (2023). Taking Humanity's Next Leap with Society 5.0. Zenodo.https://doi.org/10.5281/zenodo.8064112.Indexed by OpenAIRE.",
      "Mukherjee, D., Chatterjee, R., & Mitra, S. (2022). Rural Livelihood Development in Tripura: An MGNREGS Experience. Kaveri Books (New Delhi, India).Reviewed this book at the daily newspaper titled “A Focus on the Rural Livelihood” by North East Colors in Agartala, India on 23rdof April, 2022.",
      "One-week professional development program on “Seeking Solutions During & Post Pandemic COVID-19: A Perspective from food security, health education, Economy & Technology” at College of Business, University of Buraimi, Sultanate of Oman on 21stof June – 25thof June, 2020.",
      "One-week Online Faculty Development Program, organized by IQAC Cell in collaboration with World Bank Project by The Govt. Narmada College, Hoshangabad (M.P.), India on 20thof July – 31stof July, 2020.",
      "National Webinar on “Indian business and its leadership: Post COVID strategies”, organized by the Department of Business Administration, Holy Cross College, Agartala, India on 7thof August, 2020.",
      "International Webinar on COVID-19 and its impact on Global Economy, organized by LEAD India Foundation on 13thof August, 2020.",
      "Online International Training on “Disaster Risk Resilience leadership”, organized by The Panchayat Raj Trainning Institute, A.D. Nagar, Agartala, India on 24thof September – 25thof September, 2020.",
      "Five day faculty development program on the theme “Pedagogical Practices of New India Under National Education Policy, 2020”, jointly organized by Tripura University, Manipur University and Assam University on 7thof October – 11thof October, 2020.",
      "National Seminar (Web) on Ancient Indian Education System, organized by NITTTR Kalkata on 11thof November-12thof November, 2020.",
      "One Week International Faculty Development Programme on “Innovative Approaches in Engineering, Technology & Management Teaching”, organized by Babu Banarsi Das Institute of Technology and Management (BBDITM) on April 17-21, 2021.",
      "Bangladesh Society for Private University Academics (BSPUA) in collaboration with Agile in Education USA, New York is organizing a One-day workshop on \"Application of Scrum in Academia and Industry\" on December 1, 2023."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Alia Rawshan Banu",
    "title": "Sr. Lecturer & Course Coordinator",
    "dept": "english",
    "deptName": "Department of English",
    "email": "alia.rawshan.banu@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/W8GqsuFf1jQHOqMNyr6U.jpg",
    "profileUrl": "https://ius.edu.bd/profile/alia-rawshan-banu",
    "education": [
      {
        "degree": "Ph D (Researcher)",
        "institute": "Bangladesh University of Professionals (BUP)",
        "year": "Ongoing"
      },
      {
        "degree": "M.A. in ELT & Applied Linguistics",
        "institute": "Brac University",
        "year": "2023"
      },
      {
        "degree": "M.A. in English",
        "institute": "Rajshahi University",
        "year": "2006"
      },
      {
        "degree": "B.A. in English",
        "institute": "Rajshahi University",
        "year": "2004"
      },
      {
        "degree": "H.S.C",
        "institute": "Cantonment Public School & College, Saidpur",
        "year": "1997"
      },
      {
        "degree": "S.S.C",
        "institute": "Cantonment Public School & College, Saidpur",
        "year": "1995"
      }
    ],
    "experience": [
      {
        "institute": "Sr. Lecturer",
        "designation": "University of Scholars",
        "duration": "April 2024 - Present"
      },
      {
        "institute": "Sr. Lecturer",
        "designation": "Daffodil International College, Dhaka",
        "duration": "March 2014 - March 2024"
      },
      {
        "institute": "Lecturer",
        "designation": "Joypurhat Girls’ Cadet College",
        "duration": "August 2008 – December 2013"
      }
    ],
    "publications": [
      "1. Alia Rawshan Banu, Prof. Salma Ainy Ph D, Md Najmul Huda; Internationalization of English in Bangladeshi Higher Education: Evaluating Teachers’ Self-Efficacy and Understanding; Asian Journal of Social Sciences and Legal Studies 2025. 7(4), 358-365https://doi.org/10.34104/ajssls.025.035803652. Alia Rawshan Banu, Saifun Nahar Srabonty, Md. Mohaiminul Islam, Amena Parvin Tisha, Umme Shifati Islam; Barricades to Reading Expertise among Students of Secondary High School of Bangladesh: Major Challenges and Insights; Asian Journal of Social Sciences and Legal Studies 2025. 7(2), 308-315http://doi.org/10.34104/ajssls.025.030803153.  Alia Rawshan Banu , Tahmina Kabir Tresha, Sabiha Sultana Chowdhury, Saifun Nahar Srabonty; Online Library Interfaces: A User-Centered Study on Design and Functionality Preferences of Gen-Z Users, Journal Of Creative Writing (ISSN-2410-6259): Vol. 8 No. 3 (2024)https://doi.org/10.70771/jocw.130"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Shadia Sharmin",
    "title": "Associate Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "shadia.sharmin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/kNN5vOOTUxznhdZHpjnx.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shadia-sharmin",
    "education": [
      {
        "degree": "Ph.D. fellow",
        "institute": "Bangladesh University of Professionals (BUP)",
        "year": "2017"
      },
      {
        "degree": "Master of Business Administration (MBA)",
        "institute": "University of Dhaka",
        "year": "2006"
      },
      {
        "degree": "Bachelor of Business Administration (BBA)",
        "institute": "University of Dhaka",
        "year": "2005"
      },
      {
        "degree": "Higher Secondary School Certificate (HSC)",
        "institute": "Chittagong Government Commerce College",
        "year": "1999"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Aparana Charan Girls’ High School",
        "year": "1997"
      }
    ],
    "experience": [
      {
        "institute": "Associate Professor",
        "designation": "University of Scholars",
        "duration": "Feb 2025 - Present"
      },
      {
        "institute": "Senior Assistant Professor",
        "designation": "University of Scholars",
        "duration": "June 2024 - Jan 2025"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "May 2019 - May 2024"
      },
      {
        "institute": "Assistant Professor & Head In-Charge",
        "designation": "University of South Asia",
        "duration": "May 2018- Jan 2019"
      },
      {
        "institute": "Lecturer",
        "designation": "University of South Asia",
        "duration": "Jan 2015 - May 2018"
      },
      {
        "institute": "Lecturer",
        "designation": "Atish Dipankar University of Science & Technology",
        "duration": "May 2013-Jan 2015"
      },
      {
        "institute": "Teacher",
        "designation": "Sea-breeze International School & College",
        "duration": "April 2010-May 2013"
      },
      {
        "institute": "Human Resources Executive",
        "designation": "Transcom Electronics Limited",
        "duration": "April 2007–August 2007"
      },
      {
        "institute": "Human Resources Officer",
        "designation": "Nestle Bangladesh Ltd",
        "duration": "October 2006 – March 2007"
      }
    ],
    "publications": [
      "Shadia Sharmin “Employee Training and Its Impact on Employee and Organization Performance: An Overview on Different Organization of Dhaka City”, University of South Asia Journal, Volume-3, Issue-1, (August-2017), ISSN: Print) 2411-3077.",
      "Shadia Sharmin “Recruitment and Selection Process of Nestle Bangladesh Limited and Its Impact on the Human Resources Management Practices of the Organization, University of South Asia Journal, Volume-2, Issue-1, (December 2016), ISSN: Print: 2411-3077.",
      "Shadia Sharmin “Recruitment and Selection process in the Public and Private University of Dhaka City in Bangladesh: A Comparative Study”, International Journal of Management and Business Studies (IJMBS), Cosmic Journal, Volume .5.3, 2015,ISSN:2230-9519(Online),ISSN: 2231-2463(Print).Abstract:In this paper the author present and discuss the importance of recruitment and selection process and try find the practices of recruitment and selection process of public and private universities of Dhaka city of Bangladesh. The result indicate that there is general desire of the responded to practice fair and develop recruitment and selection process but sometime the surrounding environment is not support them. Evidence was also support that the universities had depth understanding of the process.Details - (link)",
      "Shadia Sharmin, Farhanaz Luna “Customer relation Management: A study on BRAC Bank Limited”, University of South Asia Journal, Volume-1, Issue-1, (August-2015), ISSN: Print) 2411-3077.",
      "Farrhanaz Luna, Shadia Sharmin “CSR is a Management Practice to improve Financial Performance of Banks: A study on Banks of Dhaka City, Bangladesh”, SCIEDU press Canada-International Journal of Business Administration, Volume-6, No-4 (June-2015), ISSN: 1923-4007 (Print), ISSN: 1923-4015(Online).",
      "Shadia Sharmin and Farhanaz Luna “The socio economic condition of female slum dwellers: a case study on slums in Dhaka”, ISOR-Journal of Humanities and social Science (ISOR-JHSS), Volume-20, Issue-3, March2015.ISSN -2279-0845 (Print), ISSN-2279-0837(Online)."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Sadia Sultana",
    "title": "Assistant Professor & Co-Head",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "sadia.sultana@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/RHnmmAxBY4ylZjKXdgnw.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sadia-sultana",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "East West University",
        "year": "2017"
      },
      {
        "degree": "B.Sc.",
        "institute": "East West University",
        "year": "2016"
      },
      {
        "degree": "HSC",
        "institute": "Siddheswari Girls' College",
        "year": "2010"
      },
      {
        "degree": "SSC",
        "institute": "Badda Alatunnessa Higher Secondary School",
        "year": "2008"
      }
    ],
    "experience": [
      {
        "institute": "Co-Head",
        "designation": "University of Scholars",
        "duration": "Oct 2024 - Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "Oct 2021 – Present"
      },
      {
        "institute": "Coordinator",
        "designation": "University of Scholars",
        "duration": "Nov 2018 – Sept 2024"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "Feb 2018 – Sept 2021"
      },
      {
        "institute": "Graduate Teaching Assistant",
        "designation": "East West University",
        "duration": "May 2016 – Jan 2018"
      }
    ],
    "publications": [
      "pH and Temperature Monitoring with a GSM-based Auto Feeding System of a Biofloc Technology.Abstract:Biofloc technology (BFT), the new \"blue revolution\" in aquaculture, has the potential to increase aquaculture production's sustainability without sacrificing quality. The main challenge of biofloc technology is the recycling of waste nutrients, particularly nitrogen, into microbial biomass by controlling the water property. Much work has been published since the introduction of BioFloc Technology to evaluate this system in various contexts and under various nutritional situations. This paperwork is being done on the design and development of a water quality monitoring system of a Biofloc, with the objective of notifying the user through some LED's and displays. The pH value and temperature of water in Biofloc are sensed with a pH sensor and temperature sensor respectively and will notify through LED's. Also, an automatic feeding system is added which is controlled by sending SMS through a GSM module that controls a servo motor to open and close the food gate accordingly.Details - (link)",
      "The Success of the Electric Vehicle and Simulation of an Electric Vehicle Navigation System with PWM Control.Abstract:This paper gives an outline of ongoing work on electric vehicles in the area. The paper depicts the turn of events, and examination of various pieces of the principal segments of battery innovation, engine, forward, invert, start-stop, and slowing down are inspected. The paper examines the benefits of diesel motors and electric motors. Here are a few depictions of how the dark smoke from a diesel motor can harm our bodies. The paper, at last, appears as models of some electric vehicles finishing of administrative work.Details - (link)",
      "Study on Ultra-Wideband (UWB) System and Its Applications.Abstract:Ultra-Wideband (UWB) system is a prominent wireless technology which provides a very different approach compared to traditional narrowband systems. It is considered a promising solution for high data-rate and short-range wireless communication system to meet an ever-growing demand for high speed. This technology is developed to transfer data at high rates over short distances at a very low frequency. Before 2001 UWB's application was limited mainly in military areas and gradually Federal Communications Commission (FCC) has allowed the commercial usage of the bandwidths of UWB. FCC regulates the frequency for the UWB technique is from 3.1ghz to 10.6ghz and the linear band is 500 mhz. In this paper, we've mainly focused on its applications in different arenas. This paper also represents its technological challenges, the advantages, and drawbacks as well as future work scopes.Details - (link)",
      "Access point management in overcrowded WLANs.Abstract:In this paper, we analyze the relationship of number of access point (AP) and achieved throughput for a given scenario. In the scenario, we consider a number of parameters, i.e. given area, topology, number of users, expected rate and channel allocation vector. We find that in general with the increase of AP the performance of overall network improves. However, after a certain number of deployed APs, further increase of AP does not bring substantial improvement in the network performance. More specially, performance deteriorates after a threshold value of number of APs. The main reason for this performance deterioration is the increase of interference between adjacent channel (or co-channel) interference. We verify the throughput increasing rate with proper management of Aps by simulation results using WIMNET (Wireless Internet-access Mesh Network) simulator.Details - (link)",
      "A Smart Control System of Home Appliances Using SMS.Abstract:This paper is about the development and implementation of a GSM based password protected control system for electrical home appliances that enables to control remotely. GSM module is used for receiving short message service (SMS) from user's mobile phone that automatically enable the controller to take any further action such as to switch ON or OFF the home appliances such as lights, air-conditioners, fans, water pumps, door locks, TVs etc. Hardware of the system has been developed using an Arduino Uno board, GSM modules, some switching relays and some other easily available electronic components. The driving software has been made using the Arduino IDE. The system is activated when only the user sends the SMS to the controller at home with the exact password. Upon receiving the SMS command, the microcontroller unit will decode the received SMS automatically and controls the electrical home appliances by switching ON or OFF the device according to the user direction.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Reduanul Bari Shovon",
    "title": "Assistant Professor",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "reduanul.bari.shovon@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/pAVSKYYFPiW3ANwKZxaX.jpg",
    "profileUrl": "https://ius.edu.bd/profile/reduanul-bari-shovon",
    "education": [
      {
        "degree": "MSc",
        "institute": "Jahangirnagar University",
        "year": "2020"
      },
      {
        "degree": "BSc",
        "institute": "North South University",
        "year": "2018"
      },
      {
        "degree": "HSC",
        "institute": "Savar Cantonment Public School and College",
        "year": "2012"
      },
      {
        "degree": "SSC",
        "institute": "Savar Cantonment Public School and College",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "01/06/2024 - Present"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "5/04/2021 - 31/05/2024"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Global Village (UGV)",
        "duration": "01/02/2020 - 30/11/2021"
      },
      {
        "institute": "Executive",
        "designation": "Service Engine Limited",
        "duration": "1/11/2019 - 30/11/2019"
      }
    ],
    "publications": [
      "Iot Based Real Time Environment Monitoring and Forecasting System incorporation with Air Pollution Detector based on Naïve Bayes Algorithm.Abstract:Environment is one of the burning issues nowadays. So, weather monitoring has received much attention in recent time. At that time, people want to stay updated about the latest weather conditions of any place like: - Industrial areas, Office’s and Visiting areas etc. In Today’s World, knowing live environmental condition is one of the biggest issues because there is an IoT of hurdles arrives when live environmental condition is measured. The proposed system will try to remove this problem since it monitors real time weather conditions. This proposed system monitors and forecast the real time environmental condition by measuring the parameters like temperature, humidity, moisture and rain level. But the unique solution of this proposed system is it will predict the nearest accurate value of weather forecast by integrating the detection of both air and water polluting criteria’s using CO and CH4detection level in a particular area. So that what we need to measure the precautions can be easily identified. For transmitting the sensing data, we will use Arduino UNO and NODE MCU. For Data management and connection issues, we will use Naïve Bayes and Chi Square Algorithm for Analysis. The data will be represented through web server and users can access and notified anywhere through internet connection. It is a cloud based and has easy monitoring and data visualization modules. This proposed system is comparatively low cost one and user-friendly. It evaluated in different stages and after testing the real time evaluation assessments, the validity, reliability and feasibility can be measured.",
      "Real Time Face Detection, Recognition and Verification Technology By Thesis Enhancing the Security of ATM Booth Using Raspberry Pi, Webcam Module and Image Processing with OpenCV Library.Abstract:The task was to develop a system that integrates real time facial detection and recognition technology into the identity verification process which will be used in ATMs. Here the system proposes an ATM security model that would combine a RFID (Radio Frequency Identified) access card, an electronic facial detection and recognition and a navigating display output using Raspberry pi, Web-cam and Arduino module that will go as far as withdrawing money and to prevent criminal activities. The combined features approach is to serve the purpose of both the identification and authentication that card and PIN do."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Anirban Sarkar",
    "title": "Assistant Professor & Mentor (Diploma)",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "anirban.sarkar@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/gWAsQsXEWHOFPOIr92lV.jpg",
    "profileUrl": "https://ius.edu.bd/profile/anirban-sarkar",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "East West University",
        "year": "2017"
      },
      {
        "degree": "B.Sc.",
        "institute": "East West University",
        "year": "2016"
      },
      {
        "degree": "HSC",
        "institute": "Govt. Bangabandhu College",
        "year": "2011"
      },
      {
        "degree": "SSC",
        "institute": "Panchapolli Barha Domrashur High School",
        "year": "2009"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Proctor",
        "designation": "University of Scholars",
        "duration": "01 October 2024 to Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "01 April 2022 to Present"
      },
      {
        "institute": "Coordinator",
        "designation": "University of Scholars",
        "duration": "20 September 2021 to Present"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "01 February 2019 to 31 March 2022"
      },
      {
        "institute": "Graduate Teaching Assistant (GTA)",
        "designation": "East West University",
        "duration": "September 2016 to April 2018"
      }
    ],
    "publications": [
      "pH and Temperature Monitoring with a GSM-based Auto Feeding System of a Biofloc Technology.Abstract:Biofloc technology (BFT), the new \"blue revolution\" in aquaculture, has the potential to increase aquaculture production's sustainability without sacrificing quality. The main challenge of biofloc technology is the recycling of waste nutrients, particularly nitrogen, into microbial biomass by controlling the water property. Much work has been published since the introduction of BioFloc Technology to evaluate this system in various contexts and under various nutritional situations. This paperwork is being done on the design and development of a water quality monitoring system of a Biofloc, with the objective of notifying the user through some LED’s and displays. The pH value and temperature of water in Biofloc are sensed with a pH sensor and temperature sensor respectively and will notify through LED’s. Also, an automatic feeding system is added which is controlled by sending SMS through a GSM module that controls a servo motor to open and close the food gate accordingly.Details - (link)",
      "The Success of the Electric Vehicle and Simulation of an Electric Vehicle Navigation System with PWM Control.Abstract:This paper gives an outline of ongoing work on electric vehicles in the area. The paper depicts the turn of events, and examination of various pieces of the principal segments of battery innovation, engine, forward, invert, start-stop, and slowing down are inspected. The paper examines the benefits of diesel motors and electric motors. Here are a few depictions of how the dark smoke from a diesel motor can harm our bodies. The paper, at last, appears as models of some electric vehicles finishing of administrative work.Details - (link)",
      "Study on Ultra-Wideband (UWB) System and Its Applications.Abstract:Ultra-Wideband (UWB) system is a prominent wireless technology which provides a very different approach compared to traditional narrowband systems. It is considered a promising solution for high data-rate and short-range wireless communication system to meet an ever-growing demand for high speed. This technology is developed to transfer data at high rates over short distances at a very low frequency. Before 2001 UWB’s application was limited mainly in military areas and gradually Federal Communications Commission (FCC) has allowed the commercial usage of the bandwidths of UWB. FCC regulates the frequency for the UWB technique is from 3.1ghz to 10.6ghz and the linear band is 500 mhz. In this paper, we’ve mainly focused on its applications in different arenas. This paper also represents its technological challenges, the advantages, and drawbacks as well as future work scopes. Details - (link)",
      "Access point management in overcrowded WLANs.Abstract:In this paper, we analyze the relationship of number of access point (AP) and achieved throughput for a given scenario. In the scenario, we consider a number of parameters, i.e. given area, topology, number of users, expected rate and channel allocation vector. We find that in general with the increase of AP the performance of overall network improves. However, after a certain number of deployed APs, further increase of AP does not bring substantial improvement in the network performance. More specially, performance deteriorates after a threshold value of number of APs. The main reason for this performance deterioration is the increase of interference between adjacent channel (or co-channel) interference. We verify the throughput increasing rate with proper management of Aps by simulation results using WIMNET (Wireless Internet-access Mesh Network) simulator.Details - (link)",
      "A Smart Control System of Home Appliances Using SMS.Abstract:This paper is about the development and implementation of a GSM based password protected control system for electrical home appliances that enables to control remotely. GSM module is used for receiving short message service (SMS) from user’s mobile phone that automatically enable the controller to take any further action such as to switch ON or OFF the home appliances such as lights, air-conditioners, fans, water pumps, door locks, TVs etc. Hardware of the system has been developed using an Arduino Uno board, GSM modules, some switching relays and some other easily available electronic components. The driving software has been made using the Arduino IDE. The system is activated when only the user sends the SMS to the controller at home with the exact password. Upon receiving the SMS command, the microcontroller unit will decode the received SMS automatically and controls the electrical home appliances by switching ON or OFF the device according to the user direction.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Maliha Chowdhury",
    "title": "Lecturer (On Study Leave)",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "maliha.chowdhury@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/alhIMWe77Kq2age8yItH.jpg",
    "profileUrl": "https://ius.edu.bd/profile/maliha-chowdhury",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "University of Dhaka",
        "year": "2021"
      },
      {
        "degree": "B.Sc.",
        "institute": "University of Dhaka",
        "year": "2019"
      },
      {
        "degree": "HSC",
        "institute": "ViqarunnisaNoon College",
        "year": "2012"
      },
      {
        "degree": "SSC",
        "institute": "ViqarunnisaNoon College",
        "year": "2010"
      }
    ],
    "experience": [],
    "publications": [
      "Biobased amphoteric aerogel derived from amine-modified clay-enriched chitosan/alginatefor adsorption of organic dyes and chromium (VI) ions from aqueous solutionAbstract:Naturally abundant and renewable macromolecular polysaccharides are now considered green and sustainable adsorbent material for toxic effluent treatment. However, to deal with complex wastewater, the need for an efficient amphoteric adsorbent is still a challenge. Herein a three-dimensional (3D) composite aerogel is prepared from dodecyl amine-modified clay (kaolinite) enriched chitosan/alginate via the freeze-drying method and a post-ionic crosslinking. The aerogel was characterized by Fourier transform infrared spectroscopy (FT-IRS), scanning electron microscopy (SEM), energy dispersive X-ray (EDX), thermogravimetric analysis (TGA), X-ray diffraction (XRD), solubility test and adsorption studies. The thermal stability of aerogel was significantly higher than that of chitosan/alginate polymer matrix and substantially increased upon the gradual addition of modified clay. The aerogel has ordered fishing net-like microstructure, and interconnected pores for dyes and metal ions adsorption. The adsorption capacities of composite aerogel on methylene blue, acid black, and hexavalent chromium [Cr (VI)] ions reached around 73.1, 71.5, and 62.4 mg/g respectively. The adsorption mechanism was electrostatic interaction and the mass ratio of chitosan and modified clay to alginate regulates the adsorption capacities for the anionic and cationic dyes. As a novel amphoteric adsorbent, the chitosan/alginate/modified clay composite aerogel showed the potential to remove both cationic, anionic dyes, and metal ions from wastewater. Moreover, the prepared biobased aerogel showed high adsorption efficiency in both acidic and basic media even after four cycles. The study demonstrated high performance, and low cost, with materials locally available, recyclable, and promising candidates for industrial wastewater treatment. ?Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Mohammed Saef Ul Arifeen",
    "title": "Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "mohammed.saef.ul.arifeen@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/xhOqqCeDroRk7fLktpFH.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mohammed-saef-ul-arifeen",
    "education": [
      {
        "degree": "Executive MBA in Finance",
        "institute": "Independent University, Bangladesh",
        "year": "2014"
      },
      {
        "degree": "Bachelor of Science in Computer Science",
        "institute": "American International University Bangladesh",
        "year": "2007"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka College, Dhaka",
        "year": "2000"
      },
      {
        "degree": "SSC",
        "institute": "Government Laboratory High School, Dhaka",
        "year": "1997"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars, Dhaka",
        "designation": "Assistant Professor",
        "duration": "23 Apr, 2025 – Ongoing"
      },
      {
        "institute": "Riverstone Capital Limited, Dhaka",
        "designation": "Head of Internal Control & Compliance",
        "duration": "10 Apr, 2017 – Ongoing"
      },
      {
        "institute": "Riverstone Capital Limited, Dhaka",
        "designation": "Chief Anti-Money Laundering Compliance Officer",
        "duration": "10 Sept, 2017 – Ongoing"
      },
      {
        "institute": "A & C CHRISTOFI Limited inLimassol, Cyprus, EU",
        "designation": "Chief Compliance & HR Advisor",
        "duration": "20 Dec, 2019 – 31 Jan, 2024"
      },
      {
        "institute": "Hongkong & Shanghai Banking Corporation (Group)",
        "designation": "Country Head of Compliance Monitoring",
        "duration": "01 Mar, 2016 – 19 Jul, 2016"
      },
      {
        "institute": "Hongkong & Shanghai Banking Corporation (Group)",
        "designation": "Deputy Head of Internal Audit",
        "duration": "01 May, 2011 - 29 Feb, 2016"
      },
      {
        "institute": "Commercial Bank of Ceylon PLC",
        "designation": "Manager in Treasury Finance, Credit, Business & Liability",
        "duration": "08 Mar, 2008 – 30 Apr, 2011"
      }
    ],
    "publications": [
      "1.Arifeen, M.S. (2025).Impact of Interest Rates Fluctuation and Inflation on the Bangladesh Capital Market;January – March 2025.Chittagong Stock Exchange, Bangladesh.ISSN: 2227 - 877X (2025) (link)",
      "2.Arifeen, M.S. (2024).Bangladesh Capital Market Reform: The Way Forward;July – September 2024. Chittagong Stock Exchange, Bangladesh. ISSN: 2227 - 877X (2024) (link)",
      "3. Arifeen, M.S. (2024).India’s Recent Economic Policies affecting Bangladesh Capital Market;April – June 2024.Chittagong Stock Exchange, Bangladesh. ISSN: 2227 - 877X (2024) (link)",
      "4.Arifeen, M.S. (2024).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 6.0];January – March 2024.Chittagong Stock Exchange, Bangladesh.ISSN: 2227-877X (2024) (link)",
      "5.Arifeen, M.S. (2023).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 5.0];October - December 2023.Chittagong Stock Exchange, Bangladesh. ISSN: 2227-877X (2023) (link)",
      "6. Arifeen, M.S. (2023).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 4.0];July - September 2023.Chittagong Stock Exchange, Bangladesh. ISSN: 2227-877X (2023) (link)",
      "7.Arifeen, M.S. (2023).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 3.0];April - June 2023.Chittagong Stock Exchange, Bangladesh. ISSN: 2227-877X (2023) (link)",
      "8.Arifeen, M.S. (2023).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 2.0];January – March 2023.Chittagong Stock Exchange, Bangladesh.ISSN: 2227-877X (2023) (link)9.Arifeen, M.S. (2022).Risk Management Framework at Stock Exchanges.[Series 1.0, Version 1.0];October – December 2022.Chittagong Stock Exchange, Bangladesh.ISSN: 2227-877X (2023) (link)10.Arifeen, M.S. (2021).Transformation of Capital Markets into the world of Blockchain: The Scope and Feasibility in Bangladesh. ;April – June 2021.Chittagong Stock Exchange, Bangladesh. ISSN: 2227-877X (2021) (link)11.Arifeen, M.S., Tarannum. (2020).Wide angle: Middle Eastern Geopolitics and its impact on International Business - The Neo-engagement Rule. ;Journal of Management Studies, USA -David Publishing Company (DPC)(originally as USA-China Business Review (Journal), Inc., USA), located in the United States of America. [ISSN: 2328–2185] Paper No: JMSE200119-01 (International Publication) Management Studies, Nov. - Dec. 2020, Vol. 8, No. 6, pg. 485-492,",
      "DOI: 10.17265/2328-2185/2020.06.006 (2020)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Prianka Tewary",
    "title": "Assistant Professor ( Study leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "prianka.tewary@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/SBqO2uq8aZs1hMFTrjz4.jpg",
    "profileUrl": "https://ius.edu.bd/profile/prianka-tewary",
    "education": [
      {
        "degree": "MBA",
        "institute": "Pabna university of Science & Technology",
        "year": "2019"
      },
      {
        "degree": "BBA",
        "institute": "Pabna university of Science & Technology",
        "year": "2018"
      },
      {
        "degree": "HSC",
        "institute": "Govt. ShaheedBulbul College Pabna",
        "year": "2010"
      },
      {
        "degree": "SSC",
        "institute": "Central Girls High School Pabna",
        "year": "2008"
      }
    ],
    "experience": [
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "01-09-2023 - Current"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "01-09-2019 - 31- 08-2023"
      }
    ],
    "publications": [
      "1. Nexus among employee engagement, management support, and knowledge sharing behavior: Evidence from an emerging economyAbstract:The aim of this study is to examine the contributions of the components of employee engagement on knowledge-sharing behavior alongside the possible mediating effect of management support. This study collected data from 395 respondents purposively selected from pharmaceutical organizations in Bangladesh. For input and incorporation of sample data, SPSS version 26 was used, whereas the PLS-SEM (version 4) tool was used to test the hypotheses relationships. The findings reveal significant positive effects of adaptation, devotion, and vitality on both knowledge-sharing behavior and management support. Adaptation to new technologies and processes enhances employees’ ability and intention to share knowledge, facilitated by robust management support. Similarly, devotion and vitality among employees foster a supportive environment that is conducive to knowledge exchange. Management support emerges as a critical mediator, amplifying the positive impacts of adaptation, devotion, and vitality on organizational outcomes. These findings address a critical gap in understanding the conditions that enhance knowledge-sharing behaviors in highly regulated industries and provide a valuable framework for organizations to nurture knowledge-sharing cultures that will drive innovation and resilience within emerging markets.Details: (Link)",
      "2. E-Marketing in Bangladesh: Step towards Digitalization in Business, Major Setbacks and Prospective ViewsAbstract:Businesses are used to sell different strategies they offer products or services. Nowadays, the companies try to create, promote and sell products or services that can satisfy their target customers through electronic means. E-marketing and online marketing strategy is the latest and modern way of exploring and delivering products and services related information to the quality potential customers. This paper addresses the major setbacks and present scenario of E-marketing structures in Bangladesh. This study also emphasis to analyze the trend of use of e-marketing in Bangladesh. The authors have studied the different international journals, Marketing journals, Economics, business and management journals, Information systems (IS) and information technology (IT) journals to conceptualize current scene of e-marketing in Bangladesh. The researcher use secondary data and information by reviewing previously published literatures. This research finds some core impediments which are the terrific interference to reaching the desired goal of e-marketing. This study identifies the forthcoming prospects in the field of E-marketing in Bangladesh and suggests policy recommendation. By developing and implementing e-marketing strategies and techniques at business sectors in Bangladesh and can take part to establish dream digital Bangladesh.Details: (Link)",
      "3.Influencing Factors of Employee Job Satisfaction: A conceptual FrameworkAbstract:Human resources are the big assets of every organization and nowadays they are getting more important due to their knowledge, skills, and abilities to achieve more productivity in the organization. The major aspect of organization is to measure the employee job satisfaction to create motivation among them. Therefore, Job satisfaction is consider as the positive feelings of an individual about his/her job in the working place. The aim of this study is to determine influencing factors of employee job satisfaction. In this recent study, the variables of job satisfaction have been adopted based on the previous published articles. The study also proposed a conceptual framework. The major contribution of the study will be helpful for the management of the organization to determine the factors of employee job satisfaction for achieving goals.Details: (Link)",
      "4. Influencing Motivational Factors of Bank Employees Retention: A Conceptual FrameworkAbstract:Employees are the crucial resources for every organization and the failure and success of the companies often depend on these resources. On the other hand, skilled employees are considered advantageous sources for any organization. Employee retention is a major and vital issue faced by the bank industries in Bangladesh due to the shortage of economic growth, skilled employment, and turnover. The banking sector is the essential and significant sector to develop the economy of a country. In this regard, the banking sector should maintain rules, regulations, policies, and factors of employee retention. The main objective of this study is to determine the influencing factors of bank employee retention in Bangladesh. For the study purpose, the influencing motivational factors of bank employee retention have been adopted from the prior published studies. Also, a conceptual framework has been proposed in this study. From a future perspective, this study will give guidelines for the management of baking organizations to identify the motivational factors for retaining skilled employees in the bank.Details: (Link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Syeda Shirajum Munira",
    "title": "Senior Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "syeda.shirajum.munira@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/m1VRo35Mv6uqDuH67BqW.jpg",
    "profileUrl": "https://ius.edu.bd/profile/syeda-shirajum-munira",
    "education": [
      {
        "degree": "M.Sc. in Textile Engineering",
        "institute": "Bangladesh University of Textiles",
        "year": "Ongoing"
      },
      {
        "degree": "B.Sc. in Textile Engineering",
        "institute": "Bangladesh University of Textiles",
        "year": "2018"
      },
      {
        "degree": "H.S.C.",
        "institute": "Holy Cross College",
        "year": "2014"
      },
      {
        "degree": "S.S.C.",
        "institute": "A. K. High School",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Esquire Knit Composite Ltd",
        "designation": "September 2020- March 2021",
        "duration": "Marketing & Merchandising"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Dr. Md. Abu Hasnat",
    "title": "Senior Assistant Professor & Additional Director of Research and Collaboration",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "md.abu.hasnat@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/t4EPMSlFQHVicEmahGX5.jpg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-md.-abu-hasnat",
    "education": [
      {
        "degree": "Ph.D. in Finance",
        "institute": "Karadeniz Technical University (KTU), Turkey (Status: Public, Research & State University)",
        "year": "2023"
      },
      {
        "degree": "Master’s in Islamic Finance",
        "institute": "International Islamic University Malaysia (IIUM), Malaysia (Status: Public & Research University)",
        "year": "2017"
      },
      {
        "degree": "Bachelor’s in Business Administration",
        "institute": "International Islamic University Chittagong (IIUC), Bangladesh (Status: Private University)",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Senior Assistant Professor",
        "designation": "University of Scholars",
        "duration": "June 2024 - Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "University of Scholars",
        "duration": "April 2024 - May 2024"
      },
      {
        "institute": "Reviewer",
        "designation": "Asian Journal of Economics, Business and Accounting",
        "duration": "2023 - Present"
      },
      {
        "institute": "Commerce Lecturer",
        "designation": "Akçaabat Anadolu Govt. College, Sürmene Anadolu Govt. College, and Yomra Anadolu Govt. College under the Karadeniz International Student Association (KULDER), KTU in Trabzon, Turkey.",
        "duration": "February 2018 – August 2022"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Kalyan Mondol",
    "title": "Assistant Professor and Mentor (Regular)",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "kalyan.mondol@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/BoQGar2QMtb6tF2Qh6SS.jpg",
    "profileUrl": "https://ius.edu.bd/profile/kalyan-mondol",
    "education": [
      {
        "degree": "(M.S.) in Renewable Energy Technology",
        "institute": "Institute of Energy, University of Dhaka",
        "year": "2018"
      },
      {
        "degree": "(B.Sc.) in Electrical and Electronic Engineering",
        "institute": "East West University",
        "year": "2015"
      },
      {
        "degree": "Higher Secondary Certificate (HSC)",
        "institute": "Dariapur Degree College",
        "year": "2010"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Dharmatala Adarsha High School",
        "year": "2008"
      }
    ],
    "experience": [],
    "publications": [
      "K Mondol, MM Hasan, Y Arafath, K Alam, “Quantization effects on the inversion mode of a double gate MOS”,Volume 6, 2016, Pages 339-341,Results in Physics.",
      "MF Hasan, MB Ahammed,K Mondol, S Sultana, A Sarkar, “The Success of the electric vehicle and simulation of an electric vehicle navigation system with PWM Control”,Volume 3, 2021, Pages 31-43, Journal of Computer Science and Technology",
      "K Mondol, M Hasan, AH Siddique, S Islan, “Quantization, gate dielectric and channel length effect in double-gate tunnel field-effect transistor”, Volume 34, 2022, Pages 105312,Results in Physics.",
      "Md. Bulbul Ahammed Shamrat Bahadur*,Kalyan Mondol, Ashif Mohammad, Farhana Mahjabeen, Md. Tamzeed- Al- Alam, \"Design and implementation of low cost MPPT solar charge controller\", Volume 54, Issue 2, Pages 5674-5687, Gongcheng Kexue Yu Jishu/Advanced Engineering Science",
      "K Mondol, Y Arafath, \"Quantization Effects on the Gate Capacitance of a Doubles Gate MOSFET\", Department of Electrical and Electronic Engineering, Faculty of Sciences and Engineering, East West University"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Shahriar Nafees Ahmed",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "shahriar.nafees.ahmed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/cLOet2iUPRZ4eHiD8DFy.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shahriar-nafees-ahmed",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Rezwan Ul Haque Aubhi",
    "title": "Assistant Professor & MBA Program Coordinator",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "rezwan.ul.haque.aubhi@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/KDchvgEzDLk8WbCPQPRC.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/rezwan-ul-haque-aubhi",
    "education": [
      {
        "degree": "MBA (Evening)",
        "institute": "University of Dhaka",
        "year": "[On Going]"
      },
      {
        "degree": "MBA",
        "institute": "American International University-Bangladesh",
        "year": "2016"
      },
      {
        "degree": "BBA",
        "institute": "American International University-Bangladesh",
        "year": "2014"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka City College",
        "year": "2008"
      },
      {
        "degree": "SSC",
        "institute": "Banaripara Union Secondary School",
        "year": "2006"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars",
        "designation": "Assistant Professor",
        "duration": "November, 2025 - Present"
      },
      {
        "institute": "University of Scholars",
        "designation": "Senior Lecturer",
        "duration": "February, 2025 - October, 2025"
      },
      {
        "institute": "University of Scholars",
        "designation": "MBA Program Coordinator",
        "duration": "October, 2023 -Present"
      },
      {
        "institute": "University of Scholars",
        "designation": "Lecturer",
        "duration": "July, 2023 - January, 2025"
      },
      {
        "institute": "KMC (NU Affiliated)",
        "designation": "Lecturer",
        "duration": "2021 - 2023"
      },
      {
        "institute": "Modhumoti Bank Limited",
        "designation": "Probationary Officer",
        "duration": "2018 - 2019"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Dr. M. Sohel Rana",
    "title": "Senior Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "m.sohel.rana@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/Hwe2bdn25zhltL5oMOJ8.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-m.-sohel-rana",
    "education": [
      {
        "degree": "Ph.D",
        "institute": "University of Rajshahi",
        "year": "2022"
      },
      {
        "degree": "Master of Business Administration (MBA)",
        "institute": "University of Rajshahi",
        "year": "2014"
      },
      {
        "degree": "Bachelor of Business Administration (BBA)",
        "institute": "University of Rajshahi",
        "year": "2013"
      },
      {
        "degree": "Higher Secondary School Certificate (HSC)",
        "institute": "Jashore Board",
        "year": "2009"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Jashore Board",
        "year": "2007"
      }
    ],
    "experience": [
      {
        "institute": "Senior Assistant Professor",
        "designation": "International University of Scholars",
        "duration": "June 2024 - Present"
      },
      {
        "institute": "Assistant Professor",
        "designation": "International University of Scholars",
        "duration": "October 2023- May 2024"
      },
      {
        "institute": "Lecturer",
        "designation": "Varendra University",
        "duration": "February 2023 -June 2023"
      },
      {
        "institute": "Lecturer",
        "designation": "Bangladesh Army University of Engineering and Technology",
        "duration": "July 2022- January 2023"
      },
      {
        "institute": "Teaching Assistant(During PhD)",
        "designation": "University of Rajshahi",
        "duration": "November 2018–June 2023"
      },
      {
        "institute": "Lecturer",
        "designation": "Pundra University of Science & Technology",
        "duration": "March 2016 – September 2018"
      }
    ],
    "publications": [
      ".Rana, M. S.,Islam, M. F. and Saha S. K. (2019). Barriers for Developing Halal Tourism in Bangladesh: An Empirical Study.Journal of Business Studies, Vol. 12, No. 1, PP 186-194.Abstract:Tourism is a growing contributing industry to the economy in many developing countries like Bangladesh. In this perspective, Halal tourism can be the key focus area by attracting the Muslim tourists from all over the world similar to many other Muslim majority countries in Asia and Middle East. Due to proper attention of the concerned authority the development of Halal tourism is still in its immature stage in our country. This study tried to find out various barriers for developing Halal tourism practices in Bangladesh. The qualitative data was collected for this study through in-depth interview from the Muslim tourists as well as management practitioners from the different tourism destinations.The government of Bangladesh should take necessary steps to develop halal tourism and take benefits from this growing industry to its economy.",
      "Rana, M. S.,Islam, M. F. and Saha S. K. (2018). Halal Tourism Development in Bangladesh: The Conceptual Issues.Journal of Business Studies, Vol. 11, No. 2, PP 37-46.Abstract:Understanding the concepts of halal tourism will have a momentous bearing on the attaining sustainable development goal and employment opportunities for them who are involved in its development process. Thus, the concept of halal tourism can stimulate the conventional concepts of tourism, and bring socio-economic and environmental well-being of the host community ensuring sustainable development of a particular country. However, research on halal tourism is extremely limited in different context. Thus, the aim of this paper is to identify the prospects of halal tourism development in Bangladesh. The study has been conducted based on secondary sources of information. Meta analysis reveals that halal tourism is one of the most prospective tourism sectors in Bangladesh that can bring Muslim tourists from the whole world. This paper identifies some weaknesses of halal tourism development and provides some recommendations to overcome those weaknesses. For the development of this potential sector, it needs proper policy formulation, infrastructure development, investment for halal services and facilities in the destination areas as well. Finally, this paper focuses on how halal tourism of Bangladesh can be advanced through appropriate tourism policy whilst also ensuring involvement of the host community.",
      "Rana, M. S.(2017). Branding Islamic Heritage to Promote Tourism in Bangladesh.IOSR Journal of Business and Management (IOSR-JBM), Vol. 19, Issue 7, PP 36-40.Abstract:As Bangladesh is one of the largest Muslim countries in the world it captures many Islamic heritage sites those are renowned all over the world. It includes unique designed mosques, tombs, shrines in almost all the districts of Bangladesh those are very attractive in nature and it can create appeal to the Muslim as well as non-Muslim tourists from home and abroad. This paper explores the concept of Islamic tourism with its various terminologies. The paper also describes briefly the major attractions of Islamic heritage in Bangladesh in front of the national and international tourists.",
      "Rana, M. S.,Hossain, M. M., Jewel, R. M. and Islam, M. R. (2017). Evaluating Customers Satisfaction of Electronic Banking: An Empirical Study in Bangladesh.The SIJ Transactions on Industrial, Financial & Business Management (IFBM),Vol. 5, No. 4, pp. 70-75.Abstract:The advent of networks, widely known as the internet, has vastly influenced the way communication take place across the globe. It started a new era for information accumulation and dissemination and envisaged the importance of data management for individuals as well as corporate entities. The tremendous advances and the aggressive infusion of information technology have brought in a paradigm shift in banking operations in Bangladesh. E-banking has become popular because of its convenience and flexibility, and also transaction related benefits like speed, efficiency, accessibility, etc. the emergence of new forms of banking channels such as Internet banking, Automated Teller Machines (ATM), Phone banking and also maturing financial market and global competition have forced bankers to explore the importance of customer loyalty. The purpose of this paper is to investigate the consumers’ perception towards the extent of internet banking usage."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Umme Shifati Islam",
    "title": "Senior Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "umme.shifati.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/AbaDy2UEk0p8DIndQW9x.jpg",
    "profileUrl": "https://ius.edu.bd/profile/umme-shifati-islam",
    "education": [
      {
        "degree": "M.Phil",
        "institute": "Begum Rokeya University, Rangpur.",
        "year": "Running"
      },
      {
        "degree": "M.A in English",
        "institute": "National University",
        "year": "2009"
      },
      {
        "degree": "B.A (Hons.) in English",
        "institute": "National University",
        "year": "2008"
      },
      {
        "degree": "HSC",
        "institute": "Shaheed Bir Uttam Lt. Anwar Girls’ School and College",
        "year": "2004"
      },
      {
        "degree": "SSC",
        "institute": "Shaheed Bir Uttam Lt. AnwarGirls’ School and College",
        "year": "2001"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "Montessori College, Dakhinkhan, Dhaka.",
        "duration": "12.01.2012 - 15.12.2015"
      },
      {
        "institute": "Lecturer",
        "designation": "Shiristry Central College, Uttara, Dhaka.",
        "duration": "16.12.2015 - 30.07.2019"
      },
      {
        "institute": "Lecturer",
        "designation": "Milestone College, Uttara, Dhaka-1230",
        "duration": "01.08.2019 - 20.10.2020"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "15.05.2022 - Till now"
      }
    ],
    "publications": [
      "1. A. M. Khan1, S. S. Rahman2, U.S. Islam3,“Women Portrayal And Development In Shakespearean Dramas” ,BAUSTJ, 25thAugust 2020."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Asib Mostakim Fony",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "asib.mostakim.fony@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/FKKpIKmi2x7wfRwxlv8t.jpg",
    "profileUrl": "https://ius.edu.bd/profile/asib-mostakim-fony",
    "education": [
      {
        "degree": "M.S.",
        "institute": "University of Chittagong",
        "year": "2019"
      },
      {
        "degree": "B.Sc.",
        "institute": "University of Chittagong",
        "year": "2018"
      },
      {
        "degree": "HSC",
        "institute": "Govt. Hazi Muhammad Mohsin College",
        "year": "2013"
      },
      {
        "degree": "SSC",
        "institute": "Govt. Muslim High School",
        "year": "2011"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "2023- present"
      },
      {
        "institute": "Jr. Software Engineer",
        "designation": "General Software Solutions",
        "duration": "March, 2023- May, 2023"
      }
    ],
    "publications": [
      "Hasan, S., Fony, A.M. and Uddin, M.M., 2019, February. Reduced model based feedback stabilization of large-scale sparse power system model. In2019 International Conference on Electrical, Computer and Communication Engineering (ECCE)(pp. 1-6). IEEE.Abstract:Linearizing a power system model around the equilibrium point we may obtain unstable large-scale sparse differential-algebraic equations (DAEs) with index 1 form. Riccati-based feedback stabilization of such large-scale unstable system is a challenging task. This paper shows that the Riccati-based feedback stabilization matrix for the original unstable system can be computed efficiently from the reduced order state space system. For this purpose we apply the balanced truncation (BT) to the large-scale unstable index 1 DAEs for reduced-order state space model. To implement the BT, we efficiently solve two Lyapunov equations with respect to the Bernoulli stabilized system. The efficiency of the proposed technique is tested by applying to a data set of Brazilian power system model.",
      "Du, X., Iqbal, K.I.B., Uddin, M.M., Fony, A.M., Hossain, M.T., Ahmad, M.I. and Hossain, M.S., 2021. Computational techniques for H2 optimal frequency-limited model order reduction of large-scale sparse linear systems.Journal of Computational Science,55, p.101473.Abstract:We consider the problem of frequency limitedH2\">�2optimal model order reduction for large-scale sparse linear systems. A set of first-orderH2\">�2optimality conditions are derived for the frequency limited model order reduction problem. These conditions involve the solution of two frequency limited Sylvester equations that are known to be computationally complex. We discuss a framework for solving thesematrix equationsefficiently. The idea is also extended to the frequency limitedH2\">�2optimal model order reduction of index-1 descriptor systems. Numerical experiments are carried out using Pythonprogramming languageand the results are presented to demonstrate theapproximationaccuracy and computational efficiency of the proposed technique.",
      "Du, X., Uddiny, M.M., Fonyz, A.M., Hossainx, M.T. and Shuzan, M.N.I., 2021. Iterative Rational Krylov Algorithms for model reduction of a class of constrained structural dynamic system with Engineering applications.arXiv preprint arXiv:2101.03053.Abstract:This paper discusses model order reduction of large sparse second-order index-3 differential algebraic equations (DAEs) by applying Iterative Rational Krylov Algorithm (IRKA). In general, such DAEs arise in constraint mechanics, multibody dynamics, mechatronics and many other branches of sciences and technologies. By deecting the algebraic equations the second-order index-3 system can be altered into an equivalent standard second-order system. This can be done by projecting the system onto the null space of the constraint matrix. However, creating the projector is computationally expensive and it yields huge bottleneck during the implementation. This paper shows how to find a reduce order model without projecting the system onto the null space of the constraint matrix explicitly. To show the efficiency of the theoretical works we apply them to several data of second-order index-3 models and experimental resultants are discussed in the paper."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Nur-A-Alam Mishad",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "nur-a-alam.mishad@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/AuSR966GZpx1HSHnd8NT.jpg",
    "profileUrl": "https://ius.edu.bd/profile/nur-a-alam-mishad",
    "education": [
      {
        "degree": "MBA",
        "institute": "University of Dhaka (DU)",
        "year": "2020"
      },
      {
        "degree": "BBA",
        "institute": "North South University",
        "year": "2017"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka College",
        "year": "2011"
      },
      {
        "degree": "SSC",
        "institute": "Motijheel Govt. Boys’ High School",
        "year": "2009"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "01/02/2022 - Current"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mohammad Ridwan Arif",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "mohammad.ridwan.arif@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/PJy3WjZGGvoCkJnmbiGJ.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mohammad-ridwan-arif",
    "education": [
      {
        "degree": "Master of Arts inEnglish",
        "institute": "BRAC University",
        "year": "2022"
      },
      {
        "degree": "Bachelor of Arts inEnglish",
        "institute": "North South University",
        "year": "2019"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka ImperialCollege",
        "year": "2012"
      },
      {
        "degree": "SSC",
        "institute": "University LaboratorySchool & College",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "02.05.2023 - Till now"
      }
    ],
    "publications": [
      "1. Arif, M. R. (2021).Exploring vocabulary learning strategies adopted by Bangladeshi tertiary level students(Doctoral dissertation, Brac University).",
      "Abstract:",
      "Vocabulary is an essential element of language learning process and a very basic structure of language development. Students of Bangladesh use different strategies to learn new words. This study investigates which strategies tertiary students are following for vocabulary learning, what they are thinking about the strategies and what kind of challenges they are facing while vocabulary learning. The researcher of this study applied a qualitative multiple case study approach among five participants from five different universities in Bangladesh. The participants were invited to participate in one-to-one vocabulary learning sessions where the researcher showed them a list of vocabulary items. After looking at the list for 10 minutes, the participants were getting interval for 15 minutes. After the interval, they were asked to recall the vocabulary items and write them. All the participants were interviewed immediately after the writing activity. The findings of the study suggested that students were interested to use contextualisation, translation, and synonyms while remembering new words. They also mentioned that word related to academic study and social media were easier to remember. The participants believed that traditional dictionary has been replaced with digital online thesaurus which is very useful. However, poor internet connectivity does not allow them to utilise online thesaurus when they required. This study will help students to know about vocabulary learning strategies and teachers will know about the strategies students are following to remember new words."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Mohammed Faiyaz Rahman",
    "title": "Senior Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "mohammed.faiyaz.rahman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/WrzCWEDpLu2SAEnTYUFb.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mohammed-faiyaz-rahman",
    "education": [
      {
        "degree": "Post-Graduation",
        "institute": "Dhaka University",
        "year": "Continuing"
      },
      {
        "degree": "Graduation",
        "institute": "Ahsanullah University of Science and Technology (AUST)",
        "year": "2019"
      },
      {
        "degree": "Higher Secondary Certificate (H.S.C)",
        "institute": "Notre Dame College",
        "year": "2014"
      },
      {
        "degree": "Secondary School Certificate (S.S.C)",
        "institute": "Rajuk Uttara Model School & College",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "University of Scholars",
        "duration": "2025 - Present"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": ""
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Bulbul Ahammed",
    "title": "Assistant Professor & Mentor (Regular)",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.bulbul.ahammed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/ikz7QPGlyIlvnW8YHYpS.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-bulbul-ahammed",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "Dhaka University of Engineering and Technology (DUET)",
        "year": "Appeared"
      },
      {
        "degree": "B.Sc.",
        "institute": "Bangladesh University of Business and Technology (BUBT)",
        "year": "2015"
      },
      {
        "degree": "H.S.C.",
        "institute": "Tejgaon College",
        "year": "2011"
      },
      {
        "degree": "S.S.C.",
        "institute": "Raghunathpur High School",
        "year": "2008"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "International University of Scholars.",
        "duration": "3 Years"
      },
      {
        "institute": "Lecturer",
        "designation": "Apparels Institute of Fashion & Technology",
        "duration": "2 Years"
      },
      {
        "institute": "Coordinator and Chief Instructor",
        "designation": "Desh Polytechnic College (DPC)",
        "duration": "November 01, 2015 to December 31, 2017"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Ashfaqul Hoque Khadem",
    "title": "Lecturer (On Study Leave)",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "ashfaqul.hoque.khadem@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/1H1Hm9ufLQUeNUR17q9h.jpg",
    "profileUrl": "https://ius.edu.bd/profile/ashfaqul-hoque-khadem",
    "education": [
      {
        "degree": "B. Sc. In Textile Engineering (Fabric)",
        "institute": "B. Sc. In Textile Engineering (Fabric)",
        "year": "2022"
      },
      {
        "degree": "Higher Secondary School Certificate",
        "institute": "Ashuganj Sar Karkhana College",
        "year": "2016"
      },
      {
        "degree": "Secondary School Certificate",
        "institute": "Ashuganj Sar Karkhana School",
        "year": "2014"
      }
    ],
    "experience": [],
    "publications": [
      "Fabrication, properties, and performance of graphene-based textile fabrics for supercapacitor applications: A review"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Syeda Nowshin Anjum Hoque",
    "title": "Senior Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "syeda.nowshin.anjum.hoque@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/cuSFNY5MwggQ9rgrOVX5.jpg",
    "profileUrl": "https://ius.edu.bd/profile/syeda-nowshin-anjum-hoque",
    "education": [
      {
        "degree": "M.A",
        "institute": "English",
        "year": "Shahjalal University of Science & Technology, Sylhet."
      },
      {
        "degree": "B.A",
        "institute": "English",
        "year": "Shahjalal University of Science & Technology, Sylhet."
      },
      {
        "degree": "H.S.C",
        "institute": "Science",
        "year": "President Professor Dr Iajuddin Ahmed Residential Model School & College"
      },
      {
        "degree": "S.S.C",
        "institute": "Science",
        "year": "A.V.J.M. Government Girls' High School"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Marjuque Ul haque",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "marjuque.ul.haque@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/TgDwkFvkNuAlDUMl1dil.jpg",
    "profileUrl": "https://ius.edu.bd/profile/marjuque-ul-haque",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Altap Hossen",
    "title": "Adjunct Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "altap.hossen@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/zHpVRe6wOo0zlvIur7AK.jpg",
    "profileUrl": "https://ius.edu.bd/profile/altap-hossen",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Nurul Islam",
    "title": "Senior Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "md.nurul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/w8FJryLrdeAb5K0aKuJt.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-nurul-islam",
    "education": [
      {
        "degree": "BSc",
        "institute": "United International University",
        "year": "2022"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka College",
        "year": "2016"
      },
      {
        "degree": "SSC",
        "institute": "Engineering University School & College",
        "year": "2014"
      }
    ],
    "experience": [
      {
        "institute": "The International University of Scholars",
        "designation": "Lecturer",
        "duration": "2022 - Present"
      },
      {
        "institute": "Data Edge Limited",
        "designation": "Trainee Software Engineer",
        "duration": "2022 (5 Months)"
      }
    ],
    "publications": [
      "Real-Time Masked Face Recognition with Deep Convolutional Neural Network using Jetson Nano. (Work in Progress)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Md. Touhidul Islam",
    "title": "Senior Lecturer & Program Coordinator",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "md.touhidul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/89qhQAPPZhQCa87Ogwpw.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-touhidul-islam",
    "education": [
      {
        "degree": "M.S.c",
        "institute": "Mawlana Bhashani Science and Technology University",
        "year": "Ongoing"
      },
      {
        "degree": "B.Sc.",
        "institute": "Mawlana Bhashani Science and Technology University",
        "year": "2020"
      },
      {
        "degree": "HSC",
        "institute": "Joypurhat Govt College",
        "year": "2016"
      },
      {
        "degree": "SSC",
        "institute": "Panchbibi L.B.P Govt High School",
        "year": "2014"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer & Program Coordinator",
        "designation": "University of Scholars (IUS)",
        "duration": "October, 2023 -Present"
      },
      {
        "institute": "Dyeing Executive",
        "designation": "Apex Holdings Limited",
        "duration": "22thJune, 2022 - 25thOctober, 2023"
      },
      {
        "institute": "Operation Executive",
        "designation": "Apex Holdings Limited",
        "duration": "10thMarch, 2022- 20 June, 2023"
      }
    ],
    "publications": [
      "Md.Touhidul Islam, “Review of MXene-Based Electrospum Nanocomposites for Flexible and Wearable Sensors”, ACS Applied Nano Materials | Vol 8| Issue 33| August 2025, Q1.Link",
      "Md.Touhidul Islam, “Advancements in functional smart and wearable textiles for sportswear applications”, The Royal Society of Chemistry | November 2025, Q1.Link",
      "Md.Touhidul Islam, “A Roadmap Study of Wearable Electronic Textile Materials: A Comprehensive Review”, Advanced Composites and Hybrid Materials | August 2025, Q1.Link",
      "Islam, M. T., Islam, T., Islam, T., & Repon, M. R. (2022). Synthetic dyes for textile colouration: process, factors and environmental impact.Textile and leather review,5, 327-373.Link",
      "Islam, M. T., & Hassan, M. N. (2022). The Basic Layout of a Denim Textile Industry: A Basic Review.Journal of Management Science & Engineering Research,5(1), 1-16.Link",
      "Islam, M. T., Jahan, R., Jahan, M., Howlader, M. S., Islam, R., Islam, M. M., ... & Robin, A. H. (2022). Sustainable Textile Industry: An Overview.Non-Metallic Material Science,4(2), 15-32.Link",
      "Islam, M. T., Hassan, M. N., Kabir, M., Robin, M. A. H., Farabi, M. M. H., & Alauddin, M. (2022). Sustainable Development of Apparel Industry in Bangladesh: A Critical Review.Journal of Management Science & Engineering Research,5(2), 45-62.Link",
      "Islam, M. T., Howlader, M. S., Shuvo, D. M., & Uddin, M. K. (2023). Carbon Fiber from Biomass Sources: A Comprehensive Review.Non-Metallic Material Science,5(1), 14-26.Link",
      "Islam, M. T. (2022). Activated Carbon Precursors Derived from Jute Fiber: Social, Economic and Environmental Development.Non-Metallic Material Science,4(2), 49-57.Link",
      "Md. Touhidul Islam*. Reinforced Composites by Palmyra Palm Leaf Stalk fiber: A Basic Review on Parameters, Method, and Performance. Fashion Technol. 9(2). TTEFT. 000708. 2023. DOI: 10.31031/TTEFT.2023.09.000708.",
      "Md Touhidul Islam. Preparation of Cotton Fiber from Jute Cellulose for Super Capacitor. Fashion Technol. 8(3). TTEFT. 000687. 2023. DOI: 10.31031/TTEFT.2023.08.000687."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Fahad Raihan Saquib",
    "title": "Senior Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "fahad.raihan.saquib@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/vCfNjUb0LD2Lu2GXRuYp.jpg",
    "profileUrl": "https://ius.edu.bd/profile/fahad-raihan-saquib",
    "education": [
      {
        "degree": "MSc in Electrical Electronic and Communication Engineering",
        "institute": "Military Institute of Science and Technology (MIST)",
        "year": "Ongoing"
      },
      {
        "degree": "BSc in Electrical Electronic andCommunication Engineering",
        "institute": "Military Institute of Science and Technology (MIST)",
        "year": "2021"
      },
      {
        "degree": "Higher Secondary Certificate (HSC)",
        "institute": "Notre Dame College",
        "year": "2016"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "University of Scholars",
        "duration": "01/02/2025- present"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "29/12/2023-31/01/2025"
      },
      {
        "institute": "Management Trainee Officer-Engineer",
        "designation": "PRAN-RFL group",
        "duration": "17/04/2022-31/10/2022"
      }
    ],
    "publications": [
      "A Case Study on the Cost-effectiveness of Net Energy Metering of Residential Grid-Connected Photovoltaic in the Context of Bangladesh (1st Author)DOI 10.1109/ICEEICT53905.2021.9667846Abstract:Increasing electricity generation without harming the environment is the foremost concern in recent times. The use of solar energy in the perspective of Bangladesh is very much appreciated due to environmental reasons. If a solar plant is implemented, problems arise such as the costing of the panel with battery and wastage of energy during daytime due to excess generation compared to battery capacity. Net Energy Metering (NEM) with grid-connected PV can resolve these problems. The research in this paper focuses on using PVsyst to design a grid-connected home solar system that takes into account meteorological, technical, and loss aspects. The net energy exchange, as well as the cost-effectiveness of the implemented scheme, is determined by the Sustainable and Renewable Energy Development Authority (SREDA) net metering calculator after implementation. In the proposed case, it was found that the total investment of 22,545.63 USD will give a profit of 26,881.78 USD to the investor with a payback period of 6.85 years. The paper concludes that residential grid-connected solar is a nouveau concept within the setting of Bangladesh, which will help to tackle the excess demand for electricity with a good economic outcome.",
      "Design of a Bidirectional DC Microgrid Controlled with Energy Management System (1stAuthor)Abstract:Energy management integrating renewables and conventional grids might be viable for meeting current and future energy demands. The amount of energy generated from renewable sources varies from time to time. When a hybrid renewable-based unidirectional dc microgrid is linked to the utility grid, energy might be underutilized during periods of surplus generation. Bidirectional dc microgrid systems can help with energy management and address various environmental challenges. The architecture of a bidirectional dc microgrid, including solar photovoltaics (PV), wind turbines, battery storage and conventional utility grid has been designed in this work. An energy management system (EMS) is designed to supply the required energy to particular loads under various conditions. Maximum available power is extracted from PV using Maximum Power Point Tracking (MPPT), using the P&O algorithm. When the combined power of the PV panels and wind turbine exceeds the demand of the loads, the extra energy is used to charge the batteries. The remaining energy is supplied to the power grid through an inverter when the battery's state of charge (SOC) reaches 90%. When there is a dearth of generated electricity from renewable sources, and the battery's SOC is less than 30%, power is drawn from the utility grid and provided to loads. The system design is implemented in MATLAB/Simulink and the effects of altering the circumstances on the electrical parameters are observed. Variable load and generation circumstances are used to generate the simulation results.Details - (link)",
      "Analyzing the Technical Constraints of Single Phase Residential Grid-Connected PV underNet Energy Metering Scheme (1 st Author)Abstract:Integrating clean and sustainable energy sources into the conventional utility grid benefits both the environmental concerns and the economy. The net energy metering (NEM) scheme is convenient in this situation. After meeting the energy requirements of its associated loads, it integrates excess photovoltaic (PV) generation into the main grid, lowering the cost of massive battery storage and increasing the supply of clean energy to the grid. From the perspective of single-phase residential grid-connected PV systems, this can have beneficial repercussions in addition to the aforementioned cause. Integration of a single-phase distributive generation system, such as solar PV with the utility grid, introduces various concerns with power quality issues, including overvoltage, an increase in fault level and harmonics effect. This paper evaluates the effects of technical parameters on residential single-phase grid-connected photovoltaic integration with the IEEE 14 bus system. Matlab/Simulink is used to develop the system, which includes an IEEE 14 bus and a single-phase grid-connected PV module connected to the following bus with its associated residential loads. The effects of varied PV module sizing and load variation on the technical parameters are observed. The research findings are compared to the current models of residential three- phase grid-connected PV under the NEM scheme. The proposed sizing and mitigation of the systems impact by technical concerns are discussed.Details - (link)",
      "Improved Design and Comparison of a Low Power CNTFET based on D Flip-FlopDOI: 10.1109/ECCE57851.2023.10101615Abstract:Carbon nanotube field effect transistors (CNTFETs) are auspicious nanoscale devices for realizing high performance with very thick and low power circuits. In this paper, different parameters of CNTFET from previous works have been studied and analyzed. Then, leakage current and leakage power of the proposed D flip-flop were compared with different reference circuits. The main goal is to improve, develop and design a CNTFET based D flip-flop. CNTFET's leakage current and leakage power consumption reduced drastically by decreasing diameter of CNT and number of CNT used in the CNTFET, which affected overall CNTFET's power consumption obviously. The proposed D flip-flop exhibited exquisite performance in case of leakage power consumption, having an average of 10.306 nW only, which is extremely low compared to the contemporary circuits. The chosen thickness of oxide and CNT's length for all the CNTFETs are 5 nm and 16 nm respectively. These CNTFETs are based on the results gathered from so that not only they can act as a D flip-flop correctly but also total power consumption of the device would be reduced as much as possible."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Jaharat Ara",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "jaharat.ara@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/mKTMLNtbDjto1rPoQLF2.jpg",
    "profileUrl": "https://ius.edu.bd/profile/jaharat-ara",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abu Sayed Rafi",
    "title": "Senior Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "abu.sayed.rafi@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/fiMIP7Jac1sGifkvS5pT.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abu-sayed-rafi",
    "education": [
      {
        "degree": "B.Sc.",
        "institute": "Jashore University of Science and Technology",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "South Asian College Chittagong",
        "year": "2017"
      },
      {
        "degree": "SSC",
        "institute": "Hazi Mohammad Mohsin Govt. High School",
        "year": "2015"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "October, 2023 -Present"
      },
      {
        "institute": "IE Executive",
        "designation": "Jay Jay Mills Private BD Ltd.",
        "duration": "10thMay, 2023 - 25thOctober, 2023"
      }
    ],
    "publications": [
      "Rafi, Abu& Karim, Md & Islam, Tarikul. (2021). Promoting Sustainability by Examining the Possibility of Using Bio-Mordants in Natural Coloration with Teak Dye Extract.This study aimed to enhance sustainability in dyeing processes by using natural teak sawdust dye and replacing conventional metallic mordants with bio-mordants like aloe vera and banana sap. Various dyeing parameters were examined, resulting in improved color fastness properties, demonstrating the potential for sustainable dyeing practices. (Link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Farhanaz Kamal",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "farhanaz.kamal@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/CbvNIbc0JvB8Aeo1mrNF.jpg",
    "profileUrl": "https://ius.edu.bd/profile/farhanaz-kamal",
    "education": [
      {
        "degree": "MBA",
        "institute": "AIUB",
        "year": "2018"
      },
      {
        "degree": "B.Sc in EEE",
        "institute": "AIUB",
        "year": "2012"
      },
      {
        "degree": "HSC",
        "institute": "Bangladesh International School and College, Jeddah",
        "year": "2007"
      },
      {
        "degree": "SSC",
        "institute": "Bangladesh International School and College, Jeddah",
        "year": "2005"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "April 2024 - Present"
      },
      {
        "institute": "Lecturer (Adjunct)",
        "designation": "University of Scholars",
        "duration": "2022 - March 2024"
      },
      {
        "institute": "Lecturer",
        "designation": "Effat University, Jeddah",
        "duration": "2012 – 2015"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Tariful Islam",
    "title": "Lecturer & Coordinator Diploma Batch",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "tariful.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/kK8j1Hsyc3SzgK37Gujc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/tariful-islam",
    "education": [
      {
        "degree": "Bachelor of Science",
        "institute": "Ahsanullah University of Science and Technology",
        "year": "2023"
      },
      {
        "degree": "H.S.C.",
        "institute": "Govt. Science College",
        "year": "2017"
      },
      {
        "degree": "S.S.C.",
        "institute": "Hajigonj Pilot High School",
        "year": "2015"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars",
        "designation": "Lecturer",
        "duration": "August 2024 to till date"
      },
      {
        "institute": "Radiance Group",
        "designation": "Assistant Merchandiser",
        "duration": "June 2024 to August 2024"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Tuhin Hossain",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "tuhin.hossain@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/6j0tKB3fjlZNW2dl9ta0.jpg",
    "profileUrl": "https://ius.edu.bd/profile/tuhin-hossain",
    "education": [
      {
        "degree": "MSc",
        "institute": "Jahangirnagar University",
        "year": "2022"
      },
      {
        "degree": "BSc",
        "institute": "Daffodil International University",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "Hajigonj Model Govt. College",
        "year": "2015"
      },
      {
        "degree": "SSC",
        "institute": "Firojpur J. K High School",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "18/05/2023 - Present"
      },
      {
        "institute": "Network Engineer",
        "designation": "Icon Infotech Limited",
        "duration": "08/06/2021 - 31/12/2021"
      },
      {
        "institute": "Teaching Assistant",
        "designation": "Daffodil International University",
        "duration": "1/10/2020 - 30/04/2021"
      }
    ],
    "publications": [
      "Hossain, T., Kabir, A. A. N., Ratul, M. A. H., & Sattar, A. (2022, March). Sentence Level Sentiment Classification Using Machine Learning Approach in the Bengali Language. In2022 International Conference on Decision Aid Sciences and Applications (DASA)(pp. 1286-1289). IEEE.Abstract:In recent times, sentiment analysis is one of the most important aspects of machine learning research. However, many context-aware systems have developed based on the English language, which can automatically process the English language to make a clear emotion. However, much less work has done on Bengali than that. The main reason for this is the lack of an accurate Bengali dataset. In our works, we have used a unique dataset. The data is mainly various comments made by people through online news portals and social media. Humans collect those and maximum awareness sought while labeling the emotions. All data labeled into positive (1) and negative (0) emotions. Our main objective in this research is to build a Bengali context-aware system using various supervised machine-learning algorithms that can easily find out the emotions of any Bengali language. For this, we used K-Nearest Neighbors (KNN), Decision Tree (DT), Logistic Regression (LR), Support Vector Classifier (SVC), Multinomial Naïve Bayes (MNB), and Random Forest (RF) algorithm. Among them, the Random Forest (RF) algorithm generates the maximum accuracy that is 67.34 %."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Saifun Nahar Srabonty",
    "title": "(Study leave in Japan ) Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "saifun.nahar.srabonty@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/I65klbuSKPsTWopMj8cD.jpg",
    "profileUrl": "https://ius.edu.bd/profile/saifun-nahar-srabonty",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Sunjida Mushfiq Nova",
    "title": "Senior Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "sunjida.mushfiq.nova@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/TRba5lIU2mcJw6FlT1H6.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sunjida-mushfiq-nova",
    "education": [
      {
        "degree": "M.Sc in Nuclear Science and Engineering",
        "institute": "Military Institute of Science and Technology",
        "year": "Ongoing(2nd Semester)"
      },
      {
        "degree": "B.Sc in Electrical andElectronic Engineering",
        "institute": "East West University",
        "year": "2019"
      },
      {
        "degree": "HSC",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2013"
      },
      {
        "degree": "SSC",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2011"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "University of Scholars",
        "duration": "01 February, 2025"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "15 November, 2022 31 January, 2025."
      },
      {
        "institute": "Graduate Teaching Assistant",
        "designation": "East West University",
        "duration": "22 Sep'19 to 22 Dec'19."
      },
      {
        "institute": "Undergraduate Teaching Assistant",
        "designation": "East West University (Maths & Physical Sciences Dept.)",
        "duration": "6 May '18 to 18 Dec '18."
      },
      {
        "institute": "Undergraduate Teaching Assistant",
        "designation": "East West University (EEE Dept.)",
        "duration": "20 Jan '17 to 14 Dec '17."
      },
      {
        "institute": "Course Instructor",
        "designation": "EWU Robotors Group",
        "duration": "22 March '16 to 23 April '16."
      }
    ],
    "publications": [
      "Working on a project (From 2nd October 2022 to till Now) named “Energy-efficient heating ventilation and air conditioning (HVAC) system for smart buildings using machine learning” with Colonel Molla Md Zubaer (Head of the Nuclear Science and Engineering Department)and Lieutenant Colonel Faisal Kader (Associate Professor of Nuclear Science and Engineering Department).Abstract:Energy conservation is a critical issue, particularly in manufacturingindustries with intensive energy usage. Heating, ventilation and air conditioning (HVAC) systems supply fresh air and condition the indoor air temperature and humidity of a building. HVAC systems were invented to improve human thermal comfort. For any HVAC system, it is important to minimize the power consumption. HVAC systems normally consist of components to supply, filter, heat, cool and distribute the conditioned air into targeted interior spaces.  In an HVAC system, the principle: ‘the whole is more than the sum of its parts’ is applied. This means the high-efficiency of one component can operate at expense of the others.  It is ASHRAE’s position that provision of acceptable IAQ (Indoor Air Quality) is an essential building service and that all decisions about buildings and heating, ventilating, and air-conditioning (HVAC) systems must consider the implications for IAQ. This position holds for all building types, including sustainable and resilient buildings where measures have been taken to reduce environmental impacts and energy use. However, the conventional method of controlling the AC may not ensure a thermally suitable indoor environment, and users' choices for excessive cooling may have had a negative impact on the health of the occupants. To overcome these highly critical issues, a microcontroller-based system is proposed that can control the AC to provide a thermally comfortable environment based on the ASHRAE (American Society of Heating, Refrigerating and Air-Conditioning Engineers) standard. To develop the system, some hardware like Arduino Uno ATmega328P microcontroller board, DHT11 (Temperature and humidity sensor), PIR sensor, servo motor and the Air conditioning vents are used. The proposed system is implemented through an embedded system by using the Arduino IDE programming language. An algorithm of the suggested system has been designed and built for the expected temperature data using the values of the two sensors, and a mathematical formula can be deduced from the data. The sensors are used to detect temperature, humidity, motion and in response to the accumulated data the AC turns on/off automatically. Any smart AC room that allows for the automatic on/off of the AC system based on the projected temperature can be equipped with the proposed system. This model could be used in any location, including places for disabled people, private rooms, conference rooms, public spaces, classrooms, and vehicles where it is impractical to manually manage the AC. The proposed model is designed to minimize the energy consumption with optimum human thermal comfort.",
      "Design and Implementation of an Autonomous Balancing Cube” Published in: 2023 International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD), DOI: 10.1109/ICICT4SD59951.2023.10303485Shaiyek Md. Buland Taslim; Dewan Mabrur Hasan Chowdhury; Sunjida Mushfiq Nova; Abdul Hasib Siddique;Abstract:This paper presents the modeling and implementation of an autonomous self-balancing cube which can maintain balance itself on a platform. This autonomous system performs as a tangible demonstration of modern engineering with the amalgam of control theory and intelligent decision-making. This self-balancing cube utilizes sensors, actuators, and a PID controller to achieve and maintain the balance where the PID controller continuously monitors the cube's position through sensor feedback and makes precise adjustments to counteract deviations from the desired equilibrium. This implemented device is showcasing a real-life application of PID control and offering insights into the development of advanced control algorithms for autonomous systems."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Rafi Ahmed",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "rafi.ahmed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/msEQLn4iM9cqhAhChSv4.jpg",
    "profileUrl": "https://ius.edu.bd/profile/rafi-ahmed",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "L.M Raghib Nihal",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "l.m.raghib.nihal@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/EVd3RmR8oqQjriIbQjdc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/l.m-raghib-nihal",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Eshita Tasmin",
    "title": "Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "eshita.tasmin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/yu20q0UPOcM7U2z14FHL.jpg",
    "profileUrl": "https://ius.edu.bd/profile/eshita-tasmin",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Natasha Nazli Noor",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "natasha.nazli.noor@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/M5PJO6G69MdypTNLxgMz.jpg",
    "profileUrl": "https://ius.edu.bd/profile/natasha-nazli-noor",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abu M. Fuad",
    "title": "Senior Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "abu.m.fuad@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/JvtHceJDGLwF49xuO4IJ.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abu-m.-fuad",
    "education": [
      {
        "degree": "1",
        "institute": "M.Sc. (EEE)",
        "year": "Ahsanullah University of Science and Technology"
      },
      {
        "degree": "2",
        "institute": "B.Sc. (EEE)",
        "year": "Ahsanullah University of Science and Technology"
      },
      {
        "degree": "3",
        "institute": "H.S.C (Science)",
        "year": "Notre Dame College"
      },
      {
        "degree": "4",
        "institute": "S.S.C (Science)",
        "year": "St. Joseph Higher Secondary School"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, EEE",
        "designation": "University of Scholars",
        "duration": "July 2023 – Present"
      },
      {
        "institute": "Advisor, Robotics and AI",
        "designation": "University of Scholars",
        "duration": "December 2023 – Present"
      },
      {
        "institute": "Guest Lecturer, EEE",
        "designation": "Bangladesh University",
        "duration": "Apr 01, 2023 - Jul 01, 2023"
      },
      {
        "institute": "Robotic Instructor",
        "designation": "10 Minute School",
        "duration": "Jun 2021 - Mar 2023"
      },
      {
        "institute": "Strategic Advisor",
        "designation": "IAIT (Ideal Association of Informatics and Technology)",
        "duration": "Dec 2019 - Jan 2023"
      }
    ],
    "publications": [
      "ARTICLES (JOURNAL) IN PROCEEDINGS",
      "1.Abu M. Fuad, “Sustainable renewable energy integration on expressways in Bangladesh: A techno-economic, environmental, and sensitivity analysis of a grid-connected hybrid system,”Energy Conversion and Management: X (Q1).Status:Published,link:[Paper]",
      "2.Abu M. Fuad (1stAuthor), “Enhancing Operational Efficiency through Overall Equipment Efficiency Optimization and Kaizen Initiatives: A Case Study of a Carton Factory,” PLoS One (Q1), August 2024.Status:Published, link:[Paper]",
      "3. Abu M. Fuad (4thAuthor),“Optimizing hybrid renewableenergy-based automated railway level crossing in Bangladesh: Techno-economic and emission analysis,”Energy Conversion and Management: X (Q1), May 2024.Status:Published,link:[Paper]",
      "4. Abu M. Fuad (6thAuthor),“Data-driven health and life prognosis management of supercapacitor and lithium-ion battery storage systems: Developments, implementation aspects, limitations, and future directions,” Journalof Energy Storage (Q1),March 2024.",
      "Status:Published,link:[Paper]",
      "5. Abu M. Fuad(5thAuthor),“Empowering Fuel Cell Electric Vehicles towards Sustainable Transportation: An Analytical Assessment, Emerging Energy Management, Key Issues and Future Research\"World Electric Vehicle Journal, MDPI (Q2).Status:Published,link:[Paper]"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Raju Kumar Das",
    "title": "Senior Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "raju.kumar.das@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/9DITjJUePtbLaZo0KETw.jpg",
    "profileUrl": "https://ius.edu.bd/profile/raju-kumar-das",
    "education": [
      {
        "degree": "Master of Science",
        "institute": "University of Dhaka, Bangladesh",
        "year": "2022"
      },
      {
        "degree": "Bachelor of Science",
        "institute": "University of Dhaka, Bangladesh",
        "year": "2018"
      },
      {
        "degree": "H.S.C.",
        "institute": "Jashore Shikka Board Govt. School andCollege, Jashore, Bangladesh",
        "year": "2013"
      },
      {
        "degree": "S.S.C.",
        "institute": "Monirampur Govt. Pilot High School,Jashore, Bangladesh",
        "year": "2011"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "August 2024 to till date"
      },
      {
        "institute": "Research Assistant",
        "designation": "Ahsanullah University of Scienceand Technology (AUST)",
        "duration": "November 2022 to February 2024"
      }
    ],
    "publications": [
      "Journal Article:"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Mr. Osman Goni",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "mr.osman.goni@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/HmY3Rg0SDLRBrSDZQcjt.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mr.-osman-goni",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Mohaiminul Islam",
    "title": "(Study Leave in Japan ) Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "md.mohaiminul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/9QPlcYR9M21VwEXSpflF.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-mohaiminul-islam",
    "education": [
      {
        "degree": "M A in Applied linguistics & ELT",
        "institute": "University of Dhaka",
        "year": "2021"
      },
      {
        "degree": "B A in English Language & Literature",
        "institute": "University of Dhaka",
        "year": "2022"
      },
      {
        "degree": "HSC",
        "institute": "Ta’mirul Millat Kamil Madrasah",
        "year": "2017"
      }
    ],
    "experience": [
      {
        "institute": "Senior Teacher",
        "designation": "HEED International School",
        "duration": ""
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mutmainna Akhter",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "mutmainna.akhter@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/MR7wAhRhLQT4rDuOt22l.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mutmainna-akhter",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Fairoz Mehjabin",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "fairoz.mehjabin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/aL96lfMDBlZr4CdG9xYc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/fairoz-mehjabin",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Faham Ahmed Kalam",
    "title": "Senior Lecturer (On Study Leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "faham.ahmed.kalam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/UIysDEIWFY1fGKDeJAlx.jpg",
    "profileUrl": "https://ius.edu.bd/profile/faham-ahmed-kalam",
    "education": [
      {
        "degree": "Certified Management Accountant (CMA)",
        "institute": "The Institute of Cost and Management Accountants of Bangladesh",
        "year": "Continuing"
      },
      {
        "degree": "Master of Accounting (Professional)",
        "institute": "Macquarie University",
        "year": "2018"
      },
      {
        "degree": "Bachelor of Business Administration",
        "institute": "North South University",
        "year": "2014"
      },
      {
        "degree": "A-level",
        "institute": "British Council",
        "year": "2010"
      },
      {
        "degree": "O-level",
        "institute": "British Council",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Senior Lecturer",
        "designation": "University of Scholars",
        "duration": "June 2024 - Present"
      },
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "October 2021- May 2024"
      },
      {
        "institute": "Director",
        "designation": "NationTech Communications Ltd",
        "duration": "Jan 2020- Present"
      },
      {
        "institute": "Intermediate Accountant",
        "designation": "Hall Chadwick Chartered",
        "duration": "Jan 2019- August 2019"
      },
      {
        "institute": "Assistant Accountant",
        "designation": "Hannan Accounting and Taxation",
        "duration": "April 2016- Dec 2018"
      },
      {
        "institute": "Executive Officer",
        "designation": "Al-Arafah Islami Bank Ltd",
        "duration": "July 2014- Jan 2016"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Zahid Kaisar",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "zahid.kaisar@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/zDM9GBHtP41i2WIB88px.jpg",
    "profileUrl": "https://ius.edu.bd/profile/zahid-kaisar",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Mostaq Ahmed Himel",
    "title": "Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "md.mostaq.ahmed.himel@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/9tzaQRbpe8t8Pri5Pafs.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-mostaq-ahmed-himel",
    "education": [
      {
        "degree": "BSc",
        "institute": "Textile Engineering",
        "year": "3.45"
      },
      {
        "degree": "HSC",
        "institute": "Govt. Rajendra College, Faridpur",
        "year": "4.83"
      },
      {
        "degree": "SSC",
        "institute": "Faridpur Zilla School, Faridpur",
        "year": "5.00"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University Of Schollars",
        "duration": "October, 2025 - Present"
      },
      {
        "institute": "Intern",
        "designation": "Hameem Group",
        "duration": "February,2025 - March,2025"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Nahid",
    "title": "Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "md.nahid@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/QkBv6coPiK6uEOBvjgh9.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-nahid",
    "education": [
      {
        "degree": "B.Sc.",
        "institute": "National Institute of Textile Engineering and Research (NITER)",
        "year": "2024"
      },
      {
        "degree": "HSC",
        "institute": "Daud Public School & College, Jessore Cantonment",
        "year": "2019"
      },
      {
        "degree": "SSC",
        "institute": "Gangni Pilot High School, Gangni , Meherpur",
        "year": "2016"
      }
    ],
    "experience": [
      {
        "institute": "Montrims LTD",
        "designation": "Yarn Dyeing Planning",
        "duration": "April 2025 to June 2025"
      },
      {
        "institute": "Pride Group",
        "designation": "Merchandising & Marketing",
        "duration": "September 2024 to March 2025"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abdullah Al Rakib",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "abdullah.al.rakib@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/drTBnELUTABsu4SzZ4VA.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abdullah-al-rakib",
    "education": [
      {
        "degree": "BBA",
        "institute": "North South University",
        "year": "2020"
      },
      {
        "degree": "HSC",
        "institute": "Chittagong Biggan College",
        "year": "2014"
      },
      {
        "degree": "SSC",
        "institute": "Chittagong Government High School",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Jr. Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "15/11/2021 - Present"
      },
      {
        "institute": "HR & Admin Officer",
        "designation": "MUSQAL",
        "duration": "01/06/2020 - 30/08/2021"
      },
      {
        "institute": "Research Assistant",
        "designation": "North South University",
        "duration": "01/06/2019 - 30/12/2019"
      }
    ],
    "publications": [
      "The poultry industry of Bangladesh: an overviewAbstract:Commercial poultry production has been growing at a greater pace in Bangladesh for a number of years. Poultry industry serves as an additional source of income and employment in rural parts of the country, however, the feasibility of many farms are at a risk of being dwindled due to lack of knowledge (procedure) on maintaining farms, prices of bird feed, various flu and viruses and most importantly, uncertain situations. This case provides an overview of the industry, challenges and suggests the way forward. - SAGE Business Cases, SBC-20-0027Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Zaheer Al Jamee",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "zaheer.al.jamee@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/XfzMIMYEThzrlt0iIfUc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/zaheer-al-jamee",
    "education": [
      {
        "degree": "Master of Science in Electrical & Electronic Engineering",
        "institute": "Bangladesh University of Engineering and Technology",
        "year": "Ongoing"
      },
      {
        "degree": "Bachelor of Science in Electrical & Electronic Engineering",
        "institute": "Rajshahi University of Engineering & Technology",
        "year": "2024"
      },
      {
        "degree": "H.S.C.",
        "institute": "New Govt. Degree College, Rajshahi",
        "year": "2018"
      },
      {
        "degree": "S.S.C.",
        "institute": "Shiroil Govt. High School, Rajshahi",
        "year": "2016"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Imam Hossain Shibly",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "imam.hossain.shibly@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/e37vVCNrwi1iUuCakn8K.jpg",
    "profileUrl": "https://ius.edu.bd/profile/imam-hossain-shibly",
    "education": [
      {
        "degree": "Bachelor of Science",
        "institute": "Rajshahi University of Engineering and Technology (RUET)",
        "year": "2023"
      },
      {
        "degree": "Higher Secondary Certificate",
        "institute": "Gazipur Cantonment College",
        "year": "2017"
      },
      {
        "degree": "Secondary School Certificate",
        "institute": "Rani Bilashmoni Govt. Boys’ High School",
        "year": "2015"
      }
    ],
    "experience": [
      {
        "institute": "Uttara  University",
        "designation": "Adjunct Lecturer",
        "duration": "2024-2024"
      },
      {
        "institute": "NWPGCL",
        "designation": "Trainee Engineer",
        "duration": "2023-2023"
      }
    ],
    "publications": [
      "Computing Optical Properties of Open–Channels Based Plasmonic Biosensor Employing Plasmonic Materials with ML ApproachAbstract:The fundamental phenomenon underpinning the photonic crystal fiber’s (PCF) functionality is its capacity to trap light, enabling a broader range of applications. The study involves depositing plasmonic materials on a dual-sided open–channels based PCF–surface plasmonic resonance (SPR) sensor to detect changes in the analyte’s refractive index (RI). Through numerical investigations, the research compares the optical characteristics employing two plasmonic materials, silver (Ag) and copper (Cu). The study results show that silver exhibits a high sensitivity to wavelengths, with a maximum wavelength sensitivity of 7000 nm/RIU. Additionally, silver demonstrates a significant amplitude sensitivity of 652.98 RIU −1 . Moreover, the resolution of silver is found to be 1.43 × 10 −6 RIU within the analyte RI of 1.39. Conversely, copper exhibits a maximum wavelength sensitivity of 6000 nm/RIU, a resolution of 1.67 × 10 −6 RIU, and an amplitude sensitivity of 356.42 RIU −1 at the same RI. Additionally, the study uses Machine Learning (ML) methods, especially specific Artificial Neural Networks (ANN), to calculate optical properties, focusing on confinement loss. The plasmonic biosensor offers a simple design, suitable sensitivity, and economic feasibility, making it a viable choice for detecting biological and biochemical analytes.link:https://ieeexplore.ieee.org/abstract/document/10441080",
      "Performance Analysis of Adaptive Cruise Control Using Frequency Modulated Continuous Wave Radar Under Rain ClutterAbstract:This paper introduces a simulation platform for Adaptive Cruise Control (ACC) using Frequency Modulated Continuous Wave (FMCW) radar operating at 77 GHz. ACC relies on radar sensors for precise assessment of nearby vehicle distance and velocity. FMCW radar offers superior accuracy and range resolution, crucial for reliable object detection in diverse driving conditions. The results reveal remarkable improvements, such as the ability to detect up to 3 targets within a maximum range of 200 m, and achieving a minimum detectable velocity for moving targets as low as 0.0083 m/s. However, radar performance can suffer due to clutter. The rain clutter scenario is also performed in the model and observed how the signal gets attenuated.link:https://ieeexplore.ieee.org/abstract/document/10441169"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Mir Sumaiya Islam",
    "title": "Lecturer",
    "dept": "english",
    "deptName": "Department of English",
    "email": "mir.sumaiya.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Modern Literature",
      "Linguistics",
      "Rhetoric"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/V9yvPYa9S0kbgxV1opHD.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mir-sumaiya-islam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mahbub-E-Sobhani",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "mahbub-e-sobhani@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/h5ksrUiw8O6xPRwFoKwD.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mahbub-e-sobhani",
    "education": [
      {
        "degree": "M.Sc",
        "institute": "United International University",
        "year": "Ongoing"
      },
      {
        "degree": "B.Sc",
        "institute": "United International University",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka Residential Model College",
        "year": "2015"
      },
      {
        "degree": "SSC",
        "institute": "Monipur High School",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "State University of Bangladesh",
        "designation": "Research Assistant (Part Time)",
        "duration": "2023-2024"
      },
      {
        "institute": "Orange Solutions Limited, United Group",
        "designation": "Junior Software Engineer",
        "duration": "December 2022-December 2023"
      },
      {
        "institute": "Bangladesh-Japan ICT Engineers' Training Program",
        "designation": "Trainee",
        "duration": "April 2022-October 2022"
      },
      {
        "institute": "SoftBD Limited",
        "designation": "Software Engineer Intern",
        "duration": "February 2022-April 2022"
      },
      {
        "institute": "Fronture Technologies Limited",
        "designation": "Software Engineer Intern",
        "duration": "September 2021-December 2021"
      }
    ],
    "publications": [
      "Advancing Bangla Punctuation Restoration by a Monolingual Transformer-Based Method and a Large-Scale Corpus. Details:https://aclanthology.org/2023.banglalp-1.3/",
      "Bangla Social Media Cyberbullying Detection Using Deep Learning. Details:https://link.springer.com/chapter/10.1007/978-981-99-7649-2_13",
      "An Enhanced Text Compression Approach Using Transformer-based Language Models."
    ],
    "ongoingResearch": [
      "Imbalanced Intrusion Classification using Ensemble Learning with Informative Instances",
      "Imbalanced Intrusion Classification using Ensemble Learning with Informative Instances",
      "Advancing Medication Safety Through Aspect Extraction and ADR Detection."
    ]
  },
  {
    "name": "Tahasin Tasfia",
    "title": "Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "tahasin.tasfia@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/MZFJ707s3bkjjFSN81fk.jpg",
    "profileUrl": "https://ius.edu.bd/profile/tahasin-tasfia",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Shadia Kabir Shabiha",
    "title": "Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "shadia.kabir.shabiha@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/FyQuliZMaXDWgDdmxc2f.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shadia-kabir-shabiha",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Arpita Roy",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "arpita.roy@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/mGr3pr9gYshRxApr0E7l.jpg",
    "profileUrl": "https://ius.edu.bd/profile/arpita-roy",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md Kawser Ahmed",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.kawser.ahmed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/3B5q6djy73dJq15Y7nB8.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md-kawser-ahmed",
    "education": [
      {
        "degree": "MSc in Physics",
        "institute": "Shahjalal University of Science & Technology, Sylhet",
        "year": "2024"
      },
      {
        "degree": "BSc in Physics",
        "institute": "Shahjalal University of Science & Technology, Sylhet",
        "year": "2022"
      },
      {
        "degree": "HSC",
        "institute": "Government Science College, Dhaka",
        "year": "2016"
      },
      {
        "degree": "SSC",
        "institute": "Motijheel Model High School & College, Dhaka",
        "year": "2014"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Meftahul Haque",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.meftahul.haque@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/larNeK5eLvnQyLwd6jZR.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-meftahul-haque",
    "education": [
      {
        "degree": "M.Sc. Engg. in Electronic and Photonic (EP)",
        "institute": "Bangladesh University of Engineering and Technology (BUET)",
        "year": "Ongoing"
      },
      {
        "degree": "B.Sc. Engg. in Electrical and Electronic Engineering (EEE)",
        "institute": "Bangladesh Army University of Science and Technology (BAUST), Saidpur",
        "year": "2019"
      },
      {
        "degree": "Higher Secondary Certificate (HSC)",
        "institute": "Gaibandha Govt. College",
        "year": "2015"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Ahammad Uddin Shah Shishu Niketon, Gaibandha",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "Teaching Assistant, Department of EEE",
        "designation": "Bangladesh University of Engineering and Technology (BUET)",
        "duration": "July 2022-June 2023"
      }
    ],
    "publications": [
      "INVESTIGATING THE ELECTRONIC PROPERTIES OF 3D BISMUTH SELENIDE (Bi2Se3) SLAB: FOCUS ON TOPOLOGICAL SURFACE STATES"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Onu Akhter",
    "title": "Lecturer",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "onu.akhter@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/r9J2Xq23CofTEPuwFh0N.jpg",
    "profileUrl": "https://ius.edu.bd/profile/onu-akhter",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Sadik Al Rayhan",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.sadik.al.rayhan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/JBjyGlWzovVGiPvh1Tvu.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-sadik-al-rayhan",
    "education": [
      {
        "degree": "M.Sc in Electrical & Electronic Engineering",
        "institute": "Khulna University of Engineering and Technology (KUET)",
        "year": "2024- Present"
      },
      {
        "degree": "B.Sc in Electrical & Electronic Engineering",
        "institute": "Khulna University of Engineering and Technology (KUET)",
        "year": "2024"
      },
      {
        "degree": "Higher Secondary Certificate (HSC)",
        "institute": "Notre Dame College",
        "year": "2018"
      },
      {
        "degree": "Secondary School Certificate (SSC)",
        "institute": "Bangamata Sheikh Fazilatunnesa Mujib Govt. Secondary School",
        "year": "2016"
      }
    ],
    "experience": [],
    "publications": [
      "Visible Diffuse Reflectance Smartphone Spectrometer with High Spectral AccuracyAbstract:A smartphone-based spectrometer employing diffuse reflection principle is reported for the surface analysis of solid samples. The instrument utilizes a thin-film transmission grating for light diffraction and diffuse reflecting surface for projecting the image of the diffracted light onto the detector plane. The CMOS camera of smartphone camera directly captures the diffusely reflected photons within its limited field-of-view thus eliminating the need for collection, conditioning and converging optics. The optical setup of the instrument provides facility to calibrate the spectral response considering the nonlinear distribution of the wavelength across the diffraction direction. Additional correction in the detector response at different light intensity results a reduced spectral error with a maximum wavelength resolution of 𝛿𝜆 = 0.08 nm/pixel in the camera. This novel calibration method enables accurate spectral detection of narrowband molecular information within the spectral range Δλ = (400 – 700) nm of the instrument. As a proof of the concept, the instrument demonstrates successful detection of color pigments in food samples by absorption measurement of the samples at an average spectral error < 6%. The distinct absorption peak associated with standard food colors are compared against the absorption profile of unknown food colors used in pastry cake. This fieldfunctional smart analysis with internet connectivity opens opportunity of identifying food adulteration by using toxic chemical.Link",
      "Smartphone Self-Contained NIR ColorimeterAbstract:A self-contained smartphone based near infrared (NIR) colorimeter is reported for the first time by utilizing the inbuilt NIR emitter (𝛥𝜆 ≈ 770 − 1000nm) and macro-lens complementary metal-oxide semiconductor (CMOS) camera of phone. The emitted NIR light is guided through a low-cost multimode plastic fiber to illuminate the test sample and the phone’s CMOS camera is utilized to collect and digitize the transmitted light through that sample. An easy-to-use customized Android app has been developed to operate this ultra-lowcost (<$2) and field-portable (~174 gm) smartphone based NIR colorimeter fabricated by polyvinyl chloride (PVC) material. Performance of the instrument is evaluated by measuring the free fatty acid (FFA) percentage in the recycled palm oil samples with 0.21% average error of detection compared to the standard titration-based assessment. FFA is a significant quality indicator of vegetable oil, generally quantified in terms of oleic acid having an absorption peak at 𝜆𝑝 ≈ 930 nm which complies with the operating wavelength band (𝛥𝜆 ≈ 910 − 980 nm) of this instrument."
    ],
    "ongoingResearch": []
  },
  {
    "name": "SM Moniruzzaman",
    "title": "Senior Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "sm.moniruzzaman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/djtj2b1miw1iZB9Fb6ia.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sm-moniruzzaman",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Hasan Ali",
    "title": "Lab Assistant",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "md.hasan.ali@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/viDM8SiPYy31UHd3Q7ZY.png",
    "profileUrl": "https://ius.edu.bd/profile/md.-hasan-ali",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Sadia Nur Nazifa",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "sadia.nur.nazifa@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/FjDSvR4Aue1f9JQl6PKH.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sadia-nur-nazifa",
    "education": [
      {
        "degree": "BSc in CSE",
        "institute": "Military Institute of Science and Technology (MIST)",
        "year": "2024"
      },
      {
        "degree": "H.S.C.",
        "institute": "Holy Cross College",
        "year": "2019"
      },
      {
        "degree": "S.S.C.",
        "institute": "Mohammadpur Preparatory School and College",
        "year": "2017"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars",
        "designation": "Lecturer (Dept of CSE)",
        "duration": "2024- present"
      },
      {
        "institute": "BrainStation 23",
        "designation": "Intern",
        "duration": "Jan 2023- Feb 2023"
      }
    ],
    "publications": [
      "PPDHero: Requirements Elicitation and Development of a System to Empower New Mothers on Postpartum Depression.Link:https://doi.org/10.1007/978-3-031-64850-2_37",
      "MBLDP-R: A Multiple Biomolecules Based Rapid Life Detection Protocol Embedded in a Rover Scientific Subsystem for Soil Sample AnalysisLink:https://dx.doi.org/10.21203/rs.3.rs-1263964/v1"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Rojal Hasan",
    "title": "Lab Instructor",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "rojal.hasan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/5Q9X1vsipYaEv1hqCYjW.jpg",
    "profileUrl": "https://ius.edu.bd/profile/rojal-hasan",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Sabikun Nahar Zerin",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "sabikun.nahar.zerin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/IBw06Yn8rQGGVKEmjDSc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sabikun-nahar-zerin",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Gazi Rabeya Islam",
    "title": "Lecturer",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "gazi.rabeya.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/orz7uDoPxQ1YASzRyLkd.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/gazi-rabeya-islam",
    "education": [
      {
        "degree": "1.",
        "institute": "B.Sc. in Electronics & TelecommunicationEngineering",
        "year": "Rajshahi University of Engineering & Technology"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars",
        "designation": "Lecturer, Department of EEE",
        "duration": "15 April, 2025"
      }
    ],
    "publications": [
      "1. “Advancements in a Dual-Core PCF-SPR Sensor Incorporated with a Gold Coating for Biosensing Purpose”",
      "Abstract:The progression and characterization of a Surface Plasmon Resonance (SPR) dual-core photonic crystal fiber (PCF) biosensor incorporated with a gold-coated system are explored in this research paper. SPR stands out as a validated sensing mechanism, offering authorized and label-free detection of biological substances. The sensitivity and precision of biomolecular interaction analysis experience a notable augmentation through the proposed biosensor, capitalizing on the distinctive attributes of PCF, such as its expansive surface area and modal confinement. The exterior of the PCF is utilized for immobilizing a substance called analyte along with a plasmonic activity material, rendering it suitable for operational applications. A plasmonic substance, gold (Au) is employed for a certain trait. The simulation outcomes exhibit an augmented dynamic perception, ranging from the refractive index (RI) of 1.35 to 1.4. Additionally, the biosensor's specificity towards different biomolecules is investigated. The sensor has been analyzed and assessed using the finite element method (FEM). After simulation and numerical analysis, the sensor attains a maximum wavelength sensitivity (WS) of 12000 nm/RIU and amplitude sensitivity (AS) of 491 RIU−1with a resolution (R) of 8.33×10−6. (LINK)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Syada Tasfia Rahman",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "syada.tasfia.rahman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/F22GqDob3dyCVijYJMa6.jpg",
    "profileUrl": "https://ius.edu.bd/profile/syada-tasfia-rahman",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Moumita Tanjila",
    "title": "Lecturer (Study Leave )",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "moumita.tanjila@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/OdVllMFl3Nk46pAY0dyP.jpg",
    "profileUrl": "https://ius.edu.bd/profile/moumita-tanjila",
    "education": [
      {
        "degree": "MBA",
        "institute": "Jagannath University",
        "year": "2023"
      },
      {
        "degree": "BBA",
        "institute": "Jagannath University",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "Ideal School and College",
        "year": "2016"
      },
      {
        "degree": "SSC",
        "institute": "Motijheel Model High School",
        "year": "2014"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "May, 2023 - Current"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mohsin Uddin",
    "title": "Lecturer (On Study Leave)",
    "dept": "textile",
    "deptName": "Department of Textile Engineering",
    "email": "mohsin.uddin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Smart Textiles",
      "Polymer Science",
      "Supply Chain"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/RFJHwUr1udvHblA2byby.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mohsin-uddin",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "Bangladesh University of Engineering & Technology",
        "year": "Ongoing"
      },
      {
        "degree": "B.Sc.",
        "institute": "Bangladesh University of Textiles",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "B.N. College, Dhaka",
        "year": "2015"
      },
      {
        "degree": "SSC",
        "institute": "Monipur High School",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "01/10/2021 -Present"
      },
      {
        "institute": "Junior Lecturer",
        "designation": "National Institute of Design, National University",
        "duration": "01/03/2021 -30/09/2021"
      }
    ],
    "publications": [
      "Uddin, M., Chowdhury, S. E., & Elahi, S. (2022). Developing a Water Treatment Filter by Integrating Slow Sand Filtration Technology with Polypropylene Nonwoven and Activated Carbon and Testing Its Performance. Water Conservation Science and Engineering, 1-11.Abstract:The scarcity of fresh drinking water has become a major concern in various parts of the world recently. Therefore, this study aimed to develop a sustainable polymer (polypropylene) and carbon (activated carbon from coconut shell) based water treatment filter. The filter was made by integrating polypropylene nonwoven fabric on top of a two-inch layer of activated carbon and the traditional slow sand filter. The filter showed a significant reduction in turbidity, total dissolved solids (TDS), biological oxygen demand (BOD), pH, and concentration of heavy metals (HM) in the water samples collected from Turag River, Bangladesh. The reduction efficiencies were more than 85%. The higher value of reducing heavy metals, TDS, BOD, and pH might be explained by higher particle retention and adsorption capacity of the filter due to the notable higher specific surface area of activated carbon and the pore size of the polypropylene filtration layer. The concentrations of lead, zinc, iron, potassium, magnesium, calcium, and copper were examined in which the filter showed a promising result; however, the removal efficiency of other potential heavy metals is yet to be tested.Details - (link)",
      "Uddin, M., Ullah, M. R., & Dipto, M. R. R. Assessment of the current working condition of the garment workers and determining the importance of labor union for the improvement of working condition in the RMG industry of Bangladesh.Abstract:The well-being of the workers is one of the most important issues in industries worldwide. The ready-made garment (RMG) industry of Bangladesh is the backbone of the country's economy which has been facing challenges to ensure workplace safety of the workers. Also, there has not been a healthy growth of labor unionism within the RMG industry. Previous studies suggest that there is a widespread occupational segregation and gender discrimination in wage rates. The purpose of this study is to assess the current working condition of the garment workers in terms of health and workplace safety and gender discrimination. Another purpose is to determine the impact of labor union on improvement of the workers' condition. The study uses survey data from 203 responses to evaluate the working condition of the RMG industry. An exploratory data analysis was done to measure the occupational health and safety which was followed by a logistic regression to find out the relation between labor union and other variables. Results reveal that gender discrimination has been reduced greatly, fire, building and other workplace safety measures has been consistently improving and labor union has a significant impact on enhancement of betterment of the workers.Details - (link)",
      "Uddin, M., Tushar, S. I., & Sakib, S. (2020). Producing Sanitary pads from knitwear waste in Bangladesh. Materials Circular Economy, 2(1), 15.Abstract:At present, not only Bangladesh but also the entire world is so conscious about women’s health and environmental protection. In our country, a large number of women, especially those from low socio-economic groups, do not use sanitary napkins since the available pads in the market are costly. They make use of old rags instead which are not comfortable or hygienic, leading to illnesses which constantly cause absence from work. On the contrary, export income of Bangladesh heavily depends on its textile industry which produces almost 500,000 tons of clothing waste annually. Moreover, clothes are generally thrown away after use. Both these incidents cause serious problems to the environment. For instance, waste clothes take plenty of time to mix with soil, causing landfill problems. Besides, some people burn these thrown away clothing materials in order to reduce solid waste, which instead causes carbon emission. Burning these wastes is not a solution. To solve these problems we have made sanitary pads from recycled cotton collected from waste clothes and thrown away clothing materials, particularly the knitwear which are more sustainable, lightweight, and affordable.Details - (link)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Wasimul Karim",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "wasimul.karim@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/uS0OXy8dpMqS8O3aLcsP.jpg",
    "profileUrl": "https://ius.edu.bd/profile/wasimul-karim",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mohammad Asif Iqbal",
    "title": "Advisor for VLSI",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "mohammad.asif.iqbal@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/5LGGLtqrY9pYrhuTTpAG.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mohammad-asif-iqbal",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Umme Kulsum",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "umme.kulsum@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/lcXnk3IpsZm1K7L2EAXA.jpg",
    "profileUrl": "https://ius.edu.bd/profile/umme-kulsum",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abu Sufian Md. Shahed",
    "title": "Senior Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "abu.sufian.md.shahed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/TBTp1Z1JNgLLhiR0vpyQ.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abu-sufian-md.-shahed",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Quazi Firoza Zafar",
    "title": "(Study Leave) Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "quazi.firoza.zafar@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/oZ3vkShswpt3ccynbkRa.jpg",
    "profileUrl": "https://ius.edu.bd/profile/quazi-firoza-zafar",
    "education": [
      {
        "degree": "Masters",
        "institute": "University Of Dhaka",
        "year": "2024"
      },
      {
        "degree": "B.ED",
        "institute": "National University",
        "year": "2017"
      },
      {
        "degree": "MBA",
        "institute": "Stamford University",
        "year": "2007"
      },
      {
        "degree": "BBA",
        "institute": "University of Dhaka",
        "year": "2002"
      },
      {
        "degree": "HSC",
        "institute": "Agrabad Girls College",
        "year": "1998"
      },
      {
        "degree": "SSC",
        "institute": "St. Scholastica Girls High School",
        "year": "1996"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Anika Anjum Himi",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "anika.anjum.himi@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/e2qCqT2uKm2IdtiAWBv7.jpg",
    "profileUrl": "https://ius.edu.bd/profile/anika-anjum-himi",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mostafa Asif",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "mostafa.asif@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/OYz4oa9OMdyZQKUEfzbt.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mostafa-asif",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Nowshin Zarin",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "nowshin.zarin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/lLYb9s3Hv8Julfw4w4sh.jpg",
    "profileUrl": "https://ius.edu.bd/profile/nowshin-zarin",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Tilottama Ahmed",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "tilottama.ahmed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/EKU2u9he7JBGnvRsfl6N.jpg",
    "profileUrl": "https://ius.edu.bd/profile/tilottama-ahmed",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Shahinur Rahman",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "shahinur.rahman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/ax4nqRBDzKZoS90A4DNc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/shahinur-rahman",
    "education": [
      {
        "degree": "Masters in Business Administration (MBA)",
        "institute": "Islamic University, Bangladesh",
        "year": "Human Resource Management (HRM)"
      },
      {
        "degree": "Bachelor of Business Administration (BBA)",
        "institute": "Islamic University, Bangladesh",
        "year": "Human Resource Management (HRM)"
      },
      {
        "degree": "HSC",
        "institute": "Military Collegiate School Khulna (MCSK)",
        "year": "Science"
      },
      {
        "degree": "SSC",
        "institute": "Military Collegiate School Khulna (MCSK)",
        "year": "Science"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Fahim Ahmad",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "fahim.ahmad@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/W2lgZV49kCxcUROeVJoU.jpg",
    "profileUrl": "https://ius.edu.bd/profile/fahim-ahmad",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Farzana Rahman",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "farzana.rahman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/QN40TUdvD1FhKtFVr43V.jpg",
    "profileUrl": "https://ius.edu.bd/profile/farzana-rahman",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Zia Ul Islam",
    "title": "Research Assistant",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "zia.ul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/1jXZBX5E2jsG8eeYbdGh.jpg",
    "profileUrl": "https://ius.edu.bd/profile/zia-ul-islam",
    "education": [
      {
        "degree": "Bsc in EEE",
        "institute": "Green University of Bangladesh",
        "year": "2024"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka Board",
        "year": "2017"
      },
      {
        "degree": "SSC",
        "institute": "Dhaka Board",
        "year": "2015"
      }
    ],
    "experience": [],
    "publications": [
      "Journal Publications:"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Atkia Mahmuda Fariha",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "atkia.mahmuda.fariha@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/DKcZ9YO2cTcUDSZblxkd.jpg",
    "profileUrl": "https://ius.edu.bd/profile/atkia-mahmuda-fariha",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Syeda Hasnin Akhter Adity",
    "title": "Lecturer (On Study Leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "syeda.hasnin.akhter.adity@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/sjKjZCad8txL1aicI7Jx.jpg",
    "profileUrl": "https://ius.edu.bd/profile/syeda-hasnin-akhter-adity",
    "education": [
      {
        "degree": "MBA",
        "institute": "University of Dhaka (DU)",
        "year": "2013"
      },
      {
        "degree": "BBA",
        "institute": "University of Dhaka (DU)",
        "year": "2012"
      },
      {
        "degree": "HSC",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2007-08"
      },
      {
        "degree": "SSC",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2005"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer & BBA Coordinator",
        "designation": "University of Scholars (IUS)",
        "duration": "2021- Present"
      },
      {
        "institute": "Owner",
        "designation": "Thai Signatures Restaurant",
        "duration": "2017 - 2021"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "H M Ikram Kays",
    "title": "Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "h.m.ikram.kays@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/cHltVb4ZYSIOm4cEen3T.jpg",
    "profileUrl": "https://ius.edu.bd/profile/h-m-ikram-kays",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Mr. Tashviq Haque",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "mr.tashviq.haque@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/xqQpaAQIYUTdJOwIrrWZ.jpg",
    "profileUrl": "https://ius.edu.bd/profile/mr.-tashviq-haque",
    "education": [
      {
        "degree": "MBA",
        "institute": "Monash University",
        "year": "2017"
      },
      {
        "degree": "BBA",
        "institute": "American International University of  Bangladesh",
        "year": "2014"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka Commerce College",
        "year": "2010"
      },
      {
        "degree": "SSC",
        "institute": "Mohammadpur Model school &  College",
        "year": "2008"
      }
    ],
    "experience": [
      {
        "institute": "Proprietor",
        "designation": "TH Enterprise",
        "duration": "2018-Present"
      },
      {
        "institute": "Founder",
        "designation": "Vorosha Mental Health Services",
        "duration": "2020-Present"
      },
      {
        "institute": "Director",
        "designation": "Harvest International School",
        "duration": ""
      },
      {
        "institute": "Director (Marketing)",
        "designation": "Vendy Ltd",
        "duration": ""
      },
      {
        "institute": "Territory Manager",
        "designation": "Arla foods Bangladesh Limited",
        "duration": "03/05/2018-09/10/2018"
      },
      {
        "institute": "Internship (Business development & ecosystem)",
        "designation": "Telenor health",
        "duration": "15/12/2017-08/05/2018"
      },
      {
        "institute": "Internship (Business development & ecosystem)",
        "designation": "Nestle Bangladesh Limited",
        "duration": "06/09/2017-27/12/2017"
      },
      {
        "institute": "Teacher’s Assistant",
        "designation": "Monash University",
        "duration": ""
      },
      {
        "institute": "Business Analyst",
        "designation": "Fast Track Education Services limited Sdn Bhd",
        "duration": "01/08/2016-31/07/2017"
      },
      {
        "institute": "HR executive",
        "designation": "Space Scope (Architectural firm)",
        "duration": "01/09/2014-30/06/2015"
      },
      {
        "institute": "Internship",
        "designation": "UCBL (United commercial Bank limited)",
        "duration": "21/05/2014-20/08/2014"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md. Rahad Islam Bhuiyan",
    "title": "CSE Adjunct Lecturer",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "md.rahad.islam.bhuiyan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/rAQS6ud0biggQ2H1innM.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-rahad-islam-bhuiyan",
    "education": [
      {
        "degree": "Bsc in CSE",
        "institute": "Daffodil International University",
        "year": "2024"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka Board",
        "year": "2019"
      },
      {
        "degree": "SSC",
        "institute": "Comilla Board",
        "year": "2017"
      }
    ],
    "experience": [],
    "publications": [
      "Deep learning-based analysis of COVID-19 X-ray images: Incorporating clinical significance and assessing misinterpretationhttps://journals.sagepub.com/doi/full/10.1177/20552076231215915",
      "Malignancy pattern analysis of breast ultrasound images using clinical features and a graph convolutional networkhttps://journals.sagepub.com/doi/full/10.1177/20552076241251660",
      "Graph neural network-based breast cancer diagnosis using ultrasound images with optimized graph construction integrating the medically significant featureshttps://link.springer.com/article/10.1007/s00432-023-05464-w)",
      "Improving the Automated Diagnosis of Breast Cancer with Mesh Reconstruction of Ultrasound Images Incorporating 3D Mesh Features and a Graph Attention Networkhttps://link.springer.com/article/10.1007/s10278-024-00983-5"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Muntasir Hafij Nashek",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "muntasir.hafij.nashek@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/n9BqOb0Q4YvYqzQzhz2B.jpg",
    "profileUrl": "https://ius.edu.bd/profile/muntasir-hafij-nashek",
    "education": [
      {
        "degree": "MSc in Applied Statistics & Data Science",
        "institute": "Department of Statistics, Jahangirnagar University, Bangladesh",
        "year": "2024"
      },
      {
        "degree": "Masters in Business Administration (MBA)",
        "institute": "University of Dhaka, Bangladesh",
        "year": "2019"
      },
      {
        "degree": "Bachelor of Business Administration (BBA)",
        "institute": "School of Management Languages, Heriot Watt University, UK",
        "year": "2016"
      },
      {
        "degree": "A-levels (Science)",
        "institute": "EDEXCEL-Mastermind English Medium School",
        "year": "2010"
      },
      {
        "degree": "O-Levels (Science)-",
        "institute": "EDEXCEL-Playpen School",
        "year": "2008"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Muhammad Aminur Rahman",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "muhammad.aminur.rahman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/zxrzxgoDrDAQ1kmzRJEd.jpg",
    "profileUrl": "https://ius.edu.bd/profile/muhammad-aminur-rahman",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Tazin Ahmed",
    "title": "Lecturer(On Study Leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "tazin.ahmed@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/7fksxx21bbDaOvbHBvoW.jpg",
    "profileUrl": "https://ius.edu.bd/profile/tazin-ahmed",
    "education": [
      {
        "degree": "MBA",
        "institute": "University of Dhaka (DU)",
        "year": "2021"
      },
      {
        "degree": "BBA",
        "institute": "United International University (UIU)",
        "year": "2017"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka City College",
        "year": "2012"
      },
      {
        "degree": "SSC",
        "institute": "Agrani School & College",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars (IUS)",
        "duration": "04/05/2021 - Present"
      },
      {
        "institute": "Assistant Education Consultant",
        "designation": "TCL Global.",
        "duration": "15/01/2021 - 05/05/2021"
      },
      {
        "institute": "Assistant Coordinator",
        "designation": "Wordbridge School",
        "duration": "01/07/2018 - 31/07/2020"
      }
    ],
    "publications": [
      "Arman, S. and Ahmed, T., 2021. A Bibliometric Analysis on Dependency Theory. Journal of Community PositivePractices, 21, pp.98–115. https://doi.org/10.35782/JCPP.2021.4.07. (SCOPUS Q4)",
      "Atikur Rahaman, Tazin Ahmed, Aman Gupta, Rupali Dilip Taru, A.R.S. Ibn Ali, Julfikar Ali, 2021. WHAT FACTORS DO SATISFY EMPLOYEES OF SME BUSINESS SECTOR? A STUDY ON A DEVELOPING ECONOMY. Academy of Entrepreneurship Journal, Volume 28, Special Issue 1, 2022.Abstract:The current study aims to examine the effect of work environment, and remuneration job satisfaction of SME employees in Bangladesh. The study applied non-probability sampling method to collect the data. 240 SME employees were given with the survey questionnaire and 202 responses were found correct, indicating 84% response rate (n=202). The study also captured basic and demographic information of the SME employees such their age, gender, employment period and marital status. Latest version of SPSS software was used to test the hypotheses. 5% significance level was used to test the study hypotheses. Based on hypotheses, the conceptual model of the research was also proposed. The regression results show that all the two independent variables: work environment, and remuneration have significant effect of employee job satisfaction in SME business sector in Bangladesh. Human resource managers will find the study findings helpful to develop their policy to satisfy and retain their existing employees at workplace.Details - (link)",
      "Loan Default During COVID-19: A Comparative Analysis between the top Five Public vs. Private Banks in Bangladesh. (Work in Process)"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Saleh Md. Arman",
    "title": "Associate Professor (On Study Leave)",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "saleh.md.arman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/3EcTWSFLH8nMYdd2n41v.jpg",
    "profileUrl": "https://ius.edu.bd/profile/saleh-md.-arman",
    "education": [
      {
        "degree": "M.Sc.",
        "institute": "Uppsala University (UU)",
        "year": "2021"
      },
      {
        "degree": "MBA",
        "institute": "University of Dhaka (DU)",
        "year": "2011"
      },
      {
        "degree": "BBA",
        "institute": "University of Dhaka (DU)",
        "year": "2010"
      },
      {
        "degree": "HSC",
        "institute": "Bir Shrestha Nur Mohammad Public College",
        "year": "2005"
      },
      {
        "degree": "SSC",
        "institute": "Mohammadpur Govt High School",
        "year": "2003"
      }
    ],
    "experience": [
      {
        "institute": "University of Scholars (IUS)",
        "designation": "DBA",
        "duration": "01/10/2022 - Present"
      },
      {
        "institute": "University of Scholars (IUS)",
        "designation": "DBA",
        "duration": "12/04/2021- 30/09/2022"
      },
      {
        "institute": "Ranada Prasad Shaha University (RPSU)",
        "designation": "DBA",
        "duration": "01/09/2018 - 11/04/2021"
      },
      {
        "institute": "Manarat International University (MIU)",
        "designation": "DBA",
        "duration": "05/10/2016- 31/08/2018"
      },
      {
        "institute": "Manarat International University (MIU)",
        "designation": "DBA",
        "duration": "27/06/2016 - 04/10/2016"
      },
      {
        "institute": "Manarat International University (MIU)",
        "designation": "DBA",
        "duration": "27/08/2012 - 27/06/2016"
      },
      {
        "institute": "World University of Bangladesh (WUB)",
        "designation": "DBA",
        "duration": "08/12/2011 - 26/08/2012"
      }
    ],
    "publications": [
      "1. Ying Xie, Saleh Md Arman(corresponding author), Chang Su. Circular economy in post consumption network: the role of re-commerce groups in Social Media Platforms.",
      "Journal Electronic Commerce Research and Applications (Impact Factor 5.9, Cite Score 10.1, SJR 1.34 Q1, ABS 2, Polish Ministerial Point 100).",
      "Abstract:The success of the circular economy transition depends on the involvement of all stakeholders. However, research on consumer participation in the circular economy is limited. This study identifies the micro-level dynamics of the circular economy within the post-consumption network, mainly         focusing on re-commerce operations. Through exploring re-commerce networks in 20 countries and a statistical analysis of factors influencing sales performances on Facebook, this research aims to identify the primary elements influencing re-commerce activities on Facebook and their role           in promoting circular economy. This study uses grounded theory and a mixed-methods approach, combining literature reviews and interviews, to explore the impact of re-commerce on the circular economy. Based on the research findings, this research develops four propositions to promote         future research on post-consumption networks in the circular economy context.",
      "Details - (link)",
      "2.  Arman, S.M., & Mark-Herbert, C. (2024). Ethical Consumption: A Review and Research Agenda",
      "Abstract:",
      "Ethical consumption is a domain of consumer research that focuses on individuals' ethical concerns when making consumption decisions. Owing to its enormous potential as a research domain, ethical consumption has gained increasing importance, especially in view of the impact of                     consumption choices on the environment and society as a whole. This study consolidates the existing body of information on ethical consumption through a systematic literature review (SLR) employing the SPAR-4-SLR methodology in conjunction with the ADO-TCM framework. An                       extensive search was conducted using the Scopus and Web of Science databases, carefully selecting 125 publications related to ethical consumption from 2002 to 2023. Next, a comprehensive descriptive analysis was conducted to identify the most substantial gaps in the literature and                 propose concrete directions for future research. Scholars across academic fields can utilize these findings and guidelines to inform their research, while practitioners can implement ethical consumption behavioral philosophies in their sustainable business practices. Details- (Link)",
      "3.Arman, S. M., & Mark-Herbert, C. (2022). Ethical Pro-Environmental Self-Identity Practice: The Case of SecondHand Products. Sustainability, 14(4), 2154.Abstract:As part of sustainable development, more attention is being placed on consumer behavior. Revised economic models have resulted in an understanding of the need for a circular economy. In this perspective, the consumer is not merely the buyer of the product but also a seller in consumer-         to-consumer (C2C) activities, here referred to as re-commerce. In this qualitative study, researchers conducted in-depth interviews of 32 respondents from two countries who had second-hand product trading experience on Facebook. The study uses thematic content analysis to analyze the         themes of ethical pro-environmental self-identity (PESI) practices in the respondents’ everyday lives. In this study, challenges relating to understanding conditions for fruitful re-commerce are framed in a social practice theory. Focus is placed on ethical pro-environmental self-identity in the           context of selling or buying products in Bangladesh and Sweden. The contributions of this study relate to consumer perspectives on what enables re-commerce for six selected product categories. The study also points to the importance of social media and context-bound differences between         product groups as well as individuals in two national contexts.Details - (link)(SCOPUS Q1)",
      "4.Arman, S.M.; Mark-Herbert, C. Re-Commerce to Ensure Circular Economy from Consumer Perspective.Sustainability2021,13, 10242.",
      "Abstract:Responsible consumption practice is crucial to minimizing waste as part of sustainable development (SDG 12). This can be achieved by extending product life in a cradle-to-cradle system as part of a circular economy. However, are consumers willing to extend product life by reusing materials?       The phenomenon of re-commerce, where consumers sell products to each other (C2C), takes place in physical as well as web-based markets. This project focuses on enabling factors for re-commerce practices on Facebook among consumers in Bangladesh. A review of existing literature               provided grounds for an empirical focus group study of Bangladeshi consumers. Using a social practice theory perspective in a thematic analysis shows that enabling factors in terms of technicalcompetence, context-bound conditions influencingmeaningssuch as socially accepted procedures,       and practical practices relating tomaterialssuch as payment forms and logistics support, all serve as enabling or hindering factors. The study contributes to the understanding of conditions for re-commerce practices as part of a circular economy system where consumers are encouraged to           engage in responsible consumption by extending product life cycles.Details - (link)(SCOPUS Q1)5.Haq, M., and Arman, S., A Bibliometric Analysis of Scopus and Web of Science Documents of Community Economic Development,11thICFC Conference on Financial Criminology, University Technologi Mara, Malaysia.6.Arman, S., 2021. Re-commerce to ensure circularity through social media (Dissertation).Abstract:Responsible consumption (SDG 12) practice is crucial to turn waste into zero and extending the usability of products through reusing from the consumer end helps to less dependent on virgin materials. People exchange second hand products which are fully functioned but not used anymore         which is called re-commerce. Financial gain is not the issue but to utilize the usability of the product is significant in this aspect. This aspect is vital to establish the cradle-to-cradle system of ensuring circular economy philosophy. Re-commerce conducts in both physical and online                         marketplaces. Due to the ongoing Covid 19 pandemic, where physical marketplaces have limited capacity to accommodate clients, the online Customer to Customer (C2C) marketplaces have no such boundary to limit users. Facebook is considered the most popular re-commerce platform in         today’s world due to their large number of users. The study selected Facebook as the unit of analysis to assess the re-commerce practice of Facebook users of Bangladesh to ensure circular economy. For doing the review of existing literatures, the study conducted bibliometric analysis of               published research documents in social media and circular economy which were indexed at Scopus database. After conducting literature review, the study considered Social Practice Theory as the required conceptual framework. The study conveniently selected 26 Bangladeshi individuals who       were familiar with re-commerce practice on Facebook and formed four focus groups based on product categories (electronics, furniture, jewelry and women’s attire) they dealt with. The study conducted focus group interview through Facebook Messenger and Zoom. The study conducted               thematic analysis using NVIVO12 and developed a re-commerce practice on Facebook using the theoretical framework of Social Practice Theory. The study concluded that, re-commerce practice is vital to ensure the circular economy from the consumer end to encourage responsible                       consumption of making the future world sustainable.Details - (link)DOI: 10.13140/RG.2.2.16226.25282/1.7. Haq, M., Arman, S. and Nazera, F., 2021a. Private Enterprise and the Sustainable Community Economic Development in Bangladesh A Case Study on the PRAN-RFL Group.International Journal of Research and Innovation in Social Science, 05(04), pp.49–55.Abstract:Community Economic Development (CED) practice in Bangladesh is vital in ensuring the sustainability of the community and economy of Bangladesh and it contributes to the creation and maintenance of economic, social, ecological, human, political, and cultural capitals of communities in a           sustainable and progressive manner. Existing literature in Bangladesh perspective mostly focuses on NGO contributions. However, local large conglomerates have contributions in this aspect and the study would like to tap on the research gap by conducting an intensive case study on PRAN-          RFL   Group (PRG), one of the largest conglomerates in Bangladesh and South East Asia. The case study provided a theoretical background of the business profile of the PRG. Researchers collected data from the organizations about their CED contributions to different areas of Bangladesh even        in  the  ongoing COVID19 time. PRG’s contributions to those remote areas were found significant and valuable to make the society sustainable and resilient. For this reason, the partnership between the PRG and the community (individual entrepreneur) was remarkable. The study concluded         that PRG’s contribution to the CED practices set examples of their competitors of Bangladesh in various CED practices. The study recommended further quantitative analysis in assessing community farmers and reverse migration in this aspect.Details - (link)8. Haq, M., Arman, S. and Nazera, F., 2021b. Why Bangladeshi Higher Educational Institutions Should Introduce Community Economic Development as a New Field of Study: Some Suggestions. 05, pp.291–299.Abstract:Community Economic Development (CED) is a popular field of study in the top North American universities. But, this field of study is completely absent in Bangladesh, even not a single course has been found in their course curricula based on their websites. Some courses are under development studies but those are insufficient compared to the required courses offered in foreign universities. Interestingly, CED approach is a countrywide approach practiced by NGOs, specialized bank and corporate houses of Bangladesh. CED approach is highly associated with sustainable development by fulfilling numerous goals successfully. The study aims at to develop urgency of the concerned stakeholders of the higher educational institutions of Bangladesh to design, implement and execute program and courses on CED in order to make the country sustainable and in doing so the paper showed CED professions in Bangladesh and in the world, which considered pragmatic in CED course at the university level. The study considered different CED study programs and courses offered by reputed universities of the world including reasons behind introducing the program in their course curriculum and expected benefits derived from the courses. The paper finally suggests ways of implementing it at the university level of Bangladesh. The study makes the concerned stakeholders aware about CED programs and courses for successful development, implementation and execution.Details - (link)9. Haq, M., Arman, S. and Nazera, F., 2021c. How Contract Farming in Poultry Industry Contribute to the Sustainable Community Economic Development of Bangladesh: A Literature Review.Journal of University of Shanghai for Science and Technology, 23.Abstract:In agricultural production, contract farming is a widely recognized strategy all over the world where similar type of farmers from different corners of a country are engaging under a single industry. In poultry industry of Bangladesh, Contract Farming (CF) is quite popular. Since inception in 1994, contract farming in poultry industry is quite common and major industrial players of Bangladesh deploy this strategy for gaining competitive advantage. In the CF model, the contribution of an individual farmer to the gigantic production volume of a large poultry farm can’t be denied and, in this way,CF can play a vital role in the sustainable community economic development. The objective of the study is to assess how Contract Farming can contribute in the sustainable community economic development of Bangladesh in the light ofSustainable Development Goals. The study is literature review in nature and secondary sources of information has been consulted. The study concluded that, contract farming is crucial in poultry industry and its contribution in assuring sustainable community economic development is significant.Details - (link)10.Mashequr, R. and Arman, S., 2018.Role of Human Resources in Building a Sustainable Business: A Study on Ready Made Garments (RMG) Organizations in Bangladesh.  7thBSHRM International HR Conference, Dhaka, Bangladesh.11. Arman, S., 2017. Impact of Sustainable Human Resource Management in Organizational Performance: A Study on Bangladeshi HR Professionals.Proceedings of the 15th Asian Business Research Conference, Dhaka, Bangladesh. ISBN: 978-1-925488-59-312. Arman, S., 2017b.The Work – Family – Study Triangle: How Bangladeshi Business Undergraduates Manage?2nd International Conference on Business and Economics Interdisciplinary Solutions for Business Challenges in a New Global Order, Dhaka University, Dhaka, Bangladesh.13. Arman, S., 2014. Integrated model of Social Media and Customer Relationship Management: A Literature Review.International Journal of Information, Business and Management 2076-9202, 6.14. Arman, S., 2014. Corporate Social Responsibilities (CSR) of Islami Bank Bangladesh Limited (IBBL): A Comparative Study with Banking Industry.Manarat International University Studies.15. Arman, S., 2013a. Shariah Compliance Features of Islamic Financial Institutions and Its Challenges.Oman Chapter of Arabian Journal of Business and Management Review, 3, pp.91–98.Abstract:To comply with the Shariah rules and regulations, Islamic Financial Institutions have formed Shariah Supervisory Board (SSB). The duty of SSB is to monitor and regulate the ongoing activities of Islamic Financial Institutions in accordance with the Islamic laws and jurisdictions. The study has discussed the philosophy of Islamic Finance, Shariah Supervisory Boards and its features and external arrangement of Shariah compliances. The functioning of SSBs raises five main issues which are independence, confidentiality, competence, consistency and disclosure. This study also indicated some missing dimensions in the domain of Shariah compliance features and suggested some possible measurements.Details - (link)16. Arman, S., 2013b. Islamic Interbank Money Market in Bangladesh : A Literature Review.Kuwait Chapter of Arabian Journal of Business and Management Review, 2, pp.13–23.Abstract:Different money market is imperative in efficient and effective operations of Islamic finance operations in Bangladesh and proper implementation of Islamic Shariah. But since inception, Islamic financial institutions operate here without having separate money market. Recently, Bangladesh Bank plan to establish Islamic Interbank Money market (IIMM) for Islamic financial institutions to facilitate Islamic finance at a great pace. On this purpose, they modify the existing \"Islamic Investment Bond Rules -2004\". They want to create a new avenue for trading of the Islamic bond in the near future through amending its rules. Islamic Bond will be transformed into an auctionable instrument among the Islamic banks to be of assistance in managing their liquidity in line with Islamic Shariah. This step is being treated as a pragmatic step because, Islamic finance and banking is growing at a large scale in the economy of Bangladesh and from the speech of specialists in this arena, this financial sector will dominate in the world economy infuture. So in the era of globalization Bangladesh have to keep in line with this trend. Like establishing guidelines for operating Islamic financial activities, this step is being treated as the continuous support of central bank towards the establishment of Islamic finance in the soil of Bangladesh. This paper contains a literature review research is to set up a theoretical framework in regard to establish Islamic Interbank Money Market in Bangladesh.Details - (link)17. Arman, S., 2013. An Analysis on Country Wise Remittance Inclusion in Bangladesh and Its Challenges. Proceedings of the 9th Asian Business Research Conference, Dhaka, Bangladesh. ISBN: 978-1-922069-39-9..18.Arman, S. and Ahmed, T., 2021. A Bibliometric Analysis on Dependency Theory. Journal of Community Positive Practices, 21, pp.98–115. https://doi.org/10.35782/JCPP.2021.4.07. (SCOPUS Q4)Abstract:Dependency theory, established after World War II, is a popular theory among economists to portray the relationship between the underdeveloped and the developed countries that conditions the ability of the underdeveloped countries to develop. Several concepts have been merged into this area from different corners, making it interdisciplinary. As a lucrative area of interest in research, the study would like to assess how the concept of dependency theory has been widely accepted among authors from different corners and schools of thoughts and how their research outputs make a significant notation in this area. The research conducted a bibliometric analysis on dependency theory. 1074 Scopus indexed documents in English were considered. The study covered the two pillars of bibliography analysis: performance analysis and science mapping. The study used several formulas to calculate parameters of performance analysis and availed Vosviewer software to make maps of science-mapping analysis. The study concluded that dependency theory is a significant theory in economics and has significant implications in different research publications. This bibliometric analysis surfaces the significance of this theory which would attract researchers in incorporating more interdisciplinary research."
    ],
    "ongoingResearch": []
  },
  {
    "name": "Md. Ashaduzzaman",
    "title": "Sr. Laboratory Instructor",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "md.ashaduzzaman@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/zMUsYxElAaR3MUbtyRp6.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md.-ashaduzzaman",
    "education": [
      {
        "degree": "B.Sc. in Engineering",
        "institute": "Daffodil International University",
        "year": "2019"
      },
      {
        "degree": "Diploma in Engineering",
        "institute": "Mir Samsul Islam Polytechnic Institute",
        "year": "2012"
      },
      {
        "degree": "SSC",
        "institute": "Munshigonj Academy High School",
        "year": "2008"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Ariful Islam",
    "title": "Laboratory Instructor",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "ariful.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/uw9lnIITLzXx4PvkCMXj.jpg",
    "profileUrl": "https://ius.edu.bd/profile/ariful-islam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Pranta Chandra Das",
    "title": "Teaching Assistant",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "pranta.chandra.das@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/Is1fut7lZcSgOGEF30Vf.jpg",
    "profileUrl": "https://ius.edu.bd/profile/pranta-chandra-das",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abrar Galib",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "abrar.galib@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/7GfPj9qjoc76X6b2bquj.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abrar-galib",
    "education": [
      {
        "degree": "MBA (Accounting and Information Systems)",
        "institute": "Jahangirnagar University",
        "year": "2022"
      },
      {
        "degree": "BBA (Accounting and Information Systems)",
        "institute": "Jahangirnagar University",
        "year": "2021"
      },
      {
        "degree": "HSC",
        "institute": "Govt. M.M. City College, Khulna",
        "year": "2014"
      },
      {
        "degree": "SSC",
        "institute": "Khulna Zilla School",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, DBA",
        "designation": "University of Scholars (IUS)",
        "duration": "April, 2025 - Present"
      },
      {
        "institute": "Lecturer, DBA",
        "designation": "The People's University of Bangladesh",
        "duration": "May,2024 - April, 2025"
      },
      {
        "institute": "Management Trainee Officer",
        "designation": "IFIC Bank PLC.",
        "duration": "November, 2023 - April, 2024"
      },
      {
        "institute": "Territory Officer",
        "designation": "Banglalink Digital Communications Ltd",
        "duration": "April, 2022 - October, 2022"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Aninda Barua",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "aninda.barua@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/B6OYjirOck2wUHQ2Wx91.jpg",
    "profileUrl": "https://ius.edu.bd/profile/aninda-barua",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Samia Sabah",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "samia.sabah@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/7DPHQPZKQ2Yb2aKTb0N4.jpg",
    "profileUrl": "https://ius.edu.bd/profile/samia-sabah",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Robiul Alam Romjan",
    "title": "Teaching Assistant",
    "dept": "cse",
    "deptName": "Department of Computer Science and Engineering",
    "email": "robiul.alam.romjan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Algorithms",
      "Software Engineering",
      "AI & ML"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/FhpSuo6YCxkXFfFCZmCM.jpg",
    "profileUrl": "https://ius.edu.bd/profile/robiul-alam-romjan",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abdul Asad",
    "title": "Research Assistant",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "abdul.asad@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/2UuDEMKKVdb4uF3uCIVF.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abdul-asad",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Sumitra Ghosh",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "sumitra.ghosh@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/eaNHXbCtTKiOnTbHjUIv.png",
    "profileUrl": "https://ius.edu.bd/profile/sumitra-ghosh",
    "education": [
      {
        "degree": "Master of Business Administration in Finance",
        "institute": "Jagannath University",
        "year": "2024-2025"
      },
      {
        "degree": "Bachelor of Business Administration in Finance",
        "institute": "Jagannath University",
        "year": "2019-2022"
      },
      {
        "degree": "Higher Secondary Certificate (H.S.C) in Science",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2018"
      },
      {
        "degree": "Secondary School Certificate (S.S.C) in Science",
        "institute": "Viqarunnisa Noon School & College",
        "year": "2016"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md Farhad Hossain",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "md.farhad.hossain@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/ssasgXUbVETo6iqSDgXR.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md-farhad-hossain",
    "education": [
      {
        "degree": "MBA [Finance]",
        "institute": "University of Dhaka",
        "year": "2024"
      },
      {
        "degree": "BBA [Marketing and International Business]",
        "institute": "North South University",
        "year": "2019"
      },
      {
        "degree": "HSC",
        "institute": "Dhaka College",
        "year": "2005"
      },
      {
        "degree": "SSC",
        "institute": "Motijheel Govt. Boys’ High School",
        "year": "2002"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, DBA",
        "designation": "University of Scholars (IUS)",
        "duration": "April, 2025 – Present"
      },
      {
        "institute": "Head of Business",
        "designation": "Source Volt Ltd.",
        "duration": "May, 2021 - Present"
      },
      {
        "institute": "Deputy Manager, Business Development",
        "designation": "One ICT Ltd.",
        "duration": "June, 2020 - December, 2020"
      },
      {
        "institute": "Head of Country Operations & Sales",
        "designation": "Clearstream PTE Ltd.",
        "duration": "2010-2013"
      },
      {
        "institute": "Director operations",
        "designation": "Splash Communications",
        "duration": "2007–2010"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Abdullah Al Mamun",
    "title": "Research Assistant",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "abdullah.al.mamun@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/YKXcRjRDvhwHOxAYq4FO.jpg",
    "profileUrl": "https://ius.edu.bd/profile/abdullah-al-mamun",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Nasruzzaman Naeem",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "nasruzzaman.naeem@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/jJXOB98HRxlJbXU9ovcf.jpg",
    "profileUrl": "https://ius.edu.bd/profile/nasruzzaman-naeem",
    "education": [
      {
        "degree": "Ph.D.",
        "institute": "Istanbul Ticaret University, Istanbul, Turkey",
        "year": "Ongoing"
      },
      {
        "degree": "Masters in International Finance",
        "institute": "Istanbul Ticaret University, Istanbul, Turkey",
        "year": "2021"
      },
      {
        "degree": "BBA (Major in Finance)",
        "institute": "The University of Agriculture, Peshawar, Pakistan",
        "year": "2018"
      },
      {
        "degree": "H.S.C.",
        "institute": "Badshah Faisal Institute",
        "year": "2012"
      },
      {
        "degree": "S.S.C.",
        "institute": "Badshah Faisal Institute",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, Department of Business Administration",
        "designation": "University of Scholars (IUS)",
        "duration": "June 2025–Ongoing"
      },
      {
        "institute": "Finance & Business Development Manager",
        "designation": "The Asia Group International Consulting Inc., Istanbul, Turkey.",
        "duration": ""
      },
      {
        "institute": "Executive—Finance & Accounts.",
        "designation": "Nit Örme Tekstil San. Ve Tic. Ltd. Şti., Istanbul, Turkey.",
        "duration": "November 2019– September 2020"
      },
      {
        "institute": "Intern",
        "designation": "OIC INTERN (Organization of Islamic Cooperation), Istanbul, Turkey.",
        "duration": "June 2019– September 2019"
      },
      {
        "institute": "Intern",
        "designation": "Standard Chartered Bank (Pakistan) Limited, Peshawar, Pakistan.",
        "duration": "August 2017– September 2017"
      }
    ],
    "publications": [
      "Naeem, N.,Cankaya, S., & Bildik, R. (2022). Does ESG performance affect the financial performance of environmentally sensitive industries? A comparison between emerging and developed markets.Borsa Istanbul Review,22, S128-S140. https://doi.org/10.1016/j.bir.2022.11.014[SCOPUS(Q1), WoS-SSCI, IF=6.3]",
      "Naeem, N.,& Çankaya, S. (2022). The impact of ESG performance over financial performance: A study on global energy and power generation companies.International Journal of Commerce and Finance,8(1), 1-25.",
      "Ahmad, S. M., &Naeem, N.(2020). Adverse economic impact by Rohingya refugees on Bangladesh: Some way forwards.International Journal of Social, Political and Economic Research,7(1), 1-14. https://doi.org/10.46291/IJOSPERvol7iss1pp1-14"
    ],
    "ongoingResearch": []
  },
  {
    "name": "SADIA BORHAN",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "sadia.borhan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/smPKmZnTuftr9svnityu.jpeg",
    "profileUrl": "https://ius.edu.bd/profile/sadia-borhan",
    "education": [
      {
        "degree": "MBA",
        "institute": "Jahangirnagar University",
        "year": "2024"
      },
      {
        "degree": "BBA",
        "institute": "East West University",
        "year": "2020"
      },
      {
        "degree": "HSC",
        "institute": "Motijheel Ideal College",
        "year": "2015"
      },
      {
        "degree": "SSC",
        "institute": "Motijheel Govt. Girls High School",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer",
        "designation": "University of Scholars",
        "duration": "July 2025 - Present"
      },
      {
        "institute": "Officer, HR (BRAC)",
        "designation": "Brac",
        "duration": ""
      },
      {
        "institute": "Intern",
        "designation": "Beximco Pharmaceuticals Limited",
        "duration": ""
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Md Nahid Alam",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "md.nahid.alam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/QeNhNvaUeznGhILiK3Me.jpg",
    "profileUrl": "https://ius.edu.bd/profile/md-nahid-alam",
    "education": [
      {
        "degree": "MBA",
        "institute": "North South University",
        "year": "2023"
      },
      {
        "degree": "BBA",
        "institute": "Bangalore University",
        "year": "2018"
      },
      {
        "degree": "HSC",
        "institute": "Rajuk Uttara Model College",
        "year": "2014"
      },
      {
        "degree": "SSC",
        "institute": "Rajuk Uttara Model College",
        "year": "2012"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, DBA",
        "designation": "University of Scholars",
        "duration": "July, 2025 – Present"
      },
      {
        "institute": "Senior Instructor",
        "designation": "Tutor Academy",
        "duration": "November, 2021 - June, 2025"
      },
      {
        "institute": "Executive, Business Development",
        "designation": "Fast Track Petroleum Ltd.",
        "duration": "March, 2021 – August, 2021"
      },
      {
        "institute": "Management Coordinator",
        "designation": "Keya Group",
        "duration": "September, 2020 – March, 2021"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "ASMA AKTER",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "asma.akter@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/ktiVL9UVBR5bk0qa3m30.jpg",
    "profileUrl": "https://ius.edu.bd/profile/asma-akter",
    "education": [
      {
        "degree": "Master of Business Administration (M.B.A)",
        "institute": "Jagannath University",
        "year": "2023"
      },
      {
        "degree": "Bachelor of Business Administration (B.B.A)",
        "institute": "Jagannath University",
        "year": "2022"
      },
      {
        "degree": "Higher Secondary Certificate (H.S.C)",
        "institute": "Begum Badrunnessa Govt. Girl’s College, Dhaka",
        "year": "2018"
      },
      {
        "degree": "Secondary School Certificate (S.S.C)",
        "institute": "Baghair High School",
        "year": "2016"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer, Business Administration",
        "designation": "University of Scholars",
        "duration": "October,2025 - Till now"
      }
    ],
    "publications": [
      "Job Experience :"
    ],
    "ongoingResearch": []
  },
  {
    "name": "Rahnuma Sultana",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "rahnuma.sultana@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/uTW3a02mqK2Mjqk6UCAG.jpg",
    "profileUrl": "https://ius.edu.bd/profile/rahnuma-sultana",
    "education": [
      {
        "degree": "MBA (Marketing)",
        "institute": "University of Malaya (UM)",
        "year": "2024"
      },
      {
        "degree": "MBA (Marketing)",
        "institute": "North South University (NSU)",
        "year": "2018"
      },
      {
        "degree": "BBA (Major: Finance, Minor: Marketing)",
        "institute": "Independent University, Bangladesh (IUB)",
        "year": "2015"
      },
      {
        "degree": "HSC",
        "institute": "Ispahani Public School & College, Chittagong",
        "year": "2010"
      },
      {
        "degree": "SSC",
        "institute": "B.M.S. Girls High School & College, Chittagong",
        "year": "2008"
      }
    ],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Jakiya Sultana",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "jakiya.sultana@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/rlXMwYKbEFdQDTceVECh.jpg",
    "profileUrl": "https://ius.edu.bd/profile/jakiya-sultana",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "S. M. Riyajul Islam",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "s.m.riyajul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/1TQSniiLloj0dEwo5Kdb.jpg",
    "profileUrl": "https://ius.edu.bd/profile/s.-m.-riyajul-islam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Afsana Ferdous",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "afsana.ferdous@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/XJ3HoUdolUUAFNAzqBRV.jpg",
    "profileUrl": "https://ius.edu.bd/profile/afsana-ferdous",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Taslima Tasnim",
    "title": "Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "taslima.tasnim@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/lP1MY2fXYcR94hQEh7dy.jpg",
    "profileUrl": "https://ius.edu.bd/profile/taslima-tasnim",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Rafid Ishmam",
    "title": "Teaching Assistant",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "rafid.ishmam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/cLtXDc7HFJ8tImFfqlx9.jpg",
    "profileUrl": "https://ius.edu.bd/profile/rafid-ishmam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Afroja Akter Sadia",
    "title": "Teaching Assistant",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "afroja.akter.sadia@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/jI2RSeuJtLwBGwzAbo1Z.jpg",
    "profileUrl": "https://ius.edu.bd/profile/afroja-akter-sadia",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "S.M. Tasmeeh Ahsan",
    "title": "Assistant Professor(On Study Leave)",
    "dept": "eee",
    "deptName": "Department of Electrical and Electronic Engineering",
    "email": "s.m.tasmeeh.ahsan@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Renewable Energy",
      "VLSI Design",
      "Control Systems"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/hPnaasQ3rpMyDNJq0WN6.jpg",
    "profileUrl": "https://ius.edu.bd/profile/s.m.-tasmeeh-ahsan",
    "education": [
      {
        "degree": "M.Sc. in Electronic Communications and Computer Engineering",
        "institute": "University of Nottingham",
        "year": "2017"
      },
      {
        "degree": "B.Sc. in Electrical and Electronic Engineering",
        "institute": "AIUB",
        "year": "2013"
      }
    ],
    "experience": [
      {
        "institute": "Lecturer and Senior Lecturer",
        "designation": "European University of Bangladesh",
        "duration": "2015-2018"
      },
      {
        "institute": "Lecturer",
        "designation": "American International University-Bangladesh (AIUB)",
        "duration": "2018-2019"
      },
      {
        "institute": "Adjunct Faculty",
        "designation": "Presidency University",
        "duration": "2020-2022"
      },
      {
        "institute": "Assistant Professor",
        "designation": "Canadian University of Bangladesh",
        "duration": "2021-2023"
      }
    ],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Sami Azam",
    "title": "Professor , External Contributor",
    "dept": "other",
    "deptName": "",
    "email": "sami.azam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Research",
      "Higher Education"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/hVAVjihZha2D493cnHby.jpg",
    "profileUrl": "https://ius.edu.bd/profile/sami-azam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Engr. Mohammad Imtiaz Uddin",
    "title": "Senior Lecturer",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "mohammad.imtiaz.uddin@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/VgY2auZzdHENz8MFREE5.jpg",
    "profileUrl": "https://ius.edu.bd/profile/engr.-mohammad-imtiaz-uddin",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Dr. Md Rafiqul Islam",
    "title": "Lecturer , External Contributor",
    "dept": "other",
    "deptName": "",
    "email": "md.rafiqul.islam@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Research",
      "Higher Education"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/bsc1g0HbTF0etLZKPK1W.jpg",
    "profileUrl": "https://ius.edu.bd/profile/dr.-md-rafiqul-islam",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Nur Mohammad Fahad",
    "title": "External Contributor",
    "dept": "other",
    "deptName": "",
    "email": "nur.mohammad.fahad@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "M.Sc. / M.Phil, leading university",
    "interests": [
      "Research",
      "Higher Education"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/fas6uGW6Unoup3IDFDik.jpg",
    "profileUrl": "https://ius.edu.bd/profile/nur-mohammad-fahad",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Javed Tariq",
    "title": "Assistant Professor",
    "dept": "bba",
    "deptName": "Department of Business Administration",
    "email": "javed.tariq@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Marketing",
      "Management",
      "Strategic Finance"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/jlTRwkpafMqSJvkcyGqR.jpg",
    "profileUrl": "https://ius.edu.bd/profile/javed-tariq",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  },
  {
    "name": "Jahangir Hossain",
    "title": "Professor , External Contributor",
    "dept": "other",
    "deptName": "",
    "email": "jahangir.hossain@ius.edu.bd",
    "office": "Faculty Block, Banani Campus",
    "phd": "PhD in research field, international institution",
    "interests": [
      "Research",
      "Higher Education"
    ],
    "imgUrl": "https://ius.edu.bd/public/upload/team_members/2OT9TDovAwFqd5uKzqLc.jpg",
    "profileUrl": "https://ius.edu.bd/profile/jahangir-hossain",
    "education": [],
    "experience": [],
    "publications": [],
    "ongoingResearch": []
  }
];
