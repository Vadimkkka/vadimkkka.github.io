out_name = aloe.out

dev: 
	@$(MAKE) compile
	@$(MAKE) run
	@$(MAKE) clean

compile:
	@gcc main.c -o $(out_name) -Wall -Wextra -Werror -pedantic

run:
	@./$(out_name)

clean:
	@rm $(out_name)
