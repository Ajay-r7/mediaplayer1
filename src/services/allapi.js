import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add video
export const addVideoApi = async (reqBody) =>{
   return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

//api to get all video
export const getVideoApi = async () =>{
   return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to delete a video
export const deleteVideoApi = async (id) =>{
   return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to watch history
export const addToHistoryApi = async (reqBody) =>{
   return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

//api to get video from watch history
export const getVideoFromHistory = async () =>{
   return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete a video
export const deleteVideoFromHistory = async (id) =>{
   return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add video to category
export const addCategoryApi = async (reqBody) =>{
   return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//api to get all category
export const allCategoryApi = async () =>{
   return await commonApi('GET',`${serverUrl}/category`,"")
}

//api to delete category
export const deleteCategoryApi = async (id) =>{
   return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to get a video to category
export const AvideoApi = async (id) =>{
   return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

//api to update category
export const updateCategoryApi = async (id, reqBody) =>{
   return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}