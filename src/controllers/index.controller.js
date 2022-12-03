import config from "../config.js";
import fs from "fs";
import { v4 } from "uuid";

const json_data = fs.readFileSync("src/books.json", "utf-8");
let data = JSON.parse(json_data);

export const renderIndexPage = (req, res) => res.render("index", { data });

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { title, athlete,  description } = req.body;

  if (!title || !athlete || !description) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newData = {
    id: v4(),
    title,
    athlete,
    
    description,
  };

  // add a new book to the array
  data.push(newData);

  // saving the array in a file
  const json_data = JSON.stringify(data);
  fs.writeFileSync("src/data.json", json_data, "utf-8");

  res.redirect("/");
};

export const deleteData = (req, res) => {
  console.log({ data });
  books = books.filter((data) => data.id != req.params.id);

  // saving data
  const json_data = JSON.stringify(data);
  fs.writeFileSync("src/data.json", json_data);
  res.redirect("/");
};
