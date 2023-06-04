import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://rlawlsyoung:1q2w3e4r@karaokaycluster.q0poe6i.mongodb.net/?retryWrites=true&w=majority',
  );

  return client;
}
