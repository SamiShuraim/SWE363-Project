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

coursesMap.set("ENGL 101", new Course("ENGL 101", 3, "Introduction to Academic Discourse", "Introduction to academic writing and reading: Writing process, draft writing, peer editing, and error recognition and correction. Writing styles covered: definition, description, exemplification, comparison, causal analysis, and argumentation. Organisational and grammatical elements. Improvement of reading skills; comprehension, skimming, scanning, meaning from context, lexis and acquisition of academic vocabulary"));
coursesMap.set("IAS 121", new Course("IAS 121", 2, "Language Foundation", "The course teaches the basic skills of Arabic grammar, discusses the contemporary issues of the Arabic language, and develops the skills that enable the student to speak or write correctly. It aims to strengthen the mental abilities that enable students to think correctly, gain different writing abilities, multiple expression skills, and techniques of speaking and dialogue."));
coursesMap.set("ICS 104", new Course("ICS 104", 3, "	Introduction to Programming in Python and C", "Overview of computer hardware and software. Programming in Python with emphasis on basic program constructs: variables, assignments, expressions, decision structures, looping, functions, lists, files and exceptions; Introduction to objects and classes. Programming in C with emphasis on pointers and functions with output parameters. Simple multidisciplinary problem solving in science, engineering and business."));
coursesMap.set("MATH 101", new Course("MATH 101", 4, "Calculus I", "Limits and continuity of functions of a single variable. Differentiability. Techniques of differentiation. Implicit differentiation. Local extrema, first and second derivative tests for local extrema. Concavity and inflection points. Curve sketching. Applied extrema problems. The Mean Value Theorem and applications."));
coursesMap.set("PE 101", new Course("PE 101", 1, "Health & Physical Education I", "Health: blood pressure, heart rate, cholesterol. Safety: CPR (Cardio Pulmonary Resuscitation) and techniques. Physical education: rules, tactics and practice of specified sports. Topics related to health education represent 20% of the course. Prerequisite: Freshman standing"));
coursesMap.set("PHYS 101", new Course("PHYS 101", 4, "General Physics I", "Particle kinematics and dynamics; conservation of energy and linear momentum; rotational kinematics; rigid body dynamics; conservation of angular momentum; simple harmonic motion; gravitation; the statics and dynamics of ﬂuids."));

coursesMap.forEach((c) => {
    allCoursesMap.set(c.code, c);
})

semesterArray[0] = new Map(coursesMap);

coursesMap.clear()

coursesMap.set("ENGL 102", new Course("ENGL 102", 3, "Introduction to Argument Writing", "Practiced skills needed to write a term report in ENGL 214 on a themed topic; Honed skills through a number of shorter writing exercises meant to emulate all aspects of a full report; Introduction to basic research skills involving the Internet and the University's databases and print collection; Guided practice of APA style of documentation, evaluating sources, summarizing, note-taking, drafting, revising, editing; Emphasis on Academic integrity in report writing. Enhanced reading skills by exposure to a variety of graphical sources such as charts, graphs, diagrams; Tutored presentation skills culminating in an individual PowerPoint presentation based on a focused aspect."))
coursesMap.set("IAS 111", new Course("IAS 111", 2, "Belief and its Consequences", "Study the true faith of the good ancestors’ approach (salaf) and its evidence. The Six Pillars of Faith and its effects. The right perception of faith and life in a moderate approach. Answer the suspicions related to faith and protect the student from any extremism."))
coursesMap.set("ICS 108", new Course("ICS 108", 4, "Object-Oriented Programming", "Advanced object-oriented programming; Inheritance; Polymorphism; Abstract classes and interfaces; Generic and collection classes; File input and output; Exception handling; GUI and event-driven programming; Recursion; Searching and sorting."))
coursesMap.set("MATH 102", new Course("MATH 102", 4, "Calculus II", "Definite and indefinite integrals of functions of a single variable. Fundamental Theorem of Calculus. Techniques of integration. Hyperbolic functions. Applications of the definite integral to area, volume, arc length and surface of revolution. Improper integrals. Sequences and series: convergence tests, integral, comparison, ratio and root tests. Alternating series. Absolute and conditional convergence. Power series. Taylor and Maclaurin series."))
coursesMap.set("PHYS 102", new Course("PHYS 102", 4, "General Physics II", "Wave motion and sound; temperature, first and second law of thermodynamics; kinetic theory of gases; Coulomb’s law; the electric field; Gauss’s law; electric potential; capacitors and dielectrics; D.C. circuits; the magnetic field; Ampere’s and Faraday’s laws."))

coursesMap.forEach((c) => {
    allCoursesMap.set(c.code, c);
})

semesterArray[1] = new Map(coursesMap);

function populate_courses() {
    let uni_plan_div = document.getElementsByClassName("university-plan-div").item(0);
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
            button.textContent = c.code;
            button.addEventListener("click", (e) => {
                console.log(allCoursesMap)
                alert(allCoursesMap.get(e.target.textContent).desc);
            })
            buttons_div.appendChild(button);
            credits += c.credits;
        })
        let creditsCount = document.createElement("p");
        creditsCount.textContent = credits;
        semester_div.appendChild(creditsCount);
    }

    let stu_plan_div = document.getElementsByClassName("student-created-plan-div").item(0);
    for (let i = 0; i < semesterArray.length; i++) {
        // for each semester
        let semester_div = document.createElement("div");
        semester_div.className = "student-plan-course-container";
        stu_plan_div.appendChild(semester_div);
        let buttons_div = document.createElement("div");
        semester_div.appendChild(buttons_div);
        let creditsCount = document.createElement("p");
        creditsCount.textContent = 0;
        semester_div.appendChild(creditsCount);
    }
}