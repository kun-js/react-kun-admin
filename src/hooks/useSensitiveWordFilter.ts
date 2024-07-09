// useSensitiveWordFilter.ts
export const sensitiveWords = ["脑残", "弱智", "白痴"]; // 敏感词列表

const useSensitiveWordFilter = (text: string): string => {
  // 过滤敏感词并替换为相同长度的星号
  return sensitiveWords.reduce((acc, word) => {
    return acc.replace(new RegExp(word, "g"), new Array(word.length + 1).join("*"));
  }, text);
};

export default useSensitiveWordFilter;
