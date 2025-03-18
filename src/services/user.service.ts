import { UserLogIn,UserLoginResponse } from "../interfaces";
import { UserDocument,UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {

    public async findByEmail(email: string): Promise<UserDocument | null> {
        try{
            const user = await UserModel.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    }
    
    public async login(userLogin: UserLogIn): Promise<UserLoginResponse | undefined>{
        try {
            const userExists: UserDocument | null = await this.findByEmail(userLogin.email);
            if (userExists === null){
                throw new ReferenceError("Not Authorized");
            }
            const isMatch: boolean = await bcrypt.compare(userLogin.password, userExists.password);  
            if (!isMatch)
                throw new ReferenceError("Not Authorized");
            return {
                user: {
                    name: userExists.name,
                    email: userExists.email,
                    roles: userExists.roles,
                    token: this.generateToken(userExists.email)
                },
                message: {
                    contents: "Authorized",
                    code: 200
                }
            }
        } catch (error) {
            
        }

    }

    public generateToken(email: string): string {
        try {
            return jwt.sign({user: {email}}, process.env.JWT_SECRET || "secret", {expiresIn: "10m"});
        } catch (error) {
            throw error;
        }
    }

}

export const userService = new UserService();
