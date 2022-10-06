class Student{
    constructor(fname, lname, age, university, course, faculty){
        this.fname = fname
        this.lname = lname
        this.age = age
        this.university = university
        this.course = course
        this.faculty = faculty
        this.score1 = parseInt(Math.random()*101);
        this.score2 = parseInt(Math.random()*101);
        this.score3 = parseInt(Math.random()*101);
        this.average = ((this.score1+this.score2+this.score3)/3).toFixed(2)
    }
}
var save = document.querySelector(".save")
var age = document.querySelector(".age")
var university = document.querySelector(".university")
var course = document.querySelector(".course")
var faculty = document.querySelector(".faculty")
var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var arr = []

save.addEventListener("click", function(){
    var student = new Student(fname.value,lname.value, age.value, 
        university.value, course.value, faculty.value )

    arr.push(student)
    console.log(arr)
})





// var student1 = new Student("giorgi", "maisuradze", 19, "tsu", 2, )
// var student2 = new Student("ana", "bakradze", 19, "tsu", 2, )
// var student3 = new Student("dato", "kvaratskhelia", 18, "tsu", 1, )
// var student4 = new Student("mariami", "shubladze", 20, "tsu", 3, )
// var student5 = new Student("levani", "pachulia", 21, "tsu", 4, )
// var student6 = new Student("nino", "davitashvili", 19, "tsu", 2, )
// var student7 = new Student("tamari", "kiknadze", 20, "tsu", 3, )

// var arr = [student1, student2, student3, student4, student5, student6, student7]