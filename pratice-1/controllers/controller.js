const User = require('../models/model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        })
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    User.create(user, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }

    });
}

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
}

exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

    User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.userId}.`
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.userId
                });
            }
        } else res.send({ message: "User was deleted successfully!" });
    });
};
