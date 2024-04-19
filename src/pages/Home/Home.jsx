import styles from './Home.module.scss'
import title from '../../imgs/Title.svg'

const Home = () => {
	return (
		<>
			<div className={styles.home}>
        <img className={styles.title} src={title} alt="title" />
        <div className={styles.popular}>
          <h1>Popular</h1>
          <ul>

          </ul>
        </div>
      </div>
		</>
	)
}

export default Home
