const USER = require('../models/user');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require("express");

async function handleSignUp(req, res){
    try{
        console.log('Data received on backend: ', req.body);
        const {username, email, password } = req.body;

        const userExists = await USER.findOne({ email });
        if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await USER.create({
            username: username,
            email: email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: 'User Created Successfully',
            data: {email: newUser.email, username: newUser.username }
        });
    }
    catch(error){
        res.status(500).json({message: 'Error Creating User', error: error.message})
    }
};

async function handleLogin(req, res){
    try{
        const{ email, password } = req.body;
        const user = await USER.findOne({ email })
        // console.log(user.email, user.password)
        if(!user) {
            return res.status(400).json({status: false, message:"User not found"})
            // if(user && user.password === password){
            //     res.status(201).json({message: "User Logged in", user})
            //     console.log("User Password Correct");
            // }
        }
        else{
            const match = await bcrypt.compare(password, user.password);
            if(!match){
                return res.status(400).json({ status: false, message: "Invalid credentials" });
            }
            res.status(201).json({
                message: 'User LoggedIn Successfully',
                data: { email: email, username: user.username }
            });

        }
    }
    catch(error) {
        res.status(500).json({message: "Error Login"})
    }
}

module.exports = {
    handleSignUp,
    handleLogin
};