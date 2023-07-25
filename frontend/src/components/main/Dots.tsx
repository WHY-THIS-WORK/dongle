import Dot from "./Dot";

type TDots = {
    scrollIndex: number;
};

const Dots: React.FC<TDots> = ({ scrollIndex }) => {
    return (
        <div style={{ position: "fixed", top: "50%", right: 100 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 20,
                    height: 100,
                }}
            >
                <Dot num={1} scrollIndex={scrollIndex}></Dot>
                <Dot num={2} scrollIndex={scrollIndex}></Dot>
                <Dot num={3} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;