import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch,useSelector } from "react-redux";
import { services } from "../utils/Data";
import { getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  const productState = useSelector((state)=>state.product.product);
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
useEffect(()=>{
  getallProducts();
})

  const getallProducts=()=>{
    dispatch(getAllProducts());
  };
  const addToWish=(id)=>{
    dispatch(addToWishlist(id));
   }

  return (
   <>
   <Container class1="home-wrapper-1 py-5">
   <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative ">
           <img src="images/main-banner-6.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="main-banner-content position-absolute">
              <h4>CAR ACCESSORIES</h4>
              <h5>MAKE PARTS AS REVEL</h5>
              <Link to="/Product"  className="button">SHOP NOW</Link>
              
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className="small-banner position-relative ">
           <img src="images/catbanner-01.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
             
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-02.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
            
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-03.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
            
              
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-04.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
            
              
            </div>
          </div>
          
          </div>
        </div>
      </div>
   </Container>
   <Container class1="home-wrapper-2 py-5">
   <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i,j)=>{
                return(
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                  <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                  </div>
                  </div>
                )
               
              })
            }
          </div>
        </div>
       </div>
   </Container>
<Container class1="home-wrapper-2  py-5">
<div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Car</h6>
                      <p></p>
                    </div>
                    <img src="images/1.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Parts</h6>
                      <p></p>
                    </div>
                    <img src="images/2.png" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Accessories</h6>
                      <p></p>
                    </div>
                    <img src="images/3.png" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Accessories</h6>
                      <p></p>
                    </div>
                    <img src="images/4.jpg" alt="camera" />
                  </div>
          </div>
        </div>
       </div>
</Container>
   <Container class1="featured-wrapper py-5 home-wrapper-2">
   <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collections</h3>
        </div>
        {productState && 
        productState?.map((item,index)=>{
           if(item.tags ==="featured")
          return( 
            <div
            key={index}
            className={"col-3"}
          >
            <div
             
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" onClick={(e)=>{addToWish(item?._id)}}>
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item.images[0]?.url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={90}
                />
                <img
                  src={item.images[0]?.url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={90}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
               
                <p className="price">Rs {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          );
        }
        )}
      </div>
   </Container>
   <Container class1="popular-wrapper py-5 home-wrapper-2">
    
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>
         
      </div>
      <div className="row">
        {productState && 
        productState?.map((item,index)=>{
           if(item.tags ==="popular")
          return( 
            <div
            key={index}
            className={"col-3"}
          >
            <div
           
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" onClick={(e)=>{addToWish(item?._id)}}>
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item.images[0]?.url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={90}
                />
                <img
                  src={item.images[0]?.url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={90}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
               
                <p className="price">Rs {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                  </button>
                  {/* <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          );
        }
        )}
      </div>
  
   </Container> 
   <Container class1="marque-wrapper home-wrapper-2 py-5">
    
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className="d-flex">
      <div className="mx-4 w-25">
      <img src="images/lakme.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-20.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-12.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-11.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-14.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-15.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-16.jpg" alt="brand" />
      </div>
</Marquee> 
          </div>
        </div>
      </div>
    

   </Container>
   
   </>
  )
}

export default Home