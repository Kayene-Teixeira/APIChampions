import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

// função será executada assim que o servidor iniciar
app.listen(port, () => {
    console.log('🚀 Servidor está rodando na porta http://localhost:' + port);
});