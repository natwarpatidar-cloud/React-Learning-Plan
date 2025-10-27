// Custom reducer with logger and async middleware
import { Button } from "@/components/ui/button";
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return { count: state.count + 1 };
        default:
            return state;
    }
}

function useReducerWithMiddleware(reducer, initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const logger = (action) => {
        console.log("Action:", action);
        dispatch(action);
        console.log("New State:", state);
    };

    const customDispatch = (action) => {
        if (typeof action === "function") {
            return action(customDispatch, state);
        } else {
            return logger(action);
        }
    };

    return [state, customDispatch];
}

export default function Counter() {
    const [state, dispatch] = useReducerWithMiddleware(reducer, { count: 0 });

    const asyncAdd = async (dispatch) => {
        await new Promise((r) => setTimeout(r, 1000));
        dispatch({ type: "ADD" });
    };

    return (
        <div className=" flex flex-col gap-4">
            <h2>Count: {state.count}</h2>
            <div className="flex gap-2">
                <Button onClick={() => dispatch({ type: "ADD" })}>Add</Button>
                <Button onClick={() => dispatch(asyncAdd)}>Add Async (1s)</Button>
            </div>
        </div>
    );
}