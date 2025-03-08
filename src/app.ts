import express from "express"; // quick fix pra instalar a tipagem do express para o typescript
import router from "./routes";
import cors from "cors";

// configurando app 
function createApp() {
    const app = express();
    
    // middleware
    // define que o corpo da requisição vai ser json 
    app.use(express.json());
    app.use('/api', router); // le arquivo de rotas

    const corsOptions = {
        origin: '*',
    }

    app.use(cors());

    return app;
}

export default createApp;