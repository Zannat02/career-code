import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
 
    
    const { _id,title,location, company ,jobType, category, applicationDeadline,salaryRange, requirements, responsibilities, status, hr_name,hr_email, description,company_logo} = useLoaderData();
    
    return (
       <div className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-8 rounded-2xl overflow-hidden shadow-lg bg-base-100 flex flex-col lg:flex-row">

         
            <div className="w-full lg:w-2/5 flex items-center justify-center bg-gradient-to-br from-violet-100 via-fuchsia-50 to-pink-100 p-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-md flex items-center justify-center p-4">
                    <img
                        src={company_logo}
                        alt={`${company} logo`}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

          
            <div className="w-full lg:w-3/5 p-6 md:p-8 flex flex-col gap-4">

              
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-base-content">{title}</h2>
                    <p className="text-base-content/70 mt-1">
                        {company} • {location}
                    </p>
                </div>

              
                <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary badge-outline">{jobType}</span>
                    <span className="badge badge-secondary badge-outline">{category}</span>
                    <span className={`badge ${status === 'active' ? 'badge-success' : 'badge-ghost'}`}>
                        {status}
                    </span>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-base-200 rounded-lg p-3">
                        <p className="text-base-content/60">Application Deadline</p>
                        <p className="font-semibold">{applicationDeadline}</p>
                    </div>
                    <div className="bg-base-200 rounded-lg p-3">
                        <p className="text-base-content/60">Salary Range</p>
                        <p className="font-semibold">
                            {salaryRange?.min?.toLocaleString()} - {salaryRange?.max?.toLocaleString()}{' '}
                            {salaryRange?.currency?.toUpperCase()}
                        </p>
                    </div>
                </div>

          
                <p className="text-base-content/80 leading-relaxed">{description}</p>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1">
                            {requirements?.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Responsibilities</h3>
                        <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1">
                            {responsibilities?.map((res, idx) => (
                                <li key={idx}>{res}</li>
                            ))}
                        </ul>
                    </div>
                </div>

               
                <div className="text-sm text-base-content/60 border-t border-base-200 pt-3">
                    <p>Contact: <span className="font-medium text-base-content">{hr_name}</span></p>
                    <p>{hr_email}</p>
                </div>

                {/* CTA */}
                <div className="card-actions justify-end mt-2">
                   <Link to={`/jobApply/${_id}`}>
                             <button className="btn btn-primary">Apply Now</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;