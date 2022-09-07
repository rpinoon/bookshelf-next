import axios from "axios"
import { Token } from "../types"

export const getDiscover = async ({ token }: Token) => {
  return await axios({
    url: "http://127.0.0.1:3001/api/discover",
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      console.log(error)
    })
}
