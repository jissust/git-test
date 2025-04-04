import React, { useRef, useState } from "react";
import patternLines from "../../assets/images/pattern-lines.svg";
import patternCircle from "../../assets/images/pattern-circle.svg";
import patternSquigglyLineTop from "../../assets/images/pattern-squiggly-line-top.svg";
import patterSquigglyLineBottomDesktop from "../../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import iconUpload from "../../assets/images/icon-upload.svg";
import logoFull from "../../assets/images/logo-full.svg";
import { IconInfo } from "../../components/Icons";
import iconGitHub from "../../assets/images/icon-github.svg";
import patterTicket from "../../assets/images/pattern-ticket.svg";
import logoMark from "../../assets/images/logo-mark.svg";
import userProfile from "../../assets/images/user-profile.jpg";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    file: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    file: "",
    github:""
  });

  const [send, setSend] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    if (!file) {
      setPreviewImage(null);
      return;
    }

    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          file: "Invalid file type.",
        }));
        setFormData({ ...formData, file: null });
        return;
      }

      if (file.size > 500 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File too large.",
        }));
        setFormData({ ...formData, file: null });
        return;
      }

      // Si pasa todas las validaciones:
      setErrors((prev) => ({ ...prev, file: "" }));
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, file });

      setPreviewImage(imageUrl);
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.match(/^[A-Za-z\s]+$/))
      tempErrors.name = "Name should contain only letters";
    if (formData.name.length == 0) tempErrors.name = "Name cannot be empty";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email format";
    if (formData.email.length == 0) tempErrors.email = "Email cannot be empty";
    if (formData.github.length > 0 && !formData.github.match(/^@\w+$/)) 
        tempErrors.github = "GitHub must start with @";     
        setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setSend(true);
    } else {
      console.log(errors);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const removeImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPreviewImage(null);
    fileInputRef.current.value = null;
  };

  const changeImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
      month:"short",
      day:"2-digit",
      year:"numeric"
  })

  const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  return (
    <>
      <img className="pattern-lines" src={patternLines} alt="" />
      <img className="pattern-circle" src={patternCircle} alt="" />
      <img
        className="pattern-squiggly-line-top"
        src={patternSquigglyLineTop}
        alt=""
      />
      <img
        className="pattern-squiggly-line-bottom-desktop"
        src={patterSquigglyLineBottomDesktop}
        alt=""
      />
      <main>
        <nav>
          <img src={logoFull} alt="" />
        </nav>
        {!send ? (
          <>
            <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor=""> Upload Avatar </label>
                <div className="form-row-container">
                  <div className="form-container-focus">
                    <div className="form-input-file">
                      <div className="form-input-file-content">
                        <div className="form-container-logo-input">
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="preview-image"
                            />
                          ) : (
                            <img src={iconUpload} alt="Upload Icon" />
                          )}
                        </div>
                      </div>
                      <input
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="border-focus"></div>
                  </div>
                  <div className="form-input-file-container-btn">
                    {previewImage ? (
                      <>
                        <button className="btn-secondary" onClick={removeImage}>
                          Remove image
                        </button>
                        <button className="btn-secondary" onClick={changeImage}>
                          Change image
                        </button>
                      </>
                    ) : (
                      <div className="form-input-file-content__text">
                        <div>Drag and drop or click to upload</div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`form-input-file__text ${
                    errors.file ? "error" : ""
                  }`}
                >
                  <IconInfo color={errors.file ? "#c98286" : "#D1D0D5"} />
                  {errors.file && <span>{errors.file}</span>}
                  <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
                </div>
              </div>
              <div className="form-row margin-bottom-first">
                <label htmlFor=""> Full Name </label>
                <div className="form-container-focus">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-error" : ""}
                  />
                  <div className="border-focus"></div>
                </div>
                {errors.name && <p className="error">{errors.name}</p>}
                <img className="pattern-circle-2" src={patternCircle} alt="" />
              </div>
              <div className="form-row margin-bottom-first">
                <label htmlFor=""> Email Address </label>
                <div className="form-container-focus">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="example@email.com"
                    onChange={handleChange}
                    className={errors.email ? "border-error" : ""}
                  />
                  <div className="border-focus"></div>
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-row margin-bottom-first">
                <label htmlFor=""> GitHub Username </label>
                <div className="form-container-focus">
                  <input
                    type="text"
                    name="github"
                    value={formData .github}
                    placeholder="@yourusername"
                    onChange={handleChange}
                    className={errors.github ? "border-error": ""}
                  />
                  <div className="border-focus"></div>
                </div>
                {errors.github && <p className="error">{errors.github}</p>}
              </div>
              <div className="form-container-focus margin-top-second">
                <button className="btn-primary">Generate My Ticket</button>
                <div className="border-focus"></div>
              </div>
            </form>
          </>
        ) : (
          <div className="ticket">
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
                    <span>{formattedDate} / {userLocation}</span>
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
                    <div className="ticket-body-row-2-col-2-email">
                      <img src={iconGitHub} alt="" />
                      <span>{formData.github}</span>
                    </div>
                  </div>
                </div>
              </div>
              <img className="pattern-circle-3" src={patternCircle} alt="" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Form;
