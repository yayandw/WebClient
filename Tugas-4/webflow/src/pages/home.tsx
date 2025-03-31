import RecentWork from "../components/RecentWork.tsx";
import Works from "../components/Works.tsx";
import Comment from "../components/Comment.tsx";
import HelloTip from "../components/HelloTip.tsx";

const work1 = ["/work1.svg", "/work2.svg", "/work3.svg", "/work4.svg"]
const work2 = ["/work1.svg", "/work6.svg", "/work7.svg", "/work4.svg"]

const Home = () => {
    return (
        <div className="w-auto h-auto flex flex-col gap-40">
            <div className="h-[700px] bg-[#C7D0D9] flex relative items-center justify-center">
                <img src="/person.svg" alt="Person" className="absolute bottom-0 object-cover"/>
                <p className="absolute w-full bottom-20 left-0 right-0 p-4 text-8xl font-bold overflow-hidden text-[#F4F7FA]">—
                    Webflow Developer — UI/UX Designer — Web Designer —</p>
                <HelloTip className="group absolute right-0 object-cover"/>
            </div>
            <div className="max-w-full grid grid-cols-3 ms-20 me-20 gap-40">
                <p className="text-[40px] font-medium">About</p>
                <p className="col-span-2 text-[27px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-[40px] font-medium">Recent Work</p>
                <div className="col-span-2 flex flex-col ">
                    <RecentWork title="Decodable.co" description="Brand Design — Webflow Development — Web Design"/>
                    <div className="w-full h-px bg-[#C7D0D9] mt-8 mb-8"/>
                    <RecentWork title="Gofirefly.io" description="Brand Design — Webflow Development — Web Design"/>
                    <div className="w-full h-px bg-[#C7D0D9] mt-8 mb-8"/>
                    <RecentWork title="Blinkops.com" description="Brand Design — Webflow Development — Web Design"/>
                    <div className="w-full h-px bg-[#C7D0D9] mt-8 mb-8"/>
                    <RecentWork title="Withkanvas.com" description="Brand Design — Webflow Development — Web Design"/>
                </div>
                <div className="col-span-3 flex flex-col gap-10">
                    <Works className="animate-infinite-start" images={work1}/>
                    <Works className="animate-infinite-end" images={work2}/>
                </div>
                <p className="text-[40px] font-medium">Testimonials</p>
                <div className="col-span-2 flex flex-col  gap-16">
                    <Comment
                        comment="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” "
                        src="/ayush.svg" title="Ayush Raj" description="VP of Marketing @ Webflow"/>
                    <Comment
                        comment="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” "
                        src="/alex.svg" title="Alex Cattoni" description="Founder @ CopyPossy"/>
                </div>
            </div>
        </div>
    )
}

export default Home