import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";


const authOptions = {
    session : {strategy : 'jwt'},
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
}

export default NextAuth(authOptions);


