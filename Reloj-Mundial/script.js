// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // =============================================
  // MAPA DE CAPITALES → ZONA IANA (Cobertura mundial)
  // =============================================
  const zonasHorarias = {
    "Abuya": "Africa/Lagos",
    "Acra": "Africa/Accra",
    "Adís Abeba": "Africa/Addis_Ababa",
    "Argel": "Africa/Algiers",
    "Bamako": "Africa/Bamako",
    "Bangui": "Africa/Bangui",
    "Banjul": "Africa/Banjul",
    "Bissau": "Africa/Bissau",
    "Brazzaville": "Africa/Brazzaville",
    "Buyumbura": "Africa/Bujumbura",
    "Cairo": "Africa/Cairo",
    "Conakry": "Africa/Conakry",
    "Dakar": "Africa/Dakar",
    "Dar es Salaam": "Africa/Dar_es_Salaam",
    "Dodoma": "Africa/Dar_es_Salaam",
    "El Cairo": "Africa/Cairo",
    "Freetown": "Africa/Freetown",
    "Gaborone": "Africa/Gaborone",
    "Harare": "Africa/Harare",
    "Jartum": "Africa/Khartoum",
    "Kampala": "Africa/Kampala",
    "Kigali": "Africa/Kigali",
    "Kinshasa": "Africa/Kinshasa",
    "Libreville": "Africa/Libreville",
    "Lilongüe": "Africa/Maputo",
    "Lomé": "Africa/Lome",
    "Luanda": "Africa/Luanda",
    "Lusaka": "Africa/Lusaka",
    "Malabo": "Africa/Malabo",
    "Maputo": "Africa/Maputo",
    "Maseru": "Africa/Maseru",
    "Mbabane": "Africa/Mbabane",
    "Mogadiscio": "Africa/Mogadishu",
    "Monrovia": "Africa/Monrovia",
    "Moroni": "Africa/Nairobi",
    "Nairobi": "Africa/Nairobi",
    "Niamey": "Africa/Niamey",
    "Nuakchot": "Africa/Nouakchott",
    "N’Djamena": "Africa/Ndjamena",
    "Ougadougou": "Africa/Ouagadougou",
    "Port Louis": "Indian/Mauritius",
    "Porto Novo": "Africa/Porto-Novo",
    "Praia": "Atlantic/Cape_Verde",
    "Pretoria": "Africa/Johannesburg",
    "Rabat": "Africa/Casablanca",
    "Santo Tomé": "Africa/Sao_Tome",
    "Trípoli": "Africa/Tripoli",
    "Túnez": "Africa/Tunis",
    "Windhoek": "Africa/Windhoek",
    "Yamoussoukro": "Africa/Abidjan",
    "Yaundé": "Africa/Yaounde",
    "Yibuti": "Africa/Djibouti",
    "Asunción": "America/Asuncion",
    "Belmopán": "America/Belize",
    "Bogotá": "America/Bogota",
    "Brasilia": "America/Sao_Paulo",
    "Bridgetown": "America/Barbados",
    "Buenos Aires": "America/Argentina/Buenos_Aires",
    "Caracas": "America/Caracas",
    "Castries": "America/St_Lucia",
    "Ciudad de Guatemala": "America/Guatemala",
    "Ciudad de México": "America/Mexico_City",
    "Ciudad de Panamá": "America/Panama",
    "Georgetown": "America/Guyana",
    "Kingston": "America/Jamaica",
    "La Habana": "America/Havana",
    "La Paz": "America/La_Paz",
    "Lima": "America/Lima",
    "Managua": "America/Managua",
    "Montevideo": "America/Montevideo",
    "Nassau": "America/Nassau",
    "Ottawa": "America/Toronto",
    "Paramaribo": "America/Paramaribo",
    "Puerto Príncipe": "America/Port-au-Prince",
    "Puerto España": "America/Port_of_Spain",
    "Quito": "America/Guayaquil",
    "Roseau": "America/Dominica",
    "San José": "America/Costa_Rica",
    "San Juan": "America/Puerto_Rico",
    "San Salvador": "America/El_Salvador",
    "Santiago": "America/Santiago",
    "Santo Domingo": "America/Santo_Domingo",
    "Sucre": "America/La_Paz",
    "Tegucigalpa": "America/Tegucigalpa",
    "Washington D.C.": "America/New_York",
    "Abu Dabi": "Asia/Dubai",
    "Amán": "Asia/Amman",
    "Ankara": "Europe/Istanbul",
    "Asjabad": "Asia/Ashgabat",
    "Astana": "Asia/Almaty",
    "Bagdad": "Asia/Baghdad",
    "Bakú": "Asia/Baku",
    "Bandar Seri Begawan": "Asia/Brunei",
    "Bangkok": "Asia/Bangkok",
    "Biskek": "Asia/Bishkek",
    "Colombo": "Asia/Colombo",
    "Daca": "Asia/Dhaka",
    "Damascus": "Asia/Damascus",
    "Dili": "Asia/Dili",
    "Doha": "Asia/Qatar",
    "Dubái": "Asia/Dubai",
    "Dusambé": "Asia/Dushanbe",
    "Hanói": "Asia/Ho_Chi_Minh",
    "Islamabad": "Asia/Karachi",
    "Jerusalén": "Asia/Jerusalem",
    "Kabul": "Asia/Kabul",
    "Katmandú": "Asia/Kathmandu",
    "Kuala Lumpur": "Asia/Kuala_Lumpur",
    "Kuwait": "Asia/Kuwait",
    "Malé": "Indian/Maldives",
    "Manama": "Asia/Bahrain",
    "Manila": "Asia/Manila",
    "Mascate": "Asia/Muscat",
    "Naipyidó": "Asia/Yangon",
    "Nueva Delhi": "Asia/Kolkata",
    "Pekín": "Asia/Shanghai",
    "Phnom Penh": "Asia/Phnom_Penh",
    "Pionyang": "Asia/Pyongyang",
    "Riad": "Asia/Riyadh",
    "Saná": "Asia/Aden",
    "Seúl": "Asia/Seoul",
    "Singapur": "Asia/Singapore",
    "Taskent": "Asia/Tashkent",
    "Tiflis": "Asia/Tbilisi",
    "Teherán": "Asia/Tehran",
    "Thimphu": "Asia/Thimphu",
    "Tokio": "Asia/Tokyo",
    "Ulán Bator": "Asia/Ulaanbaatar",
    "Vientián": "Asia/Vientiane",
    "Yakarta": "Asia/Jakarta",
    "Ereván": "Asia/Yerevan",
    "Ámsterdam": "Europe/Amsterdam",
    "Andorra la Vieja": "Europe/Andorra",
    "Atenas": "Europe/Athens",
    "Belgrado": "Europe/Belgrade",
    "Berlín": "Europe/Berlin",
    "Berna": "Europe/Zurich",
    "Bratislava": "Europe/Bratislava",
    "Bruselas": "Europe/Brussels",
    "Bucarest": "Europe/Bucharest",
    "Budapest": "Europe/Budapest",
    "Chisináu": "Europe/Chisinau",
    "Copenhague": "Europe/Copenhagen",
    "Dublín": "Europe/Dublin",
    "Estocolmo": "Europe/Stockholm",
    "Helsinki": "Europe/Helsinki",
    "Kiev": "Europe/Kyiv",
    "La Valeta": "Europe/Malta",
    "Lisboa": "Europe/Lisbon",
    "Liubliana": "Europe/Ljubljana",
    "Londres": "Europe/London",
    "Luxemburgo": "Europe/Luxembourg",
    "Madrid": "Europe/Madrid",
    "Minsk": "Europe/Minsk",
    "Mónaco": "Europe/Monaco",
    "Moscú": "Europe/Moscow",
    "Nicosia": "Asia/Nicosia",
    "Oslo": "Europe/Oslo",
    "París": "Europe/Paris",
    "Praga": "Europe/Prague",
    "Reikiavik": "Atlantic/Reykjavik",
    "Riga": "Europe/Riga",
    "Roma": "Europe/Rome",
    "San Marino": "Europe/San_Marino",
    "Sarajevo": "Europe/Sarajevo",
    "Skopie": "Europe/Skopje",
    "Sofía": "Europe/Sofia",
    "Tallin": "Europe/Tallinn",
    "Tirana": "Europe/Tirane",
    "Vaduz": "Europe/Vaduz",
    "Varsovia": "Europe/Warsaw",
    "Viena": "Europe/Vienna",
    "Vilna": "Europe/Vilnius",
    "Zagreb": "Europe/Zagreb",
    "Apia": "Pacific/Apia",
    "Camberra": "Australia/Sydney",
    "Funafuti": "Pacific/Funafuti",
    "Honiara": "Pacific/Guadalcanal",
    "Majuro": "Pacific/Majuro",
    "Melekeok": "Pacific/Palau",
    "Ngerulmud": "Pacific/Palau",
    "Nukualofa": "Pacific/Tongatapu",
    "Palikir": "Pacific/Pohnpei",
    "Port Moresby": "Pacific/Port_Moresby",
    "Port Vila": "Pacific/Efate",
    "Suva": "Pacific/Fiji",
    "Tarawa": "Pacific/Tarawa",
    "Wellington": "Pacific/Auckland",
    "Yaren": "Pacific/Nauru"
  };

  // =============================================
  // CIUDADES POR DEFECTO
  // =============================================
  const ciudadesPorDefecto = ["Londres", "Tokio", "Nueva York"];
  let misCiudades = JSON.parse(localStorage.getItem("ciudades")) || [...ciudadesPorDefecto];

  // Elementos del DOM
  const zonaRelojes = document.getElementById("zona-relojes");
  const inputCiudad = document.getElementById("input-ciudad");
  const btnAgregar = document.getElementById("btn-agregar");
  const sugerenciasLista = document.getElementById("sugerencias");
  const gameboy = document.getElementById("gameboy");
  const btnTema = document.getElementById("btn-tema");

  // =============================================
  // MODO OSCURO (Game Boy clásico / Game Boy oscuro)
  // =============================================
  if (localStorage.getItem("tema") === "oscuro") {
    gameboy.classList.add("modo-oscuro");
    btnTema.textContent = "🌙";
  } else {
    btnTema.textContent = "☀️";
  }

  btnTema.addEventListener("click", () => {
    gameboy.classList.toggle("modo-oscuro");
    const esOscuro = gameboy.classList.contains("modo-oscuro");
    btnTema.textContent = esOscuro ? "🌙" : "☀️";
    localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
  });

  // =============================================
  // LÓGICA DE RELOJES CON LUXON
  // =============================================
  function obtenerDatosZona(zonaIANA) {
    const ahora = luxon.DateTime.now().setZone(zonaIANA);
    return {
      hora: ahora.toFormat("HH:mm:ss"),
      fecha: ahora.toFormat("ccc, dd LLL yyyy"),
      esDeDia: ahora.hour >= 6 && ahora.hour < 18
    };
  }

  function renderizarRelojes() {
    zonaRelojes.innerHTML = "";

    misCiudades.forEach(ciudad => {
      const zona = zonasHorarias[ciudad] || ciudad;
      if (!zona) return;

      const { hora, fecha, esDeDia } = obtenerDatosZona(zona);
      const iconoDia = esDeDia ? "☀️" : "🌙";

      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";
      tarjeta.innerHTML = `
        <button class="btn-eliminar" data-ciudad="${ciudad}">✕</button>
        <div class="ciudad">${iconoDia} ${ciudad}</div>
        <div class="hora">${hora}</div>
        <div class="fecha">${fecha}</div>
      `;

      tarjeta.querySelector(".btn-eliminar").addEventListener("click", (e) => {
        e.stopPropagation();
        eliminarCiudad(ciudad);
      });

      zonaRelojes.appendChild(tarjeta);
    });

    localStorage.setItem("ciudades", JSON.stringify(misCiudades));
  }

  function eliminarCiudad(nombre) {
    misCiudades = misCiudades.filter(c => c !== nombre);
    renderizarRelojes();
  }

  // Función para normalizar texto (quitar tildes)
  function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function agregarCiudad(nombre) {
    const nombreLimpio = nombre.trim();
    if (!nombreLimpio) return;

    // Buscar en el mapa ignorando mayúsculas/minúsculas y tildes
    const encontrada = Object.keys(zonasHorarias).find(
      ciudad => normalizarTexto(ciudad) === normalizarTexto(nombreLimpio)
    );

    if (encontrada) {
      if (misCiudades.includes(encontrada)) {
        alert("Esa ciudad ya está en tu lista.");
        return;
      }
      misCiudades.push(encontrada);
    } else {
      // Si no es capital, comprobar si es una zona IANA válida
      if (luxon.Info.isValidIANAZone(nombreLimpio)) {
        if (misCiudades.includes(nombreLimpio)) {
          alert("Esa ciudad/zona ya está en tu lista.");
          return;
        }
        misCiudades.push(nombreLimpio);
        zonasHorarias[nombreLimpio] = nombreLimpio;
      } else {
        alert("Ciudad no encontrada. Prueba con el nombre de una capital o una zona IANA válida.");
        return;
      }
    }

    renderizarRelojes();
    inputCiudad.value = "";
    ocultarSugerencias();
  }

  // =============================================
  // AUTOCOMPLETADO Y SUGERENCIAS
  // =============================================
  function mostrarSugerencias(texto) {
    const filtro = normalizarTexto(texto.trim());
    sugerenciasLista.innerHTML = "";

    if (filtro === "") {
      ocultarSugerencias();
      return;
    }

    const coincidencias = Object.keys(zonasHorarias).filter(ciudad =>
      normalizarTexto(ciudad).includes(filtro)
    );

    if (coincidencias.length === 0) {
      ocultarSugerencias();
      return;
    }

    coincidencias.forEach(ciudad => {
      const li = document.createElement("li");
      li.textContent = ciudad;
      li.addEventListener("click", () => seleccionarSugerencia(ciudad));
      sugerenciasLista.appendChild(li);
    });

    sugerenciasLista.classList.remove("oculto");
  }

  function ocultarSugerencias() {
    sugerenciasLista.classList.add("oculto");
    sugerenciasLista.innerHTML = "";
  }

  function seleccionarSugerencia(nombre) {
    agregarCiudad(nombre);
  }

  let indiceActivo = -1;

  function actualizarActivo() {
    const items = sugerenciasLista.querySelectorAll("li");
    items.forEach(item => item.classList.remove("activo"));
    if (indiceActivo >= 0 && indiceActivo < items.length) {
      items[indiceActivo].classList.add("activo");
    }
  }

  inputCiudad.addEventListener("input", (e) => {
    mostrarSugerencias(e.target.value);
    indiceActivo = -1;
    actualizarActivo();
  });

  inputCiudad.addEventListener("keydown", (e) => {
    const items = sugerenciasLista.querySelectorAll("li");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      indiceActivo = (indiceActivo + 1) % items.length;
      actualizarActivo();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      indiceActivo = (indiceActivo - 1 + items.length) % items.length;
      actualizarActivo();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (indiceActivo >= 0 && indiceActivo < items.length) {
        seleccionarSugerencia(items[indiceActivo].textContent);
      }
    } else if (e.key === "Escape") {
      ocultarSugerencias();
      inputCiudad.blur();
    }
  });

  // Ocultar sugerencias al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".buscador-wrapper")) {
      ocultarSugerencias();
    }
  });

  // Evento para el botón Añadir
  btnAgregar.addEventListener("click", () => {
    agregarCiudad(inputCiudad.value);
  });

  // Actualizar relojes cada segundo
  setInterval(renderizarRelojes, 1000);
  renderizarRelojes();
});