import { IconArrowLeft } from "../Icons";
import patterTicket from "../../assets/images/pattern-ticket.svg";
import logoMark from "../../assets/images/logo-mark.svg";
import userProfile from "../../assets/images/user-profile.jpg";
import iconGitHub from "../../assets/images/icon-github.svg";
import patternCircle from "../../assets/images/pattern-circle.svg";

function Ticket({ formData, previewImage, backForm }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  
    const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  return (
    <div className="ticket">
      <div className="icon-arrow-left" onClick={backForm}>
        <IconArrowLeft />
      </div>
      <h1>
        Congrats, <span>{formData.name}</span>! Your ticket is ready.
      </h1>
      <p>
        We've emailed your ticket to
        <br />
        <span>{formData.email} </span> and will send updates in <br />
        the run up to the event.
      </p>
      <div className="ticket-container">
        <img className="ticket-image" src={patterTicket} alt="" />
        <div className="ticket-container-number">
          <div className="ticket-number">#01609</div>
        </div>
        <div className="ticket-body">
          <div className="ticket-body-row-1">
            <div className="ticket-body-row-1-col-1">
              <img className="ticket-logo-mark" src={logoMark} alt="" />
              <div>Coding Conf</div>
            </div>
            <div className="ticket-body-row-1-col-2">
              <img
                className="ticket-logo-mark"
                src={logoMark}
                alt=""
                style={{ opacity: 0 }}
              />
              <span>
                {formattedDate} / {userLocation}
              </span>
            </div>
          </div>
          <div className="ticket-body-row-2">
            <div className="ticket-body-row-2-col-1">
              <img src={previewImage || userProfile} alt="" />
            </div>
            <div className="ticket-body-row-2-col-2">
              <div className="ticket-body-row-2-col-2-name">
                {formData.name}
              </div>
              {formData.github.length > 1 && (
                <div className="ticket-body-row-2-col-2-email">
                  <img src={iconGitHub} alt="" />
                  <span>{formData.github}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <img className="pattern-circle-3" src={patternCircle} alt="" />
      </div>
    </div>
  );
}
export default Ticket;
