import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () =>{
        console.log("123")
        
        setCurrentUser({
            id: 1,
            name:"Vibhor Minocha",
            profilePic:
                "https:media.licdn.com/dms/image/D4D35AQGUghBge0FG_Q/profile-framedphoto-shrink_400_400/0/1678209265252?e=1695290400&v=beta&t=0eYvNBJVHT83nfWyUJDqXt2tq6I2v0azkbDGDYNCCJk"
        });
    };

     useEffect(() =>{
         localStorage.setItem("user",JSON.stringify(currentUser));
     },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};