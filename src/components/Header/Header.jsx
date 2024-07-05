import styles from './Header.module.scss'
import Logo from '../../imgs/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import { Button, Group } from '@mantine/core'
import acc from '../../imgs/account.svg'

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.header__item}>
					<img className={styles.header__logo} src={Logo} alt='Logo' />
					<nav>
						<Group className={styles.header__nav}>
							<ul>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink to='characters'>Characters</NavLink>
								</li>
								<li>
									<NavLink to='location'>Location</NavLink>
								</li>
								<li>
									<NavLink to='episode'>Episodes</NavLink>
								</li>
							</ul>
						</Group>
					</nav>
					<Link to='/account'>
						<Button variant='transparent'>
							<img src={acc} alt='account' width={32} />
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header