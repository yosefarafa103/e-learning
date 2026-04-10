"use client"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import clsx from "clsx"
import { useDirection } from "@/hooks/useDirection"

const SearchInput = ({ placeholder, handelChange, name, width }: { handelChange?: () => void, placeholder: string, name: string, width: string }) => {
    const { dir } = useDirection()
    return (
        <section dir={dir} className={`flex items-center gap-1 bg-background rounded-lg border-2 border-solid border-muted my-3 ${clsx(width ? `w-[${width}%]` : "w-[70%] ")}`}>
            <Input name={name} placeholder={placeholder} onChange={handelChange} className={`focus-visible:outline-none`} />
            <span className="flex items-center justify-center text-sm cursor-pointer size-[40px] ">
                <Search />
            </span>
        </section>
    )
}

export default SearchInput