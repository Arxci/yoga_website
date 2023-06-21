import Container from '../../UI/Container'
import Card from '../../components/Membership/Card'
import styles from './Membership.module.css'

const Membership = () => {
	return (
		<section className={styles.membership} id="membership">
			<div className={styles.wrapper}>
				<Container additionalStyles={styles.container}>
					<div className={`${styles.content} inner-content`}>
						<div className={styles.left}>
							<h1 className={styles.title}>Membership Plan</h1>
							<p className={styles.subtext}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique.
							</p>
						</div>
						<div className={styles.right}>
							<Card />
						</div>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Membership
