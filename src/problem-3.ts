function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  const words = lowerCaseSentence.split(" ");
  const result = words.filter((word) => word === lowerCaseWord).length;
  return result;
}

const output = countWordOccurrences("I love typescript", "typescript");
console.log(output);
