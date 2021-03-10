import React from 'react';
import styles from './contacts.module.css';

const ContactItem = ({ name, phone, onRemove, id }) => {
	return (
		<li className={styles.list_item}>
			<div>
			{name} : {phone}
			</div> 
			<button className={styles.btn} onClick={()=> onRemove(id)}>DELETE</button>
		</li>
	);
}; 

const ContactList = ({ contacts, onRemove }) => {
    if(contacts.length === 0) return null
	return (
		<ul className={styles.list}>
			{contacts.map((contact) => <ContactItem key={contact.name} id={contact.id} name={contact.name} phone={contact.phone} onRemove={onRemove} />)}
		</ul>
	);
};

export default ContactList;
