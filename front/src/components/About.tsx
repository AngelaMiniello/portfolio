import me from '../assets/images/me.png'

export default function About(){
    return(
        <section className="pt-80 block mx-auto min-h-[800px]">
            <div className="justify-around relative max-w-full pl-6 pr-6 flex flex-wrap gap-4">

                <div className="max-w-2xl pl-36 text-mist-100 min-h-[700px]">

                  <h2 className="">
                    <span className="font-script text-4xl">A</span>
                    <span className="font-display text-4xl">bout</span>

                    <span className="font-display text-4xl">Me</span>
                  </h2>

                  <p className="pt-14 flex justify-end font-display text-3xl"> I am a Fulstack develper with a strong Frontend focus. I try to on creating modern, intuitive, and user-centered interfaces.</p>
                  <p className="pt-4 flex justify-end font-display text-3xl"> I specialize in React and Next.js, building responsive web applications with a strong eye for both user experience (UX) and visual detail. </p>
                  <p className="pt-4 flex justify-end font-display text-3xl"> My goal is to continue growing as a Developer and building products that not only perform seamlessly but also feel great to use. </p>
                </div>

                <div className='flex items-end justify-end'>
                  <img
                    src={me}
                    alt=""
                    className='h-58 opacity-80'
                  />
                </div>

            </div>
        </section>
    )
}