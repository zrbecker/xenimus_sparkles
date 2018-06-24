import items from '../constants/items'
import { UPDATE_FILTER } from '../actions/filterUpdateFilter'
import { itemShouldSparkle } from './util'

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return items.filter(item => !itemShouldSparkle(item, action.filter))
    default:
      return state
  }
}
