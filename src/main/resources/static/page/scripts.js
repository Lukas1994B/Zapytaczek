// // Sprawdzamy, czy jesteśmy zalogowani
// $.ajax({
//     method: "post",
//     url: "http://localhost:8080/login",
//     success: function () {
//         $("#form-login").hide();
//     },
//     error: function () {
//         $("#button-registry").hide();
//     }
// });
//logowanie
$("#registry-now").click(function () {
    const username = $("#name").val();
    const telephoneNumber = $("#phone").val();
    const email = $("#email").val();
    const password = $("#pass").val();
    const user =
        {
            username: username,
            password: password,
            email: email,
            telephoneNumber: telephoneNumber,
            // role: "USER"
        };
    $.ajax({
        url: "http://localhost:8080/page/users",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (user) {
            alert("Added");


        }
    })
});

//logowanie
$("#form-login").click(function () {
    const username = $("#username").val();
    const password = $("#password").val();
    $.ajax({
        method: "post",
        url: "http://localhost:8080/login",
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        success: function () {
            alert("Zalogowany!");
            location.href = "http://localhost:8080/page/mainSite.html"
        },
        error: function () {
            alert("Niepoprawne dane!");


        }
    });
});

//
// $("#button-registry").click(function () {
//     $.ajax({
//         method: "post",
//         url: "http://localhost:8080/login",
//         success: function () {
//             alert("Registry");
//             location.href = "http://localhost:8080/page/RegistryNewUser.html"
//         },
//     });
// });


//wylogowanie ze strony
$("#logout").click(function () {
    $.ajax({
        method: "get",
        url: "http://localhost:8080/logout",
        success: function () {
            alert("Wylogowano!");
            location.href = "http://localhost:8080/page/index.html"
        }
    });
});

$("#back-from-contact").click(function () {
    $.ajax({
        method: "get",
        url: "http://localhost:8080/page/contact.html",
        success: function () {
            location.href = "http://localhost:8080/page/mainSite.html"
        }
    });
});

$('.modalShow').click(function(event){
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var body = e.data('value');
    $("#myModal").modal("show");
    $('#modal-title').html(title);
    $('#modal-body').html(body);
});




