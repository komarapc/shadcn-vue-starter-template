export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  role: {
    id: string;
    name: string;
  };
};
