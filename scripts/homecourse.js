//First we have to get the current year from the system andstore in a variable
const currentYear = new Date().getFullYear();
//insert the variable (with the date into the html) into the span id
document.getElementById('currentyear').textContent = currentYear;


//this property in JavaScript gets the date when the doc was last modified;
//and we insert into a constant
const lastModified = document.lastModified;

document.getElementById('lastModified').textContent = lastModified;




















//This array contains the course information for the required courses that are in the first certificate called Web and Computer Programming of the Software Development degree.
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//const wdd = courses.filter(course => course.subject === "WDD");
//const wddDiv = document.getElementById('wdd');

//const wdde = courses.filter(course => course.subject === "CSE");
//const wddDive = document.getElementById('cse');

//store the selected elements that we are going to use
const cseButton = document.getElementById('cse');
const courseList = document.getElementById('courselist');

//filter the course array to show only cse
cseButton.addEventListener('click', () => {
    const cSDe = courses.filter(course => course.subject === "CSE");
    console.log(cSDe);

    courseList.innerHTML = "";

    //show each filtered course in the page
    cSDe.forEach(course => {
        const div = document.createElement('div');
        const dive = document.createElement('dive');
        div.textContent = course.subject;
        dive.textContent = course.number;

        courseList.appendChild(div);
        courseList.appendChild(dive);
    });

});



//store the selected elements that we are going to use
const wddButton = document.getElementById('wdd');
const coursecla = document.getElementById('courseclass');

//filter the course array to show only cse
wddButton.addEventListener('click', () => {

    courseList.classList.toggle('hidden');
    if (courseList.classList.contains('hidden')) return;




    const wdDe = courses.filter(course => course.subject === "WDD");
    console.log(wdDe);

    coursecla.innerHTML = "";

    //show each filtered course in the page
    wdDe.forEach(course => {
        const div = document.createElement('div');
        const dive = document.createElement('dive');
        div.textContent = course.subject;
        dive.textContent = course.number;

        courseList.appendChild(div);
        courseList.appendChild(dive);
    });

});