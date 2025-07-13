export interface Question {
  id: number;
  question: string | string[];
  answer: string;
  points: number;
  category: string;
  is_picture: boolean;
  is_answered: boolean;
}
