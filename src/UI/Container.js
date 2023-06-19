import styles from './Container.module.css'

const Container = ({ children, additionalStyles }) => {
	return (
		<div className={`${styles.container} ${additionalStyles}`}>{children}</div>
	)
}

export default Container
