
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import type { Action, PayloadAction } from '@reduxjs/toolkit'


type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
    return action.type === HYDRATE
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/charmander' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
            console.log('hydrate');
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        fetchCount: builder.query({
            query: () => '',
            transformResponse: () => {
                return { data: {id:1, name:'aharry', category:'fantsy', 'description': 'aaa'} }
            }
        })
    }),
})

export const {
    useFetchCountQuery,
    util: { getRunningQueriesThunk },
} = api;

// export endpoints for use in SSR
export const { fetchCount } = api.endpoints;