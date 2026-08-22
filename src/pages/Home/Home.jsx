import React, { Suspense } from 'react';
import Bannar from './Bannar';
import HotJobs from './HotJobs';

const Home = () => {


    const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    return (
        <div>
           <Bannar></Bannar>
           <Suspense fallback={<p>Loading hot jobs...</p>}>
             <HotJobs jobsPromise={jobsPromise}></HotJobs>
           </Suspense>
        </div>
    );
};

export default Home;