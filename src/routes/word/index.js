const express = require('express')
const WordRouter = express.Router()
const Word = require('../../../models/Word')

WordRouter.route('/(:word)?').get(async(req, res) => {
    let words = []
    const{word} = req.params
    console.log(word)

    if(word !== "undefined" && word !== undefined){
        words = await Word.find({r_word: word})
    }else{ // 쿼리가 없는 경우
        words = await Word.find()
    }
    res.send({status:200, words})
})

module.exports = WordRouter