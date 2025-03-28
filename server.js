import { createRequestHandler } from "@remix-run/node";
import * as build from "./build/index.js";

export default createRequestHandler({ build });

// Asegura que Vercel use el manejador correcto
module.exports = createRequestHandler({ build });
