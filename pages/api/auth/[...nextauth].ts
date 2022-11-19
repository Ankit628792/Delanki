import { DocumentDefinition } from "mongoose";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectDB from "../../../db/connectDB";
import { UserDocument } from "../../../db/models/user";
import { createUser, getUserFromEmail } from "../../../db/service/user.service";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.google_client_id as string,
      clientSecret: process.env.google_client_secret as string,
    }),
    // ...add more providers here
  ],
  //creating your own customized sigin page
  pages: {
    signIn: '/signin'
  },

  callbacks: {
    async signIn({ user }) {
      await connectDB()
      let isExist = await getUserFromEmail(user.email as string)
      if (!isExist) {
        return await createUser(user as DocumentDefinition<UserDocument>);
      }
      return true
    },
    async session({ session }) {
      await connectDB()
      let isExist = await getUserFromEmail(session?.user?.email as string)
      if (isExist)
        session.user = isExist;
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      return session;
    }
  },
})