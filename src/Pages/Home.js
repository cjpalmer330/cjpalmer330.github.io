import profilePicture from '../pictures/profile.jpg';
import SocialBar from '../Social-bar';
export default function Home(){
  return(
    <div>
      <SocialBar />
      <body className="overflow-hidden h-auto bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-36 grid grid-rows-4 grid-cols-2 gap-24">
          <div className='flex justify-center items-center'>
            <img alt="Picture of Me" className="shadow-2xl shadow-slate-200/40 w-96 rounded-3xl align-middle justify-center" src={profilePicture}/>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'> Welcome to my Website!</h3>
            <h3 className="text-xl">
              What started as a way to spend my free time over Thanksgiving break, has turned into this landing page for you to learn more about who I am! Click around and you might be surprised by what you find!
            </h3>
          </div>
          <div className="shadow-2xl shadow-slate-200/40 rounded-3xl p-12">
            <h3 className='font-mono text-white font-bold text-center text-2xl'>Sample Text</h3>
            <h3 className="text-xl">
              This is some sample text
            </h3>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
          <div>
            <h2 className="text-2xl">test</h2>
          </div>
        </div>
      </body>
    </div>
  )
}