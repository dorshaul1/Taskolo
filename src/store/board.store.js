import { boardService } from '../services/board.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'

export const boardStore = {
    state: {
        boards: [],
        currBoard: null,
        currTask: null
    },
    getters: {
        boards(state) {
            return state.boards;
        },
        currBoard(state) {
            return state.currBoard
        }
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
        setCurrBoard(state, { board }) {
            state.currBoard = board
        },
        setCurrTask(state, { task }) {
            state.currTask = task
        }
    },
    actions: {
        async loadBoards(context) {
            try {
                const boards = await boardService.query();
                console.log(boards, "loadBoards in store")
                context.commit({ type: 'setBoards', boards })
                // socketService.off(SOCKET_EVENT_REVIEW_ADDED)
                // socketService.on(SOCKET_EVENT_REVIEW_ADDED, board => {
                //     context.commit({ type: 'addBoard', board })
                // })
                
            } catch (err) {
                console.log('boardStore: Error in loadBoards', err)
                throw err
            }
        },
        async loadAndWatchBoard({ commit }, { boardId }) {
            try {
                console.log(boardId, "board id")
                const board = await boardService.getById(boardId)
                commit({ type: 'setCurrBoard', board })
            } catch (error) {

            }
        },
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
        async removeBoard(context, { boardId }) {
            try {
                await boardService.remove(boardId);
                context.commit({ type: 'removeBoard', boardId })
            } catch (err) {
                console.log('boardStore: Error in removeBoard', err)
                throw err
            }
        },
        async loadAndWatchBoard({ commit }, { boardId }) {
            try {
                console.log(boardId, "board id")
                const board = await boardService.getById(boardId)
                commit({ type: 'setCurrBoard', board })
            } catch (error) {
            }
        },
        async setTask({commit}, { taskId }) {
            console.log("set tasks", taskId)
            try {
                commit({ type: 'setCurrTask', taskId})
            } catch (err) {
                console.log('boardStore: Error in set task', err)
                throw err
            }
        },
        async updateBoard(context){

        }
        // async changeBoardProperty({ commit }, property, value){
        //     try{
        //         board[property] = await value
        //         console.log('board[property]:', board[property])
        //     } catch(error){

        //     }
        // }
    }
}