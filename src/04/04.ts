


const  ages  = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) =>{
	return age > 90
}

const oldAges= [100]


export type CourseType={
	title: string
	price: number
}
export const corses = [
	{title: "CSS", price: 110},
	{title: "JS", price: 200},
	{title: "REACT", price: 150}
]

const cheapPredicate = (course: CourseType) => {
	return course.price < 160

}
const cheapCourse=[
	{title: "CSS", price: 110},
	{title: "REACT", price: 150}

]