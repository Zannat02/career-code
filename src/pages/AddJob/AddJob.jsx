import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {


    const { user } = useAuth()

    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());



        //process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }
        console.log(newJob);

        //process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim());

        newJob.requirements = requirementsClean;

        //process of responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        newJob.status = "active";


        console.log(newJob);

        //save axios to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This new  job has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }




    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-2xl md:text-4xl text-blue-600 text-center my-6 font-bold">Please Add job</h2>

            <form onSubmit={handleAddAJob} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Basic Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name="title" className="input w-full" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name="company" className="input w-full" placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input w-full" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="text" name="company_logo" className="input w-full" placeholder="Company logo Url" />
                </fieldset>

                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 self-center">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter flex flex-wrap gap-2">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" value="On-Site" name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" value="Remote" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" value="Hybrid" name="jobType" aria-label="Hybrid" />
                    </div>
                </fieldset>

                {/* job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="" name="category" className="select w-full">
                        <option disabled value="">Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Sales</option>
                    </select>
                </fieldset>

                {/* Application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application deadline</legend>

                    <input type="date" name="deadline" className="input w-full" />
                </fieldset>

                {/* salary range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 md:col-span-2">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name="min" className="input w-full" placeholder="Minimum salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name="max" className="input w-full" placeholder="Maximum Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="" name="currency" className="select w-full">
                                <option disabled value="">Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                                <option>RUPI</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* job description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 md:col-span-2">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea w-full" name="description" placeholder="Job Description"></textarea>
                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea w-full" name="requirements" placeholder="Requirements"></textarea>
                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea w-full" name="responsibilities" placeholder="Responsibilities"></textarea>
                </fieldset>

                {/* HR Related Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 md:col-span-2">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="label">HR Name</label>
                            <input type="text" name="hr_name" className="input w-full" placeholder="HR Name" />
                        </div>

                        <div>
                            <label className="label">HR Email</label>
                            <input type="email" name="hr_email"

                                defaultValue={user.email} readOnly
                                className="input w-full" placeholder="HR Email" />
                        </div>
                    </div>
                </fieldset>

                <div className="md:col-span-2 text-center">
                    <input type="submit" className="btn btn-primary w-full sm:w-auto" value="Add job" />
                </div>

            </form>
        </div>
    );
};

export default AddJob;