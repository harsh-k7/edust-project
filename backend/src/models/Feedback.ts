import mongoose, { Document, Schema } from 'mongoose';

export interface IFeedback extends Document {
  userId?: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const FeedbackSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback; 