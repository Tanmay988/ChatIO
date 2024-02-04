const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  //createdAt, updatedAt
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
