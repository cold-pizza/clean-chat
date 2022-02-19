

const sendMessageFn = function(beforeMessage, sendedMessage, messageData) {
    if (beforeMessage.message !== undefined) {
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