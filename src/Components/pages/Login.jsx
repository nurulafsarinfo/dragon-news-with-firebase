import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { setUser, logIn } = use(AuthContext);

    const handleSignIn = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email, password})

        logIn(email, password)
            .then((user) => {
                console.log(user)
                setUser(user);
            })
            .catch((error) =>{
                console.log(error.message);
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
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className='text-center font-semibold pt-5'>Don't Have An Account ? <Link className='text-secondary hover:underline ' to="/auth/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;