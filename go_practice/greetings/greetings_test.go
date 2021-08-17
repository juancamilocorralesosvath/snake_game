package greetings

import (
	"regexp"
	"testing"
)

//testing.T is what we use for logging the info to our user (in this case...myself xD)
func TestHelloName(t *testing.T) {
	name := "Gladys"
	want := regexp.MustCompile(`\b` + name + `\b`)
	msg, err := Hello("Gladys")
	//if the call returns an error or a message that doesn't has the name I passed in.
	if !want.MatchString(msg) || err != nil {
		t.Fatalf(`Hello("Gladys") = %q, %v, want match for %#q, nil`, msg, err, want)
	}
}
func TestHelloEmpty(t *testing.T) {
	msg, err := Hello("")
	//what we wanna do here is to confirm that our error handling works out just how we want, so if the call returns a non-empty string (a message) or doesn't returns an error...something's happening.
	if msg != "" || err == nil {
		t.Fatalf(`Hello("") = %q, %v, want "", error`, msg, err)
	}
}
