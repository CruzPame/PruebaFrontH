/** @type {import('@remix-run/dev').AppConfig} */
export default {
  server: "./server.js", // Asegura que este archivo exista
  serverBuildPath: "build/server/index.js",
  serverDependenciesToBundle: "all",
  ignoredRouteFiles: ["**/.*"],
};
