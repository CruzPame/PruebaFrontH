/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  serverBuildPath: "build/index.js",
  server: "./server.js",
  serverDependenciesToBundle: "all",
  ignoredRouteFiles: ["**/.*"],
};
