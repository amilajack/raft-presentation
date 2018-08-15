import 'dotenv/config';
import path from 'path';
import express from 'express';

const app = express();

const serverPort = process.env.PORT || 3000;

const assetsDir = path.join(__dirname, 'assets');

app.use(express.static(assetsDir));

app.listen(serverPort, 'localhost', (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at http://localhost:${serverPort}`);
});
