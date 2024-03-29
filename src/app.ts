import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import router from './router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'API is ready to use' });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
