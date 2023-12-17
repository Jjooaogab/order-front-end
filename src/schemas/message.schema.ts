import { User } from ".";

export interface Message {
  id: string;
  content: string;
  user: User;
  userId: number;
  userEmail: string;
}