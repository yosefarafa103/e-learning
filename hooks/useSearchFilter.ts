import { useMemo, useState } from "react";

type FilterFn<T> = (item: T, filter: string) => boolean;

export function useSearchFilter<T>(
    data: T[],
    searchKeys: (keyof T)[],
    filterFn?: FilterFn<T>
) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const result = useMemo(() => {
        return data.filter((item) => {
            const matchesSearch = searchKeys.some((key) =>
                String(item[key]).toLowerCase().includes(search.toLowerCase())
            );
            const matchesFilter =
                filter === "all" ? true : filterFn ? filterFn(item, filter) : true;
            return matchesSearch && matchesFilter;
        });
    }, [data, search, filter, searchKeys, filterFn]);

    return {
        search,
        setSearch,
        filter,
        setFilter,
        result,
    };
}