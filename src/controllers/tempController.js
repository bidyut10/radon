let axios = require("axios");

let getcity = async function (req, res) {
  try {
    let cities = [
      "Bengalore",
      "Mumbai",
      "Kolkata",
      "London",
      "Moscow",
      "Delhi",
      "Chennai",
    ];
    let cityObjArray = [];

    for (i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q= ${cities[i]} &appid=a0bb8d00b29eba1994d7eabaeec6b629`
      );
      console.log(resp.data.main.temp);

      obj.temp = resp.data.main.temp;
      cityObjArray.push(obj);
    }
    let sorted = cityObjArray.sort(function (a, b) {
      return a.temp - b.temp;
    });
    console.log(sorted);
    res.status(200).send({ status: true, msg: sorted });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: "server err" });
  }
};

module.exports.getcity = getcity;
