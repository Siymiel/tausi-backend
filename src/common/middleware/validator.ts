import express from 'express';
import { validationResult, ValidationChain, ValidationError } from 'express-validator';
import { BadRequestResponseWithData } from '../../core/express/api/api-response';

export const errorFormatter = ({ msg, param }: ValidationError) => ({
  param, msg
});

// parallel processing
export const validate = (validations: ValidationChain[]) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req).formatWith(errorFormatter);
  if (errors.isEmpty()) {
    return next();
  }

  return new BadRequestResponseWithData('Bad Request', { errors: errors.array() }).send(res);
};

// sequential processing, stops running validations chain if the previous one have failed.
export const seqValidate = (validations:any) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const validation of validations) {
    // eslint-disable-next-line no-await-in-loop
    const result = await validation.run(req);
    if (result.errors.length) break;
  }

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return new BadRequestResponseWithData('Bad Request', { errors: errors.array() }).send(res);
};
