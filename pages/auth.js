import { signIn, signOut, useSession } from "next-auth/react";

export default function Auth() {

    const session = useSession();
    console.log(session);
    if(session.data == null){
        return <button onClick={signIn}>Login</button>
    }

    return(
        <div>
            <h1>Auth Page</h1>
            <p>This is the auth page.</p>
            <h3>Welcome: {session?.data?.user?.name}</h3>
            <button onClick={signOut}>SignOut</button>
        </div>
    );
}