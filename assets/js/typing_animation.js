var invites = ['C++ says: cout<<"Welcome to Weekend of Code";', 'Java says: System.out.print("Welcome to Weekend of Code");', 'Python says: print("Welcome to Weekend of Code")', 'C says: printf("Welcome to Weekend of Code");', 'JavaScript says: console.log("Welcome to Weekend of Code");', 'Bash says: echo - n "Welcome to Weekend of Code"']
var ind=0;
var inv_size=invites.length;
function printit() {
    $("#replaceStrings").html(invites[ind]);
    ind=(ind+1)%inv_size;
    $('#replaceStrings').typeIt({
        // breakLines: false,
        speed: 100,
        // deleteDelay: 1200,
        autoStart: false,
        // loop: true,
        // loopDelay: 1500
    });
    setTimeout(printit, 8000);
}
$(document).ready(printit());