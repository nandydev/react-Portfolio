import "../Contact/FormStyle.css";

import React from 'react'

const Form = () => {
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "39d846b5-904b-439c-ba64-5740122862fa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
        window.location.reload();

    }
    };
  return (
    <div className="form">
        <h2>Contact</h2>
        <form onSubmit={onSubmit}>
            <lable>Your Name : </lable>
            <input name="name" type="text"></input>
            <lable>Your Email : </lable>
            <input name="email" type="email"></input>
            <lable>Subject : </lable>
            <input type="text"></input>
            <lable>Message : </lable>
            <textarea name="message" rows="6" placeholder="Type your message here.."></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form