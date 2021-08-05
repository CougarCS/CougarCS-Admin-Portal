import { ContactService } from './contact.service';
import { Contact, ContactsData } from './contact.data';

export class ContactManager {
    // public static getContact = async (psid: string, email: string): Promise<Contact> => {
    //     const prefix = 'ContactManager.getContact ';
    //     try {
    //         const result = await ContactService.getContact(psid, email);
    //         return new Contact(result);
    //     }

    //     catch (err) {
    //         console.log(prefix + 'failed');
    //         console.log(prefix + 'Error =', err);
    //         throw err;
    //     }
    // };

    public static getContacts = async (): Promise<ContactsData> => {
        const prefix = 'ContactManager.getContacts ';
        try {
            const results = await ContactService.getContacts();
            let formattedContacts: Contact[] = [];
            results.contacts.forEach(contact => formattedContacts.push(new Contact(contact)));
            return { length: results.length, memberCount: results.memberCount, contacts: formattedContacts };
        }

        catch (err) {
            console.log(prefix + 'failed');
            console.log(prefix + 'Error =', err);
            throw err;
        }
    };
}