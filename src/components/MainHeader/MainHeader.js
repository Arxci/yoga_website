import Container from '../../UI/Container'
import styles from './MainHeader.module.css'
import logo from '../../assets/MainHeader/HeaderLogo.png'
import ButtonCTA from '../../UI/ButtonCTA'

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<Container additionalStyles={styles['header-wrapper']}>
				<a href="/" className={styles['logo-wrapper']}>
					<img src={logo} alt="logo" className={styles.logo} />
				</a>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles['list-item']}>
							<a href="/" className={styles.link}>
								Home
							</a>
						</li>
						<li className={styles['list-item']}>
							<a href="/" className={styles.link}>
								Instructor
							</a>
						</li>
						<li className={styles['list-item']}>
							<a href="/" className={styles.link}>
								Classes
							</a>
						</li>
						<li className={styles['list-item']}>
							<a href="/" className={styles.link}>
								Membership
							</a>
						</li>
						<li className={styles['list-item']}>
							<ButtonCTA content={'log in'} />
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default MainHeader
