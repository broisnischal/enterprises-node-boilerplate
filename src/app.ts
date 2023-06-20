import express, { Application, Request, Response } from 'express';
import sanitizeInput from './helpers/sanitize';
import HttpResponse from './utils/HttpResponse';

const app: Application = express();

app.use(express.json({ limit: '5mb' }));
app.use(sanitizeInput);

app.post('/test', (req: Request, res: Response) => {
  const additionalParams = { res: 'asdf' };
  const response = new HttpResponse(200, 'OK', { test: req.body }, additionalParams);

  return res.send(response);
});

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

export default app;
