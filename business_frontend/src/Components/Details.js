import { useState } from "react"
import { postData } from "../BackendService"
import Popup from "./Popup"

export default function Details() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    const [term, setTerm] = useState('')
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false)

    const handleSubmit = async () => {
        let newErrors = {};

        if (!firstName) newErrors.firstName = true;
        if (!lastName) newErrors.lastName = true;
        if (!email) newErrors.email = true;
        if (!phone) newErrors.phone = true;
        if (!service) newErrors.service = true;
        if (!message) newErrors.message = true;
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            const res = await postData('business/submit_data', { firstname: firstName, lastname: lastName, email, phone, service, message, term })
            if (res.status) {
                setOpen(true)
            } else {
                alert('fail');
            }
        }
    }

    return (<>
        {open && <Popup open={open} setOpen={setOpen} />}
        <div className="w-full md:h-[935px] h-[1300px] bg-[linear-gradient(179.22deg,#E5F5FF_16.4%,#8BD1FF_60.42%,#E5F5FF_97.72%)] flex justify-center items-center relative ">
            <div className="w-[90%] h-[80%] flex md:flex-row flex-col">
                <div className="md:w-1/2 w-full">
                    <div className="text-[16px] font-[600] w-full md:h-[3%] h-8">Contact Us</div>
                    <div className="md:text-[48px] text-[20px] md:font-bold font-semibold w-full md:h-[10%] h-15 bg-[linear-gradient(114.44deg,#3890C9_3.14%,#2B79AC_56.54%)] bg-clip-text text-transparent">Let’s Secure Your Business</div>
                    <div className="md:text-[18px] font-[400] w-full md:h-[10%] h-24 flex items-end">Have questions about our services or need a custom security solution? Fill out the form and our team will get back to you within 24 hours.</div>
                    <div className="md:w-1/2 w-full h-[120px] mt-8">
                        <div className="w-full h-1/3 flex items-center gap-x-3">
                            <img src="./mail.png" className="w-[24px] " /> <u>email@gmail.com</u>
                        </div>
                        <div className="w-full h-1/3 flex items-center gap-x-3">
                            <img src="./telephone.png" className="w-[24px] h-[24px] " /> <u>+1 (555) 000-0000</u>
                        </div>
                        <div className="w-full h-1/3 flex items-center gap-x-3">
                            <img src="./location.png" className="w-[24px] h-[24px] " /> 123 Sample St, Sydney NSW 2000 AU
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="w-full h-[80px] flex justify-between">
                        <div className="w-[48%] h-full">
                            <div className="w-full h-[32px]">First Name</div>
                            <div className={`w-full h-[48px] flex justify-center items-center bg-white border-2 ${errors.firstName && firstName.length == 0 ? 'border-red-500' : 'border-black'}`}>
                                <input onChange={(e) => { setFirstName(e.target.value) }} className="w-[90%] h-[90%] outline-none" />
                            </div>
                            {errors.firstName && firstName.length == 0 ? <label className="text-red-500 md:font-medium">Please Enter First Name</label> : <></>}
                        </div>
                        <div className="w-[48%] h-full">
                            <div className="w-full h-[32px]">Last Name</div>
                            <div className={`w-full h-[48px] flex justify-center items-center bg-white border-2 ${errors.lastName && lastName.length == 0 ? 'border-red-500' : 'border-black'}`}>
                                <input onChange={(e) => { setLastName(e.target.value) }} className="w-[90%] h-[90%] outline-none" />
                            </div>
                            {errors.lastName && lastName.length == 0 ? <label className="text-red-500 md:font-medium">Please Enter Last Name</label> : <></>}
                        </div>
                    </div>
                    <div className="w-full h-[80px] flex justify-between mt-6">
                        <div className="w-[48%] h-full">
                            <div className="w-full h-[32px]">Email</div>
                            <div className={`w-full h-[48px] flex justify-center items-center bg-white border-2 ${errors.email && email.length == 0 ? 'border-red-500' : 'border-black'}`}>
                                <input onChange={(e) => { setEmail(e.target.value) }} className="w-[90%] h-[90%] outline-none" />
                            </div>
                            {errors.email && email.length == 0 ? <label className="text-red-500 md:font-medium">Please Enter Email</label> : <></>}
                        </div>
                        <div className="w-[48%] h-full">
                            <div className="w-full h-[32px]">Phone Number</div>
                            <div className={`w-full h-[48px] flex justify-center items-center bg-white border-2 ${errors.phone && phone.length == 0 ? 'border-red-500' : 'border-black'}`}>
                                <input onChange={(e) => { setPhone(e.target.value) }} className="w-[90%] h-[90%] outline-none" />
                            </div>
                            {errors.phone && phone.length == 0 ? <label className="text-red-500 md:font-medium">Please Enter Phone Number</label> : <></>}
                        </div>
                    </div>
                    <div className="w-full md:h-[134px] h-[200px] md:mt-6 mt-10">
                        <div className="w-full h-[30%]">Service Type?</div>
                        <div className="w-full h-[70%] flex flex-wrap">
                            <div className="w-[50%] gap-x-3 h-[24px] flex items-center font-[600] text-sm md:text-base"><input type="radio" name='service' className="w-[18px] h-[18px]" onChange={(e) => { setService(e.target.value) }} value='Web Application Security Audits' />Web Application Security Audits</div>
                            <div className="w-[50%] gap-x-3 h-[24px] flex items-center font-[600] text-sm md:text-base"><input type="radio" name='service' className="w-[18px] h-[18px]" onChange={(e) => { setService(e.target.value) }} value='PCI DSS Gap Assessments' />PCI DSS Gap Assessments</div>
                            <div className="w-[50%] gap-x-3 h-[24px] flex items-center font-[600] text-sm md:text-base"><input type="radio" name='service' className="w-[18px] h-[18px]" onChange={(e) => { setService(e.target.value) }} value='Cloud Security Assessments' />Cloud Security Assessments</div>
                            <div className="w-[50%] gap-x-3 h-[24px] flex items-center font-[600] text-sm md:text-base"><input type="radio" name='service' className="w-[18px] h-[18px]" onChange={(e) => { setService(e.target.value) }} value='Security Awareness Training' />Security Awareness Training</div>
                            {errors.service && service.length == 0 ? <label className="text-red-500 font-medium">Please Choose Service</label> : <></>}
                        </div>
                    </div>
                    <div className="w-full h-[212px] mt-6">
                        <div className="w-full h-[24px] flex text-[16px] mb-2">Message</div>
                        <div className={`w-full h-[185px] border-2 border-black box-border ${errors.message && message.length == 0 ? 'border-red-500' : 'border-black'}`}>
                            <div className="w-full h-full p-4 bg-white box-border">
                                <textarea onChange={(e) => { setMessage(e.target.value) }} className="w-full outline-none h-full" placeholder="Type your message..." />
                            </div>
                            {errors.message && message.length == 0 ? <label className="text-red-500 font-medium">Please Enter Message</label> : <></>}
                        </div>
                    </div>
                    <div className="w-full h-[40px] mt-6 flex items-center relative z-20 md:font-normal font-semibold">
                        <input
                            checked={term === "Accepted"}
                            onChange={(e) => setTerm(e.target.checked ? "Accepted" : null)}
                            type="checkbox"
                            className="w-[18px] h-[18px] mr-3 accent-blue-500 border-2 border-black"
                        />
                        I accept the <span className="underline ml-1">Terms</span>
                    </div>
                    <button onClick={handleSubmit} className="w-[148px] relative z-20 h-[48px] font-[400] text-[16px] bg-[#1387FB] mt-5 text-white shadow-[0px_6px_12px_rgba(0,0,0,0.1)]">Book your call</button>
                </div>
            </div>
            <img src="./trust.png" className="md:w-[340px] w-32 absolute bottom-0 md:left-20 right-8 z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[linear-gradient(180deg,#9DD8FE_27.27%,#5E8198_142.42%)] [clip-path:polygon(4%_0%,96%_0%,100%_100%,0%_100%)]">
            </div>
        </div>
    </>)
}