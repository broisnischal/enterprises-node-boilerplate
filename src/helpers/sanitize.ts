import { Request, Response, NextFunction } from 'express';
import { filterInput } from './textFilter';

export const sanitizeString = (str: string): string => filterInput(str);

// Middleware for the app
const sanitizeInput = (req: Request, res: Response, next: NextFunction): void => {
  req.body = Object.entries(req.body).reduce((acc: any, [key, value]) => {
    acc[key] = typeof value === 'string' ? sanitizeString(value) : value;
    return acc;
  }, {});

  next();
};

// sanitizedString = sanitizedString.replace(/<script.*?>.*?<\/script>/gi, ''); // Remove script tags
// sanitizedString = sanitizedString.replace(/<.*?>/g, ''); // Remove all HTML tags
// sanitizedString = sanitizedString.replace(/[^\w\s.-]/g, ''); // Remove special characters except for period (.), hyphen (-), and space
// sanitizedString = sanitizedString.replace(/\s+/g, ' '); // Replace multiple consecutive spaces with a single space
export default sanitizeInput;
