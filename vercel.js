{
  "functions"; {
    "build/server/index.js"; {
      "runtime"; "nodejs20.x"
    }
  };
  "routes"; [
    {
      "src": "/(.*)",
      "dest": "build/server/index.js"
    }
  ]
}
