import React, { Component } from 'react';

import './App.css';
import ContactList from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';
import Form from './Components/Form/Form';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' }
		],
		filter: ''
	};

	handleAddNewContact = (newContact) => {
		this.setState(({ contacts }) => ({
			contacts: [ ...contacts, newContact ]
		}));
	};

	handleChangeFilter = (filter) => {
		this.setState({ filter });
	};

	visibleContact = () => {
		const { contacts, filter } = this.state;
		return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase(filter)));
	};

	checkUniqueContact = (name) => {
		const { contacts } = this.state;
		const chekingContact = !!contacts.find((contact) => contact.name === name);
		chekingContact && alert('Contact in Phonebook Already');
		return !chekingContact;
	};

	handleDeleteContact = (id) => {
		this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }));
	};

	render() {
		const { filter } = this.state;

		return (
			<div className="wrap">
				<Form onAddContact={this.handleAddNewContact} onCheckUnique={this.checkUniqueContact} />
				<Filter value={filter} onChange={this.handleChangeFilter} />
				<ContactList contacts={this.visibleContact()} onRemove={this.handleDeleteContact} />
			</div>
		);
	}
}

export default App;
