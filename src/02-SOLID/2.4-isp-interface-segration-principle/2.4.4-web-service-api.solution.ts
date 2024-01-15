interface Post {
	title: string;
	content: string;
}

interface PostShare {
	sharePosts(post: Post): void;
}

interface PostCreator {
	createPost(post: Post): void;
}

interface Comment {
	title: string;
	content: string;
}

interface CommentCreator {
	createComment(comment: Comment): void;
}

class AdminUser implements PostShare, PostCreator, CommentCreator {
	createPost(post: Post): void {
		console.log('Admin is creating a post...');
	}

	sharePosts(post: Post): void {
		console.log('Admin is sharing a post...');
	}

	createComment(comment: Comment): void {
		console.log('Admin is creating a comment...');
	}
}

class RegularUser implements PostShare, CommentCreator {
	sharePosts(post: Post): void {
		console.log('Regular User is sharing a post...');
	}

	createComment(comment: Comment): void {
		console.log('Regular User is creating a comment...');
	}
}
