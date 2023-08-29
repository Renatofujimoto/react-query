/* eslint-disable arrow-body-style */
import { useMutation } from "@tanstack/react-query";

const addData = (text) => {
    return axios.post("/api/data", { text })
}

const useAddData = () => {
    return useMutation({
        mutationFn: addData,
    });
}

export { addData, useAddData } 