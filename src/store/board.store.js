import { boardService } from '../services/board.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'

export const boardStore = {
    state: {
        boards: [],
        currBoard: null,
        currGroup: null,
        currTask: null,
    },
    getters: {
        boards(state) {
            return state.boards;
        },
        currBoard(state) {
            return state.currBoard
        },
        currTask(state) {
            return state.currTask
        },
        groupName(state) {
            //loop to find task id
        }
    },
    mutations: {
        setBoards(state, { boards }) {
            state.boards = boards;
        },
        setBoard(state, { board }) {
            state.currBoard = board
        },
        setTask(state, { task }) {
            state.currTask = task
        },
        setTaskById(state, { taskID }) {
            //TO-DO
        },
        setGroup(state, { group }) {
            state.currGroup = group
        },
        addBoard(state, { board }) {
            state.boards.push(board)
        },
        removeBoard(state, { boardId }) {
            state.boards = state.boards.filter(board => board._id !== boardId)
        },
        // updateBoard(state, { newBoard }){
        //     state.currBoard = newBoard
        // }   
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
        async loadBoard({ commit }, { boardId }) {
            try {
                console.log(boardId, "board id")
                const board = await boardService.getById(boardId)
                commit({ type: 'setBoard', board })
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
        async updateBoard({ commit }, { board }) {
            try {
                commit({ type: 'setBoard', board })
                return await boardService.update(board)
            }
            catch {
                console.log('boardStore: Error in update task', err)
                throw err
            }
        },
        async updateTask({ commit }, { newTask }) {
            try {
                commit({ type: 'setTask', newTask })
            }

        }

        // async loadAndWatchBoard({ commit }, { boardId }) {
        //     try {
        //         console.log(boardId, "board id")
        //         const board = await boardService.getById(boardId)
        //         commit({ type: 'setCurrBoard', board })
        //     } catch (error) {
        //     }
        // },
        // async setGroup({ commit }, { group }) {
        //     console.log("set group", group)
        //     try {
        //         commit({ type: 'setCurrGroup', group })
        //     } catch (err) {
        //         console.log('boardStore: Error in set group', err)
        //         throw err
        //     }
        // },
        // async setTask({ commit }, { task }) {
        //     console.log("set tasks", task)
        //     try {
        //         commit({ type: 'setCurrTask', task })
        //     } catch (err) {
        //         console.log('boardStore: Error in set task', err)
        //         throw err
        //     }
        // },
    }
}