import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-main">
        <div className="Footer-main-item">
          <h6>About me</h6>
          <p className="text-footer1">
            Life must have goals and passions, just moving forward will
            definitely make it.
          </p>
          <p class="footer-text">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>2022 All
            rights reserved | This template is made with{" "}
            <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="http://localhost:3000/">Phan Chinh</a>
          </p>
        </div>
        <div className="Footer-main-item">
          <h6>Leave gmail</h6>
          <p className="text-footer1">Leave your gmail for me.</p>
          <div className="Footer_Form">
            <form action="">
              <input name="EMAIL" placeholder="Enter Email...." type="email" />
              <button type="button">
                <i className="fas fa-angle-double-right"></i>
              </button>
            </form>
            <span>Submitting...</span>
          </div>
        </div>
        <div className="Footer-main-item">
          <h6>Follow me</h6>
          <p className="text-footer1">Let me be social</p>
          <div className="Footer-icon">
            <a href="https://www.facebook.com/profile.php?id=100040911272621">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/robertphans/">
              <i class="fab fa-instagram-square"></i>
            </a>
            <a href="https://twitter.com/RobertPhansvn">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://truyenyy.vip/user/13335000/">
              <i class="fas fa-yin-yang"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
