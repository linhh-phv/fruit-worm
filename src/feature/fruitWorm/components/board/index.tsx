import React, {useEffect, useState} from 'react';
import {
  LayoutAnimation,
  LayoutAnimationConfig,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import {Colors} from '../../../../styles/colors';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {IBoundaries, ICoordinate, EDirection} from '../../../../models';
import {checkGameOver} from '../../../../util/checkGameOver';
import {checkEatsFood} from '../../../../util/checkEatFood';
import {randomFoodPosition} from '../../../../util/randomFoodPosition';
import Food from '../food';
import Worm from '../worm';
import {Size} from '../../../../styles/size';
import PopupLose from '../popup';
import Header from '../header';
import {useGetNavigation} from '../../../../hooks';

const WORM_INIT_POSITION: ICoordinate[] = [
  {x: Size.WORM_SIZE, y: Size.WORM_SIZE},
];
const FOOD_INIT_POSITION: ICoordinate = {
  x: Size.WORM_SIZE * 2,
  y: Size.WORM_SIZE * 5,
};
export const GAME_BOUNDS: IBoundaries = {
  xMin: 0,
  xMax: Size.WIDTH_BOARD,
  yMin: 0,
  yMax: Size.HEIGHT_BOARD,
};
const MOVE_INTERVAL = 200;
const SCORE_INCREMENT = 10;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Game: React.FC = () => {
  const {navigation} = useGetNavigation();

  const [direction, setDirection] = useState<EDirection>(EDirection.Right);
  const [worm, setWorm] = useState<ICoordinate[]>(WORM_INIT_POSITION);
  const [food, setFood] = useState<ICoordinate>(FOOD_INIT_POSITION);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!isGameOver) {
      const intervalId = setInterval(() => {
        !isPaused && moveWorm();
      }, MOVE_INTERVAL);
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver, isPaused, worm]);

  const CustomAni: LayoutAnimationConfig = {
    duration: 200,
    create: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
    },
    update: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
    },
    delete: {
      duration: 100,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
    },
  };

  const moveWorm = () => {
    LayoutAnimation.configureNext(CustomAni);
    const wormHead = worm[0];
    const newHead = {...wormHead};

    if (checkGameOver(wormHead, GAME_BOUNDS)) {
      setIsGameOver(true);
      return;
    } else if (!isGameOver) {
      switch (direction) {
        case EDirection.Up:
          newHead.y -= Size.WORM_SIZE;
          break;

        case EDirection.Down:
          newHead.y += Size.WORM_SIZE;
          break;

        case EDirection.Left:
          newHead.x -= Size.WORM_SIZE;
          break;

        case EDirection.Right:
          newHead.x += Size.WORM_SIZE;
          break;

        default:
          break;
      }

      if (checkEatsFood(newHead, food, Size.WORM_SIZE)) {
        // return;
        setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
        setWorm([newHead, ...worm]);
        setScore(score + SCORE_INCREMENT);
      } else {
        setWorm([newHead, ...worm.slice(0, -1)]);
      }
    }
  };

  const _onHandleGesture = (
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) => {
    const {translationX, translationY} = event.nativeEvent;

    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        if (direction === EDirection.Left) {
          return;
        } else {
          setDirection(EDirection.Right);
        }
      } else if (translationX < 0) {
        if (direction === EDirection.Right) {
          return;
        } else {
          setDirection(EDirection.Left);
        }
      }
    } else {
      if (translationY > 0) {
        if (direction === EDirection.Up) {
          return;
        } else {
          setDirection(EDirection.Down);
        }
      } else if (translationY < 0) {
        if (direction === EDirection.Down) {
          return;
        } else {
          setDirection(EDirection.Up);
        }
      }
    }
  };

  const _onReloadGame = () => {
    setWorm(WORM_INIT_POSITION);
    setFood(FOOD_INIT_POSITION);
    setIsGameOver(false);
    setScore(0);
    setDirection(EDirection.Right);
    setIsPaused(false);
  };

  const _onPauseGame = () => {
    setIsPaused(!isPaused);
  };

  const _onBack = () => {
    navigation.goBack();
  };

  return (
    <PanGestureHandler onGestureEvent={_onHandleGesture}>
      <SafeAreaView style={styles.container}>
        <Header isPause={isPaused} pauseGame={_onPauseGame} onBack={_onBack}>
          <Text style={styles.textScore}>{score}</Text>
        </Header>

        <View style={[styles.boundaries, {height: Size.HEIGHT_BOARD}]}>
          <Worm worm={[...worm]} direction={direction} />
          <Food food={{...food}} />
        </View>
        <PopupLose
          visible={isGameOver}
          onReplay={_onReloadGame}
          onClose={_onBack}
          title={`You have won \n${score} score`}
        />
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Size.size50,
  },
  boundaries: {
    borderColor: Colors.primary,
    margin: Size.size12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.background,
  },
  textScore: {fontSize: 20, fontWeight: 'bold', color: Colors.yellowY60},
});
