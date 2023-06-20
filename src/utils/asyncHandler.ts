import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { ControllerFunction } from '~/types/index.types';

interface CustomRequest extends Request {
  args: any[];
}

// eslint-disable-next-line arrow-body-style
const asyncHandler = (controller: ControllerFunction, ...rest: any[]) => {
  // eslint-disable-next-line consistent-return
  return async (req: CustomRequest, res: Response, next: NextFunction): Promise<any> => {
    const session = await mongoose.startSession();

    try {
      await session.withTransaction(async () => {
        req.args = rest;
        await controller(req, res, next, session);
      });
    } catch (error) {
      return next(error);
    } finally {
      session.endSession();
    }
  };
};

export default asyncHandler;
