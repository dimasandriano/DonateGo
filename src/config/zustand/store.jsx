import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginSlice } from "./LoginSlice";

export const store = create(
	persist(
		(...a) => ({
			...loginSlice(...a),
		}),
		{ name: "store" }
	)
);
