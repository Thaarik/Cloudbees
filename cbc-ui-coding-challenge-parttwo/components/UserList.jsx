"use client";
import { useState, useEffect } from "react";
import UserListCard from "./UserListCard";

// fetch gitHub user list and show in the List Page
const UserList = () => {
  const [gitHubUserData, setGitHubUserData] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDataResponse = await fetch(
          "https://api.github.com/users?per_page=8"
        );
        const data = await userDataResponse.json();
        setGitHubUserData([...data]);
      } catch (error) {
        setGitHubUserData([]);
      }
    };
    fetchDetails();
  }, []);
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 justify-center items-center p-20">
      {gitHubUserData.length !== 0 ? (
        gitHubUserData.map((user) => (
          <UserListCard user={user} key={user.login} />
        ))
      ) : (
        <div className="col-span-4 text-center text-slate-700 dark:text-slate-50">
          Sorry something went wrong🙁! Please try again later!
        </div>
      )}
    </div>
  );
};

export default UserList;
