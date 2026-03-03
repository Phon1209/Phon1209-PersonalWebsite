## Key vs Value Optional

There’s 2 ways to indicate optional in TypeScript:

```tsx
type Type1 = {
	stuff?: string;
};

type Type2 = {
	stuff = string | undefined;
};
```

The different is that the first `Type1` doesn’t require the object to have that key, and if they didn’t supply that key it will just come out as `undefined`. However, the second one DOES require the `stuff` key to exist in the object, but it could just be `undefined`.

Very useful to guarantee the property to be passed into the API.

## Pick/Omit and Extract/Exclude

Pick/Omit are for mutating the object type into another type.

Extract and Exclude are for selecting/deselect union type `|`

```tsx
type T1 = 'A' | 'B' | 2 | 3;
type T2 = Extract<T1, string>; // 'A' | 'B'
```

the indicator behind the Extract and Exclude can be anything. Could just be an identifier in the object as well.

## Prettify

```tsx
Prettify<Type>
```

Combine the intersection type into a readable one.

## Reference

[https://www.youtube.com/watch?v=lraHlXpuhKs&t=29s](https://www.youtube.com/watch?v=lraHlXpuhKs&t=29s)