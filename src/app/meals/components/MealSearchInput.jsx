"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MealSearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border border-border rounded-md flex justify-center pl-[40px]"
        placeholder="Search..."
      />
    </div>
  );
};

export default MealSearchInput;
