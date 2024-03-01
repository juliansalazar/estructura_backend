/* 
PASOS PARA IMPORTAR Y ABRIR PUERTO EN EXPRESS

1. Importar express
2. Crar app con express
3. Usar app.listen para abrir el servidor en un puerto (opcional)
*/
import { connect } from './config.js';
import express from 'express';
connect();
const api = express();
api.listen(8000, () => console.log('Server listening on port 8000')); // Puerto por defecto de Express es 3000, pero se puede indicar otro si queremos