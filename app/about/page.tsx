import Image from "next/image";
import Header from "../_components/header";
import Nav from "../_components/nav";

export default function Page() {
    return <>

        <div className="container py-5">

            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    <h1>About Us</h1>
                    <p>
                        Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
                    </p>
                </div>

            </div>

        </div>

    </>
}