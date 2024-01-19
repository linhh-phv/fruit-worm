interface INetworkState {
  isIpVN: boolean;
  loading: boolean;
}

const initState: INetworkState = {
  isIpVN: false,
  loading: false,
};

type NetworkAction =
  | {type: 'setIpNetwork'; payload: {isIpVN: boolean}}
  | {type: 'getIpNetwork'};

const reducer = (
  state: INetworkState,
  action: NetworkAction,
): INetworkState => {
  switch (action.type) {
    case 'setIpNetwork': {
      const nextState: INetworkState = JSON.parse(JSON.stringify(state)); //deep copy
      nextState.loading = false;
      nextState.isIpVN = action.payload.isIpVN;
      return nextState;
    }

    case 'getIpNetwork': {
      const nextState: INetworkState = JSON.parse(JSON.stringify(state)); //deep copy
      nextState.loading = true;
      return nextState;
    }

    default:
      return state;
  }
};

export {reducer, initState};
