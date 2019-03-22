import { httpService } from "./HTTPService";

class Posts {
    getAll() {
        return httpService.get('posts');
    }

    createPost(post) {
        return httpService.post('posts', post)
    }

    get(id) {
        return httpService.get('posts/' + id + '?filter={"include": ["comments"]}')
    }

    edit(id, post) {
        return httpService.put('posts/'+ id, post)
    }

    delete(id) {
        return httpService.delete('posts/'+id);
    }

    addComment(comment, postId) {
        return httpService.post('posts/'+postId+'/comments', comment)
    }
}

export const postsService = new Posts();