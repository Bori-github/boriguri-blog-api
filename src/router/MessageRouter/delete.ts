import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const deleteMessage = async (req: Request, res: Response) => {
  const {messageId} = req.query;

  if (!messageId) {
    res.status(400).send('messageId는 필수값 입니다.');
    return;
  }

  const messageRef = firestore().collection('message');
  await messageRef.doc(`${messageId}`).delete();

  res.status(200).send('메시지가 삭제되었습니다.');
};
