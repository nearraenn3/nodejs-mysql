const sql = require('../database');

// constructor
const User = function (user) {
    this.name = user.name;
    this.email = user.email;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        result(null, { id: res.insertId, ...newUser });
    })
}

User.getAll = result => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        result(null, res);
    })
}

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);

    });
};

User.updateById = (userId, user, result) => {
    sql.query(
        "UPDATE users SET email = ?, name = ? WHERE id = ?",
        [user.email, user.name, userId],
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            result(null, { id: userId, ...user });
        }
    );
};

User.remove = (userId, result) => {
    sql.query("DELETE FROM users WHERE id = ?", userId, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Deleted user with id: ", userId);
        result(null, res);
    });
};

module.exports = User;