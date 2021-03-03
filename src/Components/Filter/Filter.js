import React from 'react';
import styles from './filter.module.css';

const Filter = ({ value, onChange }) => {
	return (
		<div>
			<h3 className={styles.text}>Find Contact</h3>
			<input className={styles.contact} name="filter" type="text" value={value} onChange={({ target }) => onChange(target.value)} />
		</div>
	);
};

export default Filter;
