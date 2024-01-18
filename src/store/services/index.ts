import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "@store/index.ts";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.data.token;
        if (token) headers.set("authorization", `Bearer ${token}`);
        return headers;
    },
});
