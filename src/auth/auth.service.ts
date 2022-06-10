import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { hello: "iam signed up" };
    }

    signin() {
        return "iam signed in";
    }
}