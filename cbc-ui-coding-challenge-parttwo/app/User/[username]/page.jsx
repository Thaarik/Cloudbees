import React from "react";
import UserPage from "@/components/UserPage";
import Link from "next/link";

// Individual User page
const page = async ({ params }) => {
  console.log(params)
  return (
    <div className="w-full h-auto flex flex-col justify-evenly items-center">
        <h1 className="text-4xl font-bold m-5 text-gray-900 dark:text-slate-50">GITHUB PROFILE INFO</h1>
        <p className="text-md font-medium m-4 text-gray-700 dark:text-slate-100">Github username: {params.username} </p>
      <UserPage username={params.username} />
      <Link href={'/'} className="mb-5 hover:underline text-slate-700 hover:text-slate-900 dark:text-slate-200">Go Back to List Page</Link>
    </div>
  );
};

export default page;
