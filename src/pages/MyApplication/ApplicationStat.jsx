import React, { use } from 'react';

const ApplicationStat = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);

    const totalApplications = applications.length;
    const uniqueCompanies = new Set(applications.map(app => app.company)).size;
    const latestApplication = applications[applications.length - 1];

    return (
        <div className="stats stats-vertical sm:stats-horizontal shadow w-full my-12">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div className="stat-title">Total Applications</div>
                <div className="stat-value text-primary">{totalApplications}</div>
                <div className="stat-desc">Jobs you've applied to</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"></path>
                    </svg>
                </div>
                <div className="stat-title">Companies</div>
                <div className="stat-value text-secondary">{uniqueCompanies}</div>
                <div className="stat-desc">Unique companies applied to</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={latestApplication?.company_logo} alt={latestApplication?.company} />
                        </div>
                    </div>
                </div>
                <div className="stat-title">Latest Application</div>
                <div className="stat-value text-sm">{latestApplication?.company || 'N/A'}</div>
            </div>
        </div>
    );
};

export default ApplicationStat;