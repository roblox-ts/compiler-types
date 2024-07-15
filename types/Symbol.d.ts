/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

interface Symbol {
	/**
	 * **DO NOT USE!**
	 *
	 * This field exists to force TypeScript to recognize this as a nominal type
	 * @hidden
	 * @deprecated
	 */
	readonly _nominal_Symbol: unique symbol;

	description?: string | number;
}

interface SymbolConstructor {
	/**
	 * Returns a new unique Symbol value.
	 * @param  description Description of the new Symbol object.
	 */
	(description?: string | number): symbol;

	/**
	 * A method that determines if a constructor object recognizes an object as one of the
	 * constructor’s instances. Called by the semantics of the instanceof operator.
	 */
	readonly hasInstance: unique symbol;

	/**
	 * A method that returns the default iterator for an object. Called by the semantics of the
	 * for-of statement.
	 */
	readonly iterator: unique symbol;

	/**
	 * A method that returns the default async iterator for an object. Called by the semantics of
	 * the for-await-of statement.
	 */
	readonly asyncIterator: unique symbol;

	/**
	 * A method that is used to release resources held by an object. Called by the semantics of the `using` statement.
	 */
	readonly dispose: unique symbol;

	/**
	 * A method that is used to asynchronously release resources held by an object. Called by the semantics of the `await using` statement.
	 */
	readonly asyncDispose: unique symbol;
}
declare const Symbol: SymbolConstructor;
