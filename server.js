/* 
PASOS PARA IMPORTAR Y ABRIR PUERTO EN EXPRESS

1. Importar express
2. Crar app con express
3. Usar app.listen para abrir el servidor en un puerto (opcional)
*/
import { connect } from './config.js';
import express from 'express';
import carRoutes from './routes/carRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';

connect();

const api = express();

api.use(express.json());
api.listen(8000, () => console.log('Server listening on port 8000')); // Puerto por defecto de Express es 3000, pero se puede indicar otro si queremos
api.use('/cars', carRoutes);
// api.use('/sales', salesRoutes)
api.use('/books', bookRoutes);
api.use('/auth', authRoutes);