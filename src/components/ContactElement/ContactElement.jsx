import styles from "./contactElement.module.css"
import propTypes from 'prop-types';


const ContactElement = ({ id, name, number, handleDelete }) => (
        <li key={id} className={styles.contactListItem}>
          {name}: {number}
          <button
            type="button"
            className={styles.contactListItemBtn}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
);

export default ContactElement;

ContactElement.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};