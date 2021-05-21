import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

export default function Login() {
	const [ username, setUsername ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ isLoggedin, setIsLoggedIn ] = useState(localStorage.getItem("loggedin"));
	const login = (e) => {
		e.preventDefault();
		if (username === "admin" && password === "admin") {
			localStorage.setItem("loggedin", 1);
			setIsLoggedIn(1);
		} else {
			alert("Wrong username/password");
		}
	};

	return (
		<div className="container-fluid h-100 mt-5">
			<div className="row justify-content-center align-items-center h-100">
				<div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
					<h1 className="text-center text-dark mb-4">Admin Login</h1>
					<form onSubmit={login}>
						<div className="form-group">
							<input _ngcontent-c0="" className="form-control form-control-lg" placeholder="User ID" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
						</div>
						<div className="form-group">
							<input className="form-control form-control-lg" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-info btn-lg btn-block">Sign In</button>
							{isLoggedin !== null && <Redirect to="/admin" />}
						</div>
						<NavLink to="/">
							<button className="btn btn-info btn-lg btn-block"><i class="fa fa-home fa-lg"></i></button>
						</NavLink>
            		</form>
				</div>
        	</div>
		</div>
	);
}
