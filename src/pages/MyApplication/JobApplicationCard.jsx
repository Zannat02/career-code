import React from 'react';

const JobApplicationCard = ({ application, index, onDelete }) => {
    const { _id, company, title, company_logo, description } = application;

    return (
        <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body p-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src={company_logo} alt="company_logo" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{company}</div>
                            <div className="text-sm opacity-50">{title}</div>
                        </div>
                    </div>
                    <span className="badge badge-ghost">#{index + 1}</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                    {description || 'No description available'}
                </p>

                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-ghost btn-xs">Details</button>
                    <button
                        onClick={() => onDelete(_id)}
                        className="btn btn-error btn-xs text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationCard;