import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import style from '../../styles/User.module.css';

const userPage = () => {

    const router = useRouter();
    
    const userFetcher = async (...args) => fetch(...args).then(res => res.json());
    const { data , error } = useSWR('https://dummyjson.com/users', userFetcher);

   // const [users, setUsers] = useState([]);
   // console.log(users);
    // useEffect(() => {
    //     async function fetchUsers() {
    //         const response = await fetch('https://dummyjson.com/users');
    //         setUsers(await response.json());
    //     }
    //     fetchUsers();

    // }, []);

    if(error)   return <p>Error loading users</p>;
    if(!data) return <p>Loading...</p>;
    const users = data;

    return (
        <div>
            <h1>Users</h1>
            {
                users.users && (
                    <ul className={style.ul}>
                        {users.users.map((user) => (
                            <div className={style.text}>
                            <li  key={user.id}>{user.firstName}</li>
                            <button onClick={() => router.push(`/users/${user.id}`)}>Click for more Details.</button>
                            </div>
                    ))}
                    </ul>
                )
            }
        </div>
    );
}

export default userPage;