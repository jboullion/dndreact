// Used with reducers to immutably set new data into the old state
export const updateObject = (oldObject, updatedValues) => {
	return {
		...oldObject,
		...updatedValues
	}
}