export const getCurrentYear = () =>
  new Date().getFullYear();

export const replaceWord = (text, word, newWord) =>
  text.replace(word, newWord);