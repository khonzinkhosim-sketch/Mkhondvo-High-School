window.onload = function(){
    alert("Welcome to Mkhondvo High School Archive Website");
};

function updateDateTime(){
    const now = new Date();
    document.getElementById("datetime").innerHTML =
        now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

function searchMemories(){

    let input =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let memories =
        document.querySelectorAll(".memory");

    memories.forEach(memory => {

        if(memory.textContent
            .toLowerCase()
            .includes(input)){

            memory.style.display = "block";

        }else{

            memory.style.display = "none";
        }
    });
}
