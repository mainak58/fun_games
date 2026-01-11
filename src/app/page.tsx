import { allLinks } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      {allLinks.map((item, index) => (
        <div key={item.link} className="text-lg">
          <Link href={item.link} className="hover:underline text-blue-600">
            {index + 1}. {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
