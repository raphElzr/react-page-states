import { usePage } from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('usePage', () => {
  it('default states', () => {
    const { result } = renderHook(() => usePage());

    expect(result.current.pageNo).toBe(1);
    expect(result.current.pageSize).toBe(10);
  })
})
