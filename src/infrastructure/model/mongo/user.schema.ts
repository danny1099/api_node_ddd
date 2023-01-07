import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  id: String,
});

export const User = model('user', userSchema);
