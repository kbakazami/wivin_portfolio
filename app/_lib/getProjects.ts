export async function getProjects() {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/projets?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        cache: 'no-store',
    });


    if (!res.ok) throw new Error("Erreur de récupération des projets");
    const data = await res.json();
    return data.data;
}
