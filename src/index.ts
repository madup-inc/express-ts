import express from 'express';
import { json as jsonParser } from 'body-parser';
import { WelcomeController } from './controllers';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(jsonParser());

app.use('/welcome', WelcomeController);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:${port}`);
});
