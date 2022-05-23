import { BadRequestError } from '../helpers/apiError.js';

export default function (req, res, next) {
  if (
    (req.method === 'POST' || req.method === 'PUT') &&
    !(req.is('application/json') || req.is('multipart/form-data'))
  ) {
    next(new BadRequestError('Request body must be of type json'));
  } else {
    next();
  }
}
