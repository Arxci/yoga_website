import ReactDOM from 'react-dom'
import { useState } from 'react'
import NavLink from './NavLink'
import ButtonCTA from '../../UI/ButtonCTA'
import styles from './MainHamburger.module.css'
import Backdrop from '../../UI/Backdrop'
import { useEffect } from 'react'

const HamburgerMenu = ({ onPressed, action }) => {
	return (
		<div className={`${styles['hamburger-menu']} ${styles[action]}`}>
			<button type="button" onClick={onPressed} className={styles.cross}>
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
	const [action, setAction] = useState('')

	const closeHandler = () => {
		setAction('close')
	}

	useEffect(() => {
		let t
		if (action === 'close') {
			t = setTimeout(() => {
				onClose()
			}, 200)
		}

		return () => clearTimeout(t)
	}, [action, onClose])

	return (
		<>
			{ReactDOM.createPortal(
				<HamburgerMenu onPressed={closeHandler} action={action} />,
				document.getElementById('hamburger-menu')
			)}
			{ReactDOM.createPortal(
				<Backdrop onPressed={closeHandler} />,
				document.getElementById('backdrop')
			)}
		</>
	)
}

export default MainHamburger
