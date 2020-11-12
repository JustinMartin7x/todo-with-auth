import request from 'superagent'
const URL = 'https://todo-list-justin.herokuapp.com'




export function fetchTodos() {
    const TOKEN = localStorage.getItem('TOKEN');

    try {
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', TOKEN)
    } catch (e) {
        throw {
            error: e.message
        }
    }
}

export function createTodo(item) {

    const TOKEN = localStorage.getItem('TOKEN');

    try {
        return request
            .post(`${URL}/api/todos`, item)
            .set('Authorization', TOKEN)
    } catch (e) {
        throw {
            error: e.message
        }
    }
}
export async function createUser(user) {
    try {
        const response = await request
            .post(`${URL}/auth/signup`)
            .send(user)
        console.log(response)
        return response
    } catch (e) {
        throw {
            error: e.message
        }
    }

}
export async function signInUser(info) {
    try {
        const response = await request
            .post(`${URL}/auth/signin`)
            .send(info)
        return response
    } catch (e) {
        throw {
            error: e.message
        }
    }
}
