import css from './ContactsItem.module.css'
export const ContactItem = ({ name, number, id, onDelete }) => {
    return (
         <li key={id} className={css.contactItem}><span className={css.contact}>{name} : {number}</span>
        <button type="button" onClick={onDelete} className={css.deleteButton}>Delete</button>
      </li>
    )
}