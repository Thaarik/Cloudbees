"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaBloggerB, FaGithub } from "react-icons/fa";

// Individual user page
const UserPage = async ({ username }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getGitHubUserCall = async () => {
      try {
        const gitHubUser = await fetch(
          `https://api.github.com/users/${username}`
        );
        const gitHubUserData = await gitHubUser.json();
        setUser({ ...gitHubUserData });
      } catch (error) {
        setUser({ error: "Something went wrong!. Please try again later" });
      }
    };
    getGitHubUserCall();
  }, []);

  return (
    <>
      {Object.keys(user).length !== 0 && !user.hasOwnProperty("message") ? (
        <div className="w-3/6 h-auto p-4 border mb-10 mobile:w-5/6 desktop:3/5 tablet:1/2 laptop:3/5 border-sky-900 relative rounded-2xl shadow-lg shadow-sky-500/50  flex flex-col  justify-start items-center transition-all ease-out">
          <Link href={user.html_url} title="GitHub Profile">
            <Image
              src={user.avatar_url}
              alt="user_image"
              unoptimized
              width={200}
              height={200}
              className="rounded-full object-contain m-4 border-2 border-green-400 hover:shadow-lg hover:shadow-green-300 transition duration-300 hover:delay-200"
            />
          </Link>
          <div className="flex flex-col w-4/6 m-4 justify-start items-center border-2 border-slate-500 p-4 rounded-lg cursor-default text-slate-800 dark:text-slate-200">
            {user.name && (
              <div className="m-2 text-xl mobile:text-base cursor-default">
                <span className=" font-extrabold  mobile:font-bold">
                  Name:{" "}
                </span>
                {user.name}
              </div>
            )}
            {user.login && (
              <div className="m-2">
                <span className="font-extrabold mobile:font-bold ">
                  Username:{" "}
                </span>
                {user.login}
              </div>
            )}
            {user.bio && (
              <div className="m-2">
                <span className="font-extrabold mobile:font-bold">Bio: </span>
                {user.bio ? user.bio : "None"}
              </div>
            )}
            {user.location && (
              <div className="m-2">
                <span className="font-extrabold mobile:font-bold">
                  Location:{" "}
                </span>
                {user.location ? user.location : "None"}
              </div>
            )}
            {user.company && (
              <div className="m-2">
                <span className="font-extrabold mobile:font-bold">
                  Company:{" "}
                </span>
                {user.company ? user.company : "None"}
              </div>
            )}
          </div>
          <details className="w-5/6 bg-slate-300 rounded-lg group mb-3 transition ease-in text-slate-900 dark:text-slate-200 dark:bg-slate-800">
            <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-200 rounded group-open-b-none group-open:z-[1] relative">
              <h3 className="flex flex-1 p-4 font-semibold">
                Click to know more about {user.name}
              </h3>
              <div className="flex w-10 items-center justify-center">
                <div className="border-8 border-transparent border-l-slate-800 dark:border-l-slate-100 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
              </div>
            </summary>
            <div className="p-4 flex flex-wrap h-auto justify-evenly items-center">
              <div className="flex flex-col m-3">
                <div className="m-2">
                  <span className="font-extrabold">Followers:</span>{" "}
                  {user.followers}
                </div>
                <div className="m-2">
                  <span className="font-extrabold">Following:</span>{" "}
                  {user.following}
                </div>
              </div>
              <div className="flex flex-col m-3">
                <div className="m-2">
                  <span className="font-extrabold">Number of Public Repo:</span>{" "}
                  {user.public_repos}
                </div>
                <div className="m-2">
                  <span className="font-extrabold">
                    Number of Public Gists:
                  </span>{" "}
                  {user.public_gists}
                </div>
                {user.hireable !== null && (
                  <div className="m-2">
                    <span className="font-extrabold">Hiring :</span>{" "}
                    {user.hireable ? "Yes😀" : "No🙁"}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              {user.html_url && (
                <div className="my-2 mx-2 text-2xl">
                  <Link href={user.html_url} title="GitHub">
                    <FaGithub className="hover:text-sky-500 dark:hover:text-sky-300" />
                  </Link>
                </div>
              )}
              {user.twitter_username && (
                <div className="my-2 mx-2 text-2xl">
                  <Link
                    href={`https://www.twitter.com/${user.twitter_username}`}
                    title={`Twitter / X : @${user.twitter_username}`}
                  >
                    <RiTwitterXFill className="hover:text-sky-500 dark:hover:text-sky-300" />
                  </Link>
                </div>
              )}
              {user.email && (
                <div className="my-2 mx-2 text-2xl">
                  <Link href={user.email} title="Email">
                    <AiOutlineMail className="hover:text-sky-500 dark:hover:text-sky-300" />
                  </Link>
                </div>
              )}
              {user.blog && (
                <div className="my-2 mx-2 text-2xl">
                  <Link href={user.blog} title="Blog">
                    <FaBloggerB className="hover:text-sky-500 dark:hover:text-sky-300" />
                  </Link>
                </div>
              )}
            </div>
          </details>
        </div>
      ) : (
        <div>Something went wrong!</div>
      )}
    </>
  );
};

export default UserPage;
