

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content dark:bg-gray-700 mt-12">
  <aside>
    <h1 className="text-4xl font-bold text-primary">E-Shop</h1>
    <p className="text-sm dark:text-white">Lorem ipsum dolor sit amet <br />  consectetur  adipisicing elit. Nobis!</p>
    <p className="text-sm dark:text-white">Made With By The Coding journey</p>
  </aside> 
  <nav>
    <h6 className="text-lg font-bold dark:text-white">Important Links</h6>
    <a href="/" className="link link-hover dark:invert">Home</a>
    <a href="/about" className="link link-hover dark:invert">About</a>
    <a href="/container" className="link link-hover dark:invert">Contact</a>
    <a href="/blog" className="link link-hover dark:invert">Blog</a>
  </nav> 
  <nav>
    <h6 className="text-lg font-bold dark:text-white">Quick Links</h6> 
    <a className="link link-hover dark:invert">About us</a>
    <a className="link link-hover dark:invert">Contact</a>
    <a className="link link-hover dark:invert">Jobs</a>
    <a className="link link-hover dark:invert">Press kit</a>
  </nav> 
  <nav>
    <h6 className="text-lg font-bold dark:text-white">Address</h6> 
    <a className="link link-hover dark:invert">Kushtia, kataikhana Moor</a>
    <a className="link link-hover dark:invert">+880 1705****31</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;