package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	//with this log. statements we are just customizing the way we print things
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	// Our slice of names:
	names := []string{"Gladys", "Samantha", "Darrin"}
	//-------------------------------------------------
	message, err := greetings.Hellos(names)
	//If an error was returned, print it to the console and exit the program
	if err != nil {
		log.Fatal(err)
	}
	//if no error was returned, print the returned message to the console
	fmt.Println(message)
}
