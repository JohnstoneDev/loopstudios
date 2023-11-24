import { Container } from "./Container"


export const Hero = () => {
  return (
    <div className="flex items-center justify-between pb-6">
      <Container>
        <div className="border-4 flex items-start tablet:w-3/5">
          <div className="tablet:p-10 p-2 leading-loose tracking-widest flex flex-col gap-3 space-y-2">
            <h1 className="text-white text-[35px]">Immersive</h1>
            <h1 className="text-white text-[35px]">Experiences</h1>
            <h1 className="text-white text-[35px]">that Deliver</h1>
          </div>
        </div>
      </Container>
    </div>
  )
}