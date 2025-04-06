import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const User = () => {
    const router = useRouter();
    const { idd } = router.query;
    const fetcher = async (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR(`https://dummyjson.com/users/${idd}`, fetcher);

    // useEffect(() => {
    //     if(!idd) return;
    //     async function fetchUser() {
    //         const response = await fetch(`https://dummyjson.com/users/${idd}`);
    //         setUser(await response.json());
    //     }
    //     fetchUser();
    // }, [idd]);

    if(error) return <p>Error loading user</p>;
    if(!idd) return <p>Loading...</p>;
    if (!data) return <p>Loading...</p>;
    const user = data;

    return (
        <div>
            <h3>ID: {user.id}</h3>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Maiden Name:</strong> {user.maidenName}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Birth Date:</strong> {user.birthDate}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Eye Color:</strong> {user.eyeColor}</p>
            <p><strong>Hair Color:</strong> {user.hair.color}</p>
            <p><strong>Hair Type:</strong> {user.hair.type}</p>
            <img src={user.image} alt={`${user.firstName}'s avatar`} width={100} height={100} />
            <br/><button onClick={() => router.replace('/users')}>Go back</button>
        </div>
    );
};

export default User;