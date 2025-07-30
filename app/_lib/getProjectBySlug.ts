export async function getProjectBySlug(slug: string) {
    if (!process.env.STRAPI_API_URL || !process.env.STRAPI_API_TOKEN) {
        throw new Error("STRAPI_API_URL or STRAPI_API_TOKEN is not defined");
    }

    const res = await fetch(
        `${process.env.STRAPI_API_URL}/api/projets?filters[slug][$eq]=${slug}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
            // 👇 Pour forcer une récupération serveur à chaque requête
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        console.error("Erreur de requête Strapi:", await res.text());
        throw new Error("Erreur lors de la récupération du projet");
    }

    const json = await res.json();

    if (!json?.data || json.data.length === 0) return null;

    return json.data[0];
}
