import { Router } from "express";

import {
  renderAboutPage,
  renderChartPage,
  renderIndexPage,
  renderNewEntryPage,
  createNewEntry,
  deleteRecord,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndexPage);

router.get("/about", renderAboutPage);

router.get("/chart", renderChartPage);

router.get("/new-entry", renderNewEntryPage);

router.post("/new-entry", createNewEntry);

router.get("/delete/:id", deleteRecord);

export default router;
