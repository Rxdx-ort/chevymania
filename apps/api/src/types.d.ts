import type { Role } from './models.js';
declare global { namespace Express { interface Request { auth?: { id: string; role: Role; name: string } } } }
export {};
