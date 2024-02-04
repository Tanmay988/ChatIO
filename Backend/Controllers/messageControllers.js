const Conversation = require("../models/ConversationModel");
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    //find conversation between sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    //if conversation not found then create new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    //create new message
    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    //push new message to conversation
    if (newMessage) {
      conversation.message.push(newMessage);
    }

    //save message and conversation parallely
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderID = req.user._id;

    //find conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, userToChat] },
    }).populate("message"); //populate message

    if (!conversation) return res.status(200).json([]);
    const message = conversation.message;

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage, getMessage };
