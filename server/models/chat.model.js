import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const MessageSchema = new mongoose.Schema(
  {
      message: {
        type: String,
        required: true,
      },
      author_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      attachments:{
        type: String,
        unique: true,
        required: true,
      },
      read:{
        type: Boolean,
        default : false,
      },
    },
    {
      timestamps: true,
    }
  )
const ConversationSchema = new mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subject: {
      type: String,
      required: true,
    },
    },
    message : {
      type: MessageSchema,
    }
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model('User', ConversationSchema);

export default Conversation;
