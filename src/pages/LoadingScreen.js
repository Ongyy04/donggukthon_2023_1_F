import React, { useState, useEffect, useRef } from "react";
import "./LoadingScreen.scss"; // 스타일시트 경로
import "./CarouselComponent.scss";
import RenderIndicators from "../components/RenderIndicators";
import { useNavigate } from "react-router-dom";

function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const carouselRef = useRef(null);

  const images = [
    "/assets/thumbup.png",
    "/assets/readingglasses.png",
    "/assets/heart.png",
  ];

  const captions = [
    "투표로 못다 한 진심을 \n전해보세요!",
    "나에 대한 다른 사람들의 \n생각을 들어봐요!",
    "누가 나를 선택했는지 \n맞춰봐요!",
  ];
  const miniCaptions = [
    "익명으로 내가 생각하는 상대를 'Pick'해요 ",
    "다른 사람들은 어떻게 \n생각했는지 볼 수 있어요.",
    "눈꽃을 모으면 누가 나를 \n선택했는지 맞춰볼 수 있어요.",
  ];

  const handleLogoLoad = () => {
    setLogoLoaded(true); // 로고 이미지 로딩 완료
  };
  const handleImgLoad = () => {
    setImgLoaded(true);
  };
  //드래그로 로딩 화면 구현
  const handleDragStart = (e) => {
    carouselRef.current.startX = e.touches[0].clientX;
  };
  // 드래그 함수 구현
  const handleDragMove = (e) => {
    const touch = e.touches[0];
    const move = carouselRef.current.startX - touch.clientX;

    if (move > 150 && currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
      carouselRef.current.startX = touch.clientX;
    } else if (move < -150 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      carouselRef.current.startX = touch.clientX;
    }
  };

  useEffect(() => {
    if (logoLoaded) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = Math.min(oldProgress + 30, 100);
          if (newProgress === 100) {
            setIsLoading(true); // 로딩이 100%에 도달했을 때 실행
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 270);

      return () => clearInterval(interval);
    }
  }, [logoLoaded]);

  return isLoading ? (
    //로딩 완료시 사용할 화면 구성
    <div className="carousel-container">
      <div
        className="carousel-slides"
        ref={carouselRef}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }} // 현재 슬라이드에 따라 위치 조정
          >
            <img src={src} alt={`Slide ${index}`} onLoad={handleImgLoad} />
          </div>
        ))}
        <RenderIndicators images={images} currentSlide={currentSlide} />
      </div>
      <h1>{captions[currentSlide]}</h1> {/* 현재 슬라이드에 맞는 문구 표시 */}
      <p>{miniCaptions[currentSlide]}</p>
      {currentSlide === 2 ? (
        <button
          onClick={() => {
            navigate("/home"); // 예시 경로
          }}
        >
          시작하기
        </button>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className="loading-layout">
      <div>
        <div className="Loading-image-container">
          <img
            src="/assets/Logo-white.png"
            alt="로딩 중 이미지"
            onLoad={handleLogoLoad}
          />
        </div>
      </div>
      {logoLoaded && (
        <div className="loading-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}>
            <div className="loading-progress">{progress}%</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;
