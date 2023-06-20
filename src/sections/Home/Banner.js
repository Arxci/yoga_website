import styles from './Banner.module.css'
import banner from '../../assets/Home/Banner/Banner.png'
import ButtonCTA from '../../UI/ButtonCTA'
import Container from '../../UI/Container'

const Banner = () => {
	return (
		<section
			className={styles.banner}
			style={{ backgroundImage: `url(${banner})` }}
		>
			<div className={styles['banner-wrapper']}>
				<Container additionalStyles={styles.container}>
					<div className={`${styles.content} inner-content`}>
						<h1 className={styles.title}>
							Passionate about sharing the transformative power of yoga with
							you!
						</h1>
						<p className={styles.subtext}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
						<ButtonCTA content={'get started'} color="invert" />
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Banner
