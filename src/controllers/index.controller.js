import config from "../config.js";
import fs from "fs";
import { v4 } from "uuid";

const json_records = fs.readFileSync("src/records.json", "utf-8");
let records = JSON.parse(json_records);

export const renderIndexPage = (req, res) => res.render("index", { records });

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderChartPage = (req, res) => res.render("chart", config);


export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { title, athlete, image, description, time} = req.body;

  if (!title || !athlete || !image || !description || !time) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newRecord = {
    id: v4(),
    title,
    time,
    athlete,
    image,
    description,
  };

  // add a new book to the array
  records.push(newRecord);

  // saving the array in a file
  const json_records = JSON.stringify(records);
  fs.writeFileSync("src/records.json", json_records, "utf-8");

  res.redirect("/");
};

export const deleteRecord = (req, res) => {
  console.log({ records });
  records = records.filter((record) => record.id != req.params.id);

  // saving data
  const json_records = JSON.stringify(records);
  fs.writeFileSync("src/records.json", json_records);
  res.redirect("/");
};

//fetch data
function updateChart(){
  async function fetchData(){
    const url = "src/records.json";
    const response = await fetch(url);

    const datapoints =  await response.json();
    return datapoints
  }
  fetchData().then(datapoints => {
    const athlete = datapoints.athlete
  })
}
