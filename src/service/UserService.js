import { API, FAPI } from "../config/axiosConfig"




const getSingleUser = (id)=>{
  return API.get(`/users/${id}`)
}

const UploadImage = (id,values)=>{
  return FAPI.put(`/users/update/${id}`,values);
}
const updateUser = (id,values)=>{
  return API.put(`/users/update/${id}`,values);
}


const UserService = { 
  getSingleUser,
  UploadImage,
  updateUser,
};

export default UserService;
