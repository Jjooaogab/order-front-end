import { Message } from ".";

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  userImg?: string;
  role: string;
  messages: Message[]
}