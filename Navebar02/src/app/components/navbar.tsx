import Link from "next/link";

export default function Navbar () {
    return (
        <div>
            <Link href="/">Home</Link>
            <br />
            <Link href= '/about'>About</Link>
            <br/>
            <Link href= '/about/aboutin'>AboutIn</Link>
            <br/>
            <Link href= '/jobs'>Jobs</Link>

        </div>
    )
}
