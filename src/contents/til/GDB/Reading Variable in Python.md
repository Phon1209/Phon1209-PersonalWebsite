`parse_and_eval` can take the variable name as a string and give the value of the variable. However, if it’s not in the scope, it will give a `gdb.error`. This should be handled separately.

Aside from that, after **eval,** we will gain access to two most important properties:

1. value
2. var.type

value is self-explanatory, and as for the other one, we can use `var.type` to do whatever we want with our code’s logic. `var.type` can also give out a `code` , a number which represent the variable. There’s also defined list of var code in the `gdb` library such as `gdb.TYPE_CODE_INT`. This make it easier for us to write readable code.

Additionally, some variable type will have additional property we can use such as

- Array: has `range()` that can be used to determine the array size
- Struct: has `fields()` used for iterating through the fields/members
- Pointer: has `dereference()` that is very self-explanatory