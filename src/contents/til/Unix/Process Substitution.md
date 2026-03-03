In Unix, we can use the format `<(<command>)` to execute a command that output into a “temporary” file that we can use without having to store it to intermediate file.

This will create an anonymous pipe when execute the command the output is sent through the pipe instead of printing it out in the console (and write it down to a file).

Example: If we want to check whether `file2` is the unsorted version of `file1`, instead of sorting `file2` in an intermediate file such as [`file2.int`](http://file2.int) can we use:

```bash
diff file1 <(sort file2)
```

This will result in

```bash
diff file1 /dev/fd/63
```

When `/dev/fd/63` is the anonymous pipe that the subprocess created

It’s useful as a substitute for an intermediate process and it’s also parallel

## Resources

[https://youtu.be/2A4bs40scSo?si=QjuloOXLTPNfaF8X](https://youtu.be/2A4bs40scSo?si=QjuloOXLTPNfaF8X)