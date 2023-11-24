import logo from '../Assets/images/logo.svg'

import { Container } from "./Container"


export const Footer = () => {
  return (
      <Container>
        <section className='flex flex-col tablet:grid items-center gap-8 text-white'>
          <section className='flex flex-col tablet:flex-row gap-4 items-center justify-between w-full'>
            <img src={logo} alt="" />
            <section className='flex justify-between gap-8 text-[25px]'>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-pinterest"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
            </section>
          </section>

          <section className='flex flex-col gap-3 tablet:flex-row justify-between'>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer'>Careers</p>
            <p className='cursor-pointer'>Events</p>
            <p className='cursor-pointer'>Products</p>
            <p className='cursor-pointer'>Support</p>
            <span className='text-dark-gray'>© Loopstudios. All Rights reserved </span>
          </section>
        </section>
      </Container>
    )
}