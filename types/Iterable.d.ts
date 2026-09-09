/// <reference no-default-lib="true"/>
/// <reference types="@rbxts/types"/>

type IteratorResult<Yields, Returns = void> = IteratorYieldResult<Yields> | IteratorReturnResult<Returns>;

interface IteratorYieldResult<Yields> {
	done: false;
	value: Yields;
}

interface IteratorReturnResult<Returns> {
	done: true;
	value: Returns;
}

interface Iterator<Yields, Returns = void, Next = undefined> {
	// Takes either 0 or 1 arguments - doesn't accept 'undefined'
	next: (...args: [] | [Next]) => IteratorResult<Yields, Returns>;
}

interface AsyncIterator<Yields, Returns = any, Next = undefined> {
	next: (...args: [] | [Next]) => Promise<IteratorResult<Yields, Returns>>;
}

interface Generator<Yields = unknown, Returns = void, Next = unknown> extends Iterator<Yields, Returns, Next> {
	next: (...args: [] | [Next]) => IteratorResult<Yields, Returns>;
	[Symbol.iterator](): Generator<Yields, Returns, Next>;
}

interface AsyncGenerator<Yields = unknown, Returns = any, Next = unknown> extends AsyncIterator<Yields, Returns, Next> {
	next: (...args: [] | [Next]) => Promise<IteratorResult<Yields, Returns>>;
	[Symbol.asyncIterator](): AsyncGenerator<Yields, Returns, Next>;
}

interface AsyncIterable<T, Returns = any, Next = undefined> {
	[Symbol.asyncIterator](): AsyncIterator<T, Returns, Next>;
}

interface Iterable<T, Returns = void, Next = undefined> {
	[Symbol.iterator](): Iterator<T, Returns, Next>;
}

interface AsyncIterableIterator<T, Returns = any, Next = undefined> extends AsyncIterator<T, Returns, Next> {
	[Symbol.asyncIterator](): AsyncIterableIterator<T, Returns, Next>;
}

interface IterableIterator<T, Returns = void, Next = undefined> extends Iterator<T, Returns, Next> {
	[Symbol.iterator](): IterableIterator<T, Returns, Next>;
}

interface IterableFunction<T> extends Iterable<T> {
	(): T;
}
