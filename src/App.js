import styles from './App.module.css'
import MainFooter from './components/MainFooter/MainFooter'
import MainHeader from './components/MainHeader/MainHeader'
import Home from './pages/Home'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main className={styles.main}>
				<Home />
			</main>
			<MainFooter />
		</div>
	)
}

export default App
