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
            {position: "a8", color: "white", piece: {"name": "rook", "color": "black"}},
            {position: "b8", color: "black", piece: {"name": "knight", "color": "black"}},
            {position: "c8", color: "white", piece: {"name": "bishop", "color": "black"}},
            {position: "d8", color: "black", piece: {"name": "queen", "color": "black"}},
            {position: "e8", color: "white", piece: {"name": "king", "color": "black"}},
            {position: "f8", color: "black", piece: {"name": "bishop", "color": "black"}},
            {position: "g8", color: "white", piece: {"name": "knight", "color": "black"}},
            {position: "h8", color: "black", piece: {"name": "rook", "color": "black"}},
            {position: "a7", color: "white", piece: {"name": "pawn", "color": "black"}},
            {position: "b7", color: "black", piece: {"name": "pawn", "color": "black"}},
            {position: "c7", color: "white", piece: {"name": "pawn", "color": "black"}},
            {position: "d7", color: "black", piece: {"name": "pawn", "color": "black"}},
            {position: "e7", color: "white", piece: {"name": "pawn", "color": "black"}},
            {position: "f7", color: "black", piece: {"name": "pawn", "color": "black"}},
            {position: "g7", color: "white", piece: {"name": "pawn", "color": "black"}},
            {position: "h7", color: "black", piece: {"name": "pawn", "color": "black"}},
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
            {position: "a2", color: "white", piece: {"name": "pawn", "color": "white"}},
            {position: "b2", color: "black", piece: {"name": "pawn", "color": "white"}},
            {position: "c2", color: "white", piece: {"name": "pawn", "color": "white"}},
            {position: "d2", color: "black", piece: {"name": "pawn", "color": "white"}},
            {position: "e2", color: "white", piece: {"name": "pawn", "color": "white"}},
            {position: "f2", color: "black", piece: {"name": "pawn", "color": "white"}},
            {position: "g2", color: "white", piece: {"name": "pawn", "color": "white"}},
            {position: "h2", color: "black", piece: {"name": "pawn", "color": "white"}},
            {position: "a1", color: "white", piece: {"name": "rook", "color": "white"}},
            {position: "b1", color: "black", piece: {"name": "knight", "color": "white"}},
            {position: "c1", color: "white", piece: {"name": "bishop", "color": "white"}},
            {position: "d1", color: "black", piece: {"name": "queen", "color": "white"}},
            {position: "e1", color: "white", piece: {"name": "king", "color": "white"}},
            {position: "f1", color: "black", piece: {"name": "bishop", "color": "white"}},
            {position: "g1", color: "white", piece: {"name": "knight", "color": "white"}},
            {position: "h1", color: "black", piece: {"name": "rook", "color": "white"}}
        ],
        "game-state": {
            "state": "active",
            "player1": {
                "name": req.body.player1,
                "color": "white",
                "graveyard": []
            },
            "player2": {
                "name": req.body.player2,
                "color": "black",
                "graveyard": []
            },
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
