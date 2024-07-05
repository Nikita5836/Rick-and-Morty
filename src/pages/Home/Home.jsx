import styles from './Home.module.scss'
import title from '../../imgs/Title.svg'
import { useGetCharactersQuery } from '../../store/features/dataApi.js'
import RickAndMorty from '../../imgs/Rick-And-Morty.svg'
import characters from '../../imgs/characters.svg'
import location from '../../imgs/location.svg'
import episodes from '../../imgs/episodes.svg'

const Home = () => {
	const { data } = useGetCharactersQuery()

	return (
		<>
			<div className={styles.home}>
				<img className={styles.title} src={title} alt='title' />
				<div className={styles.popular}>
					<h1>Popular</h1>
					<ul className={styles.list}>
						{data?.results.slice(0, 9).map(item => (
							<li className={styles.list__cart} key={item.id}>
								<img src={item.image} alt={item.name} />
								<div className={styles.cart__title}>
									<h2>{item.name}</h2>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.episode}>
					<img className={styles.rick} src={RickAndMorty} alt='Rick' />
					<div className={styles.episode__title}>
						<div className={styles.episode__title__img1}>
							<img src={characters} alt='characters' />
							<img src={location} alt='location' />
						</div>
						<img src={episodes} alt='episodes' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
