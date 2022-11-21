import logger from "../utils/logger.js";

const apiErrorHandler = (error, req, res, next) => {
  if (error.source) {
    logger.error(error.source);
  }
  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
};

export default apiErrorHandler;
