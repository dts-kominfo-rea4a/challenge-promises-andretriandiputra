const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  try{
    const hasilIXX = await promiseTheaterIXX().then(data => data.filter((film) => film.hasil == hasil).length);
    const hasilVGC = await promiseTheaterVGC().then(data => data.filter((film) => film.hasil == hasil).length);
    return hasilIXX + hasilVGC;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
