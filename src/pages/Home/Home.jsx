import React, { Suspense } from 'react';
import Bannar from './Bannar';
import HotJobs from './HotJobs';
import ExploreCategories from './ExploreCategories';
import HowItWorks from './HowItWorks';

const Home = () => {


    const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    return (
        <div>
           <Bannar></Bannar>
           <Suspense fallback={<p>Loading hot jobs...</p>}>
             <HotJobs jobsPromise={jobsPromise}></HotJobs>
           </Suspense>
            <ExploreCategories></ExploreCategories>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;