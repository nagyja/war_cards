import React, { Component } from 'react';

const userProfile = { 
          name: "God Emperor",
          password: "goldenthrone",
          email: "emperor@imperium.gov"
};

function hidePass(e){
          let i;
          let hiders = '*';
          for (i=0; i<e; i++){
                    hiders = hiders +'*';              
          }
          return hiders;
}
 
const pwLength= userProfile.password.length;

const Profile = ({element, selectToEdit})=>{
          const hiddenPass = hidePass(pwLength);
         return(
                    <div>
                              <ul>User Name: {userProfile.name}</ul>
                              <ul>Email: {userProfile.email}</ul>
                              <ul>Password: {hiddenPass} </ul>
                    </div>
          );

};

export default Profile;