import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello world\n');
});

class Person {
  public static fromJsonObj({name, age}: {name: string, age: number}): Person {
    return new Person(name, age);
  }

  public name: string;
  public age: number;

   constructor(name: string, age: number = 0) {
    this.name = name;
    this.age = age;
  }

  public greet(): string {
    return `Hello my name is ${this.name}. I'm ${this.age} year-old.`;
  }
}

router.get('/json', (req: Request, res: Response) => {
  const p: Person = Person.fromJsonObj(req.body);
  res.send(`MSG: ${p.greet()}\n`);
});

router.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}\n`);
});

export const WelcomeController: Router = router;
