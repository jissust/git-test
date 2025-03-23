import React, { useState } from 'react'
import './App.css'
import patternLines from './assets/images/pattern-lines.svg'
import patternCircle from './assets/images/pattern-circle.svg'
import patternSquigglyLineTop from './assets/images/pattern-squiggly-line-top.svg'
import patterSquigglyLineBottomDesktop from './assets/images/pattern-squiggly-line-bottom-desktop.svg'
import iconUpload from './assets/images/icon-upload.svg'
import logoFull from './assets/images/logo-full.svg'
import iconInfo from './assets/images/icon-info.svg'

function App() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.eventPreventDefault()
    console.log(formData)
  }

  return (
    <>
      <img
    className="pattern-lines"
      src={patternLines}
      alt=""
    />
    <img
    className="pattern-circle"
      src={patternCircle}
      alt=""
    />
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
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year's biggest coding conference.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor=""> Upload Avatar </label>
          <div className="form-container-focus">
          <div className="form-input-file">
            <div className="form-input-file-content">
              <div className="form-container-logo-input">
                <img src={iconUpload} alt="" />
              </div>
              <div className="form-input-file-content__text">
                <div>Drag and drop or click to upload</div>
              </div>
            </div>
            <input type="file" name=""  />
          </div>
          <div className="border-focus"></div>
        </div>
          <div className="form-input-file__text">
            <img src={iconInfo} alt="" />
            <div>Upload your photo (JPG or PNG, max size: 500KB).</div>
          </div>
        </div>
        <div className="form-row margin-bottom-first">
          <label htmlFor=""> Full Name </label>
          <div className="form-container-focus">
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <div className="border-focus"></div>
          </div>
          <img
          className="pattern-circle-2"
            src={patternCircle}
            alt=""
          />
        </div>
        <div className="form-row margin-bottom-first">
          <label htmlFor=""> Email Address </label>
          <div className="form-container-focus">
            <input type="text" name="email" value={formData.email} placeholder="example@email.com" onChange={handleChange} />
            <div className="border-focus"></div>
          </div>
        </div>
        <div className="form-row margin-bottom-first">
          <label htmlFor=""> GitHub Username </label>
          <div className="form-container-focus">
            <input type="text" name="github" value={formData.github} placeholder="@yourusername" onChange={handleChange} />
            <div className="border-focus"></div>
          </div>
        </div>
        <div className="form-container-focus margin-top-second">
          <button  className="btn-primary">
            Generate My Ticket
          </button>
          <div className="border-focus"></div>
        </div>
      </form>
    </main>
    </>
  )
}

export default App
