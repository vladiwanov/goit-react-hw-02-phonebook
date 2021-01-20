// import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const ContactList = ({ list, onDelete }) => (
  <section className={s.contacts}>
    <ul className={s.list}>
      {list.map(item => (
        <li className={s.item} key={item.id}>
          <p className={s.stringElem}>{item.name}:</p>
          <p>{item.number}</p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(item.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  </section>
);

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
