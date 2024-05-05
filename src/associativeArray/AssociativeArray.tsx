
export type UsersType={
	id: string
	name: string
	isStudent: boolean
}
export function toAssociativeArray(users:[]) {
	const associativeArray = {};
	users.forEach((user) => {
		associativeArray[user.id] = user;
	});
	return associativeArray;
}

// const associativeArray = {};
// const somefunk = usersArr.forEach => {
// 	associativeArray[item.id] = item;
// });


