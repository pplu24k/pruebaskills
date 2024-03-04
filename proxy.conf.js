const PROXY_CONFIG = {
  "/api/proxy/users/register": {
    target: "localhost8000",
    secure: false,
    pathRewrite: {
      "http://localhost:8000/api/register":
        "http://localhost:8000/api/register",
    },
    changeOrigin: true,
  },
  "/api/proxy/users/login": {
    target: "localhost8000",
    secure: false,
    pathRewrite: {
      "http://localhost:8000/api/login": "http://localhost:8000/api/login",
    },
    changeOrigin: true,
  },
  "/api/proxy/users/tables": {
    target: "localhost8000",
    secure: false,
    pathRewrite: {
      "http://localhost:8000/api/tables": "http://localhost:8000/api/tables",
    },
    changeOrigin: true,
  },
  "/api/proxy/users/bookings": {
    target: "localhost8000",
    secure: false,
    pathRewrite: {
      "http://localhost:8000/api/bookings":
        "http://localhost:8000/api/bookings",
    },
    changeOrigin: true,
  },
  "/api/proxy/users/games": {
    target: "localhost8000",
    secure: false,
    pathRewrite: {
      "http://localhost:8000/api/games": "http://localhost:8000/api/games",
    },
    changeOrigin: true,
  },
};

module.exports = PROXY_CONFIG;
