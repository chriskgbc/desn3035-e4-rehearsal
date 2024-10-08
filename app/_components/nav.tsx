import Link from "next/link";

export default function Nav() {

    return <>
        <div className="text-center justify-content-between py-3">
            <Link className="mx-3" href="/">Home</Link>
            <Link className="mx-3" href="/about">About Us</Link>
            <Link className="mx-3" href="/contact">Contact Us</Link>
        </div>
    </>

}