import React from 'react';
import styles from '../styles/Home.module.css';
import Logo from "./Logo.js";

const FooterOP = () => (
  <>
  
  <footer>
  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by
    <Logo className="img"/>
    Wing Express
  </a>
  </footer>
 


<style jsx>{`
  
  footer {
    width: 100%;
    height: 100px;
   
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
  }
  footer img {
        font-size: 1.0rem;
        margin-left: 0.5rem;
  }
  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
 
`}</style>
  
  </>
)

export default FooterOP;
