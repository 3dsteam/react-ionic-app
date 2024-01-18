import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@store/services";
import { IUser } from "@models/user.ts";

export const usersApi = createApi({
    baseQuery,
    endpoints: (builder) => ({
        getUsers: builder.query<IUser, void>({
            query: () => "/users",
            transformResponse: (response: { data: IUser }) => response.data,
        }),
        postUser: builder.mutation<IUser, Partial<IUser>>({
            query: (body) => ({
                url: "/users",
                method: "POST",
                body,
            }),
            transformResponse: (response: { data: IUser }) => response.data,
        }),
    }),
});

export const { useGetUsersQuery, usePostUserMutation } = usersApi;
