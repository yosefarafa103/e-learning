import { Search } from "lucide-react"
import { Input } from "../ui/input"
import clsx from "clsx"

const SearchInput = ({ placeholder, handelChange, name, width }: { handelChange?: () => void, placeholder: string, name: string, width: string }) => {
    return (
        <section className={`flex items-center gap-1 bg-[#eee] rounded-lg my-3 ${clsx(width ? `w-[${width}%]` : "w-[70%] ")}`}>
            <span className="flex items-center justify-center text-sm cursor-pointer size-[40px] ">
                <Search />
            </span>
            <Input name={name} placeholder={placeholder} onChange={handelChange} className={`focus-visible:outline-none`} />
        </section>
    )
}

export default SearchInput