

for (let i = 202101; i < 202199; i++) {
    contract.methods.student(i).call().then((e) => {
        if (e.regno != 0 && e.regno != "") {
            if(!e.paid){
                console.log(e.name+","+e.paid)
                document.getElementById("tabBody").innerHTML += "<tr><td>"+e.name+"</td><td>"+e.regno+"</td><td>"+e.degree+"</td><td>"+e.sem+"</td><td><label class='badge badge-danger'>Pending</label></td></tr>"
            }
            else{
                console.log(e.name+","+e.paid)
                document.getElementById("tabBody").innerHTML += "<tr><td>"+e.name+"</td><td>"+e.regno+"</td><td>"+e.degree+"</td><td>"+e.sem+"</td><td><label class='badge badge-success'>Paid</label></td></tr>"
            }
        }
    })
}