/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "@jtmdias/js-utilities";

/**
 * `useLayoutEffect` that does not show warning when server-side rendering.
 *
 * It can be used as a drop-in replacement for `useLayoutEffect`.
 *
 * @examples
 * ```jsx
 * import { useSafeLayoutEffect } from "@jtmdias/react-a11y-tools";
 * ...
 * useSafeLayout(() => {
 * });
 * ...
 * ```
 *
 * See Alex Reardon's article for more info.
 * {@see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a}
 */
export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
