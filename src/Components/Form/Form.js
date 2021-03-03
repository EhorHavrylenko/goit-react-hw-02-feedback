import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './form.module.css';


const initialState = {
	name: '',
	phone: ''
};

class Form extends Component {
	state = initialState
    
    handleChangeForm = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		const { name, phone } = this.state;
		const { onAddContact } = this.props;

		const isValidateForm = this.validateForm();

		if (!isValidateForm) return;

		onAddContact({ id: shortid.generate(), name, phone });
        this.resetForm();
	};

	validateForm = () => {
		const { name, phone } = this.state;
		const { onCheckUnique } = this.props;
		if (!name || !phone) {
			alert('Not name or phone!');
			return false;
		}

		return onCheckUnique(name);
	};

    resetForm  = () => {
        this.setState(initialState);
    }

	render() {
		const { name, phone } = this.state;
		return (
			<>
			<h2 className={styles.title_phonebook}>PHONEBOOK</h2>

			<form className={styles.form} onSubmit={this.handleFormSubmit}>
				<input className={styles.input} type="text" name="name" placeholder="Enter Contact" value={name} onChange={this.handleChangeForm} />
				<input className={styles.input} type="tel" name="phone" placeholder="Enter Phone" value={phone} onChange={this.handleChangeForm} />
				<button className={styles.add_btn} type="submit">ADD</button>
			</form>
			</>
		);
	}
}

export default Form;
