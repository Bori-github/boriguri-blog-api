import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(`${process.env.PORT}`) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
