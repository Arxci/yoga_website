import { useLayoutEffect, useState } from 'react'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ x: 0, y: 0 })

	useLayoutEffect(() => {
		const onResizeHandler = () => {
			setWindowSize({ x: window.innerWidth, y: window.innerHeight })
		}

		window.addEventListener('resize', onResizeHandler)
		onResizeHandler()

		return () => window.removeEventListener('resize', onResizeHandler)
	}, [])

	return windowSize
}

export default useWindowSize
