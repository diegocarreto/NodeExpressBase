const User = require('../model/departmentsModel');

exports.getDepartments= (query) => {

    return new Promise((resolve, reject) => {

        User.aggregate([
            {
              '$lookup': {
                'from': 'users', 
                'localField': 'members', 
                'foreignField': 'user', 
                'as': 'user'
              }
            }
          ], (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result);
            }
          );
    });
}
