const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const gamesRouter = function (games) {
    const router = express.Router();

    router.get('/', (req, res) => {
        games
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        games
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    router.post('/', (req, res) => {
        const newGame = {
        "data": [
            {position: "a8", color: "white", piece: {"name": "rook"}},
            {position: "b8", color: "black", piece: {"name": "knight"}},
            {position: "c8", color: "white", piece: {"name": "bishop"}},
            {position: "d8", color: "black", piece: {"name": "queen"}},
            {position: "e8", color: "white", piece: {"name": "king"}},
            {position: "f8", color: "black", piece: {"name": "bishop"}},
            {position: "g8", color: "white", piece: {"name": "knight"}},
            {position: "h8", color: "black", piece: {"name": "rook"}},
            {position: "a7", color: "white", piece: {"name": "pawn"}},
            {position: "b7", color: "black", piece: {"name": "pawn"}},
            {position: "c7", color: "white", piece: {"name": "pawn"}},
            {position: "d7", color: "black", piece: {"name": "pawn"}},
            {position: "e7", color: "white", piece: {"name": "pawn"}},
            {position: "f7", color: "black", piece: {"name": "pawn"}},
            {position: "g7", color: "white", piece: {"name": "pawn"}},
            {position: "h7", color: "black", piece: {"name": "pawn"}},
            {position: "a6", color: "white", piece: {}},
            {position: "b6", color: "black", piece: {}},
            {position: "c6", color: "white", piece: {}},
            {position: "d6", color: "black", piece: {}},
            {position: "e6", color: "white", piece: {}},
            {position: "f6", color: "black", piece: {}},
            {position: "g6", color: "white", piece: {}},
            {position: "h6", color: "black", piece: {}},
            {position: "a5", color: "white", piece: {}},
            {position: "b5", color: "black", piece: {}},
            {position: "c5", color: "white", piece: {}},
            {position: "d5", color: "black", piece: {}},
            {position: "e5", color: "white", piece: {}},
            {position: "f5", color: "black", piece: {}},
            {position: "g5", color: "white", piece: {}},
            {position: "h5", color: "black", piece: {}},
            {position: "a4", color: "white", piece: {}},
            {position: "b4", color: "black", piece: {}},
            {position: "c4", color: "white", piece: {}},
            {position: "d4", color: "black", piece: {}},
            {position: "e4", color: "white", piece: {}},
            {position: "f4", color: "black", piece: {}},
            {position: "g4", color: "white", piece: {}},
            {position: "h4", color: "black", piece: {}},
            {position: "a3", color: "white", piece: {}},
            {position: "b3", color: "black", piece: {}},
            {position: "c3", color: "white", piece: {}},
            {position: "d3", color: "black", piece: {}},
            {position: "e3", color: "white", piece: {}},
            {position: "f3", color: "black", piece: {}},
            {position: "g3", color: "white", piece: {}},
            {position: "h3", color: "black", piece: {}},
            {position: "a2", color: "white", piece: {"name": "pawn"}},
            {position: "b2", color: "black", piece: {"name": "pawn"}},
            {position: "c2", color: "white", piece: {"name": "pawn"}},
            {position: "d2", color: "black", piece: {"name": "pawn"}},
            {position: "e2", color: "white", piece: {"name": "pawn"}},
            {position: "f2", color: "black", piece: {"name": "pawn"}},
            {position: "g2", color: "white", piece: {"name": "pawn"}},
            {position: "h2", color: "black", piece: {"name": "pawn"}},
            {position: "a1", color: "white", piece: {"name": "rook"}},
            {position: "b1", color: "black", piece: {"name": "knight"}},
            {position: "c1", color: "white", piece: {"name": "bishop"}},
            {position: "d1", color: "black", piece: {"name": "queen"}},
            {position: "e1", color: "white", piece: {"name": "king"}},
            {position: "f1", color: "black", piece: {"name": "bishop"}},
            {position: "g1", color: "white", piece: {"name": "knight"}},
            {position: "h1", color: "black", piece: {"name": "rook"}}
        ],
        "game-state": {
            "state": "active",
            "player1": req.body.player1,
            "player2": req.body.player2,
            "turn": "white",
        }
        }
        games
        .insertOne(newGame)
        .then((result) => {
            res.json(result.ops[0]);
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        games
        .deleteOne({ _id: ObjectID(id) })
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    return router;

};

module.exports = gamesRouter;
