var votes = require ('./mdlVotes');


    var A = Array();
    var name  = ['A','B','C'];
    for(var i=0;i<name.length;i++){
        A.push(new votes(name[i]));
        A[i].addCount();
        A[i].addCount();
        A[0].addCount();
    }
    A[0].addCount();
    A[1].addCount();
    A[2].addCount();
    A[1].Data();
    A[2].Data();
    A[2].reset();
    A[1].reset();
    A[0].Data();
    A[1].Data();
    A[2].Data();
    app.listen(8080);
    app.get('/',(req, res)=>{
        res.send(Arr);
    });
