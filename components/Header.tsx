"use client"
import { BasketIcon, DownArrow, HeartIcon, LocationIcon, ScalesIcon, SearchIcon } from '@/public/Icons'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import { Category } from '@/service/Category'

const Header = () => {
  const categoryList = Category()

  return (
    <div>
      <div className='bg-[#EBEFF3] px-[130px] py-[12px]'>
        <ul className='flex justify-between items-center'>
          <div className='flex space-x-[15px] items-center'>
            <li className='text-[14px] text-[#545D6A] flex items-center gap-[11px]'><LocationIcon /> Tashkent</li>
            <li className='text-[14px] text-[#545D6A]'>About Us</li>
            <li className='text-[14px] text-[#545D6A]'>Products</li>
            <li className='text-[14px] text-[#545D6A]'>Contacts</li>
          </div>
          <div className='flex gap-[28px]'>
            <li className='text-[14px] text-[#545D6A]'>+998 (71) 123-45-67</li>
            <li className='text-[14px] text-[#545D6A] flex items-center'><span className='pr-[7px]'>Uz</span><DownArrow /></li>
          </div>
        </ul>
      </div>
      <div className='px-[130px] mt-[30px] items-center'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center cursor-pointer'>
            <Image src={"/MainLogo.svg"} alt='Main Logo' width={70} height={70} />
            <h1 className='text-[36px] font-bold text-[#134E9B] leading-[42px]'>Ashyo</h1>
          </div>
          <div className='flex items-center space-x-[10px]'>
            <button className='py-[14px] px-[25px] bg-[#134E9B] flex items-center text-white rounded-[6px] space-x-[23px]'>
              <span>Kategorya</span>
              <DownArrow />
            </button>
            <label className='flex items-center'>
              <input className='bg-[#EBEFF3] text-black placeholder:#00000033 py-[17px] pl-[26px] w-[460px] rounded-l-[6px] outline-none' type="text" placeholder='What are you looking for?' />
              <button className='bg-[#134E9B] py-[19px] px-[20px] text-white rounded-[6px] left-[455px]'>
                <SearchIcon />
              </button>
            </label>
          </div>
          <div className='flex items-center space-x-[15px]'>
            <Button className='flex items-center w-[50px] h-[48px] bg-[#EBEFF3] p-0' radius='sm'>
              <ScalesIcon />
            </Button>
            <Button className='flex items-center w-[50px] h-[48px] bg-[#EBEFF3] p-0' radius='sm'>
              <HeartIcon />
            </Button>
            <Button className='flex items-center w-[50px] h-[48px] bg-[#EBEFF3] p-0' radius='sm'>
              <BasketIcon />
            </Button>
            <Login />
          </div>
        </div>
      </div>
      <div>
        <ul className='flex items-center px-[130px] justify-between mt-[30px]'>
          {categoryList.map(item => {
            return (
                <li className='text-[16px] text-[#545D6A]' key={item.id}>{item.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header