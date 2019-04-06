const User = require('../model/userModel');

exports.getUsers = (query) => {

    return new Promise((resolve, reject) => {

        // let queryCustom = {age: { $gte: 9990}};

        User.aggregate([
            {
              '$match': {
                'age': {
                  '$gte': 9995
                }
              }
            }, {
              '$limit': 2
            }
          ], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            }
          );

        // User.find(queryCustom, (err, result) => {
        //     if(err) {
        //         reject(err);
        //     }
        //     resolve(result);
        // });
    });
}

exports.saveUser = (userToSave) => {
    return new Promise((resolve, reject) => {
        let user = new User(userToSave);
        user.save((err) => {
            if(err) {
                reject(err);
            }
            resolve();
        });
    });
}

exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findOneAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}

exports.updateUser = (user) => {
    return new Promise((resolve, reject) => {
        console.log('user', user);
        User.findOneAndUpdate(user.id, user, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}

exports.saveManyUsers = () =>{
    
    return new Promise((resolve, reject) => {
        
        let users = createRadomUsers();

        User.insertMany(users, (err) => {
           
            if(err) {

                reject(err);
            }

            resolve();
        })
    });
}

const createRadomUsers = () => {

    return [...Array(100).keys()].map(x => {

        return {
            user: `User_${x}`,
            name: `Axity_${x}`,
            age: x
        }
    });
}