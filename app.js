let arrName = [] , element;

function deletion(id){
    arrName.splice(id , 1);
    set(arrName.length);
}

     function set(indexs){
        element = "";
        for(let i = 0 ; i < indexs ; i++){
                              element += `
                                      <li class="list-none p-2 bg-white text-xl rounded-lg text-blue-400 m-2 flex items-center justify-between">
                                            <span class="text-black ml-7">${ arrName[i] }</span>
                                            <span class="text-red-500 cursor-pointer select-none delete" onclick="deletion(${ i })" data-id="${ i }">delete</span>
                                      </li>
                              `;
                            
                             
                         }
                         $(".container").html(element);
                         $("input").val("");
                        
     }


            $("button").click(function(){
                element = "";
                let new_name = $("input").val();
                if(new_name == ""){
                    alert("please inter the name");
                }else{
                    arrName.push(new_name);
                      set(arrName.length);

                }
            })
               $(".delete").click("")