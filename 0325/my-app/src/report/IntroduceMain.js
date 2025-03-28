import React, { useState } from "react";
import Introduce1 from './IntroduceName';
import Introduce2 from "./IntroduceAge";
import Introduce3 from "./IntroduceHobby";
import Introduce4 from "./IntroduceMbti";
import Introduce5 from "./IntroduceAddr";

function Introducemain() {
  const [select, setSelect] = useState('');

  return (
    <div>
    <label style={{display: "inline-flex", flexDirection: "column", gap:5, paddingRight:"10px"}}>
        <input type="radio" value="name" checked={select === "name"} onChange={(e) => setSelect(e.target.value)} />
        <span>Name</span>
      </label>
      <label style={{display: "inline-flex", flexDirection: "column", gap:5, paddingRight:"10px"}}>
        <input type="radio" value="age" checked={select === "age"} onChange={(e) => setSelect(e.target.value)} />
        <span>Age</span>
      </label>
      <label style={{display: "inline-flex", flexDirection: "column", gap:5, paddingRight:"10px"}}>
        <input type="radio" value="hobby" checked={select === "hobby"} onChange={(e) => setSelect(e.target.value)} />
        <span>Hobby</span>
      </label>
      <label style={{display: "inline-flex", flexDirection: "column", gap:5, paddingRight:"10px"}}>
        <input type="radio" value="mbti" checked={select === "mbti"} onChange={(e) => setSelect(e.target.value)} />
        <span>Mbit</span>
      </label>
      <label style={{display: "inline-flex", flexDirection: "column", gap:5, paddingRight:"10px"}}>
        <input type="radio" value="addr" checked={select === "addr"} onChange={(e) => setSelect(e.target.value)} />
        <span>Addr</span>
      </label>

      {select === "name" && <Introduce1/>}
      {select === "age" && <Introduce2/>}
      {select === "hobby" && <Introduce3/>}
      {select === "mbti" && <Introduce4/>}
      {select === "addr" && <Introduce5/>}
    </div>
  );
}
export default Introducemain;