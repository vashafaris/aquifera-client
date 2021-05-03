import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../utils/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end('error');
    return;
  }

  const db = await connectToDatabase();

  db.collection('emails').insertOne(req.body, function (err, res) {
    if (err) throw err;
  });

  res
    .status(201)
    .json({ status: 'Success', message: 'Email Successfully Inserted' });
};
