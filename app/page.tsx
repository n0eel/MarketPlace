"use client"
import Header from "@/components/Header";
import { BasketIcon, HeartIcon, ScalesIcon } from "@/public/Icons";
import { Product } from "@/service/Product";
import Image from "next/image";

export default function Home() {
  const products = Product()
  console.log(products)

  return (
    <>
      <Header />
      <h1 className="text-[32px] font-bold pl-[130px] mt-[50px] mb-[30px]">Most popular product</h1>
      <div className="flex space-x-[30px] overflow-x-auto">
        {products.map(item => {
          return (
            <div className="flex flex-col" key={item.id}>
              <Image className="bg-[#EBEFF3] rounded-[8px] !w-[273px] h-[280px] max-w-[280px]" src={"/MainLogo.svg"} alt="Product Image" width={280} height={280} />
              <p className="text-[#545D6A] text-[14px] mt-[16px]">{item.name}</p>
              <div className="gap-[10px] flex items-center mt-[28px]">
                <strong className="text-[#0A1729] text-[20px]">{item.price}$</strong>
                <button className="border-[1px] border-[#EBEFF3] rounded-[6px] text-[#545D6A] py-[10px] px-[14px]">
                  <ScalesIcon />
                </button>
                <button className="bg-[#134E9B] text-white px-[14px] py-[10px]">  
                  <BasketIcon/>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
