import express from 'express';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.all('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({
    status: 'Not exist',
  });
});

export default app;
