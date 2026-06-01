import express from "express";
import { port, rootDir } from  "./config/index.js";

const app = express();

app.use(express.static(`${rootDir}/public`));
app.use(express.static(`${rootDir}/src/pages`));

app.get("/api/v1", (_req, res) => {
  res.status(200).send({
    statusCode: res.statusCode,
    message: "api running",
    version: "0.0.1"
  });
});

app.listen(port, () => {
  console.log(`Server running - port: ${port}`)
  console.log(`API running on http://localhost:${port}/api/v1`);
});
