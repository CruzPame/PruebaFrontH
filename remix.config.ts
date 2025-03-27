import dotenv from "dotenv";
dotenv.config();

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["*/."],
  serverBuildTarget: "vercel",
  server: "./server.js",
};