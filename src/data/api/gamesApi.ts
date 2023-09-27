import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../consts/URL";
import { Game } from "../../types/Game";
import { url } from "inspector";
import { GameInfo } from "../../types/GameInfo";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) =>
      headers.set(
        "X-RapidAPI-Key",
        "7917b2d80bmshc1a4dc128b02bf0p19547djsn29d38d9f8a9a"
      ),
  }),
  endpoints: (builder) => ({
    getGames: builder.query<Game[], { category: string; [`sort-by`]: string }>({
      query: (arg) => {
        const { category, "sort-by": sort } = arg;
        return {
          url: `games`,
          params: { category, "sort-by": sort },
        };
      },
      providesTags: () => [
        {
          type: "Games",
        },
      ],
    }),
    getGameById: builder.query<GameInfo, { id: string }>({
      query: (arg) => {
        return {
          url: "game",
          params: {
            id: arg.id,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGamesQuery, useGetGameByIdQuery } = gamesApi;
