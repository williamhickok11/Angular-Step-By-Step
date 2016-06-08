"use strict";

MusicHistory.factory("authFactory", (firebaseURL) => {
  // used to authenticate
  let ref = new Firebase(firebaseURL);

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      // authenticate the user (all the date associated with the current user)
      let authData = ref.getAuth();
      console.log("authData", authData);
      if (authData) {
        return true;
      } else {
        return false;
      }
    },
    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("authWithPassword method completed successfully");
            resolve(authData);
          }
        });
      });
    }
  };
});
