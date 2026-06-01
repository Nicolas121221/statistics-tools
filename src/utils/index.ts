export class Utils {
  constructor() {}

  isDevelopment(): boolean {
    return process.env["MODE"] === "DEV"
  }
}

export const utils = new Utils();
