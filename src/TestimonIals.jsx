import { Link } from "react-router-dom";
export default function Testimonials(){
return(
<>
   <div className="container-fluid fixed-top">
  <div className="container topbar bg-primary d-none d-lg-block">
    <div className="d-flex justify-content-between">
      <div className="top-info ps-2">
        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">Bogani Street, Karen</a></small>
        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="mailto:sherylogada@gmail.com" className="text-white">afyagreens@gmail.com</a></small>
      </div>
      <div className="top-link pe-2">
        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
      </div>
    </div>
  </div>
  <div className="container px-0">
    <nav className="navbar navbar-light bg-white navbar-expand-xl">
    <Link className="navbar-brand" to="/"><h1 className="text-primary display-6">AFYA GREENS</h1></Link>
      
      <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars text-primary" />
      </button>
      <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
        <Link className="nav-item nav-link active" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/shop">Shop</Link>
        <Link className="nav-item nav-link " to="/details">Shop Detail</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0 bg-secondary rounded-0">
            <Link className="dropdown-item" to="/cart">Cart</Link>
            <Link className="dropdown-item" to="/checkout">Checkout</Link>
            <Link className="dropdown-item" to="/testimonials">Testimonial</Link>
            
            </div>
          </div>
          <Link className="nav-item nav-link" to="/contact">Contact</Link>
        </div>
        <div className="d-flex m-3 me-0">
          <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
          <a href="/cart" className="position-relative me-4 my-auto">
            <i className="fa fa-shopping-bag fa-2x" />
            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: 15, height: 20, minWidth: 20}}>3</span>
          </a>
          <a href="#" className="my-auto">
            <i className="fas fa-user fa-2x" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>

<div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content rounded-0">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body d-flex align-items-center">
        <div className="input-group w-75 mx-auto d-flex">
          <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
          <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid page-header py-5">
  <h1 className="text-center text-white display-6">Testimonial</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Pages</a></li>
    <li className="breadcrumb-item active text-white">Testimonial</li>
  </ol>
</div>

<div className="container-fluid testimonial py-5">
  <div className="container py-5">
    <div className="testimonial-header text-center">
      <h4 className="text-primary">Our Testimonial</h4>
      <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
    </div>
    <div className="testimonial-carousel">
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: 30, right: 0}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: 100, height: 100}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: 30, right: 0}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: 100, height: 100}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item img-border-radius bg-light rounded p-4">
        <div className="position-relative">
          <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: 30, right: 0}} />
          <div className="mb-4 pb-4 border-bottom border-secondary">
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="d-flex align-items-center flex-nowrap">
            <div className="bg-secondary rounded">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: 100, height: 100}} alt />
            </div>
            <div className="ms-4 d-block">
              <h4 className="text-dark">Client Name</h4>
              <p className="m-0 pb-3">Profession</p>
              <div className="d-flex pe-5">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
  <div className="container py-5">
    <div className="pb-4 mb-4" style={{borderBottom: '1px solid rgba(226, 175, 24, 0.5)'}}>
      <div className="row g-4">
        <div className="col-lg-3">
          <a href="#">
            <h1 className="text-primary mb-0">Afya Greens</h1>
            <p className="text-secondary mb-0">Fresh & Organic Products</p>
          </a>
        </div>
        <div className="col-lg-6">
          <div className="position-relative mx-auto">
            <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
            <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Subscribe Now</button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="d-flex justify-content-end pt-3">
            <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-secondary btn-md-square rounded-circle" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="text-light mb-3">Why People Like us!</h4>
          <p className="mb-4">Supporting local farmers and eco-friendly practices is at the heart of what we do. When you shop with us, you’re uplifting communities and the planet.</p>
          <a href className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column text-start footer-item">
          <h4 className="text-light mb-3">Shop Info</h4>
          <Link className="btn-link" to="/">About Us</Link>
          <Link className="btn-link" to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="d-flex flex-column text-start footer-item">
          <h4 className="text-light mb-3">Account</h4>
          <Link className="btn-link" to="/">My Account</Link>
          <Link className="btn-link" to="/details">Shop details</Link>
          <Link className="btn-link" to="/cart">Shopping Cart</Link>

        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="text-light mb-3">Contact</h4>
          <p>Address: Bogani street, Karen</p>
          <p>Email: afyagreens@gmail.com</p>
          <p>Phone: +254 32768001</p>
          <p>Payment Accepted</p>
          <img src="img/payment.png" className="img-fluid" alt />
        </div>
      </div>
    </div>
  </div>
</div>


</>

)

}