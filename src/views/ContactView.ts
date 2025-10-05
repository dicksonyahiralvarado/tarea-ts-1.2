import { Contact } from "../models/Contact.js";

export class ContactView {
  displayContacts(contacts: Contact[]): void {
    if (contacts.length === 0) {
      console.log("La lista de contactos está vacía.");
      return;
    }

    console.log("Lista de Contactos:");
    contacts.forEach(contact => {
      console.log(`ID: ${contact.id}`);
      console.log(`Nombre: ${contact.nombre}`);
      console.log(`Email: ${contact.email}`);
      console.log(`Teléfono: ${contact.telefono}`);
      console.log("------------------------");
    });
  }

  displayMessage(message: string): void {
    console.log(message);
  }
}
