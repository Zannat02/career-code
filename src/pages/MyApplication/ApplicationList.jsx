import React, { use, useState } from 'react';
import JobApplicationRow from './JobApplicationRow';
import JobApplicationCard from './JobApplicationCard';

const ApplicationList = ({ myApplicationsPromise, userEmail }) => {
    const initialApplications = use(myApplicationsPromise);
    const [applications, setApplications] = useState(initialApplications);

    const handleDelete = (id) => {
        const proceed = window.confirm('আপনি কি এই application টি delete করতে চান?');
        if (!proceed) return;

        fetch(`http://localhost:3000/applications/${id}?email=${userEmail}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = applications.filter(app => app._id !== id);
                    setApplications(remaining);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <div className="text-center py-6 ">
                <h3 className="text-2xl md:text-3xl font-bold">My Job Applications</h3>
                <p className="text-base text-gray-500 mt-1">
                    Jobs Applied so far: {applications.length}
                </p>
            </div>

            {/* Mobile — card layout, kono horizontal scroll nai */}
            <div className="md:hidden space-y-4">
                {applications.map((application, index) => (
                    <JobApplicationCard
                        key={application._id}
                        index={index}
                        application={application}
                        onDelete={handleDelete}
                    ></JobApplicationCard>
                ))}
            </div>

            {/* Tablet/Desktop — full table */}
            <div className="hidden md:block">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <JobApplicationRow
                                key={application._id}
                                index={index}
                                application={application}
                                onDelete={handleDelete}
                            ></JobApplicationRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;