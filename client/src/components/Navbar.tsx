import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate} from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setShow, size }:any) => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" >    
        김은혜 
        </span>
        <div className="cart" >
          <span>
            <FiShoppingCart onClick={()=> navigate('/cart')} className="fas fa-cart-plus"/>
          </span>
          <span>{size}</span>
        </div>
      </div>
      <hr className='line'/>
    </nav>
  );
};

export default Navbar;
