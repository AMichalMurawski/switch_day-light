import css from "./SwitchDayLight.module.css";

export const SwitchDayLight = ({ scale }) => {
  const pxScale = (px) => {
    return `${scale * px}px`;
  };

  return (
    <div
      style={{
        position: "relative",
        width: pxScale(300),
        height: pxScale(100),
        borderRadius: pxScale(50),
        backgroundColor: "#3367c1",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className={css.switch}
        style={{
          position: "absolute",
          left: pxScale(-100),
          width: pxScale(300),
          height: pxScale(300),
          borderRadius: pxScale(200),
          background: `radial-gradient(
            rgba(255, 255, 255, 0.25), 
            rgba(255, 255, 255, 0.25) 30%,
            rgba(255, 255, 255, 0.15) 35%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.05) 55%,
            rgba(255, 255, 255, 0.05) 66%,
            rgba(255, 255, 255, 0) 75%)`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: pxScale(80),
            height: pxScale(80),
            borderRadius: pxScale(40),
            backgroundColor: "rgb(229, 195, 41)",
            boxShadow: `
            0 ${pxScale(-3)} ${pxScale(3)} rgb(88, 88, 88) inset,
            0 ${pxScale(4)} ${pxScale(7)} rgb(88, 88, 88)`,
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
};
