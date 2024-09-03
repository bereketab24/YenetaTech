import React from 'react'
import adminstyle from "../../../../assets/styles/user/user.module.css";

function AdminFooter() {
  return (
    <body className={`${adminstyle.body}`}>
      <footer id="footer" className={`${adminstyle.footer}`}>
        <div className={`${adminstyle.copyright}`}>
          &copy; Copyright{" "}
          <strong>
            <span>Yeneta Tech</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className={`${adminstyle.credits}`}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          <br />
          Developed by <strong>Bereketab</strong>
        </div>
      </footer>
    </body>
  );
}

export default AdminFooter