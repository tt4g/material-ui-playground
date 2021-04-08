import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top after rendering when pathname of react-router is changed.
 *
 * See references: https://reactrouter.com/web/guides/scroll-restoration
 *
 * NOTE: This function use `useEffect()` provided by react.
 * NOTE: This function use `useLocation()` provided by react-router-dom.
 *
 * @example
 * const ScrollToTop = () => {
 *   useScrollToTop();
 *
 *   return null;
 * }
 */
const useScrollToTop: () => void = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export { useScrollToTop };
