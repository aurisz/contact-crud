import { renderHook, act } from '@testing-library/react-hooks';

import useToggle from './useToggle';

describe('useToggle', () => {
  it('useToggle should true if boolean argument is false', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      const [toggle, setToggle] = result.current;

      setToggle(false);
    });

    const [toggle] = result.current;
    expect(toggle).toStrictEqual(true);
  });

  it('useToggle should return false if argument is true', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      const [toggle, setToggle] = result.current;

      setToggle(true);
    });

    const [toggle] = result.current;
    expect(toggle).toStrictEqual(false);
  });
});
