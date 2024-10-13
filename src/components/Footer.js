import { BATTELFIELDICON, FACEBOOKICONS, INSTAGRAMICON, TELEGRAMICON, YOUTUBE } from "../utils/icons";

    
const Footer = () => {

    return (
      <div>
          <div>
            <div>
              <span>{FACEBOOKICONS}</span>
              <span>{INSTAGRAMICON}</span>
              <span>{YOUTUBE}</span>
              <span>{TELEGRAMICON}</span>
              <span>{BATTELFIELDICON}</span>
            </div>
            <div>Battle Field Logo </div>
            <div className="foote Links">
                <span>PRIVACY POLICY</span>
                <span>TERMS OF SERVICE</span>
                <span>RULES OF CONDUCT</span>
                <span>CONTENT CREATION GUIDELINE</span>
                <span>COOKIE PREFERENCES</span>
            </div>
            <div>© copyright 2024 Bettle Field</div>
          </div>
      </div>
    );
  };
  
  export default Footer;
  