import styles from './NotFount.module.scss'
import notFount from '../../imgs/NotFound.svg'
import { NavLink } from 'react-router-dom'

const NotFount = () => {
	return (
		<>
			<div className={styles.notFount}>
				<div className={styles.notFount__img}>
					<img className={styles.notFount} src={notFount} alt='Notfount' />
				</div>
				<p className={styles.par}>
					The page was not found, check the link is correct and try again
				</p>
				<NavLink className={styles.link} to='/'>
					GET ME HOME
				</NavLink>
			</div>
		</>
	)
}

export default NotFount
