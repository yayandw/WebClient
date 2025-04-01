import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className="pt-40 grid grid-cols-2 ps-20 pe-20">
            <div className="flex flex-col font-normal">
                <img className="w-[297px]" src="/contact-person.png" alt="..."/>
                <p className="pt-14 text-[#3C3D3E] text-[18px] ">Contact Details</p>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">ayush.barnwal@brightscout.com</Link>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">+91 8651447521</Link>
                <p className="pt-10 text-[#3C3D3E] text-[18px]">Social</p>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">Linkedin</Link>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">Instagram</Link>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">Twitter</Link>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">Webflow</Link>
                <Link to="#" className="text-[#0B0C0E] text-[27px]">Figma</Link>
            </div>
            <div className="flex flex-col mb-28">
                <p className="text-[#3C3D3E] text-6xl">Let’s build something cool together</p>
                <div className="flex flex-col pt-9 gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-[#0B0C0E] text-[18px]">Name</p>
                        <input type="" className="border-none outline-none shadow-none bg-transparent text-[27px]"
                               placeholder="James Robert"/>
                        <div className="w-full h-px bg-[#3C3D3E] "/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[#0B0C0E] text-[18px]">Email</p>
                        <input type="email" className="border-none outline-none shadow-none bg-transparent text-[27px]"
                               placeholder="ayush.barnwal@brightscout.com"/>
                        <div className="w-full h-px bg-[#3C3D3E] "/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[#0B0C0E] text-[18px]">Subject</p>
                        <input className="border-none outline-none shadow-none bg-transparent text-[27px]"
                               placeholder="For web design work Enquire"/>
                        <div className="w-full h-px bg-[#3C3D3E] "/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[#0B0C0E] text-[18px]">Message</p>
                        <textarea className="h-[158px] border-none outline-none shadow-none bg-transparent text-[27px]"
                                  placeholder="Type your Message"/>
                        <div className="w-full h-px bg-[#3C3D3E] "/>
                    </div>
                    <Link to="/"
                       className="bg-[#0B0C0E] rounded-full w-[190px] h-[70px]
                       text-[#F4F7FA] text-[18px] font-bold flex items-center
                       justify-center shadow-xs hover:text-white hover:bg-indigo-500
                       focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-indigo-600">Submit
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contact