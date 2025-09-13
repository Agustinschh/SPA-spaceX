import getData from '../utils/getData';

const Character = async () => {
    const id = location.hash.slice(1).toLowerCase();
    const data = await getData(id);
    
    const view = `
    <div class="Launch-detail">
        <article class="Launch-card">
            ${data?.links?.patch?.large ? `<img src="${data.links.patch.large}" alt="${data.name}" style="width: 100%; max-width: 300px; margin-bottom: 20px;">` : ''}
            <h2>${data?.name || 'Sin nombre'}</h2>
            <p><strong>Vuelo #${data?.flight_number || 'N/A'}</strong></p>
        </article>

        <article class="Launch-card">
            <h3>Información de la Misión:</h3>
            <p><strong>Fecha de Lanzamiento:</strong> ${data?.date_utc ? new Date(data.date_utc).toLocaleString() : 'N/A'}</p>
            <p><strong>Estado:</strong> ${data?.success ? '✅ Exitoso' : data?.success === false ? '❌ Fallido' : '⏳ Pendiente'}</p>
            <p><strong>Detalles:</strong> ${data?.details || 'Sin detalles disponibles'}</p>
            ${data?.failures?.length > 0 ? `<p><strong>Fallas:</strong> ${data.failures.map(f => f.reason).join(', ')}</p>` : ''}
            ${data?.links?.webcast ? `<p><strong>Webcast:</strong> <a href="${data.links.webcast}" target="_blank">Ver en YouTube</a></p>` : ''}
            ${data?.links?.article ? `<p><strong>Artículo:</strong> <a href="${data.links.article}" target="_blank">Leer más</a></p>` : ''}
        </article>
    </div>
    `;
    
    return view;
}

export default Character;