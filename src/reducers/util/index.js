
const matchesPhrase = (name, phrases) => {
  return phrases.some(
    phrase => name.toLowerCase().includes(phrase.toLowerCase()));
}

export const itemShouldSparkle = ({itemLevel, name}, filter) => {
  if (matchesPhrase(name, filter.alwaysExclude)) {
    return false;
  }

  if (matchesPhrase(name, filter.alwaysInclude)) {
    return true;
  }

  return isNaN(filter.itemLevel) || itemLevel > filter.itemLevel;
}
