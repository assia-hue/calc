document.addEventListener('DOMContentLoaded', () => {

    const addCourseBtn = document.getElementById('add-course');
    const calculateBtn = document.getElementById('calculate');
    const coursesDiv = document.getElementById('courses');
    const resultDiv = document.getElementById('result');

    // Add new course input fields
    addCourseBtn.addEventListener('click', () => {
        const courseHTML = `
            <div class="course">
                <input type="text" placeholder="Course Name" class="course-name">
                <input type="number" placeholder="Marks (0-100)" class="course-marks">
            </div>
        `;
        coursesDiv.insertAdjacentHTML('beforeend', courseHTML);
    });

    // Calculate GPA
    calculateBtn.addEventListener('click', () => {
        const marksInputs = document.querySelectorAll('.course-marks');
        let totalPoints = 0;
        let count = 0;

        marksInputs.forEach(input => {
            const marks = parseFloat(input.value);
            if (!isNaN(marks) && marks >= 0 && marks <= 100) {
                let point = 0;
                if (marks >= 70) point = 4.0;
                else if (marks >= 60) point = 3.0;
                else if (marks >= 50) point = 2.0;
                else if (marks >= 40) point = 1.0;
                else point = 0;
                totalPoints += point;
                count++;
            }
        });

        if (count === 0) {
            resultDiv.textContent = "Please enter valid marks!";
            return;
        }

        const gpa = (totalPoints / count).toFixed(2);

        let classification = '';
        if (gpa >= 3.5) classification = 'First Class';
        else if (gpa >= 3.0) classification = 'Second Class Upper';
        else if (gpa >= 2.0) classification = 'Second Class Lower';
        else if (gpa >= 1.0) classification = 'Pass';
        else classification = 'Fail';

        resultDiv.textContent = `GPA: ${gpa} — ${classification}`;
    });

});
s