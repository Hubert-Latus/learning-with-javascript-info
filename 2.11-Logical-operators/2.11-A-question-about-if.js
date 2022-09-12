//Which of these alerts are going to execute?

//What will the results of the expressions be inside if(...)?

 //-1 || 0 = -1 truth
 //executes
if (-1 || 0) alert( 'first' );

//-1 && 0 = 0 false
//doesn't execute
if (-1 && 0) alert( 'second' );

// null || -1 && 1 = null || 1 = 1 truth
// executes
if (null || -1 && 1) alert( 'third' );