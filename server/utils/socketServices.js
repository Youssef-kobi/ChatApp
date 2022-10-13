import mongoose from 'mongoose';
import Conversation from '../models/chat.model.js';
import User from '../models/user.model.js';

export const connectUser = async (username, socketId) => {
  const ConnectedUser = await User.findOneAndUpdate(
    {
      username,
    },
    { socketId, status: 'Online' },
    { new: true }
  );
  return ConnectedUser;
};
export const createConversation = async (senderId, receiverId) => {
  const createdConversation = await Conversation.create({
    senderId,
    receiverId,
  });
  const user = await createdConversation.populate(['receiverId', 'senderId']);
  return user;
};
export const getConversationsByUsers = async (senderId, receiverId) => {
  const getConversation = await Conversation.findOneAndUpdate(
    {
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    {
      $set: {
        'message.$[element].read': true,
      },
    },
    {
      arrayFilters: [
        {
          'element.authorId': receiverId,
        },
      ],
    }
  ).populate(['receiverId', 'senderId']);
  return getConversation;
};
export const readMessages = async (senderId, receiverId) => {
  console.log(senderId, receiverId);
  const ReadMessages = await Conversation.findOneAndUpdate(
    {
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    {
      $set: {
        'message.$[element].read': true,
      },
    },
    {
      arrayFilters: [
        {
          'element.authorId': receiverId,
        },
      ],
    }
    // { new: true }
  );
  console.log(ReadMessages);
};

export const addMessage = async (senderId, receiverId, message) => {
  // await readMessages(senderId, receiverId);
  const AddMessage = await Conversation.findOneAndUpdate(
    {
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    {
      $push: {
        message: {
          _id: new mongoose.Types.ObjectId(),
          message: message,
          authorId: senderId,
          read: false,
          attachments: [],
          createdAt: new Date(),
        },
      },
    },
    { new: true }
  ).populate(['receiverId', 'senderId']);
  return AddMessage;
};

export const getLastConversations = async (senderId) => {
  // console.log(senderId)
  const getConversations = await Conversation.find({
    $or: [{ senderId: senderId }, { receiverId: senderId }],
  }).populate(['receiverId', 'senderId']);
  // console.log(getConversations);
  return getConversations;
};

export const setUserStatus = async (userId, socketId) => {
  try {
    await User.findByIdAndUpdate(userId, { status: 'Offline' });
  } catch (error) {
    console.log(error);
  }
};
