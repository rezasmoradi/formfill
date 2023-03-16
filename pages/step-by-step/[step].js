import Header from "@/components/Header"
import { setUserDataAction } from "@/redux/actions/userAction"
import { selectUserData } from "@/redux/slices/userSlice"
import { wrapper } from "@/redux/store"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function StepByStep({ step }) {

    const user = useSelector(selectUserData)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        father_name: user.father_name,
        edu_degree: user.edu_degree,
        id_number: user.id_number,
        national_code: user.national_code,
        birth_date: user.birth_date,
        email: user.email,
        province: user.province,
        city: user.city,
        village: user.village,
        address: user.address,
        postal_code: user.postal_code,
        plaque: user.plaque,
        job_province: user.job_province,
        job_city: user.job_city,
        job_address: user.job_address,
        card_number: user.card_number,
        shaba_number: user.shaba_number,
    });

    const paths = [
        {
            id: 0,
            name: 'personal',
        },
        {
            id: 1,
            name: 'location',
        },
        {
            id: 2,
            name: 'job',
        },
        {
            id: 3,
            name: 'financial',
        }
    ]

    const idPath = paths.filter(item => item.name === step)[0].id;

    return (
        <>
            <Head>
                <title>Form Fill</title>
                <meta name="description" content="Fill the form in step by step style" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='w-full h-auto pt-8 bg-slate-50'>
                <div>
                    <Header />
                    <div className='relative w-11/12 h-full flex flex-col justify-center items-center mt-8 mx-auto'>
                        <p className='font-bold text-lg text-center pt-2'>تکمیل فرم</p>
                        <div className="flex flex-row items-center mt-4">
                            <div className={`w-16 h-16 border rounded-full text-center pt-2 ${user.first_name && user.email ? 'bg-green-400' : 'bg-slate-100/75'}`}>
                                <span className="text-sm">
                                    اطلاعات شخصی
                                </span>
                            </div>
                            <div className={`w-32 h-2 ${user.first_name && user.email ? 'bg-green-400' : 'bg-slate-200'}`} />
                            <div className={`w-16 h-16 border rounded-full text-center pt-2 ${user.province && user.address ? 'bg-green-400' : 'bg-slate-100/75'}`}>
                                <span className="text-sm">
                                    اطلاعات مکانی
                                </span>
                            </div>
                            <div className={`w-32 h-2 ${user.province && user.address ? 'bg-green-400' : 'bg-slate-200'}`} />
                            <div className={`w-16 h-16 border rounded-full text-center pt-2  ${user.job_province && user.job_address ? 'bg-green-400' : 'bg-slate-100/75'}`}>
                                <span className="text-sm">
                                    اطلاعات شغلی
                                </span>
                            </div>
                            <div className={`w-32 h-2  ${user.job_province && user.job_address ? 'bg-green-400' : 'bg-slate-200'}`} />
                            <div className={`w-16 h-16 border rounded-full text-center pt-2 ${user.card_number && user.shaba_number ? 'bg-green-400' : 'bg-slate-100/75'}`}>
                                <span className="text-sm">
                                    اطلاعات مالی
                                </span>
                            </div>
                        </div>
                        <form className='w-full flex justify-center flex-wrap items-center my-4 border border-slate-300 rounded-sm'>
                            {step === 'personal' && (
                                <fieldset className="w-full flex flex-col">
                                    <legend className="font-bold pr-4 pt-4">اطلاعات شخصی</legend>
                                    <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            نام
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.first_name} onChange={e => { setData({ ...data, first_name: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            نام خانوادگی
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.last_name} onChange={e => { setData({ ...data, last_name: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            نام پدر
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.father_name} onChange={e => { setData({ ...data, father_name: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            میزان تحصیلات
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.edu_degree} onChange={e => { setData({ ...data, edu_degree: e.target.value }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            شماره شناسنامه
                                            <input type={'number'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.id_number} onChange={e => { setData({ ...data, id_number: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            کد ملی
                                            <input type={'number'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.national_code} onChange={e => { setData({ ...data, national_code: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            تاریخ تولد
                                            <input type={'date'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.birth_date} onChange={e => { setData({ ...data, birth_date: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            ایمیل
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.email} onChange={e => { setData({ ...data, email: e.target.value.trim() }) }} />
                                        </label>
                                    </div>
                                </fieldset>
                            )}
                            {step === 'location' && (
                                <fieldset className="w-full flex flex-col mt-4">
                                    <legend className="font-bold pr-4 pt-4">اطلاعات مکانی</legend>
                                    <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            استان محل سکونت
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.province} onChange={e => { setData({ ...data, province: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            شهر محل سکونت
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.city} onChange={e => { setData({ ...data, city: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            روستا
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.village} onChange={e => { setData({ ...data, village: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            کد پستی
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.postal_code} onChange={e => { setData({ ...data, postal_code: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='w-8/12 flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            نشانی
                                            <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.address} onChange={e => { setData({ ...data, address: e.target.value }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-12'>
                                            پلاک
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.plaque} onChange={e => { setData({ ...data, plaque: e.target.value.trim() }) }} />
                                        </label>
                                    </div>
                                </fieldset>
                            )}
                            {step === 'job' && (
                                <fieldset className="w-full flex flex-col mt-4">
                                    <legend className="font-bold pr-4 pt-4">اطلاعات شغلی</legend>
                                    <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            استان محل کار
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_province} onChange={e => { setData({ ...data, job_province: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            شهر محل کار
                                            <div>
                                                <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_city} onChange={e => { setData({ ...data, job_city: e.target.value.trim() }) }} />
                                            </div>
                                        </label>
                                        <label className='w-8/12 flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            نشانی محل کار
                                            <div className="w-full">
                                                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_address} onChange={e => { setData({ ...data, job_address: e.target.value }) }} />
                                            </div>
                                        </label>
                                    </div>
                                </fieldset>
                            )}
                            {step === 'financial' && (
                                <fieldset className="w-full flex flex-col mt-4">
                                    <legend className="font-bold pr-4 pt-4">اطلاعات مالی</legend>
                                    <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            شماره کارت بانکی
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.card_number} onChange={e => { setData({ ...data, card_number: e.target.value.trim() }) }} />
                                        </label>
                                        <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                            شماره شبا
                                            <div>
                                                <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.shaba_number} onChange={e => { setData({ ...data, shaba_number: e.target.value.trim() }) }} />
                                                <span>IR</span>
                                            </div>
                                        </label>
                                    </div>
                                </fieldset>
                            )}
                        </form>
                        <div className="fixed bottom-1 lg:bottom-24 flex flex-row justify-evenly items-center mt-4">
                            <Link hidden={step === 'personal'} href={step === 'personal' ? '#' : paths[idPath - 1].name} className={`w-auto px-2 py-1 border rounded font-semibold mx-4 bg-slate-300`}>رفتن به مرحله قبل</Link>
                            <Link onClick={() => { dispatch(setUserDataAction(data)) }} hidden={step === 'financial'} href={step === 'financial' ? '#' : paths[idPath + 1].name} className="w-auto px-2 py-1 border rounded font-semibold mx-4 bg-slate-300">رفتن به مرحله بعد</Link>
                            {step === 'financial' && (
                                <button className="w-auto px-2 py-1 border rounded font-semibold mx-4 bg-slate-300" onClick={() => { dispatch(setUserDataAction(data)) }}>
                                    ارسال
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => ctx => {

    return {
        props: {
            step: ctx.params.step
        }
    }
})

export default StepByStep