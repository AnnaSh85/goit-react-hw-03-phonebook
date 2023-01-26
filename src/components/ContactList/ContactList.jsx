import ContactElement from '../ContactElement/ContactElement';
import propTypes from 'prop-types';


const ContactList = ({ contacts, handleDelete }) => (
  
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactElement
        key={id}
        name={name}
        number={number}
        id={id}
        handleDelete={handleDelete}/>

      ))}
    </ul>
 
);

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};