const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//change every day 'till personal API
const riotAPI = 'RGAPI-8c2bbff8-cf0e-4092-ad6e-20b5c7a90dc5';

app.get("/api", (req, res) => {
  res.json({ message: "Hello Summoner!" });
});

app.get("/summonersearch", (req, res) => {
  // fetch riot api 
  // console.log(req);
  // fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' )
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

