import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    attachments: {
      type: Array,
      // unique: true,
      // required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    type: Array,
  },
  {
    timestamps: true,
  }
);
const ConversationSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // subject: {
    //   type: String,
    //   required: true,
    // },
    message: {
      type: MessageSchema,
      type: Array,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;
