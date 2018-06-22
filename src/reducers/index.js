import {combineReducers} from 'redux';

import SparkleItemsReducer from './SparkleItemsReducer';
import NoSparkleItemsReducer from './NoSparkleItemsReducer';
import FilterFormReducer from './FilterFormReducer';

export default combineReducers({
  filterForm: FilterFormReducer,
  sparkleItems: SparkleItemsReducer,
  noSparkleItems: NoSparkleItemsReducer,
});
