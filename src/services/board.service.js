import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import {userService} from './user.service'
import {board} from '../data/board.js'

export const boardService = {
  add,
  query,
  remove
}

const KEY = 'board'

_addBoardToStorage()

async function _addBoardToStorage(){
  return  await JSON.parse(localStorage.getItem(KEY)) || add(board)
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
async function add(board) {
  // const addedBoard = await httpService.post(`board`, board)

  board.byUser = userService.getLoggedinUser()
  board.aboutUser = await userService.getById(board.aboutUserId)
  const addedBoard = storageService.post(KEY, board)

  return addedBoard
}
