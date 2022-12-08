// const e = '2020-05-2003';
const Bdate = e.target.value;
const Bday = +new Date(Bdate);
const result = +~~((Date.now() - Bday) / 31557600000);
if (result >= 18) {
  console.log("just right");
} else {
  console.log("to young");
}
console.log("result", result);
