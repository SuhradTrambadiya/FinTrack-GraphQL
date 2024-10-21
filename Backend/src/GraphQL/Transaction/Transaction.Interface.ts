import { User } from "../User/User.Interface";

export interface Transaction {
    _id: string;          // Using string for ID
    userId: string;      // Using string for user ID
    description: string;
    paymentType: string;
    category: string;
    amount: number;      // Using number for Float
    location?: string;   // Optional property
    date: string;
    user: User;          // Assuming User is defined elsewhere
}

export interface CategoryStatistics {
    category: string;
    totalAmount: number; // Using number for Float
}
