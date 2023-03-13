// Input -> student array
// Output -> returns an array with all students attendance> 0.6

const classroom = {
    name: "Web Development",
    id: 0,
    students: [
      {
        name: "Sally",
        attendance: 0.8,
        performance: 0.88,
        gender: "F",
        age: 25
      },
      {
        name: "Kate",
        attendance: 0.7,
        performance: 0.95,
        gender: "F",
        age: 26
      },
      {
        name: "Ben",
        attendance: 0.99,
        performance: 0.78,
        gender: "M",
        age: 30
      },
      {
        name: "Mariah",
        attendance: 1,
        performance: 0.98,
        gender: "F",
        age: 21
      },
      {
        name: "Mike",
        attendance: 0.63,
        performance: 0.76,
        gender: "M",
        age: 24
      },
      {
        name: "Brandon",
        attendance: 0.92,
        performance: 0.93,
        gender: "M",
        age: 29
      },
      {
        name: "Violet",
        attendance: 0.76,
        performance: 0.71,
        gender: "F",
        age: 27
      },
      {
        name: "Ali",
        attendance: 0.68,
        performance: 0.69,
        gender: "M",
        age: 26
      },
      {
        name: "Sarah",
        attendance: 0.85,
        performance: 0.7,
        gender: "F",
        age: 30
      },
      {
        name: "Zack",
        attendance: 0.75,
        performance: 0.85,
        gender: "M",
        age: 24
      }
    ],
    displayStudentData: function(){
        for(let i=0; i<this.students.length; i++){
            console.log("name",this.students[i].name)
            console.log("attendance",this.students[i].attendance)
            console.log("performance",this.students[i].performance)
            console.log("gender",this.students[i].gender)
            console.log("age",this.students[i].age)           
        }
    },
    displayStudentAttendance: function(){
        const highAttendance = []
        for(let i=0; i<this.students.length; i++){
            if(this.students[i].attendance > 0.6){
                // console.log(this.students[i].name)
                highAttendance.push(this.students[i].name)
            }
        }
        return highAttendance
    },
    //input -> parameters name, age, attendance, performance, gender
    //Output ->adds a new object to the students array
    addStudent: function(name, age, attendance, performance, gender){
        const newStudent = {
            name: name,
            age: age,
            attendance: attendance,
            performance: performance,
            gender: gender
        }
        this.students.push(newStudent);
    },
    // removeStudent
    // Input -> index of student we want to remove
    // Output ->removes the student with the index from the array
    removeStudent: function(index){
        classroom.students.splice(index, 1)
    },

    // Input -> student array
    // Output -> many arrays that represent groups of students 
    groupingStudents(){
        for(let i = 0; i< this.students.length; i+=2){
            const newStudentGroup = this.students.slice(i, i+2)
            console.log(newStudentGroup)
        }
    }

    // get an average
    // getPerformanceAverage
}



// classroom.displayStudentData();
// const highAttenders = classroom.displayStudentAttendance()
// console.log(highAttenders)

// classroom.addStudent("Janae", 28, 0.3, 0.9, "F")

// console.log(classroom.students)

// classroom.removeStudent(2)
// console.log(classroom.students)

classroom.groupingStudents()
