import { badRequest } from '../src/index';

describe('error kit', () => {
  it('should create bad request error', () => {
    const err = badRequest('invalid data', { issue: 'missing' });
    console.log(err, 'xixixxiixx');
    expect(err.statusCode).toBe(400);
    expect(err.metadata).toEqual({ issue: 'missing' });
  });
});
