import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPosts = async (limit) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/?limit=${limit}`)
    return data.filter((x) => x.id <= limit);
}

const usePosts = (limit) => useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
})

export { usePosts, fetchPosts }