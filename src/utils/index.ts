import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const port = !process.env["PORT"] ? 3000 : parseInt(process.env["PORT"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const rootDir = join(__dirname, "..", "..");

export class Utils {
  public readonly rootDir = join(__dirname, "..", "..");

  public isDevelopment(): boolean {
    return process.env["MODE"] === "DEV";
  }
}

export const utils = new Utils();
