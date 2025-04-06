import { useRouter } from 'next/router';

const Setting = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>
            <h1>Settings for {name}</h1>
            <p>Here you can manage your settings.</p>
        </div>
    );
};

export default Setting;