

function deleteTicket(ticketId) {
    $.ajax({    
        url: '/ticket/' + ticketId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ticketId}),
        type: 'POST',
        success: ((res) => {
            console.log("Result: ", res)
            $("#" + ticketId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}