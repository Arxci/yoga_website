import styles from './ButtonCTA.module.css'

const ButtonCTA = ({ content, color }) => {
	return (
		<button
			type="button"
			className={`${styles.button} ${color ? styles[color] : undefined}`}
		>
			{content}
		</button>
	)
}

export default ButtonCTA
