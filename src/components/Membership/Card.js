import ButtonCTA from '../../UI/ButtonCTA'
import styles from './Card.module.css'
import Feature from './Feature'

const DUMMY_FEATURES = [
	{
		id: 0,
		name: 'Access to premium classes',
	},
	{
		id: 1,
		name: 'One on One classes',
	},
	{
		id: 2,
		name: 'Access to our equipment',
	},
	{
		id: 3,
		name: 'Additional resources for learning',
	},
	{
		id: 3,
		name: 'Access to new ways of relieving stress',
	},
]

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles['card-header']}>
				<h3 className={styles.title}>Premium Classes</h3>
				<h1 className={styles.price}>$300/mo</h1>
			</div>
			<div className={styles.content}>
				<p>Includes:</p>
				<ul className={styles.list}>
					{DUMMY_FEATURES.map((item) => (
						<Feature key={item.id} name={item.name} />
					))}
				</ul>
			</div>
			<div className={styles.actions}>
				<ButtonCTA content={'buy now'} />
			</div>
		</div>
	)
}

export default Card
