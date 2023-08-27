import PropTypes from 'prop-types';

export const Contacts = ({ deleteContact, filteredArr }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul className="col-sm-3">
        {filteredArr.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => deleteContact(contact.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filteredArr: PropTypes.array.isRequired,
};
