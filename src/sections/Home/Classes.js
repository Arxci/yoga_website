import ButtonCTA from '../../UI/ButtonCTA'
import Container from '../../UI/Container'
import styles from './Classes.module.css'
import image_01 from '../../assets/Classes/class-01.jpeg'
import image_02 from '../../assets/Classes/class-02.jpeg'
import image_03 from '../../assets/Classes/class-03.jpeg'
import image_04 from '../../assets/Classes/class-04.jpeg'
import image_05 from '../../assets/Classes/class-05.jpeg'
import image_06 from '../../assets/Classes/class-06.jpeg'
import Class from '../../components/Classes/Class'

const DUMMY_CLASSES = [
	{
		id: 0,
		title: 'Restorative Yoga',
		time: '10 Minutes',
		image: image_01,
	},
	{
		id: 1,
		title: 'Yoga for Stress Relief',
		time: '12 Minutes',
		image: image_02,
	},
	{
		id: 2,
		title: 'Vinyasa Flow',
		time: '20 Minutes',
		image: image_03,
	},
	{
		id: 3,
		title: 'Gentle Yoga',
		time: '15 Minutes',
		image: image_04,
	},
	{
		id: 4,
		title: 'Hatha Yoga',
		time: '25 Minutes',
		image: image_05,
	},
	{
		id: 5,
		title: 'Chair Yoga',
		time: '15 Minutes',
		image: image_06,
	},
]

const Classes = () => {
	return (
		<section className={styles.classes}>
			<div className={styles['classes-wrapper']}>
				<Container>
					<div className={`${styles['content']} inner-content`}>
						<h1 className={styles.title}>
							I offer a variety of yoga classes that are suitable for all levels
						</h1>
						<p className={styles.subtext}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<ButtonCTA content={'learn more'} />
						<ul className={styles.list}>
							{DUMMY_CLASSES.map((item) => (
								<Class
									key={item.id}
									title={item.title}
									time={item.time}
									image={item.image}
								/>
							))}
						</ul>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Classes
