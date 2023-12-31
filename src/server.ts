import express from 'express';
import swaggerUi from 'swagger-ui-express';
import './database';
import swaggerFile from './swagger.json';

import { router } from './routes';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT || 3333, () =>
  console.log(`🦊 Server is running: http://localhost:3333/api-docs`),
);
