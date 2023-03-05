export const getLinks = () => {

    return fetch('/src/services/mocks/landing1.json')
        .then((res) => res.json())
        .then((linksData) => {
            // Format response.

            return linksData.map(linkData => ({
                title: linkData.title,
                image: linkData.image_url,
                url: linkData.url,
                id: linkData.id,
                icon: linkData.icon
            }))
        })
        .catch((err) => {
            throw new Error(err);
        });
}