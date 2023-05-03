function checkSpam(str) {
  const result = str.toLowerCase();

  if (result.includes('1xbet') || result.includes('xxx')) {
    return true;
  }

  return false;
}
