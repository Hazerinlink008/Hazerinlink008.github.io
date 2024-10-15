
    // Función de login para administrador
    function loginAdmin(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        const adminEmail = document.getElementById('admin-email').value;
        const adminPassword = document.getElementById('admin-password').value;

        // Verificar si el email y la contraseña son correctos
        if (adminEmail === "admin@ejemplo.com" && adminPassword === "123") {
            window.location.href = 'admin_dashboard.html'; // Redirigir a la página del admin
        } else {
            alert("Credenciales de administrador incorrectas");
        }
    }

    // Función de login para usuario normal


    const users = [
       {
            email: "usuario@ejemplo.com",
            password: "123",
            role: "Usuario"
        },
        {
            email: "caseta@example.com",
            password: "123",
            role: "Área Caseta"
        },
        {
            email: "taller@example.com",
            password: "123",
            role: "Área Taller Mecánico"
        },
        {
            email: "diesel@example.com",
            password: "123",
            role: "Área Descarga de Diésel"
        },
        {
            email: "planeacion@example.com",
            password: "123",
            role: "Planeación"
        }
    ];

    function loginUser(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores ingresados por el usuario
        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;
        const errorElement = document.getElementById('login-error');

        // Buscar el usuario en la lista
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Si el usuario existe, redirigir según el rol
            alert("Bienvenido al área de: " + user.role);
            switch (user.role) {
                case "Usuario":
                    window.location.href = "user_dashboard.html";
                    break;
                case "Área Caseta":
                    window.location.href = "caseta_dashboard.html";
                    break;
                case "Área Taller Mecánico":
                    window.location.href = "taller_dashboard.html";
                    break;
                case "Área Descarga de Diésel":
                    window.location.href = "diesel_dashboard.html";
                    break;
                case "Planeación":
                    window.location.href = "planeacion_dashboard.html";
                    break;
            }
        } else {
            // Mostrar un mensaje de error si el login falla
            errorElement.textContent = "Correo o contraseña incorrectos";
        }
    }