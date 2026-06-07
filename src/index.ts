import express, { type Router, type Express } from "express";
import type { IApplication } from "./interfaces/IApplication.js";
import defaultSettings from "./config/index.js";
import type { ISettings } from "./interfaces/ISettings.js";
import { port, rootDir } from "./utils/index.js";
import mainRouter from "./api/index.js";

export class Application implements IApplication {
  public readonly app: Express = express();
  public readonly settings: ISettings;

  public constructor(settings: ISettings) {
    this.settings = settings;

    this.configure();
    this.addStaticFiles();
  }

  private configure(): void {
    this.settings.configure();

    this.app.use(express.json());
  }

  private addStaticFiles(): void {
    this.app.use(express.static(`${rootDir}/public`));
    this.app.use(express.static(`${rootDir}/src/pages`));
  }

  public addRoutes(route: Router): void {
    this.app.use(route)
  }

  public init(): void {
    this.app.listen(port, () => {
      const portValue = port.toString();
      console.log(`Server running - port: ${portValue}`);
      console.log(`API running on http://localhost:${portValue}/api/v1`);
    });
  }
}

export const app = new Application(defaultSettings);

app.addRoutes(mainRouter.router)
app.init();
