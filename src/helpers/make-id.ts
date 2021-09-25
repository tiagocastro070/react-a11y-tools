/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * make-id.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */
export function makeId(...args: (string | number | null | undefined)[]) {
	return args.filter((val) => val != null).join("--");
}
