import styles from './App.module.css'
import MainHeader from './components/MainHeader/MainHeader'
import Home from './pages/Home'
import About from './sections/Home/About'

function App() {
	return (
		<div className={styles.root}>
			<MainHeader />
			<main>
				<Home />
				<About />
			</main>
		</div>
	)
}

export default App
