import Link from "next/link";
import StudentInfo from "../student-info";

export default function ShoppingList() {
    return (
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />
            <Link href="../">&lt;-Back</Link>
        </main>
    );
}