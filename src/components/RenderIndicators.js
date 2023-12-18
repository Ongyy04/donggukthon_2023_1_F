const RenderIndicators = (props) => {
  //Carousel 아래에 점 세개로 표현하는 건데 왜 안되지..
  const { images, currentSlide } = props; // props에서 images와 currentSlide 추출

  return images.map((_, index) => (
    <div
      key={index}
      className={`indicator ${index === currentSlide ? "active" : ""}`}
    ></div>
  ));
};

export default RenderIndicators;
