export default function Webflow() {
    return (<>
        <div className="w-full h-[503px] flex justify-center items-center flex-col relative">
            <div className="w-[60%] h-[65%]">
                <img src='./arrow.png' className="w-[48px] h-[48px] absolute right-28 top-60 cursor-pointer"/>
                <div className="w-full h-[25%] flex justify-center"><img src='./webflow.png' className="w-[120px] h-[48px]" /></div>
                <div className="w-full h-[30%] font-bold text-2xl text-center">"Security Council transformed our cybersecurity posture, providing invaluable insights and support that exceeded our expectations."</div>
                <div className="w-full h-[45%] flex justify-center items-center">
                    <div className="w-[25%] h-full flex justify-center items-center flex-col">
                        <img src="./pic.png" className="w-[64px] h-[64px]" />
                        <div className="text-base font-semibold">John Doe</div>
                        <div>CISO, TechCorp</div>
                    </div>
                </div>
            </div>
            <div className="w-[60%] h-[15%] flex justify-center items-center gap-x-1">
                <div className="w-5 h-5 rounded-full bg-black"></div>
                <div className="w-5 h-5 rounded-full bg-black/20"></div>
                <div className="w-5 h-5 rounded-full bg-black/20"></div>
            </div>
        </div>
    </>)
}