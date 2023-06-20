import { createClient } from 'redis';
import logger from '~/log/logger';

const redisClient = createClient({
  url: process.env.REDIS_URL,
  legacyMode: true,
});

redisClient.on('error', err => {
  logger.error('error', err);
});

redisClient.on('connect', () => {
  logger.log('info', 'Redis connected');
});

process.on('SIGINT', () => {
  redisClient.quit();
});

export default redisClient;
