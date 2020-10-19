const router = require("express").Router()

const path = require("path")
const db = require("../db/db.json")

const fs = require("fs")

router.get("/api/notes", function(req, res){
    res.json(db)
})

router.post("/api/notes", function(req, res){
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), function(){
        console.log("success")
        res.json(db)
    })
})

module.exports=router