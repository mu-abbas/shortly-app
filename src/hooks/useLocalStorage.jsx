import { useEffect } from 'react';
import { useState } from 'react';

export default function useLocalStorage(initialState, key) {
  const [state, setState] = useState(function () {
    return JSON.parse(localStorage.getItem(key)) || initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );

  return [state, setState];
}
