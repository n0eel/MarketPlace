"use client"
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'
import CustomModal from './CustomModal'
import { useDisclosure } from '@nextui-org/modal';
import LoginInputs from './LoginInputs';
import CreateUsersInputs from './CreateUsersInputs';
import { ProfileIcon } from '@/public/Icons';

const Login = () => {
    const [isLogin, setIsLogin] = useState<"login" | "createUser">("login")
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div>
        <Button className='flex items-center w-[50px] h-[48px] bg-[#EBEFF3] p-0 text-black' onPress={onOpen}>
          <ProfileIcon/>
        </Button>
        <CustomModal isLogin={isLogin} setIsLogin={setIsLogin} isOpen={isOpen} onOpenChange={onOpenChange}>
            {isLogin == "login" ? <LoginInputs onClose={onClose}/> : <CreateUsersInputs setIsLogin={setIsLogin}/>}
        </CustomModal>
    </div>
  )
}

export default Login