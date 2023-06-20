import app from '~/app';
import http from 'node:http';
import redisClient from './config/redis.config';
import logger from './log/logger';
import connectDB from './config/mongoose.config';
import handleProcessEvent from './processEvents';

const server: http.Server = app.listen(3000, async () => {
  await redisClient.connect();
  await connectDB();
  logger.info('Listening on port 3000');
});

handleProcessEvent(server);
