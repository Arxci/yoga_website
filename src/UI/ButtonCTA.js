import styles from './ButtonCTA.module.css'

const ButtonCTA = ({ content }) => {
	return (
		<button type="button" className={styles.button}>
			{content}
		</button>
	)
}

export default ButtonCTA
