/* eslint-disable no-console */
import app from './app';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
