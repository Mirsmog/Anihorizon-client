export default function Home() {
	return (
		<div>
			{[...Array(100)].map((item, _) => (
				<div key={_}>{_ + 1}</div>
			))}
		</div>
	)
}
