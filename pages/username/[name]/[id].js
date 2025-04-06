import { useRouter } from 'next/router';

const UserDetails = () => {
    const router = useRouter();
    const { name, id } = router.query;
    console.log(router.query); // Log the query parameters to the console

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
        </div>
    );
};

export default UserDetails;