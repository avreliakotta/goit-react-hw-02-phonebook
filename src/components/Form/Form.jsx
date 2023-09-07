import React, { Component } from "react";
import css from './Form.module.css';
import { nanoid } from "nanoid";
export class Form extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = nanoid();
    numberInputId = nanoid();
    handleInputChange = (event) => {
        // console.log(event.currentTarget.value);
        const { name, value } = event.currentTarget;
        this.setState({ [name]:value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //  console.log(`Signed up as: ${this.state.name}`);
        const { name, number } = this.state;
        this.props.onSubmit({name,number});
        this.setState({
            name: "",
            number:""});
        
    }
    render() {
          const { name,number } = this.state;
        return (
          
            <form onSubmit={this.handleSubmit} className={css.AddContactForm}>
                <label className={css.label}>
                    Name
                    <input
                        id={this.nameInputId}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        value={name}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange}
                        className={css.formInput}
                    />
                </label>
                <label className={css.label}>
                    Number
                    <input type="tel"
                        name="number"
                        id={this.numberInputId}
                        value={number}
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleInputChange}
                        className={css.formInput} />
                </label>
                <button type="submit" className={css.addContactButton}>Add contact</button>
            </form>
        
        )
    }
}