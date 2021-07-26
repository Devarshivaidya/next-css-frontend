import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <span id="site-name">Demo Website</span>
        </Link>
        <span id="pages">
          <Link href="/archives">Articles</Link>
          <Link href="/about">About</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
