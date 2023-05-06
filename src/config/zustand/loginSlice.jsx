import zukeeper from "zukeeper";

export const loginSlice = zukeeper((set) => ({
	isLogin: false,
	setLogin: (state) => set(() => ({ isLogin: state })),
}));
window.store = loginSlice;
