// assets
import '../Styles/index.css'
import DtHeroBg from '../Assets/images/desktop/image-hero.jpg'
import MbHeroBg from '../Assets/images/mobile/image-hero.jpg'

// Components
import { Hero } from "./Hero"
import { NavBar } from "./Navigation"
import { About } from "./About"
import { Creations } from './Creations'
import { Footer } from './Footer'

export const HomeComponent = () => {
	// screenwidth
	const screenWidth = window.innerWidth;
	const heroBG = screenWidth >= 1024 ? DtHeroBg : MbHeroBg

	return (
		<div className='flex flex-col space-y-2 gap-4 m-auto'>
			<div className="bg-center bg-cover p-12 bg-blend-overlay" style={{ backgroundImage: `url(${heroBG})`}}>
				<NavBar />
				<Hero />
			</div>
			<About />
			<Creations />
			<footer className='bg-black p-6'>
				<Footer />
			</footer>
		</div>
	)
}