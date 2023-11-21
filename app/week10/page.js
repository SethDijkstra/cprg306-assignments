"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"


export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try{
            await gitHubSignIn();
        }catch(error){
            console.log(error);
        }
    }
    async function handleSignOut(){
        try{
            await firebaseSignOut();
        }catch(error){
            console.log(error);
        }
    }

    return(
        <main>
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName} {user.email}</p>
                        <img src={user.photoURL} width="30" />
                        <p>Your user id is: {user.uid}</p>
                        <br></br>
                        <br></br>
                        <Link href="/week10/shopping-list" >Shopping List </Link>
                        <br></br>
                        <br></br>
                        <button classname="text-lg m-2 hover:underline" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <button classname="text-lg m-2 hover:underline" onClick={handleSignIn}>
                            Sign In
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}