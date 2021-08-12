const reg=localStorage.getItem('reg')

let a;
contract.methods.student(reg).call().then((e)=>{a=e;
    document.getElementById('name').innerHTML+=a.name
    document.getElementById('reg_no').innerHTML+=a.regno
    document.getElementById('deg').innerHTML+=a.degree
    document.getElementById('sem').innerHTML+=a.sem

    if(a.paid){
        console.log(a.name+","+a.paid)
        document.getElementById('paid').innerHTML+=' <input type="button" value="Paid" class="newbtn" ></input> '
    }else{
        console.log(a.name+","+a.paid)
        document.getElementById('paid').innerHTML+=' <input type="button" value="Pay fees" class="newbtn" id="payment"></input> '
    }

    $("#payment").click(function() {
        localStorage.setItem('reg',reg);
        window.location.href = "../payment.html";
    });

})
