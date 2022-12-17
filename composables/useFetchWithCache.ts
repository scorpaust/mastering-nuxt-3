import { StorageSerializers } from "@vueuse/core";

export default async <T>(url: string) => {
    /* const { data, error } = await useFetch(
        `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    ); */

    const cached = useSessionStorage<T>(
        url,
        null,
        {
            serializer: StorageSerializers.object
        }
    );


    if (!cached.value) {
        const { data, error } = await useFetch<T>(url, {
            lazy: true
        });

        if (error.value) {
            throw createError({
                ...error,
                statusMessage: `Could not fetch ldata from ${url}.`
            })
        }

        cached.value = data.value as T;
    } else {
        console.log(
            `Getting value from cache for ${url}`
        );
    }

    return cached;
}