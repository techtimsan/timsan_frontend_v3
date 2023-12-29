import toast from "react-hot-toast";
import { BASE_API_URL } from "../constants";

/**
 * News
 */
export const fetchAllNews = async () => {
  try {
  } catch (error: any) {}
}

export const fetchNewsByTitle = async () => {
  try {
  } catch (error: any) {}
}

/**
 * Broadcast
 */
export const fetchAllBroadcast = async () => {
  try {
  } catch (error: any) {}
}

export const fetchBroadcastByTitle = async () => {
  try {
  } catch (error: any) {}
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const deleteUserById  = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/v1/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const resp = res.json()
    console.log(resp)
    return resp
  } catch (error: any) {
    toast.error(error.message)
    return error.message
  }
}