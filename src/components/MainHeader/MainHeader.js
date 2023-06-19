import Container from '../../UI/Container'
import styles from './MainHeader.module.css'
import logo from '../../assets/MainHeader/HeaderLogo.png'
import ButtonCTA from '../../UI/ButtonCTA'
import useWindowSize from '../../hooks/useWindowSize'
import { useState } from 'react'
import MainHamburger from './MainHamburger'
import NavLink from './NavLink'

const MainHeader = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const windowSize = useWindowSize()
	const isMobile = windowSize.x <= 991

	if (isMenuOpen && !isMobile) {
		setIsMenuOpen(false)
	}

	const openHamburgerHandler = () => {
		setIsMenuOpen(true)
	}

	const closeHamburgerHandler = () => {
		setIsMenuOpen(false)
	}

	let headerNav = (
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
	)

	if (isMobile) {
		headerNav = (
			<button
				onClick={openHamburgerHandler}
				type="button"
				className={styles.hamburger}
			>
				<span className={styles['hamburger-line']}></span>
				<span className={styles['hamburger-line']}></span>
				<span className={styles['hamburger-line']}></span>
			</button>
		)
	}

	return (
		<header className={styles.header}>
			<Container additionalStyles={styles['header-wrapper']}>
				<a href="/" className={styles['logo-wrapper']}>
					<img src={logo} alt="logo" className={styles.logo} />
				</a>
				{headerNav}
			</Container>
			{isMobile && isMenuOpen && (
				<MainHamburger onClose={closeHamburgerHandler} />
			)}
		</header>
	)
}

export default MainHeader
