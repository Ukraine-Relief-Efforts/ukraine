import Image from 'next/image'
import Link from 'next/link';
export default function OrgCardTemplate() {
    return (
    
      <div className="grid gap-4 grid-cols-12 w-[97%] h-713 padding-2 font-open">
          <div className="container col-span-4 bg-[#F2F6FF] rounded-3xl mx-5 mb-5">
            <div className="container h-3/8 w-full rounded-lg  mb-2">
                <img className="object-cover rounded-t-lg" src="/pexels-cottonbro-3831760 1.svg"></img>
            </div>
            <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">Come Back Alive Foundation</h1>
            <p className="mx-5 text-l mb-2">Founded in 2014, the Kyiv-based Come Back Alive Foundation is one of the largest charities in Ukraine, primarily fundraising for Ukraine’s military, to aid soldiers and volunteers with supplies, including equipment (thermographic cameras and night vision devices), drones, personal body protection and specialized software.
            </p>
            <div className="flex mb-6 mt-5">

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mr-1 ml-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black ">Link</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mx-1 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Donate</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 ml-1 mr-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Guide</button>
            </Link>

          </div>
          </div>

          <div className="container col-span-4 bg-[#F2F6FF] rounded-3xl mx-5 mb-5">
            <div className="container h-3/8 w-full rounded-lg  mb-2">
                <img className="object-cover rounded-t-lg" src="/pexels-cottonbro-3831760 1.svg"></img>
            </div>
            <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">Come Back Alive Foundation</h1>
            <p className="mx-5 text-l mb-2">Founded in 2014, the Kyiv-based Come Back Alive Foundation is one of the largest charities in Ukraine, primarily fundraising for Ukraine’s military, to aid soldiers and volunteers with supplies, including equipment (thermographic cameras and night vision devices), drones, personal body protection and specialized software.
            </p>
            <div class="flex mb-6 mt-5">

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mr-1 ml-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black ">Link</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mx-1 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Donate</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 ml-1 mr-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Guide</button>
            </Link>

          </div>
          </div>


          <div className="container col-span-4 bg-[#F2F6FF] rounded-3xl mx-5 mb-5">
            <div className="container h-3/8 w-full rounded-lg  mb-2">
                <img className="object-cover rounded-t-lg" src="/pexels-cottonbro-3831760 1.svg"></img>
            </div>
            <h1 className="mx-5 text-3xl text-black mb-3 font-extrabold ">Come Back Alive Foundation</h1>
            <p className="mx-5 text-l mb-2">Founded in 2014, the Kyiv-based Come Back Alive Foundation is one of the largest charities in Ukraine, primarily fundraising for Ukraine’s military, to aid soldiers and volunteers with supplies, including equipment (thermographic cameras and night vision devices), drones, personal body protection and specialized software.
            </p>
            <div className="flex mb-6 mt-5">

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mr-1 ml-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black ">Link</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 mx-1 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Donate</button>
            </Link>

            <Link href="/">
            <button className="container text-xl rounded-md font-boldest text-white text-center bg-black w-1/3 ml-1 mr-5 mb-2 ring-2 ring-black hover:bg-[#ffd700] hover:ring-3 hover:ring-[#0057b7] hover:text-black">Guide</button>
            </Link>

          </div>
          </div>

      </div>



    );
  }
