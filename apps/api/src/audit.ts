import type { Request } from 'express';
import { AuditLog } from './models.js';
export async function audit(req: Request, action: string, entity: string, entityId: unknown, before?: unknown, after?: unknown) { await AuditLog.create({ actorId: req.auth?.id, action, entity, entityId: String(entityId), before, after, ip: req.ip }); }
