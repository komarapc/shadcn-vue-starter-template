import { nanoid } from "nanoid";

type Role = {
  id: string;
  name: string;
};

export const roles: Role[] = [
  { id: nanoid(), name: "Administrator" },
  { id: nanoid(), name: "User" },
  { id: nanoid(), name: "Guest" },
];
