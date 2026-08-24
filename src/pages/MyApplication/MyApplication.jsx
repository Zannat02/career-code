


import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';

const MyApplication = () => {
    const { user } = useAuth();
    const applicationsPromise = myApplicationsPromise(user.email);

    return (
        <div className="max-w-6xl mx-auto px-4 pb-16 ">
            <Suspense fallback={<div className="text-center py-10">Loading stats...</div>}>
                <ApplicationStat myApplicationsPromise={applicationsPromise}></ApplicationStat>
            </Suspense>

            <Suspense fallback={<div className="text-center py-10">Loading your applications...</div>}>
                <ApplicationList
                    myApplicationsPromise={applicationsPromise}
                    userEmail={user.email}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;
