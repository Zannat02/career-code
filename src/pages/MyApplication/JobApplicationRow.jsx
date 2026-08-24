import React from 'react';

const JobApplicationRow = ({ application, index, onDelete }) => {
    const { _id, company, title, company_logo, description } = application;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
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
            </td>
            <td className="max-w-xs">
                <p className="line-clamp-2 text-sm text-gray-600">
                    {description || 'No description available'}
                </p>
            </td>
            <td>
                <div className="flex gap-2">
               
                    <button
                        onClick={() => onDelete(_id)}
                        className="btn btn-error btn-xs text-white"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default JobApplicationRow;