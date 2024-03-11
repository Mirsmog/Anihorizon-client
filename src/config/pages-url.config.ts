class PUBLIC {
	private root = '/'
	HOME = `${this.root}home`
	LOGIN = `${this.root}auth/login`
	REGISTER = `${this.root}auth/register`
	RESET_PASSWORD = `${this.root}auth/new-password`
}

export const PUBLIC_PAGES = new PUBLIC()
