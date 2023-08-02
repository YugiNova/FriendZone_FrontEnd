import axios from "axios";

class UserService {
    private baseUrl: string;

    constructor() {
        this.baseUrl =  process.env.REACT_APP_SERVER_URL_LARAVEL+'/api/user'
    }

    public getProfile = async (slug:string) => {
        try {
            let result = await axios.get(`${this.baseUrl}/profile/${slug}`,{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public updateColor = async (color:string,slug:string) => {
        try {
            let result = await axios.patch(`${this.baseUrl}/profile/${slug}/color`,{color},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }

    public updateTheme = async (theme:string,slug:string) => {
        try {
            let result = await axios.patch(`${this.baseUrl}/profile/${slug}/theme`,{theme},{
                withCredentials:true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            return result.data
        } catch (error:any) {
            throw error.response.data
        }
    }
}

export default UserService;
