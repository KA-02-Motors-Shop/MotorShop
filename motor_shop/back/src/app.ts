import cors from "cors";
import express from "express";
// importando as rotas que acabamos de definir
import routes from "./routes";
const app = express();
app.use(cors());
app.use(express.json());
// registrando as rotas na aplicação
app.use(routes);
app.listen(3000, () => console.log("App running at http://localhost:3000"));
