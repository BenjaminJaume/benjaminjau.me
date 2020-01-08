import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" className="bg-light p-5">
          <div id="message-bottom" className="message-bottom">
            <span>Created with ❤ by Benjamin Jaume</span>
          </div>

          <div className="brand-icons py-3">
            <a
              href="https://www.linkedin.com/in/benjamin-jaume/"
              className="linkedin-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/BenjaminJaume"
              className="github-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>

            <a
              href="https://www.facebook.com/ben.jaume"
              className="facebook-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>

            {/* <a tabindex="0" className="whatsapp-icon px-1" role="button" data-trigger="focus" data-toggle="popover"
        data-placement="top" title="✉ Message me"
        data-content="<a href='https://api.whatsapp.com/send?phone=61432586316'>+61 4 32 586 316</a>"
        data-html="true"><i className="fab fa-whatsapp-square"></i></a> */}
          </div>

          <div>
            {/* <a id="back-top-button" className="btn btn-outline-success" href="#" role="button">
        Back to top
        <span className="ml-2">☝</span></a> */}
          </div>
        </footer>

        {/* <!-- SCRIPTS -->

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
        {/* <script src="../javascripts/librairies/jquery-3.4.1.js"></script> */}
        <script src="../../public/scripts/librairies/jquery-3.4.1.js"></script>
        <script src="../../public/scripts/librairies/popper.min.js"></script>
        <script src="../../public/scripts/librairies/bootstrap.min.js"></script>

        {/* <!-- Custom Javascript --> */}
        <script src="../../public/scripts/custom.js"></script>
      </>
    );
  }
}

export default Footer;
