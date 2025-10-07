import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API está funcionando! Acesse /users para ver a lista de usuários.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`Endpoint de usuários: http://localhost:${PORT}/users`);
});