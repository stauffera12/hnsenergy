import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require:  true,
        unique: true
    },
    role: {
        type: String, 
        enum: ['Admin', 'Staff'], 
        required: true,
        default: 'Admin',
    },
    password: {
        type: String,
        require: true,
    }
},
  { collection: "users",
    timestamps: true }
)


export default mongoose.models.User || mongoose.model("User", userSchema);
