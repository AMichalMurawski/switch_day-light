import { useEffect } from "react";
import css from "./SwitchDayLight.module.css";



export const SwitchDayLight = ({ scale }) => {
  const pxScale = (px) => {
    return `${scale * px}px`;
  };

  const cloud = ( cloudScale = 1, color ) => {
    const cloudData = [[50,145,10],[105,145,14],[155,130,17],[210,140,12],[250,125,17],[310,135,17],[350,100,18]]
    const cloudMap = cloudData.map(el =>
      `radial-gradient(circle at ${pxScale(el[0])} ${pxScale(el[1])}, ${color} ${el[2]*cloudScale}%, transparent ${el[2]*cloudScale}%)`
    )
    const cloudGradient = cloudMap.join(', ')
    return cloudGradient
  }
  
  useEffect(() => {
    cloud()
  })

  return (
    <div
      style={{
        position: "relative",
        minWidth:pxScale(369),
        width: pxScale(369),
        minHeight:pxScale(145),
        height: pxScale(145),
        borderRadius: pxScale(72.5),
        backgroundColor: "#3367c1",
        display: "flex",
        alignItems: "center",
        overflow:"hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pxScale(-125),
          width: pxScale(400),
          height: pxScale(400),
          borderRadius: pxScale(200),
          background: `radial-gradient(
            rgba(255, 255, 255, 0.25), 
            rgba(255, 255, 255, 0.25) 35%,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.15) 53%,
            rgba(255, 255, 255, 0.05) 58%,
            rgba(255, 255, 255, 0.05) 62%,
            rgba(255, 255, 255, 0) 74%)`,
          zIndex: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: pxScale(120),
            height: pxScale(120),
            borderRadius: pxScale(60),
            backgroundColor: "rgb(229, 195, 41)",
            boxShadow: `
            0 ${pxScale(-3)} ${pxScale(3)} rgb(88, 88, 88) inset,
            0 ${pxScale(4)} ${pxScale(7)} rgb(88, 88, 88)`,
            zIndex: 10,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: pxScale(369),
          height: pxScale(145),
          background:cloud(1,"rgb(255, 255, 255)"),
          zIndex: 15
      }}/>
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: pxScale(369),
          height: pxScale(145),
          background:cloud(1.35, "rgb(235, 235, 235)"),
          zIndex: 12
      }}/>
    </div>
  );
};
