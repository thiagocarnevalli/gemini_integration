**Introduction** </br>
 That repository is only a study case for gemini integration using js Express server

**Project structure** 

```
GEMINI_INTEGRATION/
├── backend/
│   ├── .env
│   ├── gemini_api.js 
│   └── server.js
├── front/
│   ├── api_client.js
│   ├── index.html
│   └── script.js
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── run_local.sh
```

**Running Local**
-  The project uses a `npm` as package manager.
-  After clone the project you need to create a `.env` under the `./backend` folder, as below:
```
  GEMINI_API_KEY=<API-VALUE>
  SERVER_DEFAULT_PORT=<PORT_NUMBER> // if not available assume a 3000
```
- To make easier to run locally there's a `.sh` file to configure the enviroment. Just run the following command on project **root** folder
```
chmod +x ./run_local.sh
./run_local.sh
```
**OBS**: When using the `run_local.sh` the default front-end server port is `localhost:80`
