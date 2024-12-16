"use client"
import { instance } from "@/hook/Instance";
import { useEffect, useState } from "react"


interface CategoryType {
  id: number,
  name: string,
  createdAt?: string,
  lastUpdateAt?: string,
}


export const Category = () => {
    const [data, setData] = useState<CategoryType[]>([])


  useEffect(() => {
      instance().get("/category/search").then(res => {
        setData(res.data.data.categories.map((item:any) => ({id:item.id, name:item.name})))
      })
  }, [])
    return data
}