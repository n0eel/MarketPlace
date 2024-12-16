"use client"
import { instance } from "@/hook/Instance"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import React, { FormEvent, SetStateAction, useState } from "react"

interface CreateUserType {
  setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser">>
}

const CreateUsersInputs:React.FC<CreateUserType> = ({setIsLogin}) => {
  const [showPass, setShowPass] = useState<boolean>(false)

  const endContent = (
    <div>
      {showPass ? <Image onClick={() => setShowPass(false)} className="cursor-pointer" style={{ width: "auto", height: "auto" }} src={"/hide.png"} width={22} height={22} alt="show password" priority />
        : <Image onClick={() => setShowPass(true)} className="cursor-pointer" style={{ width: "auto", height: "auto" }} src={"/show.png"} width={22} height={22} alt="show password" priority />
      }
    </div>
  )

  function handelCreateUser(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
      first_name: (e.target as HTMLFormElement).first_name.value,
      last_name: (e.target as HTMLFormElement).last_name.value,
      phone_number: (e.target as HTMLFormElement).phone_number.value,
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value
    }
    instance().post("/auth/admin/sign-up", data).then(() => {
      setIsLogin("login")
    })

  }

  return (
    <form onSubmit={handelCreateUser} className="space-y-4" autoComplete="off">
      <Input name="first_name" size="lg" placeholder="Enter first name" required />
      <Input name="last_name" size="lg" placeholder="Enter last name" required />
      <Input name="phone_number" size="lg" placeholder="Enter phone number" required type="number" defaultValue="+998" />
      <Input name="email" size="lg" placeholder="Enter email" required type="email" />
      <Input endContent={endContent} name="password" size="lg" placeholder="Enter password" required type={showPass ? "text" : "password"} />
      <Button type="submit" className="w-full font-semibold text-[15px] text-white" size="md" color="warning">Create User</Button>
    </form>
  )
}

export default CreateUsersInputs