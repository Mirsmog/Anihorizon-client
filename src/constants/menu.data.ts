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
	btn?: boolean
}

export const MENU_NAVIGATION: IMenuLink[] = [
	{
		name: 'Главная',
		path: '/home',
		Icon: Home
	},
	{
		name: 'Релизы',
		path: '/releases',
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
		Icon: Dices,
		btn: true
	}
]

export const MENU_COLLECTIONS: IMenuLink[] = [
	{
		name: 'Понравившиеся',
		path: '/user/liked',
		Icon: Heart
	},
	{
		name: 'Смотреть позже',
		path: '/user/bookmarks',
		Icon: Bookmark
	},
	{
		name: 'История',
		path: '/user/history',
		Icon: History
	}
]
export const MENU_OTHER: IMenuLink[] = [
	{
		name: 'Настроики',
		path: '/settings',
		Icon: Bolt
	},
	{
		name: 'Вопросы и ответы',
		path: '/faq',
		Icon: HelpCircle
	},
	{
		name: 'Отправить отзыв',
		path: '/feedback',
		Icon: AlertCircle
	}
]
