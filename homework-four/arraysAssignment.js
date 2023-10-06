const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
    ];


/* using the `forEach` method to iterate over each element in the `students` array. */
students.forEach((studentValue) =>{
    console.log("Students: ", studentValue.name)
    document.getElementsByTagName("p")[0].innerHTML += ` ${studentValue.name}`

})


/* is checking if every student in the `students` array has grades that are greater than or equal
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

let averageFilter = students.filter((studentValue) =>{
        let reduceGradeAvg = studentValue.grades.reduce((accum, nextvalue)=>{
        return accum + nextvalue;
        }, 0)
        let average = reduceGradeAvg / 4;
        if(average >=90){
            document.getElementsByTagName("p")[3].innerHTML += ` ${studentValue.name}`
        }
    })

    const studentSummaries = students.map((studentValue) =>{
        let studentSum = studentValue.grades.reduce((accum, nextValue) =>{
            return accum + nextValue;
        },0)
        let average = studentSum / 4;
        document.getElementById("studentAvgs").innerHTML += `<br>  Name: ${studentValue.name}, Average Grade: ${average}`

    })
  

let gradeLength = students.reduce((accum, nextValue) =>{
    return accum + nextValue.grades.length
}, 0)

document.getElementsByTagName("p")[5].innerHTML += ` ${gradeLength}`
