import type { Express } from "express";
import type { ISettings } from "./ISettings.js";

export interface IApplication {
  readonly app: Express;
  readonly settings: ISettings;
}
