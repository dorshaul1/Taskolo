import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { userService } from './user.service'
import { board } from '../data/board.js'

export const boardService = {
  add,
  query,
  remove,
  getById,
  update,
  getEmptyGroup,
  getEmptyTask,
  getEmptyCheckList,
  getEmptyTodo
}

const KEY = 'board'

_addBoardToStorage()

async function _addBoardToStorage() {
  return await JSON.parse(localStorage.getItem(KEY)) || add(board)
}

// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query() {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  // return httpService.get(`board${queryStr}`)
  return storageService.query(KEY)
}

function remove(boardId) {
  // return httpService.delete(`board/${boardId}`)
  return storageService.delete(KEY, boardId)

}

function update(board) {
  // return httpService.delete(`board/${boardId}`)
  return storageService.put(KEY, board)

}
async function add(board) {
  // const addedBoard = await httpService.post(`board`, board)

  board.byUser = userService.getLoggedinUser()
  board.aboutUser = await userService.getById(board.aboutUserId)
  const addedBoard = storageService.post(KEY, board)

  return addedBoard
}

function getById(boardId) {
  return storageService.get(KEY, boardId)
}

function getEmptyGroup() {
  return {}
}

function getEmptyTask() {
  return {}
}

function getEmptyCheckList() {
  return {
    id: utilService.makeId(),
    title: '',
    todos: []
  }
}

function getEmptyTodo() {
  return {
    "id": utilService.makeId(),
    "title": '',
    "isDone": false
  }
}