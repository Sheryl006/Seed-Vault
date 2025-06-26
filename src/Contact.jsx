import { Link } from "react-router-dom";
export default function Contact(){

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
  <h1 className="text-center text-white display-6">Contact</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Pages</a></li>
    <li className="breadcrumb-item active text-white">Contact</li>
  </ol>
</div>

<div className="container-fluid contact py-5">
  <div className="container py-5">
    <div className="p-5 bg-light rounded">
      <div className="row g-4">
        <div className="col-12">
          <div className="text-center mx-auto" style={{maxWidth: 700}}>
            <h1 className="text-primary">Get in touch</h1>
            <p className="mb-4"></p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="h-100 rounded">
            <iframe className="rounded w-100" style={{height: 400}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.835398387297!2d36.746843732545976!3d-1.351229326293135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0539d181204b%3A0x6e7169577881d08f!2sCatholic%20University%20of%20Eastern%20Africa!5e0!3m2!1sen!2ske!4v1750698347595!5m2!1sen!2ske" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
          </div>
        </div>
        <div className="col-lg-7">
          <form action className>
            <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
            <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" /> <a href="mailto:sherylogada@gmail.com"></a>
            <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Your Message" defaultValue={""} />
            <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="d-flex p-4 rounded mb-4 bg-white">
            <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
            <div>
              <h4>Address</h4>
              <p className="mb-2">Bogani street, Karen</p>
            </div>
          </div>
          <div className="d-flex p-4 rounded mb-4 bg-white">
            <i className="fas fa-envelope fa-2x text-primary me-4" />
            <div>
              <h4>Mail Us</h4>
              <p className="mb-2">afyagreens@gmail.com</p>
            </div>
          </div>
          <div className="d-flex p-4 rounded bg-white">
            <i className="fa fa-phone-alt fa-2x text-primary me-4" />
            <div>
              <h4>Telephone</h4>
              <p className="mb-2">(+254) 32768001</p>
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

    );
}