import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId:'Ov23lijPtiyILPNIK3Bs',
            clientSecret: 'd1399f80f1c8aed00dab9b03106dce0dbfe2974c'
        }),
       
    ]
}

export default NextAuth(authOptions);