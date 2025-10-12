import Message from "../models/Message";
import User from "../models/User.js";


export const getAllContacts = async(req, res) => {
  try {
    const loggedInuserId = req.user._id;
    const contacts = await User.find({_id:{$ne:loggedInuserId}});
}
    catch (error) {
}
}

export const getMessagesById = async(req, res) => {
  try {
    const contactId = req.params.id;
    const {id} = req.params;
    const senderId = req.user._id;

    let imageURL;
    if(image){
      const uploadedImage = await cloudinary.uploader.upload(image);
      imageURL = uploadeResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId: id,
      text,
      image: imageURL
    });
    await newMessage.save();


    //todo: send real time notification to receiver using socket.io

    res.status(201).json( newMessage);   
    
  }catch (error) {
    console.log("error in sending message", error.message);
    res.status(500).json({message:"Internal server error"});
}
}


export const getChatPatners = async(req, res) => {
  try {
    const loggedInuserId = req.user._id;
    const messages = await Message.find({
      $or:[
        {senderId:loggedInuserId},
        {receiverId:loggedInuserId}
      ],
    });
    const chatPartnersIds =[...new Set(messages.map((msg) =>
      msg.senderId.toString() === loggedInuserId.toString()?
      msg.receiverId.toString():
      msg.senderId.toString()
    )
    ),
  ];

    const chatPartners = await User.find({_id:{$in:chatPartnersIds}}).select("-password -email -createdAt -updatedAt -__v");
    res.status(200).json(chatPartners);

  }
    catch (error) {
    console.log("error in getting chat partners", error.message);
    res.status(500).json({message:"Internal server error"});
    }
}
