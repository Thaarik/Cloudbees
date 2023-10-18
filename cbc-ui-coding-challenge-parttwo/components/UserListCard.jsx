import React from "react";
import Image from "next/image";
import Link from "next/link";

// user list card component
const UserListCard = ({ user }) => {
  return (
    <div
      key={user.id}
      className="transition-shadow bg-slate-200 dark:bg-slate-700 duration-300 ease-in-out flex w-full h-32 mobile:h-24 tablet:h-28 justify-start items-center border border-slate-500 rounded-lg hover:shadow-lg hover:shadow-slate-500/50 cursor-pointer"
    >
      <Link href={`/User/${user.login}`}>
        <Image
          src={user.avatar_url}
          alt="user_image"
          unoptimized
          width={75}
          height={75}
          className="rounded-full object-contain m-5 border-2 border-green-600 hover:shadow-sm hover:shadow-green-500"
        />
      </Link>

      <Link
        href={`/User/${user.login}`}
        className="flex flex-col w-1/2 h-1/2 p-2 justify-center items-start text-slate-700 dark:text-slate-50"
      >
        <div
          className="transition-all duration-150 ease-in text-lg tablet:text-sm mobile:text-sm laptop:text-base font-bold hover:font-extrabold"
          title="GitHub Username"
        >
          {user.login}
        </div>
      </Link>
    </div>
  );
};

export default UserListCard;
