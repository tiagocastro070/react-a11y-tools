/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */

/**
 * Joins strings to format IDs for compound components.
 *
 * @example
 * ```jsx
 * import { useAutoId, makeId } from "@jtmdias/react-a11y-tools";
 * ...
 * // Custom generated id by using the `useAutoId` hook and the `makeId` function
 * // to join the auto-generated id with a custom string
 * const autoId = useAutoId(id);
 * const { current: generatedId } = useRef(makeId("js-tabbable-button-", autoId));
 *
 * return (
*   <button type="button" id={generatedId}>A Button</button>
* );
* ```
*/
export function makeId(...args: (string | number | null | undefined)[]) {
	return args.filter((val) => val !== null).join("--");
}
