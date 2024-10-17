import MainLayout from '@/components/MainLayout'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<MainLayout>
			<Header />
			<Sidebar />
			<Content>{children}</Content>
		</MainLayout>
	)
}
