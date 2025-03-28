import { createRequestHandler } from "@remix-run/express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as build from "./build/server/index.js";

// Necesario para manejar rutas correctamente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 📌 Sirve archivos estáticos desde "public" (por si los tienes)
app.use(express.static("public"));

// 🔥 Manejador de solicitudes Remix
app.all(
  "*",
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

// 🌍 Puerto dinámico para Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
