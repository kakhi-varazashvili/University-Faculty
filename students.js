class Uni{
    constructor(fname, lname, university, faculty, course, age){
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
var view = document.querySelector(".view")
var age = document.querySelector(".age")
var university = document.querySelector(".university")
var course = document.querySelector(".course")
var faculty = document.querySelector(".faculty")
var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var uni1 = new Uni(fname.value, lname.value, "TSU", "Faculty of Arts", 2, 18,)
var uni2 = new Uni(fname.value, lname.value, "SEU", "Faculty of Classic", 3, 19,)
var uni3 = new Uni(fname.value, lname.value, "TSU", "Faculty of Education", 4, 20,)
var uni4 = new Uni(fname.value, lname.value, "GPI", "Faculty of Commerce", 1, 21)
var uni5 = new Uni(fname.value, lname.value, "TSU", "Faculty of Information Technology", 3, 18)
var uni6 = new Uni(fname.value, lname.value, "TSU", "Faculty of Engineering", 4, 19)
var uni7 = new Uni(fname.value, lname.value, "TSU", "Faculty of Law", 2, 19)
var uni8 = new Uni(fname.value, lname.value, "TSU", "Faculty of Law", 3, 20)
var uni9 = new Uni(fname.value, lname.value, "TSU", "Faculty of Law", 2, 21)


var arr = [uni1, uni2, uni3, uni4, uni5, uni6, uni7, uni8, uni9]
// var arr = []
var uniarr = []
var facultyarr = []
var coursearr = []
var agearr = []
for(var i of arr){
    uniarr.push(i.university)
}
for(var i of arr){
    facultyarr.push(i.faculty)
}
for(var i of arr){
    coursearr.push(i.course)
}
for(var i of arr){
    agearr.push(i.age)
}
    uniarr = [...new Set(uniarr)]
    facultyarr = [...new Set(facultyarr)]
    coursearr = [...new Set(coursearr)]
    agearr = [...new Set(agearr)]
    // console.log(uniarr)

    for(var i of uniarr){
        var uniopt = document.createElement("option")
        uniopt.innerText = i;
        university.appendChild(uniopt)
    }
    for(var i of facultyarr){
        var facultyopt = document.createElement("option")
        facultyopt.innerText = i;
        faculty.appendChild(facultyopt)
    }
    for(var i of coursearr){
        var courseopt = document.createElement("option")
        courseopt.innerText = i;
        course.appendChild(courseopt)
    }
    for(var i of agearr){
        var ageopt = document.createElement("option")
        ageopt.innerText = i;
        age.appendChild(ageopt)
    }

save.addEventListener("click", function(){
    var student = new Uni(fname.value, lname.value, university.value, faculty.value, course.value, age.value)
    arr.push(student)
    console.log(student)
})
university.addEventListener("change",function(){
    faculty.innerHTML = " <option value=''>choose model</option>"
    var x = arr.filter(i=> i.university == university.value)

    x = [... new Set(x.map(i=> i.faculty))]

    for(var i of x){
        var facultyopt = document.createElement('option')
        facultyopt.innerText = i
        faculty.appendChild(facultyopt)
    }
})