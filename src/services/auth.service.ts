import axios from "axios";

interface RegisterUser {
    first_name: string;
    last_name: string;
    display_name: string;
    nickname:string;
    email: string;
    password: string;
    confirm: string;
    dob: Date;
    gender: string;
}
class AuthService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://127.0.0.1:8000/api/auth";
    }

    public login = async (email: string, password: string) => {
        let result = {};
        try {
            result = await axios.post(
                `${this.baseUrl}/login`,
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public checkLogin = async () => {
        let result = {};
        try {
            result = await axios.get(`${this.baseUrl}/checkLogin`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public logout = async () => {
        try {
            let result = await axios.get(`${this.baseUrl}/logout`, {
                withCredentials: true,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public findEmail = async (email: string) => {
        try {
            let result = await axios.post(
                `${this.baseUrl}/password/find-email`,
                { email },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public register = async (data: RegisterUser) => {
        try {
            let {
                first_name,
                last_name,
                display_name,
                nickname,
                email,
                password,
                dob,
                gender,
            } = data;
            let result = await axios.post(
                `${this.baseUrl}/register`,
                {
                    first_name,
                    last_name,
                    display_name,
                    nickname,
                    email,
                    password,
                    dob,
                    gender,
                },
                {
                    withCredentials: true,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            return result;
        } catch (error: any) {
            throw error.response;
        }
    };

    public sendVerificationEmail = async () => {
        axios.get(`${this.baseUrl}/email/verify`,{
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(res=>{console.log(res.data.message)}).catch(err=>{})
    }

    public removeCookie = async () => {
        axios.get(`${this.baseUrl}/removeCookie`,{
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(res=>{console.log(res.data.message)}).catch(err=>{})
    }
}

export default AuthService;