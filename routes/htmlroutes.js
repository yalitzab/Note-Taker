const router = require("express").Router()

const path = require("path")

// home page
router.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

// subpage
router.get("/notes",function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

module.exports=router
