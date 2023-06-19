import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import Home from './pages/Home'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Home />
			</main>
		</div>
	)
}

export default App
