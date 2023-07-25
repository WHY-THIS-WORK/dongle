type PDot = {
    num: number;
    scrollIndex: number;
};

const Dot: React.FC<PDot> = ({ num, scrollIndex }) => {
    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid black",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "black" : "transparent",
                transitionDuration: "1000",
                transition: "background-color 0.5s",
            }}
        ></div>
    );
};

export default Dot;