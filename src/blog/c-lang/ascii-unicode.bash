#region hexdump-1
$ hexdump main.c | less
  0000000 6923 636e 756c 6564 3c20 7473 6964 2e6f
  0000010 3e68 230a 6e69 6c63 6475 2065 733c 6474
#endregion hexdump-1
#
#region hexdump-2
$ hexdump -C main.c | less
  00000000  23 69 6e 63 6c 75 64 65  20 3c 73 74 64 69 6f 2e  |#include <stdio.|
  00000010  68 3e 0a 23 69 6e 63 6c  75 64 65 20 3c 73 74 64  |h>.#include <std|
#endregion hexdump-2
#
#region hexdump-3
$ file main.c
  main.c: c program text, ASCII text
$ hexdump -C main.c | less
  ...
  00000060  54 20 22 41 42 43 44 45  46 47 48 49 4a 4b 4c 4d  |T "ABCDEFGHIJKLM|
#endregion hexdump-3
#
#region hexdump-4
$ file main.c
  main.c: c program text, Unicode text, UTF-8 text
$ hexdump -C main.c | less
  ...
  00000060  54 20 22 d0 a4 41 42 43  44 45 46 47 48 49 4a 4b  |T "ФABCDEFGHIJK|
#endregion hexdump-4
#
#region hexdump-5
$ file main.c
  main.c: c program text, Unicode text, UTF-8 (with BOM) text
$ hexdump -C main.c | less
  00000000  ef bb bf 23 69 6e 63 6c  75 64 65 20 3c 73 74 64  |#include <std| // [!code hl]
  00000010  69 6f 2e 68 3e 0a 23 69  6e 63 6c 75 64 65 20 3c  |io.h>.#include <|
#endregion hexdump-5
