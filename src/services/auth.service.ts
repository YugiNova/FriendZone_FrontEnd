import axios from "axios"

class AuthService {
    private baseUrl:string

    constructor(){
        this.baseUrl = "http://127.0.0.1:8000/api/auth"
    }

    public login = async (email:string,password:string) => {
        let result = {}
        try {
            result =  await axios.post(`${this.baseUrl}/login`,{email,password},{
                withCredentials:true,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            return result
        } catch (error:any) {
            throw error.response
        }
    }

    public checkLogin = async () => {
        let result = {}
        try {
            result =  await axios.get(`${this.baseUrl}/checkLogin`,{
                withCredentials:true,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            return result
        } catch (error:any) {
            throw error.response
        }
    }

    public logout = async () => {
        try {
            let result =  await axios.get(`${this.baseUrl}/logout`,{
                withCredentials:true,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            return result
        } catch (error:any) {
            throw error.response
        }
    }
}

export default AuthService
