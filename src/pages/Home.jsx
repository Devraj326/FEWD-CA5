import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/sidebar-3d-logo.svg'


function Home() {
  const [datas, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } });
        console.log(response);
        setData(response.data.books);
      } catch (error) {
        console.log(error);
      }
    }

    getBooks();
  }, []);

  const filteredBooks = datas.filter((item) =>
    item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="navbarr">
        <h3>
          <Link to="/"> 
            <img src={logo} alt="" />
            <p>Kalvium Books</p>
          </Link>
        </h3>
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <li><Link to="/register"><button class="custom-btn btn-7"><span>Register</span></button></Link></li>
      </div>

      <div className="mainbox">
        {filteredBooks.map((item, index) => (
          <div className='book' key={index}>
            <h3>{item.title}</h3>
            
            <img src={item.imageLinks.thumbnail} alt={item.title} />
            <div className='author'>{item.authors}</div>
            <div className="star">⭐{item.averageRating} Rating </div>
            <div className="free">free</div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
