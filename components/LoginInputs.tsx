"use client"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hook/Instance"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import React, { FormEvent, useContext, useState } from "react"

interface LoginType {
  onClose:() => any
}

const LoginInputs:React.FC<LoginType> = ({onClose}) => {
  const {setAccessToken} = useContext(Context)
  const [showPass, setShowPass] = useState<boolean>(false)

  const endContent = (
    <div>
      {showPass ? <Image onClick={() => setShowPass(false)} className="cursor-pointer" style={{ width: "auto", height: "auto" }} src={"/hide.png"} width={22} height={22} alt="show password" priority />
        : <Image onClick={() => setShowPass(true)} className="cursor-pointer" style={{ width: "auto", height: "auto" }} src={"/show.png"} width={22} height={22} alt="show password" priority />
      }
    </div>
  )

  function handleLogin(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
      phone_number: (e.target as HTMLFormElement).phone_number.value,
      password: (e.target as HTMLFormElement).password.value
    }
    instance().post("/auth/sign-in", data).then(res => {
      setAccessToken(res.data.data.tokens)
      onClose()
    })
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
      <Input name="phone_number" size="lg" placeholder="Enter phone number" required type="number" defaultValue="+998" />
      <Input endContent={endContent} name="password" size="lg" placeholder="Enter password" required type={showPass ? "text" : "password"} />
      <Button type="submit" className="w-full font-semibold text-[15px] text-white" size="md" color="warning">Login</Button>
    </form>
  )
}

export default LoginInputs