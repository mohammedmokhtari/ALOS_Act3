const express = require("express");
const joi = require("joi");
const route = express.Router();
const Restaurants = require("../../Restaurants.json");
const validatee = require("../routes/middlewares/validate");
const UserController = require ("./Controllers/UserController")
const ReviewController = require ("./Controllers/ReviewController")
const Traveling = require("../../Travel.json");

//  NEW FEATURE reviews IN V2 :


router.get('/Traveling/:id/reviews',
    ReviewController.get)

router.post('/Traveling/:id/reviews',
    ReviewController.create)

router.delete('reviews/:id',
    ReviewController.delete)



//  NEW FEATURE users IN V2 :


route.get('/users',
    UserController.get_all)

route.get('/users/:id',
    UserController.get)

route.get('/users/:id/reviews',
    UserController.get_reviews)



route.get("/", (req, res) => {
  res.json(Traveling);
});

// GET DATA BY ID
route.get("/:id", (req, res) => {
  const index = Traveling.find((e) => e.id === req.params.id);
  index ? res.status(200).json(index) : res.status(404).send("NOT FOUND");
});

//  POST DATA 
route.post("/", validatee, (req, res) => {
  const id = Traveling[Traveling.length - 1].id + 1;
  Traveling.push({ id, ...req.body });
 
  res.status(200).send("added succefuly");
});

// MODIFY DATA IN API BY ID
route.put("/:id", validatee, (req, res) => {
  const index = Traveling.find((e) => e.id === req.params.id);
  Traveling[index] = req.body;
  res.status(200).send("Updated  succefuly");
});

//  DELETE DATA BY ID
route.delete("/:id", (req, res) => {
  const newrestaurant = Traveling.filter((e) => e.id != req.params.id);
	Traveling= newrestaurant;
  res.status(200).send("deleted   succefuly");
});

https: module.exports = route;
