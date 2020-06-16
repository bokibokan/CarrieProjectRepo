
export const state = () => ({
	sidebar: false,
	// user login
	// user:null
});
export const mutations = {
	toggleSidebar(state) {
		state.sidebar = !state.sidebar;
	},

	// user add
	// add(state, users) {
	// 	// state.userData.assign(data)
	// 	state.users = Object.assign({}, users)
	// 	console.log(state);
	// }

};
// export const modules = {
// 	usermodule: {
// 		state: {
// 			userData: {

// 			}
// 		},
// 		mutations: {
// 			add(state, data) {
// 				state.userData = Object.assign({}, data)
// 				console.log(state);
// 			}
// 		},
// 	}
// }


