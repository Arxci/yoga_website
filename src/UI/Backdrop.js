import styles from './Backdrop.module.css'

const Backdrop = ({ onPressed }) => {
	return <div className={styles.backdrop} onClick={onPressed} />
}

export default Backdrop
