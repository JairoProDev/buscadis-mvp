// lib/categories.js

// Función helper para generar slugs si no existieran (aunque ya los tienes)
const slugify = (text) => {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
  
  // --- ESTRUCTURA DETALLADA DE CATEGORÍAS ---
  // Basada en tu lista, incluyendo las categorías adicionales.
  // **Considera si para el MVP inicial quieres habilitar TODAS o solo las 4 primeras.**
  // **Puedes comentar las secciones que quieras posponer.**
  
  export const categories = [
    // =============================================
    // 1. EMPLEOS
    // =============================================
    {
      name: "Empleos",
      slug: "empleos",
      subcategories: [
        {
          name: "Tecnología e Informática",
          slug: "tecnologia-informatica",
          subSubcategories: [
            { name: "Desarrollo de Software", slug: "desarrollo-software" },
            { name: "Ciberseguridad", slug: "ciberseguridad" },
            { name: "Análisis de Datos", slug: "analisis-datos" },
            { name: "Inteligencia Artificial y Machine Learning", slug: "inteligencia-artificial" },
            { name: "Soporte Técnico", slug: "soporte-tecnico" },
            { name: "Gestión de Proyectos de TI", slug: "gestion-proyectos-ti" },
            { name: "Redes y Sistemas", slug: "redes-sistemas" },
          ],
        },
        {
          name: "Salud y Medicina",
          slug: "salud-medicina",
          subSubcategories: [
            { name: "Medicina General", slug: "medicina-general" },
            { name: "Especialidades Médicas", slug: "especialidades-medicas" },
            { name: "Enfermería", slug: "enfermeria" },
            { name: "Farmacia", slug: "farmacia" },
            { name: "Odontología", slug: "odontologia" },
            { name: "Psicología", slug: "psicologia" },
            { name: "Terapia", slug: "terapia" },
          ],
        },
        {
          name: "Educación y Formación",
          slug: "educacion-formacion",
          subSubcategories: [
            { name: "Educación Primaria/Secundaria", slug: "educacion-primaria-secundaria" },
            { name: "Educación Superior", slug: "educacion-superior" },
            { name: "Formación Profesional", slug: "formacion-profesional" },
            { name: "Idiomas", slug: "idiomas" },
            { name: "Educación en línea", slug: "educacion-en-linea" },
          ],
        },
        {
          name: "Construcción e Ingeniería",
          slug: "construccion-ingenieria",
          subSubcategories: [
            { name: "Ingeniería Civil", slug: "ingenieria-civil" },
            { name: "Arquitectura", slug: "arquitectura" },
            { name: "Ingeniería Mecánica", slug: "ingenieria-mecanica" },
            { name: "Ingeniería Eléctrica", slug: "ingenieria-electrica" },
            { name: "Diseño de interiores", slug: "diseno-interiores" }, // Nota: Este ID está duplicado en Arte/Diseño
          ],
        },
        {
          name: "Ventas y Marketing",
          slug: "ventas-marketing",
          subSubcategories: [
            { name: "Ventas Directas", slug: "ventas-directas" },
            { name: "Marketing Digital", slug: "marketing-digital" },
            { name: "Marketing de Contenidos", slug: "marketing-contenidos" },
            { name: "Marketing de Producto", slug: "marketing-producto" },
            { name: "Telemarketing", slug: "telemarketing" },
            { name: "Ventas B2B", slug: "ventas-b2b" },
            { name: "Ventas B2C", slug: "ventas-b2c" },
          ],
        },
        {
          name: "Finanzas y Contabilidad",
          slug: "finanzas-contabilidad",
          subSubcategories: [
            { name: "Contabilidad General", slug: "contabilidad-general" },
            { name: "Auditoría", slug: "auditoria" },
            { name: "Finanzas Corporativas", slug: "finanzas-corporativas" },
            { name: "Análisis Financiero", slug: "analisis-financiero" },
            { name: "Impuestos", slug: "impuestos" },
          ],
        },
        {
          name: "Transporte y Logística",
          slug: "transporte-logistica",
          subSubcategories: [
            { name: "Transporte de Carga", slug: "transporte-carga" },
            { name: "Logística de Almacenamiento", slug: "logistica-almacenamiento" },
            { name: "Distribución", slug: "distribucion" },
            { name: "Transporte de Pasajeros", slug: "transporte-pasajeros" },
            { name: "Cadena de Suministro", slug: "cadena-suministro" },
          ],
        },
        {
          name: "Hostelería, Turismo y Gastronomía",
          slug: "hosteleria-turismo-gastronomia",
          subSubcategories: [
            { name: "Hotelería", slug: "hoteleria" },
            { name: "Restaurantes", slug: "restaurantes" },
            { name: "Turismo", slug: "turismo" },
            { name: "Organización de Eventos", slug: "organizacion-eventos" },
            { name: "Ecoturismo", slug: "ecoturismo" },
          ],
        },
         {
          name: "Arte, Diseño y Multimedia",
          slug: "arte-diseno-multimedia",
          subSubcategories: [
             { name: "Diseño Gráfico", slug: "diseno-grafico" },
             { name: "Diseño Web", slug: "diseno-web" },
             { name: "Diseño de Interiores", slug: "diseno-interiores" }, // Nota: Duplicado con Construcción
             { name: "Fotografía", slug: "fotografia" },
             { name: "Producción Audiovisual", slug: "produccion-audiovisual" },
             { name: "Diseño de Moda", slug: "diseno-moda" },
          ],
         },
         {
           name: "Agricultura y Ganadería",
           slug: "agricultura-ganaderia",
           subSubcategories: [
             { name: "Cultivo", slug: "cultivo" },
             { name: "Ganadería", slug: "ganaderia" },
             { name: "Agroindustria", slug: "agroindustria" },
             { name: "Pesca", slug: "pesca" },
             { name: "Silvicultura", slug: "silvicultura" },
           ],
         },
         {
           name: "Servicios Domésticos y Personales",
           slug: "servicios-domesticos-personales",
           subSubcategories: [
             { name: "Cuidado de Niños", slug: "cuidado-ninos" },
             { name: "Cuidado de Adultos Mayores", slug: "cuidado-adultos-mayores" },
             { name: "Limpieza del Hogar", slug: "limpieza-hogar" },
             { name: "Jardinería", slug: "jardineria" },
             { name: "Cocina", slug: "cocina" },
             { name: "Asistencia Personal", slug: "asistencia-personal" },
          ],
         },
        // ... (Otras subcategorías de Empleos si las hubiera)
      ],
    },
    // =============================================
    // 2. INMUEBLES
    // =============================================
     {
       name: "Inmuebles",
       slug: "inmuebles",
       subcategories: [
         // Nota: La lista original no agrupa por Venta/Alquiler, sino por tipo.
         // Podríamos reestructurar o mantenerla así por ahora.
         // Asumiendo que la subcategoría es el TIPO de inmueble.
         {
           name: "Habitaciones",
           slug: "habitaciones",
           subSubcategories: [
              { name: "Individual", slug: "habitacion-individual" },
              { name: "Compartida", slug: "habitacion-compartida" },
              { name: "Amoblada", slug: "habitacion-amoblada" },
              { name: "Sin amoblar", slug: "habitacion-sin-amoblar" },
           ],
         },
         {
           name: "Apartamentos", // O Departamentos
           slug: "apartamentos",
           subSubcategories: [
             { name: "Estudio", slug: "apartamento-estudio" },
             { name: "De 1 dormitorio", slug: "apartamento-1-dormitorio" },
             { name: "De 2 dormitorios", slug: "apartamento-2-dormitorios" },
             { name: "De 3+ dormitorios", slug: "apartamento-3-mas-dormitorios" },
             { name: "Dúplex", slug: "apartamento-duplex" },
           ],
         },
         {
           name: "Casas",
           slug: "casas",
           subSubcategories: [
              { name: "De 1 piso", slug: "casa-1-piso" },
              { name: "De 2 pisos", slug: "casa-2-pisos" },
              { name: "De 3+ pisos", slug: "casa-3-mas-pisos" },
              { name: "Con jardín", slug: "casa-con-jardin" },
              { name: "Con piscina", slug: "casa-con-piscina" },
           ],
         },
         {
           name: "Terrenos",
           slug: "terrenos",
           subSubcategories: [
              { name: "Residencial", slug: "terreno-residencial" },
              { name: "Comercial", slug: "terreno-comercial" },
              { name: "Agrícola", slug: "terreno-agricola" },
              { name: "Industrial", slug: "terreno-industrial" },
              { name: "Urbanizable", slug: "terreno-urbanizable" },
           ],
         },
         {
           name: "Locales Comerciales", // Combinando 'Locales' y parte de 'Oficinas'
           slug: "locales-comerciales", // Slug ajustado para claridad
           subSubcategories: [
              { name: "Oficina", slug: "local-oficina" },
              { name: "Tienda", slug: "local-tienda" },
              { name: "Restaurante", slug: "local-restaurante" },
              { name: "Almacén", slug: "local-almacen" },
              { name: "Consultorio", slug: "local-consultorio" },
           ],
         },
         {
           name: "Oficinas",
           slug: "oficinas",
           subSubcategories: [
              { name: "Coworking", slug: "oficina-coworking" },
              { name: "Privada", slug: "oficina-privada" },
              { name: "Amoblada", slug: "oficina-amoblada" },
              { name: "Edificio de Oficinas", slug: "oficina-edificio-oficinas" },
           ],
         },
         {
           name: "Edificios",
           slug: "edificios",
           subSubcategories: [
             { name: "Residencial", slug: "edificio-residencial" },
             { name: "Comercial", slug: "edificio-comercial" },
             { name: "Mixto", slug: "edificio-mixto" },
             { name: "Corporativo", slug: "edificio-corporativo" },
           ],
         },
         {
           name: "Almacenes",
           slug: "almacenes",
           subSubcategories: [
             { name: "Pequeño", slug: "almacen-pequeno" },
             { name: "Mediano", slug: "almacen-mediano" },
             { name: "Grande", slug: "almacen-grande" },
             { name: "Industrial", slug: "almacen-industrial" },
           ],
         },
         // Podríamos añadir aquí subcategorías como Venta, Alquiler, Anticrético, Traspaso
         // y mover los tipos (apartamentos, casas, etc) a sub-subcategorías si prefieres esa estructura.
         // Por ahora, sigo tu estructura original de tipos como subcategorías.
       ],
     },
    // =============================================
    // 3. VEHÍCULOS
    // =============================================
    {
      name: "Vehículos",
      slug: "vehiculos",
      subcategories: [
        {
          name: "Motocicletas",
          slug: "motocicletas",
          subSubcategories: [
            { name: "Lineal", slug: "motocicleta-lineal" },
            { name: "Deportiva", slug: "motocicleta-deportiva" },
            { name: "Scooter", slug: "motocicleta-scooter" },
            { name: "Todoterreno", slug: "motocicleta-todoterreno" },
            { name: "Eléctrica", slug: "motocicleta-electrica" },
          ],
        },
        {
          name: "Automóviles",
          slug: "automoviles",
          subSubcategories: [
            { name: "Sedán", slug: "automovil-sedan" },
            { name: "Hatchback", slug: "automovil-hatchback" },
            { name: "SUV", slug: "automovil-suv" },
            { name: "Cupé", slug: "automovil-cupe" },
            { name: "Convertible", slug: "automovil-convertible" },
            { name: "Eléctrico", slug: "automovil-electrico" },
            { name: "Híbrido", slug: "automovil-hibrido" },
          ],
        },
        {
          name: "Camionetas",
          slug: "camionetas",
          subSubcategories: [
            { name: "Pick-up", slug: "camioneta-pick-up" },
            { name: "SUV", slug: "camioneta-suv" }, // Nota: SUV también está en Automóviles
          ],
        },
        {
          name: "Camiones",
          slug: "camiones",
          subSubcategories: [
            { name: "De carga", slug: "camion-de-carga" },
            { name: "Volquete", slug: "camion-volquete" },
            { name: "Cisterna", slug: "camion-cisterna" },
          ],
        },
        {
          name: "Buses",
          slug: "buses",
          subSubcategories: [
             { name: "Urbano", slug: "bus-urbano" },
             { name: "Interprovincial", slug: "bus-interprovincial" },
             { name: "Escolar", slug: "bus-escolar" },
          ],
        },
        {
          name: "Maquinaria Pesada",
          slug: "maquinaria-pesada",
          subSubcategories: [
             { name: "Excavadora", slug: "maquinaria-excavadora" },
             { name: "Retroexcavadora", slug: "maquinaria-retroexcavadora" },
             { name: "Grúa", slug: "maquinaria-grua" },
             { name: "Tractor", slug: "maquinaria-tractor" },
          ],
        },
        {
          name: "Vehículos Personales", // Bicicletas, Scooters, etc.
          slug: "vehiculos-personales",
          subSubcategories: [
            { name: "Bicicleta", slug: "vehiculo-bicicleta" },
            { name: "Scooter Eléctrico", slug: "vehiculo-scooter-electrico" },
            { name: "Patineta Eléctrica", slug: "vehiculo-patineta-electrica" },
          ],
        },
         {
          name: "Vehículos Especiales",
          slug: "vehiculos-especiales",
          subSubcategories: [
            { name: "Ambulancia", slug: "vehiculo-ambulancia" },
            { name: "Bomberos", slug: "vehiculo-bomberos" },
            { name: "Policía", slug: "vehiculo-policia" },
            { name: "Limpieza", slug: "vehiculo-limpieza" },
          ],
        },
      ],
    },
    // =============================================
    // 4. SERVICIOS
    // =============================================
    {
      name: "Servicios",
      slug: "servicios",
      subcategories: [
        {
          name: "Servicios Profesionales",
          slug: "profesionales", // Slug corto y directo
          subSubcategories: [
            { name: "Abogacía", slug: "servicio-abogacia" },
            { name: "Contabilidad", slug: "servicio-contabilidad" },
            { name: "Consultoría", slug: "servicio-consultoria" },
            { name: "Diseño Gráfico", slug: "servicio-diseno-grafico" },
            { name: "Marketing Digital", slug: "servicio-marketing-digital" },
            { name: "Arquitectura", slug: "servicio-arquitectura" },
            { name: "Ingeniería", slug: "servicio-ingenieria" },
          ],
        },
        {
          name: "Servicios Personales",
          slug: "personales", // Slug corto
          subSubcategories: [
             { name: "Belleza", slug: "servicio-belleza" }, // Peluquería, Spa, etc.
             { name: "Salud", slug: "servicio-salud" }, // Terapias alternativas, nutricionistas, etc.
             { name: "Eventos", slug: "servicio-eventos" }, // Catering, decoración, música
             { name: "Cuidado de Mascotas", slug: "servicio-cuidado-mascotas" }, // Paseadores, peluquería canina
             { name: "Fotografía", slug: "servicio-fotografia" },
          ],
        },
        {
          name: "Servicios para el Hogar",
          slug: "servicios-hogar",
          subSubcategories: [
             { name: "Reparación", slug: "servicio-reparacion" }, // Gasfitería, electricidad, electrodomésticos
             { name: "Mantenimiento", slug: "servicio-mantenimiento" }, // Limpieza, jardinería
             { name: "Instalación", slug: "servicio-instalacion" }, // Aire acondicionado, antenas
             { name: "Mudanza", slug: "servicio-mudanza" },
             { name: "Fumigación", slug: "servicio-fumigacion" },
          ],
        },
         // Podríamos añadir más como 'Servicios Educativos' (clases particulares), etc.
      ],
    },
  
    // ========= CATEGORÍAS ADICIONALES (Considera si incluirlas en el MVP inicial) ======
  
    // =============================================
    // 5. PRODUCTOS
    // =============================================
    // {
    //   name: "Productos",
    //   slug: "productos",
    //   subcategories: [
    //     { name: "Tecnología", slug: "tecnologia", subSubcategories: [/*...*/] },
    //     { name: "Hogar y Jardín", slug: "hogar-jardin", subSubcategories: [/*...*/] },
    //     { name: "Moda y Belleza", slug: "moda-belleza", subSubcategories: [/*...*/] },
    //     { name: "Deportes y Ocio", slug: "deportes-ocio", subSubcategories: [/*...*/] },
    //     { name: "Supermercado", slug: "supermercado", subSubcategories: [/*...*/] },
    //     { name: "Libros, Películas y Música", slug: "libros-peliculas-musica", subSubcategories: [/*...*/] },
    //     { name: "Salud y Cuidado Personal", slug: "salud-cuidado-personal", subSubcategories: [/*...*/] },
    //     { name: "Oficina y Papelería", slug: "oficina-papeleria", subSubcategories: [/*...*/] },
    //     // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
    // =============================================
    // 6. EVENTOS
    // =============================================
    // {
    //   name: "Eventos",
    //   slug: "eventos",
    //   subcategories: [
    //       { name: "Conciertos", slug: "conciertos", subSubcategories: [/*...*/] },
    //       { name: "Deportes", slug: "deportes", subSubcategories: [/*...*/] }, // Ojo, slug duplicado con Productos
    //       { name: "Teatro", slug: "teatro", subSubcategories: [/*...*/] },
    //       { name: "Conferencias", slug: "conferencias", subSubcategories: [/*...*/] },
    //       { name: "Festivales", slug: "festivales", subSubcategories: [/*...*/] },
    //       { name: "Cursos y Talleres", slug: "cursos-talleres", subSubcategories: [/*...*/] },
    //       // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
    // =============================================
    // 7. EDUCACIÓN
    // =============================================
    // {
    //   name: "Educación",
    //   slug: "educacion",
    //   subcategories: [
    //       { name: "Cursos", slug: "cursos", subSubcategories: [/*...*/] },
    //       { name: "Carreras", slug: "carreras", subSubcategories: [/*...*/] },
    //       { name: "Postgrados", slug: "postgrados", subSubcategories: [/*...*/] },
    //       { name: "Idiomas", slug: "idiomas", subSubcategories: [/*...*/] }, // Ojo, slug duplicado con Empleos
    //       // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
    // =============================================
    // 8. TURISMO
    // =============================================
    // {
    //   name: "Turismo",
    //   slug: "turismo",
    //   subcategories: [
    //       { name: "Paquetes Turísticos", slug: "paquetes-turisticos", subSubcategories: [/*...*/] },
    //       { name: "Vuelos", slug: "vuelos", subSubcategories: [/*...*/] },
    //       { name: "Hoteles", slug: "hoteles", subSubcategories: [/*...*/] },
    //       { name: "Alquiler de Autos", slug: "alquiler-autos", subSubcategories: [/*...*/] },
    //       { name: "Actividades", slug: "actividades", subSubcategories: [/*...*/] },
    //       // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
    // =============================================
    // 9. MASCOTAS
    // =============================================
    // {
    //   name: "Mascotas",
    //   slug: "mascotas",
    //   subcategories: [
    //       { name: "Perros", slug: "perros", subSubcategories: [/*...*/] },
    //       { name: "Gatos", slug: "gatos", subSubcategories: [/*...*/] },
    //       { name: "Otros Animales", slug: "otros-animales", subSubcategories: [/*...*/] },
    //       // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
    // =============================================
    // 10. NEGOCIOS
    // =============================================
    // {
    //   name: "Negocios",
    //   slug: "negocios",
    //   subcategories: [
    //       { name: "Venta de Negocios", slug: "venta-negocios", subSubcategories: [/*...*/] },
    //       { name: "Traspasos", slug: "traspasos", subSubcategories: [/*...*/] },
    //       { name: "Alquiler de Negocios", slug: "alquiler-negocios", subSubcategories: [/*...*/] },
    //       { name: "Socios", slug: "socios", subSubcategories: [/*...*/] },
    //       { name: "Franquicias", slug: "franquicias", subSubcategories: [/*...*/] },
    //       { name: "Maquinarias y Equipos", slug: "maquinarias-equipos", subSubcategories: [/*...*/] },
    //       { name: "Insumos", slug: "insumos", subSubcategories: [/*...*/] },
    //       { name: "Servicios para Negocios", slug: "servicios-negocios", subSubcategories: [/*...*/] },
    //       // ... Llena los subSubcategories basados en tu lista original ...
    //   ],
    // },
  
  ]; // Fin de categories
  
  // --- FUNCIONES HELPER ---
  
  export function getAllCategories() {
    return categories;
  }
  
  export function getCategoryBySlug(slug) {
    return categories.find(cat => cat.slug === slug);
  }
  
  export function getSubcategoryBySlug(categorySlug, subcategorySlug) {
    const category = getCategoryBySlug(categorySlug);
    return category?.subcategories.find(sub => sub.slug === subcategorySlug);
  }
  
  export function getSubSubcategoryBySlug(categorySlug, subcategorySlug, subSubcategorySlug) {
      const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
      return subcategory?.subSubcategories.find(subSub => subSub.slug === subSubcategorySlug);
  }
  
  // Puedes añadir más funciones si necesitas (ej. obtener todas las subcategorías, etc.)