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
const allButton = document.getElementById('all');
const allList = document.getElementById('allList');


//helper function to hide all contents
function hideAll() {
    allList.classList.add("content");
    courseList.classList.add("content");
    courseClass.classList.add("content");
}

//filter the course array to show only cse
allButton.addEventListener('click', () => {
    hideAll();

    allList.innerHTML = "";
    allList.classList.remove("content");
    //show each filtered course in the page
    //there could be thousand courses, and the following code states that for eachcourse, take the subject and number and add to a constant created before
    courses.forEach(course => {
        const car = document.createElement('div');


        car.textContent = `${course.subject} ${course.number}`;

        allList.appendChild(car);
        car.classList.add('course-card'); //this line of code is just for styling the new element card. carc.classlist.add(new class)

        if (course.completed) {
            const mark = document.createElement('span');
            mark.textContent = '✔';
            mark.style.color = 'green';
            car.appendChild(mark);
        }

    });

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);


    const creditDv = document.createElement('div');
    creditDv.textContent = `The total number of course listed below is ${totalCredits}`;
    allList.appendChild(creditDv);



});





const cseButton = document.getElementById('cse');
const courseList = document.getElementById('courseList');

//filter the course array to show only cse
cseButton.addEventListener('click', () => {

    hideAll();
    courseList.innerHTML = "";
    courseList.classList.remove("content");
    const cSDe = courses.filter(course => course.subject === "CSE");




    //show each filtered course in the page
    //there could be thousand courses, and the following code states that for eachcourse, take the subject and number and add to a constant created before
    cSDe.forEach(course => {
        const card = document.createElement('div');


        card.textContent = `${course.subject} ${course.number}`;

        courseList.appendChild(card);
        card.classList.add('course-card'); //this line of code is just for styling the new element card. carc.classlist.add(new class)

        if (course.completed) {
            const mark = document.createElement('span');
            mark.textContent = '✔';
            mark.style.color = 'green';
            card.appendChild(mark);
        }

    });
    const totalCredits = cSDe.reduce((sum, course) => sum + course.credits, 0);
    const creditDve = document.createElement('div');
    creditDve.textContent = `The total number of course listed below is ${totalCredits}`;
    courseList.appendChild(creditDve);


});



//store the selected elements that we are going to use
const wddButton = document.getElementById('wdd');
const courselista = document.getElementById('courseClass');

//filter the course array to show only cse
wddButton.addEventListener('click', () => {
    hideAll();

    courselista.innerHTML = "";

    courseClass.classList.remove("content");

    const wdDe = courses.filter(course => course.subject === "WDD");



    let totalCredits = 0; //not const because i want to change later

    //show each filtered course in the page
    //there could be thousand courses, and the following code states that for eachcourse, take the subject and number and add to a constant created before
    wdDe.forEach(course => {
        const carta = document.createElement('div');


        carta.textContent = `${course.subject} ${course.number}`;

        courselista.appendChild(carta);
        carta.classList.add('course-card'); //this line of code is just for styling the new element card. carc.classlist.add(new class)
        totalCredits += course.credits;

        if (course.completed) {
            const mark = document.createElement('span');
            mark.textContent = '✔';
            mark.style.color = 'green';
            carta.appendChild(mark);
        }

    });
    const totalCredit = wdDe.reduce((sum, course) => sum + course.credits, 0);
    const creditDiv = document.createElement('div');
    creditDiv.textContent = `The total number of course listed below is ${totalCredit}`;
    courselista.appendChild(creditDiv);
});


