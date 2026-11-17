/**
 * DriveXpert Academy - Lesson Scheduling Logic with Local Storage
 */


let lessonData = JSON.parse(localStorage.getItem('driveXpertLessons')) || [];


function updateInstructorLists() {
    const theorySelect = document.getElementById('tInst');
    const practicalSelect = document.getElementById('pInst');

    const theoryInstructors = ["Nimal Perera", "Mr. Dinesh Kumara"];
    const practicalInstructors = ["Kasun Jayawardena", "Amal De Silva", "Sunil Perera", "Deepani Silva", "Rohan Gunawardena"];

    if (theorySelect) {
        theorySelect.innerHTML = theoryInstructors.map(ins => `<option>${ins}</option>`).join('');
    }
    if (practicalSelect) {
        practicalSelect.innerHTML = practicalInstructors.map(ins => `<option>${ins}</option>`).join('');
    }
}


function deleteLesson(index) {
    if(confirm("Are you sure you want to delete this record?")) {
        lessonData.splice(index, 1); // Array එකෙන් දත්ත ඉවත් කිරීම
        saveAndRender(); // Save කර නැවත පෙන්වීම
    }
}


function saveAndRender() {
    localStorage.setItem('driveXpertLessons', JSON.stringify(lessonData));
    renderLessonTable();
}


function renderLessonTable() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    lessonData.forEach((item, index) => {
        const initials = item.name.split(' ').map(n => n[0]).join('').toUpperCase();

        const row = `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 38px; height: 38px; border-radius: 50%; background: #475569; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; color: white;">
                            ${initials}
                        </div>
                        <b style="color: white;">${item.name}</b>
                    </div>
                </td>
                <td style="color: #94a3b8;">${item.instructor}</td>
                <td style="color: white;">${item.time}</td> <!-- Date & Time එකම පේළියක -->
                <td style="color: #94a3b8;">${item.type}</td>
                <td>
                    <span style="padding: 6px 14px; border-radius: 50px; font-size: 0.75rem; font-weight: bold; background: rgba(34,197,94,0.1); color: #22c55e;">
                        Confirmed
                    </span>
                </td>
                <td>
                    <button onclick="deleteLesson(${index})" style="background: none; border: 1px solid #ef4444; color: #ef4444; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.7rem; transition: 0.3s;">
                        Cancel
                    </button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// 6. Form Submission Events
document.getElementById('theoryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    lessonData.push({
        name: document.getElementById('tName').value,
        instructor: document.getElementById('tInst').value,
        time: document.getElementById('tTime').value.replace('T', ' '),
        type: 'Theory'
    });
    saveAndRender();
    this.reset();
});

document.getElementById('practicalForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    lessonData.push({
        name: document.getElementById('pName').value,
        instructor: document.getElementById('pInst').value,
        time: document.getElementById('pTime').value.replace('T', ' '),
        type: 'Practical'
    });
    saveAndRender();
    this.reset();
});


document.addEventListener('DOMContentLoaded', () => {

    const headerTitle = document.querySelector('.table-section h3');
    if(headerTitle) headerTitle.innerHTML = '📅 Lesson Schedule';

    updateInstructorLists();
    renderLessonTable();
});