export default function Popup({ open, setOpen }) {
    return (<>
        <div className="w-screen h-screen flex justify-center items-center fixed z-20 top-0">
            <div className="w-[775px] h-[318px] bg-white border-[6px] border-[#1387FB] rounded-2xl">
                <div className="w-[95%] h-[95%] ">
                    <div className="w-full h-[30%] flex items-center justify-center text-[48px] font-[700] bg-[linear-gradient(114.44deg,#3890C9_3.14%,#2B79AC_56.54%)] bg-clip-text text-transparent">
                        Let’s Secure Your Business
                    </div>
                    <div className="w-full h-[10%] flex justify-center items-center text-[18px] font-[400]"> Our team will get back to you within 24 hours.</div>
                    <div className="w-full h-[60%] flex justify-between items-center">
                        <img src="./study.png" className="w-[179px] h-[179px]" />
                        <button onClick={()=>setOpen(false)} className="bg-[#1387FB] w-[112px] h-[48px] text-white">Continue</button>
                        <img src="./computer.png" className="w-[159px] h-[130px]" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}