angular
  .module('fireideaz')
  .service('Auth', function () {
    var mainRef = new Firebase("https://firedeaztest.firebaseio.com");
    
    function createUserAndLog(newUser, callback) {
      mainRef.createUser({
        email    : newUser + '@fireideaz.com',
        password : newUser
      }, function(error, userData) {
        if (error) {
          console.log('Create user failed: ', error);
        } else {
          logUser(newUser, callback);
        }
      });
    };

    function logUser(user, callback) {
      mainRef.authWithPassword({
        email    : user + '@fireideaz.com',
        password : user
      }, function(error, authData) {
        if (error) {
          console.log('Log user failed: ', error);
        } else {
          console.log('user logged: ', authData);
          callback(authData);
        }
      });
    };

    return {
      createUserAndLog: createUserAndLog,
      logUser: logUser
    };
  });