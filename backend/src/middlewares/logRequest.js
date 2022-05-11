import logger from '../utils/logger.js';

const logRequest = (req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
};

export default logRequest;
