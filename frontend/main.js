window.addEventListener('DOMContentLoaded',(Event)=>{GetVisitCount();
    })



const fonctionApi='';

const GetVisitCount =() => {

    let count =30;
    fetch(fonctionApi).then(Response => {
        return Response.json();
    }).then(Response=>{console.log("website called Fucntion API")
    count = Response.count;
    document.getElementById("counter").innerText= count;
}).catch(function(error){
    console.log(error);});
    return count;
}
