import React from "react";  


export function loginValidator(userData) {
    const errors = {};
    validateEmail(errors, userData.email.value);
    validatePassword(errors, userData.password.value);
    return errors;
}

export function registerValidator(userData) {
    const errors = {};
    validateEmail(errors, userData.email.value);
    validatePassword(errors, userData.password.value);
    validatePasswords(errors, userData.password.value, userData.password2.value);
    return errors;
}

export const showError = (type, errors) => {
    const id = type + "-warning";
    const massage = errors[type];
    return (
        <div className="warning" id={id}>{massage}</div>
    )
}
  
const validateEmail = (errors, email) => {
    if (email === '') {
        errors.email = "Email can't be empty";
    } else if (!email.includes('@')) {
        errors.email = 'Email must includes @';
    }
}
  
const validatePassword = (errors, password) => {
    if (password === '') {
        errors.password = "Password can't be empty";
    } else if (password.length < 6 || password.length > 15) {
        errors.password = 'Password must be 6 to 15 characters long';
    }  else if (!/\d/.test(password)) {
        errors.password = 'Password must includes at least one number';
    }  else if (!/\W/.test(password)) {
        errors.password = 'Password must includes at least one special character'; 
    }   
}

const validatePasswords = (errors, password, password2) => {
    if (password !== password2) {
        errors.passwords = "Mismatched passwords";
    }
}



