export type Sale = {
  customer: string;
  id: string;
  method: string;
  status: 'pending' | 'completed' | 'cancelled';
  time: Date;
  total: number;
};