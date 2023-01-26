import propTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filter, handleChange }) => (
  <div>
    <label className={styles.filterLabel}>Find contacts by Name </label>
    <input
      className={styles.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

export default Filter; 

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};