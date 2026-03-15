import express from "express";
import cors from "cors";
import emailRoutes from "./features/email/email.routes.js";

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/api/email", emailRoutes);

export default app;