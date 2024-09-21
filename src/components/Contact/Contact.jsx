import style from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={style.contact}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;