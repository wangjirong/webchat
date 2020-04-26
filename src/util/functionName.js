/**
 * @user-当前登录用户
 * @socketConnected-socket.io是否连接
 * @friendList-好友列表
 * @groupList-群聊列表
 * @onlineFriendList-在线好友
 * @currentFriend-当前聊天好友
 * @currentRoom-当前群聊
 * @friendMessageList-好友消息列表
 * @groupMessageList-群聊消息列表
 */
export const User = {
    SET_USER: "SET_USER",
    GET_USER: "GET_USER",
};
export const SocketConnected = {
    SET_SOC_CONN: "SET_SOC_CONN",
    GET_SOC_CONN: "GET_SOC_CONN",
};
export const FriendList = {
    SET_FRIEND_LIST: "SET_FRIEND_LIST",
    GET_FRIEND_LIST: "GET_FRIEND_LIST"
};
export const GroupList = {
    SET_GROUP_LIST: "SET_GROUP_LIST",
    GET_GROUP_LIST: "GET_GROUP_LIST"
};
export const OnlineFriendList = {
    SET_ONLINE_FRIEND_LIST: "SET_ONLINE_FRIEND_LIST",
    GET_ONLINE_FRIEND_LIST: "GET_ONLINE_FRIEND_LIST"
};
export const CurrentFriend = {
    SET_CURRENT_FRIEND: "SET_CURRENT_FRIEND",
    GET_CURRENT_FRIEND: 'GET_CURRENT_FRIEND'
};
export const CurrentRoom = {
    SET_CURRENT_ROOM: "SET_CURRENT_ROOM",
    GET_CURRENT_ROOM: 'GET_CURRENT_ROOM'
};
export const FriendMessageList = {
    SET_FRIEND_MESSAGE_LIST: "SET_FRIEND_MESSAGE_LIST",
    GET_FRIEND_MESSAGE_LIST: 'GET_FRIEND_MESSAGE_LIST'
};
export const GroupMessageList = {
    SET_GROUP_MESSAGE_LIST: "SET_GROUP_MESSAGE_LIST",
    GET_GROUP_MESSAGE_LIST: "GET_GROUP_MESSAGE_LIST"
};
// export default {
//     User,
//     SocketConnected,
//     FriendList,
//     GroupList,
//     OnlineFriendList,
//     CurrentFriend,
//     CurrentRoom,
//     FriendMessageList,
//     GroupMessageList
// }