import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContacts } = this.props;

    const contactsList = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    addContacts(contactsList);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form
        className="row gx-3 gy-2 align-items-center"
        onSubmit={this.handleSubmit}
      >
        <h2>Phonebook</h2>
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="specificSizeInputName">
            Name
          </label>
          Name
          <input
            className="form-control"
            id="inputName"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
          <label className="visually-hidden" htmlFor="specificSizeInputName">
            Number
          </label>
          Number
          <input
            className="form-control"
            id="inputNumber"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
