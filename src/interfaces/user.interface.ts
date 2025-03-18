export interface UserLogIn{
    email: string;
    password: string;
}

export interface UserLoginResponse{
    user: {
        name: string;
        email: string;
        roles: string[];
        token: string;
    };
    message: {
        contents: string;
        code: number;
    };
}