import mongoose, { Schema, Document } from 'mongoose';
import Category from './Category';

export interface IBlog extends Document {
    title: string;
    image: string;
    categoryId: Schema.Types.ObjectId;
    description: string;
}

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: Category,
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },


}, { timestamps: true })

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);
