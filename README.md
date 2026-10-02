# Chevymania

Primera versión de gestión de taller: API REST con Express, TypeScript y MongoDB Atlas, más un frontend Vue 3/Vuetify.

## Requisitos

- Node.js 20 o superior y pnpm.
- Una base de datos MongoDB Atlas (o MongoDB local para desarrollo).

## Arranque

1. Copia `.env.example` como `.env` y define `MONGODB_URI` y `JWT_SECRET`.
2. Instala dependencias: `pnpm install`.
3. Crea datos de prueba: `pnpm seed`.
4. Ejecuta el sistema: `pnpm dev`.
5. Abre `http://localhost:5173`.

El usuario inicial se configura con `SEED_ADMIN_EMAIL` y `SEED_ADMIN_PASSWORD`. El seed agrega también un cliente: `cliente@chevymania.local` / `ChangeMe123!`.

## Verificación

`pnpm build` compila ambos proyectos y `pnpm test` ejecuta pruebas del backend.

## Seguridad

Las rutas API requieren JWT salvo inicio de sesión y health check. Las consultas del portal de cliente se filtran siempre por `customerUserId`, además de validar propiedad en cada orden.
