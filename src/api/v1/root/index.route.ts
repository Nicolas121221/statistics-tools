import express, { type Router } from "express";
import type { IRouter } from "../../../interfaces/IRouter.js";

export class RootRouter implements IRouter {
  public readonly router: Router;
  public readonly path: string;

  public constructor(path: string) {
    this.path = path;
    this.router = express();
  }

  public get(): void {
    this.router.get("/", (_req, res) => {
      res.status(200).json({});
    });
  }
}

const rootRouter = new RootRouter("/");
export default rootRouter;
