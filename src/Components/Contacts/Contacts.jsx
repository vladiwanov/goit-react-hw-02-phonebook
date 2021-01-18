// import shortid from 'shortid';
import s from './Contacts.module.css';
const Contacts = ({ list }) => {
  return (
    <section className={s.contacts}>
      <h2 className={`${s.h1} ${s.h2}`}>Contacts</h2>
      <ul className={s.list}>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
