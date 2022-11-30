import React, {useEffect, useState} from 'react'
import './App.css';
import {fetchAllProducts, getProductById} from './services/product-service';

function App() {
const [userData, setUserData] = useState([]);
const [productDetals, setProoductDetails] = useState({});
const [isOpenDiv, setIsOpenDiv] = useState();

const geUsersData = async () => {
  const res = await fetchAllProducts();
  setUserData(res);
}

const getProductDetailsById = async (x) => {
  const data = await getProductById(x);
  setProoductDetails(data)
  setIsOpenDiv(x);
  
}

useEffect(() => {
  geUsersData();
}, []);

console.log(productDetals)


  return (
    <div className="App">
      <h1>Hello Sandeep</h1>
      <ul style={{display:'flex', flexWrap:'wrap', listStyle:'none'}}>
          {userData.map(record => (
            <li className='list' key={record.id}>
              <h3>{record.title}</h3>
              <img src={record.image} width="100%" alt="" />
              <button onClick={() => getProductDetailsById(record.id)}>Show Product Details</button>
              {isOpenDiv === record.id && (
                <div className='desc'>{record.description}</div>
              )}
             
              </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
