const ipt1 = document.getElementById('fromName');
const ipt2 = document.getElementById('msg');
const ipt3 = document.getElementById('toName');
const btn = document.querySelector(".send");

async function sendEmail() {
    
    if( ipt1.value.length == 0 || ipt2.value.length == 0 ){
        window.alert("Fill in the fields");
        return;
    }    
    
    let tempParams = {
        from_name: ipt1.value,
        to_name: ipt3.value,
        message: ipt2.value,
    };

    const resp = await emailjs.send("service_9hzpjc2","template_j8bs9mn", tempParams).then(resp => resp);

    if( resp.status !== 200 ){
        window.alert("Message not sent");
        return;
    }

    ipt1.value = "";
    ipt2.value = "";

    ipt1.setAttribute("disabled", "disabled");
    ipt2.setAttribute("disabled", "disabled");
    btn.setAttribute("disabled", "disabled");

    window.alert("Message sent");
}
