// lib imports
import { v4 as uuid } from "uuid";

import { Container } from "./Container";
import { creationsArray } from "./CreationsData";

const Creation = ({ desktop, mobile, title }) => {
  const screenWidth = window.innerWidth;
	const useImage = screenWidth >= 640 ? desktop : mobile

  return (
    <div className="p-16 tablet:p-40 bg-left-top tablet:bg-center bg-cover h-full w-full rounded-sm hover:bg-blend-overlay" style={{ backgroundImage: `url(${useImage})`}}>
      <section className="grid justify-between items-baseline tablet:-ml-28">
        <h5 className="text-[30px] text-white text-left">{title}</h5>
      </section>
    </div>
  )
}

export const Creations = () => {
  const screenWidth = window.innerWidth;

  return (
    <Container>
      <div className="space-y-6">
         <div className="flex items-center gap-8 justify-evenly">
            <h2 className="w-full">Our Creations</h2>
            <button hidden={screenWidth <= 640 } className="hover:bg-black hover:text-white border uppercase p-1 w-1/5 rounded">See all</button>
         </div>
        <div className="flex flex-col laptop:grid laptop:grid-cols-4 laptop:gap-x-20 gap-2 items-center justify-between">
          {
            creationsArray.map((creation) => <Creation key={uuid()} {...creation} />)
          }
        </div>
        <button hidden={screenWidth > 640 } className="hover:bg-black hover:text-white border uppercase p-1 w-full rounded">See all</button>
      </div>
    </Container>
  )
}