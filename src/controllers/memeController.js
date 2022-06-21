let axios = require("axios");

let getmemes = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://api.imgflip.com/get_memes",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let memeHandler = async function (req, res) {
  try {
    let options = {
      method: `post`,
      url: `://api.imgflip.com/caption_image?template_id=181913649&text0=Bidyut&text1=yes&username=BidyutKundu&password=bidyut34268`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getmemes = getmemes;
module.exports.memeHandler = memeHandler;
