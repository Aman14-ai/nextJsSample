import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useUser = () => ({user: "Aman" , isLoading:false});

const UserNamePage = () => {
    const router = useRouter();
    // console.log(router.query);
    const user = useUser();
    useEffect(() => {
        if(user.user == null){
            router.replace('/');    
        }
    } , [router, user.user , []]);

    let { name } = router.query;
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to your personalized page.</p>
            <button onClick={(e) => router.push(`/username/${name}/setting`)}>Click to open settings</button>
            <br/><button onClick={(e) => router.replace(`/`)}>Go to home</button>
            <br />
            <button onClick={(e) => router.push({
                pathname: '/username/[name]/setting',
                query: {name: name}
            })}>Click to go settings by another method.</button>
            <br/>
            <button onClick={(e) => router.reload()}>Reload</button>
        </div>
    );
};

export default UserNamePage;