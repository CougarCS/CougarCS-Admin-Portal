import { Injectable } from "@angular/core";

import { ContactsBean } from './contact.data';
import { AuthService } from './auth.service';

import { Config } from '../config';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public static getContact = async (psid: string, email: string): Promise<ContactsBean> => {
        const prefix = 'ContactService.getContact ';
        console.log(prefix + ' invoked.');

        const token = await AuthService.getAccessToken();

        const url = Config.API_URL + 'contact' + '?psid=' + psid + '&email=' + email;
        const options = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        };

        return fetch(url, options)
            .then(response => response.json())
            .then(bean => {
                console.log(prefix + 'GET /contact successful.');
                console.log(prefix + 'response =', bean);
                return bean;
            })
            .catch(err => {
                console.log(prefix + 'GET /contact failed.');
                console.log(prefix + 'Error =', err);
                throw err;
            });
    }

    public static getContacts = async (): Promise<ContactsBean> => {
        const prefix = 'ContactService.getContacts ';
        console.log(prefix + ' invoked.');

        const token = await AuthService.getAccessToken();

        const url = Config.API_URL + 'contacts';
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        return fetch(url, options)
            .then(response => response.json())
            .then(bean => {
                console.log(prefix + 'GET /contacts successful.');
                console.log(prefix + 'response =', bean);
                return bean;
            })
            .catch(err => {
                console.log(prefix + 'GET /contacts failed.');
                console.log(prefix + 'Error =', err);
                throw err;
            });
    }
}