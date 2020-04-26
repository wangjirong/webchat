export default class Message {
    constructor(message, sendUser, receiver) {
        this.message = message;
        this.user = this.getNewUser(sendUser);
        this.receiver = this.getNewUser(receiver);
    }
    getNewUser(user) {
        return {
            _id: user._id,
            nickName: user.nickName,
            userName: user.userName,
            avatar: user.avatar
        }
    }
}