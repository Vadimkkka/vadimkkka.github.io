#include <stdio.h>

#define AGE 18

int main() {
	#ifdef AGE // [!code focus:5]
		printf("Age is %d", AGE);
	#else
		printf("Not Defined");
	#endif
}
