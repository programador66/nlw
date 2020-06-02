import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json([
    {
      msg: "hello world",
    },
  ]);
});

export default routes;
