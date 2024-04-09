import { useId } from 'react';
import css from './ContactForm.module.css';
export default function ContactForm({onAdd}) {
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        onAdd ({
            name: form.elements.username.value,
            number: form.elements.number.value 
        })
        form.reset();
    }

    const usernameId = useId();
    const numberId = useId();


    return (
        <form className="css.form" onSubmit={handleSubmit}>
            <div className="css.group">
                <label htmlFor={usernameId}>Name</label>
                <input type="text" name="username" id = {usernameId} />
                <label htmlFor={numberId} >number</label>
                <input type="number" name="number" id={numberId } />
            </div>
            <button type='submit'>Add contact</button>
        </form>
    );
} 