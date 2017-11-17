

const TASK_URL = "http://localhost:3001/todo"

const apiHeader = {
    "Content-Type" : "application/json"
}

export const saveTask = (task) => {
    return fetch(TASK_URL, {
        method : 'POST',
        headers : {
            ...apiHeader
        },
        body : JSON.stringify({
            task,
            status : "todo"
        })
    })
    .then(result => result.json());
}

export const getAllTasks = () => {
    return fetch(TASK_URL, {
        method : "GET",
        headers : {
            ...apiHeader
        }
    })
    .then(result => result.json());
}