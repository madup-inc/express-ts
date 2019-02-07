import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello world\n");
});

router.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}\n`);
});

export const WelcomeController: Router = router;
