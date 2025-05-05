/* eslint-disable no-unused-vars */
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState();
    const navigate = useNavigate();

    const handleregister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;


        if(name.length < 6){
            setNameError("Name should be 6 charecter");
            return;
        }else{
            setNameError('')
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo}).then(()=>{
                    setUser({...user, displayName: name, photoURL: photo})
                    // console.log("user prfile is: ",result);
                    navigate("/")
                })
                .catch((error) => {
                    console.log(error);
                    setUser(user);
                })
                alert("Register completed !")
            
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your accout</h2>
                <form onSubmit={handleregister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required/>
                        {
                            nameError && <p className='text-red-500'>{nameError}</p>
                        }

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoUrl' className="input" placeholder="Photo url" required/>


                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" 
                        name='password' className="input" placeholder="Password" required/>
        
                        <button  type='submit' className="btn btn-neutral mt-4">Register Now</button>
                        <p className='text-center font-semibold pt-5'>Already Have An Account ? <Link className='text-secondary hover:underline ' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;