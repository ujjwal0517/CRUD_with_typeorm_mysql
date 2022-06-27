import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as BodyParser from "body-parser";

import route from "./route/PostRoute";

createConnection()
  .then(async (connection) => {
    const app = express();
   
    app.use(BodyParser.json());

    app.use("/post", route);

    app.listen(8080, () => console.log("App is running at port 8080."));
  })
  .catch((error) => console.log(error));