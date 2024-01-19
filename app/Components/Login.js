"use client"
import Link from "next/link";

import { useUser } from '@auth0/nextjs-auth0/client';
const Login = () => {
    const { user } = useUser()
    return (
        <>
            {user ? (
                <div className="justify-between text-center box-border p-4 rounded-md ">
                    <p className="text-md"></p>
                    <Link href="/api/auth/login">
                        <button className="w-32 h-12 m-2 font-semibold text-center text-white text-lg bg-blue-700 hover:bg-blue-800 rounded-md">Add Account</button>
                    </Link>
                    <Link href="/api/auth/logout">
                        <button className="w-32 h-12 m-2 font-semibold text-center text-white text-lg bg-green-600 hover:bg-green-700 rounded-md">LogOut</button>
                    </Link>
                </div>
            ) : (
                <div className="w-full text-center mt-56">
                    <h1 className="text-5xl  font-bold m-4">Welcome to the SpaceX</h1>
                    <p className="text-xl font-semibold">SpaceX is a launch service provider, defense contractor, and satellite communications company. 
                    It was the first private company to successfully launch and return a spacecraft from Earth orbit and 
                    the first to launch a crewed spacecraft and dock it with the International Space Station (ISS)</p>
                    <Link href="/api/auth/login">
                        <button className="w-56 h-14 m-5 font-semibold text-center text-white text-2xl bg-blue-700 hover:bg-blue-800 rounded-md">Login</button>
                    </Link>
                    <Link href="/api/auth/logout">
                        <button className="w-56 h-14 m-5 font-semibold text-center text-white text-2xl bg-green-600 hover:bg-green-700 rounded-md">LogOut</button>
                    </Link>
                </div>
            )}

        </>
    )
};

export default Login;
