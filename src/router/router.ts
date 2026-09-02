import { Router} from "express"

const router = Router()

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/", (req, res) => {
  res.send("Página about");
});

export default router