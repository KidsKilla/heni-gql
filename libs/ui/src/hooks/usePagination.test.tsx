import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from './usePagination';

describe('usePagination', () => {
  describe('init', () => {
    it('simple case', () => {
      const { result } = renderHook(() =>
        usePagination({
          list: [1, 2, 3, 4, 5],
          pageSize: 2,
        })
      );
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 0,
          "offsetItems": 0,
          "pageItems": Array [
            1,
            2,
          ],
          "pageSize": 2,
          "setPage": [Function],
          "totalItems": 5,
          "totalPages": 3,
        }
      `);
    });

    it('pageSize exceed list length', () => {
      const { result } = renderHook(() =>
        usePagination({
          list: [1, 2],
          pageSize: 5,
        })
      );
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 0,
          "offsetItems": 0,
          "pageItems": Array [
            1,
            2,
          ],
          "pageSize": 5,
          "setPage": [Function],
          "totalItems": 2,
          "totalPages": 1,
        }
      `);
    });
    it('empty list', () => {
      const { result } = renderHook(() =>
        usePagination({
          list: [],
          pageSize: 5,
        })
      );
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 0,
          "offsetItems": 0,
          "pageItems": Array [],
          "pageSize": 5,
          "setPage": [Function],
          "totalItems": 0,
          "totalPages": 0,
        }
      `);
    });
  });

  describe('bad inputs', () => {
    it.each([0, -1, NaN])('pageSize %p', (pageSize) => {
      const { result } = renderHook(() =>
        usePagination({
          list: [1, 2, 3],
          pageSize,
        })
      );
      expect(result.error).toBeInstanceOf(Error);
    });
  });

  describe('updates', () => {
    it('page 1 -> 2 -> 0', () => {
      const { result } = renderHook(() =>
        usePagination({
          list: [1, 2, 3, 4, 5],
          pageSize: 2,
        })
      );
      act(() => {
        result.current.setPage(1);
      });
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 1,
          "offsetItems": 2,
          "pageItems": Array [
            3,
            4,
          ],
          "pageSize": 2,
          "setPage": [Function],
          "totalItems": 5,
          "totalPages": 3,
        }
      `);
      act(() => {
        result.current.setPage(2);
      });
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 2,
          "offsetItems": 4,
          "pageItems": Array [
            5,
          ],
          "pageSize": 2,
          "setPage": [Function],
          "totalItems": 5,
          "totalPages": 3,
        }
      `);
      act(() => {
        result.current.setPage(0);
      });
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "currentPage": 0,
          "offsetItems": 0,
          "pageItems": Array [
            1,
            2,
          ],
          "pageSize": 2,
          "setPage": [Function],
          "totalItems": 5,
          "totalPages": 3,
        }
      `);
    });
  });
});
