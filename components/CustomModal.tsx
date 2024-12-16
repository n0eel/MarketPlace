"use client"
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import React, { ReactNode, SetStateAction } from "react";

interface ModalType {
    children: ReactNode,
    isOpen:boolean,
    isLogin:"login" | "createUser",
    onOpenChange:React.Dispatch<SetStateAction<boolean>>,
    setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser">> ,
}

const CustomModal: React.FC<ModalType> = ({ children, isOpen, onOpenChange, setIsLogin, isLogin }) => {

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader className="flex items-center justify-center gap-5">
                        <p onClick={() => setIsLogin("login")} className={`text-[18px] cursor-pointer ${isLogin == "login" ? "border-b-[2px] border-[#f5a524]" : ""}`}>Login</p>
                        <p onClick={() => setIsLogin("createUser")} className={`text-[18px] cursor-pointer ${isLogin == "createUser" ? "border-b-[2px] border-[#f5a524]" : ""}`}>Create User</p>
                    </ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CustomModal
