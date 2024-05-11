bothOptions = [
  "Aerospace Engineering",
  "Aerospace Engineering",
  "Architectural Engineering",
  "Architectural Engineering",
  "Bioengineering",
  "Bioengineering",
  "Chemical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Civil Engineering",
  "Computer Engineering",
  "Computer Engineering",
  "Computer Science",
  "Computer Science",
  "Control and Instrumentation Engineering",
  "Control and Instrumentation Engineering",
  "Electrical Engineering",
  "Electrical Engineering",
  "Industrial and Systems Engineering",
  "Industrial and Systems Engineering",
  "Mechanical Engineering",
  "Mechanical Engineering",
];
summerTraining = [
  "Accounting",
  "Actuarial Science and Financial Mathematics",
  "Chemistry",
  "Electrical Engineering and Physics",
  "Environmental Science and Engineering",
  "Finance",
  "Geology",
  "Geophysics",
  "Integrated Design",
  "Management",
  "Management Information System",
  "Marketing",
  "Materials Science and Engineering",
  "Mathematics",
  "Mining Science and Engineering",
  "Petroleum Engineering",
  "Physics",
  "Smart and Sustainable Cities",
  "Software Engineering",
];

class Course {
  constructor(code, credits, name, desc) {
    this.name = name;
    this.credits = credits;
    this.desc = desc;
    this.code = code;
  }
}

const semesterArray = [];
const allCoursesMap = new Map();
const coursesMap = new Map();

