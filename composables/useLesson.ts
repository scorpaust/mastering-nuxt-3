import { LessonWithPath } from '~~/types/course';

export default async (
  chapterSlug: string,
  lessonSlug: string
) =>
  useFetchWithCache<LessonWithPath>(
    `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );