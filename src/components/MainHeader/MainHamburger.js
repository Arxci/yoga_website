import ReactDOM from 'react-dom'
import NavLink from './NavLink'
import ButtonCTA from '../../UI/ButtonCTA'
import styles from './MainHamburger.module.css'
import Backdrop from '../../UI/Backdrop'

const HamburgerMenu = ({ onClose }) => {
	return (
		<div className={styles['hamburger-menu']}>
			<button type="button" onClick={onClose} className={styles.cross}>
				<span className={styles['cross-line']}></span>
				<span className={styles['cross-line']}></span>
			</button>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<NavLink content={'Home'} link={'/'} />
					<NavLink content={'Instructor'} link={'/'} />
					<NavLink content={'Classes'} link={'/'} />
					<NavLink content={'Membership'} link={'/'} />
					<li className={styles['list-item']}>
						<ButtonCTA content={'log in'} />
					</li>
				</ul>
			</nav>
		</div>
	)
}

const MainHamburger = ({ onClose }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<HamburgerMenu onClose={onClose} />,
				document.getElementById('hamburger-menu')
			)}
			{ReactDOM.createPortal(
				<Backdrop onPressed={onClose} />,
				document.getElementById('backdrop')
			)}
		</>
	)
}

export default MainHamburger
