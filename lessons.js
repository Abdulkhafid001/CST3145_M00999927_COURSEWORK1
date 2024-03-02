// all courses must be stored as an array of JSON objects to be passed to the VUE app
const lessons = [
    {
        "id": 1,
        "title": "Introduction to JavaScript",
        "instructor": "John Doe",
        "duration": "2 hours",
        "level": "Beginner",
        "subject": "Programming",
        "location": "Online",
        "price": 0,  // Assuming 0 for free, you can adjust as needed
        "spaces": 50  // Total available spaces for the lesson
    },
    {
        "id": 2,
        "title": "Working with Arrays and Objects",
        "instructor": "Jane Smith",
        "duration": "1.5 hours",
        "level": "Intermediate",
        "subject": "Programming",
        "location": "Online",
        "price": 20,
        "spaces": 30
    },
    {
        "id": 3,
        "title": "Asynchronous Programming with Promises",
        "instructor": "Mike Johnson",
        "duration": "2.5 hours",
        "level": "Intermediate",
        "subject": "Programming",
        "location": "In-Person",
        "price": 30,
        "spaces": 20
    },
    {
        "id": 4,
        "title": "React Basics",
        "instructor": "Sara Brown",
        "duration": "3 hours",
        "level": "Intermediate",
        "subject": "Web Development",
        "location": "Online",
        "price": 25,
        "spaces": 40
    },
    {
        "id": 5,
        "title": "Node.js Fundamentals",
        "instructor": "Chris Anderson",
        "duration": "2 hours",
        "level": "Intermediate",
        "subject": "Web Development",
        "location": "In-Person",
        "price": 30,
        "spaces": 15
    },
    {
        "id": 6,
        "title": "RESTful API Design",
        "instructor": "Alex Turner",
        "duration": "2.5 hours",
        "level": "Intermediate",
        "subject": "Web Development",
        "location": "Online",
        "price": 20,
        "spaces": 25
    },
    {
        "id": 7,
        "title": "Databases and SQL",
        "instructor": "Emily White",
        "duration": "2 hours",
        "level": "Intermediate",
        "subject": "Database",
        "location": "In-Person",
        "price": 25,
        "spaces": 20
    },
    {
        "id": 8,
        "title": "Advanced JavaScript Concepts",
        "instructor": "Daniel Rogers",
        "duration": "3 hours",
        "level": "Advanced",
        "subject": "Programming",
        "location": "Online",
        "price": 35,
        "spaces": 15
    },
    {
        "id": 9,
        "title": "Web Development Best Practices",
        "instructor": "Olivia Taylor",
        "duration": "2.5 hours",
        "level": "Intermediate",
        "subject": "Web Development",
        "location": "In-Person",
        "price": 30,
        "spaces": 25
    },
    {
        "id": 10,
        "title": "Introduction to Frontend Frameworks",
        "instructor": "Liam Davis",
        "duration": "2 hours",
        "level": "Intermediate",
        "subject": "Web Development",
        "location": "Online",
        "price": 20,
        "spaces": 30
    },
];

// module.exports = lessons;
