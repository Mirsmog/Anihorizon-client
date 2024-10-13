import Dropdown from '@/components/ui/Dropdown'

export default function Search() {
	return (
		<div>
			<Dropdown
				type='checkbox'
				data={['romance', 'harem', 'isekai', 'horor', 'vampire']}
			>
				Select genre
			</Dropdown>
		</div>
	)
}
