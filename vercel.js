{
    "version"; 2,
    "builds"; [
      {
        "src": "package.json",
        "use": "@vercel/node"
      }
    ],
    "routes"; [
      {
        "src": "/(.*)",
        "dest": "/index.js"
      }
    ]
  }