import express from 'express';

import { catergoriesRoutes } from './routes/catergories.routes';

const app = express();
app.use(express.json());

app.use('/categories', catergoriesRoutes);

app.listen(3333, () => console.log('Server is running!'));
