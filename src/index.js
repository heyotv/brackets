module.exports = function check(str, bracketsConfig) {
  let newConfig = bracketsConfig.map(el => el.join(""));

  for (let i = 0; i <= newConfig.length; i++) {
      if (str.includes(newConfig[i])) {
          str = str.replace(newConfig[i], "");
          console.log(i);
          i -= newConfig.length;
      }
  }
  return str ? false : true;
}
