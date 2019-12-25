/* eslint @typescript-eslint/no-explicit-any: 0 */
import Express from 'express';

declare global {
  namespace Express {
    interface Request {
      context: any;
    }
  }
}

declare module 'express' {
  interface RequestParams {
    query?: any;
    params?: any;
    body?: any;
    context?: any;
  }
  interface ExRequest<T extends RequestParams = {}> extends Express.Request {
    params: T['params'];
    query: T['query'];
    body: T['body'];
    context: T['context'];
  }
}
