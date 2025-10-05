import { Contact } from "./Contact.js";

export class ContactList {
  private contacts: Contact[] = [];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(nombre: string, email: string, telefono: string): Contact {
    const newContact: Contact = {
      id: Math.random().toString(36).substring(2, 9), 
      nombre,
      email,
      telefono,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  deleteContact(id: string): boolean {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }
}
