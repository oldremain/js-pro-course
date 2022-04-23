export type PostsFilterType = {
    limit: number;
    page: number;
    author?: number;
    lesson_num?: number;
    ordering?: string;
};

export enum PostsOrder {
    authorAsc = "author",
    authorDesc = "-author",
    lessonAsc = "lesson_num",
    lessonDesc = "-lesson_num",
}

//export default PostsFilterType;
