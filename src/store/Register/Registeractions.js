
function register(user) {
    
    return dispatch=>{
        dispatch(request(user));
    }

    function request(user) 
    { 
        return { 
            type: "USERS_REGISTER_REQUEST", user 
        } 
   }
    function success(user)
     { return 
        { type: "USERS_REGISTER_SUCCESS", user 
        }
     }
    function failure(error) 
    { return { 
        type: "USERS_REGISTER_FAILURE", error
        }
    }

}