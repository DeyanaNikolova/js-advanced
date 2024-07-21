function coursePlanner() {
    const url = 'http://localhost:3030/jsonstore/tasks';
    const listElement = document.getElementById('list');

    const addCourseBtn = document.getElementById('add-course');
    addCourseBtn.addEventListener('click', addCourse);

    const editCourseBtn = document.getElementById('edit-course');
   
    const loadBtn = document.getElementById('load-course');
    loadBtn.addEventListener('click', loadCourses);


    async function loadCourses() {
        const courses = await request(url);
        const values = Object.values(courses);

        for (let value of values) {
            const divContainer = document.createElement('div');
            divContainer.classList = 'container';
            divContainer.id = value._id;

            const h2 = document.createElement('h2');
            h2.textContent = value.title;

            const h3Teacher = document.createElement('h3');
            h3Teacher.textContent = value.teacher;

            const h3Type = document.createElement('h3');
            h3Type.textContent = value.type;

            const h4 = document.createElement('h4');
            h4.textContent = value.description;

            const editBtn = document.createElement('button');
            editBtn.classList = 'edit-btn';
            editBtn.textContent = 'Edit Course';
            editBtn.addEventListener('click', editCourse)


            const finishBtn = document.createElement('button');
            finishBtn.classList = 'finish-btn';
            finishBtn.textContent = 'Finish Course';
            finishBtn.addEventListener('click', removeCourse)

            divContainer.appendChild(h2);
            divContainer.appendChild(h3Teacher);
            divContainer.appendChild(h3Type);
            divContainer.appendChild(h4);
            divContainer.appendChild(editBtn);
            divContainer.appendChild(finishBtn);

            listElement.appendChild(divContainer);
        }
    }

    const titleInput = document.getElementById('course-name');
    const typeInput = document.getElementById('course-type');
    const desctriptionInput = document.getElementById('description');
    const teacherInput = document.getElementById('teacher-name');

    async function addCourse() {

        const data = {
            title: titleInput.value,
            type: typeInput.value,
            description: desctriptionInput.value,
            teacher: teacherInput.value
        }
        await request(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });

        titleInput.value = '';
        typeInput.value = '';
        desctriptionInput.value = '';
        teacherInput.value = '';

        loadCourses();
    }

    async function editCourse(e) {
        editCourseBtn.addEventListener('click', editedCourseSubmit);

        editCourseBtn.disabled = false;
        addCourseBtn.disabled = true;

        const id = e.target.parentElement.id;
        const course = await request(`${url}/${id}`);

        e.target.parentElement.remove();

        titleInput.value = course.title;
        typeInput.value = course.type;
        desctriptionInput.value = course.description;
        teacherInput.value = course.teacher;

        async function editedCourseSubmit(e) {

            const data = {
                title: titleInput.value,
                type: typeInput.value,
                description: desctriptionInput.value,
                teacher: teacherInput.value
            }
    
            await request(`${url}/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
    
            editCourseBtn.disabled = true;
            addCourseBtn.disabled = false;
            loadCourses();
        }

    }



    async function removeCourse(e) {
        const id = e.target.parentElement.id;

        e.target.parentElement.remove();

        await request(`${url}/${id}`, {
            method: 'DELETE',    
        });
        loadCourses();
    }

    async function request(url, options) {
        const response = await fetch(url, options);
        if (response.ok != true) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        const data = await response.json();
        return data;
    }

}

coursePlanner()