import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    rollno: "",
  });

  function chandleHandle(e) {
    setData = { ...data, [e.target.name]: e.target.value };
  }

  return (
    <>
      <div className="Userform">
        <input
          type="text"
          value={data.name}
          placeholder="First name"
          name="name"
          className="formData"
          onChange={chandleHandle}
        /><br/>

        <input
          type="text"
          value={data.rollno}
          placeholder="First name"
          name="name"
          className="formData"
          onChange={chandleHandle}
        />

        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
      </div>
    </>
  );
}
