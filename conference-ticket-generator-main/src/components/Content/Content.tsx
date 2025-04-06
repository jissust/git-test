import React, { useRef, useState } from "react";
import patternLines from "../../assets/images/pattern-lines.svg";
import patternCircle from "../../assets/images/pattern-circle.svg";
import patternSquigglyLineTop from "../../assets/images/pattern-squiggly-line-top.svg";
import patterSquigglyLineBottomDesktop from "../../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Ticket from "../Ticket/Ticket";

function Content() {
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
    github: "",
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
      setFormData({ ...formData, file: null });

      setPreviewImage(imageUrl);
    }
  };

  const validate = () => {
    const tempErrors = {
      name: '',
      email: '',
      github: '',
      file: ''
    };
    let booleanValidate = true;

    if (!formData.name.match(/^[A-Za-z\s]+$/)){
      tempErrors.name = "Name should contain only letters";
      booleanValidate = false;
    }
      
    if (formData.name.length == 0) {
      tempErrors.name = "Name cannot be empty";
      booleanValidate = false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
      tempErrors.email = "Invalid email format";
      booleanValidate = false;
    }
    if (formData.email.length == 0) {
      tempErrors.email = "Email cannot be empty";
      booleanValidate = false;
    }
    if (formData.github.length > 0 && !formData.github.match(/^@\w+$/)){
      tempErrors.github = "GitHub must start with @";
      booleanValidate = false;
    }
      
    setErrors(tempErrors);
    return booleanValidate;
    //return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      //console.log(formData);
      setSend(true);
    } else {
      //console.log(errors);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const changeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const backForm = () => {
    if(send){
        setSend(false)
    }
  }

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
        <Nav />
        {!send ? (
          <Form 
          formData={formData} 
          errors={errors} 
          previewImage={previewImage}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          removeImage={removeImage}
          changeImage={changeImage}
          fileInputRef={fileInputRef} 
          handleSubmit={handleSubmit}
          />
        ) : (
          <Ticket 
          formData={formData} 
          previewImage={previewImage}
          backForm={backForm}
          />
        )}
      </main>
    </>
  );
}

export default Content;
