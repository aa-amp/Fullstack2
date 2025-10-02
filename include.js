async function includeHTML(id, file) {
    const el = document.getElementById(id);
    if (el) {
        try {
            const resp = await fetch(file);
            if (resp.ok) {
                el.innerHTML = await resp.text();
            } else {
                el.innerHTML = "Error cargando " + file;
            }
        } catch (e) {
            el.innerHTML = "Error cargando " + file;
        }
    }
}

// Incluir header y footer en todas las páginas
includeHTML("header", "header.html");
includeHTML("footer", "footer.html");
