import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPosts = async (page = 0) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return data;
}

const usePosts = (page) => useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,
})

export { usePosts, fetchPosts }