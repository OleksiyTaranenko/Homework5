let student1Courses = ['Math', 'English', 'Programming'];

let student2Courses = ['Geography', 'Spanish', 'Programming'];

function uniteArrays() {    
    let student3Courses = student1Courses.concat(student2Courses);

    console.log(student3Courses);    

    let studentCourses = student3Courses.join('');
    console.log(studentCourses);
    return studentCourses;
}

uniteArrays()