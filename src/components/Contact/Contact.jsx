import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({id, name, number, onDelete}) => {
    return (
        <li className={css.item}>
            <span className={css.info}>
            <FaUser className={css.icon} />
            {name}
            </span>
            <span className={css.info}>
            <FaPhone className={css.icon} />
            {number}
            </span>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </li>
    );
};


 export default Contact;

