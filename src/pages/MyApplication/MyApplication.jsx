import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';

const MyApplication = () => {
    return (
        <div>
             

             <ApplicationStat></ApplicationStat>
              <Suspense fallback={'loading your application'}>
                    <ApplicationList></ApplicationList>
              </Suspense>
        </div>
    );
};

export default MyApplication;
