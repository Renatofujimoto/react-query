import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchQuery = async () => {
    const { data } = await axios.get("http://localhost:4000/superheroes")
    return data;
}

const useQueryExample = () => useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => fetchQuery(),
    keepPreviousData: true,
})

export { useQueryExample, fetchQuery }