document.getElementById('login-form').addEventListener('submit',async (event) =>{
    event.preventDefault(); 

    const login = {
        email : event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value
    };

   

   const reponse = await fetch('http://localhost:5678/api/users/login',{
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body:  JSON.stringify(login)
    })

    const response = await reponse;

    
    if(response.status == 200){
        const data = await response.json()
        console.log("mon token ???", data)
        localStorage.setItem('userId', data.userId);
        
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html';
        console.log(localStorage)
    }else{
        document.querySelector("#error-message").style.display = "flex";
    };

    





    
});
