const mongoose = require("../database");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        nickname: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
