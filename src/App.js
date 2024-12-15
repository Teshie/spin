import "./styles.css";
import WheelComponent from "react-wheel-of-prizes";

export default function App() {
  const segments = [
    "PB",
    "MM",
    "L",
    "K",
    "AoN",
    "P3",
    "P4",
    "EJ",
    "EM",
    "PB",
    "MM",
    "L",
    "K",
    "AoN",
    "P3",
    "P4",
    "EJ",
    "EM",
  ];
  const segColors = [
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="red"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
