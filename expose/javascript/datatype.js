let student = {
    name:'sarah',
    major: 'computer s',
    'Grad Year': '2022',
    greeting: function(){console.log('hellow')},
    'fav teacher':{
        name: 'thoams powell',
        course:'cse 110'
    },
    courseLoad:['cse110','cse134','vis41']
}
student.greeting()
console.log(student["fav teacher"].name)
console.log(student.courseLoad[0])
