import React from 'react'
import styles from './NavLink.module.css'

const NavLink = ({ link, content }) => {
	return (
		<li className={styles['list-item']}>
			<a href={link} className={styles.link}>
				{content}
			</a>
		</li>
	)
}

export default NavLink
