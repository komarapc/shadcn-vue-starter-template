import { User } from "@/interfaces";
import { nanoid } from "nanoid";
import * as bcrypt from "bcryptjs";
import { roles } from "./roles";
export const users: User[] = [
  {
    id: nanoid(),
    name: "John Doe",
    email: "johndoe@mail.com",
    password: bcrypt.hashSync("password", 10),
    role: roles[0],
  },
  {
    id: nanoid(),
    name: "Jane Doe",
    email: "janedoe@mail.com",
    password: bcrypt.hashSync("password", 10),
    role: roles[1],
  },
];
