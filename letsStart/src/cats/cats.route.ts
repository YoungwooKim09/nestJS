import { Router } from "express";
import {
  readAllcat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from "./cats.service";

// 라우트와 서비스 분리
const router = Router();

router.get("/cats", readAllcat);
router.get("/cats/:id", readCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;
