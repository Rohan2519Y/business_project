export default function Footer() {
    return (<>
        <div className="w-full h-[329px] flex justify-center items-center">
            <div className="w-[85%] h-[90%] ">
                <div className="w-full flex justify-between items-center h-[60%] border-b-2 border-black">
                    <img src="./image.png" className="w-[84px] h-[36px]" />
                    <div className="gap-x-5 ml-20 h-full flex items-center justify-between">
                        <div className="text-sm font-semibold">Contact Us</div>
                        <div className="text-sm font-semibold">About Us</div>
                        <div className="text-sm font-semibold">Our Services</div>
                        <div className="text-sm font-semibold">Blog Insights</div>
                    </div>
                    <div className=" h-full flex items-center justify-center gap-x-3">
                        <img src="./facebook.png" className="w-[24px] h-[24px]" />
                        <img src="./instagram.png" className="w-[24px] h-[24px]" />
                        <img src="./x.png" className="w-[24px] h-[24px]" />
                        <img src="./linkdin.png" className="w-[24px] h-[24px]" />
                        <img src="./youtube.png" className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="w-full h-[20%] flex justify-center items-end gap-x-5">
                    <div>© 2025 Security Council. All rights reserved.</div>
                    <div><u>Privacy Policy</u></div>
                    <div><u>Terms of Use</u></div>
                    <div><u>Cookie Policy</u></div>
                </div>
            </div>
        </div>
    </>)
}