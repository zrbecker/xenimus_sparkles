export const CHANGE_ITEM_LEVEL = 'CHANGE_ITEM_LEVEL';
export const CHANGE_ALWAYS_INCLUDED = 'CHANGE_ALWAYS_INCLUDED';
export const CHANGE_ALWAYS_EXCLUDED = 'CHANGE_ALWAYS_EXCLUDED';

export const changeItemLevel = value => {
  return {
    type: CHANGE_ITEM_LEVEL,
    value: value,
  };
}

export const changeAlwaysInclude = value => {
  return {
    type: CHANGE_ALWAYS_INCLUDED,
    value: value,
  };
}

export const changeAlwaysExclude = value => {
  return {
    type: CHANGE_ALWAYS_EXCLUDED,
    value: value,
  };
}
