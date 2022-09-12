import { Router } from "express";
import { sendMessage } from "../controller/pager.controller";

const router = Router();

router.post('/', sendMessage);

export default router;