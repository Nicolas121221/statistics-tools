import express, { type Router } from "express";
import type { IRouter } from "../../../interfaces/IRouter.js";

export class RootRouter implements IRouter {
  public readonly router: Router;
  public readonly path: string;

  public constructor(path: string) {
    this.path = path;
    this.router = express.Router();

    this.addMethods();
  }

  private addMethods(): void {
    this.get();
  }

  public get(): void {
    this.router.get("/", (_req, res) => {
      res.status(200).send({
        statusCode: res.statusCode,
        message: "api running",
        version: "0.0.1",
      });
    });
  }
}

const rootRouter = new RootRouter("/");
export default rootRouter;
