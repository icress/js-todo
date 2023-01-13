window.localStorage.getItem('tasks')

window.addEventListener('load', () => {
    const form = document.querySelector('.new-task-form');
    const input = document.querySelector('.new-task-input');
    var task_list = document.querySelector('.tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var task = input.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        input.value = ''
        
        task_content_el.appendChild(task_input_el);

        const task_actions = document.createElement('div');

        const edit_task = document.createElement('button');
        edit_task.classList.add('edit');
        edit_task.innerText = 'Edit';

        const delete_task = document.createElement('button');
        delete_task.classList.add('delete');
        delete_task.innerText = 'Delete';

        task_actions.appendChild(edit_task);
        task_actions.appendChild(delete_task);

        task_content_el.appendChild(task_actions);

        task_list.appendChild(task_el);

        edit_task.addEventListener('click', () => {
            if (edit_task.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                edit_task.innerText = 'Save';
            }
            else {
                task_input_el.setAttribute('readonly', 'readonly');
                edit_task.innerText = 'Edit';
            }
            
        });
        delete_task.addEventListener('click', () => {
            task_list.removeChild(task_el);
        });
    })
})
