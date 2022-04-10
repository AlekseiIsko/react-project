import logo from '../../img/logo.svg';

const Footer = () => {
  return (
    <div className="container">
      <div className="bottom-part">
        <img src={logo} alt="logo" />
        <p>
          Plaut, 10 <br /> Science Park
          <br /> 76706, Rehovot <br /> Israel <br /> <br />
          Phone: 054-56-99-350 <br /> E-mail: go@tel-ran.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
