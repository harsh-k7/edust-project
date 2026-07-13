import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Feedback from '../models/Feedback';
import { AuthRequest } from '../middleware/auth';

// Create new feedback
export const createFeedback = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const newFeedback = new Feedback({
      name,
      email,
      subject,
      message,
    });

    const feedback = await newFeedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Get all feedback (Admin only)
export const getAllFeedback = async (req: AuthRequest, res: Response) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};