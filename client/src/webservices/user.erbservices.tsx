import axios, { AxiosResponse } from "axios";

const BASE_URL = `http://localhost:3000/api/v1`;

interface RegisterUserResponse {
  // Define the structure of the response data here if needed
}

interface RegisterUserData {
    // Define the structure of the data to be sent in the request
  }

export const registerUser = async (data:RegisterUserData): Promise<AxiosResponse<RegisterUserResponse>> => {
  try {
    const res = await axios.post<RegisterUserResponse>(`${BASE_URL}/user`, data);
    if (res.status < 300) {
      return res;
    } else {
      throw new Error("Something went wrong");
    } 
  } catch (err: any) {
    throw new Error(err.message);
  }
}; 	