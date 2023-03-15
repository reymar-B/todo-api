const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => { res.status( 200 ).json( { a :'list of todos' }) }) // get all todo lists

    .post('/', (req, res) => { res.status( 200 ).json( { a :'this is todo id' }) }) // create todo 

    .put('/:todo_id', (req, res) => { res.status( 200 ).json( { a :'this is todo id' }) }) // update todo

    .delete('/:todo_id', (req, res) => { res.status( 200 ).json( { a :'this is todo id' }) }) // delete todo

module.exports = router