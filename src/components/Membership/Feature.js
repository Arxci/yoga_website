import styles from './Feature.module.css'

const Feature = ({ name }) => {
	return <li className={styles.list}>{name}</li>
}

export default Feature
