import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password } = data;

    if (!email || !email.includes('@') || !password || password.trim().length < 7) {
      res.status(422).json({
        message: '비밀번호는 최소 7자리 이상이여야 합니다.',
      });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db('auth');

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: '이미 존재하는 이메일입니다.' });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: '아이디가 생성되었습니다.' });
    client.close();
  }
};

export default handler;
