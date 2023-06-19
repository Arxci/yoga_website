import ButtonCTA from '../../UI/ButtonCTA'
import Container from '../../UI/Container'
import styles from './Hero.module.css'
import HeroBackgroundImage from '../../assets/Home/Hero/HeroBackgroundImage.jpg'
import HeroBackgroundVideo from '../../assets/Home/Hero/HeroBackgroundVideo.mp4'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles['hero-wrapper']}>
				<Container>
					<div className={styles['content-wrapper']}>
						<h1 className={styles.title}>Discover the Power of Yoga</h1>
						<p className={styles.subtext}>
							Join me on a Journey of Self-Discovery, Healing, and
							Transformation. Whether you are a beginner or an experienced
							practitioner.
						</p>
						<ButtonCTA content={'buy now'} color="invert" />
					</div>
				</Container>
			</div>
			<div className={styles['background-video']}>
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{
						backgroundImage: `url(${HeroBackgroundImage})`,
					}}
				>
					<source src={HeroBackgroundVideo} />
				</video>
			</div>
		</section>
	)
}

export default Hero
