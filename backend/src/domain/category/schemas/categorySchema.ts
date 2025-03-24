import { Schema, model, Document } from 'mongoose';

type CategoryName =
  | 'verbs'
  | 'nouns'
  | 'adjectives'
  | 'adverbs'
  | 'pronouns'
  | 'prepositions'
  | 'conjunctions'
  | 'interjections'
  | 'phrases';

export interface ICategory extends Document {
  name: CategoryName;
  description?: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      enum: [
        'verbs',
        'nouns',
        'adjectives',
        'adverbs',
        'pronouns',
        'prepositions',
        'conjunctions',
        'interjections',
        'phrases',
      ],
      required: true,
      unique: true,
    },
    description: { type: String }, // Brief description of the category
  },
  { timestamps: true },
);

export const CategoryModel = model<ICategory>('Category', categorySchema);
