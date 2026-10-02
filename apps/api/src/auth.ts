import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from './config.js';
import type { Role } from './models.js';

export function signToken(user: { _id: unknown; role: Role; name: string }) { return jwt.sign({ role: user.role, name: user.name }, config.JWT_SECRET, { subject: String(user._id), expiresIn: '8h' }); }
export function authenticate(req: Request, res: Response, next: NextFunction) { const raw = req.header('authorization'); if (!raw?.startsWith('Bearer ')) return res.status(401).json({ error: 'Autenticación requerida' }); try { const decoded = jwt.verify(raw.slice(7), config.JWT_SECRET) as jwt.JwtPayload; if (!decoded.sub || !decoded.role) throw new Error(); req.auth = { id: decoded.sub, role: decoded.role as Role, name: String(decoded.name ?? '') }; next(); } catch { return res.status(401).json({ error: 'Sesión inválida o expirada' }); } }
export const allow = (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => !req.auth || !roles.includes(req.auth.role) ? res.status(403).json({ error: 'Permiso insuficiente' }) : next();
