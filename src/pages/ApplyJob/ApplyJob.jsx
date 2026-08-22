import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyJob = () => {


    const { id: jobId } = useParams();
    const { user } = useAuth()

    console.log(jobId, user);


    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target

        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;

        console.log(linkedIn, gitHub, resume)

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume

        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                })
                }
            })

            .catch(error => {
                console.log(error)
            })

    }




    return (
        <div className="flex flex-col items-center px-4 sm:px-6 pb-10">
            <h3 className="text-4xl py-6">Apply for this job:<Link to={`/jobs/${jobId}`}>Details</Link></h3>

            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">LinkedIn Link</label>
                    <input type="url" name="linkedIn" className="input" placeholder="my-linkedIn profile" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name="gitHub" className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name="resume" className="input" placeholder="Resume Link" />

                    <input type="submit" className="btn" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyJob;