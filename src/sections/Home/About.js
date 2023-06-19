import Container from '../../UI/Container'
import styles from './About.module.css'

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles['about-wrapper']}>
				<Container></Container>
			</div>
		</section>
	)
}

export default About
