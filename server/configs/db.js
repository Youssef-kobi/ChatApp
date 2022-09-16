import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose
    .connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error(`Not Connected ${err}`));
};

export default connectDB;
