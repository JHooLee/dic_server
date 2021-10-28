const express = require('express')
const WordRouter = express.Router()
const Word = require('../../../models/Word')

WordRouter.route('/(:word)?').get(async(req, res) => {
    let words = []
    const{word} = req.params
    // const queries = word.split(',')
    console.log(word)
    // console.log(queries)

    if(word !== "undefined" && word !== undefined){
        // console.log(queries)
        try{
            // words = await Word.find({r_des: {$in: queries}})
            //words = await Word.find({r_word: word})
            // words = await Word.find({ r_word: {$regex: `^${word}`}})//데이터베이스에서 검색어로 시작하는 단어 검색
            // words = await Word.find({ r_word: {$regex: `${word}$`}})//검색어로 끝나는 단어
            // words = await Word.find({ r_des: {$regex: `${word}`}})//설명에 검색어가 포함된 단어
            words = await Word.find({ 
                $or:[
                    {r_word: {$regex: `${word}`}},
                    {r_des: {$regex: `${word}`}}
                ]
                })
                .sort({"_id": 1})//-1 최신순(내림차순), 1 과거순(오름차순)
                .limit(6)
            }catch(e){
            console.log(e)
        }

    }else{ // 쿼리가 없는 경우
        console.log(word)
        console.log(`word database: ${Word}`)

        try{
            words = await Word.find()
        }catch(e){
            console.log(e)
        }
        
    }
    res.send({status:200, words})
})

module.exports = WordRouter