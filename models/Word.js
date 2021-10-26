const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
    r_seq: {type: String, trim: true},
    r_word: {type: String, required: true, trim: true},
    r_link: {type: String, required: true, trim: true},
    r_chi: {type: String, trim: true},
    r_des: {type: String, required: true, trim: true},
    r_pos: {type: String, required: true, trim: true}
}
// , {collection : 'kor_dic_db'}
)

const Word = mongoose.model('Word', wordSchema, 'kor_dic_db')//mongodb collection
module.exports = Word;