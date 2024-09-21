import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;