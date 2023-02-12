import Button from 'react-bootstrap/Button';

function Header(){

    return(
        <header>
        <ul class="nav nav-tabs bg-dark">
            <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">Personal Customers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">Business Customers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">International accounts</a>
            </li>

        </ul>

        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand border-dark bg-success text-light p-2" href="#">Natwest</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active fs-5" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fs-5" href="#">AboutUs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fs-5" href="#">ContactUs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fs-5" href="#">Bank Accounts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fs-5" href="#">Loans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fs-5" href="">Transfers</a>
                        </li>
                    </ul>
                    <div class="d-flex">

                    <Button className="text-light bg-success mx-2" variant="outline-dark" href="/register">Register</Button>
                    <Button className="text-light bg-success mx-2" variant="outline-dark" href="/login">Login</Button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    )
}
export default Header;