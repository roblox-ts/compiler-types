/// <reference no-default-lib="true"/>

interface String extends Iterable<string> {
	/** The current number of characters in the string. */
	size(this: string): number;
}
