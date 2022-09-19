export class userAlbums {
    constructor(userId = 2) {
        this.albums_URL = 'https://jsonplaceholder.typicode.com/users/1/albums';
        this.photos_URL = `https://jsonplaceholder.typicode.com/albums/${userId}/photos`;
    }
    // getUserAlbums() {
    //     const result = fetch(this.albums_URL);
    //     result
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Ошибка получения альбомов');
    //             }
    //             return response.json();
    //         })
    //         .then((albums) => {
    //             console.log('albums', albums);
    //             albums.forEach((album) => {
    //                 // console.log('album', album.title);
    //             })
    //         })
    // }
    getUserPhotos() {
        const result = fetch(this.photos_URL);
        result 
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка получения фотографий');
                }
                return response.json();
            })
            .then((photos) => {
                console.log('photos', photos);
                photos.forEach((photo) => {
                    // console.log('photo', photo.thumbnailUrl);
                })
            })
    }
}