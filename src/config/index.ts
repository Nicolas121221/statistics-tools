import dotenv from "dotenv";
import { utils } from "../utils/index.js";
import type { ISettings } from "../interfaces/ISettings.js";

export class Settings implements ISettings {
  public configure(): void {
    this.initEnv();
  }

  private initEnv(): void {
    dotenv.config({ quiet: !utils.isDevelopment() });
  }
}

const settings = new Settings();
export default settings;
