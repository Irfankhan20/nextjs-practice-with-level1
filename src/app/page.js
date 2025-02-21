import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello world</h1>;{/* get user data from client component  */}
      <div className="flex gap-5">
        <p className="font-bold text-xl">from client component: </p>
        <UserInfo></UserInfo>
      </div>
      {/* get user data from server component  */}
      <div className="flex gap-5">
        <p className="font-bold text-xl">from server component: </p>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}
