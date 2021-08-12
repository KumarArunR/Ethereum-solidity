// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Fee{
    
    struct Admin{
        address id;
        string name;
        string password;
    }
    Admin public admin;
    
    constructor(string memory name,string memory pwd){
        admin.id=msg.sender;
        admin.name=name;
        admin.password=pwd;
    }
    
    struct Student{
        address id;
        string name;
        uint regno;
        string degree;
        uint sem;
        bool paid;
        string passcode;
    }
    mapping(uint=>Student) public student;
    
    function studentLogin(uint regno, string memory password)public view returns(bool){
        if(student[regno].regno == regno){
            if(keccak256(bytes(student[regno].passcode))==keccak256(bytes(password))){
                return(true);
            }
            else{
                return(false);
            }
        }
        else{return(false);}
    }
    
    function enrollStudent(address id, string memory name,uint regno,string memory degree,uint sem, string memory passcode) public{
        require(student[regno].regno != regno,"Already enrolled this student");
        student[regno].id=id;
        student[regno].regno=regno;
        student[regno].name=name;
        student[regno].degree=degree;
        student[regno].sem=sem;
        student[regno].passcode=passcode;
    }
    
    function payFee(uint regno, address id, string memory passcode)public view returns(bool,string memory){
        if(student[regno].id==id){
            if(keccak256(bytes(student[regno].passcode))==keccak256(bytes(passcode))){
                return(true,"Paid successfully");
            }
            else{
                return(false,"Password incorrect");
            }
        }
        else{
            return(false,"Invalid id");
        }
        
    }
    function paidFee(uint regno)public {
        student[regno].paid=true;
    }
    
    function adminLogin(string memory name, string memory password)public view returns(bool){
        if(keccak256(bytes(admin.name))==keccak256(bytes(name))){
            if(keccak256(bytes(admin.password))==keccak256(bytes(password))){
                return(true);
            }
            else{
                return(false);
            }
        }
        else{return(false);}
    }
    
    
}