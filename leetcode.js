var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad"))


// поиск совпадения
// если совпадение найдено, проверить все буквы подстроки
// если следующие буквы не найдены, прервать цикл и начать поиск совпадения
// если счетчик равен длине подстроки - 1, то совпадение найдено, вернуть индекс буквы
// если совпадений нет, вернуть -1

var isSameTree = function(p,q){
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  if(p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
