function returnCommonElement() {    
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    let studentCourses = student1Courses.filter (value => student2Courses.includes(value));
    return studentCourses;    
}

let result = returnCommonElement();
console.log(result);
