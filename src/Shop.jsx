import { Link } from "react-router-dom";
export default function Shop(){
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
  <h1 className="text-center text-white display-6">Shop</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Pages</a></li>
    <li className="breadcrumb-item active text-white">Shop</li>
  </ol>
</div>

<div className="container-fluid fruite py-5">
  <div className="container py-5">
    <h1 className="mb-4">Fresh fruits shop</h1>
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="row g-4">
          <div className="col-xl-3">
            <div className="input-group w-100 mx-auto d-flex">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
            </div>
          </div>
          <div className="col-6" />
          <div className="col-xl-3">
            <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
              <label htmlFor="fruits">Default Sorting:</label>
              <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                <option value="volvo">Nothing</option>
                <option value="saab">Popularity</option>
                <option value="opel">Organic</option>
                <option value="audi">Fantastic</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="mb-3">
                  <h4>Categories</h4>
                  <ul className="list-unstyled fruite-categorie">
                    <li>
                      <div className="d-flex justify-content-between fruite-name">
                        <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
                        <span>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between fruite-name">
                        <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
                        <span>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between fruite-name">
                        <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
                        <span>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between fruite-name">
                        <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
                        <span>(8)</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between fruite-name">
                        <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
                        <span>(5)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <h4 className="mb-2">Price</h4>
                  <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
                  <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">0</output>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <h4>Additional</h4>
                  <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
                    <label htmlFor="Categories-1"> Organic</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-2" name="Categories-1" defaultValue="Beverages" />
                    <label htmlFor="Categories-2"> Fresh</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-3" name="Categories-1" defaultValue="Beverages" />
                    <label htmlFor="Categories-3"> Sales</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-4" name="Categories-1" defaultValue="Beverages" />
                    <label htmlFor="Categories-4"> Discount</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" className="me-2" id="Categories-5" name="Categories-1" defaultValue="Beverages" />
                    <label htmlFor="Categories-5"> Expired</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h4 className="mb-3">Featured products</h4>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="rounded me-4" style={{width: 100, height: 100}}>
                    <img src="img/featur-1.jpg" className="img-fluid rounded" alt />
                  </div>
                  <div>
                    <h6 className="mb-2">Big Banana</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">2.99 $</h5>
                      <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="rounded me-4" style={{width: 100, height: 100}}>
                    <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
                  </div>
                  <div>
                    <h6 className="mb-2">Big Banana</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">2.99 $</h5>
                      <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="rounded me-4" style={{width: 100, height: 100}}>
                    <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
                  </div>
                  <div>
                    <h6 className="mb-2">Big Banana</h6>
                    <div className="d-flex mb-2">
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="fw-bold me-2">2.99 $</h5>
                      <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="position-relative">
                  <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt />
                  <div className="position-absolute" style={{top: '50%', right: 10, transform: 'translateY(-50%)'}}>
                    <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-12">
                <div className="pagination d-flex justify-content-center mt-5">
                  <a href="#" className="rounded">«</a>
                  <a href="#" className="active rounded">1</a>
                  <a href="#" className="rounded">2</a>
                  <a href="#" className="rounded">3</a>
                  <a href="#" className="rounded">4</a>
                  <a href="#" className="rounded">5</a>
                  <a href="#" className="rounded">6</a>
                  <a href="#" className="rounded">»</a>
                </div>
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

);


}