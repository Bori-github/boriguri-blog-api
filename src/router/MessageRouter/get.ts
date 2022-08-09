import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const getMessage = async (req: Request, res: Response) => {
  const messageRef = firestore().collection('message');
  const snapshot = await messageRef.get();
  const data = snapshot.docs.map(doc => {
    return doc.data();
  });

  res.status(200).send(data);
};
