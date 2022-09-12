let login = prompt ("Who's there?",'');

if (login ==='Admin') {
    let pass = prompt('Password?','');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === null || pass === '') {
        alert('Canceled');
    }else {
        alert('Wrong Password');
    }
} else if (login === '' || login === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}