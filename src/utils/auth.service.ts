import { Injectable } from "@angular/core";

import { Config } from '../config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public static login = async (): Promise<string> => {
        const prefix = 'ApiService.login ';
        console.log(prefix + 'invoked.')
        const url = Config.API_URL + 'login';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                accessKeyID: Config.ACCESS_KEY_ID,
                secretAccessKey: Config.SECRET_ACCESS_KEY
            })
        };

        return fetch(url, options)
            .then(response => response.json())
            .then(bean => {
                console.log(prefix + 'POST /login succesful.');
                console.log(prefix + 'token =', bean.token);
                sessionStorage.token = bean.token;
                return bean.token;
            })
            .catch(err => {
                console.log(prefix + 'POST /login failed.');
                console.log(prefix + 'error =', err);
            })
    }

    public static getAccessToken = async (): Promise<string> => {
        const prefix = 'ApiService.getAccessToken ';
        console.log(prefix + 'invoked.')
        if (!('token' in sessionStorage)) {
            console.log(prefix + 'token not in sessionStorage.')
            return await AuthService.login();
        } else {
            console.log(prefix + 'token in sessionStorage!')
            return sessionStorage.token;
        }
    }
}