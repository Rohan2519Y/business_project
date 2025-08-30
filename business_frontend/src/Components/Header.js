export default function Header() {
    return (
        <>
            <div className="w-full h-[72px] flex justify-between items-center">
                <div className="w-[10%] h-full flex justify-center items-center">
                    <img src="./image.png" className="w-[84px] h-[36px]" alt="logo" />
                </div>
                <div className="w-[30%] h-full flex justify-center items-center">
                    <div className="w-1/3 h-full flex justify-center items-center">
                        Home
                    </div>
                    <div className="w-1/3 h-full flex justify-center items-center">
                        Services
                        <img
                            src="./down.png"
                            className="w-5 mt-[7px] ml-1"
                            alt="down"
                        />
                    </div>
                    <div className="w-1/3 h-full flex justify-center items-center">
                        Blog
                    </div>
                </div>
                <div className="w-[10%] h-full flex justify-center items-center">
                    <button className="w-[125px] h-[44px] flex items-center justify-evenly text-white font-semibold bg-gradient-to-r from-[#3890C9] to-[#2B79AC] outline-none border-none rounded-[30px]">
                        <img src="./call.png" className="w-5" />
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    );
}
