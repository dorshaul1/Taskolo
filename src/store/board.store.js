import { boardService } from '../services/board.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'

export const boardStore = {
    state: {
        boards: []
    },
    getters: {
        boards(state) {
            return state.boards;
        },
    },
    mutations: {
        setBoards(state, { boards }) {
            state.boards = boards;
        },
        addBoard(state, { board }) {
            state.boards.push(board)
        },
        removeBoard(state, { boardId }) {
            state.boards = state.boards.filter(board => board._id !== boardId)
        },
    },
    actions: {
        async addBoard(context, { board }) {
            try {
                board = await boardService.add(board)
                context.commit({ type: 'addBoard', board })
                return board;
            } catch (err) {
                console.log('boardStore: Error in addBoard', err)
                throw err
            }
        },
        async loadBoards(context) {
            try {
                const boards = await boardService.query();
                context.commit({ type: 'setBoards', boards })
                socketService.off(SOCKET_EVENT_REVIEW_ADDED)
                socketService.on(SOCKET_EVENT_REVIEW_ADDED, board => {
                    context.commit({ type: 'addBoard', board })
                })

            } catch (err) {
                console.log('boardStore: Error in loadBoards', err)
                throw err
            }
        },
        async removeBoard(context, { boardId }) {
            try {
                await boardService.remove(boardId);
                context.commit({ type: 'removeBoard', boardId })
            } catch (err) {
                console.log('boardStore: Error in removeBoard', err)
                throw err
            }
        },

    }
}