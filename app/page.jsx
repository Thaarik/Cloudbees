
import UserList from "@/components/UserList";

export default async function Home() {
  // Home page containing user lists
  return (
    <main className="w-full h-screen ">
      <div className="w-full h-1/6 flex flex-col justify-evenly items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-50">GITHUB USER LIST PAGE</h1>
        <p className="text-md font-medium text-gray-700 dark:text-slate-100">Screen fetching GitHub Users from the Github API and displays them in a list</p>
      </div>
      <UserList/>
    </main>
  );
}


