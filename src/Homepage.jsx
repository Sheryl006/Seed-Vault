import { Link } from "react-router-dom";
export default function Homepage(){
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

<div className="container-fluid py-5 mb-5 hero-header">
  <div className="container py-5">
    <div className="row g-5 align-items-center">
      <div className="col-md-12 col-lg-7">
        <h4 className="mb-3 text-secondary">From the Farm to You</h4>
        <h1 className="mb-5 display-3 text-primary">Organic Veggies, Fruits & Foods</h1>
        <div className="position-relative mx-auto">
          <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search" />
          <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: 0, right: '25%'}}>Submit Now</button>
        </div>
      </div>
      <div className="col-md-12 col-lg-5">
        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active rounded">
              <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
              <a href="#" className="btn px-4 py-2 text-white rounded">Fruits</a>
            </div>
            <div className="carousel-item rounded">
              <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
              <a href="#" className="btn px-4 py-2 text-white rounded">Vegetables</a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid featurs py-5">
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-md-6 col-lg-3">
        <div className="featurs-item text-center rounded bg-light p-4">
          <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
            <i className="fas fa-car-side fa-3x text-white" />
          </div>
          <div className="featurs-content text-center">
            <h5>Free Shipping</h5>
            <p className="mb-0">Free on order over $300</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="featurs-item text-center rounded bg-light p-4">
          <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
            <i className="fas fa-user-shield fa-3x text-white" />
          </div>
          <div className="featurs-content text-center">
            <h5>Security Payment</h5>
            <p className="mb-0">100% security payment</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="featurs-item text-center rounded bg-light p-4">
          <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
            <i className="fas fa-exchange-alt fa-3x text-white" />
          </div>
          <div className="featurs-content text-center">
            <h5>30 Day Return</h5>
            <p className="mb-0">30 day money guarantee</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="featurs-item text-center rounded bg-light p-4">
          <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
            <i className="fa fa-phone-alt fa-3x text-white" />
          </div>
          <div className="featurs-content text-center">
            <h5>24/7 Support</h5>
            <p className="mb-0">Support every time fast</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid fruite py-5">
  <div className="container py-5">
    <div className="tab-class text-center">
      <div className="row g-4">
        <div className="col-lg-4 text-start">
          <h1>Our Organic Products</h1>
        </div>
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            <li className="nav-item">
              <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                <span className="text-dark" style={{width: 130}}>All Products</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                <span className="text-dark" style={{width: 130}}>Vegetables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                <span className="text-dark" style={{width: 130}}>Fruits</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                <span className="text-dark" style={{width: 130}}>Bread</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                <span className="text-dark" style={{width: 130}}>Meat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Raspberries</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Apricots</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Banana</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Oranges</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Raspberries</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-2" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Raspberries</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-3" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Oranges</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Apple</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-4" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Apricots</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-5" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Banana</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Raspberries</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Oranges</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
  </div>
</div>

<div className="container-fluid service py-5">
  <div className="container py-5">
    <div className="row g-4 justify-content-center">
      <div className="col-md-6 col-lg-4">
        <a href="#">
          <div className="service-item bg-secondary rounded border border-secondary">
            <img src="img/featur-1.jpg" className="img-fluid rounded-top w-100" alt />
            <div className="px-4 rounded-bottom">
              <div className="service-content bg-primary text-center p-4 rounded">
                <h5 className="text-white">Fresh Apples</h5>
                <h3 className="mb-0">20% OFF</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a href="#">
          <div className="service-item bg-dark rounded border border-dark">
            <img src="img/featur-2.jpg" className="img-fluid rounded-top w-100" alt />
            <div className="px-4 rounded-bottom">
              <div className="service-content bg-light text-center p-4 rounded">
                <h5 className="text-primary">Tasty Fruits</h5>
                <h3 className="mb-0">Free delivery</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <a href="#">
          <div className="service-item bg-primary rounded border border-primary">
            <img src="img/featur-3.jpg" className="img-fluid rounded-top w-100" alt />
            <div className="px-4 rounded-bottom">
              <div className="service-content bg-secondary text-center p-4 rounded">
                <h5 className="text-white">Exotic Vegitable</h5>
                <h3 className="mb-0">Discount 30$</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid banner bg-secondary my-5">
  <div className="container py-5">
    <div className="row g-4 align-items-center">
      <div className="col-lg-6">
        <div className="py-4">
          <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
          <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
          <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
          <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="position-relative">
          <img src="img/baner-1.png" className="img-fluid w-100 rounded" alt />
          <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: 140, height: 140, top: 0, left: 0}}>
            <h1 style={{fontSize: 100}}>1</h1>
            <div className="d-flex flex-column">
              <span className="h2 mb-0">50$</span>
              <span className="h4 text-muted mb-0">kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="text-center mx-auto mb-5" style={{maxWidth: 700}}>
      <h1 className="display-4">Bestseller Products</h1>
      <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
    </div>
    <div className="row g-4">
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-1.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-2.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-3.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-4.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-5.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img src="img/best-product-6.jpg" className="img-fluid rounded-circle w-100" alt />
            </div>
            <div className="col-6">
              <a href="#" className="h5">Organic Tomato</a>
              <div className="d-flex my-3">
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star text-primary" />
                <i className="fas fa-star" />
              </div>
              <h4 className="mb-3">3.12 $</h4>
              <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
          <img src="img/fruite-item-1.jpg" className="img-fluid rounded" alt />
          <div className="py-4">
            <a href="#" className="h5">Organic Tomato</a>
            <div className="d-flex my-3 justify-content-center">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">3.12 $</h4>
            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
          <img src="img/fruite-item-2.jpg" className="img-fluid rounded" alt />
          <div className="py-4">
            <a href="#" className="h5">Organic Tomato</a>
            <div className="d-flex my-3 justify-content-center">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">3.12 $</h4>
            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
          <img src="img/fruite-item-3.jpg" className="img-fluid rounded" alt />
          <div className="py-4">
            <a href="#" className="h5">Organic Tomato</a>
            <div className="d-flex my-3 justify-content-center">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">3.12 $</h4>
            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
          <img src="img/fruite-item-4.jpg" className="img-fluid rounded" alt />
          <div className="py-2">
            <a href="#" className="h5">Organic Tomato</a>
            <div className="d-flex my-3 justify-content-center">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">3.12 $</h4>
            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid py-5">
  <div className="container">
    <div className="bg-light p-5 rounded">
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5">
            <i className="fa fa-users text-secondary" />
            <h4>satisfied customers</h4>
            <h1>1963</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5">
            <i className="fa fa-users text-secondary" />
            <h4>quality of service</h4>
            <h1>99%</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5">
            <i className="fa fa-users text-secondary" />
            <h4>quality certificates</h4>
            <h1>33</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5">
            <i className="fa fa-users text-secondary" />
            <h4>Available Products</h4>
            <h1>789</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      <br/>
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
      <br/>
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
      <br/>
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
      <br/>
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