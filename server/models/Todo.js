import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model('Todo', TodoSchema);
