import Contact from '../contact/Contact';
import css from './ContactList.module.css';
export default function ContactList({ data }) {
    return (
        <ul className="list">
            {data.map(user =>( 
                <li className="css.item" key={user.id}>
                < Contact  data = {user}/>
                </li>
            ))
            }
        </ul>
    )
    
}