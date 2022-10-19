import express from 'express'
const app = express()

app.get("/api", (req, res) => {
  res.json( {"recipes": ["recipeOne", "recipeTwo", "recipeThree", "recipeFour"] })
})

app.listen(5050, () => { console.log("Server started on port 5050") })
