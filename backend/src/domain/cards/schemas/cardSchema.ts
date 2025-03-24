import { Schema, model, Document, Types } from 'mongoose';

type Translation = {
  [key: string]: string; // Support multiple languages
};

export interface ICard extends Document {
  word: string;
  transcription?: string;
  translation: Translation;
  example?: Translation;
  audioUrl?: string;
  category: Types.ObjectId;
  difficulty: 'easy' | 'medium' | 'hard';
  isLearned: boolean;
}

const cardSchema = new Schema<ICard>(
  {
    word: { type: String, required: true },
    transcription: { type: String }, // Phonetic spelling of the word
    translation: { type: Map, of: String, required: true }, // Support multiple languages
    example: { type: Map, of: String }, // Support multiple languages
    audioUrl: { type: String }, // Link to audio pronunciation
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    isLearned: { type: Boolean, default: false }, // Mark the cards you've studied
  },
  { timestamps: true },
);

export const CardModel = model<ICard>('Card', cardSchema);
