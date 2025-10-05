import { ContactList } from "./models/ContactList.js";
import { ContactView } from "./views/ContactView.js";
import { ContactController } from "./controllers/ContactController.js";

// Instanciación de los componentes
const contactList = new ContactList();
const contactView = new ContactView();
const contactController = new ContactController(contactList, contactView);

// 1. Mostrar lista inicial (vacía)
contactController.showContacts();

// 2. Agregar dos nuevos contactos
contactController.add("Yahir Alvarado", "yahir@yahoo.com", "98765432");
contactController.add("Dickson Serrano", "dickson@yahoo.com", "87654321");

// 3. Mostrar lista actualizada
contactController.showContacts();

// 4. Eliminar uno de los contactos usando su ID
const contactosActuales = contactList.getContacts();
if (contactosActuales.length > 0) {
  const idAEliminar = contactosActuales[0].id;
  contactController.remove(idAEliminar);
}

// 5. Intentar eliminar un contacto con un ID inexistente
contactController.remove("id-inexistente");

// 6. Mostrar lista final
contactController.showContacts();
