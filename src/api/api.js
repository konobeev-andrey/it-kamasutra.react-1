import * as axios from "axios";

const instansce = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY":"9eae2ef4-3b92-4df8-8c8d-d83896d7b549"
    },
    baseURL:`https://social-network.samuraijs.com/api/1.0/`
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10 ) {
        return instansce.get(`users?page=${currentPage}&count=${pageSize}`).then(resp => resp.data)
    },
    unFollow(id){
        return instansce.delete(`follow/`+ id).then(resp => resp.data)
    },
    follow(id) {
        return instansce.post(`follow/`+ id).then(resp => resp.data)
    }
}
export const profileApi = {
    getUser(userId){
        return  instansce.get(`profile/` + userId).then(resp => resp.data)
    },
    getStatus(userId){
        return  instansce.get(`profile/status/` + userId).then(resp => resp.data)
    },
    updateStatus(status){
        return  instansce.put(`profile/status`, {status: status}).then(resp => resp.data)
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)
        return  instansce.put(`profile/photo`, formData, {
            headers:{
                    'Content-type': 'multipart/form-data'
            }
        }).then(resp => resp.data)
    },
    saveProfile(profile){
        return  instansce.put(`profile`, profile).then(resp => resp.data)
    }
}
export const authApi = {
    me(){
        return instansce.get(`auth/me`).then(resp =>  resp.data)
    },
    login (email, password, rememberMe = false){
        return instansce.post(`auth/login`,{email, password, rememberMe}).then(resp =>  resp.data)
    },
    logout (){
        return instansce.delete(`auth/login`).then(resp =>  resp.data)
    }
}