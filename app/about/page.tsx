import Header from "../_components/header";
import Nav from "../_components/nav";

export default function Page() {
    return <>

        <div className="container py-5">

            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-4" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>About Us</h1>
                    <p>
                        Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
                    </p>
                </div>

            </div>

        </div>

    </>
}