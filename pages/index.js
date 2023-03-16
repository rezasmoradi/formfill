import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from '@/redux/slices/userSlice'
import { useState } from 'react'
import { setUserDataAction } from '@/redux/actions/userAction'


export default function Home() {


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
  })

  return (
    <>
      <Head>
        <title>Form Fill</title>
        <meta name="description" content="Fill the form in free styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-auto pt-4 bg-slate-50'>
        <div>
          <Header />
          <div className='w-11/12 flex flex-col justify-center items-center mt-8 mx-auto border border-slate-300 rounded-sm'>
            <p className='font-bold text-lg text-center pt-2'>تکمیل فرم</p>
            <form className='w-full flex justify-start flex-wrap px-8 my-4'>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                نام
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.first_name} onChange={e => { setData({ ...data, first_name: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                نام خانوادگی
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.last_name} onChange={e => { setData({ ...data, last_name: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                نام پدر
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.father_name} onChange={e => { setData({ ...data, father_name: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                میزان تحصیلات
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.edu_degree} onChange={e => { setData({ ...data, edu_degree: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                شماره شناسنامه
                <input type={'number'} className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.id_number} onChange={e => { setData({ ...data, id_number: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                کد ملی
                <input type={'number'} className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.national_code} onChange={e => { setData({ ...data, national_code: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                تاریخ تولد
                <input type={'date'} className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.birth_date} onChange={e => { setData({ ...data, birth_date: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                ایمیل
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.email} onChange={e => { setData({ ...data, email: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                استان محل سکونت
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.province} onChange={e => { setData({ ...data, province: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                شهر محل سکونت
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.city} onChange={e => { setData({ ...data, city: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                روستا
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.village} onChange={e => { setData({ ...data, village: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                کد پستی
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.postal_code} onChange={e => { setData({ ...data, postal_code: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-8/12 flex flex-col justify-start items-start mt-4 px-1 mx-4 lg:ml-12'>
                نشانی
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.address} onChange={e => { setData({ ...data, address: e.target.value }) }} />
              </label>
              <label className='w-full md:w-auto flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                پلاک
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.plaque} onChange={e => { setData({ ...data, plaque: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                استان محل کار
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_province} onChange={e => { setData({ ...data, job_province: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                شهر محل کار
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_city} onChange={e => { setData({ ...data, job_city: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-8/12 flex flex-col justify-start items-start mt-4 px-1 mr-4 mx-4 lg:ml-12'>
                نشانی محل کار
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.job_address} onChange={e => { setData({ ...data, job_address: e.target.value }) }} />
              </label>
              <label className='w-full md:w-80 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
                شماره کارت بانکی
                <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.card_number} onChange={e => { setData({ ...data, card_number: e.target.value.trim() }) }} />
              </label>
              <label className='w-full md:w-80 flex flex-col justify-start items-start mt-4 px-1 mx-4 lg:mx-24'>
                شماره شبا
                <div className='w-full flex flex-row justify-start items-center'>
                  <input className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none' value={data.shaba_number} onChange={e => { setData({ ...data, shaba_number: e.target.value.trim() }) }} />
                  <span>IR</span>
                </div>
              </label>
            </form>
            <button className="w-40 h-10 px-2 py-2 my-4 bg-slate-200 rounded" onClick={() => { dispatch(setUserDataAction(data)) }}>ارسال</button>
          </div>
        </div>
      </main>
    </>
  )
}
