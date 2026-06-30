import authRouter from "../src/routers/auth/auth.routes.js";
import { corsOptions } from "./config/cors.js";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRouter);

export default app;