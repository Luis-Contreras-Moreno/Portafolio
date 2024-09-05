 var boton1 = document.getElementById('logos-experienciasone'),
     boton2 = document.getElementById('logos-experienciastwo'),
     boton3 = document.getElementById('logos-experienciasthree'),
     boton4 = document.getElementById('logos-experienciasfour'),
     texto1 = document.getElementById('texto-experienciaone'),
     texto2 = document.getElementById('texto-experienciatwo'),
     texto3 = document.getElementById('texto-experienciathree'),
     texto4 = document.getElementById('texto-experienciafour'),
     linea = document.getElementById('linea'),
     logos = document.getElementById('exp'),
     back = document.getElementById('back');


     function cambiosone() 
        {
                 logos.classList.add('exp1');
                 linea.classList.add('remover');
                 texto1.classList.add('clase-cambio')
                 back.classList.add('appear');
        }

    boton1.addEventListener('click', cambiosone, true)

    function cambiostwo() 
        {
                 logos.classList.add('exp1');
                 linea.classList.add('remover');
                 texto2.classList.add('clase-cambio')
                 back.classList.add('appear');
        }

    boton2.addEventListener('click', cambiostwo, true)

    function cambiosthree() 
        {
                 logos.classList.add('exp1');
                 linea.classList.add('remover');
                 texto3.classList.add('clase-cambio')
                 back.classList.add('appear');
        }

    boton3.addEventListener('click', cambiosthree, true)

    function cambiosfour() 
        {
                 logos.classList.add('exp1');
                 linea.classList.add('remover');
                 texto4.classList.add('clase-cambio')
                 back.classList.add('appear');
        }

    boton4.addEventListener('click', cambiosfour, true)


    function regresar ()

    {
        logos.classList.remove('exp1');
        linea.classList.remove('remover');
        texto1.classList.remove('clase-cambio');
        texto2.classList.remove('clase-cambio');
        texto3.classList.remove('clase-cambio');
        texto4.classList.remove('clase-cambio');
        back.classList.remove('appear');

    }

    back.addEventListener('click', regresar, true)


    


