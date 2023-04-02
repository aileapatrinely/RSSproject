import axios from 'axios';

export default class AuthorizationApi {
    static prefix = 'auth';
    //Register new user
    static async postRegistration(username, email, password) {
        const response = await axios.post(`${this.prefix}/register`, {
            username,
            email,
            password,
        });
        return response.data;
    }
    //Login to the application
    static async postLogin(username, password) {
        const response = await axios.post(`${this.prefix}/login`, {
            username,
            password,
        });
        return response.data;
    }
}