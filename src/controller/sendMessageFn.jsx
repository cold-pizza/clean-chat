

const sendMessageFn = function(sendedMessage, action) {
  const messageData = action.payload.data;
  const beforeMessage = sendedMessage.chatContents[sendedMessage.chatContents.length-1];
    if (beforeMessage?.message) {
        if (messageData.message === beforeMessage.message) {
          return sendedMessage;
        } else {
          sendedMessage.chatContents = [ ...sendedMessage.chatContents, messageData ];
        }
      } else {
        sendedMessage.chatContents = [ ...sendedMessage.chatContents, messageData ];
      }
}

export default sendMessageFn