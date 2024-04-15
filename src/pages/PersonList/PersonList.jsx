import { useEffect, useState } from 'react';
import styles from './PersonList.module.scss';
import { getPerson } from '../../api/getPerson';

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPerson(currentPage).then((result) => setPersons(result));
  }, [currentPage]);

  return (
    <div className={styles.item}>
      <h1>Персонажи</h1>
      <ul className={styles.persons}>
        {persons.map((person) => (
          <li className={styles.person} key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className={styles.person__title}>
              <h2>{person.name}</h2>
              <span>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '100%',
                    backgroundColor:
                      person.status === 'Dead'
                        ? 'red'
                        : person.status === 'Alive'
                        ? 'green'
                        : 'gray',
                  }}
                ></div>
                {person.status} - {person.species}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.paginate}>
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Предыдущая
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Следующая
        </button>
      </div>
    </div>
  );
};

export default PersonList;
