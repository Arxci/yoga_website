import ButtonCTA from '../../UI/ButtonCTA'
import Container from '../../UI/Container'
import styles from './About.module.css'
import image_01 from '../../assets/About/About-01.png'
import image_02 from '../../assets/About/About-02.png'

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles['about-wrapper']}>
				<Container additionalStyles={styles.container}>
					<div className={`${styles['content-wrapper']} inner-content`}>
						<div className={styles['content-left']}>
							<h1 className={styles.title}>ABOUT ME</h1>
							<p className={styles.subtext}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique. Duis
								cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
								commodo diam libero vitae erat.
							</p>
							<ButtonCTA content="more about me" />
						</div>
						<div className={styles['content-right']}>
							<img
								src={image_01}
								alt="yoga instructor"
								className={styles.image}
							/>
							<img
								src={image_02}
								alt="yoga instructor"
								className={styles.image}
							/>
						</div>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default About
