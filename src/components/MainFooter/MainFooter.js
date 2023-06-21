import Container from '../../UI/Container'
import styles from './MainFooter.module.css'
import logo from '../../assets/MainHeader/HeaderLogo.png'
import NavLink from '../MainHeader/NavLink'

const MainFooter = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<Container additionalStyles={styles.container}>
					<div className={`${styles['content']} inner-content`}>
						<img src={logo} alt="logo" className={styles.logo} />
						<ul className={styles.list}>
							<NavLink content={'Home'} link={'/#hero'} />
							<NavLink content={'Instructor'} link={'/#about'} />
							<NavLink content={'Classes'} link={'/#classes'} />
							<NavLink content={'Membership'} link={'/#membership'} />
							<NavLink link="/" content="Contact" />
							<NavLink link="/" content="FAQ" />
						</ul>
						<span>&copy;Copyright all rights reserved</span>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default MainFooter
