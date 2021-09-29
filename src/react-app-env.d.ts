/// <reference types="react-scripts" />

interface Todo {
    id: number;
    title: string;
    isCompleted: Boolean;
    createdAt: Date;
}
interface State {
    isDark: boolean;
    todos: Todo[];
}

type ActionTypes = 'TOGGLE_MODE' | 'ADD_TODO' | 'REMOVE_TODO' | 'MARK_AS_DONE';
interface Action {
    type: ActionTypes;
    payload?: any;
}

type ReducerType = (state: State, action: Action) => State;

type ContextHook = () => {
    state: State,
    dispatch: (action: Action) => void;
}