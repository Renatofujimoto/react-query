/* eslint-disable no-restricted-globals */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addData = async (name) => {
    return axios.post("http://localhost:4000/superheroes", name)
}

const useAddData = () => {
    return useMutation({
        mutationFn: addData,
        onSuccess: async () => {
            console.log("Successfully created")
        },
        onError: async () => {
            console.log("Error creating")
        }
    });
}

export { addData, useAddData } 