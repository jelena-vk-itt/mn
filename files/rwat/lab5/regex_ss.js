// a
/<[a-z]+>/;

// b
/<\/[a-z]+>/;

// c
/<\/?[^>]+>/;

// d: all unicode characters are allowed
// but this simpler solution with a-z is sufficient
/[a-z_\$][a-z_\$0-9]*/;
