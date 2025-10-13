import axiosConfig from "./axiosConfig"

export const getUsersData = async({ page, limit }) => {
    try {
        const res = await axiosConfig.get(`/randomusers?page=${page}&limit=${limit}`);
        return res.data.data;
    } catch (error) {
        console.log("Error in getUsersData request", error);
        throw error;
    }
}