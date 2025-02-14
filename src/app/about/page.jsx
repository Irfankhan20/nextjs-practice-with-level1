"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">About page</h1>
      <p>
        <Link href="/about/address">Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Go Address
      </button>
    </div>
  );
};

export default AboutPage;
