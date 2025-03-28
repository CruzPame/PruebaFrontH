/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: "./server.js", // Asegura que este archivo exista
  serverBuildPath: "build/index.js",
  serverDependenciesToBundle: "all",
  ignoredRouteFiles: ["**/.*"],
};
