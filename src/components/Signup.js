import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault(); // prevent browser from reloading/refresh

    if (credentials.password !== credentials.cpassword) {
    //   alert("Password not matched");
      props.showAlert("Password not matched","danger")
    } else {
      const response = await fetch(
        "http://localhost:5000/api/auth/createUser",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //save the auth token and redirect
        props.showAlert("Account Created Succesfully","success")
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        // alert("Invalid credentials");
        props.showAlert("Invalid credentials","danger")
        
      }
    }
  };
  const onClick = () => {
    var pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
    var cpass = document.getElementById("cpassword");
    if (cpass.type === "password") {
      cpass.type = "text";
    } else {
      cpass.type = "password";
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            required
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            className="form-control"
            id="password"
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            value={credentials.cpassword}
            className="form-control"
            id="cpassword"
            onChange={onChange}
          />
          <input type="checkbox" onClick={onClick} />
          Show Password
        </div>
        <button disabled={""} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
