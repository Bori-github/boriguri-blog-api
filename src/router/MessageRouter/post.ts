import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const postMessage = async (req: Request, res: Response) => {
  const {message} = req.query;

  const messageRef = firestore().collection('message');
  messageRef.add({message});

  res.status(200).send('메시지가 추가되었습니다.');
};
