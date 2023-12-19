import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    content: {
        type: String,
    },
    service:{
        type: String,
        require: true
      },
      

}, {timestamps: true})

export default mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);