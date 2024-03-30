import {
	AlertCircle,
	Bolt,
	Bookmark,
	CalendarCheck,
	CalendarClock,
	Dices,
	Heart,
	HelpCircle,
	History,
	Home,
	ListVideo,
	LucideIcon
} from 'lucide-react'

export interface IMenuLink {
	name: string
	path: string
	Icon: LucideIcon
}

export const MENU_NAVIGATION: IMenuLink[] = [
	{
		name: 'Главная',
		path: '/',
		Icon: Home
	},
	{
		name: 'Релизы',
		path: '/home',
		Icon: CalendarCheck
	},
	{
		name: 'Расписание',
		path: '/schedule',
		Icon: CalendarClock
	},
	{
		name: 'Случайное',
		path: '/random',
		Icon: Dices
	}
]

export const MENU_COLLECTIONS: IMenuLink[] = [
	{
		name: 'Понравившиеся',
		path: '/',
		Icon: Heart
	},
	{
		name: 'Смотреть позже',
		path: '/',
		Icon: Bookmark
	},
	{
		name: 'История',
		path: '/',
		Icon: History
	},
	{
		name: 'Фэнтези',
		path: '/',
		Icon: ListVideo
	},
	{
		name: 'Топ 100',
		path: '/',
		Icon: ListVideo
	},
	{
		name: 'Зима 2024',
		path: '/',
		Icon: ListVideo
	}
]
export const MENU_OTHER: IMenuLink[] = [
	{
		name: 'Настроики',
		path: '/',
		Icon: Bolt
	},
	{
		name: 'Вопросы и ответы',
		path: '/',
		Icon: HelpCircle
	},
	{
		name: 'Отправить отзыв',
		path: '/',
		Icon: AlertCircle
	}
]
