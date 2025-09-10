import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/assets";
import axios from 'axios'
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency='$';
    const delivery_fee=10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const[search,setSearch]=useState('');
    const [showSearch,setShowSearch]= useState(false);
    const [cartItems,setCartItems]=useState({});
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('');
    const navigate = useNavigate();


    // ✅ Load cart from localStorage on initial render
  {/*const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  */}

    const addToCart = async (itemId,size)=>{
if (!size) {
        toast.error('Select Product Size');
        return;
}

        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                        cartData[itemId][size] += 1;
                }
                
                else{
                        cartData[itemId][size] = 1;
                }
        }else{
                cartData[itemId] ={};
                cartData[itemId][size] = 1;
        }
         setCartItems(cartData);

         if(token){
                try {
                        await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
                } catch (error) {
                        console.log(error);
                        toast.error(error.message)
                        
                }
         }
    }

    const getCartCount = () => {
  let totalCount = 0;

  for (const productId in cartItems) {
    for (const size in cartItems[productId]) {
      if (cartItems[productId][size] > 0) {
        totalCount += cartItems[productId][size];
      }
    }
  }

  return totalCount;
};


        const updateQuantity = async( itemId, size, quantity)=>{
            let cartData = structuredClone(cartItems);
            cartData[itemId][size] = quantity;
            setCartItems(cartData);

            if(token){
                try {
                        await axios.post(backendUrl + '/api/cart/update', { itemId, size ,quantity}, { headers: { token } })
                } catch (error) {
                       console.log(error);
                        toast.error(error.message) 
                }
            }

        }

        const getCartAmount =() => {
                let totalAmount = 0;
                for(const items in cartItems){
                        let itemInfo= products.find((product)=>product._id === items);
                        for(const item in cartItems[items]){
                                try {
                                        if(cartItems[items][item] > 0){
                                         totalAmount += itemInfo.price * cartItems[items][item]     
                                        }
                                } catch (error) {
                                        
                                }
                        }
                }
                return totalAmount;
        }

        
        const getProductsData = async ()=>{
                try {
                   const response = await axios.get(backendUrl+ '/api/product/list')   
                   if(response.data.success){
                        setProducts(response.data.products)
                   }else{
                        toast.error(response.data.message)
                   }
                   
                } catch (error) {
                        console.log(error);
                        toast.error(error.message)
                        
                        
                }
        }

        const getUserCart = async (token)=>{
                try {
                        const response = await axios.post(backendUrl+ '/api/cart/get',{},{headers:{token}})
                        if(response.data.success){
                                setCartItems(response.data.cartData)
                        }
                } catch (error) {
                        console.log(error);
                        toast.error(error.message)
                }
        }

        useEffect(()=>{
                        getProductsData()
                },[])

        useEffect(()=>{
                if(!token && localStorage.getItem('token')){
                        setToken(localStorage.getItem('token'))
                        getUserCart(localStorage.getItem('token'))
                }
        },[])

    const value={
        products , currency, delivery_fee , 
        search, setSearch, showSearch, setShowSearch, 
        cartItems,addToCart,setCartItems,
        getCartCount,updateQuantity,
        getCartAmount,navigate , backendUrl,
        setToken,token
}
return  (
        <ShopContext.Provider value={value}>
                {props.children}
        </ShopContext.Provider>
         ) 
}

export default ShopContextProvider;