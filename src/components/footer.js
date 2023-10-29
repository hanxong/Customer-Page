import "./footer.css"; //스타일을 지정하는 CSS파일
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_button">
      <li className="footer">
        <Link to="/body" className="order_link">
          주문내역 |
        </Link>
        <Link to="/order" className="order_link">
          장바구니
        </Link>
      </li>
    </div>
  );
}

export default Footer;
