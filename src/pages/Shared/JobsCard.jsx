import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {

    const { title, location, requirements,_id, jobType, category,
        salaryRange, description, company, company_logo } = job;

    return (
        <div className="card bg-base-100 w-full max-w-96 mx-auto shadow-sm">
            <div className="flex gap-2">

                <figure>
                    <img
                        src={company_logo}
                        className="w-16"
                        alt="Company Logo" />
                </figure>
                <div>
                    <h4 className="text-3xl">{company}</h4>
                    <p className="flex items-center gap-1"> <FaMapMarkerAlt />    {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions ">
                    {
                        requirements.map((skill, index) => <div
                            key={index} className="badge badge-outline">{skill}</div>)
                    }

                </div>
                <div className="justify-end card-actions">
                   <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;