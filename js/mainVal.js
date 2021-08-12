const contractaddress='0x684A30658a592D99b42c8538422d1030b9AC9f36'
const adminId="0x9DBb174Dfd95632D371D1836ec5E3B9941ba4A6C"

const web3=new Web3("http://127.0.0.1:7545")
const contract=new web3.eth.Contract(abi,contractaddress)

// Admin login
const adminLogin=async ()=>{
    let name=document.getElementById('adminName').value
    let pwd=document.getElementById('adminPassword').value
    let res;
    await contract.methods.adminLogin(name,pwd).call({from:adminId,gas:3000000}).then((e)=>{res=e})
    if(res==true){
        window.location="/StudDetails.html"
    }
    else{
        alert("Invalid username password")
    }
}

//student registration by Admin
const enrollStudent = async () => {
    let id = document.getElementById('id').value
    let name = document.getElementById('studName').value
    let reg = document.getElementById('regNo').value
    let deg = document.getElementById('degree').value
    let sem = document.getElementById('sem').value
    // let sem_opt=deg.options[sem.selectedIndex].value;
    let pass=reg+'2021'
    if (id == "" && name == "" && reg == "" && deg == "" && sem == "")
        alert("You must fill all the fields")
    else {
        await contract.methods.enrollStudent(id, name, reg, deg, sem, pass).send({from:adminId, gas: 3000000})
            .then(e => alert("RegNo " + reg + " Added successfully"))
            .catch(e => alert("Student already enrolled"))
    }
}

//Student Login
const studentLogin=async ()=>{
    let regno=document.getElementById('registerNo').value
    let pwd=document.getElementById('password').value
    let res;
    await contract.methods.studentLogin(regno,pwd).call({from:adminId,gas:3000000}).then((e)=>{res=e})
    if(res==true){
        localStorage.setItem('reg',regno)
        window.location="/gotoHome.htm"
    }
    else{
        alert("Invalid username password")
        console.log(res)
    }
}

const payFees=async ()=>{
    let reg=localStorage.getItem('reg')
    let id=document.getElementById("id").value
    let pass=document.getElementById('pass').value
    let res;
    await contract.methods.payFee(reg, id, pass).call({from:adminId,gas:3000000}).then((e)=>{res=e})
    await contract.methods.paidFee(reg).send({from:adminId,gas:3000000})    
    if(res[0]){
        window.location="/gotoHome.htm"
        // alert("Paid successfully")
    }
    else{
        alert("Invalid username password")
        console.log(res)
        console.log(res2)
    }

    // contract.methods.paidFee(reg).call({from:adminId,gas:3000000})
}
