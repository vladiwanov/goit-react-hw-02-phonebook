import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <section className={s.filter}>
    <h2>Find number by name</h2>
    <label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </section>
);

export default Filter;
