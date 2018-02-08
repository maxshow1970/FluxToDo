const validate = (text) => {
  let patt2 = /^\D/g;
  text = text.trim();
  return text !== '' && patt2.test(text[0]) && text.length < 15
}
export default validate;