import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
      description: {
          type: String,
          require: true
      },

}, {timestamps: true})

export default mongoose.models.ContactUs || mongoose.model("ContactUs", pageSchema);