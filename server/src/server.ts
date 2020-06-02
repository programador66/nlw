import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem ");
  response.json([
    {
      user: "caio",
    },
  ]);
});

app.listen(3333);
