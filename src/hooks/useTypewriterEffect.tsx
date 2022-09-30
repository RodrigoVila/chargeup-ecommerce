import React from 'react';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function useCursor(typing) {
  const [toggler, setToggler] = React.useState(true);
  React.useEffect(() => {
    const id = setInterval(() => {
      setToggler((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [typing]);

  return typing || toggler ? '|' : '';
}

const initialState = {
  eventQueue: [],
  text: '',
  history: [],
  loop: false,
  delay: null,
};

const TW_ACTIONS = {
  CONSUME: 'consume',
  SET_TEXT: 'set_text',
  APPEND_CHARACTER: 'append_character',
  DELETE_CHARACTER: 'delete_character',
  HISTORIZE_CURRENT: 'historize_current',
  TRIGGER: 'trigger',
  REINSERT: 'reinsert',
  START_LOOP: 'start_loop',
};

const TW_EVENT = {
  TYPE_CHARACTER: 'type_character',
  DELETE_ALL: 'delete_all',
  DELETE_CHARACTER: 'delete_some',
  TYPE: 'type',
  PAUSE: 'pause',
  HISTORIZE: 'historize',
};

function reducer(state, action) {
  let events;
  switch (action.type) {
    case TW_EVENT.TYPE:
      events = action.payload.split('').map((character) => ({
        event: TW_EVENT.TYPE_CHARACTER,
        value: character,
      }));
      return { ...state, eventQueue: [...state.eventQueue, ...events] };
    case TW_EVENT.DELETE_CHARACTER: {
      events = [];
      for (let i = 0; i < action.payload; ++i) {
        events.push({
          event: TW_EVENT.DELETE_CHARACTER,
        });
      }
      return { ...state, eventQueue: [...state.eventQueue, ...events] };
    }
    case TW_EVENT.DELETE_ALL:
      events = [];
      for (let i = 0; i < state.text.length; ++i) {
        events.push({
          event: TW_EVENT.DELETE_CHARACTER,
        });
      }
      return {
        ...state,
        eventQueue: [...state.eventQueue, ...events],
      };
    case TW_ACTIONS.CONSUME: {
      return {
        ...state,
        eventQueue: state.eventQueue.slice(1, state.eventQueue.length),
      };
    }
    case TW_ACTIONS.REINSERT: {
      return {
        ...state,
        eventQueue: [...state.eventQueue.slice(1, state.eventQueue.length), state.eventQueue[0]],
      };
    }
    case TW_ACTIONS.SET_TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case TW_EVENT.PAUSE: {
      return {
        ...state,
        eventQueue: [...state.eventQueue, { event: TW_EVENT.PAUSE, value: action.payload }],
      };
    }
    case TW_EVENT.HISTORIZE: {
      return {
        ...state,
        eventQueue: [...state.eventQueue, { event: TW_EVENT.HISTORIZE }],
      };
    }
    case TW_ACTIONS.HISTORIZE_CURRENT: {
      return {
        ...state,
        history: [...state.history, state.text],
        text: '',
      };
    }
    case TW_ACTIONS.APPEND_CHARACTER: {
      return {
        ...state,
        text: state.text + action.payload,
      };
    }
    case TW_ACTIONS.DELETE_CHARACTER: {
      return {
        ...state,
        text: state.text.slice(0, -1),
      };
    }
    case TW_ACTIONS.TRIGGER: {
      return {
        ...state,
        loop: action.payload.loop,
        eventQueue: [...state.eventQueue, ...action.payload.eventQueue],
        delay: action.payload.delay,
      };
    }
    default:
      throw new Error();
  }
}

function useTypewriterEffect() {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
  });

  const { eventQueue, text, history, loop, delay } = state;
  const lastFrameRef = React.useRef();
  const pauseTimeRef = React.useRef();
  React.useEffect(() => {
    function step() {
      if (!eventQueue.length) {
        return;
      }
      raf = requestAnimationFrame(step);

      const actualEvent = eventQueue[0];

      if (!lastFrameRef.current) {
        lastFrameRef.current = Date.now();
      }
      const now = Date.now();
      const delta = now - lastFrameRef.current;

      if (pauseTimeRef.current && pauseTimeRef.current > now) {
        return;
      } else {
        pauseTimeRef.current = null;
      }
      const d = delay ? delay : getRandomArbitrary(60, 120);
      if (delta < d) {
        return;
      }
      lastFrameRef.current = now;

      if (actualEvent.event === TW_EVENT.PAUSE) {
        pauseTimeRef.current = now + actualEvent.value;
      } else if (actualEvent.event === TW_EVENT.TYPE_CHARACTER) {
        dispatch({
          type: TW_ACTIONS.APPEND_CHARACTER,
          payload: actualEvent.value,
        });
      } else if (actualEvent.event === TW_EVENT.DELETE_ALL) {
        dispatch({ type: TW_ACTIONS.SET_TEXT, payload: '' });
      } else if (actualEvent.event === TW_EVENT.DELETE_CHARACTER) {
        dispatch({ type: TW_ACTIONS.DELETE_CHARACTER });
      } else if (actualEvent.event === TW_EVENT.HISTORIZE) {
        dispatch({ type: TW_ACTIONS.HISTORIZE_CURRENT });
      }

      if (loop) {
        dispatch({ type: TW_ACTIONS.REINSERT });
      } else {
        dispatch({ type: TW_ACTIONS.CONSUME });
      }
    }

    let raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [eventQueue, loop, delay]);

  return [text, dispatch, eventQueue.length !== 0 && !pauseTimeRef.current, history];
}

/**
 * Exposes a declarative api to configure the typewriter.
 * @param {*} dispatch React dispatch returned by the useTypewriter hook
 * @returns
 */
function getTypewriter(dispatch) {
  let eventQueue = [];
  let loop = false;
  let delay = null;
  return {
    type(characters) {
      eventQueue = reducer({ eventQueue }, { type: TW_EVENT.TYPE, payload: characters }).eventQueue;
      return this;
    },
    deleteSome(number) {
      eventQueue = reducer(
        { eventQueue },
        {
          type: TW_EVENT.DELETE_CHARACTER,
          payload: number,
        }
      ).eventQueue;
      return this;
    },
    deleteAll() {
      let amountToDelete = eventQueue.filter((ev) => ev.event === TW_EVENT.TYPE_CHARACTER).length;
      amountToDelete -= eventQueue.filter((ev) => ev.event === TW_EVENT.DELETE_CHARACTER).length;
      let dummyString = '';
      for (let i = 0; i < amountToDelete; ++i) {
        dummyString += 'i';
      }

      eventQueue = reducer(
        { eventQueue, text: dummyString },
        { type: TW_EVENT.DELETE_ALL }
      ).eventQueue;
      return this;
    },
    pauseFor(number) {
      eventQueue = reducer({ eventQueue }, { type: TW_EVENT.PAUSE, payload: number }).eventQueue;
      return this;
    },
    historize() {
      eventQueue = reducer({ eventQueue }, { type: TW_EVENT.HISTORIZE }).eventQueue;
      return this;
    },

    reset() {
      eventQueue = [];
      delay = null;
      return this;
    },

    setLoop(bool) {
      loop = bool;
      return this;
    },

    setDelay(seconds) {
      delay = seconds;
      return this;
    },

    trigger() {
      // update state
      dispatch({
        type: TW_ACTIONS.TRIGGER,
        payload: { eventQueue, loop, delay },
      });
      // reset eventQueue
      this.reset();
      return this;
    },
  };
}
export { useTypewriterEffect as default, useCursor, useTypewriterEffect, getTypewriter };
