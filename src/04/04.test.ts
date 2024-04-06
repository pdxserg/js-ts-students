import {corses, CourseType} from "./04";


test("Get men older than 90years", ()=>{
	const  ages  = [18, 20, 22, 1, 100, 90, 14]

	const oldAges= ages.filter(a => a > 90)

	expect(oldAges.length).toBe(1)
	expect(oldAges[0]).toBe(100)
})

test("Get cheap corses less 160", ()=>{

	const cheapCourse = corses.filter(c => c.price < 160)

expect(cheapCourse.length).toBe(2)
	expect(cheapCourse[0].price).toBe(110)
	expect(cheapCourse[0].title).toBe("CSS")
	expect(cheapCourse[1].price).toBe(150)

})