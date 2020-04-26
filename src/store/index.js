import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {
    User,
    SocketConnected,
    FriendList,
    GroupList,
    OnlineFriendList,
    CurrentFriend,
    CurrentRoom,
    FriendMessageList,
    GroupMessageList
} from '../util/functionName'

export default new Vuex.Store({
    state: {
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
        user: {},
        socketConnected: false,
        friendList: [],
        groupList: [],
        onlineFriendList: [],
        currentFriend: {},
        currentRoom: {},
        friendMessageList: [],
        groupMessageList: []
    },
    getters: {
        [User.GET_USER]: state => state.user,
        [SocketConnected.GET_SOC_CONN]: state => state.socketConnected,
        [FriendList.GET_FRIEND_LIST]: state => state.friendList,
        [GroupList.GET_GROUP_LIST]: state => state.groupList,
        [OnlineFriendList.GET_ONLINE_FRIEND_LIST]: state => state.onlineFriendList,
        [CurrentFriend.GET_CURRENT_FRIEND]: state => state.currentFriend,
        [CurrentRoom.GET_CURRENT_ROOM]: state => state.currentRoom,
        [FriendMessageList.GET_FRIEND_MESSAGE_LIST]: state => state.friendMessageList,
        [GroupMessageList.GET_GROUP_MESSAGE_LIST]: state => state.groupMessageList
    },
    mutations: {
        [User.SET_USER]: (state, user) => {
            if (user) state.user = user;
            else state.user = null;
        },
        [SocketConnected.SET_SOC_CONN]: (state, socketConnected) => {
            if (socketConnected) state.socketConnected = socketConnected;
            else state.socketConnected = false;
        },
        [FriendList.SET_FRIEND_LIST]: (state, friendList) => {
            if (friendList) state.friendList = friendList;
            else state.friendList = []
        },
        [GroupList.SET_GROUP_LIST]: (state, groupList) => {
            if (groupList) state.groupList = groupList;
            else state.groupList = []
        },
        [OnlineFriendList.SET_ONLINE_FRIEND_LIST]: (state, onlineFriendList) => {
            if (onlineFriendList) state.onlineFriendList = onlineFriendList;
            else state.onlineFriendList = [];
        },
        [CurrentFriend.SET_CURRENT_FRIEND]: (state, currentFriend) => {
            if (currentFriend) state.currentFriend = currentFriend;
            else state.currentFriend = {}
        },
        [CurrentRoom.SET_CURRENT_ROOM]: (state, currentRoom) => {
            if (currentRoom) state.currentRoom = currentRoom;
            else state.currentRoom = {}
        },
        [FriendMessageList.SET_FRIEND_MESSAGE_LIST]: (state, friendMessageList) => {
            if (friendMessageList) state.friendMessageList = friendMessageList;
            else state.friendMessageList = []
        },
        [GroupMessageList.SET_GROUP_MESSAGE_LIST]: (state, groupMessageList) => {
            if (groupMessageList) state.groupMessageList = groupMessageList;
            else state.groupMessageList = []
        }


    },
    actions: {
        setUser: ({commit}, user) => commit(User.SET_USER, user),
        setSocketConnected: ({commit}, socketConnected) => commit(SocketConnected.SET_SOC_CONN, socketConnected),
        setFriendList: ({commit}, friendList) => commit(FriendList.SET_FRIEND_LIST, friendList),
        setGroupList: ({commit}, groupList) => commit(GroupList.SET_GROUP_LIST, groupList),
        setOnlineFriendList: ({commit}, onlineFriendList) => commit(OnlineFriendList.SET_ONLINE_FRIEND_LIST, onlineFriendList),
        setCurrentFriend: ({commit}, currentFriend) => commit(CurrentFriend.SET_CURRENT_FRIEND, currentFriend),
        setCurrentRoom: ({commit}, currentRoom) => commit(CurrentRoom.SET_CURRENT_ROOM, currentRoom),
        setFriendMessageList: ({commit}, friendMessageList) => commit(FriendMessageList.SET_FRIEND_MESSAGE_LIST, friendMessageList),
        setGroupMessageList: ({commit}, groupMessageList) => commit(GroupMessageList.SET_GROUP_MESSAGE_LIST, groupMessageList),
    },
    modules: {}
})
