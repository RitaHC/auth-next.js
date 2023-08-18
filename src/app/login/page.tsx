//conversion of a component into a frontend- or - Client component
"use client"

import Link from "next/link"
import React from "react"
// UseRouter now comes from "next/navigation" and not 
import { useRouter } from "next/navigation"
import {axios} from "axios"
import { useState } from "react"

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    // When talking to db, craete the function as a async
    const onLogin = async () => {

    }


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login Page</h1>
            <hr />
             <label htmlFor="email">email</label>
            <input 
                className="p-2 border-gray-300 "
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
             />
               <label htmlFor="password">password</label>
            <input 
                className="p-2 border-gray-300 "
                type="text"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="password"
             />
             <button 
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onLogin}>
                    Signup Here
                </button>
             <Link href="/signup">Signup Page here</Link>
        </div>
    )
}


