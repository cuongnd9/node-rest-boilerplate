import 'dotenv/config';
import express from 'express';
import signale from 'signale';
import apiRoute from './routes';
import config from './config';

// Initialize app.
const app = express();

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));
app.use('/api', apiRoute);

// Start server.
app.listen(config.port, () => signale.debug(`Server started on http://localhost:${config.port}`));
