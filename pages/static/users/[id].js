const profilePage = (props) => {
    console.log("props: ", props);
    if (!props.data) return <p>Loading...</p>;
    if (props.data.error) return <p>Error loading user</p>;

    return (
        <div>
            <h1>User profile of {props.data.firstName}</h1>
        </div>
    )
}
export default profilePage;
export const getStaticPaths = async () => {
    const res = await (await fetch('https://dummyjson.com/users')).json();
    const paths = res.users.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })
    return {
        paths,
        fallback: false // can also be true or 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const  id  = context.params.id;
    console.log("id: ", id);
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    // console.log("data: ",data);
    return {
        props: {
            data
        }
    }
}