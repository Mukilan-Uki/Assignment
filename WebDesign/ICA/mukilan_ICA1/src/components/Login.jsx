import "./Login.css"

export default function Login(){
    return(
        <>
        <div>
            <div className="Login">
                <p className="title">Login</p>
                <div className="input">
                <label>Email:</label><br/>
                <input type="email" id="email" className="box" placeholder="Enter email"/><br/>
                <label>Password:</label><br/>
                <input type="password" id="password" className="box" placeholder="Enter password"/><br/>
                <input type="checkbox" id="check" className="check"/>
                <label className="show">Show Password</label><br/>
                </div>
                <button>SIGN IN</button><br/>
                <p>Forgot <a href="#">Username / Password</a>?</p>
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
        </>
    )
}