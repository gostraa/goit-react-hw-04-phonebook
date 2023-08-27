import PropTypes from 'prop-types';

export const Filter = ({ filterContacts }) => {
  return (
    <div className="col-sm-3">
      <input name="filter" className="form-control" onChange={filterContacts} />
    </div>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
