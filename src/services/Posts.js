import { httpService } from "./HTTPService";

class Posts {
    getAll() {
        return httpService.get('posts');
    }

    createCar(post) {
        return httpService.post('posts', post)
    }

    get(id) {
        return httpService.get('posts/' + id)
    }

    edit(id, post) {
        return httpService.put('posts/'+ id, post)
    }

    delete(id) {
        return httpService.delete('posts/'+id);
    }
}

export const postsService = new Posts();