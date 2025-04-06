import iconUpload from "../../assets/images/icon-upload.svg";
import { IconInfo } from "../../components/Icons";
import patternCircle from "../../assets/images/pattern-circle.svg";
import "./Form.css"

interface FormProps {
  formData: {
    name: string;
    email: string;
    github: string;
    file: File | null;
  };
  errors: {
    name?: string;
    email?: string;
    github?: string;
    file?: string;
  };
  previewImage: string | null;

  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  fileInputRef: React.RefObject<HTMLInputElement | null>;
}

function Form({formData, errors, previewImage, handleChange, handleFileChange, removeImage, changeImage, fileInputRef, handleSubmit}:FormProps) {
  
  return (
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
            className={`form-input-file__text ${errors.file ? "error" : ""}`}
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
              value={formData.github}
              placeholder="@yourusername"
              onChange={handleChange}
              className={errors.github ? "border-error" : ""}
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
  );
}

export default Form;
