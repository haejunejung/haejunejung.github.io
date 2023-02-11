CXXFLAGS += -Wall -std=c++17 -pedantic -g -fsanitize=address

main:	main.o
	$(CXX) -o $@ $^ -fsanitize=address

.phony:	clean
clean:
	$(RM)	main *.o