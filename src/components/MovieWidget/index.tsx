import { memo, useState } from "react";
import { movieData } from "./movieData";
import MovieScreen from "./MovieScreen";

const MovieWidget: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  return movieData.map((screenData, index) => (
    <MovieScreen
      key={index}
      selfIndex={index}
      screenData={screenData}
      currentScreenIndex={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
};

export default memo(MovieWidget);
