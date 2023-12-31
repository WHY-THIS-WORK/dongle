import { useState, useEffect, useRef } from "react";
import Dots from "../components/main/Dots";
import "../css/main.css";
import Header from "../components/header/Header";
import Main1 from "../components/main/Main1";
import Main2 from "../components/main/Main2";
import Main3 from "../components/main/Main3";
import Header2 from "../components/header/Header2";
import { useRecoilState } from "recoil";
import { LoginState } from "../recoil/atoms/LoginState";

const DIVIDER_HEIGHT = 5;

const Main = () => {
  // recoil을 통해 전역 상태 관리로 대체 예정
  const [isLogin, setIsLogin] = useRecoilState<boolean>(LoginState);

  const outerDivRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(1);

  // console.log('scrollIndex', scrollIndex);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current || {};
      const pageHeight = window.innerHeight;

      // console.log('deltaY',deltaY);
      // console.log('scrollTop', scrollTop);
      // console.log('pageHeight', pageHeight);

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (
          scrollTop !== undefined &&
          scrollTop >= 0 &&
          scrollTop < pageHeight
        ) {
          // 현재 1페이지
          // console.log("현재 1페이지, down");
          outerDivRef.current?.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (
          scrollTop !== undefined &&
          scrollTop >= pageHeight &&
          scrollTop < pageHeight * 2
        ) {
          // 현재 2페이지
          // console.log("현재 2페이지, down");
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          // console.log("현재 3페이지, down");
          outerDivRef.current?.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (
          scrollTop !== undefined &&
          scrollTop >= 0 &&
          scrollTop < pageHeight
        ) {
          // 현재 1페이지
          // console.log("현재 1페이지, up");
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (
          scrollTop !== undefined &&
          scrollTop >= pageHeight &&
          scrollTop < pageHeight * 2
        ) {
          // 현재 2페이지
          // console.log("현재 2페이지, up");
          outerDivRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          // console.log("현재 3페이지, up");
          outerDivRef.current?.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          // console.log("현재 3페이지, up");
          setScrollIndex(2);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    }

    return () => {
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      }
    };
  }, []);

  return (
    <div ref={outerDivRef} className="outer">
      {isLogin ? <Header /> : <Header2 />}
      <Dots scrollIndex={scrollIndex} />
      <div className="inner">
        <Main1 />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Main2 />
      </div>
      <div className="divider"></div>
      <div className="inner">
        <Main3 />
      </div>
    </div>
  );
};

export default Main;
