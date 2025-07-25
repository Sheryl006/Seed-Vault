import { Link } from "react-router-dom";
export default function Shopdetails(){
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
  <h1 className="text-center text-white display-6">Shop Detail</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Pages</a></li>
    <li className="breadcrumb-item active text-white">Shop Detail</li>
  </ol>
</div>

<div className="container-fluid py-5 mt-5">
  <div className="container py-5">
    <div className="row g-4 mb-5">
      <div className="col-lg-8 col-xl-9">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="border rounded">
              <a href="#">
                <img src="img/single-item.jpg" className="img-fluid rounded" alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Brocoli</h4>
            <p className="mb-3">Category: Vegetables</p>
            <h5 className="fw-bold mb-3">3,35 $</h5>
            <div className="d-flex mb-4">
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star" />
            </div>
            <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
            <div className="input-group quantity mb-5" style={{width: 100}}>
              <div className="input-group-btn">
                <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                  <i className="fa fa-minus" />
                </button>
              </div>
              <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
              <div className="input-group-btn">
                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
          </div>
          <div className="col-lg-12">
            <nav>
              <div className="nav nav-tabs mb-3">
                <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
              </div>
            </nav>
            <div className="tab-content mb-5">
              <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. 
                  Susp endisse ultricies nisi vel quam suscipit </p>
                <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic 
                  icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                <div className="px-2">
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="row bg-light align-items-center text-center justify-content-center py-2">
                        <div className="col-6">
                          <p className="mb-0">Weight</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">1 kg</p>
                        </div>
                      </div>
                      <div className="row text-center align-items-center justify-content-center py-2">
                        <div className="col-6">
                          <p className="mb-0">Country of Origin</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">Agro Farm</p>
                        </div>
                      </div>
                      <div className="row bg-light text-center align-items-center justify-content-center py-2">
                        <div className="col-6">
                          <p className="mb-0">Quality</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">Organic</p>
                        </div>
                      </div>
                      <div className="row text-center align-items-center justify-content-center py-2">
                        <div className="col-6">
                          <p className="mb-0">Сheck</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">Healthy</p>
                        </div>
                      </div>
                      <div className="row bg-light text-center align-items-center justify-content-center py-2">
                        <div className="col-6">
                          <p className="mb-0">Min Weight</p>
                        </div>
                        <div className="col-6">
                          <p className="mb-0">250 Kg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                <div className="d-flex">
                  <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: 100, height: 100}} alt />
                  <div className>
                    <p className="mb-2" style={{fontSize: 14}}>April 12, 2024</p>
                    <div className="d-flex justify-content-between">
                      <h5>Jason Smith</h5>
                      <div className="d-flex mb-3">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic 
                      words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: 100, height: 100}} alt />
                  <div className>
                    <p className="mb-2" style={{fontSize: 14}}>April 12, 2024</p>
                    <div className="d-flex justify-content-between">
                      <h5>Sam Peters</h5>
                      <div className="d-flex mb-3">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic 
                      words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="nav-vision" role="tabpanel">
                <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                  amet diam et eos labore. 3</p>
                <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                  Clita erat ipsum et lorem et sit</p>
              </div>
            </div>
          </div>
          <form action="#">
            <h4 className="mb-5 fw-bold">Leave a Reply</h4>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input type="email" className="form-control border-0" placeholder="Your Email *" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="border-bottom rounded my-4">
                  <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-between py-3 mb-5">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3">Please rate:</p>
                    <div className="d-flex align-items-center" style={{fontSize: 12}}>
                      <i className="fa fa-star text-muted" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 col-xl-3">
        <div className="row g-4 fruite">
          <div className="col-lg-12">
            <div className="input-group w-100 mx-auto d-flex mb-4">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
            </div>
            <div className="mb-4">
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
            <h4 className="mb-4">Featured products</h4>
            <div className="d-flex align-items-center justify-content-start">
              <div className="rounded" style={{width: 100, height: 100}}>
                <img src="img/featur-1.jpg" className="img-fluid rounded" alt="Image" />
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
              <div className="rounded" style={{width: 100, height: 100}}>
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
              <div className="rounded" style={{width: 100, height: 100}}>
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
            <div className="d-flex align-items-center justify-content-start">
              <div className="rounded me-4" style={{width: 100, height: 100}}>
                <img src="img/vegetable-item-4.jpg" className="img-fluid rounded" alt />
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
                <img src="img/vegetable-item-5.jpg" className="img-fluid rounded" alt />
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
                <img src="img/vegetable-item-6.jpg" className="img-fluid rounded" alt />
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
    </div>
    
      <div className=" owl-carousel vegetable-carousel justify-content-center">
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Parsely</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Parsely</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Banana</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Bell Papper</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Potatoes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Parsely</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Potatoes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Parsely</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
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