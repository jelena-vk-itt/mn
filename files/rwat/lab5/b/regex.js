// ===== 1 =====
// 1a
/<[a-z]+>/;
// 1b
/<\/[a-z]+>/;
// 1c
/<\/?[^>]+>/;
// 1d: all unicode characters are allowed
// but this simpler solution with a-z is sufficient
/[a-z_\$][a-z_\$0-9]*/;