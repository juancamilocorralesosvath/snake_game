package greetings

import (
	"errors"
	"fmt"
	"math/rand"
	"time"
)

// Hello returns a greeting for the named person.
//watch out boy, this is what they call an "exported name" --> a function whose name starts with a capital letter can be called by another function that doesn't has to be in the same package
//cool thing: any Go function can return multiple values --> that's awesome.
func Hello(name string) (string, error) {
	//if no name was given, return an error with a message.
	if name == "" {
		return "", errors.New("empty name")
	}
	// Return a greeting that embeds the name in a message.
	//:= is a shortcut for initializing and declaring a variable in one line
	/* it could've been done like this:
	var message string
	message = fmt.Sprint("Hi, %v.Welcome!", name)
	*/
	//message := fmt.Sprintf(randomFormat(), name)
	message := fmt.Sprintf(randomFormat())
	//this 'nil' means that there was no error
	return message, nil
}

//what we do here is returning a map that associates each of the named people
//with a greeting message
//slice of names	//returning a map
func Hellos(names []string) (map[string]string, error) {
	/*
		In Go a map is nitialized using the following syntax:
		make(map[key-type]value-type)
	*/
	messages := make(map[string]string)
	//hmm, don't understand pretty well thiss
	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}
		messages[name] = message
	}
	return messages, nil
}

//here we set initial values for the variables.
//but being honest, i'm not pretty sure how it does it
//ok, seems like this are famous functions within the Go environment, as they say in their docs, init functions are executed automatically at program startup.
//and it also seems that the rand package uses the time and date and that's why we are 'feeding it' with that info
func init() {
	rand.Seed(time.Now().Unix())
}

func randomFormat() string {
	//this is a slice of message formats
	//in the [] we can specify the size, as here we are not doing so, Go interprets it as a dynamic size.
	formats := []string{
		"Hi, %v. Welcome!",
		"Great to see you, %v!",
		"Hail, %v! Well met!",
	}
	//
	return formats[rand.Intn(len(formats))]
}

//cowboy: note that init() and randomFormat() are declared with lowercase letter, that means they are only acceisble to code in the same package. they are not exported.
