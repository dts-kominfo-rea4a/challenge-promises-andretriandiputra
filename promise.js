const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (checkHasil) => {
  try{
    const hasilIXX = await promiseTheaterIXX().then(data => data.filter((film) => film.hasil == checkHasil).length);
    const hasilVGC = await promiseTheaterVGC().then(data => data.filter((film) => film.hasil == checkHasil).length);
    return hasilIXX + hasilVGC;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
