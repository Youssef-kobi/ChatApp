{
  // _id:
  chatId: 1234,
  sender_id:
  receiver_id:
  subject:
  updated_at:
  message: {
          message:
          messageId: 1,
          author_id:
          attatchments: [x,y,z],
          read:
          created_at:
          }
},
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    sender_id: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    receiver_id: {
      type: String,
      unique: true,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    updated_at: {
      type: Object,
      // required: true,
      default: {},
    },
    message: {
      message: {
        type: String,
        unique: true,
        required: true,
      },
      messageId:{
        type: String,
        unique: true,
        required: true,
      },
      author_id:{
        type: String,
        unique: true,
        required: true,
      },
      attachments:{
        type: String,
        unique: true,
        required: true,
      },
      read:{
        type: String,
        unique: true,
        required: true,
      }
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);

  this.password = hash;

  next();
});
const User = mongoose.model('User', UserSchema);

export default User;
