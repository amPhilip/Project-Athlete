import { Router } from "express";

import {
  renderAboutPage,
  renderIndexPage,
  renderNewEntryPage,
  createNewEntry,
  deleteData,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndexPage);

router.get("/about", renderAboutPage);

router.get("/new-entry", renderNewEntryPage);

router.post("/new-entry", createNewEntry);

router.get("/delete/:id", deleteData);

export default router;
