import { FaUser } from "react-icons/fa";import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data: { name, number } }) {

    return (
        <>
        <FaUser  size = {20}/>
        <p>{name}</p>
        <FaPhoneAlt size={20}/>
        <p>{number}</p>
        <button>Delete</button>
    </>
    )

    
}