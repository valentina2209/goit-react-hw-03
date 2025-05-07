import css from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Contact({name, number}) {
    return (
        <div className={css.card}>
            <p className={css.name}><FaUser /> {name}</p>
            <p className={css.number}><FaPhone /> {number}</p>
            <button>Delete</button>  
        </div>  
    )

}


