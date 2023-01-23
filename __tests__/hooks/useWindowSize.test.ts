import { useWindowSize } from 'src/commons/util/hooks/useWindowSize';
import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

describe('useWindowSize', () => {
  const fakeHeight = 200;
  const fakeWidth = 200;

  beforeEach(() => {
    window.innerHeight = fakeHeight;
    window.innerWidth = fakeWidth;
  });

  it('현재 윈도우의 사이즈를 반환한다.', () => {
    const { result } = renderHook(() => useWindowSize());

    const actual = result.current[0];

    expect(JSON.stringify(actual)).toBe(
      JSON.stringify({
        width: fakeWidth,
        height: fakeHeight,
      }),
    );
  });

  context('윈도우 사이즈가 변경되면', () => {
    const changeHeight = 100;
    const changeWidth = 100;

    it('변경된 사이즈를 반환한다.', async () => {
      jest.useFakeTimers();
      const { result } = renderHook(() => useWindowSize());

      expect(JSON.stringify(result.current[0])).toBe(
        JSON.stringify({
          width: fakeWidth,
          height: fakeHeight,
        }),
      );

      act(() => {
        window.innerHeight = changeHeight;
        window.innerWidth = changeWidth;
        fireEvent.resize(window);
        jest.runAllTimers();
      });

      expect(JSON.stringify(result.current[0])).toBe(
        JSON.stringify({
          width: changeWidth,
          height: changeHeight,
        }),
      );
    });
  });
});
