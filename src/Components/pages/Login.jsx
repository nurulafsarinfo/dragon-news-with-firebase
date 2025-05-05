import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { setUser, logIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleSignIn = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                setUser(result.user);
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) =>{
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage);
                setError(errorCode)
            })
    }


    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your accout</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <fieldset className="fieldset">
                        
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className='text-center font-semibold pt-5'>Don't Have An Account ? <Link className='text-secondary hover:underline ' to="/auth/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;