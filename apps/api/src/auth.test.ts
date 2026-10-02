import { describe, expect, it } from 'vitest';
import { allow } from './auth.js';
describe('autorización', () => { it('rechaza un rol no permitido', () => { const middleware = allow('ADMIN'); const req = { auth: { role: 'CUSTOMER' } } as any; const res = { status: (code: number) => ({ json: (body: unknown) => ({ code, body }) }) } as any; let nextCalled = false; middleware(req, res, () => { nextCalled = true; }); expect(nextCalled).toBe(false); }); });
