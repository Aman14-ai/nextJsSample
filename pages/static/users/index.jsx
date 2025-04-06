const userPage = (props) => {
    // console.log("props in static page: ", props);
    return (
        <div>
            <h1>Users (ssg)</h1>
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

export default userPage;

export const getStaticProps = async () => {
    const data = await(await fetch('https://dummyjson.com/users')).json();
        

    return {
        props: {
            data
        }
    };
}