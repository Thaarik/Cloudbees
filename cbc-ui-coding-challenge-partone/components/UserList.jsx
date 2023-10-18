import React from "react";
import UserListCard from "./UserListCard";

const UserList = async () => {
  const gitHubUsersList = await fetch("http://localhost:3000/api/ghusers");
  const gitHubUsersDetail = await gitHubUsersList.json();
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 justify-center items-center p-20">
      {gitHubUsersDetail.userdata ? (
        gitHubUsersDetail.userdata.map((user) => (
          <UserListCard user={user} key={user.login} />
        ))
      ) : (
        <div className="col-span-4 items-center text-slate-700 dark:text-slate-50">{`Sorry 🙁! ${gitHubUsersDetail.error}`}</div>
      )}
    </div>
  );
};

export default UserList;
