import React,{useState} from 'react'
import Headers from './Nav';

export default function Singin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loginsumbit = () => {
        console.log("weclome");
    }
    return (
       
        <div bgcolor="red">
             <Headers />
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5  p-5 m-5 border">
                        <form onClick={loginsumbit}>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
