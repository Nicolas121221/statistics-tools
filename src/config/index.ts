import dotenv from "dotenv";
import { utils } from "../utils/index.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const port = !process.env["PORT"] ? 3000 : parseInt(process.env["PORT"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const rootDir = join(__dirname, "..", "..");


class Settings {
  constructor() {
    this.initEnv();
  }

  private initEnv() {
    dotenv.config({ quiet: !utils.isDevelopment() });
  }
}

const settings = new Settings();
export default settings;
