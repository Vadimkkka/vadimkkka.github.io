fname_input = main.c
fname_output = main.bin

CFLAGS = -O2 -Wall -Wextra -Werror -pedantic

AC_RED     = \x1b[31m
AC_GREEN   = \x1b[32m
AC_YELLOW  = \x1b[33m
AC_RESET   = \x1b[0m

default: dev

test: main_file = test.c
test: dev;

dev: compile run clean

compile:
	@echo "${AC_YELLOW}[${fname_input}]: Compiling...${AC_RESET}"
	@clang ${fname_input} -o ${fname_output} ${CFLAGS}

run:
	@echo "${AC_GREEN}[${fname_input}]: Running...${AC_RESET}\n"
	@./${fname_output}

clean:
	@echo "\n${AC_RED}[${fname_input}]: Cleaning...${AC_RESET}"
	@rm -f ${fname_output}
