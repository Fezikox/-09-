
const sendForm = () =>{               
          
    const phone = document.querySelectorAll(".phone-user"); 
    const name = document.querySelectorAll("[name=user_name]");
    const input = document.getElementById("collapseFour").querySelector("input");
    
    phone.forEach((el) =>{
        el.addEventListener("input", ()=>{
            el.value = el.value.replace(/[^0-9\+]/g,"");
            
        })
    });
    input.addEventListener("input", () =>{
        input.value = input.value.replace(/[^0-9\+]/g,"");

    })

    name.forEach((el) =>{
        el.addEventListener("input", ()=>{
            el.value = el.value.replace(/[^А-Я\s]/i,"");
        })
        
       
    })
}

export default sendForm;