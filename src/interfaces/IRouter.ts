import type { Router } from "express";
import type { IdBrand } from "../utils/types.js";

export interface IRouter {
  readonly router: Router;
  get(id?: IdBrand): void;
  post?(): void;
  put?(): void;
  Delete?(id: IdBrand): void;
}
