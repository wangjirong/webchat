export default class Chat {
    /*
    * @param user 当前登录用户
    * @param friendList  好友列表
    * @groupList  群聊列表
    * @onlineFriendList  在线好友
    * @currentFriend  当前聊天好友
    * @currentRoom  当前群聊
    * @friendMessageList  好友消息列表
    * @groupMessageList 群聊消息列表
    */
    constructor(user, friendList, groupList, onlineFriendList, currentFriend, currentRoom, friendMessageList, groupMessageList) {
        this.user = user;
        this.friendList = friendList;
        this.groupList = groupList;
        this.onlineFriendList = onlineFriendList;
        this.currentFriend = currentFriend;
        this.currentRoom = currentRoom;
        this.friendMessageList = friendMessageList;
        this.groupMessageList = groupMessageList;
    }
}