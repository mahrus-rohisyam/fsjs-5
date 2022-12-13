const CurrentYear = () => {
  let year = new Date();
  console.log(year.getFullYear());
}
// Create Module yang bisa dipake file lain
exports.CurrentYear = CurrentYear;