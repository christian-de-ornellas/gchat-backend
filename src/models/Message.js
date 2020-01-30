const mongoose = require("../database");

const MessageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
