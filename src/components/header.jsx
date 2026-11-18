function Header() {
    const navigation = [
        { label: 'Dashboard', href: '#dashboard' },
        { label: 'Film', href: '#movie-catalog' },
        { label: '+ Log', href: '#movie-form' },
        { label: 'Search', href: '#search' }
    ];

    return (
        <header id="mainHeader">
            <a
                id="appBranding"
                className="navbar-brand"
                href="#dashboard"
            >
                <span className="brand-mark" aria-hidden="true">
                    ✦
                </span>

                <span>infoMovies</span>
            </a>

            <nav aria-label="Navigasi utama">
                {navigation.map((item, index) => (
                    <a
                        key={item.href}
                        className="nav-link"
                        href={item.href}
                        aria-current={index === 0 ? 'page' : undefined}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;