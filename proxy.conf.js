const PROXY_CONFIG = {
    "/api/proxy/users": {
        "target": "http://localhost:4200",
        "secure": false,
        "pathRewrite": {
            "^/api/proxy/users": "assets/data.json"
          },
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            res.setHeader('Content-Type', 'application/json');
            res.end(`
            {
                "users": [
                  {
                    "email": "admin",
                    "pass": "admin",
                    "role": "admin"
                  },
                  {
                    "email": "partner",
                    "pass": "partner",
                    "role": "partner"
                  },
                  {
                    "email": "customer1",
                    "pass": "password1",
                    "role": "partner"
                  },
                  {
                    "email": "customer2",
                    "pass": "password2",
                    "role": "partner"
                  },
                  {
                    "email": "customer3",
                    "pass": "password3",
                    "role": "partner"
                  }
                ]
              }
                
              
              
            `);
          }
    },
    "/api/proxy/tables": {
        "target": "http://localhost:4200",
        "secure": false,
        "pathRewrite": {
            "^/api/proxy/tables": "assets/data.json"
          },
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            res.setHeader('Content-Type', 'application/json');
            res.end(`
            {
                "tables": [
                    {"id": 1, "width": 80, "height": 60, "reserved": false},
                    {"id": 2, "width": 90, "height": 70, "reserved": true},
                    {"id": 3, "width": 100, "height": 80, "reserved": false},
                    {"id": 4, "width": 80, "height": 60, "reserved": true},
                    {"id": 5, "width": 90, "height": 70, "reserved": false},
                    {"id": 6, "width": 100, "height": 80, "reserved": true},
                    {"id": 7, "width": 80, "height": 60, "reserved": false},
                    {"id": 8, "width": 90, "height": 70, "reserved": true},
                    {"id": 9, "width": 100, "height": 80, "reserved": false},
                    {"id": 10, "width": 80, "height": 60, "reserved": true},
                    {"id": 11, "width": 90, "height": 70, "reserved": false},
                    {"id": 12, "width": 100, "height": 80, "reserved": true}
                  ]
              }
                
              
              
            `);
          }
    },
    "/api/proxy/bookings": {
        "target": "http://localhost:4200",
        "secure": false,
        "pathRewrite": {
            "^/api/proxy/bookings": "assets/data.json"
          },
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            res.setHeader('Content-Type', 'application/json');
            res.end(`
            {
                "bookings": [
                    {
                      "id": 1,
                      "user": "partner",
                      "startIn": "2024-02-14T17:18:33.164Z",
                      "endIn": "2024-02-14T17:18:33.164Z"
                    },
                    {
                      "id": 2,
                      "user": "partner",
                      "startIn": "2024-02-14T17:18:33.164Z",
                      "endIn": "2024-02-14T17:18:33.164Z"
                    },
                    {
                      "id": 3,
                      "user": "partner",
                      "startIn": "2024-02-14T17:18:33.164Z",
                      "endIn": "2024-02-14T17:18:33.164Z"
                    },
                    {
                      "id": 4,
                      "user": "partner",
                      "startIn": "2024-02-14T17:18:33.164Z",
                      "endIn": "2024-02-14T17:18:33.164Z"
                    },
                    {
                      "id": 5,
                      "user": "customer1",
                      "startIn": "2024-02-15T10:30:00.000Z",
                      "endIn": "2024-02-15T12:30:00.000Z"
                    },
                    {
                      "id": 6,
                      "user": "customer2",
                      "startIn": "2024-02-16T14:00:00.000Z",
                      "endIn": "2024-02-16T16:00:00.000Z"
                    },
                    {
                      "id": 7,
                      "user": "customer3",
                      "startIn": "2024-02-17T18:45:00.000Z",
                      "endIn": "2024-02-17T20:45:00.000Z"
                    }
                  ]
              }
                
              
              
            `);
          }
    },
    "/api/proxy/games": {
        "target": "http://localhost:4200",
        "secure": false,
        "pathRewrite": {
            "^/api/proxy/games": "assets/data.json"
          },
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            res.setHeader('Content-Type', 'application/json');
            res.end(`
            {
                "games": [
                    {
                      "id": 1,
                      "name": "Juego 1",
                      "widthNeeded": 80,
                      "heightNeeded": 60,
                      "minPlayers": 2,
                      "maxPlayers": 4,
                      "reserved": true
                    },
                    {
                      "id": 2,
                      "name": "Juego 2",
                      "widthNeeded": 100,
                      "heightNeeded": 80,
                      "minPlayers": 3,
                      "maxPlayers": 6,
                      "reserved": false
                    },
                    {
                      "id": 3,
                      "name": "Juego 3",
                      "widthNeeded": 50,
                      "heightNeeded": 40,
                      "minPlayers": 4,
                      "maxPlayers": 8,
                      "reserved": true
                    },
                    {
                      "id": 4,
                      "name": "Juego 4",
                      "widthNeeded": 90,
                      "heightNeeded": 70,
                      "minPlayers": 2,
                      "maxPlayers": 4,
                      "reserved": false
                    },
                    {
                      "id": 5,
                      "name": "Juego 5",
                      "widthNeeded": 70,
                      "heightNeeded": 50,
                      "minPlayers": 3,
                      "maxPlayers": 6,
                      "reserved": true
                    },
                    {
                      "id": 6,
                      "name": "Juego 6",
                      "widthNeeded": 80,
                      "heightNeeded": 60,
                      "minPlayers": 2,
                      "maxPlayers": 4,
                      "reserved": false
                    },
                    {
                      "id": 7,
                      "name": "Juego 7",
                      "widthNeeded": 60,
                      "heightNeeded": 40,
                      "minPlayers": 3,
                      "maxPlayers": 6,
                      "reserved": true
                    },
                    {
                      "id": 8,
                      "name": "Juego 8",
                      "widthNeeded": 100,
                      "heightNeeded": 80,
                      "minPlayers": 4,
                      "maxPlayers": 8,
                      "reserved": false
                    },
                    {
                      "id": 9,
                      "name": "Juego 9",
                      "widthNeeded": 80,
                      "heightNeeded": 50,
                      "minPlayers": 2,
                      "maxPlayers": 4,
                      "reserved": true
                    },
                    {
                      "id": 10,
                      "name": "Juego 10",
                      "widthNeeded": 90,
                      "heightNeeded": 60,
                      "minPlayers": 3,
                      "maxPlayers": 6,
                      "reserved": false
                    }
                  ]
              }
                
              
              
            `);
          }
    }
}

module.exports = PROXY_CONFIG


