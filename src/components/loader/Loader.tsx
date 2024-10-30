import "./loader.css"; // Ensure you have the CSS file or the styles in your main CSS file

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center mx-auto ">
      <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};

export default Loader;
