

$("#novoprod").submit(function(event){
    alert("Produto Salvo com sucesso");
})

$("#updateprod").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
        })
        var request = {
        "url": `http://localhost:3000/api/prods/${data.id}`,
        "method": "PUT",
        "data": data
        }

        $.ajax(request).done(function(response){
        alert("dados atualizados")
        })

})


    if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
        "url": `http://localhost:3000/api/prods/${id}`,
        "method": "DELETE",
        }
        if(confirm("Tem certeza que deseja deletar esse produto?")){
        $.ajax(request).done(function(response){
        alert("Dados deletados com sucesso")
        location.reload()
        })
        }
    })
}
