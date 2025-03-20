import { useState } from "react";

export function ClickablePicture() {

  const picOn = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const picOff = "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=3001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const [currentPic, setCurrentPic] = useState(picOn);
  
  const togglePic = () => {
    if (currentPic === picOn) {
      setCurrentPic(picOff);
    } else {
      setCurrentPic(picOn);
    }
  };

  return (
    <>
      <img onClick={togglePic} src={currentPic} className="pic"/>
    </>
  )
  
 }
