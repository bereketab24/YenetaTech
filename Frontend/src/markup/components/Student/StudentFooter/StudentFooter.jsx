import React from 'react'
import adminstyle from "../../../../assets/styles/user/user.module.css";

function StudentFooter() {
  return (
    <div>
      <div className={`${adminstyle.body}`}>
        <footer id="footer" className={`${adminstyle.footer}`}>
          <div className={`${adminstyle.copyright}`}>
            &copy; Copyright{" "}
            <strong>
              <span>Yeneta Tech</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className={`${adminstyle.credits}`}>
        
            Developed by <strong>Bereketab</strong>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default StudentFooter