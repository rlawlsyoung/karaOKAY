import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

interface CredentialsType {
  email: string;
  password: string;
}

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    Providers.Credentials({
      async authorize(credentials: CredentialsType | Record<string, string>) {
        const client = await connectToDatabase();

        const usersCollection = client.db('auth').collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('유저를 찾을 수 없습니다.');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error('로그인 할 수 없습니다.');
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
});
