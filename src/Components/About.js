// Assets
import DtAboutImg from '../Assets/images/desktop/image-interactive.jpg'
import MbAboutImg from '../Assets/images/mobile/image-interactive.jpg'

import { Container } from './Container'

export const About = () => {
  const screenWidth = window.innerWidth;
	const image = screenWidth >= 1024 ? DtAboutImg : MbAboutImg

  return (
    <Container>
      <div className='laptop:grid laptop:grid-cols-2 space-y-3 gap-4 items-end'>
        <img src={image} alt="" />
        <section className='space-y-2 laptop:ml-[-100px] bg-white laptop:p-8'>
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>

        </section>
      </div>
    </Container>
  )
}