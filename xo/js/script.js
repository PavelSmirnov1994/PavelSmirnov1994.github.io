window.onload = function() {
    
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';

    }

    var step = 0;

    document.getElementById('game').onclick = function(event) {
        if (event.target.className == 'block') {
            if(step%2==0) {
                event.target.innerHTML = "x";
            } else {
                event.target.innerHTML = "0";
            }
            step++;
            checkWinner();
        }
        
    }
    function checkWinner() {
        var allBlock = document.getElementsByClassName('block');
        if (allBlock[0].innerHTML=='x' && allBlock[1].innerHTML=='x' && allBlock[2].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[3].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[5].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[6].innerHTML=='x' && allBlock[7].innerHTML=='x' && allBlock[8].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[0].innerHTML=='x' && allBlock[3].innerHTML=='x' && allBlock[6].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[1].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[7].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[2].innerHTML=='x' && allBlock[5].innerHTML=='x' && allBlock[8].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[0].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[8].innerHTML=='x') {
            alert ('x winners');
        }
        if (allBlock[2].innerHTML=='x' && allBlock[4].innerHTML=='x' && allBlock[6].innerHTML=='x') {
            alert ('x winners');
        }


        //нолики
        if (allBlock[0].innerHTML=='0' && allBlock[1].innerHTML=='0' && allBlock[2].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[3].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[5].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[6].innerHTML=='0' && allBlock[7].innerHTML=='0' && allBlock[8].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[0].innerHTML=='0' && allBlock[3].innerHTML=='0' && allBlock[6].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[1].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[7].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[2].innerHTML=='0' && allBlock[5].innerHTML=='0' && allBlock[8].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[0].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[8].innerHTML=='0') {
            alert ('0 winners');
        }
        if (allBlock[2].innerHTML=='0' && allBlock[4].innerHTML=='0' && allBlock[6].innerHTML=='0') {
            alert ('0 winners');
        }
    }
}

