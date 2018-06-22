import {
  CHANGE_ITEM_LEVEL,
  CHANGE_ALWAYS_INCLUDED,
  CHANGE_ALWAYS_EXCLUDED
} from '../actions/filterFormActions';

const INITIAL_STATE = {
  itemLevel: "",
  alwaysInclude: "",
  alwaysExclude: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ITEM_LEVEL:
      return {...state, itemLevel: action.value};
    case CHANGE_ALWAYS_INCLUDED:
      return {...state, alwaysInclude: action.value};
    case CHANGE_ALWAYS_EXCLUDED:
      return {...state, alwaysExclude: action.value};
    default:
      return state;
  }
}
