import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, selectUserInputs } from '@/redux/slices/userSlice'
import { useRef, useState } from 'react'
import { setUserDataAction, setUserInputAction } from '@/redux/actions/userAction'
import TextField from '@/components/TextField'
import Modal from '@/components/Modal'


export default function Home() {

  const user = useSelector(selectUserData)
  const userInputs = useSelector(selectUserInputs)
  const [inputType, setInputType] = useState('text')
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [titleField, setTitleField] = useState('')
  const [titleEnField, setTitleEnField] = useState('')
  const [active, setActive] = useState(true)
  const [defaultValue, setDefaultValue] = useState('')
  const [inputs, setInputs] = useState(userInputs)
  const [data, setData] = useState(user)

  return (
    <>
      <Head>
        <title>Form Fill</title>
        <meta name="description" content="Fill the form in free style" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-auto pt-4 bg-slate-50'>
        <div>
          <Header />
          <div className='w-11/12 flex flex-col justify-center items-center mt-8 mx-auto border border-slate-300 rounded-sm'>
            <p className='font-bold text-lg text-center pt-2'>تکمیل فرم</p>
            <button onClick={() => { setOpen(true); setDefaultValue('') }} className='w-auto h-10 bg-white border-2 border-orange-400 px-2 py-1 rounded mt-3'>افزودن فیلد</button>
            <form onSubmit={e => { e.preventDefault() }} className='w-full flex justify-start flex-wrap px-8 my-4'>
              {inputs.map((item, index) => {
                return (
                  <TextField key={index} type={item.type} disabled={item.disabled} label={item.label} value={item.value ? item.value : data[item.key]} onChange={e => { setData({ ...data, [item.key]: e.target.value }) }} />
                )
              })}
            </form>
            <button className="w-40 h-10 px-2 py-2 my-4 bg-slate-200 rounded" onClick={() => { dispatch(setUserDataAction(data)); dispatch(setUserInputAction(inputs)) }}>ارسال</button>
          </div>
          <Modal open={open} onClose={() => { setOpen(false) }} className='pb-4'>
            <div className='w-full flex flex-row justify-center items-center flex-wrap'>
              <TextField label='عنوان فیلد' placeholder='سن' onChange={e => { setTitleField(e.target.value) }} />
              <TextField label='عنوان ذخیره‌سازی فیلد (انگلیسی)' placeholder='age' onChange={e => { setTitleEnField(e.target.value) }} />
              <label className='w-full md:w-60 mt-1.5 px-1 mx-3'>نوع ورودی
                <select defaultValue={inputType} onChange={e => { setInputType(e.target.value) }} className='w-full md:w-60 border outline-none py-2.5 flex flex-col justify-center items-center mt-2'>
                  <option value={'text'}>متن</option>
                  <option value={'number'}>شماره</option>
                  <option value={'date'}>تاریخ</option>
                  <option value={'file'}>فایل</option>
                </select>
              </label>
              <TextField label='مقدار پیشفرض' onChange={e => { setDefaultValue(e.target.value) }} />
              <div className='w-full md:w-60 flex flex-col justify-center items-center mt-4 px-1 mx-4'>
                <label htmlFor='active' className='select-none flex flex-row justify-start items-center'>فعال
                  <input id='active' type='checkbox' checked={active} onChange={e => { setActive(e.target.checked); }} />
                </label>
              </div>
              <div className='w-full flex flex-row justify-center items-center mt-6 mb-2'>
                <button onClick={() => {
                  setInputs([...inputs, {
                    label: titleField,
                    disabled: !active,
                    value: defaultValue,
                    type: inputType,
                    key: titleEnField
                  }])
                  setTitleField('')
                  setTitleEnField('')
                  setOpen(false)
                }} className='w-auto px-4 py-1 bg-orange-400 rounded'>ایجاد فیلد</button>
              </div>
            </div>
          </Modal>
        </div>
      </main>
    </>
  )
}
