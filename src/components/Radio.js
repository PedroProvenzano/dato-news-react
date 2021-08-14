function Radio() {
  return (
    <div className="radio-cont">
      <iframe
        style={{ padding: "0px" }}
        src="https://player.raddios.com/multiplayer_get.php?r=38&amp;autoplay=1&amp;currentsong=0&amp;r_tipo=22&amp;lang=es"
        height="50"
        id="iframeRadio"
        title="Radio"
      ></iframe>
    </div>
  );
}

export default Radio;
