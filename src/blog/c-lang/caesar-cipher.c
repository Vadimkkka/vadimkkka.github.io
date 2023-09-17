#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define ALPHABET "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#define ALPHABET_SIZE (int)strlen(ALPHABET)

#define AC_RED     "\x1b[31m"
#define AC_GREEN   "\x1b[32m"
#define AC_YELLOW  "\x1b[33m"
#define AC_BLUE    "\x1b[34m"
#define AC_MAGENTA "\x1b[35m"
#define AC_CYAN    "\x1b[36m"
#define AC_RESET   "\x1b[0m"

void print_alphabet(const char alphabet[])
{
  for (int i = 0; i < ALPHABET_SIZE; i++) {
    printf(" %c ", alphabet[i]);
  }
  puts("");
}

char* get_alphabet_with_offset(const int offset)
{
  static char alphabet[ALPHABET_SIZE] = { '\0' };
  for (unsigned int i = 0, j = 0; i < ALPHABET_SIZE; i++) {
    j = (i + offset) % ALPHABET_SIZE;
    alphabet[i] = ALPHABET[j];
  }
  // print_alphabet(alphabet);
  return alphabet;
}

int get_char_index(char input_char, const char alphabet[])
{
  for (int i = 0; i < ALPHABET_SIZE; i++) {
    if (alphabet[i] == input_char) {
      return i;
    }
  }
  return -1;
}

void decode(const char input[], const int offset)
{
  puts(AC_BLUE "Decode" AC_RESET);
  const char* offset_alphabet = get_alphabet_with_offset(offset);
  printf("[%02i]: ", offset);
  int length = strlen(input);
  for (int i = 0, j = 0; i < length; i++) {
    j = get_char_index(input[i], offset_alphabet);
    printf("%c", ALPHABET[j]);
  }
  puts("");
}

void encode(const char input[], const int offset)
{
  puts(AC_MAGENTA "Encode" AC_RESET);
  const char* offset_alphabet = get_alphabet_with_offset(offset);
  printf("[%02i]: ", offset);
  int length = strlen(input);
  for (int i = 0, j = 0; i < length; i++) {
    j = get_char_index(input[i], ALPHABET);
    printf("%c", offset_alphabet[j]);
  }
  puts("");
}

void brute_force(const char input[]) {
  for (int i = 1; i < ALPHABET_SIZE; i++) {
    decode(input, i);
  }
}

const char * const flags[] = { "--decode", "--brute-force" ,"--encode", "--offset" };
const int flags_length = sizeof flags / sizeof flags[0];
// void(*commands[])(const char input[], const int offset) = { decode, encode };

void validate_args(const int argc, const char* const argv[])
{
  if (argc == 1) {
    printf(AC_RED "[-] Error: Empty flags%s\n", AC_RESET);
    exit(EXIT_FAILURE);
  }
  bool has_decode = false;
  bool has_brute_force = false;
  bool has_encode = false;

  int offset = 0;
  const char* input = NULL;

  char is_valid = 0;
  for (int i = 1; i < argc; i++) {
    is_valid = 0;
    for (int j = 0; j < flags_length; j++) {
      if (strcmp(argv[i], flags[j]) == 0) {
        is_valid = 1;
        if (j == 0) {
          has_decode = true;
        } else if (j == 1) {
          has_brute_force = true;
        } else if (j == 2) {
          has_encode = true;
        } else if (j == 3) {
          offset = atoi(argv[i + 1]) % ALPHABET_SIZE;
        }
        break;
      }
    }
    if (argv[i][0] != '-') {
      input = argv[i];
    } else if (!is_valid) {
      printf(AC_RED "[-] Error: Incorrect flag was given! [%s]%s\n", argv[i], AC_RESET);
      exit(EXIT_FAILURE);
    }
  }
  if (input == NULL) {
    printf(AC_RED "[-] Error: Empty input string%s\n", AC_RESET);
    exit(EXIT_FAILURE);
  }
  if (has_decode) decode(input, offset);
  if (has_brute_force) brute_force(input);
  if (has_encode) encode(input, offset);
}

int main(const int argc, const char* const argv[])
{
  validate_args(argc, argv);
  // return EXIT_SUCCESS;
}
