import { Link, useLocation } from 'react-router';

export function PageNav() {
  const location = useLocation();

  const navItems = [
    { path: '/donate', label: 'Donate' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="flex gap-2 mb-8">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-1 py-3 rounded-lg text-center transition-all active:scale-95 ${
              isActive
                ? 'text-white'
                : 'text-[var(--brand-primary)]'
            }`}
            style={{
              backgroundColor: isActive ? 'var(--brand-secondary)' : 'var(--bg-subtle)',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
