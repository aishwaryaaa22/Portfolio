export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 fixed w-full z-10">
      <h1 className="text-2xl font-bold text-indigo-400">Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-indigo-400">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
    </nav>
  );
}