import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug:{
        type: String,
        require: true
      },
      summary:{
        type: String
      },
      author:{
        type: String
      },
      language:{
        type: String
      },
}, {timestamps: true})

export default mongoose.models.Category || mongoose.model("Category", categorySchema);