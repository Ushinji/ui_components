import http from 'http';
import path from 'path';
import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '/views'));

app.use('/', routes);

http.createServer(app).listen(3000, (): void => {
  // eslint-disable-next-line
  console.log('Start server: port: 3000');
});
