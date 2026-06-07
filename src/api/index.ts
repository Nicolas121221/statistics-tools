import { Router } from "express";
import type { IRouter } from "../interfaces/IRouter.js";
import rootRouter from "./v1/root/root.route.js";

export class MainRouter {
  public readonly router: Router;

  public constructor(path?: string, routes?: IRouter[]) {
    this.router = Router();

    if (!routes || !path) return;

    routes.forEach((router) => {
      this.router.use(`/api${path}`, router.router);
    });
  }

  public addRoutes(path: string, routes: IRouter[]): void {
    routes.forEach((router) => {
      this.router.use(`/api${path}`, router.router);
    });
  }

  public addFallback(): void {
    this.router.use((req, res) => {
      res.status(404).send({ statusCode: 404, message: "page not found", path: req.path });
    });
  }
}

const mainRouter = new MainRouter();
const v1Routes: IRouter[] = [rootRouter];

mainRouter.addRoutes("/v1", v1Routes);

mainRouter.addFallback();

export default mainRouter;
