const RenderIndicators = (props) => {
  const { images, currentSlide } = props; // props에서 images와 currentSlide 추출

  return images.map((_, index) => (
    <div
      key={index}
      className={`indicator ${index === currentSlide ? "active" : ""}`}
    ></div>
  ));
};

export default RenderIndicators;
