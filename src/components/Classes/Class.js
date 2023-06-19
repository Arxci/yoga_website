import styles from './Class.module.css'

const Class = ({ time, title, image }) => {
	return (
		<li className={styles.card}>
			<a href="/">
				<div className={styles['image-wrapper']}>
					<img src={image} alt="card" className={styles.image} />
				</div>
				<div className={styles.content}>
					<p className={styles.time}>{time}</p>
					<h3 className={styles.title}>{title}</h3>
				</div>
			</a>
		</li>
	)
}

export default Class
