

import {MansType} from "./Destructuring";




// type LessonType={
// 	title:string
// }

let props: MansType
beforeEach(() => {
	props = {
		name: "Bob",
		age: 29,
		lesson: [{title: "1"}, {title: "2"}],
		address: {
			street: {
				title: 'Nezavisimosto stret'

			}
		}
	}

})
test("", () => {

	// const age = props.age
	// const lesson = props.lesson

	const {age, lesson} = props
	expect(age).toBe(29)
	expect(lesson[0].title).toBe("1")

	const a = props.age
	const l = props.lesson
	const stretTitle = props.address.street.title

	expect(a).toBe(29)
	expect(l[0].title).toBe("1")
expect(stretTitle).toBe('Nezavisimosto stret')

})

