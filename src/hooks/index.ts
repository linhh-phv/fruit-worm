import {MainParamsList} from '../navigations/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

export const useGetNavigation = <T extends keyof MainParamsList | never>() => {
  type screenProps = NativeStackNavigationProp<MainParamsList>;
  type RootRouteProps<RouteName extends keyof MainParamsList> = RouteProp<
    MainParamsList,
    RouteName
  >;
  const route = useRoute<RootRouteProps<T>>();
  const navigation = useNavigation<screenProps>();
  return {
    navigation,
    route,
  };
};
