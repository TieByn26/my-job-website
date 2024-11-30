import React, { forwardRef } from "react";
import { job } from "src/types";
import { LocalIcon } from "src/assets/icons";
import { useNavigate } from "react-router-dom";

const BoxJob = ({ job }: { job: job }) => {

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/candidate/job-details/${id}`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick(job.id);
    };


    return (
        <div onClick={handleButtonClick} className="flex flex-col p-[32px] justify-center items-start gap-6 flex-shrink-0 w-[424px] h-[204px] border rounded-xl hover:scale-[1.01] hover:border-[#0A65CC] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] ">
            <div className="flex items-start gap-4">
                <img src={job.profilePictureLink} alt="logo company" className="w-[56px] h-[56px] rounded" />
                <div className="flex flex-col items-start gap-[6px]">
                    <div className="flex items-start gap-2">
                        <span className="px-[12px] py-[3px] bg-[#e9fff7] text-[14px] text-[#2fc64d] leading-5 rounded-[52px]">Technology</span>
                        <span className="px-[12px] py-[3px] bg-[#FFEDED] text-[14px] text-[#FF4F4F] leading-5 rounded-[52px]">Featured</span>
                    </div>
                    <span className="flex items-center gap-[6px] text-[14px] text-[#939AAD] leading-5">
                        <LocalIcon iconName="location_gray" height={18} width={18} />
                        Viet Nam
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[20px] font-[500] leading-8">
                    {job.title}
                </span>
                <div className="flex items-center gap-4 text-[#636A80]">
                    <span className="flex items-center">
                        <LocalIcon iconName="briefcase_gray" width={18} height={18} />
                        {job.jobType}
                    </span>
                    <span className="flex items-center">
                        <LocalIcon iconName="dollar_gray" width={18} height={18} />
                        {job.maxSalary}K - USD
                    </span>
                </div>
            </div>
        </div>
    );
}

export const EmployerPosition = forwardRef<HTMLDivElement, { companyPositions: job[] }>(
    ({ companyPositions }, ref) => {
        return (
            <div ref={ref} className=" border-t-2 py-[100px]">
                <span className="text-[40px] font-[500] leading-[48px]">
                    Open Position
                </span>
                <div className="flex items-center justify-center">
                    <div className="w-[94%] flex gap-[24px] py-[40px] justify-start flex-wrap">
                        {companyPositions.map((job) => (
                            <BoxJob key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
);

