import axios from "axios"


export const axiosCommon = axios.create({
  baseURL: "https://assignment-12-server-lovat.vercel.app",
})
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon