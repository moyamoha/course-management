import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
  ],
});

export default logger;
