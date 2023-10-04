#include <stdio.h>

#define VERA "🥳" // [!code focus:3]
#define SUM(a,b) (a + b)
#define ALOE() aloe()

int aloe() {
  return SUM(11, 22); // [!code focus]
}

int main() {
  ALOE(); // [!code focus:2]
  printf("aloe %s\n", VERA);
}
