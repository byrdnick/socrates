import Vue from 'vue'
import Vuex from 'vuex'
import VueNativeSock from 'vue-native-websocket'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        id_in_group: window.id_in_group,
        messages: [],
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
        chatOver: false,
        saving: false,
    },
    getters: {
        status: (state) => { console.debug('jopa', state.socket.isConnected); return state.socket.isConnected },
        isChatOver: (state) => state.chatOver,
        savingStatus: (state) => state.saving,
    },
    mutations: {
        SAVING_INITIATED(state) {
            state.saving = true
        },
        SAVING_DONE(state) {
            state.saving = false
        },
        addMessage(state, message) {
            const { owner } = message;
            const lastone = state.messages[state.messages.length - 1]
            if (lastone) {
                const { subgroup: prevsubgroup, owner: prevowner } = lastone;
                if (owner === prevowner) {
                    message.subgroup = prevsubgroup;
                    lastone.last = false;
                    message.last = true;

                } else {
                    message.subgroup = prevsubgroup + 1;
                    lastone.last = true;
                    message.first = true;
                    message.last = true;
                }
            }
            else {
                message.subgroup = 0;
                message.first = true;
                message.last = true;

            }
            state.messages.push(message)
        },
        SOCKET_ONOPEN(state, event) {
            Vue.prototype.$socket = event.currentTarget
            state.socket.isConnected = true
        },
        SOCKET_ONCLOSE(state, event) {
            state.socket.isConnected = false
        },
        SOCKET_ONERROR(state, event) {
            console.error(state, event)
        },
        // default handler called for all methods
        SOCKET_ONMESSAGE(state, message) {

        },
        // mutations for reconnect methods
        SOCKET_RECONNECT(state, count) {
            console.info(state, count)
        },
        SOCKET_RECONNECT_ERROR(state) {
            state.socket.reconnectError = true;
        },
    },
    actions: {
        sendMessage: function (context, message) {
            context.commit('addMessage', message);
            Vue.prototype.$socket.sendObj(message)
        },
        incomingMessage: function (context, message) {
            console.debug('INCOMING messagei incoming', message);
            context.commit('addMessage', message);
        },
        confirm: function (context, message) {
            console.debug('messagei confirmed', message)
        },

        requestOldMessages: function (context) {
            const message = { request_old_messages: true }
            Vue.prototype.$socket.send(JSON.stringify(message))
        },
        PrevMessages: function (context, message) {
            console.debug('previous messages received');
            const { msgs } = message
            if (msgs) {
                msgs.forEach(m => {
                    console.debug(m);
                    context.commit('addMessage', m);
                });

            }
        },
        savingRequested: function ({ commit }
        ) {
            console.debug('saving request initiated');
            commit('SAVING_INITIATED')
        },
        savingStopRequested: function ({ commit }
        ) {
            console.debug('saving STOP request initiated');
            commit('SAVING_DONE')
        }

    }
})
const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
const ws_path = ws_scheme + '://' + window.location.host + window.socket_path;
Vue.use(VueNativeSock, ws_path, {
    store: store,
    format: 'json',
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000,
});
export default store;  