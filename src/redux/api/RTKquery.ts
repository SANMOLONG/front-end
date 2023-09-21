import axios, * as axiosType from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig } from "axios";
import { CustomAxiosError, ErrorType } from "./api";

const instance: axiosType.AxiosInstance = axios.create({
  baseURL: "http://ec2-13-125-219-90.ap-northeast-2.compute.amazonaws.com",
});

const axiosBaseQuery =
	(): BaseQueryFn<{
		url: string;
		method: AxiosRequestConfig["method"];
		data?: AxiosRequestConfig["data"];
		types?: string;
	}> =>
	async ({ url, method, data, types }) => {
		try {
			switch (types) {
				default:
					console.log(data)
					const res = await instance({ url, method, data });
					return { data: res.data };
			}
		} catch (axiosError) {
			const err = axiosError as CustomAxiosError<ErrorType["data"]>; // 타입단언
			if (err.response.status === 404) {
				throw new Error("User not found");
			}
			return {
				error: err.response?.data.msg,
			};
		}
	};


export const rtkQuery = createApi({
	baseQuery: axiosBaseQuery(),
	tagTypes: [
		"HOMEDATA",
		"HOMEDATACOURSE"
	],
  endpoints(build) {
		return {
			getHomedate:build.query({
				query: () => ({
					url:`/api/sliderInfo?nickname=모롱이`,
					method:"get",
				}),
				providesTags: ["HOMEDATA"],
			}),
			getHomeCourseDate:build.query({
				query: ({mount}) => ({
					url:`/api/mountainInfo?mountain=${mount}`,
					method:"get",
					data:mount
				}),
				providesTags: ["HOMEDATACOURSE"],
			})
		}
  }
})

// /api/mountainInfo?mount=설악산


export const {
	useGetHomedateQuery,
	useGetHomeCourseDateQuery
} = rtkQuery