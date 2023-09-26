import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Dashboard(props) {
    const {data , status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status == "unauthenticated") router.replace('/')
    } , [status])
    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;