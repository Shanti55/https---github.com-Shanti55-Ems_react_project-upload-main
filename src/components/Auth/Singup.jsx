
import React, { useState } from 'react'

const Singup = ( {handleSignup}) => {

    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleSignup(email, password , name.firstName,name.lastName)
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        autoComplete="email"
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-3' type="email" placeholder='Enter your email'
                    />
                    <input
                        value={name.firstName}
                        onChange={(e) => {
                            setName((prev) => ({

                                ...prev,
                                firstName: e.target.value

                            }))
                        }}
                        required
                        //autoComplete="email"
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-3'
                        type="text" placeholder='Enter your First Name'
                    />
                    <input
                        value={name.lastName}
                        onChange={(e) => {
                            setName((prev) => ({

                                ...prev,
                                lastName: e.target.value

                            }))
                        }}
                        required
                        //autoComplete="email"
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 ' 
                        type="text" placeholder='Enter your Last Name'

                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        autoComplete="current-password"
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Singup