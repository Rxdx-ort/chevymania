import mongoose from 'mongoose';
import { app } from './app.js';
import { config } from './config.js';
mongoose.connect(config.MONGODB_URI).then(() => app.listen(config.PORT, () => console.log(`API activa en puerto ${config.PORT}`))).catch(error => { console.error('No se pudo conectar a MongoDB', error); process.exit(1); });
