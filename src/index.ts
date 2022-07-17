import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {firestore} from 'firebase-admin';
import {initializeApp} from 'firebase-admin/app';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

initializeApp();

app.get('/', (req: Request, res: Response) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.post('/message', async (req: Request, res: Response) => {
  const messageRef = firestore().collection('message');
  messageRef.add({message: 'hello boriguri!'});
  res.status(200).send('메시지가 추가되었습니다.');
});

const port = parseInt(`${process.env.PORT}`) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
