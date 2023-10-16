import { db } from "../connect.js"
import bcrypt from "bcryptjs";

export const register = (req,res)=>{
    //check the user if it already exists

    const q = "SELECT FROM user WHERE username = ?"

    db.query(q,[req.body.username], (err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User Already Exists!")

        //create a new user
        //create a hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users ('username', 'email', 'password', 'name') VALUE(?)"

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json("User has been created!")
        })
    })

   
}

export const login = (req,res)=>{

}

export const logout = (req,res)=>{

}