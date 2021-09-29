import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import reducer from "./reducer";

// Initial State
const initialState: State = {
  isDark: false,
  todos: [
    {
      id: 0,
      title: "Prepare dev.to article ✍",
      createdAt: new Date("2021-09-28T12:00:00-06:30"),
      isCompleted: false,
    },
    {
      id: 1,
      title: "Re-write Backend Api 💻",
      createdAt: new Date("2021-09-29T12:00:00-06:30"),
      isCompleted: true,
    },
    {
      id: 2,
      title: "Watch season 3 episode 2 of Attack on titans 👀",
      createdAt: new Date("2021-09-30T11:00:00-06:30"),
      isCompleted: false,
    },
    {
      id: 3,
      title: "Go for a bicycle ride around town 🚴",
      createdAt: new Date("2021-09-30T12:00:00-06:30"),
      isCompleted: false,
    },
  ],
};

// Create Our context
const globalContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

// Provider to wrap around our root react component
export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

// Custom context hook
export const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};
