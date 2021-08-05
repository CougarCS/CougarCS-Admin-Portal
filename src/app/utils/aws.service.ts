import { Injectable } from "@angular/core";

const BASE_URL = "https://pxgy8jxap6.execute-api.us-east-1.amazonaws.com/dev/"
const ACCESS_KEY_ID = "NhB37OR,/wif3H]";
const SECRET_ACCESS_KEY = "i22KML1VaK4faoOuipNdCceZkSFip3Uu";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public static login = async (): Promise<string> => {
        const prefix = 'ApiService.login ';
        console.log(prefix + 'invoked.')
        const url = BASE_URL + 'login';
        const options = {
            method: 'POST',
            body: JSON.stringify({
                accessKeyID: ACCESS_KEY_ID,
                secretAccessKey: SECRET_ACCESS_KEY
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
            return await ApiService.login();
        } else {
            return sessionStorage.token;
        }
    }
}