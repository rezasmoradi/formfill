import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {

    const { route } = useRouter()

    return (
        <div className='w-full flex justify-around items-center'>
            <Link href={'/'} className={`outline-none ${route === '/' ? 'text-gray-900 font-bold text-lg' : 'text-gray-600'}`}>بدون سبک</Link>
            <Link href={'/scroll-style'} className={`outline-none ${route === '/scroll-style' ? 'text-gray-900 font-bold text-lg' : 'text-gray-600'}`}>پیمایشی</Link>
            <Link href={'/step-by-step/personal'} className={`outline-none ${route === '/step-by-step/[step]' ? 'text-gray-900 font-bold text-lg' : 'text-gray-600'}`}>مرحله به مرحله</Link>
            <Link href={'/solution/personal'} className={`outline-none ${route === '/solution/[step]' ? 'text-gray-900 font-bold text-lg' : 'text-gray-600'}`}>راه حل</Link>
        </div>
    )
}

export default Header