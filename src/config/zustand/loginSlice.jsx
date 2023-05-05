export const loginSlice = (set) => ({
	isLogin: false,
	setLogin: (state) => set(() => ({ isLogin: !state })),
});
