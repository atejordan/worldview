import Link from "next/link";
import "./styles.css";

const Header = () => {
  return (
    <div className="backhome">
      <div className="intro">
        <div className="inner">
          <div className="content">
            <h1>World View</h1>
            <h4>Votre voyage commence ici</h4>
            <Link className="btn" href="./">
              Découvrez le monde en un clic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
