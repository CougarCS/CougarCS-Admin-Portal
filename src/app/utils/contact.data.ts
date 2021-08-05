class Contact {
    psid: string = "";
    email: string = "";
    phoneNumber: string = "";
    firstName: string = "";
    lastName: string = "";
    shirtSize: string = "";
    contactAdded: string = "";
    transactionHistory: string[] = [];
    membershipStart: Term | undefined;
    membershipEnd: Term | undefined;
    membershipStatus: boolean = false;

    constructor(data: ContactBean) {
        this.psid = data["PSID"];
        this.email = data["Email"];
        this.phoneNumber = data["Phone Number"];
        this.firstName = data["First Name"];
        this.lastName = data["Last Name"];
        this.shirtSize = data["Shirt Size"];
        this.contactAdded = data["Contact Added"];
        this.transactionHistory = data["Transaction History"];
        this.membershipStart = data["Membership Start"];
        this.membershipEnd = data["Membership End"];
        this.membershipStatus = data["Membership Status"];
    }

    getName(): string { return `${this.firstName} ${this.lastName}`; }

    getMembershipStatus(): string { return this.membershipStatus ? "Yes" : "No"; }

    getMembershipStart(): string {
        if (!this.membershipStart || (!this.membershipStart.Term) && (!this.membershipStart.Year)) return "";
        return `${this.membershipStart.Term} ${this.membershipStart.Year}`;
    }

    getMembershipEnd(): string {
        if (!this.membershipEnd || (!this.membershipEnd.Term) && (!this.membershipEnd.Year)) return "";
        return `${this.membershipEnd.Term} ${this.membershipEnd.Year}`;
    }

    getTransactionHistory(): string {
        let output = '';
        this.transactionHistory.forEach(transaction => {
            output += transaction;
            if (transaction !== this.transactionHistory[this.transactionHistory.length - 1]) output += ", ";
        });
        return output;
    }
}

// Contact

interface ContactBean {
    "PSID": string,
    "Email": string,
    "Phone Number": string,
    "First Name": string,
    "Last Name": string,
    "Shirt Size": string,
    "Contact Added": string,
    "Transaction History": string[],
    "Membership Start": Term,
    "Membership End": Term,
    "Membership Status": boolean
}

// Contacts

interface ContactsData { length: number, memberCount: number, contacts: Contact[] }
const EMPTY_CONTACTS_DATA: ContactsData = { length: 0, memberCount: 0, contacts: [] };

interface ContactsBean { length: number, memberCount: number, contacts: ContactBean[] };
const EMPTY_CONTACTS_BEAN: ContactsBean = { length: 0, memberCount: 0, contacts: [] };

// Misc

interface Term {
    "Year": string,
    "Term": string
}

export { Contact, ContactBean, ContactsData, ContactsBean, Term };