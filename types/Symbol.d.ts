/// <reference no-default-lib="true"/>

interface Symbol {}

interface SymbolConstructor {
	readonly iterator: symbol;
	readonly asyncIterator: symbol;
}
declare const Symbol: SymbolConstructor;
