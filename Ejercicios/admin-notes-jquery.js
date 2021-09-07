$(() => {
    $('#send').click(() => {
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            body: JSON.stringify({
                title: $('#title').val(),
                content: $('#content').val()
            }),
            headers: {
                "Content-type": "application/json"
            }
        })//termina fetch
            .then(response => response.json())
            .then(json => console.log(json))
            .finally(() => {

                cargarNotas()
            })


        // console.log($('#title').val())
        // console.log($('#content').val())
    })

    function cargarNotas() {
        $.ajax({
            url: "http://localhost:3000/notes",
            contentType: "application/json",
            dataType: 'json',
            success: function (notas) {
                $('#tablaNotas').empty()



                for (const nota of notas) {
                    let newRow = `
                    <tr>
                        <td>${nota.title}</td>
                        <td>${nota.content}</td>
                        <td>
                            <button class="modificar" type="submit" value="${nota._id}">Modificar</button>
                            <button class="eliminar" type="submit" value="${nota._id}">Eliminar</button>
                        </td>
                    </tr>`
                    
                    $('#tablaNotas').append(newRow)
                    //agregar el listener aqui mero
                     addEvent()
                }

            },
            error: function (result) {
                console.log("la llamada no se pudo completar");
            },

        });
    }

  //  
    cargarNotas()

    function addEvent(){
        $('#eliminar').click()
    }      

})



