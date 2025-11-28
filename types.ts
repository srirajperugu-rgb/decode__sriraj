export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  language: string; // e.g., Python, Java
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string; // e.g., Web Dev, Data Science, System Design
  description: string;
  features: string[];
  reviews: Review[];
  isTrending?: boolean;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface FilterState {
  search: string;
  language: string;
  level: string;
}

// --- LEXA VOICE ASSISTANT TYPES ---

export type LexaState = 'IDLE' | 'LISTENING' | 'PROCESSING' | 'SPEAKING';

export interface LexaIntent {
  type: 'NAVIGATE' | 'ADD_TO_CART' | 'READ_SUMMARY' | 'INSTANT_BUY' | 'UNKNOWN' | 'GREETING' | 'HELP';
  payload?: any;
}

export interface LexaContextType {
  state: LexaState;
  transcript: string;
  replyText: string;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
}