coursesMap.set(
  "ENGL 101",
  new Course(
    "ENGL 101",
    3,
    "Introduction to Academic Discourse",
    "Introduction to academic writing and reading: Writing process, draft writing, peer editing, and error recognition and correction. Writing styles covered: definition, description, exemplification, comparison, causal analysis, and argumentation. Organisational and grammatical elements. Improvement of reading skills; comprehension, skimming, scanning, meaning from context, lexis and acquisition of academic vocabulary"
  )
);
coursesMap.set(
  "IAS 121",
  new Course(
    "IAS 121",
    2,
    "Language Foundation",
    "The course teaches the basic skills of Arabic grammar, discusses the contemporary issues of the Arabic language, and develops the skills that enable the student to speak or write correctly. It aims to strengthen the mental abilities that enable students to think correctly, gain different writing abilities, multiple expression skills, and techniques of speaking and dialogue."
  )
);
coursesMap.set(
  "ICS 104",
  new Course(
    "ICS 104",
    3,
    "	Introduction to Programming in Python and C",
    "Overview of computer hardware and software. Programming in Python with emphasis on basic program constructs: variables, assignments, expressions, decision structures, looping, functions, lists, files and exceptions; Introduction to objects and classes. Programming in C with emphasis on pointers and functions with output parameters. Simple multidisciplinary problem solving in science, engineering and business."
  )
);
coursesMap.set(
  "MATH 101",
  new Course(
    "MATH 101",
    4,
    "Calculus I",
    "Limits and continuity of functions of a single variable. Differentiability. Techniques of differentiation. Implicit differentiation. Local extrema, first and second derivative tests for local extrema. Concavity and inflection points. Curve sketching. Applied extrema problems. The Mean Value Theorem and applications."
  )
);
coursesMap.set(
  "PE 101",
  new Course(
    "PE 101",
    1,
    "Health & Physical Education I",
    "Health: blood pressure, heart rate, cholesterol. Safety: CPR (Cardio Pulmonary Resuscitation) and techniques. Physical education: rules, tactics and practice of specified sports. Topics related to health education represent 20% of the course. Prerequisite: Freshman standing"
  )
);
coursesMap.set(
  "PHYS 101",
  new Course(
    "PHYS 101",
    4,
    "General Physics I",
    "Particle kinematics and dynamics; conservation of energy and linear momentum; rotational kinematics; rigid body dynamics; conservation of angular momentum; simple harmonic motion; gravitation; the statics and dynamics of ﬂuids."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[0] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "ENGL 102",
  new Course(
    "ENGL 102",
    3,
    "Introduction to Argument Writing",
    "Practiced skills needed to write a term report in ENGL 214 on a themed topic; Honed skills through a number of shorter writing exercises meant to emulate all aspects of a full report; Introduction to basic research skills involving the Internet and the University's databases and print collection; Guided practice of APA style of documentation, evaluating sources, summarizing, note-taking, drafting, revising, editing; Emphasis on Academic integrity in report writing. Enhanced reading skills by exposure to a variety of graphical sources such as charts, graphs, diagrams; Tutored presentation skills culminating in an individual PowerPoint presentation based on a focused aspect."
  )
);
coursesMap.set(
  "IAS 111",
  new Course(
    "IAS 111",
    2,
    "Belief and its Consequences",
    "Study the true faith of the good ancestors’ approach (salaf) and its evidence. The Six Pillars of Faith and its effects. The right perception of faith and life in a moderate approach. Answer the suspicions related to faith and protect the student from any extremism."
  )
);
coursesMap.set(
  "ICS 108",
  new Course(
    "ICS 108",
    4,
    "Object-Oriented Programming",
    "Advanced object-oriented programming; Inheritance; Polymorphism; Abstract classes and interfaces; Generic and collection classes; File input and output; Exception handling; GUI and event-driven programming; Recursion; Searching and sorting."
  )
);
coursesMap.set(
  "MATH 102",
  new Course(
    "MATH 102",
    4,
    "Calculus II",
    "Definite and indefinite integrals of functions of a single variable. Fundamental Theorem of Calculus. Techniques of integration. Hyperbolic functions. Applications of the definite integral to area, volume, arc length and surface of revolution. Improper integrals. Sequences and series: convergence tests, integral, comparison, ratio and root tests. Alternating series. Absolute and conditional convergence. Power series. Taylor and Maclaurin series."
  )
);
coursesMap.set(
  "PHYS 102",
  new Course(
    "PHYS 102",
    4,
    "General Physics II",
    "Wave motion and sound; temperature, first and second law of thermodynamics; kinetic theory of gases; Coulomb’s law; the electric field; Gauss’s law; electric potential; capacitors and dielectrics; D.C. circuits; the magnetic field; Ampere’s and Faraday’s laws."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[1] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "ISE 291",
  new Course(
    "ISE 291",
    3,
    "Introduction to Data Science",
    "A hands-on introductory level course on data science techniques and applications. Preliminary statistics, programming, and SQL. Basic data acquisition, cleaning, manipulation and pre-processing. Emphasis on: Data understanding and preparation; Exploratory data analysis and visualization. Implementing and validating linear and penalized regression, basic classification and basic clustering methods. Introduction to big data analysis."
  )
);
coursesMap.set(
  "ICS 202",
  new Course(
    "ICS 202",
    4,
    "Data Structures and Algorithms",
    "Review of object-oriented concepts; Basic algorithms analysis; Fundamental data structures - implementation strategies for stacks, queues and linked lists; Recursion; Implementation strategies for tree and graph algorithms; Greedy Algorithms; Hash tables; Applications of data structures (e.g. data compression and string matching)."
  )
);
coursesMap.set(
  "MATH 201",
  new Course(
    "MATH 201",
    3,
    "Calculus III",
    "Polar coordinates. polar curves. area in polar coordinates. Vectors. lines, planes and surfaces. Cylindrical and spherical coordinates. Functions of two and three variables. limits and continuity. Partial derivatives, directional derivatives. Extrema of functions of two variables. Double integrals, double integrals in polar coordinates. Triple integrals in cylindrical and spherical coordinates"
  )
);
coursesMap.set(
  "CHEM 101",
  new Course(
    "CHEM 101",
    4,
    "Principles of Chemical Science I",
    "Matter, atomic structure and the periodic table, chemical bonding, stoichiometry of pure substances, reaction in aqueous solutions, states of matter (gases, liquids, and solids), mixtures (with emphasis on some physical aspects of solutions), thermochemistry. Laboratory: Qualitative and quantitative aspects of general chemistry."
  )
);
coursesMap.set(
  "SWE 206",
  new Course(
    "SWE 206",
    3,
    "General Physics II",
    "Introduction to software engineering discipline, software process, requirements analysis and design models. Understanding of ethical and professional issues of software engineering discipline"
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[2] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "MATH 208",
  new Course(
    "MATH 208",
    3,
    "Introduction to Differential Equations & Linear Algebra",
    "Introduction to ordinary differential equations and linear algebra; techniques for solving first-order and second-order differential equations; systems of linear equations; matrices and determinants; vector spaces; eigenvalues and eigenvectors; applications in engineering and science."
  )
);
coursesMap.set(
  "COE 233",
  new Course(
    "COE 233",
    3,
    "Digital Logic & Computer Organization",
    "Fundamentals of digital logic design; Boolean algebra and logic gates; combinational and sequential circuits; flip-flops and latches; registers and counters; memory units; introduction to computer organization principles."
  )
);
coursesMap.set(
  "COE 292",
  new Course(
    "COE 292",
    3,
    "Introduction to Artificial Intelligence",
    "Introduction to artificial intelligence concepts and techniques; problem-solving methods; knowledge representation and reasoning; expert systems; search algorithms; machine learning basics; applications of artificial intelligence."
  )
);
coursesMap.set(
  "IAS 212",
  new Course(
    "IAS 212",
    2,
    "Ethics and Governance",
    "Ethical theories and principles; ethical decision-making frameworks; ethical issues in technology and society; governance models and regulations related to information technology and software engineering; social responsibility and professional ethics."
  )
);
coursesMap.set(
  "ICS 253",
  new Course(
    "ICS 253",
    3,
    "Discrete Structures",
    "Fundamental concepts in discrete mathematics; sets, relations, and functions; logic and proofs; mathematical induction and recursion; combinatorics; graphs and trees; discrete probability; applications in computer science and software engineering."
  )
);
coursesMap.set(
  "SWE 216",
  new Course(
    "SWE 216",
    3,
    "Software Requirements Engineering",
    "Principles and techniques of software requirements engineering; requirements elicitation, analysis, specification, and validation; requirement management tools and techniques; use case modeling; requirements traceability; requirements documentation."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[3] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "ICS 321",
  new Course(
    "ICS 321",
    3,
    "Database Systems",
    "Advanced concepts in database systems; relational database design principles; database query languages; transaction management; concurrency control; database recovery; distributed databases; database security; emerging trends in database technologies."
  )
);
coursesMap.set(
  "ICS 343",
  new Course(
    "ICS 343",
    4,
    "Fundamentals of Computer Networks",
    "Fundamental concepts of computer networks; network architecture and protocols; network models and standards; OSI and TCP/IP reference models; local area networks (LANs) and wide area networks (WANs); network devices and technologies; network performance analysis and optimization."
  )
);
coursesMap.set(
  "STAT 319",
  new Course(
    "STAT 319",
    3,
    "Probability and Statistics for Engineers and Scientists",
    "Probability theory; discrete and continuous random variables; probability distributions; statistical inference; hypothesis testing; confidence intervals; regression analysis; analysis of variance; application of statistics in engineering and scientific contexts."
  )
);
coursesMap.set(
  "SWE 316",
  new Course(
    "SWE 316",
    3,
    "Software Design and Construction",
    "Advanced principles and techniques of software design; software architecture and design patterns; object-oriented design principles; design documentation; design metrics; software construction practices; code quality assurance; refactoring techniques."
  )
);
coursesMap.set(
  "SWE 387",
  new Course(
    "SWE 387",
    3,
    "Software Project Management",
    "Advanced topics in software project management; project planning and scheduling techniques; project tracking and control mechanisms; risk management; quality management; software metrics and estimation techniques; project documentation and reporting; team leadership and communication skills."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[4] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "BUS 200",
  new Course(
    "BUS 200",
    3,
    "Business & Entrepreneurship",
    "Introduction to business principles and entrepreneurship concepts; understanding business organizations; basics of business operations; fundamentals of entrepreneurship including idea generation, feasibility analysis, business planning, and financing."
  )
);
coursesMap.set(
  "ENGL 214",
  new Course(
    "ENGL 214",
    3,
    "Academic & Professional Communication",
    "Advanced communication skills for academic and professional contexts; emphasis on writing effectively in various formats such as reports, proposals, and research papers; presentation skills; critical thinking and analysis."
  )
);
coursesMap.set(
  "ICS 344",
  new Course(
    "ICS 344",
    3,
    "Information Security",
    "Principles and practices of information security; threats, vulnerabilities, and countermeasures; access control; authentication and authorization; cryptography; network security; software security; security policies and procedures."
  )
);
coursesMap.set(
  "SWE 326",
  new Course(
    "SWE 326",
    3,
    "Software Testing",
    "Principles and techniques of software testing; testing process and methodologies; test planning, design, and execution; black-box and white-box testing techniques; unit testing, integration testing, system testing, and acceptance testing; automated testing tools."
  )
);
coursesMap.set(
  "SWE 363",
  new Course(
    "SWE 363",
    3,
    "Web Engineering & Development",
    "Principles and techniques of web engineering; web development methodologies and frameworks; client-side and server-side scripting languages; web application architecture; web services; web performance optimization; usability and accessibility considerations."
  )
);
coursesMap.set(
  "CGS 392",
  new Course(
    "CGS 392",
    1,
    "Career Essentials",
    "Preparation for a successful transition from academic studies to professional career; development of essential career skills including resume writing, interviewing techniques, networking strategies, and job search strategies; understanding workplace dynamics and professional ethics."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[5] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "SWE 399",
  new Course(
    "SWE 399",
    1,
    "Summer Training",
    "Summer training program designed to provide students with practical experience in software engineering-related settings; supervised internship or project work in industry or research institutions; application of theoretical knowledge to real-world scenarios; development of professional skills and competencies."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[6] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "SWE 411",
  new Course(
    "SWE 411",
    3,
    "Software Engineering Project I",
    "First part of a two-semester software engineering project; initiation, planning, and execution of a substantial software development project; team-based project work; application of software engineering principles and practices."
  )
);
coursesMap.set(
  "SWE 439",
  new Course(
    "SWE 439",
    3,
    "Software Quality Engineering",
    "Principles and practices of software quality assurance and testing; software quality models and metrics; software quality standards and processes; software inspection and reviews; testing techniques and strategies; test automation; software reliability and maintenance."
  )
);
coursesMap.set(
  "IAS xxx",
  new Course(
    "IAS xxx",
    2,
    "Islamic/Arabic Elective",
    "Elective course focusing on Islamic or Arabic studies; topics may include Islamic culture, history, literature, language, or other related subjects."
  )
);
coursesMap.set(
  "ICS/SWE xxx",
  new Course(
    "ICS/SWE xxx",
    3,
    "Major Elective I",
    "Elective course chosen from a list of approved courses related to computer science or software engineering; topics may vary and cover advanced areas within the field."
  )
);
coursesMap.set(
  "ICS/SWE xxx ",
  new Course(
    "ICS/SWE xxx ",
    3,
    "Major Elective II",
    "Second elective course chosen from a list of approved courses related to computer science or software engineering; topics may vary and cover advanced areas within the field."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[7] = new Map(coursesMap);

coursesMap.clear();

coursesMap.set(
  "ICS 433",
  new Course(
    "ICS 433",
    3,
    "Operating Systems",
    "Advanced concepts in operating systems; process management; memory management; file systems; input/output systems; concurrency and synchronization; distributed and real-time operating systems; case studies."
  )
);
coursesMap.set(
  "SWE 412",
  new Course(
    "SWE 412",
    2,
    "Software Engineering Project II",
    "Second part of a two-semester software engineering project; continuation and completion of the substantial software development project initiated in Software Engineering Project I; team-based project work; application of software engineering principles and practices."
  )
);
coursesMap.set(
  "GS xxx",
  new Course(
    "GS xxx",
    3,
    "GS Elective",
    "General Studies elective course chosen from a list of approved courses; topics may vary and cover interdisciplinary subjects outside the field of software engineering."
  )
);
coursesMap.set(
  "ICS/SWE xxx",
  new Course(
    "ICS/SWE xxx",
    3,
    "Major Elective IV",
    "Fourth elective course chosen from a list of approved courses related to computer science or software engineering; topics may vary and cover advanced areas within the field."
  )
);
coursesMap.set(
  "ICS/SWE xxx ",
  new Course(
    "ICS/SWE xxx ",
    3,
    "Major Elective III",
    "Third elective course chosen from a list of approved courses related to computer science or software engineering; topics may vary and cover advanced areas within the field."
  )
);

coursesMap.forEach((c) => {
  allCoursesMap.set(c.code, c);
});

semesterArray[8] = new Map(coursesMap);

coursesMap.clear();

function populate_courses() {
  updateTrainingOptions();
  let uni_plan_div = document
    .getElementsByClassName("university-plan-div")
    .item(0);
  for (let i = 0; i < semesterArray.length; i++) {
    // for each semester
    let credits = 0;
    let semester_div = document.createElement("div");
    semester_div.className = "university-plan-course-container";
    uni_plan_div.appendChild(semester_div);
    let buttons_div = document.createElement("div");
    semester_div.appendChild(buttons_div);
    semesterArray[i].forEach((c) => {
      let button = document.createElement("button");
      button.draggable = true;
      button.id = c.code.split(" ").join("") + "u";
      button.style.cursor = "grab";
      button.ondragstart = function (e) {
        e.dataTransfer.setData("text", e.target.textContent);
      };
      button.textContent = c.code;
      button.addEventListener("click", (e) => {
        alert(allCoursesMap.get(e.target.textContent).desc);
      });
      buttons_div.appendChild(button);
      credits += c.credits;
    });
    let creditsCount = document.createElement("p");
    creditsCount.textContent = credits;
    semester_div.appendChild(creditsCount);
  }

  let stu_plan_div = document
    .getElementsByClassName("student-created-plan-div")
    .item(0);
  for (let i = 0; i < semesterArray.length; i++) {
    // for each semester
    let semester_div = document.createElement("div");
    semester_div.className = "student-plan-course-container";
    let buttons_div = document.createElement("div");
    semester_div.ondragover = function (e) {
      e.preventDefault();
    };
    semester_div.addEventListener("drop", (e) => {
      let button = document.createElement("button");
      button.draggable = false;
      button.textContent = e.dataTransfer.getData("text");
      button.id = button.textContent.split(" ").join("") + "d";
      button.style.cursor = "pointer";
      button.addEventListener("click", (s) => {
        buttons_div.removeChild(button);
        document.getElementById(
          button.textContent.split(" ").join("") + "u"
        ).draggable = true;
        document.getElementById(
          button.textContent.split(" ").join("") + "u"
        ).style.cursor = "grab";
        document.getElementById(
          button.textContent.split(" ").join("") + "u"
        ).style.opacity = "1";
        button.attributes = null;
        updateCredits();
      });
      buttons_div.appendChild(button);
      document.getElementById(
        button.textContent.split(" ").join("") + "u"
      ).draggable = false;
      document.getElementById(
        button.textContent.split(" ").join("") + "u"
      ).style.cursor = "pointer";
      document.getElementById(
        button.textContent.split(" ").join("") + "u"
      ).style.opacity = "0.8";
      updateCredits();
    });
    stu_plan_div.appendChild(semester_div);
    semester_div.appendChild(buttons_div);
    let creditsCount = document.createElement("p");
    creditsCount.textContent = 0;
    semester_div.appendChild(creditsCount);
  }
}

function updateCredits() {
  let stu_plans = document.getElementsByClassName(
    "student-plan-course-container"
  );
  for (let i = 0; i < stu_plans.length; i++) {
    let credits = 0;
    let div = stu_plans.item(i).firstChild;
    div.childNodes.forEach((c) => {
      let courseCode = c.textContent;
      credits += allCoursesMap.get(courseCode).credits;
    });
    let p = stu_plans.item(i).lastChild;
    p.textContent = credits;
  }
}

function updateTrainingOptions() {
  let major = document.getElementById("select-major");
  if (bothOptions.indexOf(major.value) == -1) {
    document.getElementById("summer").disabled = false;
    document.getElementById("internship").disabled = true;
  } else {
    document.getElementById("summer").disabled = false;
    document.getElementById("internship").disabled = false;
  }
}

async function savePlan() {
  let major = document.getElementById("select-major");
  let summer = true;
  let name = document.getElementById("plan-name");

  let semesters = document.getElementsByClassName(
    "student-plan-course-container"
  );
  let plan = {};
  for (let i = 0; i < semesters.length; i++) {
    let semester = semesters.item(i).getElementsByTagName("div").item(0);
    let courses = [];
    for (let j = 0; j < semester.childNodes.length; j++) {
      courses.push(semester.childNodes.item(j).textContent);
    }
    plan[i] = courses;
  }
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{
    "id": "${JSON.parse(localStorage.getItem("user"))["id"]}",
      "plan":${JSON.stringify(plan)},
      "major": "${major.value}",
      "summer": "${summer}",
      "page": "planBuilder",
      "name": "${name.value}"
    }`,
  };
  try {
    let res = await fetch(`http://localhost:3000/plan`, options);
    if (res.ok) {
      location.href = "/profile";
      // redirect to profile page.
    } else {
      alert("Something went wrong");
      location.reload();
    }
  } catch (e) {
    console.log(e);
  }
}
