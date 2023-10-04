#include <stdio.h>

void foo (int i) {
  printf ("foo %d!\n", i);
}
void bar (int i) {
  printf ("%d bar!\n", i);
}
void message (void (*func)(int), int times) {
  for (int j = 0;j < times; j++) func(j); // (*func)(j)
}

void example (int want_foo) {
  void (*pf)(int) = want_foo ? foo : &bar; // & не обязательно
  message(pf, 5);
}
