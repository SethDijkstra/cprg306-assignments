
import Link from "next/link";
import StudentInfo from "./student-info";

export default function Home() {
  return (
    <main className="bg-gray-800 h-screen flex flex-col items-center justify-center text-gray-100">
      <h1 className="text-4xl font-semibold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      
      <div className="bg-gray-700 p-8 rounded-xl shadow-md w-4/5 md:w-2/3 lg:w-1/2 mb-6">
        <StudentInfo />
      </div>
      
      <ul className="bg-gray-700 p-6 rounded-xl shadow-md w-4/5 md:w-2/3 lg:w-1/2 space-y-3">
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week2">Week 2</Link>
        </li>
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week3">Week 3</Link>
        </li>
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week4">Week 4</Link>
        </li>
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week5">Week 5</Link>
        </li>
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week6">Week 6</Link>
        </li>
        <li className="hover:bg-gray-600 rounded-md p-2">
          <Link href="/week7">Week 7</Link>
        </li>
      </ul>
    </main>
  );
}
