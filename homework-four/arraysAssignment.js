const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
    ];


students.forEach((studentValue) =>{
    console.log("Students: ", studentValue.name)
    document.getElementsByTagName("p")[0].innerHTML += ` ${studentValue.name}`
   

})


/* The code `var gradeFN = students.every(students => {
    return students.grades.every(grade => grade >= 60);
});` is checking if every student in the `students` array has grades that are greater than or equal
to 60. */
var gradeFN = students.every(function(studentValue){
    console.log(studentValue.grades)
    return studentValue.grades.every(grades => grades >= 60)
})


document.getElementsByTagName("p")[1].innerHTML += `${gradeFN}`

var perfectGradeCheck = students.some(function(studentValue){
    return studentValue.grades.some(grades => grades === 100)
})

document.getElementsByTagName("p")[2].innerHTML += `${perfectGradeCheck}`


/*function averageFn(){
    let studentGradeAvg = students.filter((studentValue) =>{
        let reduceGradeAvg = studentValue.grades.reduce((accum, nextvalue) => accum + nextvalue, 0)
        let average = reduceGradeAvg / 4;
        return average >= 90;
        })
        return studentGradeAvg.map(studentValue.name)
    }

averageFn() 

document.getElementsByTagName("p")[3].innerHTML += `${studentGradeAvg}`*/

let gradeLength = students.reduce((accum, nextValue) =>{
    return accum + nextValue.grades.length
})

document.getElementsByTagName("p")[5].innerHTML += `${gradeLength}`
