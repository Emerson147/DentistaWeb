/*============================================*/
/*==== FUNCIONES PARA EL MENU PRINCIPAL ======*/
/*============================================*/

/* Insertar y quita la clase ".icono-cerrar" al boton del menu */
$('#menu-navegacion .navbar-toggler').click(function() {
   $('.boton-menu').toggleClass('icono-cerrar');
});

/* Al hacer click en un enlace del menu principal */
$('#menu-navegacion .navbar-nav a').click(function() {
   
   /* 1) Quita la clase "icono-cerrar" */
   $('.boton-menu').removeClass('icono-cerrar');

   /* 2) Contreamos al menu */
   $('#menu-navegacion .navbar-collapse').collapse('hide');
});

/*============================================*/
/*==== INICIANDO SWIPER ======*/
/*============================================*/

var swiper = new Swiper('#animacion', {

   /*Botones de navegacion*/
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true
   },

   speed: 800,
   effect: 'fade',
   grabCursor: false,
   loop: true,
   autoplay: {
      delay: 4000,
   },

   keyboard: {
      enabled: true,
      onlyInviewport: true,
   }

});

/*============================================*/
/*==== INICIANDO SCRIPT VENOBOX ======*/
/*============================================*/
$('.venobox-video').venobox({
   autoplay: true,
   bgcolor: 'rgba(50, 220, 181, 0.57)',
   border: '5px',
   closecolor: '#fff',
   overlayColor: 'rgba(50, 220, 181, 0.57)',
   spinner: 'wandering-cubes'
});

/*============================================*/
/*==== INICIANDO SCRIPT COUNTERUP ======*/
/*============================================*/
$('.counter').counterUp();


/*============================================*/
/*==== INICIANDO SCRIPT DATEPICKER ======*/
/*============================================*/
      
$('.datepicker').pickadate({
   monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
   monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep','oct', 'nov', 'dic' ],
   weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes', 'Sábado' ],
   weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
   today: 'Hoy',
   clear: 'Limpiar',
   close: 'Cerrar',
   // Accessibility labels
   labelMonthNext: 'Siguiente mes',
   labelMonthPrev: 'Mes anterior',
   labelMonthSelect: 'Seleccione un mes',
   labelYearSelect: 'Selecione un año',
   firstDay: 1,
   format: 'dddd, dd !de mmmm !de yyyy',
   formatSubmit: 'dd/mm/yyyy',
   // Dropdown selectors
   selectYears: true,
   selectMonths:true,
   // Date limits
   min: true,
   max: 30,
   onStart: function()
      {
         var date = new Date();
         this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]
           );
         }
      
   });
   
/*============================================*/
/*==== INICIANDO SCRIPT DATEPICKER ======*/
/*============================================*/
$('.timepicker').pickatime({
   clear: 'Borrar',
   format: 'hh:i A',
   interval: 60,
   min: [8, 00],
   max: [18, 00] 
});

   
/*============================================*/
/*==== INICIAANDO SCRIPT DE PARSLEY.JS - VALIDAR FORMULARIO ======*/
/*============================================*/
$('#mi-formulario').parsley({
   errorClass: 'is-invalid text-danger',
   successClass: 'is-valid',
   errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
   errorTemplate: '<li></li>',
   trigger: 'change',
   triggerAfterFailure: 'change'
});

/*============================================*/
/*==== INICIANDO SCRIPT DE STICKIT.JS  ======*/
/*============================================*/
$('#menu-navegacion').stickit({
   className: 'menu-fijo'
});

/*============================================*/
/*==== INICIANDO SCRIPT DE SCROLL  ======*/
/*============================================*/
$('#menu-principal a').mPageScroll2id({
   offset: 50,
   highlightClass: 'active'
});