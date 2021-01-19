// import shortid from 'shortid';
import s from './ContactList.module.css';
const Contacts = ({ list, onDelete }) => {
  return (
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
};

export default Contacts;
