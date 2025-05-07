import Contact  from '../Contact/Contact';
import css from './ContactList.module.css'


export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.name}>{name}</span>: <span>{number}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

