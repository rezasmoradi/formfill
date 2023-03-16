import Header from "@/components/Header"
import Head from "next/head"

function StepByStep() {
    return (
        <>
            <Head>
                <title>Form Fill</title>
                <meta name="description" content="Fill the form in different styles" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='w-full h-auto pt-8 bg-slate-50'>
                <div>
                    <Header />
                    <div className='w-11/12 flex flex-col justify-center items-center mt-8 mx-auto'>
                        <p className='font-bold text-lg text-center pt-2'>تکمیل فرم</p>
                        <form className='w-full flex justify-center flex-wrap items-center my-4 border border-slate-300 rounded-sm'>
                            <fieldset className="w-full flex flex-col">
                                <legend className="font-bold pr-4 pt-4">اطلاعات شخصی</legend>
                                <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        نام
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        نام خانوادگی
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        نام پدر
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        میزان تحصیلات
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        شماره شناسنامه
                                        <input type={'number'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        کد ملی
                                        <input type={'number'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        تاریخ تولد
                                        <input type={'date'} className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        ایمیل
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="w-full flex flex-col mt-4">
                                <legend className="font-bold pr-4 pt-4">اطلاعات مکانی</legend>
                                <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        استان محل سکونت
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        شهر محل سکونت
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        روستا
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        کد پستی
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='w-8/12 flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        نشانی
                                        <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-12'>
                                        پلاک
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="w-full flex flex-col mt-4">
                                <legend className="font-bold pr-4 pt-4">اطلاعات شغلی</legend>
                                <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        استان محل کار
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        شهر محل کار
                                        <div>
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                        </div>
                                    </label>
                                    <label className='w-8/12 flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        نشانی محل کار
                                        <div className="w-full">
                                            <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="w-full flex flex-col mt-4">
                                <legend className="font-bold pr-4 pt-4">اطلاعات مالی</legend>
                                <div className="flex flex-row flex-wrap justify-start mx-4 mb-4">
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        شماره کارت بانکی
                                        <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                    </label>
                                    <label className='flex flex-col justify-start items-start mt-6 px-1 mx-4'>
                                        شماره شبا
                                        <div>
                                            <input className='w-60 h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' />
                                            <span>IR</span>
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default StepByStep