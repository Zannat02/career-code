import React, { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({jobsPromise}) => {

   const jobs = use(jobsPromise);

    return (
        <div className="px-4 sm:px-6 lg:px-0">

             <h2 className="text-4xl text-blue-600 font-bold text-center  py-24"> Hot Jobs of the day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
                {
                    jobs.map(job => <JobsCard key={job._id} job ={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;