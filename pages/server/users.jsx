export default function Users(props) {
    //console.log("props: ", props);
    //console.log("props.data.users: ", props.data.users);
    if(!props.data) return <p>Loading...</p>;
    if(props.data.error) return <p>Error loading users</p>;

    return (
        <div>
            <h1>Users (ssr)</h1>
            {
                props.data.users && (
                    <ol>
                        {props.data.users.map((user) => (
                            <li key={user.id}>
                                {user.firstName} {user.lastName}
                                <br />
                            </li>
                        ))}
                    </ol>
                )
            }
        </div>
    )
}

export const getServerSideProps = async () => {

    const data = await (await fetch('https://dummyjson.com/users')).json();

    return {
        props: {
            data
        }
    }
}