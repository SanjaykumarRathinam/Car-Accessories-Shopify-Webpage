import React, { useEffect, useState } from 'react';
import {NavLink,Link, useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/products/productSlice';


const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state=>state?.auth?.cartProducts)
  const authState = useSelector(state=>state?.auth)
  const productState=useSelector(state=>state?.product?.product)
  const [productOpt,setProductOpt]=useState([])
  const [paginate, setPaginate] = useState(true);
  const navigate=useNavigate()

  const [total,setTotal]=useState(null)
  useEffect(()=>{
    let sum=0
 for (let index = 0; index < cartState?.length; index++) {
  sum = sum + (Number(cartState[index].quantity)* Number(cartState[index].price))
  setTotal(sum)
 }
  },[cartState])
  useEffect(()=>{
    let data=[]
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({id:index,prod:element?._id,name:element?.title})
    }
    setProductOpt(data)

  },[productState])

  const handleLogout=()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
    
    <header className="header-upper py-3">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">E-Shop</Link>
              </h2>
            </div>
            <div className="col-5">
            <div className="input-group ">
            <Typeahead
        id="pagination-example"
        onPaginate={() => console.log('Results paginated')}
        onChange={(selected)=>{
           navigate(`/product/${selected[0]?.prod}`)
           dispatch(getAProduct(selected[0]?.prod))
        }}
        options={productOpt}
        paginate={paginate}
        labelKey={"name"}
        minLength={2}
        placeholder="Search for Products here..."
      />
  <span className="input-group-text" id="basic-addon2">
    <BsSearch className="fs-6 "/>
    </span>
</div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between  ">
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/wishlist.svg" alt="wishlist"/>
                  <p className="mb-0">
                    Favourite <br /> wishlist
                  </p>
                  </Link>
                </div>
                <div>
                  <Link to={  authState?.user === null ?"/login":"/my-profile"} className="d-flex align-items-center gap-10 text-white">
                  <img src="images/user.svg" alt="user"/>
                  {
                    authState?.user === null ? <p className="mb-0">
                    Log in <br /> My Account
                  </p> :<p className="mb-0">
                    Welcome {authState?.user?.firstname}
                  </p>
                  }
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/cart.svg" alt="cart"/>
                  <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cartState?.length ? cartState?.length : 0}</span>
                      <p className="mb-0">Rs:{total ? total : 0}</p>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    <header className="header-bottom py-3">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
              <div className="dropdown">
 {/*  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
  type="button" id="dropdownMenuButton1"
   data-bs-toggle="dropdown"
    aria-expanded="false">
    <img src="images/menu.svg" alt="" />
    <span className="me-5 d-inline-block">
      Shop Categories </span> 
     </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>
      <Link className="dropdown-item text-white" to="">
        Beauty
        </Link>
        </li>
    <li>
      <Link className="dropdown-item text-white" to="">
     Men's Fashion
    </Link>
    </li>
    <li>
      <Link className="dropdown-item text-white" to="">
      Women's Fashion
    </Link>
    </li>
    <li>
      <Link className="dropdown-item text-white" to="">
      Watch
    </Link>
    </li>
    <li>
      <Link className="dropdown-item text-white" to="">
      HeadPhones
    </Link>
    </li>
  </ul> */}
</div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/my-orders">My Orders</NavLink>
                  <NavLink to="/contact ">Contact</NavLink>
                  <button onClick={handleLogout} className="border border-0 bg-transparent text-white text-uppercase" type="button">Logout</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </header>  

      </>  
  );
}

export default Header