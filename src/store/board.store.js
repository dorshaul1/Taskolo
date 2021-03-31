import { boardService } from '../services/board.service'

import { socketService, SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
import { utilService } from '../services/util.service';

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
        currGroup(state) {
            return state.currGroup
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
        setTaskById(state, { taskId }) {
            state.currBoard.groups.forEach(group => {
                group.tasks.forEach(task => {
                    if (task.id === taskId) {
                        state.currTask = task
                        state.currGroup = group


                    }
                })
            });
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
        addActivity(state, { activity }) {
            // const byUser = context.rootGetters
            state.currBoard.activities.unshift(activity)
        }
    },
    actions: {
        async loadBoards(context) {
            try {
                const boards = await boardService.query();
                context.commit({ type: 'setBoards', boards })
                // socketService.off(SOCKET_EVENT_REVIEW_ADDED)
                // socketService.on(SOCKET_EVENT_REVIEW_ADDED, board => {
                // context.commit({ type: 'addBoard', board })
                // })


            } catch (err) {
                console.log('boardStore: Error in loadBoards', err)
                throw err
            }
        },
        async loadBoard({ commit }, { boardId }) {
            try {
                // console.log(boardId, "board id")
                const board = await boardService.getById(boardId)
                socketService.emit('board-watch', boardId);
                socketService.off('board-update')
                socketService.on('board-update', board => {
                    console.log('board update socket', board)
                    commit({ type: 'setBoard', board })
                })
                commit({ type: 'setBoard', board })
            } catch (error) {

            }
        },
        async updateBoard({ commit, dispatch }, { board, activityTxt }) {
            try {
                commit({ type: 'setBoard', board })
                dispatch({ type: 'addActivityData', activityTxt })
                return await boardService.update(board)
            }
            catch (err) {
                console.log('boardStore: Error in update board', err)
                throw err
            }
        },
        async updateTask(context, { task, activityTxt }) {
            try {
                console.log('task', task)
                context.commit({ type: 'setTask', task })
                const clone = require("rfdc");
                const boardCopy = clone({ proto: true })(
                    Object.create(context.state.currBoard)
                );
                let currTaskIdx;
                const currGroupIdx = boardCopy.groups.findIndex((group) => {
                    if (group.id === context.state.currGroup.id) {
                        currTaskIdx = group.tasks.findIndex((task) => {
                            return task.id === context.state.currTask.id;
                        });
                        return true;
                    }
                });
                boardCopy.groups[currGroupIdx].tasks[currTaskIdx] = task
                context.dispatch({ type: 'updateBoard', board: boardCopy, activityTxt })
            }
            catch (err) {
                console.log('boardStore: Error in update task', err)
                throw err
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
        addActivityData(context, { activityTxt }) {
            if (!activityTxt) return

            const byMember = context.rootGetters.miniUser
            const task = {
                id: context.state.currTask.id,
                title: context.state.currTask.title
            }
            const activity = {
                id: utilService.makeId(),
                txt: activityTxt,
                createdAt: Date.now(),
                byMember,
                task
            }
            context.commit({ type: 'addActivity', activity })
            console.log(activity)
        }
    }
}
