import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--navigation">
        <ul className="footer--list">
          <li className="footer--item">Company</li>
          <li className="footer--item">Contact us</li>
          <li className="footer--item">Privacy policy</li>
        </ul>
      </div>
      <div className="footer--copyright text-dark">
        <p className="copyright">
          &copy; copyright
          <strong className="text-danger px-2">Shopie</strong>
          2020
        </p>
      </div>
    </footer>
  );
}

export default Footer;
