export function convertStringToDate(publishedAt: string) {
        const day = new Date(publishedAt).getDate()
        const month = (new Date(publishedAt).getMonth() + 1);
        const year = new Date(publishedAt).getFullYear();
        const date = day + '/' + month + '/' + year

    return date
}