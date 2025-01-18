import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { HeaderConstant } from '../constants/messageConstants'
import Link from 'next/link'
import { navigationConstants } from '../constants/NavigationConstants'
const Headers = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>


        <div className='flex gap-4'>

            <MenuItem title='home' address={navigationConstants.home} Icon={AiFillHome}/>
            <MenuItem title='about' address={navigationConstants.about} Icon={BsFillInfoCircleFill}/>
        </div>
        <Link href={navigationConstants.home} className='flex gap-1 items-center'>

            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>{HeaderConstant.Imdb}</span>
            <span className='text-xl hidden sm:inline'>{HeaderConstant.Clone}</span>
        </Link>
    </div>
  )
}

export default Headers